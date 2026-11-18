import { resolve } from "node:path"
import { syncGraphql } from "@wirecat/cli-base/codegen"

// Linear answers introspection without a key.
await syncGraphql({
  url: "https://api.linear.app/graphql",
  dir: resolve(import.meta.dirname, "../spec/linear"),
})
process.stderr.write("The GraphQL schema is refreshed; review its diff, then run pnpm generate\n")
