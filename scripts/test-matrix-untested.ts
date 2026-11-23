import { createProgram } from "./command-program.ts"

type Node = { name(): string; commands: readonly Node[]; options: readonly { long?: string }[] }

const MODEL =
  "needs a downloaded meaning model or a configured model provider; cli-core's documents kit tests the shared command " +
  "with a fake model, and no test here downloads one"
const SHARED_DOCUMENTS =
  "cli-core's shared documents command, mounted by documentLibrary; cli-core's documents tests and " +
  "documentCommandsContract drive it, and src/documents.test.ts runs the contract over this CLI"
const leaves = (command: Node, prefix: string): { command: string; option?: string }[] => {
  const path = `${prefix} ${command.name()}`.trim()
  if (command.commands.length) return command.commands.flatMap((one) => leaves(one, path))
  const options = command.options.map((option) => option.long ?? "").filter((name) => name && name !== "--help")
  return [{ command: path }, ...options.map((option) => ({ command: path, option }))]
}
const SHARED_GROUPS = ["catalog", "relationships", "notes", "memories", "facts", "identities", "changes"]
const shared = (createProgram() as unknown as Node).commands
  .filter((command) => SHARED_GROUPS.includes(command.name()))
  .flatMap((group) => leaves(group, ""))
  .flatMap((one) => (one.command.startsWith("memories extract") ? [] : [{ ...one, reason: SHARED_DOCUMENTS }]))
const sharedDocuments = ["documents export", "documents history", "documents context"].flatMap((path) => {
  const [group, name] = path.split(" ")
  const node = (createProgram() as unknown as Node).commands
    .find((one) => one.name() === group)
    ?.commands.find((one) => one.name() === name)
  return node ? leaves(node, group as string).map((one) => ({ ...one, reason: SHARED_DOCUMENTS })) : []
})

const SHARED_MCP =
  "cli-core's appMcpCommand; its app-mcp-command and mcp-server-command tests drive it, and src/mcp.test.ts runs " +
  "this CLI's own server, config, revoke and refusals"
const SHARED_REPORTS = "cli-core's appDoctorCommand; its app-mcp-command test creates and shows a report"
const LONG_RUNNING = `starts an HTTP server or a background process that runs until stopped; ${SHARED_MCP}`

export const UNTESTED: { command: string; option?: string; reason: string }[] = [
  ...shared,
  ...sharedDocuments,
  { command: "sync", option: "--embed", reason: MODEL },
  {
    command: "sync",
    option: "--limit",
    reason:
      "hidden, and refused while its arguments are parsed, before a run the trace sees; src/documents.test.ts runs " +
      "it and cli-core's tracker documents-sync tests check the refusal",
  },
  { command: "memories extract", reason: MODEL },
  ...["--scope", "--tab", "--yes"].map((option) => ({ command: "memories extract", option, reason: MODEL })),
  {
    command: "",
    option: "--help-all",
    reason: "Commander answers before any command runs, so the trace never sees it; contracts/help.snap covers help",
  },
  {
    command: "",
    option: "--version",
    reason: "Commander answers before any command runs, so the trace never sees it; `pnpm version:check` checks it",
  },
  {
    command: "mcp server start",
    reason:
      "starts a detached `mcp serve --http` from the built entry; cli-core tests mcpServerCommand, and the background run was checked by hand against dist/",
  },
  {
    command: "mcp server start",
    option: "--port",
    reason:
      "starts a detached `mcp serve --http` from the built entry; cli-core tests mcpServerCommand, and the background run was checked by hand against dist/",
  },
  {
    command: "mcp server start",
    option: "--public-url",
    reason:
      "starts a detached `mcp serve --http` from the built entry; cli-core tests mcpServerCommand, and the background run was checked by hand against dist/",
  },
  {
    command: "mcp server stop",
    reason:
      "stops the detached server that `mcp server start` wrote a pid file for; cli-core tests mcpServerCommand, and no live scenario starts a server to stop",
  },
  ...["--http", "--port", "--public-url"].map((option) => ({ command: "mcp serve", option, reason: LONG_RUNNING })),
  { command: "doctor reports show", reason: SHARED_REPORTS },
  { command: "doctor reports create", reason: SHARED_REPORTS },
  { command: "doctor reports create", option: "--run", reason: SHARED_REPORTS },
  { command: "doctor reports create", option: "--output", reason: SHARED_REPORTS },
  { command: "mcp server status", reason: LONG_RUNNING },
  { command: "mcp server status", option: "--profiles", reason: LONG_RUNNING },
  { command: "mcp revoke", option: "--profiles", reason: SHARED_MCP },
  ...[undefined, "--allow-writes", "--permission"].map((option) => ({
    command: "mcp add",
    ...(option ? { option } : {}),
    reason: `writes Codex's or Claude Code's own MCP settings; ${SHARED_MCP}`,
  })),
  ...[undefined, "--permission"].map((option) => ({
    command: "mcp check",
    ...(option ? { option } : {}),
    reason: `starts the installed CLI as a child process, as the agent would; ${SHARED_MCP}`,
  })),
]
