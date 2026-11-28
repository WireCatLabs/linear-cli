<!-- Generated from the API manifest and the command tree by pnpm generate. Do not edit. -->

# Linear API: project-milestone

## `linear api project-milestone [options]`

- What: Fetches a milestone by UUID, including archived milestones.
- Call: `query projectMilestone`, effect: read
- Body: `ProjectMilestoneRequest`, required

| Flag | Required | What |
|---|---|---|
| `--id <value>` | no | The UUID of the milestone. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api project-milestone-create [options]`

- What: Creates a milestone in a project you can edit. Its name must be unique among the project’s active milestones. A milestone starts without issues; assign issues to it separately.
- Call: `mutation projectMilestoneCreate`, effect: write
- Body: `ProjectMilestoneCreateRequest`, required

| Flag | Required | What |
|---|---|---|
| `--input <value>` | no | The project milestone to create. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api project-milestone-delete [options]`

- What: Permanently deletes a milestone from a project you can edit. The issues are kept in the project, but their milestone association is removed.
- Call: `mutation projectMilestoneDelete`, effect: destructive
- Permission keys: `linear.delete`
- Body: `ProjectMilestoneDeleteRequest`, required

| Flag | Required | What |
|---|---|---|
| `--id <value>` | no | The identifier of the project milestone to delete. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api project-milestone-move [options]`

- What: Moves a milestone and its issues to another project, including archived issues. The caller must have access to every issue in the milestone, and the milestone and destination project must be writable. If an issue's team is not part of the destination project, provide newIssueTeamId or addIssueTeamToProject. The returned team snapshots can be passed to the undo inputs when moving the milestone back to its original project.
- Call: `mutation projectMilestoneMove`, effect: write
- Body: `ProjectMilestoneMoveRequest`, required

| Flag | Required | What |
|---|---|---|
| `--input <value>` | no | The project to move the milestone to, as well as any additional options need to make a successful move, or undo a previous move. |
| `--id <value>` | no | The identifier of the project milestone to move. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api project-milestone-update [options]`

- What: Updates a milestone in a project you can edit, including an archived milestone. Omitted fields keep their current values. Changing projectId moves the milestone and clears its links from issue drafts in the previous project.
- Call: `mutation projectMilestoneUpdate`, effect: write
- Body: `ProjectMilestoneUpdateRequest`, required

| Flag | Required | What |
|---|---|---|
| `--input <value>` | no | A partial object to update the project milestone with. |
| `--id <value>` | no | The identifier of the project milestone to update. Also the identifier from the URL is accepted. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api project-milestones [options]`

- What: Returns all project milestones in the workspace, with optional filtering.
- Call: `query projectMilestones`, effect: read
- Pages: cursor: send `after` (body), read the next one from `pageInfo.endCursor`; items in `nodes`; `pageInfo.hasNextPage` is false on the last page; page size in `first` (body)
- Body: `ProjectMilestonesRequest`

| Flag | Required | What |
|---|---|---|
| `--filter <value>` | no | Filter returned project milestones. |
| `--before <value>` | no | Returns results before this cursor. Pair with \`last\` to paginate backward, using a cursor returned by the same connection. Keep the filters and ordering unchanged between pages. Cannot be combined with \`first\` or \`after\`. |
| `--after <value>` | no | Returns results after this cursor. Pair with \`first\` and the previous page's \`endCursor\` to fetch the next page. Keep the filters and ordering unchanged between pages. Cannot be combined with \`last\` or \`before\`. |
| `--first <value>` | no | The maximum number of results to return, starting after \`after\` if supplied. Between 1 and 250. Defaults to 50 when neither \`first\` nor \`last\` is supplied. Cannot be combined with \`last\` or \`before\`. |
| `--last <value>` | no | The maximum number of results to return, ending before \`before\` if supplied. Between 1 and 250. Cannot be combined with \`first\` or \`after\`. |
| `--include-archived <value>` | no | Includes archived resources alongside active ones. Defaults to false, which returns only active resources. This does not include deleted resources. |
| `--order-by <value>` | no | Orders results by creation time or last meaningful update time. Defaults to \`createdAt\`. Results are newest first with \`first\` and oldest first with \`last\`; use the returned \`endCursor\` as \`before\` to continue backward. Cannot be combined with custom \`sort\` options on fields that support them. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |
| `--all` | no | read every page, as the API pages it |
