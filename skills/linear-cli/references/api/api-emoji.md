<!-- Generated from the API manifest and the command tree by pnpm generate. Do not edit. -->

# Linear API: emoji

## `linear api emoji [options]`

- What: Finds a custom emoji by UUID or exact name. UUID lookup can return archived records, while name lookup returns an active emoji. Use emojis to list the workspace’s custom emoji.
- Call: `query emoji`, effect: read
- Body: `EmojiRequest`, required

| Flag | Required | What |
|---|---|---|
| `--id <value>` | no | The identifier or the name of the emoji to retrieve. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api emoji-create [options]`

- What: Creates a custom emoji from an image already uploaded to Linear. Its name must be unique in the workspace. The current user is recorded as the creator, and the source is user.
- Call: `mutation emojiCreate`, effect: write
- Body: `EmojiCreateRequest`, required

| Flag | Required | What |
|---|---|---|
| `--input <value>` | no | The emoji object to create. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api emoji-delete [options]`

- What: Deletes an emoji.
- Call: `mutation emojiDelete`, effect: destructive
- Permission keys: `linear.delete`
- Body: `EmojiDeleteRequest`, required

| Flag | Required | What |
|---|---|---|
| `--id <value>` | no | The identifier of the emoji to delete. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api emojis [options]`

- What: All custom emojis in the workspace.
- Call: `query emojis`, effect: read
- Pages: cursor: send `after` (body), read the next one from `pageInfo.endCursor`; items in `nodes`; `pageInfo.hasNextPage` is false on the last page; page size in `first` (body)
- Body: `EmojisRequest`

| Flag | Required | What |
|---|---|---|
| `--filter <value>` | no | Filter returned emojis. |
| `--before <value>` | no | Returns results before this cursor. Pair with \`last\` to paginate backward, using a cursor returned by the same connection. Keep the filters and ordering unchanged between pages. Cannot be combined with \`first\` or \`after\`. |
| `--after <value>` | no | Returns results after this cursor. Pair with \`first\` and the previous page's \`endCursor\` to fetch the next page. Keep the filters and ordering unchanged between pages. Cannot be combined with \`last\` or \`before\`. |
| `--first <value>` | no | The maximum number of results to return, starting after \`after\` if supplied. Between 1 and 250. Defaults to 50 when neither \`first\` nor \`last\` is supplied. Cannot be combined with \`last\` or \`before\`. |
| `--last <value>` | no | The maximum number of results to return, ending before \`before\` if supplied. Between 1 and 250. Cannot be combined with \`first\` or \`after\`. |
| `--include-archived <value>` | no | Includes archived resources alongside active ones. Defaults to false, which returns only active resources. This does not include deleted resources. |
| `--order-by <value>` | no | Orders results by creation time or last meaningful update time. Defaults to \`createdAt\`. Results are newest first with \`first\` and oldest first with \`last\`; use the returned \`endCursor\` as \`before\` to continue backward. Cannot be combined with custom \`sort\` options on fields that support them. |
| `--sort <value>` | no | Sort returned emojis. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |
| `--all` | no | read every page, as the API pages it |
