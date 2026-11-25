import { tmpdir } from "node:os"
import { join } from "node:path"
import { memoryKeyring } from "@wirecat/cli-base"
import { FAKE_MANIFEST_TOKEN } from "@wirecat/cli-core/crm/testing"
import { openStore } from "@wirecat/cli-core/store"
import { syncTracker } from "@wirecat/cli-core/tracker"
import { trackerManifestFake, trackerManifestFixture } from "@wirecat/cli-core/tracker/testing"
import { expect, it } from "vitest"
import { API } from "./config.js"
import { definitions } from "./generated/definitions.js"
import { HOOK_OPTIONS, SOURCE } from "./generated/wirecat-config.js"
import { runCli } from "./testing/harness.js"

const DAY = 86_400_000

const setup = async () => {
  const keyring = memoryKeyring()
  const fake = trackerManifestFake(SOURCE, { api: API.manifest, definitions })
  // Two rows of each kind fit one page, and the sync writes the store for each page: three rows were too slow for CI.
  for (const rows of Object.values(fake.rows)) rows?.splice(2)
  const cli = async (...args: string[]) => {
    const ran = await runCli(["personal", ...args, "--json"], { keyring, service: fake })
    expect(ran.code, ran.err).toBe(0)
    return ran.json() as { items: Record<string, unknown>[]; item: Record<string, unknown> }
  }
  const started = await runCli(["personal", "session", "start", "--json"], {
    keyring,
    service: fake,
    stdin: FAKE_MANIFEST_TOKEN,
  })
  expect(started.code, started.err).toBe(0)
  const ids = async (...query: string[]) =>
    (await cli("issues", "list", ...query)).items.map((one) => one.external_id).sort()
  const row = (kind: "issue" | "state", id: string) =>
    fake.rows[kind]?.find((one) => one.id === id) as Record<string, unknown>
  return { fake, cli, ids, row }
}

it("copies Linear's cycles as sprints, narrows issues by their cycle, and keeps a Duplicate state", async () => {
  const { fake, cli, ids, row } = await setup()
  row("issue", "issue-2").cycle = null
  fake.touch("issue", "issue-2")
  row("state", "state-1").type = "duplicate"
  fake.touch("state", "state-1")
  await cli("sync")

  const sprints = (await cli("sprints", "list")).items
  expect(sprints.map((one) => one.external_id).sort()).toEqual(["sprint-1", "sprint-2"])
  expect(sprints.find((one) => one.external_id === "sprint-1")).toMatchObject({ number: 1, team: "team-1" })
  expect(await ids("sprint:sprint-1")).toEqual(["issue-1"])
  expect(await ids("sprint:none")).toEqual(["issue-2"])

  expect((await cli("states", "list")).items.map((one) => one.type)).toContain("duplicate")
  expect(await ids("type:duplicate")).toEqual(["issue-1", "issue-2"])
  expect(fake.refusals).toEqual([])
})

it("drops an issue moved to the trash at the daily pass, and brings it back with its comments once restored", async () => {
  const fixture = trackerManifestFixture(SOURCE, { api: API.manifest, definitions, ...HOOK_OPTIONS })
  const { fake } = fixture
  for (const rows of Object.values(fake.rows)) rows?.splice(2)
  // Only the kinds the case reads: each kind is several store writes a sync, and all eight were too slow for CI.
  const source = Object.create(fixture.source, {
    traits: { value: { ...fixture.source.traits, kinds: ["issue", "comment"] } },
  }) as typeof fixture.source
  const store = await openStore({ path: join(tmpdir(), "trash.db") })
  const account = { provider: "linear", account: "user-1" } as const
  let now = Date.parse("2026-11-25T10:00:00Z")
  const sync = async () => {
    now += 2 * DAY
    await syncTracker(source, store, account, { now })
  }
  const live = async () => (await store.tracker.list(account, "issue")).items.map((one) => one.record.externalId).sort()
  const comments = async () => (await store.tracker.list(account, "comment")).items.length

  await sync()
  expect(await comments()).toBe(2)
  fake.trash("issue", "issue-1")
  await sync()
  expect(await live()).toEqual(["issue-2"])
  expect(await comments()).toBe(0)

  const row = fake.rows.issue?.find((one) => one.id === "issue-1") as Record<string, unknown>
  Object.assign(row, { trashed: null, archivedAt: null })
  await sync()
  expect(await live()).toEqual(["issue-1", "issue-2"])
  expect(await comments()).toBe(2)
  expect(fake.refusals).toEqual([])
  await store.close()
})
