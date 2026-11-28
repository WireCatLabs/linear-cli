# Settings

Decide once what your agent may change in Linear, how much one command lists and what a run keeps. Each setting is
one line, and `config show` tells you where each value came from: the file, a variable or the default.

Settings live in one file, `config.json`, in the folder `linear doctor` shows. Each profile has its own part, and
`defaults` apply to every profile.

```sh
linear work config show
linear work config set limit 50
linear work config unset limit
linear work config set limit 20 --defaults           # for every profile
```

## Permissions

`permissions` decides what a command may do for this profile: `allow`, `ask`, `readonly` or `deny`, per permission
key. A key is a command's name, such as `issues.update`, or a group, such as `api`:

```sh
linear work config set permissions.api readonly              # the Linear API reads, never writes
linear work config set permissions.issues.assign-others allow   # let issues go to colleagues
```

Over MCP there is no one to ask, so `ask` lets the command run. `WCLINEAR_READ_ONLY=1` refuses every write, whatever
the permissions say. The built-in levels and every key are on [permissions](permissions.md).

## Run records

Each command is kept as a run, for `linear runs list` and `runs show`. With `record` set to `false` only
failures are kept, and `--no-record` keeps nothing. `session status --check` does its work in a run, so `--record`
keeps it. `record_input` decides whether a run keeps the words you typed; it is `true` unless you set it to `false`.
Secrets are masked either way; see [Security](security.md).
