import {
  type Configuration,
  commandPermissions,
  serviceApiOperations,
  serviceApiPermissions,
  settingsFor,
} from "@wirecat/cli-core/cli"
import { TRACKER_WRITE_EXTRA_KEYS, trackerAlsoChecks } from "@wirecat/cli-core/tracker"
import * as manifest from "./generated/manifest.js"
import { IDENTITY } from "./identity.js"

/** Each command is checked against its own path (`notes.list`); add the keys a command checks inside itself. */
// The keys a delete or a share checks come from `permissions` in scripts/generate.ts. The operations the api group
// cannot offer are left out: one that answers with a credential (the CLI signs in through `session`) and a body it
// cannot send, such as a multipart form.
export const API = {
  manifest: { ...manifest, operations: serviceApiOperations(manifest).offered },
  service: "Linear",
}

const shared = serviceApiPermissions(API)
// An issues write also checks its operation's api key, so --dry-run names it beside the command's own.
const API_KEYS = { create: "api.issue-create", update: "api.issue-update", comment: "api.comment-create" } as const
const trackerKeys = trackerAlsoChecks((one) => [API_KEYS[one]])
export const permissions = commandPermissions({
  ...shared,
  extra: [...(shared.extra ?? []), ...TRACKER_WRITE_EXTRA_KEYS],
  alsoChecks: (path) => [...trackerKeys(path), ...(shared.alsoChecks?.(path) ?? [])],
})

export const configuration: Configuration = settingsFor(IDENTITY, { permissions })
