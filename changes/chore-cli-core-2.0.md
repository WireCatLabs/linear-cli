### Changed — may break callers

- **linear is built on cli-core 2.0.0.** After its first run the shared store is at version 78, and only tools on
  cli-core 2.0 open it: upgrade every WireCat CLI on this computer together. In the store, AI agents are now
  `agent:<id>` with type `agent` (before `bot:<id>` and `bot`), and sender bots are `bot:<id>` (before
  `sender-bot:<id>`). The migration keeps a rollback copy first.
- **`session status` and `session list` are cli-core's own commands now.** They work as before. The MCP snapshot
  `contracts/mcp-catalogue.json` no longer lists them as this CLI's own, and `linear --help` now lists `session list`.
