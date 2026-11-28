<!-- Generated from the API manifest and the command tree by pnpm generate. Do not edit. -->

# Linear API: favorite

## `linear api favorite [options]`

- What: A specific favorite by ID.
- Call: `query favorite`, effect: read
- Body: `FavoriteRequest`, required

| Flag | Required | What |
|---|---|---|
| `--id <value>` | no | The UUID of the favorite. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api favorite-create [options]`

- What: Creates a sidebar favorite for the authenticated user. If it already exists, updates its position and supplied folder instead.
- Call: `mutation favoriteCreate`, effect: write
- Body: `FavoriteCreateRequest`, required

| Flag | Required | What |
|---|---|---|
| `--input <value>` | no | The favorite object to create. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api favorite-delete [options]`

- What: Removes a favorite from your sidebar. Deleting a custom folder also removes the favorites inside it; the bookmarked entities are unaffected. The mutation succeeds if the favorite no longer exists.
- Call: `mutation favoriteDelete`, effect: destructive
- Permission keys: `linear.delete`
- Body: `FavoriteDeleteRequest`, required

| Flag | Required | What |
|---|---|---|
| `--id <value>` | no | The identifier of the favorite reference to delete. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api favorite-update [options]`

- What: Changes the position, parent folder, or name of one of your favorites. Omitted fields stay unchanged. The target entity cannot be changed, and predefined live folders cannot be renamed.
- Call: `mutation favoriteUpdate`, effect: write
- Body: `FavoriteUpdateRequest`, required

| Flag | Required | What |
|---|---|---|
| `--input <value>` | no | A partial favorite object to update the favorite with. |
| `--id <value>` | no | The identifier of the favorite to update. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api favorites [options]`

- What: The authenticated user's favorites. Returns all bookmarked items that appear in the user's sidebar.
- Call: `query favorites`, effect: read
- Pages: cursor: send `after` (body), read the next one from `pageInfo.endCursor`; items in `nodes`; `pageInfo.hasNextPage` is false on the last page; page size in `first` (body)
- Body: `FavoritesRequest`

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
