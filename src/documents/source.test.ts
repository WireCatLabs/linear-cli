import { mkdtempSync } from "node:fs"
import { tmpdir } from "node:os"
import { join } from "node:path"
import { CliError, isCliError } from "@wirecat/cli-base"
import { serviceApiCall } from "@wirecat/cli-core/cli"
import { syncDocuments } from "@wirecat/cli-core/documents"
import { documentProfile, parseDocumentManifest } from "@wirecat/cli-core/documents/cli"
import { type DocumentFaultRun, documentSourceContract } from "@wirecat/cli-core/documents/testing"
import { afterEach, describe, expect, it } from "vitest"
import { API } from "../config.js"
import { IDENTITY } from "../identity.js"
import { FAKE_API_TOKEN } from "../testing/fake-api.js"
import { type FakeLinearDocuments, fakeLinearDocuments } from "../testing/fake-documents.js"
import { DOCUMENT_MANIFEST } from "./manifest.js"
import { ELSEWHERE, isFolder, type LinearFile, linearDocumentSource, ROOT } from "./source.js"

const HOUR = 60 * 60_000
const fakes: FakeLinearDocuments[] = []

afterEach(() => {
  // A call the fake refused is one the schema refuses, or one the fake does not model: either would mislead a test.
  expect(fakes.splice(0).flatMap((fake) => fake.refusals)).toEqual([])
})

const workspace = () => {
  const linear = fakeLinearDocuments()
  fakes.push(linear)
  linear.addProject("p-1", "Roadmap")
  linear.addProject("p-2", "Hiring")
  linear.addDocument("d-1", { title: "Plan", content: "# Plan\n\nship in March", project: "p-1" })
  linear.addDocument("d-2", { title: "Notes", content: "kickoff notes", project: "p-1" })
  linear.addDocument("d-3", { title: "Loop", content: "interview loop", project: "p-2" })
  linear.addDocument("d-4", { title: "Spec", content: "issue spec", issue: "i-1" })
  return linear
}

const sourceOver = (linear: FakeLinearDocuments) =>
  linearDocumentSource(
    serviceApiCall({ manifest: API.manifest, service: "Linear", fetch: linear.fetch, token: () => FAKE_API_TOKEN }),
    { now: linear.now },
  )

/** The sync cli-core runs, over the profile's state files in a folder of its own and an index in memory. */
const syncer = (linear: FakeLinearDocuments) => {
  const dir = mkdtempSync(join(tmpdir(), "linear-documents-"))
  const env = { WCLINEAR_STATE_DIR: join(dir, "state"), WCLINEAR_CONFIG_DIR: join(dir, "config") }
  const state = documentProfile<LinearFile>(IDENTITY, env, "personal").state("user-1")
  const held = new Map<string, string>()
  const removals = new Map<string, string | undefined>()
  const source = sourceOver(linear)
  const sync = async (run: Partial<DocumentFaultRun<LinearFile>> & { rescan?: boolean } = {}) => {
    const result = await syncDocuments<LinearFile>({
      source: run.wrap ? run.wrap(source) : source,
      index: {
        save: async (_principal, content) => {
          held.set(content.metadata.id, content.markdown)
          return `document:${held.size}`
        },
        // As the store does: only a deletion takes the text; a document no longer seen keeps it.
        remove: async (_principal, id, reason) => {
          removals.set(id, reason)
          if (reason === "deleted") held.delete(id)
        },
        openPictures: async () => {
          throw new CliError("not_found", "no pictures")
        },
      },
      state,
      principal: "user-1",
      roots: [ROOT],
      textLimit: 100_000,
      max: 1_000,
      maxEntries: 1_000,
      isFolder,
      skipReason: () => undefined,
      retryable: () => false,
      errorOf: (error) => (isCliError(error) ? error : new CliError("provider_error", String(error))),
      assertHeld: () => undefined,
      storeVersion: "test",
      now: linear.now,
      ...(run.rescan ? { rescan: true } : {}),
      ...(run.budget ? { budget: run.budget } : {}),
      ...(run.deadline ? { deadline: run.deadline } : {}),
      ...(run.signal ? { signal: run.signal } : {}),
    })
    return { result, saved: [...held.keys()] }
  }
  return { sync, held, removals }
}

it("the document manifest reads only what the generated API offers", () => {
  expect(() => parseDocumentManifest(DOCUMENT_MANIFEST, API.manifest)).not.toThrow()
})

it("the account is the viewer's id, the one the tracker's copy and session start name", async () => {
  expect(await sourceOver(workspace()).identity()).toBe("user-1")
})

describe("documentSourceContract over a fake of Linear's schema", () => {
  for (const c of documentSourceContract<LinearFile>(() => {
    const linear = workspace()
    const { sync } = syncer(linear)
    return {
      source: sourceOver(linear),
      root: ROOT,
      isFolder,
      change: async () => {
        linear.advance(HOUR)
        linear.edit("d-1", { content: "# Plan\n\nship in April" })
      },
      addNested: async () => {
        linear.advance(HOUR)
        linear.addDocument("d-5", { project: "p-2" })
        return { file: "d-5", folder: "p-2" }
      },
      faults: { sync, sameToken: () => sourceOver(linear) },
    }
  }))
    it(c.name, c.run)
})

describe("the sync tells a deletion in Linear from a document it no longer sees", () => {
  const synced = async () => {
    const linear = workspace()
    const run = syncer(linear)
    expect((await run.sync()).result).toMatchObject({ complete: true, saved: 4 })
    linear.advance(HOUR)
    return { linear, ...run }
  }

  it("files project documents under their project and the rest under the folder outside projects", async () => {
    const linear = workspace()
    const source = sourceOver(linear)
    const top = await source.children(ROOT)
    expect(top.map((one) => one.id)).toEqual(expect.arrayContaining(["p-1", "p-2", ELSEWHERE]))
    expect((await source.children(ELSEWHERE)).map((one) => one.id)).toEqual(["d-4"])
    expect((await source.children("p-1")).map((one) => one.parents)).toEqual([["p-1"], ["p-1"]])
  })

  it("removes a document Linear trashed or archived", async () => {
    const { linear, sync, held, removals } = await synced()
    linear.edit("d-1", { trashed: true, archivedAt: new Date(linear.now()).toISOString() })
    linear.edit("d-2", { archivedAt: new Date(linear.now()).toISOString() })
    expect((await sync()).result).toMatchObject({ removed: 2 })
    expect(Object.fromEntries(removals)).toEqual({ "d-1": "deleted", "d-2": "deleted" })
    expect([...held.keys()].sort()).toEqual(["d-3", "d-4"])
  })

  it("keeps a hidden document: Linear hides it from a view and keeps its text", async () => {
    const { linear, sync, held } = await synced()
    linear.edit("d-1", { hiddenAt: new Date(linear.now()).toISOString() })
    expect((await sync()).result).toMatchObject({ removed: 0 })
    expect(held.has("d-1")).toBe(true)
  })

  it("keeps a document that only left this member's view", async () => {
    const { linear, sync, held } = await synced()
    linear.edit("d-3", { visible: false })
    linear.edit("d-1", { content: "edited" })
    expect((await sync()).result).toMatchObject({ removed: 0, saved: 1 })
    expect(held.has("d-3")).toBe(true)
  })

  it("keeps the text of a document that left this member's view through a sync --rescan", async () => {
    const { linear, sync, held, removals } = await synced()
    linear.edit("d-3", { visible: false })
    let result = await sync({ rescan: true })
    while (!result.result.complete) result = await sync()
    expect(removals.get("d-3")).toBe("unavailable")
    expect(held.has("d-3")).toBe(true)
  })

  it("marks nothing when a listing fails, and the next sync goes on", async () => {
    const { linear, sync, held } = await synced()
    linear.edit("d-1", { trashed: true, archivedAt: new Date(linear.now()).toISOString() })
    linear.fail("documents")
    await expect(sync()).rejects.toThrow()
    expect(held.size).toBe(4)
    linear.recover("documents")
    expect((await sync()).result).toMatchObject({ complete: true, removed: 1 })
  })

  it("keeps a document moved into a project made after the last sync", async () => {
    const { linear, sync, held } = await synced()
    linear.addProject("p-3", "New")
    linear.edit("d-4", { project: "p-3", issue: undefined, content: "moved" })
    expect((await sync()).result).toMatchObject({ removed: 0 })
    expect(held.get("d-4")).toBe("moved")
  })

  it("reads each document's text from its listing, with no second request", async () => {
    const linear = workspace()
    await syncer(linear).sync()
    expect(linear.calls.filter((call) => call.operation === "document")).toEqual([])
  })
})
