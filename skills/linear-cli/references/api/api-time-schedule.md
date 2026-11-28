<!-- Generated from the API manifest and the command tree by pnpm generate. Do not edit. -->

# Linear API: time-schedule

## `linear api time-schedule [options]`

- What: Retrieves an accessible time schedule by UUID, including archived schedules.
- Call: `query timeSchedule`, effect: read
- Body: `TimeScheduleRequest`, required

| Flag | Required | What |
|---|---|---|
| `--id <value>` | no | The identifier of the time schedule to retrieve. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api time-schedule-create [options]`

- What: Creates an API-managed on-call schedule in the workspace. Provide a name and the complete list of shifts, then reference the returned schedule ID from a triage responsibility to use it for a team. An OAuth-created schedule is owned by that application for later updates and deletion. Duplicate IDs or external IDs are rejected.
- Call: `mutation timeScheduleCreate`, effect: write
- Body: `TimeScheduleCreateRequest`, required

| Flag | Required | What |
|---|---|---|
| `--input <value>` | no | The properties of the time schedule to create. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api time-schedule-delete [options]`

- What: Deletes an API-managed schedule and replaces linked triage responsibilities with available fallback users. The same ownership and team-management requirements as timeScheduleUpdate apply. Integration-synced schedules cannot be deleted here.
- Call: `mutation timeScheduleDelete`, effect: destructive
- Permission keys: `linear.delete`
- Body: `TimeScheduleDeleteRequest`, required

| Flag | Required | What |
|---|---|---|
| `--id <value>` | no | The identifier of the time schedule to delete. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api time-schedule-refresh-integration-schedule [options]`

- What: Requests a refresh of a schedule managed by an integration. The schedule must have an associated integration. Success means the refresh was queued; the returned timeSchedule may still contain its previous shifts. Query the schedule again to read the refreshed entries.
- Call: `mutation timeScheduleRefreshIntegrationSchedule`, effect: write
- Body: `TimeScheduleRefreshIntegrationScheduleRequest`, required

| Flag | Required | What |
|---|---|---|
| `--id <value>` | no | The identifier of the time schedule to refresh. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api time-schedule-update [options]`

- What: Updates an unarchived, API-managed schedule. Omitted fields remain unchanged; entries replaces every existing shift. OAuth callers can update only schedules created by the same application. Other callers need management permission for every team using the schedule, or workspace team management permission if no team uses it. Integration-synced schedules cannot be edited here.
- Call: `mutation timeScheduleUpdate`, effect: write
- Body: `TimeScheduleUpdateRequest`, required

| Flag | Required | What |
|---|---|---|
| `--input <value>` | no | The properties of the time schedule to update. |
| `--id <value>` | no | The identifier of the time schedule to update. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api time-schedule-upsert-external [options]`

- What: Finds an unarchived schedule by its workspace-unique externalId and updates it, or creates one if none exists. For a new schedule, include name and the same externalId inside input; the lookup argument is not copied into input automatically. A supplied entries list replaces the old shifts. Email references without userId are matched to workspace users when possible; unmatched references remain external. The same ownership rules as timeScheduleUpdate apply to an existing schedule.
- Call: `mutation timeScheduleUpsertExternal`, effect: write
- Body: `TimeScheduleUpsertExternalRequest`, required

| Flag | Required | What |
|---|---|---|
| `--input <value>` | no | The properties of the time schedule to insert or update. |
| `--external-id <value>` | no | Schedule identifier in the external service, unique within the workspace. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api time-schedules [options]`

- What: Returns the on-call schedules the caller can access, including API-managed and integration-managed schedules. Use the connection arguments to paginate. The integration and externalId fields identify where a schedule comes from.
- Call: `query timeSchedules`, effect: read
- Pages: cursor: send `after` (body), read the next one from `pageInfo.endCursor`; items in `nodes`; `pageInfo.hasNextPage` is false on the last page; page size in `first` (body)
- Body: `TimeSchedulesRequest`

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
