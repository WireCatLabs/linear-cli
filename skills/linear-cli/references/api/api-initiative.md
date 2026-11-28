<!-- Generated from the API manifest and the command tree by pnpm generate. Do not edit. -->

# Linear API: initiative

## `linear api initiative [options]`

- What: Returns an initiative you can access by UUID, URL slug, or human-readable initiative identifier. Archived initiatives can also be retrieved.
- Call: `query initiative`, effect: read
- Body: `InitiativeRequest`, required

| Flag | Required | What |
|---|---|---|
| `--id <value>` | no | The initiative UUID, slug ID, or human-readable identifier. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api initiative-add-label [options]`

- What: Adds an initiative label while keeping the other labels. Label groups themselves cannot be applied, and the group’s selection rules still apply.
- Call: `mutation initiativeAddLabel`, effect: write
- Body: `InitiativeAddLabelRequest`, required

| Flag | Required | What |
|---|---|---|
| `--label-id <value>` | no | The identifier of the label to add. |
| `--id <value>` | no | The identifier of the initiative to add the label to. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api initiative-archive [options]`

- What: Archives an initiative.
- Call: `mutation initiativeArchive`, effect: destructive
- Permission keys: `linear.delete`
- Body: `InitiativeArchiveRequest`, required

| Flag | Required | What |
|---|---|---|
| `--id <value>` | no | The identifier of the initiative to archive. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api initiative-create [options]`

- What: Creates an initiative in a workspace where initiatives are enabled. You can assign an owner and lead team at creation. Add projects separately with initiativeToProjectCreate, and build a hierarchy with initiativeRelationCreate.
- Call: `mutation initiativeCreate`, effect: write
- Body: `InitiativeCreateRequest`, required

| Flag | Required | What |
|---|---|---|
| `--input <value>` | no | The properties of the initiative to create. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api initiative-delete [options]`

- What: Moves an initiative to the trash instead of immediately deleting it permanently. You can restore it with initiativeUnarchive while it remains available.
- Call: `mutation initiativeDelete`, effect: destructive
- Permission keys: `linear.delete`
- Body: `InitiativeDeleteRequest`, required

| Flag | Required | What |
|---|---|---|
| `--id <value>` | no | The identifier of the initiative to delete. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api initiative-filter-suggestion [options]`

- What: Suggests filters for an initiative view based on a text prompt.
- Call: `query initiativeFilterSuggestion`, effect: read
- Body: `InitiativeFilterSuggestionRequest`, required

| Flag | Required | What |
|---|---|---|
| `--team-id <value>` | no | \[Internal\] The ID of the team if filtering a team view. |
| `--prompt <value>` | no | The text prompt to generate a filter suggestion from. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api initiative-remove-label [options]`

- What: Removes a label from the initiative while keeping its other labels. The label itself is not deleted.
- Call: `mutation initiativeRemoveLabel`, effect: write
- Body: `InitiativeRemoveLabelRequest`, required

| Flag | Required | What |
|---|---|---|
| `--label-id <value>` | no | The identifier of the label to remove. |
| `--id <value>` | no | The identifier of the initiative to remove the label from. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api initiative-unarchive [options]`

- What: Restores an archived or trashed initiative. This makes the existing initiative available again with its saved properties and associations.
- Call: `mutation initiativeUnarchive`, effect: write
- Body: `InitiativeUnarchiveRequest`, required

| Flag | Required | What |
|---|---|---|
| `--id <value>` | no | The identifier of the initiative to unarchive. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api initiative-update [options]`

- What: Updates the supplied fields of an initiative you can access. Omitted fields keep their current values. Changing the lead team can change who can see the initiative, and the owner must be able to access the new team.
- Call: `mutation initiativeUpdate`, effect: write
- Body: `InitiativeUpdateRequest`, required

| Flag | Required | What |
|---|---|---|
| `--input <value>` | no | The properties of the initiative to update. |
| `--id <value>` | no | The identifier of the initiative to update. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api initiatives [options]`

- What: Returns initiatives visible to you in the workspace, with optional filtering and sorting. Initiative access follows its lead team when one is assigned.
- Call: `query initiatives`, effect: read
- Pages: cursor: send `after` (body), read the next one from `pageInfo.endCursor`; items in `nodes`; `pageInfo.hasNextPage` is false on the last page; page size in `first` (body)
- Body: `InitiativesRequest`

| Flag | Required | What |
|---|---|---|
| `--filter <value>` | no | Filter returned initiatives. |
| `--before <value>` | no | Returns results before this cursor. Pair with \`last\` to paginate backward, using a cursor returned by the same connection. Keep the filters and ordering unchanged between pages. Cannot be combined with \`first\` or \`after\`. |
| `--after <value>` | no | Returns results after this cursor. Pair with \`first\` and the previous page's \`endCursor\` to fetch the next page. Keep the filters and ordering unchanged between pages. Cannot be combined with \`last\` or \`before\`. |
| `--first <value>` | no | The maximum number of results to return, starting after \`after\` if supplied. Between 1 and 250. Defaults to 50 when neither \`first\` nor \`last\` is supplied. Cannot be combined with \`last\` or \`before\`. |
| `--last <value>` | no | The maximum number of results to return, ending before \`before\` if supplied. Between 1 and 250. Cannot be combined with \`first\` or \`after\`. |
| `--include-archived <value>` | no | Includes archived resources alongside active ones. Defaults to false, which returns only active resources. This does not include deleted resources. |
| `--order-by <value>` | no | Orders results by creation time or last meaningful update time. Defaults to \`createdAt\`. Results are newest first with \`first\` and oldest first with \`last\`; use the returned \`endCursor\` as \`before\` to continue backward. Cannot be combined with custom \`sort\` options on fields that support them. |
| `--sort <value>` | no | Sort returned initiatives. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |
| `--all` | no | read every page, as the API pages it |
