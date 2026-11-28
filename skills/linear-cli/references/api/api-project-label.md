<!-- Generated from the API manifest and the command tree by pnpm generate. Do not edit. -->

# Linear API: project-label

## `linear api project-label [options]`

- What: Returns a single project label by its identifier.
- Call: `query projectLabel`, effect: read
- Body: `ProjectLabelRequest`, required

| Flag | Required | What |
|---|---|---|
| `--id <value>` | no | The UUID of the project label. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api project-label-create [options]`

- What: Creates a label or label group for projects. Workspace labels require workspace label-management permission; team labels require label-management permission in that team and a plan that supports team project labels. replaceTeamLabels can migrate matching labels into the new scope.
- Call: `mutation projectLabelCreate`, effect: write
- Body: `ProjectLabelCreateRequest`, required

| Flag | Required | What |
|---|---|---|
| `--replace-team-labels <value>` | no | Whether to replace all team-specific labels with the same name with this newly created workspace label (default: false). |
| `--input <value>` | no | The project label to create. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api project-label-delete [options]`

- What: Deletes a project label, its children, and inherited copies, removing their assignments from projects.
- Call: `mutation projectLabelDelete`, effect: destructive
- Permission keys: `linear.delete`
- Body: `ProjectLabelDeleteRequest`, required

| Flag | Required | What |
|---|---|---|
| `--id <value>` | no | The identifier of the label to delete. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api project-label-restore [options]`

- What: Restores a previously retired project label, making it available for use on new projects.
- Call: `mutation projectLabelRestore`, effect: write
- Body: `ProjectLabelRestoreRequest`, required

| Flag | Required | What |
|---|---|---|
| `--id <value>` | no | The identifier of the label to restore. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api project-label-retire [options]`

- What: Retires a project label. Retired labels remain on existing projects but cannot be applied to new ones.
- Call: `mutation projectLabelRetire`, effect: write
- Body: `ProjectLabelRetireRequest`, required

| Flag | Required | What |
|---|---|---|
| `--id <value>` | no | The identifier of the label to retire. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api project-label-update [options]`

- What: Updates the supplied project-label fields and propagates changes to inherited copies. Requires label-management permission for the label’s workspace or team. Update the source label rather than an inherited copy.
- Call: `mutation projectLabelUpdate`, effect: write
- Body: `ProjectLabelUpdateRequest`, required

| Flag | Required | What |
|---|---|---|
| `--replace-team-labels <value>` | no | Whether to replace all team-specific labels with the same name with this updated workspace label (default: false). |
| `--input <value>` | no | A partial label object to update. |
| `--id <value>` | no | The identifier of the label to update. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api project-labels [options]`

- What: All project labels. Returns a paginated list of labels visible to the authenticated user, including both workspace-level and team-scoped labels, with optional filtering.
- Call: `query projectLabels`, effect: read
- Pages: cursor: send `after` (body), read the next one from `pageInfo.endCursor`; items in `nodes`; `pageInfo.hasNextPage` is false on the last page; page size in `first` (body)
- Body: `ProjectLabelsRequest`

| Flag | Required | What |
|---|---|---|
| `--filter <value>` | no | Filter returned project labels. |
| `--before <value>` | no | Returns results before this cursor. Pair with \`last\` to paginate backward, using a cursor returned by the same connection. Keep the filters and ordering unchanged between pages. Cannot be combined with \`first\` or \`after\`. |
| `--after <value>` | no | Returns results after this cursor. Pair with \`first\` and the previous page's \`endCursor\` to fetch the next page. Keep the filters and ordering unchanged between pages. Cannot be combined with \`last\` or \`before\`. |
| `--first <value>` | no | The maximum number of results to return, starting after \`after\` if supplied. Between 1 and 250. Defaults to 50 when neither \`first\` nor \`last\` is supplied. Cannot be combined with \`last\` or \`before\`. |
| `--last <value>` | no | The maximum number of results to return, ending before \`before\` if supplied. Between 1 and 250. Cannot be combined with \`first\` or \`after\`. |
| `--include-archived <value>` | no | Includes archived resources alongside active ones. Defaults to false, which returns only active resources. This does not include deleted resources. |
| `--order-by <value>` | no | Orders results by creation time or last meaningful update time. Defaults to \`createdAt\`. Results are newest first with \`first\` and oldest first with \`last\`; use the returned \`endCursor\` as \`before\` to continue backward. Cannot be combined with custom \`sort\` options on fields that support them. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |
| `--all` | no | read every page, as the API pages it |
