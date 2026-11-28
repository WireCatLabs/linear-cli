<!-- Generated from the API manifest and the command tree by pnpm generate. Do not edit. -->

# Linear API: release-stage

## `linear api release-stage [options]`

- What: Fetch a single release stage by its UUID.
- Call: `query releaseStage`, effect: read
- Body: `ReleaseStageRequest`, required

| Flag | Required | What |
|---|---|---|
| `--id <value>` | no | The UUID of the release stage. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api release-stage-archive [options]`

- What: Archives a release stage. Only started-type stages can be archived, and only if they have no active releases and at least one other stage of the same type remains. Cannot archive the last non-frozen started stage.
- Call: `mutation releaseStageArchive`, effect: destructive
- Permission keys: `linear.delete`
- Body: `ReleaseStageArchiveRequest`, required

| Flag | Required | What |
|---|---|---|
| `--id <value>` | no | The identifier of the release stage to archive. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api release-stage-create [options]`

- What: Creates a new release stage in a pipeline. Non-started stages must use default names and colors and are unique by type; creating a canonical duplicate returns the existing stage. Started stages can optionally be frozen, but at least one non-frozen started stage must remain.
- Call: `mutation releaseStageCreate`, effect: write
- Body: `ReleaseStageCreateRequest`, required

| Flag | Required | What |
|---|---|---|
| `--input <value>` | no | The ReleaseStage object to create. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api release-stage-unarchive [options]`

- What: Unarchives a release stage.
- Call: `mutation releaseStageUnarchive`, effect: write
- Body: `ReleaseStageUnarchiveRequest`, required

| Flag | Required | What |
|---|---|---|
| `--id <value>` | no | The identifier of the release stage to unarchive. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api release-stage-update [options]`

- What: Updates an existing release stage. Only started-type stages can be edited. Supports updating name, color, position, and frozen status.
- Call: `mutation releaseStageUpdate`, effect: write
- Body: `ReleaseStageUpdateRequest`, required

| Flag | Required | What |
|---|---|---|
| `--input <value>` | no | A partial ReleaseStage object to update the ReleaseStage with. |
| `--id <value>` | no | The identifier of the release stage to update. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api release-stages [options]`

- What: All release stages in the workspace, with optional filtering.
- Call: `query releaseStages`, effect: read
- Pages: cursor: send `after` (body), read the next one from `pageInfo.endCursor`; items in `nodes`; `pageInfo.hasNextPage` is false on the last page; page size in `first` (body)
- Body: `ReleaseStagesRequest`

| Flag | Required | What |
|---|---|---|
| `--filter <value>` | no | Filter returned release stages. |
| `--before <value>` | no | Returns results before this cursor. Pair with \`last\` to paginate backward, using a cursor returned by the same connection. Keep the filters and ordering unchanged between pages. Cannot be combined with \`first\` or \`after\`. |
| `--after <value>` | no | Returns results after this cursor. Pair with \`first\` and the previous page's \`endCursor\` to fetch the next page. Keep the filters and ordering unchanged between pages. Cannot be combined with \`last\` or \`before\`. |
| `--first <value>` | no | The maximum number of results to return, starting after \`after\` if supplied. Between 1 and 250. Defaults to 50 when neither \`first\` nor \`last\` is supplied. Cannot be combined with \`last\` or \`before\`. |
| `--last <value>` | no | The maximum number of results to return, ending before \`before\` if supplied. Between 1 and 250. Cannot be combined with \`first\` or \`after\`. |
| `--include-archived <value>` | no | Includes archived resources alongside active ones. Defaults to false, which returns only active resources. This does not include deleted resources. |
| `--order-by <value>` | no | Orders results by creation time or last meaningful update time. Defaults to \`createdAt\`. Results are newest first with \`first\` and oldest first with \`last\`; use the returned \`endCursor\` as \`before\` to continue backward. Cannot be combined with custom \`sort\` options on fields that support them. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |
| `--all` | no | read every page, as the API pages it |
