<!-- Generated from the API manifest and the command tree by pnpm generate. Do not edit. -->

# Linear API: initiative-update

## `linear api create-initiative-update-reminder [options]`

- What: Create a notification to remind a user about an initiative update.
- Call: `mutation createInitiativeUpdateReminder`, effect: write
- Body: `CreateInitiativeUpdateReminderRequest`, required

| Flag | Required | What |
|---|---|---|
| `--user-id <value>` | no | The user identifier to whom the notification will be sent. By default, it is set to the initiative owner. |
| `--initiative-id <value>` | no | The identifier of the initiative to remind about. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api initiative-update-archive [options]`

- What: Archives an update and recalculates the initiative’s health from the remaining updates. You must be the author or have permission to manage workspace entities. Use initiativeUpdateUnarchive to restore it.
- Call: `mutation initiativeUpdateArchive`, effect: destructive
- Permission keys: `linear.delete`
- Body: `InitiativeUpdateArchiveRequest`, required

| Flag | Required | What |
|---|---|---|
| `--id <value>` | no | The identifier of the initiative update to archive. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api initiative-update-create [options]`

- What: Publishes an update, records the current user as author, captures the initiative’s projects, and refreshes its health. Provide the written message in input.body.
- Call: `mutation initiativeUpdateCreate`, effect: write
- Body: `InitiativeUpdateCreateRequest`, required

| Flag | Required | What |
|---|---|---|
| `--input <value>` | no | The initiative update object to create. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api initiative-update-unarchive [options]`

- What: Restores an archived update and recalculates the initiative’s health. You must be the author or have permission to manage workspace entities.
- Call: `mutation initiativeUpdateUnarchive`, effect: write
- Body: `InitiativeUpdateUnarchiveRequest`, required

| Flag | Required | What |
|---|---|---|
| `--id <value>` | no | The identifier of the initiative update to unarchive. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api initiative-update-update [options]`

- What: Edits an update’s message or health. You must be the author or have permission to manage workspace entities. Editing the latest update while it is less than one hour old also refreshes its project snapshots.
- Call: `mutation initiativeUpdateUpdate`, effect: write
- Body: `InitiativeUpdateUpdateRequest`, required

| Flag | Required | What |
|---|---|---|
| `--input <value>` | no | The properties of the initiative update to update. |
| `--id <value>` | no | The identifier of the initiative update to update. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api initiative-updates [options]`

- What: Returns all initiative status updates in the workspace, with optional filtering.
- Call: `query initiativeUpdates`, effect: read
- Pages: cursor: send `after` (body), read the next one from `pageInfo.endCursor`; items in `nodes`; `pageInfo.hasNextPage` is false on the last page; page size in `first` (body)
- Body: `InitiativeUpdatesRequest`

| Flag | Required | What |
|---|---|---|
| `--filter <value>` | no | Filter returned initiative updates. |
| `--before <value>` | no | Returns results before this cursor. Pair with \`last\` to paginate backward, using a cursor returned by the same connection. Keep the filters and ordering unchanged between pages. Cannot be combined with \`first\` or \`after\`. |
| `--after <value>` | no | Returns results after this cursor. Pair with \`first\` and the previous page's \`endCursor\` to fetch the next page. Keep the filters and ordering unchanged between pages. Cannot be combined with \`last\` or \`before\`. |
| `--first <value>` | no | The maximum number of results to return, starting after \`after\` if supplied. Between 1 and 250. Defaults to 50 when neither \`first\` nor \`last\` is supplied. Cannot be combined with \`last\` or \`before\`. |
| `--last <value>` | no | The maximum number of results to return, ending before \`before\` if supplied. Between 1 and 250. Cannot be combined with \`first\` or \`after\`. |
| `--include-archived <value>` | no | Includes archived resources alongside active ones. Defaults to false, which returns only active resources. This does not include deleted resources. |
| `--order-by <value>` | no | Orders results by creation time or last meaningful update time. Defaults to \`createdAt\`. Results are newest first with \`first\` and oldest first with \`last\`; use the returned \`endCursor\` as \`before\` to continue backward. Cannot be combined with custom \`sort\` options on fields that support them. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |
| `--all` | no | read every page, as the API pages it |
