<!-- Generated from the API manifest and the command tree by pnpm generate. Do not edit. -->

# Linear API: project-relation

## `linear api project-relation [options]`

- What: Returns a single project relation by its identifier.
- Call: `query projectRelation`, effect: read
- Body: `ProjectRelationRequest`, required

| Flag | Required | What |
|---|---|---|
| `--id <value>` | no | The UUID of the project relation. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api project-relation-create [options]`

- What: Creates a dependency between two different projects using date or milestone anchors.
- Call: `mutation projectRelationCreate`, effect: write
- Body: `ProjectRelationCreateRequest`, required

| Flag | Required | What |
|---|---|---|
| `--input <value>` | no | The project relation to create. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api project-relation-delete [options]`

- What: Deletes the dependency without deleting either project or milestone.
- Call: `mutation projectRelationDelete`, effect: destructive
- Permission keys: `linear.delete`
- Body: `ProjectRelationDeleteRequest`, required

| Flag | Required | What |
|---|---|---|
| `--id <value>` | no | The identifier of the project relation to delete. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api project-relation-update [options]`

- What: Updates the supplied dependency fields and validates both project endpoints.
- Call: `mutation projectRelationUpdate`, effect: write
- Body: `ProjectRelationUpdateRequest`, required

| Flag | Required | What |
|---|---|---|
| `--input <value>` | no | The properties of the project relation to update. |
| `--id <value>` | no | The identifier of the project relation to update. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api project-relations [options]`

- What: Returns all project dependency relations in the workspace.
- Call: `query projectRelations`, effect: read
- Pages: cursor: send `after` (body), read the next one from `pageInfo.endCursor`; items in `nodes`; `pageInfo.hasNextPage` is false on the last page; page size in `first` (body)
- Body: `ProjectRelationsRequest`

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
