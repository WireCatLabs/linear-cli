# Changelog

Notable changes to `@wirecat/linear-cli`. One section per version, newest first.

## 0.4.2 — 25.11.2026

### Changed — may break callers

- **linear is built on cli-core 1.0.0 and cli-base 1.0.0.** After its first run the store is at version 73, and only
  tools on cli-core 1.0 open it: upgrade every WireCat CLI on this computer together. The migration keeps a rollback
  copy, and refuses to run when it cannot write one.
- **`sync --rescan` no longer lets a sync mark most of the issues or documents deleted.** It only lists everything
  again. When the guard holds a pass, `sync --allow-deletions <count>` lets it mark at most that many deleted. The
  flag is for the owner in a terminal; the MCP server does not offer it.
- **An MCP call that names a refused folder answers `permission_error`**, not `validation_error`.

## 0.4.1 — 25.11.2026

### Fixed

- An agent reading `linear skill show` now learns the main jobs: sync, searching issues with keywords, filters by id, the issue writes, and where archive, relations, attachments and milestones live in the `api` group. It was the template's stub.

## 0.4.0 — 25.11.2026

### Added

- **Linear's cycles, as sprints.** `sync` copies each team's cycles, `sprints list` lists them with their number,
  start and end, and `issues list sprint:<id>` (or `sprint:none`) narrows the issues. An unnamed cycle is shown as
  `Sprint <number>`.
- **An issue moved to Linear's trash leaves the local copy.** Trashing does not change an issue's edit time, so a sync
  that reads only changes never saw it. The daily check for deleted issues now leaves trashed issues out, so they and
  their comments leave the copy, and an issue restored from the trash comes back at the next daily check. The `sync`
  answer says when that check last ran and is next due (`deletions`).
- **A document restored from Linear's trash comes back without `--rescan`.** Once a week `sync` walks the chosen
  folders in full and brings it back.

### Fixed

- **Issues in a Duplicate state are kept.** Their state was dropped, so they pointed at a state the copy did not hold;
  `issues list type:duplicate` now lists them, and a task from such an issue closes.
- **A `sync` with nothing new says so.** Its counts name only the rows that changed, so Desktop shows it up to date. A
  kind the key cannot read is named in `meta.issues`.

## 0.3.1 — 24.11.2026

### Fixed

- **A document moved to Linear's trash leaves the local copy on the next sync.** Trashing a document does not change
  its edit time, so a plain `sync` used to miss it until `sync --rescan`. The sync now also reads the workspace's audit
  log of deleted documents. If Linear refuses the audit log to your key (it needs audit-log access), the sync still
  succeeds and warns `source.deletions-unchecked`; `sync --rescan` then finds the trashed documents. A document you
  restore from the trash comes back only with `sync --rescan`.

## 0.3.0 — 23.11.2026

### Added

- **Linear documents, synced beside the issues.** The same `sync` copies them into the local store, and cli-core's
  shared documents commands read them offline: `folders` chooses the projects (`linear:all` for every project and the
  documents outside them), `documents list|show|export|history|context`, `search`, `status`, `changes`, `catalog`,
  and the `tags`, `notes`, `memories`, `facts`, `relationships` and `identities` groups. `linear <profile> search`
  finds them by words and by meaning, and memo's `search all` finds them in the notes lane as kind `document`. Only a
  document Linear put in the trash is removed; an archived, hidden or no longer visible one keeps its text.
- **Issues, projects and comments found by meaning.** `sync --embed` indexes them with a model already downloaded,
  and memo's `search all` then finds them by meaning as well as by words (cli-core 0.730.0).
- **Issues found by other forms of a word and by its start.** `search all` and `issues search` find "invoices" for
  "invoice" and "export" for "exp…" (four letters or more); comments are found by meaning together with their issue's
  key and title, and two sign-ins to one workspace show each issue once (cli-core 0.736.0).
- **Create, update and comment on Linear issues.** `linear <profile> issues create --title …`, `issues update <issue>`
  and `issues comments create <issue> --text …`, from cli-core's tracker writes. A team, state, label, project or user is
  named by its id or by a name only one row of the local copy has; each write checks its own key (`issues.create`,
  `issues.update`, `issues.comments.create`) and the API operation's key, `--dry-run` previews and sends nothing, and giving
  an issue to someone other than yourself also checks `issues.assign-others`, denied unless your profile allows it.

## 0.2.0 — 21.11.2026

### Added

- **Linear issues assigned to you become your WireCat tasks.** After each `sync`, every open issue assigned to the
  signed-in user is a task in the shared store, titled with its key and title (`ENG-12 Fix login`), so WireCat
  Desktop's Tasks page and your agent see it. The task closes when the issue is completed, canceled, archived,
  deleted, unassigned or assigned to someone else, and opens again when the issue comes back to you. A task you
  closed yourself stays closed, and one you reopened is not closed again. The sync's answer says what it did in
  `tasks`. Nothing is written back to Linear.

### Changed — may break callers

- **`issues assign` gives its task the issue's key and title**, which each sync keeps current; before, the task
  copied none of the issue's text. Assigning an issue the sync already made a task of makes that task yours and
  opens it again if it was closed, and the issue going to someone else no longer closes it.
- **An `api` call whose permission key is `deny` (or `readonly`, for a write) refuses before its body is read**, with
  `permission_error` (exit 5). Before, a missing or invalid body answered `validation_error` (exit 2) first.

### Fixed

- **The `api` group's help names Linear's GraphQL schema**, not an OpenAPI document.
- **`api show` takes an operation by its quoted name, its old name or its operation id.**
- **The sign-in steps name the right page.** A Linear personal API key is made under Settings → Account → Security &
  access; the steps left out Account.
- **The security and configuration pages no longer name the template's sample.** They spoke of a made-up address and
  a `comments` command that linear does not have.

## 0.1.0 — 18.11.2026

### Added

- Started from `@wirecat/cli-template` 0.31.0.
- Built from one file, `wirecat.config.ts`, with no hooks.
- **`linear <profile> sync` copies your Linear workspace into WireCat's local store**: teams, users, workflow
  states, labels, projects, issues and comments, archived ones marked. After the first run it reads only what changed,
  and once a day it finds what Linear deleted. The copy belongs to the user whose personal API key signed in, since
  Linear shows each member other teams.
- **`linear <profile> issues`, `projects`, `teams`, `users`, `states` and `labels` read the copy**, offline too.
  `issues assign ENG-12` makes an issue your task: the task points at the issue and copies none of its text.
- **`linear <profile> api` reaches every query and mutation of Linear's GraphQL schema**, one command each; a write
  asks for its permission key, a delete or archive for `linear.delete`.
- Sign in with a Linear personal API key on stdin: `linear <profile> session start`. It is kept in the system
  keyring, never as an argument.
