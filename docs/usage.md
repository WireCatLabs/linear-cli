# Use it

See what your team is working on, find the issue behind a question and move it on, from a terminal or by asking your
agent in your own words. The agent runs the same commands, so every example here is also a request you can make.

The issues come from a copy of your workspace on your computer, so lists and search answer at once, even offline. A
change goes to Linear first, as far as your key and the profile's [permissions](permissions.md) allow. You need a
profile signed in with your Linear key, as [install](installation.md) shows.

**On this page:**

1. [The profile comes first](#the-profile-comes-first)
2. [Copy your workspace](#copy-your-workspace)
3. [Find issues](#find-issues)
4. [Sprints, projects and teams](#sprints-projects-and-teams)
5. [Change an issue](#change-an-issue)
6. [Your issues as tasks](#your-issues-as-tasks)
7. [Linear documents](#linear-documents)
8. [Output for scripts](#output-for-scripts)
9. [Agents](#agents)

## The profile comes first

A profile is a name you choose for one Linear account, such as `work`. It is the first word of every command that uses
an account:

```sh
linear work issues list
```

`WCLINEAR_PROFILE=work` does the same for one shell session. No profile is ever assumed, not even the only one: a
command without one stops with exit code 2 and lists the profiles on this computer.

## Copy your workspace

```sh
linear work sync
```

The first `sync` copies the teams, users, workflow states, labels, projects, sprints, issues and comments your key can
see. Each later `sync` takes only what changed. Once a day it also finds what was deleted in Linear, and its answer
says when it will check next. `sync --rescan` copies everything again.

A long first sync stops before its time limit and says so. Run `sync` again, and it goes on from where it stopped.

## Find issues

```sh
linear work issues list type:started                  # in progress
linear work issues list label:Bug assignee:none       # bugs nobody has
linear work issues show ENG-12                        # one issue with its state, assignee and comments
linear work issues search invoice currency            # every word, in any order
linear work issues search "why do refunds round wrong?"
```

`issues search` looks in the issues, projects and comments of the copy. Every word must match, in any form, and
words in quote marks stay together as a phrase. After `sync --embed` it also finds issues by meaning, with an
embedding model already on your computer.

Lists show the newest change first, 50 rows a page. `--limit` and `--page` take you further.

## Sprints, projects and teams

Linear calls its sprints cycles.

```sh
linear work sprints list                              # each team's sprints: number, start and end
linear work issues list sprint:none                   # issues in no sprint
linear work projects list                             # status, lead, teams and target date
linear work teams list
linear work users list
```

`states list` and `labels list` show the names that `issues create` and `issues update` take.

## Change an issue

```sh
linear work issues create --title "Export invoices as CSV" --team ENG --label Bug
linear work issues update ENG-12 --status Done
linear work issues update ENG-12 --assignee anna@example.com --priority high
linear work issues comments create ENG-12 --text "Fixed in the next release"
```

Each change goes to Linear, and the copy then stores Linear's answer. What you leave out keeps its value. A state,
label, project or team is named as Linear shows it.

An issue change runs without a question unless you set its permission to `ask`. `--dry-run` shows what the change
would send and which permissions it checks, and sends nothing. Giving an issue to anyone but you is refused until you allow
`issues.assign-others`, as [permissions](permissions.md) shows.

## Your issues as tasks

Open issues assigned to you become your WireCat tasks at each `sync`. A task closes when its issue is done, canceled,
a duplicate or deleted, or goes to someone else.

To track an issue that is not yours, make it your task by hand:

```sh
linear work issues assign ENG-15 --due 2026-12-01
```

This changes nothing in Linear. Each `sync` keeps the task's key and title current.

## Linear documents

`sync` copies Linear documents only from the projects you choose:

```sh
linear work folders add linear:all                    # the documents of every project
linear work folders add linear:elsewhere              # documents outside any project
linear work sync
linear work documents list
linear work search "release checklist"
linear work changes --since 7d                        # documents added, changed or removed
```

`folders add` also takes one project's id, and `folders remove` stops copying a project. `search` finds documents by
their words, and by meaning once they are indexed. `documents show` prints one document, and
`documents export --output release.md` writes it to a Markdown file.

## Output for scripts

Every command except `mcp serve` on stdin and stdout takes `--json`, and prints one JSON value on stdout. Errors are
JSON on stderr, with a code to branch on. The [command reference](commands.md#exit-codes) lists the codes.

## Agents

`linear skill install` puts the tool's skill where Claude Code, Codex, Gemini CLI and OpenClaw look for it. An agent
with a terminal then runs `linear` itself. `linear skill install --for hermes` also adds that folder to Hermes Agent's
own settings, so a bare `skill install` leaves Hermes out.

An app without a terminal, such as Claude Desktop or Cursor, connects over MCP. `mcp config` prints the entry to
paste into its settings, and `mcp add` sets up Claude Code or Codex the same way:

```sh
linear work mcp config                                # the entry for Claude Desktop, Cursor and others
linear work mcp add claude-code --allow-writes        # or codex
```

Over MCP nobody is at a terminal to answer, so a write at `ask` goes ahead. Read [MCP](mcp.md) and
[permissions](permissions.md) before you connect an app.
