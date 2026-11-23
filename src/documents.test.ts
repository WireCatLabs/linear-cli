import { rmSync } from "node:fs"
import { memoryKeyring } from "@wirecat/cli-base"
import { documentCommandsContract } from "@wirecat/cli-core/documents/testing"
import { pacePathFor } from "@wirecat/cli-core/sends"
import { searchAll } from "@wirecat/cli-core/services"
import { openStore, storePath } from "@wirecat/cli-core/store"
import { afterEach, describe, expect, it } from "vitest"
import { WORDS } from "./commands/documents.js"
import { IDENTITY } from "./identity.js"
import { createProgram } from "./program.js"
import { FAKE_API_TOKEN } from "./testing/fake-api.js"
import { type FakeLinearDocuments, fakeLinearDocuments } from "./testing/fake-documents.js"
import { runCli } from "./testing/harness.js"

const fakes: FakeLinearDocuments[] = []

afterEach(() => {
  expect(fakes.splice(0).flatMap((fake) => fake.refusals)).toEqual([])
})

const ISSUE = {
  id: "issue-1",
  identifier: "ENG-1",
  title: "Zeppelin launch checklist",
  description: "what the zeppelin launch needs",
  url: "https://linear.app/fake/issue/ENG-1",
  createdAt: "2026-10-01T00:00:00.000Z",
  updatedAt: "2026-10-01T00:00:00.000Z",
  archivedAt: null,
  priority: 0,
}

// The tracker's issues: one row, cut to what each call selects.
const issues = ({ selection }: { selection?: unknown }) => {
  const asked = (selection as { nodes?: Record<string, unknown> } | undefined)?.nodes ?? {}
  const row = Object.fromEntries(Object.entries(ISSUE).filter(([key]) => key in asked))
  return { data: { nodes: [row], pageInfo: { hasNextPage: false, endCursor: null } } }
}

/** A workspace with a project document, a document on an issue, and one issue; profile personal signed in. */
const signedIn = async () => {
  const linear = fakeLinearDocuments({ answers: { issues } })
  fakes.push(linear)
  linear.addProject("p-1", "Roadmap")
  linear.addDocument("d-1", {
    title: "Zeppelin plan",
    content: "# Plan\n\nthe zeppelin flies in March",
    project: "p-1",
  })
  linear.addDocument("d-2", { title: "Spec", content: "issue spec", issue: "issue-1" })
  const keyring = memoryKeyring()
  // A sync of issues and documents sends more than the pace's burst, and the rest would wait 1.5 s each for real.
  const service = {
    fetch: (input: string | URL | Request, init?: RequestInit) => {
      rmSync(pacePathFor(IDENTITY, "personal", process.env), { force: true })
      return linear.fetch(input, init)
    },
  }
  const run = (argv: string[], env?: NodeJS.ProcessEnv) =>
    runCli(["personal", ...argv, "--json"], { keyring, service, ...(env ? { env } : {}) })
  const started = await runCli(["personal", "session", "start", "--json"], {
    keyring,
    service,
    stdin: FAKE_API_TOKEN,
  })
  expect(started.code, started.err).toBe(0)
  return { linear, run }
}

describe("one linear sync copies issues and the documents of the chosen projects", () => {
  it("skips the documents while no folder is chosen", async () => {
    const { run, linear } = await signedIn()
    const synced = await run(["sync"])
    expect(synced.code, synced.err).toBe(0)
    expect(synced.json()).toMatchObject({ item: { documents: { skipped: "no folders chosen" } } })
    expect(linear.calls.filter((call) => call.operation === "documents")).toEqual([])
  })

  it("syncs both, and search all finds the document and the issue under the one Linear account", async () => {
    const { run } = await signedIn()
    expect((await run(["folders", "add", "linear:all"])).code).toBe(0)
    const synced = await run(["sync"])
    expect(synced.code, synced.err).toBe(0)
    const item = (synced.json() as { item: Record<string, unknown> }).item
    expect(item).toMatchObject({ complete: true, documents: { complete: true, saved: 2 } })
    expect((item.synced as { error?: string }[]).filter((one) => one.error)).toEqual([])
    const listed = await run(["documents", "list"])
    expect(JSON.stringify(listed.json())).toContain("Zeppelin plan")
    const store = await openStore({ path: storePath(process.env), readOnly: true })
    try {
      const found = await searchAll(
        store,
        { provider: "linear", account: "user-1" },
        {
          text: "zeppelin",
          limit: 20,
          exact: true,
        },
      )
      const kinds = found.items.map((hit) => ("kind" in hit ? `${hit.provider}:${hit.kind}` : "meeting"))
      expect(kinds).toEqual(expect.arrayContaining(["linear:document", "linear:issue"]))
    } finally {
      await store.close()
    }
  })
})

it("chooses, lists and drops folders, pages the copy, and refuses --limit on the one sync", async () => {
  const { run } = await signedIn()
  expect((await run(["folders", "add", "p-1"])).code).toBe(0)
  expect(JSON.stringify((await run(["folders", "list"])).json())).toContain("Roadmap")
  expect((await run(["sync"])).code).toBe(0)
  const listed = await run(["documents", "list", "--limit", "1", "--page", "1"])
  expect(JSON.stringify(listed.json())).toContain("Zeppelin plan")
  const found = await run(["search", "zeppelin", "--exact", "--limit", "5", "--page", "1"])
  expect(found.code, found.err).toBe(0)
  expect(JSON.stringify(found.json())).toContain("Zeppelin plan")
  // It would bound the documents part only.
  const limited = await run(["sync", "--limit", "1"])
  expect(limited.code).not.toBe(0)
  expect(limited.json()).toMatchObject({ error: { code: "validation_error" } })
  expect(limited.err).toContain("--max-pages bounds both parts")
  expect((await run(["folders", "remove", "p-1"])).code).toBe(0)
  expect(JSON.stringify((await run(["folders", "list"])).json())).not.toContain("Roadmap")
})

it("marks document names and text in a scheduled agent's run", async () => {
  const { run } = await signedIn()
  await run(["folders", "add", "linear:all"])
  await run(["sync"])
  const MARK = "0123456789abcdef"
  const locked = { WCLINEAR_READ_ONLY: "1", WCLINEAR_UNTRUSTED_MARK: MARK }
  const marked = (text: string) => new RegExp(`^⟦untrusted:${MARK} source=[^⟧]+⟧${text}⟦/untrusted:${MARK}⟧$`)
  const listed = (await run(["documents", "list"], locked)).json() as { items: { id: string; name: string }[] }
  expect(listed.items.find((one) => one.id === "d-1")?.name).toMatch(marked("Zeppelin plan"))
  const shown = (await run(["documents", "show", "d-1"], locked)).json() as { item: { text: string } }
  expect(shown.item.text).toMatch(marked("[\\s\\S]*zeppelin flies in March[\\s\\S]*"))
})

it("refuses the documents of another member than the tracker's account, and stores none", async () => {
  const { run, linear } = await signedIn()
  await run(["folders", "add", "linear:all"])
  linear.signInAs("user-2")
  const synced = await run(["sync"])
  expect(synced.code, synced.err).toBe(0)
  expect(synced.json()).toMatchObject({
    item: { documents: { error: { reason: "documents.other-account" } } },
    meta: { complete: false },
  })
  // Refused before the walk: no document was read, so none can be stored under either account.
  expect(linear.calls.filter((call) => call.operation === "documents" || call.operation === "document")).toEqual([])
})

describe("documentCommandsContract over linear's mounted commands", () => {
  for (const c of documentCommandsContract(async () => {
    const { run } = await signedIn()
    await run(["folders", "add", "linear:all"])
    return {
      program: createProgram(),
      words: WORDS,
      run: async (argv) => {
        const answer = await run(argv)
        return { exit: answer.code, stdout: answer.out }
      },
      document: "d-1",
      word: "zeppelin",
    }
  }))
    it(c.name, c.run)
})
