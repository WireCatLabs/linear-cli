### Added

- **Issues assigned to you become your tasks.** Each `sync` now makes every open issue assigned to the signed-in user
  a task in the local store, so memo and WireCat Desktop list it with your other tasks. The task's title is the
  issue's key and title. The sync closes the task when the issue is done, canceled, archived or given to someone else,
  and opens it again when the issue comes back to you. A task you closed stays closed. One you reopened stays open
  while the issue is someone else's, and closes again at the issue's next completion or cancel. Nothing is written to
  Linear. The sync's answer says what it did in `tasks`. Why: an issue assigned to you is work you have to do, and it
  should sit beside the rest of your tasks
  ([cli-core TRACKER.md](https://github.com/WireCatLabs/cli-core/blob/main/docs/dev/TRACKER.md#an-issue-as-the-owners-task)).
- **`issues assign` makes any issue your task, and the task now carries the issue's key and title.** Before, it
  copied none of the issue's text. The sync keeps the title up to date.
