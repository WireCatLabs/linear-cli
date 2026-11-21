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
