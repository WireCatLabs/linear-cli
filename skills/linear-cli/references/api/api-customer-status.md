<!-- Generated from the API manifest and the command tree by pnpm generate. Do not edit. -->

# Linear API: customer-status

## `linear api customer-status [options]`

- What: One specific customer status.
- Call: `query customerStatus`, effect: read
- Body: `CustomerStatusRequest`, required

| Flag | Required | What |
|---|---|---|
| `--id <value>` | no | The identifier of the customer status to retrieve. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api customer-status-create [options]`

- What: Creates a workspace customer status. Requires permission to manage customer settings and rejects a name or display name already used by another active status.
- Call: `mutation customerStatusCreate`, effect: write
- Body: `CustomerStatusCreateRequest`, required

| Flag | Required | What |
|---|---|---|
| `--input <value>` | no | The CustomerStatus object to create. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api customer-status-delete [options]`

- What: Deletes a customer status. Cannot delete the last remaining status in a workspace, and the status must not be in use by any customers.
- Call: `mutation customerStatusDelete`, effect: destructive
- Permission keys: `linear.delete`
- Body: `CustomerStatusDeleteRequest`, required

| Flag | Required | What |
|---|---|---|
| `--id <value>` | no | The identifier of the customer status to delete. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api customer-status-update [options]`

- What: Updates a workspace customer status. Requires permission to manage customer settings. Customers using the status retain their association with it.
- Call: `mutation customerStatusUpdate`, effect: write
- Body: `CustomerStatusUpdateRequest`, required

| Flag | Required | What |
|---|---|---|
| `--input <value>` | no | A partial CustomerStatus object to update the CustomerStatus with. |
| `--id <value>` | no | The identifier of the customer status to update. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api customer-statuses [options]`

- What: All customer statuses defined in the workspace.
- Call: `query customerStatuses`, effect: read
- Pages: cursor: send `after` (body), read the next one from `pageInfo.endCursor`; items in `nodes`; `pageInfo.hasNextPage` is false on the last page; page size in `first` (body)
- Body: `CustomerStatusesRequest`

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
