<!-- Generated from the API manifest and the command tree by pnpm generate. Do not edit. -->

# Linear API: agent-session

## `linear api agent-session [options]`

- What: Retrieves an unarchived agent session by UUID or URL slug.
- Call: `query agentSession`, effect: read
- Body: `AgentSessionRequest`, required

| Flag | Required | What |
|---|---|---|
| `--id <value>` | no | UUID or URL slug of the agent session. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api agent-session-create-on-comment [options]`

- What: Starts an active session for your authenticated agent app on an existing issue comment thread. Supply the UUID of an unarchived root comment; replies and threads that already have a session are rejected. The caller must have access to the issue. Use the returned session ID when publishing activities.
- Call: `mutation agentSessionCreateOnComment`, effect: write
- Body: `AgentSessionCreateOnCommentRequest`, required

| Flag | Required | What |
|---|---|---|
| `--input <value>` | no | The agent session object to create. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api agent-session-create-on-issue [options]`

- What: Starts an active session for your authenticated agent app and creates its comment thread on the issue. The issue must be accessible and writable. Supply its UUID or identifier, then use the returned session ID to publish progress and results with agentActivityCreate.
- Call: `mutation agentSessionCreateOnIssue`, effect: write
- Body: `AgentSessionCreateOnIssueRequest`, required

| Flag | Required | What |
|---|---|---|
| `--input <value>` | no | The agent session object to create. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api agent-session-update [options]`

- What: Updates your agent’s session title, external links, or plan. Only the app user that owns the session can change these fields. Omitted fields remain unchanged, while each supplied plan or externalUrls list replaces that value. Updates other than a title-only change acknowledge a pending or stale session by making it active; publishing an activity still determines the next turn status.
- Call: `mutation agentSessionUpdate`, effect: write
- Body: `AgentSessionUpdateRequest`, required

| Flag | Required | What |
|---|---|---|
| `--input <value>` | no | A partial agent session object to update the agent session with. |
| `--id <value>` | no | The identifier of the agent session to update. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api agent-session-update-external-url [options]`

- What: Updates external links on a session owned by the authenticated agent app. A pending or stale session becomes active.
- Call: `mutation agentSessionUpdateExternalUrl`, effect: write
- Body: `AgentSessionUpdateExternalUrlRequest`, required

| Flag | Required | What |
|---|---|---|
| `--input <value>` | no | The agent session object to update. |
| `--id <value>` | no | The identifier of the agent session to update. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api agent-sessions [options]`

- What: Accessible agent sessions, with cursor-based pagination.
- Call: `query agentSessions`, effect: read
- Pages: cursor: send `after` (body), read the next one from `pageInfo.endCursor`; items in `nodes`; `pageInfo.hasNextPage` is false on the last page; page size in `first` (body)
- Body: `AgentSessionsRequest`

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
