<!-- Generated from the API manifest and the command tree by pnpm generate. Do not edit. -->

# Linear API: jira-project

## `linear api jira-project [options]`

- What: Retrieves an accessible Jira project record by its Linear UUID, including an archived record. This ID is distinct from the project's Jira externalId or key. Read importStatus, syncStatus, and latestImport to track migration progress; a successful migration request can return before this work finishes.
- Call: `query jiraProject`, effect: read
- Body: `JiraProjectRequest`, required

| Flag | Required | What |
|---|---|---|
| `--id <value>` | no | The identifier of the Jira project to retrieve. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api jira-project-batch-migrate [options]`

- What: Imports or syncs up to 50 projects from one connected Jira site. When both are requested, sync starts after import. Projects are checked independently; retry failed projects only. Repeating an unchanged, running migration returns its existing records. Imports into one team run sequentially. Requires the \`admin\` scope, access to destination teams, and import permission when importing.
- Call: `mutation jiraProjectBatchMigrate`, effect: write
- Body: `JiraProjectBatchMigrateRequest`, required

| Flag | Required | What |
|---|---|---|
| `--input <value>` | no | The Jira projects to migrate. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api jira-projects [options]`

- What: Jira projects synced with teams the caller can administer, plus projects whose imports the caller can access. Supports filters and cursor-based pagination.
- Call: `query jiraProjects`, effect: read
- Pages: cursor: send `after` (body), read the next one from `pageInfo.endCursor`; items in `nodes`; `pageInfo.hasNextPage` is false on the last page; page size in `first` (body)
- Body: `JiraProjectsRequest`

| Flag | Required | What |
|---|---|---|
| `--filter <value>` | no | Filter returned Jira projects. |
| `--before <value>` | no | Returns results before this cursor. Pair with \`last\` to paginate backward, using a cursor returned by the same connection. Keep the filters and ordering unchanged between pages. Cannot be combined with \`first\` or \`after\`. |
| `--after <value>` | no | Returns results after this cursor. Pair with \`first\` and the previous page's \`endCursor\` to fetch the next page. Keep the filters and ordering unchanged between pages. Cannot be combined with \`last\` or \`before\`. |
| `--first <value>` | no | The maximum number of results to return, starting after \`after\` if supplied. Between 1 and 250. Defaults to 50 when neither \`first\` nor \`last\` is supplied. Cannot be combined with \`last\` or \`before\`. |
| `--last <value>` | no | The maximum number of results to return, ending before \`before\` if supplied. Between 1 and 250. Cannot be combined with \`first\` or \`after\`. |
| `--include-archived <value>` | no | Includes archived resources alongside active ones. Defaults to false, which returns only active resources. This does not include deleted resources. |
| `--order-by <value>` | no | Orders results by creation time or last meaningful update time. Defaults to \`createdAt\`. Results are newest first with \`first\` and oldest first with \`last\`; use the returned \`endCursor\` as \`before\` to continue backward. Cannot be combined with custom \`sort\` options on fields that support them. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |
| `--all` | no | read every page, as the API pages it |
