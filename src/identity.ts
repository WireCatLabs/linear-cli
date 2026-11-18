import type { ManifestIdentity } from "@wirecat/cli-base/wcat/manifest"
import type { AppIdentity } from "@wirecat/cli-core/cli"
import { VERSION } from "./version.js"

export const SERVICE = "Linear"

export const PACKAGE = "@wirecat/linear-cli"

export const IDENTITY: AppIdentity = {
  command: "linear",
  appName: "linear-cli",
  envPrefix: "WCLINEAR",
  description: "a new WireCat CLI, started from cli-template",
  version: VERSION,
  issues: "https://github.com/WireCatLabs/linear-cli/issues/new",
  messenger: false,
  contentLanguages: ["en"],
}

// What `wcat` and WireCat Desktop show before the tool is installed: rewrite the tagline and the sign-in texts for
// yours. The bin passes it to wcatStart before anything else loads; src/wcat.ts adds the permission keys.
export const DESKTOP = {
  ...IDENTITY,
  docs: "https://github.com/WireCatLabs/linear-cli#readme",
  hosts: ["api.linear.app"],
  tagline: "Linear issues, searchable with your other WireCat data",
  syncs: "your issues, projects and comments",
  signIn: {
    gives: "Lets your agent read your Linear issues, projects and comments, and change them when you allow it.",
    asks: "A personal API key from Linear's Settings → Security & access.",
  },
} satisfies ManifestIdentity

export const SKILL = new URL("../skills/linear-cli/SKILL.md", import.meta.url)
