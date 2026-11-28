<!-- Generated from the API manifest and the command tree by pnpm generate. Do not edit. -->

# Linear API: customer-tier

## `linear api customer-tier [options]`

- What: One specific customer tier.
- Call: `query customerTier`, effect: read
- Body: `CustomerTierRequest`, required

| Flag | Required | What |
|---|---|---|
| `--id <value>` | no | The identifier of the customer tier to retrieve. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api customer-tier-create [options]`

- What: Creates a workspace customer tier. Requires permission to manage customer settings and rejects a name or display name already used by another active tier.
- Call: `mutation customerTierCreate`, effect: write
- Body: `CustomerTierCreateRequest`, required

| Flag | Required | What |
|---|---|---|
| `--input <value>` | no | The CustomerTier object to create. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api customer-tier-delete [options]`

- What: Deletes a customer tier. The tier must not be in use by any customers.
- Call: `mutation customerTierDelete`, effect: destructive
- Permission keys: `linear.delete`
- Body: `CustomerTierDeleteRequest`, required

| Flag | Required | What |
|---|---|---|
| `--id <value>` | no | The identifier of the customer tier to delete. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api customer-tier-update [options]`

- What: Updates a workspace customer tier. Requires permission to manage customer settings. Customers using the tier retain their association with it.
- Call: `mutation customerTierUpdate`, effect: write
- Body: `CustomerTierUpdateRequest`, required

| Flag | Required | What |
|---|---|---|
| `--input <value>` | no | A partial CustomerTier object to update the CustomerTier with. |
| `--id <value>` | no | The identifier of the customer tier to update. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api customer-tiers [options]`

- What: All customer tiers defined in the workspace.
- Call: `query customerTiers`, effect: read
- Pages: cursor: send `after` (body), read the next one from `pageInfo.endCursor`; items in `nodes`; `pageInfo.hasNextPage` is false on the last page; page size in `first` (body)
- Body: `CustomerTiersRequest`

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
