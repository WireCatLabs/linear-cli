<!-- Generated from the API manifest and the command tree by pnpm generate. Do not edit. -->

# Linear API: initiative-label

## `linear api initiative-label [options]`

- What: Returns a single initiative label by its identifier.
- Call: `query initiativeLabel`, effect: read
- Body: `InitiativeLabelRequest`, required

| Flag | Required | What |
|---|---|---|
| `--id <value>` | no | The UUID of the initiative label. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api initiative-label-create [options]`

- What: Creates a workspace label or label group for initiatives. Requires workspace label-management permission. Use parentId to place a label in a group.
- Call: `mutation initiativeLabelCreate`, effect: write
- Body: `InitiativeLabelCreateRequest`, required

| Flag | Required | What |
|---|---|---|
| `--input <value>` | no | The initiative label to create. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api initiative-label-delete [options]`

- What: Deletes an initiative label and its children, removing their assignments from initiatives.
- Call: `mutation initiativeLabelDelete`, effect: destructive
- Permission keys: `linear.delete`
- Body: `InitiativeLabelDeleteRequest`, required

| Flag | Required | What |
|---|---|---|
| `--id <value>` | no | The identifier of the label to delete. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api initiative-label-restore [options]`

- What: Restores a previously retired initiative label, making it available for use on new initiatives.
- Call: `mutation initiativeLabelRestore`, effect: write
- Body: `InitiativeLabelRestoreRequest`, required

| Flag | Required | What |
|---|---|---|
| `--id <value>` | no | The identifier of the label to restore. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api initiative-label-retire [options]`

- What: Retires an initiative label. Retired labels remain on existing initiatives but cannot be applied to new ones.
- Call: `mutation initiativeLabelRetire`, effect: write
- Body: `InitiativeLabelRetireRequest`, required

| Flag | Required | What |
|---|---|---|
| `--id <value>` | no | The identifier of the label to retire. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api initiative-label-update [options]`

- What: Changes the supplied label fields. Omitted fields stay unchanged. Requires workspace label-management permission.
- Call: `mutation initiativeLabelUpdate`, effect: write
- Body: `InitiativeLabelUpdateRequest`, required

| Flag | Required | What |
|---|---|---|
| `--input <value>` | no | A partial label object to update. |
| `--id <value>` | no | The identifier of the label to update. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api initiative-labels [options]`

- What: Returns all initiative labels in the workspace, with optional filtering.
- Call: `query initiativeLabels`, effect: read
- Pages: cursor: send `after` (body), read the next one from `pageInfo.endCursor`; items in `nodes`; `pageInfo.hasNextPage` is false on the last page; page size in `first` (body)
- Body: `InitiativeLabelsRequest`

| Flag | Required | What |
|---|---|---|
| `--filter <value>` | no | Filter returned initiative labels. |
| `--before <value>` | no | Returns results before this cursor. Pair with \`last\` to paginate backward, using a cursor returned by the same connection. Keep the filters and ordering unchanged between pages. Cannot be combined with \`first\` or \`after\`. |
| `--after <value>` | no | Returns results after this cursor. Pair with \`first\` and the previous page's \`endCursor\` to fetch the next page. Keep the filters and ordering unchanged between pages. Cannot be combined with \`last\` or \`before\`. |
| `--first <value>` | no | The maximum number of results to return, starting after \`after\` if supplied. Between 1 and 250. Defaults to 50 when neither \`first\` nor \`last\` is supplied. Cannot be combined with \`last\` or \`before\`. |
| `--last <value>` | no | The maximum number of results to return, ending before \`before\` if supplied. Between 1 and 250. Cannot be combined with \`first\` or \`after\`. |
| `--include-archived <value>` | no | Includes archived resources alongside active ones. Defaults to false, which returns only active resources. This does not include deleted resources. |
| `--order-by <value>` | no | Orders results by creation time or last meaningful update time. Defaults to \`createdAt\`. Results are newest first with \`first\` and oldest first with \`last\`; use the returned \`endCursor\` as \`before\` to continue backward. Cannot be combined with custom \`sort\` options on fields that support them. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |
| `--all` | no | read every page, as the API pages it |
