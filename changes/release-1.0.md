### Changed — may break callers

- **linear is built on cli-core 1.0.0 and cli-base 1.0.0.** After its first run the store is at version 73, and only
  tools on cli-core 1.0 open it: upgrade every WireCat CLI on this computer together. The migration keeps a rollback
  copy, and refuses to run when it cannot write one.
- **`sync --rescan` no longer lets a sync mark most of the issues or documents deleted.** It only lists everything
  again. When the guard holds a pass, `sync --allow-deletions <count>` lets it mark at most that many deleted. The
  flag is for the owner in a terminal; the MCP server does not offer it.
- **An MCP call that names a refused folder answers `permission_error`**, not `validation_error`.
