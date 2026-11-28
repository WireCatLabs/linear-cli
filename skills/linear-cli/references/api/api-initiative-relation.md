<!-- Generated from the API manifest and the command tree by pnpm generate. Do not edit. -->

# Linear API: initiative-relation

## `linear api initiative-relation [options]`

- What: Returns a single initiative relation by its identifier.
- Call: `query initiativeRelation`, effect: read
- Body: `InitiativeRelationRequest`, required

| Flag | Required | What |
|---|---|---|
| `--id <value>` | no | The UUID of the initiative relation. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api initiative-relation-create [options]`

- What: Adds a child initiative to a parent. Both must be accessible and unarchived, and the workspace must support sub-initiatives. When the new parent overlaps the child’s existing hierarchy, the overlapping parent links are removed as part of the move. Cycles and excessive nesting are rejected.
- Call: `mutation initiativeRelationCreate`, effect: write
- Body: `InitiativeRelationCreateRequest`, required

| Flag | Required | What |
|---|---|---|
| `--input <value>` | no | The initiative relation to create. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api initiative-relation-delete [options]`

- What: Removes a parent-child link without deleting either initiative. Deleting a link that no longer exists succeeds without making changes; an existing link still requires access to both initiatives.
- Call: `mutation initiativeRelationDelete`, effect: destructive
- Permission keys: `linear.delete`
- Body: `InitiativeRelationDeleteRequest`, required

| Flag | Required | What |
|---|---|---|
| `--id <value>` | no | The identifier of the initiative relation to delete. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api initiative-relation-update [options]`

- What: Changes a child initiative’s ordering within its parent. The relation’s endpoints remain unchanged. Both initiatives must be visible to you.
- Call: `mutation initiativeRelationUpdate`, effect: write
- Body: `InitiativeRelationUpdateRequest`, required

| Flag | Required | What |
|---|---|---|
| `--input <value>` | no | The properties of the initiative relation to update. |
| `--id <value>` | no | The identifier of the initiative relation to update. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api initiative-relations [options]`

- What: Returns all initiative parent-child relations in the workspace.
- Call: `query initiativeRelations`, effect: read
- Pages: cursor: send `after` (body), read the next one from `pageInfo.endCursor`; items in `nodes`; `pageInfo.hasNextPage` is false on the last page; page size in `first` (body)
- Body: `InitiativeRelationsRequest`

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
