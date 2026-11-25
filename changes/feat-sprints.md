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
