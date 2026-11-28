<!-- Generated from the API manifest and the command tree by pnpm generate. Do not edit. -->

# Linear API: agent-activity

## `linear api agent-activities [options]`

- What: Accessible agent activities, with filters and cursor-based pagination.
- Call: `query agentActivities`, effect: read
- Pages: cursor: send `after` (body), read the next one from `pageInfo.endCursor`; items in `nodes`; `pageInfo.hasNextPage` is false on the last page; page size in `first` (body)
- Body: `AgentActivitiesRequest`

| Flag | Required | What |
|---|---|---|
| `--filter <value>` | no | Filter returned agent activities. |
| `--before <value>` | no | Returns results before this cursor. Pair with \`last\` to paginate backward, using a cursor returned by the same connection. Keep the filters and ordering unchanged between pages. Cannot be combined with \`first\` or \`after\`. |
| `--after <value>` | no | Returns results after this cursor. Pair with \`first\` and the previous page's \`endCursor\` to fetch the next page. Keep the filters and ordering unchanged between pages. Cannot be combined with \`last\` or \`before\`. |
| `--first <value>` | no | The maximum number of results to return, starting after \`after\` if supplied. Between 1 and 250. Defaults to 50 when neither \`first\` nor \`last\` is supplied. Cannot be combined with \`last\` or \`before\`. |
| `--last <value>` | no | The maximum number of results to return, ending before \`before\` if supplied. Between 1 and 250. Cannot be combined with \`first\` or \`after\`. |
| `--include-archived <value>` | no | Includes archived resources alongside active ones. Defaults to false, which returns only active resources. This does not include deleted resources. |
| `--order-by <value>` | no | Orders results by creation time or last meaningful update time. Defaults to \`createdAt\`. Results are newest first with \`first\` and oldest first with \`last\`; use the returned \`endCursor\` as \`before\` to continue backward. Cannot be combined with custom \`sort\` options on fields that support them. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |
| `--all` | no | read every page, as the API pages it |

## `linear api agent-activity [options]`

- What: Retrieves an unarchived agent activity by UUID.
- Call: `query agentActivity`, effect: read
- Body: `AgentActivityRequest`, required

| Flag | Required | What |
|---|---|---|
| `--id <value>` | no | The identifier of the agent activity to retrieve. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api agent-activity-create [options]`

- What: Publishes an activity to your agent’s session and updates its lifecycle. Thoughts and actions report ongoing work; a response completes the turn unless it has the continue signal, an elicitation waits for user input, and an error records a failed turn. The session must be unarchived and owned by the authenticated app user. Use the agent app’s OAuth or workload identity token; personal API keys cannot publish agent activities.
- Call: `mutation agentActivityCreate`, effect: write
- Body: `AgentActivityCreateRequest`, required

| Flag | Required | What |
|---|---|---|
| `--input <value>` | no | The agent activity object to create. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |
