import { memoryKeyring } from "@wirecat/cli-base"
import { FAKE_MANIFEST_TOKEN } from "@wirecat/cli-core/crm/testing"
import { trackerManifestFake } from "@wirecat/cli-core/tracker/testing"
import { afterEach, expect, it, vi } from "vitest"
import { API } from "./config.js"
import { definitions } from "./generated/definitions.js"
import { SOURCE } from "./generated/wirecat-config.js"
import { runCli } from "./testing/harness.js"

const DAY = 86_400_000

afterEach(() => {
  vi.useRealTimers()
})

const setup = async () => {
  const keyring = memoryKeyring()
  const fake = trackerManifestFake(SOURCE, { api: API.manifest, definitions })
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
  return { fake, cli, ids }
}

it("copies Linear's cycles as sprints, and narrows issues by their cycle", async () => {
  const { fake, cli, ids } = await setup()
  const issue = fake.rows.issue?.find((one) => one.id === "issue-2") as { cycle: unknown }
  issue.cycle = null
  fake.touch("issue", "issue-2")
  await cli("sync")
  const sprints = (await cli("sprints", "list")).items
  expect(sprints.map((one) => one.external_id).sort()).toEqual(["sprint-1", "sprint-2", "sprint-3"])
  expect(sprints.find((one) => one.external_id === "sprint-1")).toMatchObject({ number: 1, team: "team-1" })
  expect(await ids("sprint:sprint-1")).toEqual(["issue-1", "issue-3"])
  expect(await ids("sprint:none")).toEqual(["issue-2"])
  expect(fake.refusals).toEqual([])
})

it("keeps a Duplicate state and its issues", async () => {
  const { fake, cli, ids } = await setup()
  const state = fake.rows.state?.[0] as { type: string }
  state.type = "duplicate"
  fake.touch("state", "state-1")
  await cli("sync")
  expect((await cli("states", "list")).items.map((one) => one.type)).toContain("duplicate")
  expect(await ids("type:duplicate")).toEqual(["issue-1", "issue-2", "issue-3"])
  expect(fake.refusals).toEqual([])
})

it("drops an issue moved to the trash at the daily pass, and brings it back once restored", async () => {
  vi.useFakeTimers({ toFake: ["Date"], shouldAdvanceTime: true })
  const { fake, cli, ids } = await setup()
  await cli("sync")
  const comments = async () => ((await cli("issues", "show", "issue-1")).item.comments as unknown[]).length
  expect(await comments()).toBe(3)
  fake.trash("issue", "issue-1")
  await cli("sync")
  expect(await ids()).toContain("issue-1")

  vi.setSystemTime(Date.now() + 2 * DAY)
  await cli("sync")
  expect(await ids()).not.toContain("issue-1")
  expect((await cli("issues", "show", "issue-1")).item).toMatchObject({ deleted: true, comments: [] })

  const row = fake.rows.issue?.find((one) => one.id === "issue-1") as Record<string, unknown>
  Object.assign(row, { trashed: null, archivedAt: null })
  vi.setSystemTime(Date.now() + 2 * DAY)
  await cli("sync")
  expect(await ids()).toContain("issue-1")
  expect(await comments()).toBe(3)
  expect(fake.refusals).toEqual([])
})
