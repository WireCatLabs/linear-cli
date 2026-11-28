# Permissions

Let an AI agent work with your Linear issues through `linear` and keep the say over what it changes. A key with
**Write** access can change whatever your Linear user can, so without your own limits an agent could do the same.

For each profile, the name you gave one Linear sign-in, you decide what an agent may only read, what asks you first
and what goes ahead. You can keep every write away from an agent with one line, and you know which checks hold
whatever the settings say.

Each command has a permission key, its name such as `issues.update` or `api.issue-delete`, or a group such as `api`,
where the longer key wins. Each key has a level: `deny`, `readonly`, `ask` or `allow`. `linear work config set` sets
them, and `--dry-run` shows which keys a command checks.

**On this page:**

1. [The levels](#the-levels)
2. [What is set before you change anything](#what-is-set-before-you-change-anything)
3. [Keep every write away from an agent](#keep-every-write-away-from-an-agent)
4. [Agents and MCP](#agents-and-mcp)
5. [Checks that hold whatever the permissions say](#checks-that-hold-whatever-the-permissions-say)

## The levels

| Level | What happens |
|---|---|
| `deny` | The command is refused, a read too. |
| `readonly` | Reads work. A write is refused. |
| `ask` | A write asks first at a terminal. Without one it is refused unless `--yes` is given. **Over MCP it runs.** |
| `allow` | The command runs without a question. |

```sh
linear work config set permissions.api readonly        # every api operation reads, none writes
linear work config set permissions.issues.update deny  # no changes to issues on this profile
linear work config show                                # each key with its level and where it came from
```

A refusal is `permission_error` (exit code 5) and names the key. It does not mean the sign-in is broken.

An agent cannot loosen a permission: a `config set` or `config unset` that would lift a limit is refused unless you
run it yourself in a terminal.

## What is set before you change anything

| Key | Built-in level | Why |
|---|---|---|
| `issues.assign-others` | `deny` | Giving an issue to anyone but you waits until you allow it. |
| `api.<operation>` that deletes or archives, such as `api.issue-delete` | `ask` | It also checks `linear.delete`. |
| `linear.delete` | `ask` | One key for every delete and archive. Set it to `deny` to stop them all. |
| Every other command, `issues create`, `issues update` and `issues comments create` included | `allow` | |

An issue write also checks the `api` key of the Linear operation it sends: `api.issue-create`, `api.issue-update` or
`api.comment-create`. So a `readonly` on `api` stops it too. `sync`, the lists, `show` and `search` only read Linear,
and `issues assign` and `folders add` change only this computer.

## Keep every write away from an agent

`--dry-run` names each key a command checks, with its level, and sends nothing:

```sh
linear work issues update ENG-12 --assignee anna@example.com --dry-run
```

Any of these keeps writes yours:

- **A Read key.** Make the Linear key with **Read** access only, as [install](installation.md) shows. Linear itself then
  refuses every write.
- **`api` at `readonly`.** `linear work config set permissions.api readonly`. Every read still works, and every write
  is refused: the issue commands send through the same operations.
- **No deletes.** `linear work config set permissions.linear.delete deny` stops every delete and leaves other writes as
  they are.

## Agents and MCP

Over MCP nobody is at a terminal to answer, and the server shows no form, so a write at `ask` goes ahead. That holds
for the built-in levels too: an agent with a Write key may change issues, and may delete them through `api`. Choose one before you connect
an app:

- Set `permissions.api` to `readonly`, as above.
- Or keep the levels and turn on approval for the `linear_write` tool in your agent's client, so the client asks you
  before each write.

`mcp serve --permission api=readonly` and `mcp add … --permission …` make a level stricter for that one server. They
never loosen the profile. See [MCP](mcp.md#keep-writes-yours).

## Checks that hold whatever the permissions say

- **`WCLINEAR_READ_ONLY=1`** refuses every write, for that shell or the app that sets it.
- **The key's access.** Linear refuses what the key's access and its teams do not allow, whatever the profile says.
- **Text from Linear is data.** Issue titles, descriptions and comments reach an agent marked `untrusted`, so an agent
  does not take them as instructions.

More: [settings](configuration.md), [security](security.md).
