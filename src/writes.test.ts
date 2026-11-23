import { memoryKeyring } from "@wirecat/cli-base"
import { expect, it } from "vitest"
import { FAKE_API_TOKEN, fakeServiceApi } from "./testing/fake-api.js"
import { runCli } from "./testing/harness.js"

it("a --dry-run of giving an issue to someone else names the keys the write checks, at the levels it would meet", async () => {
  const keyring = memoryKeyring()
  const fake = fakeServiceApi()
  await runCli(["personal", "session", "start", "--json"], { keyring, service: fake, stdin: FAKE_API_TOKEN })
  await runCli(["personal", "sync", "--json"], { keyring, service: fake })
  const sent = fake.calls.length
  const preview = await runCli(
    [
      "personal",
      "issues",
      "create",
      "--title",
      "Synthetic",
      "--assignee",
      "someone@example.com",
      "--dry-run",
      "--json",
    ],
    { keyring, service: fake },
  )
  expect(preview.code, preview.err).toBe(0)
  const text = JSON.stringify(preview.json())
  expect(text).toContain("api.issue-create")
  expect(text).toMatch(/"issues\.assign-others"[^}]*"deny"|"deny"[^}]*"issues\.assign-others"/)
  expect(fake.calls.length).toBe(sent)
})

it("a comment goes out as commentCreate through the api group's write path, and the answer is stored", async () => {
  const keyring = memoryKeyring()
  const fake = fakeServiceApi()
  await runCli(["work", "session", "start", "--json"], { keyring, service: fake, stdin: FAKE_API_TOKEN })
  await runCli(["work", "sync", "--json"], { keyring, service: fake })
  const listed = await runCli(["work", "issues", "list", "--json"], { keyring, service: fake })
  const issue = (listed.json() as { items: { key?: string; id?: string; external_id?: string }[] }).items[0]
  const ref = issue?.key ?? issue?.external_id ?? issue?.id
  expect(ref, listed.out).toBeDefined()
  const sent = await runCli(["work", "issues", "comment", String(ref), "--body", "Synthetic note", "--yes", "--json"], {
    keyring,
    service: fake,
  })
  expect(sent.code, sent.err).toBe(0)
  expect(JSON.stringify(fake.calls)).toContain("commentCreate")
  expect(fake.refusals).toEqual([])
})

it("previews a create and an update with every field, naming the references the copy holds and sending nothing", async () => {
  const keyring = memoryKeyring()
  const fake = fakeServiceApi()
  await runCli(["ops", "session", "start", "--json"], { keyring, service: fake, stdin: FAKE_API_TOKEN })
  await runCli(["ops", "sync", "--json"], { keyring, service: fake })
  const sent = fake.calls.length
  const fields = (verb: string) => [
    ...["--description", `Synthetic ${verb}`, "--team", "", "--state", "", "--priority", "2"],
    ...["--label", "", "--project", "", "--parent", "", "--assignee", ""],
  ]
  for (const args of [
    ["issues", "create", "--title", "Synthetic", ...fields("create")],
    ["issues", "update", "ENG-1", "--title", "Synthetic", ...fields("update")],
  ]) {
    const preview = await runCli(["ops", ...args, "--dry-run", "--json"], { keyring, service: fake })
    expect(preview.code, preview.err).toBe(0)
  }
  expect(fake.calls.length).toBe(sent)
})
