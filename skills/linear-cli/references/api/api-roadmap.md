<!-- Generated from the API manifest and the command tree by pnpm generate. Do not edit. -->

# Linear API: roadmap

## `linear api roadmap [options]`

- What: \[Deprecated\] Returns a single roadmap by its identifier. Use initiatives instead.
- Call: `query roadmap`, effect: read, deprecated
- Body: `RoadmapRequest`, required

| Flag | Required | What |
|---|---|---|
| `--id <value>` | no | The roadmap UUID or slug ID. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api roadmap-archive [options]`

- What: No longer supported and returns an error. Use initiativeArchive.
- Call: `mutation roadmapArchive`, effect: destructive, deprecated
- Permission keys: `linear.delete`
- Body: `RoadmapArchiveRequest`, required

| Flag | Required | What |
|---|---|---|
| `--id <value>` | no | The identifier of the roadmap to archive. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api roadmap-create [options]`

- What: No longer supported and returns an error. Use initiativeCreate.
- Call: `mutation roadmapCreate`, effect: write, deprecated
- Body: `RoadmapCreateRequest`, required

| Flag | Required | What |
|---|---|---|
| `--input <value>` | no | The properties of the roadmap to create. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api roadmap-delete [options]`

- What: No longer supported and returns an error. Use initiativeDelete.
- Call: `mutation roadmapDelete`, effect: destructive, deprecated
- Permission keys: `linear.delete`
- Body: `RoadmapDeleteRequest`, required

| Flag | Required | What |
|---|---|---|
| `--id <value>` | no | The identifier of the roadmap to delete. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api roadmap-unarchive [options]`

- What: No longer supported and returns an error. Use initiativeUnarchive.
- Call: `mutation roadmapUnarchive`, effect: write, deprecated
- Body: `RoadmapUnarchiveRequest`, required

| Flag | Required | What |
|---|---|---|
| `--id <value>` | no | The identifier of the roadmap to unarchive. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api roadmap-update [options]`

- What: No longer supported and returns an error. Use initiativeUpdate.
- Call: `mutation roadmapUpdate`, effect: write, deprecated
- Body: `RoadmapUpdateRequest`, required

| Flag | Required | What |
|---|---|---|
| `--input <value>` | no | The properties of the roadmap to update. |
| `--id <value>` | no | The identifier of the roadmap to update. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api roadmaps [options]`

- What: Deprecated. Always returns an empty connection. Use initiatives.
- Call: `query roadmaps`, effect: read, deprecated
- Pages: cursor: send `after` (body), read the next one from `pageInfo.endCursor`; items in `nodes`; `pageInfo.hasNextPage` is false on the last page; page size in `first` (body)
- Body: `RoadmapsRequest`

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
