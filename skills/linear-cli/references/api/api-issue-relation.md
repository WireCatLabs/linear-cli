<!-- Generated from the API manifest and the command tree by pnpm generate. Do not edit. -->

# Linear API: issue-relation

## `linear api issue-relation [options]`

- What: One specific issue relation, looked up by its unique identifier.
- Call: `query issueRelation`, effect: read
- Body: `IssueRelationRequest`, required

| Flag | Required | What |
|---|---|---|
| `--id <value>` | no | The identifier of the issue relation to retrieve. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api issue-relation-create [options]`

- What: Creates a relationship between two issues, replacing any conflicting relation between the pair and reusing an identical one. A duplicate relation closes the source as a duplicate of the target and can move linked customer requests to the target. You must have access to both issues and any permissions required for the merge.
- Call: `mutation issueRelationCreate`, effect: write
- Body: `IssueRelationCreateRequest`, required

| Flag | Required | What |
|---|---|---|
| `--override-created-at <value>` | no | Used by client undo operations. Should not be set directly. |
| `--input <value>` | no | The issue relation to create. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api issue-relation-delete [options]`

- What: Removes a relation by its UUID. Removing a duplicate relation also runs the unmerge behavior, including moving customer requests back to the original issue when applicable.
- Call: `mutation issueRelationDelete`, effect: destructive
- Permission keys: `linear.delete`
- Body: `IssueRelationDeleteRequest`, required

| Flag | Required | What |
|---|---|---|
| `--id <value>` | no | The identifier of the issue relation to delete. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api issue-relation-update [options]`

- What: Changes a relation’s type or the issues it connects. Omitted fields are unchanged, and an issue cannot relate to itself. Changing to or from duplicate also applies the corresponding merge or unmerge behavior.
- Call: `mutation issueRelationUpdate`, effect: write
- Body: `IssueRelationUpdateRequest`, required

| Flag | Required | What |
|---|---|---|
| `--input <value>` | no | The properties of the issue relation to update. |
| `--id <value>` | no | The identifier of the issue relation to update. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api issue-relations [options]`

- What: Issue relations the caller can access, with cursor pagination.
- Call: `query issueRelations`, effect: read
- Pages: cursor: send `after` (body), read the next one from `pageInfo.endCursor`; items in `nodes`; `pageInfo.hasNextPage` is false on the last page; page size in `first` (body)
- Body: `IssueRelationsRequest`

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
