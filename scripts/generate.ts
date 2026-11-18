import { execFileSync } from "node:child_process"
import { existsSync } from "node:fs"
import { join, resolve } from "node:path"
import {
  coverageGenerator,
  definitionsGenerator,
  generate,
  manifestGenerator,
  typesGenerator,
  valibotGenerator,
  writeArtifacts,
} from "@wirecat/cli-base/codegen"
import { specModel } from "./spec-model.ts"

// The service's API description → src/generated/ and docs/dev/API_COVERAGE.md. Each correction below is read from
// the service's documentation, never guessed; cli-base docs/standards/kit-surface.md says what each one does.
const root = resolve(import.meta.dirname, "..")
// A fresh CLI has no src/generated/ yet and cannot build without it, so build runs this with --if-missing first.
if (process.argv.includes("--if-missing") && existsSync(join(root, "src/generated/manifest.ts"))) process.exit(0)
const { model, notes } = await specModel(root)
const artifacts = generate(
  model,
  [
    typesGenerator({ path: "src/generated/types.ts" }),
    valibotGenerator({ path: "src/generated/schemas.ts", typesImport: "./types.js" }),
    manifestGenerator({ path: "src/generated/manifest.ts" }),
    definitionsGenerator({ path: "src/generated/definitions.ts" }),
    coverageGenerator({
      path: "docs/dev/API_COVERAGE.md",
      title: "API coverage",
      command: (operation) => `linear <profile> api ${operation.command}`,
    }),
  ],
  {
    banner: ["Source: spec/linear/, checked against provenance.json", "Run: pnpm generate"],
    // A query reads and a mutation writes; one named *Delete or *Archive deletes. Lists page by Relay connections.
    overrides: {},
    readingPosts: false,
    names: { fromPath: true },
    permissions: { group: "linear", deletingFlags: [] },
    pagination: true,
    // A GraphQL schema names no sign-in. Linear's docs send a personal API key as it is, with no Bearer:
    // https://linear.app/developers/graphql#personal-api-keys
    auth: {
      securitySchemes: { key: { type: "apiKey", in: "header", name: "Authorization" } },
      security: [{ key: [] }],
      reason: "Linear's docs send a personal API key in Authorization with no Bearer",
    },
  },
)
const coverage = artifacts.find((artifact) => artifact.path === "docs/dev/API_COVERAGE.md")
if (coverage && notes.length)
  coverage.content += ["", "## Spec corrections", "", ...notes.map((n) => `- ${n}`), ""].join("\n")
const format = (path: string, content: string) =>
  path.endsWith(".ts")
    ? execFileSync(
        process.execPath,
        [`${root}/node_modules/@biomejs/biome/bin/biome`, "check", "--write", `--stdin-file-path=${path}`],
        { cwd: root, encoding: "utf8", input: content, maxBuffer: 64 * 1024 * 1024 },
      )
    : content
const check = process.argv.includes("--check")
const stale = writeArtifacts(artifacts, { root, check, format })
if (check && stale.length) {
  process.stderr.write(`Generated files are stale: ${stale.join(", ")}; run pnpm generate\n`)
  process.exitCode = 1
}
