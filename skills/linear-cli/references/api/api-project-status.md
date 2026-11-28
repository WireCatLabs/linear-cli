<!-- Generated from the API manifest and the command tree by pnpm generate. Do not edit. -->

# Linear API: project-status

## `linear api project-status [options]`

- What: Returns a single project status by its identifier.
- Call: `query projectStatus`, effect: read
- Body: `ProjectStatusRequest`, required

| Flag | Required | What |
|---|---|---|
| `--id <value>` | no | The UUID of the project status. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api project-status-archive [options]`

- What: Archives a project status. The status must not have any active projects assigned to it and must not be the last status of its type.
- Call: `mutation projectStatusArchive`, effect: destructive
- Permission keys: `linear.delete`
- Body: `ProjectStatusArchiveRequest`, required

| Flag | Required | What |
|---|---|---|
| `--id <value>` | no | The identifier of the project status to archive. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api project-status-create [options]`

- What: Creates a new project status.
- Call: `mutation projectStatusCreate`, effect: write
- Body: `ProjectStatusCreateRequest`, required

| Flag | Required | What |
|---|---|---|
| `--input <value>` | no | The ProjectStatus object to create. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api project-status-unarchive [options]`

- What: Unarchives a project status.
- Call: `mutation projectStatusUnarchive`, effect: write
- Body: `ProjectStatusUnarchiveRequest`, required

| Flag | Required | What |
|---|---|---|
| `--id <value>` | no | The identifier of the project status to unarchive. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api project-status-update [options]`

- What: Updates a project status.
- Call: `mutation projectStatusUpdate`, effect: write
- Body: `ProjectStatusUpdateRequest`, required

| Flag | Required | What |
|---|---|---|
| `--input <value>` | no | A partial ProjectStatus object to update the ProjectStatus with. |
| `--id <value>` | no | The identifier of the project status to update. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api project-statuses [options]`

- What: Returns all project statuses in the workspace.
- Call: `query projectStatuses`, effect: read
- Pages: cursor: send `after` (body), read the next one from `pageInfo.endCursor`; items in `nodes`; `pageInfo.hasNextPage` is false on the last page; page size in `first` (body)
- Body: `ProjectStatusesRequest`

| Flag | Required | What |
|---|---|---|
| `--before <value>` | no | Returns results before this cursor. Pair with \`last\` to paginate backward, using a cursor returned by the same connection. Keep the filters and ordering unchanged between pages. Cannot be combined with \`first\` or \`after\`. |
| `--after <value>` | no | Returns results after this cursor. Pair with \`first\` and the previous page's \`endCursor\` to fetch the next page. Keep the filters and ordering unchanged between pages. Cannot be combined with \`last\` or \`before\`. |
| `--first <value>` | no | The maximum number of results to return, starting after \`after\` if supplied. Between 1 and 250. Defaults to 50 when neither \`first\` nor \`last\` is supplied. Cannot be combined with \`last\` or \`before\`. |
| `--last <value>` | no | The maximum number of results to return, ending before \`before\` if supplied. Between 1 and 250. Cannot be combined with \`first\` or \`after\`. |
| `--include-archived <value>` | no | Includes archived resources alongside active ones. Defaults to false, which returns only active resources. This does not include deleted resources. |
| `--order-by <value>` | no | Orders results by creation time or last meaningful update time. Defaults to \`createdAt\`. Results are newest first with \`first\` and oldest first with \`last\`; use the returned \`endCursor\` as \`before\` to continue backward. Cannot be combined with custom \`sort\` options on fields that support them. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |
| `--all` | no | read every page, as the API pages it |
