<!-- Generated from the API manifest and the command tree by pnpm generate. Do not edit. -->

# Linear API: release-pipeline

## `linear api release-pipeline [options]`

- What: Fetch a single release pipeline by its UUID or slug identifier.
- Call: `query releasePipeline`, effect: read
- Body: `ReleasePipelineRequest`, required

| Flag | Required | What |
|---|---|---|
| `--id <value>` | no | The release pipeline UUID or slug ID. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api release-pipeline-archive [options]`

- What: Archives a pipeline and schedules archival of its releases. The release changes run in the background, so they may not be complete when this mutation returns. Requires workspace team-management permission or ownership of every associated team.
- Call: `mutation releasePipelineArchive`, effect: destructive
- Permission keys: `linear.delete`
- Body: `ReleasePipelineArchiveRequest`, required

| Flag | Required | What |
|---|---|---|
| `--id <value>` | no | The identifier of the release pipeline to archive. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api release-pipeline-by-access-key`

- What: Returns the release pipeline associated with the access key.
- Call: `query releasePipelineByAccessKey`, effect: read

## `linear api release-pipeline-create [options]`

- What: Creates a release pipeline with default stages, subject to your workspace’s plan and quota. Requires workspace team-management permission or ownership of every team associated with the pipeline.
- Call: `mutation releasePipelineCreate`, effect: write
- Body: `ReleasePipelineCreateRequest`, required

| Flag | Required | What |
|---|---|---|
| `--input <value>` | no | The ReleasePipeline object to create. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api release-pipeline-delete [options]`

- What: Moves a pipeline and its releases to the trash for permanent deletion after the retention period. Repeating the operation does not extend that period. Requires workspace team-management permission or ownership of every associated team.
- Call: `mutation releasePipelineDelete`, effect: destructive
- Permission keys: `linear.delete`
- Body: `ReleasePipelineDeleteRequest`, required

| Flag | Required | What |
|---|---|---|
| `--id <value>` | no | The identifier of the release pipeline to delete. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api release-pipeline-unarchive [options]`

- What: Restores a pipeline and schedules restoration of its archived releases. Individually trashed releases are left in the trash. The release changes run in the background, and the same pipeline administration permissions apply.
- Call: `mutation releasePipelineUnarchive`, effect: write
- Body: `ReleasePipelineUnarchiveRequest`, required

| Flag | Required | What |
|---|---|---|
| `--id <value>` | no | The identifier of the release pipeline to unarchive. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api release-pipeline-update [options]`

- What: Updates an existing release pipeline. Supports updating name, slug, type, production flag, path patterns, and team associations. Private teams that the current user cannot access are preserved in the team list.
- Call: `mutation releasePipelineUpdate`, effect: write
- Body: `ReleasePipelineUpdateRequest`, required

| Flag | Required | What |
|---|---|---|
| `--input <value>` | no | A partial ReleasePipeline object to update the ReleasePipeline with. |
| `--id <value>` | no | The identifier of the release pipeline to update. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api release-pipelines [options]`

- What: All release pipelines in the workspace, with optional filtering and sorting.
- Call: `query releasePipelines`, effect: read
- Pages: cursor: send `after` (body), read the next one from `pageInfo.endCursor`; items in `nodes`; `pageInfo.hasNextPage` is false on the last page; page size in `first` (body)
- Body: `ReleasePipelinesRequest`

| Flag | Required | What |
|---|---|---|
| `--filter <value>` | no | Filter returned release pipelines. |
| `--before <value>` | no | Returns results before this cursor. Pair with \`last\` to paginate backward, using a cursor returned by the same connection. Keep the filters and ordering unchanged between pages. Cannot be combined with \`first\` or \`after\`. |
| `--after <value>` | no | Returns results after this cursor. Pair with \`first\` and the previous page's \`endCursor\` to fetch the next page. Keep the filters and ordering unchanged between pages. Cannot be combined with \`last\` or \`before\`. |
| `--first <value>` | no | The maximum number of results to return, starting after \`after\` if supplied. Between 1 and 250. Defaults to 50 when neither \`first\` nor \`last\` is supplied. Cannot be combined with \`last\` or \`before\`. |
| `--last <value>` | no | The maximum number of results to return, ending before \`before\` if supplied. Between 1 and 250. Cannot be combined with \`first\` or \`after\`. |
| `--include-archived <value>` | no | Includes archived resources alongside active ones. Defaults to false, which returns only active resources. This does not include deleted resources. |
| `--order-by <value>` | no | Orders results by creation time or last meaningful update time. Defaults to \`createdAt\`. Results are newest first with \`first\` and oldest first with \`last\`; use the returned \`endCursor\` as \`before\` to continue backward. Cannot be combined with custom \`sort\` options on fields that support them. |
| `--sort <value>` | no | Sort returned release pipelines. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |
| `--all` | no | read every page, as the API pages it |
