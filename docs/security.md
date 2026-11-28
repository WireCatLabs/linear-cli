# Security

Give your agent your Linear issues without giving away your API key or more access than it needs. The key stays in
your system keyring and goes only to Linear. The copy of your workspace stays on your computer.

Your agent reads what your key can see. It changes only what your key's access and your profile's permissions allow.
A key with **Read** access can never change anything in Linear.

**On this page:**

1. [Where the key is kept and where it goes](#where-the-key-is-kept-and-where-it-goes)
2. [What the copy holds](#what-the-copy-holds)
3. [What an agent may change](#what-an-agent-may-change)
4. [MCP in the browser](#mcp-in-the-browser)
5. [What a run record keeps](#what-a-run-record-keeps)

The keyring, permissions and logs work the same in every WireCat tool, as the
[shared security page](https://wirecat.dev/en/docs/security) describes.

## Where the key is kept and where it goes

`session start` asks for the key without showing it, or reads it from stdin. It never takes the key as an argument, so
the key stays out of your shell history. Linear checks the key first. Then it goes into the system keyring, or into a
private file with `--credential-storage file` where no keyring works.

The key goes only into the Authorization header of a request to Linear. It never appears in an address, an answer, an
error, a run record or the send journal. `session status` says where the key comes from, never the key itself.
`session end` forgets it on this computer, and the key stays valid in Linear until you revoke it there.

## What the copy holds

`sync` copies what the key can see: teams, users, workflow states, labels, projects, sprints, issues and comments, and
the documents of the projects you chose with `folders add`. A key limited to some teams copies only those teams. The
copy is in the WireCat store on your computer, and lists and search read it with no request to Linear.

`config.json` is saved readable by you only (`0600`), and its folder is created for you only (`0700`). If other users
of the computer can read a file or enter a folder, `linear doctor` lists it under `files.problems` and prints the
`chmod` that fixes it. Windows is not checked.

## What an agent may change

With a Write key, an agent may create, change and comment on issues unless you limit it. A delete or an archive asks
first at a terminal and checks a key of its own. Giving an issue to anyone but you is refused until you allow it.
Over MCP nobody is at a terminal, so a write at `ask` goes ahead: [permissions](permissions.md) shows how to keep
writes yours.

Text from Linear reaches an agent marked `untrusted`: issue titles and descriptions, comments, names, document titles
and text, and project names. An agent reads an issue as data, not as an instruction.

## MCP in the browser

`linear work mcp serve --http` listens on `127.0.0.1` only, for browser apps that reach it through your own tunnel.
Each app logs in with a one-time code, and the server keeps a hash of each login it gives, in the state folder,
readable by you only. `linear work mcp revoke` forgets every one of them.

## What a run record keeps

A run record keeps the command line as you typed it, so `linear runs show` tells you what was run. A secret in it is
stored as `[redacted]`: an option named like a token or password, a value after a secret name, a token in a known
format and a long random-looking string. The [shared security page](https://wirecat.dev/en/docs/security) lists every
rule. To keep none of the words you type, run `linear work config set record_input false`.

Report a vulnerability as [SECURITY.md](https://github.com/WireCatLabs/linear-cli/blob/main/SECURITY.md) says.
