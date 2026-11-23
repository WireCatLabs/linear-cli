### Added

- **Create, update and comment on Linear issues.** `linear <profile> issues create --title …`, `issues update <issue>`
  and `issues comments create <issue> --text …`, from cli-core's tracker writes. A team, state, label, project or user is
  named by its id or by a name only one row of the local copy has; each write checks its own key (`issues.create`,
  `issues.update`, `issues.comments.create`) and the API operation's key, `--dry-run` previews and sends nothing, and giving
  an issue to someone other than yourself also checks `issues.assign-others`, denied unless your profile allows it.
