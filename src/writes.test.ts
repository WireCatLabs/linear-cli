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
