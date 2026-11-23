# Use it

Ask about your team's issues, or change one, from a terminal or through your agent, always in the workspace you
name. Every command starts with a profile, so nothing goes to the wrong account. A script gets JSON, with an error code
to branch on, and an agent gets the same commands as a skill or over MCP.

## The profile comes first

A profile is a name you choose for one account. It is the first word of every command that uses an account:

```sh
linear personal config show
```

`WCLINEAR_PROFILE=personal` does the same for one shell session. No profile is ever assumed, not even the only one: a
command without one stops with exit code 2 and lists the profiles on this computer.

## Output for scripts

Every command except `mcp serve` on stdin and stdout takes `--json`, and prints one JSON value on stdout. Errors are JSON on stderr, with a code to branch
on. The [command reference](commands.md) lists the codes.

## Agents

`linear skill install` puts the tool's skill where Claude Code, Codex, Gemini CLI and OpenClaw look for it.
`linear skill install --for hermes` also adds that folder to Hermes Agent's own settings, so a bare `skill install`
leaves Hermes out. `linear personal mcp serve` serves the profile's commands over MCP, on stdin and stdout:

```sh
claude mcp add linear -- linear personal mcp serve
```

The server offers every command, the ones that write included. The profile's permissions decide what runs; see
[settings](configuration.md#permissions).

For ChatGPT and Claude in the browser,
`linear personal mcp serve --http --public-url https://laptop.example.ts.net` serves on `127.0.0.1` (port 8765, or
`--port`) behind your own tunnel. A browser app logs in with a one-time code that the command prints;
`linear personal mcp revoke` ends every login. `linear personal mcp server start` runs the same
server in the background, `mcp server status` shows its port, the login code and the apps logged in, and
`mcp server stop` ends it.
