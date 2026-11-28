<!-- Generated from the API manifest and the command tree by pnpm generate. Do not edit. -->

# Linear API: issue-label

## `linear api issue-label [options]`

- What: A label by UUID, including archived labels.
- Call: `query issueLabel`, effect: read
- Body: `IssueLabelRequest`, required

| Flag | Required | What |
|---|---|---|
| `--id <value>` | no | The identifier of the label to retrieve. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api issue-label-create [options]`

- What: Create a workspace or team label. Requires permission to manage labels in its scope.
- Call: `mutation issueLabelCreate`, effect: write
- Body: `IssueLabelCreateRequest`, required

| Flag | Required | What |
|---|---|---|
| `--replace-team-labels <value>` | no | Whether to replace all team-specific labels with the same name with this newly created workspace label (default: false). |
| `--input <value>` | no | The issue label to create. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api issue-label-delete [options]`

- What: Deletes a label and its inherited copies. Assignments to that label are removed from issues in the background, so they may remain visible briefly after the mutation succeeds. Retire a label instead if you want to preserve its existing assignments.
- Call: `mutation issueLabelDelete`, effect: destructive
- Permission keys: `linear.delete`
- Body: `IssueLabelDeleteRequest`, required

| Flag | Required | What |
|---|---|---|
| `--id <value>` | no | The identifier of the label to delete. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api issue-label-restore [options]`

- What: Makes a retired label available for new assignments again. Existing issue assignments are preserved. Restoring a group also restores its child labels.
- Call: `mutation issueLabelRestore`, effect: write
- Body: `IssueLabelRestoreRequest`, required

| Flag | Required | What |
|---|---|---|
| `--id <value>` | no | The identifier of the label to restore. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api issue-label-retire [options]`

- What: Retires a label so it cannot be newly assigned, while keeping it on issues that already use it. Retiring a group also retires its children. Use issueLabelRestore to make the label available again.
- Call: `mutation issueLabelRetire`, effect: write
- Body: `IssueLabelRetireRequest`, required

| Flag | Required | What |
|---|---|---|
| `--id <value>` | no | The identifier of the label to retire. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api issue-label-update [options]`

- What: Update a label. Requires permission to manage labels in its scope; inherited labels must be edited at their source.
- Call: `mutation issueLabelUpdate`, effect: write
- Body: `IssueLabelUpdateRequest`, required

| Flag | Required | What |
|---|---|---|
| `--replace-team-labels <value>` | no | Whether to replace all team-specific labels with the same name with this updated workspace label (default: false). |
| `--input <value>` | no | A partial label object to update. |
| `--id <value>` | no | The identifier of the label to update. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api issue-labels [options]`

- What: Workspace and team labels the caller can access, with cursor pagination and optional filters.
- Call: `query issueLabels`, effect: read
- Pages: cursor: send `after` (body), read the next one from `pageInfo.endCursor`; items in `nodes`; `pageInfo.hasNextPage` is false on the last page; page size in `first` (body)
- Body: `IssueLabelsRequest`

| Flag | Required | What |
|---|---|---|
| `--filter <value>` | no | Filter returned issue labels. |
| `--before <value>` | no | Returns results before this cursor. Pair with \`last\` to paginate backward, using a cursor returned by the same connection. Keep the filters and ordering unchanged between pages. Cannot be combined with \`first\` or \`after\`. |
| `--after <value>` | no | Returns results after this cursor. Pair with \`first\` and the previous page's \`endCursor\` to fetch the next page. Keep the filters and ordering unchanged between pages. Cannot be combined with \`last\` or \`before\`. |
| `--first <value>` | no | The maximum number of results to return, starting after \`after\` if supplied. Between 1 and 250. Defaults to 50 when neither \`first\` nor \`last\` is supplied. Cannot be combined with \`last\` or \`before\`. |
| `--last <value>` | no | The maximum number of results to return, ending before \`before\` if supplied. Between 1 and 250. Cannot be combined with \`first\` or \`after\`. |
| `--include-archived <value>` | no | Includes archived resources alongside active ones. Defaults to false, which returns only active resources. This does not include deleted resources. |
| `--order-by <value>` | no | Orders results by creation time or last meaningful update time. Defaults to \`createdAt\`. Results are newest first with \`first\` and oldest first with \`last\`; use the returned \`endCursor\` as \`before\` to continue backward. Cannot be combined with custom \`sort\` options on fields that support them. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |
| `--all` | no | read every page, as the API pages it |
