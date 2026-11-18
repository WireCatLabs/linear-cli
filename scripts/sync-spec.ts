import { resolve } from "node:path"
import { syncGraphql } from "@wirecat/cli-base/codegen"

// SAMPLE: the endpoint; a service that answers introspection only when signed in takes `headers` read from the
// keyring here, never written. The made-up Example Comments address never resolves.
await syncGraphql({
  url: "https://api.linear.app/graphql",
  dir: resolve(import.meta.dirname, "../spec/linear"),
})
process.stderr.write("The GraphQL schema is refreshed; review its diff, then run pnpm generate\n")
