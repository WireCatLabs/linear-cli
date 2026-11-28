<!-- Generated from the API manifest and the command tree by pnpm generate. Do not edit. -->

# Linear API: cycle

## `linear api cycle [options]`

- What: Finds a cycle by its UUID or team-and-number identifier, such as ENG°12, including archived cycles. Use cycles with a team filter to discover a team’s cycles.
- Call: `query cycle`, effect: read
- Body: `CycleRequest`, required

| Flag | Required | What |
|---|---|---|
| `--id <value>` | no | The cycle’s UUID or team-and-number identifier, such as ENG°12. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api cycle-archive [options]`

- What: Archives a cycle and removes its current issues from it. The issues themselves are not archived. An inherited cycle must be managed through its parent team. Requires permission to manage the team.
- Call: `mutation cycleArchive`, effect: destructive
- Permission keys: `linear.delete`
- Body: `CycleArchiveRequest`, required

| Flag | Required | What |
|---|---|---|
| `--id <value>` | no | The identifier of the cycle to archive. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api cycle-create [options]`

- What: Unsupported. This mutation always returns an error; cycles are generated from the team’s cycle settings.
- Call: `mutation cycleCreate`, effect: write, deprecated
- Body: `CycleCreateRequest`, required

| Flag | Required | What |
|---|---|---|
| `--input <value>` | no | The cycle object to create. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api cycle-shift-all [options]`

- What: Shifts an upcoming cycle and every later cycle in the team by the same number of days. Local times are preserved in the team’s time zone, and the team’s cycle start day is updated. Use this when moving the schedule as a whole; it requires permission to manage the team.
- Call: `mutation cycleShiftAll`, effect: write
- Body: `CycleShiftAllRequest`, required

| Flag | Required | What |
|---|---|---|
| `--input <value>` | no | The shift parameters specifying which cycle to start from and how many days to shift. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api cycle-start-upcoming-cycle-today [options]`

- What: Starts the upcoming cycle as of midnight today. Completes the previous cycle if it has not yet ended. Only the next upcoming (not yet started) cycle for the team can be started. Requires permission to manage the team.
- Call: `mutation cycleStartUpcomingCycleToday`, effect: write
- Body: `CycleStartUpcomingCycleTodayRequest`, required

| Flag | Required | What |
|---|---|---|
| `--id <value>` | no | The identifier of the cycle to start as of midnight today. Must be the upcoming cycle. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api cycle-update [options]`

- What: Updates a cycle’s name, description, or schedule and returns the resulting cycle. Date changes can shorten adjacent cycles to prevent overlap. You cannot change an active cycle’s start or a completed cycle’s dates, or edit inherited cycles directly. Requires permission to manage the team.
- Call: `mutation cycleUpdate`, effect: write
- Body: `CycleUpdateRequest`, required

| Flag | Required | What |
|---|---|---|
| `--input <value>` | no | A partial cycle object to update the cycle with. |
| `--id <value>` | no | The identifier of the cycle to update. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api cycles [options]`

- What: All cycles accessible to the user.
- Call: `query cycles`, effect: read
- Pages: cursor: send `after` (body), read the next one from `pageInfo.endCursor`; items in `nodes`; `pageInfo.hasNextPage` is false on the last page; page size in `first` (body)
- Body: `CyclesRequest`

| Flag | Required | What |
|---|---|---|
| `--filter <value>` | no | Filter returned cycles. |
| `--before <value>` | no | Returns results before this cursor. Pair with \`last\` to paginate backward, using a cursor returned by the same connection. Keep the filters and ordering unchanged between pages. Cannot be combined with \`first\` or \`after\`. |
| `--after <value>` | no | Returns results after this cursor. Pair with \`first\` and the previous page's \`endCursor\` to fetch the next page. Keep the filters and ordering unchanged between pages. Cannot be combined with \`last\` or \`before\`. |
| `--first <value>` | no | The maximum number of results to return, starting after \`after\` if supplied. Between 1 and 250. Defaults to 50 when neither \`first\` nor \`last\` is supplied. Cannot be combined with \`last\` or \`before\`. |
| `--last <value>` | no | The maximum number of results to return, ending before \`before\` if supplied. Between 1 and 250. Cannot be combined with \`first\` or \`after\`. |
| `--include-archived <value>` | no | Includes archived resources alongside active ones. Defaults to false, which returns only active resources. This does not include deleted resources. |
| `--order-by <value>` | no | Orders results by creation time or last meaningful update time. Defaults to \`createdAt\`. Results are newest first with \`first\` and oldest first with \`last\`; use the returned \`endCursor\` as \`before\` to continue backward. Cannot be combined with custom \`sort\` options on fields that support them. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |
| `--all` | no | read every page, as the API pages it |
