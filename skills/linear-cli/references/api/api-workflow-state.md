<!-- Generated from the API manifest and the command tree by pnpm generate. Do not edit. -->

# Linear API: workflow-state

## `linear api workflow-state [options]`

- What: An issue status by UUID, including archived statuses.
- Call: `query workflowState`, effect: read
- Body: `WorkflowStateRequest`, required

| Flag | Required | What |
|---|---|---|
| `--id <value>` | no | The identifier of the workflow state to retrieve. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api workflow-state-archive [options]`

- What: Archives an unused status so it is no longer available for new issues. First move or archive every active issue in that status. You must be able to manage the team, and cannot archive reserved or inherited statuses or the last active status of a type.
- Call: `mutation workflowStateArchive`, effect: destructive
- Permission keys: `linear.delete`
- Body: `WorkflowStateArchiveRequest`, required

| Flag | Required | What |
|---|---|---|
| `--id <value>` | no | The identifier of the state to archive. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api workflow-state-create [options]`

- What: Add an issue status to a team. Requires permission to manage the team; inherited workflows cannot be edited directly.
- Call: `mutation workflowStateCreate`, effect: write
- Body: `WorkflowStateCreateRequest`, required

| Flag | Required | What |
|---|---|---|
| `--input <value>` | no | The state to create. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api workflow-state-update [options]`

- What: Update a status’s name, color, description, or position. Requires permission to manage the team. Reserved and inherited statuses cannot be changed.
- Call: `mutation workflowStateUpdate`, effect: write
- Body: `WorkflowStateUpdateRequest`, required

| Flag | Required | What |
|---|---|---|
| `--input <value>` | no | A partial state object to update. |
| `--id <value>` | no | The identifier of the state to update. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api workflow-states [options]`

- What: Issue statuses from teams the caller can access, with cursor pagination and optional filters.
- Call: `query workflowStates`, effect: read
- Pages: cursor: send `after` (body), read the next one from `pageInfo.endCursor`; items in `nodes`; `pageInfo.hasNextPage` is false on the last page; page size in `first` (body)
- Body: `WorkflowStatesRequest`

| Flag | Required | What |
|---|---|---|
| `--filter <value>` | no | Filter returned workflow states. |
| `--before <value>` | no | Returns results before this cursor. Pair with \`last\` to paginate backward, using a cursor returned by the same connection. Keep the filters and ordering unchanged between pages. Cannot be combined with \`first\` or \`after\`. |
| `--after <value>` | no | Returns results after this cursor. Pair with \`first\` and the previous page's \`endCursor\` to fetch the next page. Keep the filters and ordering unchanged between pages. Cannot be combined with \`last\` or \`before\`. |
| `--first <value>` | no | The maximum number of results to return, starting after \`after\` if supplied. Between 1 and 250. Defaults to 50 when neither \`first\` nor \`last\` is supplied. Cannot be combined with \`last\` or \`before\`. |
| `--last <value>` | no | The maximum number of results to return, ending before \`before\` if supplied. Between 1 and 250. Cannot be combined with \`first\` or \`after\`. |
| `--include-archived <value>` | no | Includes archived resources alongside active ones. Defaults to false, which returns only active resources. This does not include deleted resources. |
| `--order-by <value>` | no | Orders results by creation time or last meaningful update time. Defaults to \`createdAt\`. Results are newest first with \`first\` and oldest first with \`last\`; use the returned \`endCursor\` as \`before\` to continue backward. Cannot be combined with custom \`sort\` options on fields that support them. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |
| `--all` | no | read every page, as the API pages it |
