<!-- Generated from the API manifest and the command tree by pnpm generate. Do not edit. -->

# Linear API: organization-invite

## `linear api organization-invite [options]`

- What: Fetches a specific workspace invite by its ID.
- Call: `query organizationInvite`, effect: read
- Body: `OrganizationInviteRequest`, required

| Flag | Required | What |
|---|---|---|
| `--id <value>` | no | The identifier of the invite to retrieve. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api organization-invite-create [options]`

- What: Invites an email address to the workspace and sends an invitation email. Your role and workspace invitation settings must allow the requested role and teams. Guest invitations require teams; an existing user or unexpired invitation for the address causes an error.
- Call: `mutation organizationInviteCreate`, effect: write
- Body: `OrganizationInviteCreateRequest`, required

| Flag | Required | What |
|---|---|---|
| `--input <value>` | no | The organization invite object to create. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api organization-invite-delete [options]`

- What: Deletes (archives) a workspace invite, preventing it from being accepted.
- Call: `mutation organizationInviteDelete`, effect: destructive
- Permission keys: `linear.delete`
- Body: `OrganizationInviteDeleteRequest`, required

| Flag | Required | What |
|---|---|---|
| `--id <value>` | no | The identifier of the organization invite to delete. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api organization-invite-details [options]`

- What: Fetches public details of a specific workspace invite by its ID. This query does not require authentication and is used for invite acceptance flows.
- Call: `query organizationInviteDetails`, effect: read
- Body: `OrganizationInviteDetailsRequest`, required

| Flag | Required | What |
|---|---|---|
| `--id <value>` | no | The identifier of the invite to retrieve details for. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api organization-invite-update [options]`

- What: Replaces the teams an invitee will join on acceptance. Requires permission to manage invitations, and the selected teams must be valid for the invite’s role. This does not change the invitee’s email or role.
- Call: `mutation organizationInviteUpdate`, effect: write
- Body: `OrganizationInviteUpdateRequest`, required

| Flag | Required | What |
|---|---|---|
| `--input <value>` | no | The updates to make to the organization invite object. |
| `--id <value>` | no | The identifier of the organization invite to update. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api organization-invites [options]`

- What: All pending and accepted invites for the workspace.
- Call: `query organizationInvites`, effect: read
- Pages: cursor: send `after` (body), read the next one from `pageInfo.endCursor`; items in `nodes`; `pageInfo.hasNextPage` is false on the last page; page size in `first` (body)
- Body: `OrganizationInvitesRequest`

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

## `linear api resend-organization-invite [options]`

- What: Re-sends a workspace invitation email for the specified invite ID.
- Call: `mutation resendOrganizationInvite`, effect: write
- Body: `ResendOrganizationInviteRequest`, required

| Flag | Required | What |
|---|---|---|
| `--id <value>` | no | The identifier of the organization invite to re-send. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api resend-organization-invite-by-email [options]`

- What: Re-sends a workspace invitation email to the specified email address, if an outstanding invite exists for that address.
- Call: `mutation resendOrganizationInviteByEmail`, effect: write
- Body: `ResendOrganizationInviteByEmailRequest`, required

| Flag | Required | What |
|---|---|---|
| `--email <value>` | no | The email address tied to the organization invite to re-send. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |
