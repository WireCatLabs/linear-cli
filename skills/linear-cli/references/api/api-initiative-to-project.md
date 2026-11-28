<!-- Generated from the API manifest and the command tree by pnpm generate. Do not edit. -->

# Linear API: initiative-to-project

## `linear api initiative-to-project [options]`

- What: Returns a single initiative-to-project association by its identifier.
- Call: `query initiativeToProject`, effect: read
- Body: `InitiativeToProjectRequest`, required

| Flag | Required | What |
|---|---|---|
| `--id <value>` | no | The UUID of the initiative-to-project link. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api initiative-to-project-create [options]`

- What: Links an accessible, active project to an accessible, active initiative. Neither may be read-only. The link is rejected if the project is already in that initiative or one of its ancestors or descendants. App users need initiative:write scope.
- Call: `mutation initiativeToProjectCreate`, effect: write
- Body: `InitiativeToProjectCreateRequest`, required

| Flag | Required | What |
|---|---|---|
| `--input <value>` | no | The properties of the initiativeToProject to create. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api initiative-to-project-delete [options]`

- What: Removes an active project-to-initiative link without deleting either entity. Requires access to the association; app users need initiative:write scope.
- Call: `mutation initiativeToProjectDelete`, effect: destructive
- Permission keys: `linear.delete`
- Body: `InitiativeToProjectDeleteRequest`, required

| Flag | Required | What |
|---|---|---|
| `--id <value>` | no | The identifier of the initiativeToProject to delete. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api initiative-to-project-update [options]`

- What: Changes the project’s sort order within the initiative. The initiative and project endpoints cannot be changed through this mutation.
- Call: `mutation initiativeToProjectUpdate`, effect: write
- Body: `InitiativeToProjectUpdateRequest`, required

| Flag | Required | What |
|---|---|---|
| `--input <value>` | no | The properties of the initiativeToProject to update. |
| `--id <value>` | no | The identifier of the initiativeToProject to update. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api initiative-to-projects [options]`

- What: Returns all initiative-to-project associations in the workspace.
- Call: `query initiativeToProjects`, effect: read
- Pages: cursor: send `after` (body), read the next one from `pageInfo.endCursor`; items in `nodes`; `pageInfo.hasNextPage` is false on the last page; page size in `first` (body)
- Body: `InitiativeToProjectsRequest`

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
