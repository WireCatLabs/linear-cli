import { CliError } from "@wirecat/cli-base"
import { retrying } from "@wirecat/cli-base/http"
import { baseContext, recalledAccount, serviceApiCall, serviceApiWriter } from "@wirecat/cli-core/cli"
import { openCrmStore } from "@wirecat/cli-core/crm/cli"
import { Pacer, pacePathFor } from "@wirecat/cli-core/sends"
import type { MessageStore } from "@wirecat/cli-core/store"
import {
  addTrackerCommands,
  TRACKER_WRITES,
  type TrackerRun,
  trackerSourceFromManifest,
  trackerWriterFromManifest,
} from "@wirecat/cli-core/tracker"
import { Command } from "commander"
import { API, configuration } from "../config.js"
import { contextOf, PACE, tokenOf } from "../context.js"
import { HOOK_OPTIONS, SOURCE } from "../generated/wirecat-config.js"
import { IDENTITY } from "../identity.js"
import { API_OPTIONS, serviceFetch } from "./api.js"
import { linearDocuments } from "./documents.js"

// cli-core seeds linear as a tracker in its registry, so the store gets no provider entry from here.
const openStore = async (env: NodeJS.ProcessEnv, { readOnly = false } = {}): Promise<MessageStore> => {
  const { ensureSqlite } = await import("@wirecat/cli-core/sqlite-runtime")
  await ensureSqlite()
  const { openStore: open, storePath } = await import("@wirecat/cli-core/store")
  return open({
    path: storePath(env),
    env,
    command: IDENTITY.command,
    version: IDENTITY.version,
    ...(readOnly ? { readOnly } : {}),
  })
}

// The account is the one `session start` checked the token against; the store keeps each account's rows apart.
const accountOf = (command: Command) => {
  const { env, profile } = contextOf(command)
  const account = recalledAccount(IDENTITY, SOURCE.provider, profile, env)
  if (!account)
    throw new CliError(
      "authentication_error",
      `${profile} is not signed in; run ${IDENTITY.command} ${profile} session start`,
      { reason: "auth.missing" },
    )
  return account
}

// Every write goes through the api group's own write path, with its keys: never a second door.
const write = serviceApiWriter(API_OPTIONS)

const open = async (command: Command, { readOnly }: { readOnly: boolean }): Promise<TrackerRun> => {
  const { env, profile, environment } = contextOf(command)
  const { store, account } = await openCrmStore({
    app: IDENTITY,
    env,
    profile,
    readOnly,
    provider: SOURCE.provider,
    open: openStore,
    account: () => accountOf(command),
  })
  const fetch = retrying(serviceFetch(environment), { pacer: new Pacer(pacePathFor(IDENTITY, profile, env), PACE) })
  const call = serviceApiCall({ manifest: API.manifest, service: API.service, fetch, token: () => tokenOf(command) })
  let source: ReturnType<typeof trackerSourceFromManifest> | undefined
  return {
    account,
    store,
    source: () => (source ??= trackerSourceFromManifest(SOURCE, { api: API.manifest, call, ...HOOK_OPTIONS })),
    writes: (invoked) => ({
      writer: trackerWriterFromManifest(SOURCE, { api: API.manifest, write, command: invoked }),
      app: IDENTITY,
      env,
      settings: () => baseContext(invoked, configuration.resolveSettings).settings,
    }),
    close: () => store.close(),
  }
}

/**
 * cli-core's tracker commands over the source wirecat.config.ts describes (sync, issues, the lists and the writes),
 * and its documents commands, whose sync runs as the second part of the tracker's one `sync`.
 */
export const trackerCommands = (): Command[] => {
  const library = linearDocuments()
  const holder = new Command(IDENTITY.command)
  addTrackerCommands(holder, { app: IDENTITY, open, writes: TRACKER_WRITES, documents: library.sync })
  return [...library.commands, ...holder.commands]
}
