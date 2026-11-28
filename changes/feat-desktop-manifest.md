### Added

- **WireCat Desktop reads linear's sign-in and MCP port from linear itself.** The manifest (`linear --wcat-describe`)
  now names the MCP server's port, 8757, and the sign-in Desktop runs: a personal API key, typed on stdin. Built on
  `@wirecat/cli-base` 1.2.0.
- **The agent skill has one API page per entity** (cli-base 1.2.0). An agent that wants to archive an issue reads
  `linear skill show api-issue`, not the 4,000-line `api-mutation` page. `api show` prints both tags, and
  `api list tag:issue` works. Commands, their names and permission keys stay the same.
