# Settings

Decide once what your agent may change in Linear, and how much one command lists. Settings live in one file,
`config.json`, in the folder `linear doctor` shows. Each profile has its own part, and `defaults` apply to every
profile.

```sh
linear personal config show
linear personal config set limit 50
linear personal config unset limit
```

`config show` lists each setting and where it came from: the file, a variable or the default.

## Permissions

`permissions` decides what a command may do for this profile: `allow`, `ask`, `readonly` or `deny`, per permission
key. Over MCP there is no one to ask, so `ask` lets the command run. `WCLINEAR_READ_ONLY=1` refuses every write, whatever
the permissions say.

## Run records

A command that fails is kept as a run, for `linear runs list` and `runs show`. With `record` set to `false` only failures
are kept, and `--no-record` keeps nothing. `session status --check` does its work in a run, so `--record` keeps it. `record_input` decides whether a run
keeps the words you typed; it is `true` unless you set it to `false`. Secrets are masked either way; see
[Security](security.md).
