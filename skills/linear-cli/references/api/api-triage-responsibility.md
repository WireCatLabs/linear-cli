<!-- Generated from the API manifest and the command tree by pnpm generate. Do not edit. -->

# Linear API: triage-responsibility

## `linear api triage-responsibilities [options]`

- What: All triage responsibilities.
- Call: `query triageResponsibilities`, effect: read
- Pages: cursor: send `after` (body), read the next one from `pageInfo.endCursor`; items in `nodes`; `pageInfo.hasNextPage` is false on the last page; page size in `first` (body)
- Body: `TriageResponsibilitiesRequest`

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

## `linear api triage-responsibility [options]`

- What: A specific triage responsibility.
- Call: `query triageResponsibility`, effect: read
- Body: `TriageResponsibilityRequest`, required

| Flag | Required | What |
|---|---|---|
| `--id <value>` | no | The identifier of the triage responsibility to retrieve. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api triage-responsibility-create [options]`

- What: Creates the team’s triage responsibility using a manual user selection or an on-call schedule. The team must be writable, the workspace plan must support triage responsibility, and the caller needs team management permission. A team can have only one rule. Selecting an integration-managed schedule also queues a refresh of its shifts.
- Call: `mutation triageResponsibilityCreate`, effect: write
- Body: `TriageResponsibilityCreateRequest`, required

| Flag | Required | What |
|---|---|---|
| `--input <value>` | no | The properties of the triage responsibility to create. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api triage-responsibility-delete [options]`

- What: Deletes a triage responsibility.
- Call: `mutation triageResponsibilityDelete`, effect: destructive
- Permission keys: `linear.delete`
- Body: `TriageResponsibilityDeleteRequest`, required

| Flag | Required | What |
|---|---|---|
| `--id <value>` | no | The identifier of the triage responsibility to delete. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api triage-responsibility-update [options]`

- What: Updates the action or responsible users for a writable team’s existing rule. Changing to a manual selection clears its schedule, and changing to a schedule clears its manual selection. Omitted fields remain unchanged. Requires team management permission; selecting a different integration-managed schedule queues a refresh.
- Call: `mutation triageResponsibilityUpdate`, effect: write
- Body: `TriageResponsibilityUpdateRequest`, required

| Flag | Required | What |
|---|---|---|
| `--input <value>` | no | The properties of the triage responsibility to update. |
| `--id <value>` | no | The identifier of the triage responsibility to update. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |
