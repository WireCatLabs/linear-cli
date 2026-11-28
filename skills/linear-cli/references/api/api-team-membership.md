<!-- Generated from the API manifest and the command tree by pnpm generate. Do not edit. -->

# Linear API: team-membership

## `linear api team-membership [options]`

- What: Fetches a specific team membership by its ID.
- Call: `query teamMembership`, effect: read
- Body: `TeamMembershipRequest`, required

| Flag | Required | What |
|---|---|---|
| `--id <value>` | no | The identifier of the team membership to retrieve. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api team-membership-create [options]`

- What: Adds a user to an active team after checking permission and membership limits. Regular workspace members also join ancestor teams. The operation fails if the user is already a member or if the team is archived, retired, or managed through SCIM.
- Call: `mutation teamMembershipCreate`, effect: write
- Body: `TeamMembershipCreateRequest`, required

| Flag | Required | What |
|---|---|---|
| `--input <value>` | no | The team membership object to create. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api team-membership-delete [options]`

- What: Removes a user from a team after checking removal permissions and membership restrictions. Leaving cannot remove the user’s last active team, and SCIM-managed memberships must be managed through the identity provider. alsoLeaveParentTeams can extend the removal to parent teams.
- Call: `mutation teamMembershipDelete`, effect: destructive
- Permission keys: `linear.delete`
- Body: `TeamMembershipDeleteRequest`, required

| Flag | Required | What |
|---|---|---|
| `--also-leave-parent-teams <value>` | no | Whether to leave the parent teams. |
| `--id <value>` | no | The identifier of the team membership to delete. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api team-membership-update [options]`

- What: Updates the team’s position in the member’s team list.
- Call: `mutation teamMembershipUpdate`, effect: write
- Body: `TeamMembershipUpdateRequest`, required

| Flag | Required | What |
|---|---|---|
| `--input <value>` | no | A partial team membership object to update the team membership with. |
| `--id <value>` | no | The identifier of the team membership to update. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api team-memberships [options]`

- What: All team memberships in the workspace.
- Call: `query teamMemberships`, effect: read
- Pages: cursor: send `after` (body), read the next one from `pageInfo.endCursor`; items in `nodes`; `pageInfo.hasNextPage` is false on the last page; page size in `first` (body)
- Body: `TeamMembershipsRequest`

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
