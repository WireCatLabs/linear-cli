<!-- Generated from the API manifest and the command tree by pnpm generate. Do not edit. -->

# Linear API: project-update

## `linear api create-project-update-reminder [options]`

- What: Create a notification to remind a user about a project update.
- Call: `mutation createProjectUpdateReminder`, effect: write
- Body: `CreateProjectUpdateReminderRequest`, required

| Flag | Required | What |
|---|---|---|
| `--user-id <value>` | no | The user identifier to whom the notification will be sent. By default, it is set to the project lead. |
| `--project-id <value>` | no | The identifier of the project to remind about. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api project-update-archive [options]`

- What: Archives an update and recalculates the project’s health from the remaining updates. You must be the author or have permission to manage workspace entities. Use projectUpdateUnarchive to restore it.
- Call: `mutation projectUpdateArchive`, effect: destructive
- Permission keys: `linear.delete`
- Body: `ProjectUpdateArchiveRequest`, required

| Flag | Required | What |
|---|---|---|
| `--id <value>` | no | The identifier of the project update to archive. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api project-update-create [options]`

- What: Publishes a status update for a project you can edit. The update records the current user as author, captures project progress, and refreshes the project’s health. Provide the message in input.body.
- Call: `mutation projectUpdateCreate`, effect: write
- Body: `ProjectUpdateCreateRequest`, required

| Flag | Required | What |
|---|---|---|
| `--input <value>` | no | Data for the project update to create. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api project-update-delete [options]`

- What: Archives a project update and recalculates project health. Use projectUpdateUnarchive to restore it.
- Call: `mutation projectUpdateDelete`, effect: destructive, deprecated
- Permission keys: `linear.delete`
- Body: `ProjectUpdateDeleteRequest`, required

| Flag | Required | What |
|---|---|---|
| `--id <value>` | no | The identifier of the project update to delete. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api project-update-unarchive [options]`

- What: Restores an archived update and recalculates the project’s health. The update must currently be archived, and you must be its author or have permission to manage workspace entities.
- Call: `mutation projectUpdateUnarchive`, effect: write
- Body: `ProjectUpdateUnarchiveRequest`, required

| Flag | Required | What |
|---|---|---|
| `--id <value>` | no | The identifier of the project update to unarchive. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api project-update-update [options]`

- What: Edits an update’s message or health. You must be its author or have permission to manage workspace entities. Editing the latest update while it is less than one hour old also refreshes its progress snapshot.
- Call: `mutation projectUpdateUpdate`, effect: write
- Body: `ProjectUpdateUpdateRequest`, required

| Flag | Required | What |
|---|---|---|
| `--input <value>` | no | The properties of the project update to update. |
| `--id <value>` | no | The identifier of the project update to update. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api project-updates [options]`

- What: Returns all project status updates in the workspace, with optional filtering.
- Call: `query projectUpdates`, effect: read
- Pages: cursor: send `after` (body), read the next one from `pageInfo.endCursor`; items in `nodes`; `pageInfo.hasNextPage` is false on the last page; page size in `first` (body)
- Body: `ProjectUpdatesRequest`

| Flag | Required | What |
|---|---|---|
| `--filter <value>` | no | Filter returned project updates. |
| `--before <value>` | no | Returns results before this cursor. Pair with \`last\` to paginate backward, using a cursor returned by the same connection. Keep the filters and ordering unchanged between pages. Cannot be combined with \`first\` or \`after\`. |
| `--after <value>` | no | Returns results after this cursor. Pair with \`first\` and the previous page's \`endCursor\` to fetch the next page. Keep the filters and ordering unchanged between pages. Cannot be combined with \`last\` or \`before\`. |
| `--first <value>` | no | The maximum number of results to return, starting after \`after\` if supplied. Between 1 and 250. Defaults to 50 when neither \`first\` nor \`last\` is supplied. Cannot be combined with \`last\` or \`before\`. |
| `--last <value>` | no | The maximum number of results to return, ending before \`before\` if supplied. Between 1 and 250. Cannot be combined with \`first\` or \`after\`. |
| `--include-archived <value>` | no | Includes archived resources alongside active ones. Defaults to false, which returns only active resources. This does not include deleted resources. |
| `--order-by <value>` | no | Orders results by creation time or last meaningful update time. Defaults to \`createdAt\`. Results are newest first with \`first\` and oldest first with \`last\`; use the returned \`endCursor\` as \`before\` to continue backward. Cannot be combined with custom \`sort\` options on fields that support them. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |
| `--all` | no | read every page, as the API pages it |
