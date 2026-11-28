<!-- Generated from the API manifest and the command tree by pnpm generate. Do not edit. -->

# Linear API: roadmap-to-project

## `linear api roadmap-to-project [options]`

- What: No longer supported and returns an error. Use initiativeToProject.
- Call: `query roadmapToProject`, effect: read, deprecated
- Body: `RoadmapToProjectRequest`, required

| Flag | Required | What |
|---|---|---|
| `--id <value>` | no | The UUID of the legacy roadmap-to-project link. This query is no longer supported. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api roadmap-to-project-create [options]`

- What: No longer supported and returns an error. Use initiativeToProjectCreate.
- Call: `mutation roadmapToProjectCreate`, effect: write
- Body: `RoadmapToProjectCreateRequest`, required

| Flag | Required | What |
|---|---|---|
| `--input <value>` | no | The properties of the roadmapToProject to create. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api roadmap-to-project-delete [options]`

- What: No longer supported and returns an error. Use initiativeToProjectDelete.
- Call: `mutation roadmapToProjectDelete`, effect: destructive
- Permission keys: `linear.delete`
- Body: `RoadmapToProjectDeleteRequest`, required

| Flag | Required | What |
|---|---|---|
| `--id <value>` | no | The identifier of the roadmapToProject to delete. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api roadmap-to-project-update [options]`

- What: No longer supported and returns an error. Use initiativeToProjectUpdate.
- Call: `mutation roadmapToProjectUpdate`, effect: write
- Body: `RoadmapToProjectUpdateRequest`, required

| Flag | Required | What |
|---|---|---|
| `--input <value>` | no | The properties of the roadmapToProject to update. |
| `--id <value>` | no | The identifier of the roadmapToProject to update. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api roadmap-to-projects [options]`

- What: Deprecated. Always returns an empty connection. Use initiativeToProjects.
- Call: `query roadmapToProjects`, effect: read, deprecated
- Pages: cursor: send `after` (body), read the next one from `pageInfo.endCursor`; items in `nodes`; `pageInfo.hasNextPage` is false on the last page; page size in `first` (body)
- Body: `RoadmapToProjectsRequest`

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
