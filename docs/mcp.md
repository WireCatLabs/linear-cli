# MCP

Give your Linear issues, projects and documents to an AI agent that cannot run commands, such as Claude Desktop,
Cursor, or ChatGPT and Claude in the browser. MCP (Model Context Protocol) is the way such an agent asks a program what
it can do and then calls it, and `linear` serves its commands that way.

The agent then reads your issues and documents from the copy on your computer, and creates, moves and comments on
issues as far as the profile's permissions allow.

An agent with a terminal, such as Claude Code or Codex, does as well with the commands and the skill
(`linear skill install`). You need a signed-in profile ([install](installation.md)), and a look at
[permissions](permissions.md) first: over MCP a write at `ask` goes ahead.

**On this page:**

1. [Add linear to an agent](#add-linear-to-an-agent)
2. [What the agent sees](#what-the-agent-sees)
3. [Keep writes yours](#keep-writes-yours)
4. [ChatGPT and Claude in the browser](#chatgpt-and-claude-in-the-browser)

## Add linear to an agent

```sh
linear work mcp add claude-code --allow-writes   # or codex
linear work mcp check                            # the handshake and the tool list, as the client sees them
```

`--allow-writes` says you know the profile offers tools that write: the issue writes and the `api` group's writes. For
Claude Desktop, Cursor or any other client, `linear work mcp config` prints the entry to paste into its settings, with
full paths. By hand, for Claude Code:

```sh
claude mcp add linear -- linear work mcp serve
```

One server can serve several profiles: `linear mcp serve --profiles work,personal`, or `--profiles all`. Each call
then names its profile.

## What the agent sees

The server has three tools:

- `linear_tools_search` finds a command by words, with its arguments and the shape of its answer.
- `linear_read` runs a command that only reads: `{ "command": "issues list", "arguments": { "query": "type:started" } }`.
- `linear_write` runs a command that writes, such as `issues update` or an `api` operation that deletes.

A command is named as on the command line, without the profile, and checks the same permission key.

Text from Linear comes marked `untrusted`: issue titles and descriptions, comments, the names Linear's users wrote,
document titles and text, and project names. The agent is told it is data, never instructions.

## Keep writes yours

The issue writes and most `api` writes are `allow` by default, and a delete or an archive is `ask`. Over MCP nobody is
at a terminal to answer `ask`, so every write goes ahead, and your MCP client is what asks.

Two things stop a write. Use at least one before you add the server:

- **The key's access.** A Linear key with only **Read** access cannot write: Linear refuses it.
- **The profile's permissions.** This line keeps every `api` write away from any agent on this profile, the issue
  writes included, and reads still work:

  ```sh
  linear work config set permissions.api readonly
  ```

To make one server stricter than the profile, give it its own levels. They never loosen the profile:

```sh
linear work mcp add claude-code --allow-writes --permission api=readonly
linear work mcp serve --permission issues.update=deny
```

Or turn on approval for the `linear_write` tool in your agent's client, so the client asks you before each write.

## ChatGPT and Claude in the browser

A browser app reaches the server over HTTP through your own tunnel, such as Tailscale Funnel:

```sh
linear work mcp serve --http --public-url https://laptop.example.ts.net
```

The server listens on `127.0.0.1` only, port 8765 (`--port` changes it). A browser app logs in with a one-time code
the command prints. `linear work mcp revoke` ends every login.

`linear work mcp server start` runs the same server in the background. `mcp server status` shows its port, the login
code and the apps logged in, and `mcp server stop` ends it.

More: [permissions](permissions.md), [security](security.md), [the command reference](commands.md#linear-mcp).
