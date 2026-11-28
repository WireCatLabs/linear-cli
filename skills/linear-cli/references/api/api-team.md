<!-- Generated from the API manifest and the command tree by pnpm generate. Do not edit. -->

# Linear API: team

## `linear api administrable-teams [options]`

- What: All teams whose settings the user can administer. This includes teams the user can change settings for, but whose issues they may not have direct access to. This differs from the \`teams\` query which returns teams based on issue access.
- Call: `query administrableTeams`, effect: read
- Pages: cursor: send `after` (body), read the next one from `pageInfo.endCursor`; items in `nodes`; `pageInfo.hasNextPage` is false on the last page; page size in `first` (body)
- Body: `AdministrableTeamsRequest`

| Flag | Required | What |
|---|---|---|
| `--filter <value>` | no | Filter returned teams. |
| `--before <value>` | no | Returns results before this cursor. Pair with \`last\` to paginate backward, using a cursor returned by the same connection. Keep the filters and ordering unchanged between pages. Cannot be combined with \`first\` or \`after\`. |
| `--after <value>` | no | Returns results after this cursor. Pair with \`first\` and the previous page's \`endCursor\` to fetch the next page. Keep the filters and ordering unchanged between pages. Cannot be combined with \`last\` or \`before\`. |
| `--first <value>` | no | The maximum number of results to return, starting after \`after\` if supplied. Between 1 and 250. Defaults to 50 when neither \`first\` nor \`last\` is supplied. Cannot be combined with \`last\` or \`before\`. |
| `--last <value>` | no | The maximum number of results to return, ending before \`before\` if supplied. Between 1 and 250. Cannot be combined with \`first\` or \`after\`. |
| `--include-archived <value>` | no | Includes archived resources alongside active ones. Defaults to false, which returns only active resources. This does not include deleted resources. |
| `--order-by <value>` | no | Orders results by creation time or last meaningful update time. Defaults to \`createdAt\`. Results are newest first with \`first\` and oldest first with \`last\`; use the returned \`endCursor\` as \`before\` to continue backward. Cannot be combined with custom \`sort\` options on fields that support them. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |
| `--all` | no | read every page, as the API pages it |

## `linear api team [options]`

- What: Fetches a specific team by its ID.
- Call: `query team`, effect: read
- Body: `TeamRequest`, required

| Flag | Required | What |
|---|---|---|
| `--id <value>` | no | The identifier of the team to retrieve. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api team-create [options]`

- What: Creates a team with workflow states, labels, and other initial resources. You become a member and, for private teams or plans that support team owners, an owner. copySettingsFromTeamId copies settings and related resources from an existing team; copied settings take precedence over input values except an explicit private value.
- Call: `mutation teamCreate`, effect: write
- Body: `TeamCreateRequest`, required

| Flag | Required | What |
|---|---|---|
| `--copy-settings-from-team-id <value>` | no | The team id to copy settings from, if any. |
| `--input <value>` | no | The team object to create. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api team-cycles-delete [options]`

- What: Permanently deletes all cycles for a team and disables cycles. Issues are kept, but their cycle associations are removed. Requires permission to manage the team.
- Call: `mutation teamCyclesDelete`, effect: destructive
- Permission keys: `linear.delete`
- Body: `TeamCyclesDeleteRequest`, required

| Flag | Required | What |
|---|---|---|
| `--id <value>` | no | The identifier of the team, which cycles will be deleted. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api team-delete [options]`

- What: Archives a team and schedules permanent deletion after a 30-day grace period. You cannot delete the workspace’s final active team. Requires a workspace administrator or team owner; use teamUnarchive before deletion begins to restore it.
- Call: `mutation teamDelete`, effect: destructive
- Permission keys: `linear.delete`
- Body: `TeamDeleteRequest`, required

| Flag | Required | What |
|---|---|---|
| `--id <value>` | no | The identifier of the team to delete. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api team-key-delete [options]`

- What: Deletes a previously used team key. The active team key (the team's current key) cannot be deleted.
- Call: `mutation teamKeyDelete`, effect: destructive
- Permission keys: `linear.delete`
- Body: `TeamKeyDeleteRequest`, required

| Flag | Required | What |
|---|---|---|
| `--id <value>` | no | The identifier of the team key to delete. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api team-unarchive [options]`

- What: Restores an archived team and cancels its scheduled deletion while the grace period still permits cancellation. Requires workspace team-management permission, access to the team, and capacity for another active team on the workspace’s plan.
- Call: `mutation teamUnarchive`, effect: write
- Body: `TeamUnarchiveRequest`, required

| Flag | Required | What |
|---|---|---|
| `--id <value>` | no | The identifier of the team to unarchive. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api team-update [options]`

- What: Updates the supplied team fields. Changes require the relevant team-management permissions.
- Call: `mutation teamUpdate`, effect: write
- Body: `TeamUpdateRequest`, required

| Flag | Required | What |
|---|---|---|
| `--mapping <value>` | no | \[INTERNAL\] Mapping of existing team entities to those inherited from the parent team |
| `--input <value>` | no | A partial team object to update the team with. |
| `--id <value>` | no | The identifier of the team to update. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api teams [options]`

- What: All teams whose issues the user can access. This includes public teams and private teams the user is a member of. This may differ from \`administrableTeams\`, which returns teams whose settings the user can change but whose issues they don't necessarily have access to.
- Call: `query teams`, effect: read
- Pages: cursor: send `after` (body), read the next one from `pageInfo.endCursor`; items in `nodes`; `pageInfo.hasNextPage` is false on the last page; page size in `first` (body)
- Body: `TeamsRequest`

| Flag | Required | What |
|---|---|---|
| `--filter <value>` | no | Filter returned teams. |
| `--before <value>` | no | Returns results before this cursor. Pair with \`last\` to paginate backward, using a cursor returned by the same connection. Keep the filters and ordering unchanged between pages. Cannot be combined with \`first\` or \`after\`. |
| `--after <value>` | no | Returns results after this cursor. Pair with \`first\` and the previous page's \`endCursor\` to fetch the next page. Keep the filters and ordering unchanged between pages. Cannot be combined with \`last\` or \`before\`. |
| `--first <value>` | no | The maximum number of results to return, starting after \`after\` if supplied. Between 1 and 250. Defaults to 50 when neither \`first\` nor \`last\` is supplied. Cannot be combined with \`last\` or \`before\`. |
| `--last <value>` | no | The maximum number of results to return, ending before \`before\` if supplied. Between 1 and 250. Cannot be combined with \`first\` or \`after\`. |
| `--include-archived <value>` | no | Includes archived resources alongside active ones. Defaults to false, which returns only active resources. This does not include deleted resources. |
| `--order-by <value>` | no | Orders results by creation time or last meaningful update time. Defaults to \`createdAt\`. Results are newest first with \`first\` and oldest first with \`last\`; use the returned \`endCursor\` as \`before\` to continue backward. Cannot be combined with custom \`sort\` options on fields that support them. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |
| `--all` | no | read every page, as the API pages it |
