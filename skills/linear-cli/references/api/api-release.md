<!-- Generated from the API manifest and the command tree by pnpm generate. Do not edit. -->

# Linear API: release

## `linear api latest-release-by-access-key`

- What: Returns the most recently completed or updated release for the pipeline associated with the access key.
- Call: `query latestReleaseByAccessKey`, effect: read

## `linear api recent-releases-by-access-key [options]`

- What: Returns releases for the pipeline associated with the access key, ordered with the most recently completed or updated first.
- Call: `query recentReleasesByAccessKey`, effect: read
- Body: `RecentReleasesByAccessKeyRequest`

| Flag | Required | What |
|---|---|---|
| `--after <value>` | no | Returns releases after this release in the same order. Pass the ID of the last release from the previous page, and keep \`includeArchived\` unchanged between pages. A started release moves up when it is updated, so it can be skipped or repeated while you page. |
| `--include-archived <value>` | no | Includes archived releases alongside active ones. Defaults to false. Completed releases are archived automatically six months after completion when they have no unarchived issues. Deleted releases and releases of archived pipelines are never returned. |
| `--limit <value>` | no | Maximum number of releases to return. Defaults to 20 and is capped at 100. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api release [options]`

- What: Fetch a single release by its UUID or slug identifier.
- Call: `query release`, effect: read
- Body: `ReleaseRequest`, required

| Flag | Required | What |
|---|---|---|
| `--id <value>` | no | The release UUID or slug ID. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api release-archive [options]`

- What: Archives a release.
- Call: `mutation releaseArchive`, effect: destructive
- Permission keys: `linear.delete`
- Body: `ReleaseArchiveRequest`, required

| Flag | Required | What |
|---|---|---|
| `--id <value>` | no | The identifier of the release to archive. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api release-complete [options]`

- What: Completes the release identified by pipeline and version, or the latest started release when version is omitted. Completing a scheduled release may move its open issues to the next release, according to the pipeline’s rollover setting.
- Call: `mutation releaseComplete`, effect: write
- Body: `ReleaseCompleteRequest`, required

| Flag | Required | What |
|---|---|---|
| `--input <value>` | no | The input containing the pipeline ID and optional version. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api release-complete-by-access-key [options]`

- What: Marks a release as completed using an access key. If version is provided, completes that specific release; otherwise completes the most recent started release. The pipeline is inferred from the access key.
- Call: `mutation releaseCompleteByAccessKey`, effect: write
- Body: `ReleaseCompleteByAccessKeyRequest`, required

| Flag | Required | What |
|---|---|---|
| `--input <value>` | no | The input containing the optional version. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api release-create [options]`

- What: Creates a new release in a pipeline. If no stage is specified, defaults to the first completed stage for continuous pipelines or the first started stage for scheduled pipelines.
- Call: `mutation releaseCreate`, effect: write
- Body: `ReleaseCreateRequest`, required

| Flag | Required | What |
|---|---|---|
| `--input <value>` | no | The release to create. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api release-delete [options]`

- What: Moves a release to trash for permanent deletion after the retention period. Use releaseUnarchive to restore it before deletion.
- Call: `mutation releaseDelete`, effect: destructive
- Permission keys: `linear.delete`
- Body: `ReleaseDeleteRequest`, required

| Flag | Required | What |
|---|---|---|
| `--id <value>` | no | The identifier of the release to delete. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api release-search [options]`

- What: Search releases with optional text matching against name, version, and pipeline name. When no search term is provided, returns releases ordered by stage priority (started &gt; planned &gt; completed &gt; canceled).
- Call: `query releaseSearch`, effect: read
- Body: `ReleaseSearchRequest`

| Flag | Required | What |
|---|---|---|
| `--filter <value>` | no | Filter to apply to the release results. |
| `--first <value>` | no | Maximum results. Capped at 50. |
| `--term <value>` | no | Search term to match against release name, version, and pipeline name. When omitted, returns releases ordered by stage priority. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api release-sync [options]`

- What: Associates issues found in issue or pull request references with a release. Continuous pipelines create completed releases and reuse an existing version only when its commit SHA matches. Scheduled pipelines accumulate issues in an open release or use the supplied version. Existing issue associations are kept unless explicitly reverted in a scheduled pipeline.
- Call: `mutation releaseSync`, effect: write
- Body: `ReleaseSyncRequest`, required

| Flag | Required | What |
|---|---|---|
| `--input <value>` | no | The release data to sync. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api release-sync-by-access-key [options]`

- What: Syncs release data using an access key for CI/CD integration. The pipeline is automatically inferred from the access key's configured resources, so no pipeline ID is needed in the input.
- Call: `mutation releaseSyncByAccessKey`, effect: write
- Body: `ReleaseSyncByAccessKeyRequest`, required

| Flag | Required | What |
|---|---|---|
| `--input <value>` | no | The release data to sync. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api release-unarchive [options]`

- What: Restores an archived or trashed release before it is permanently deleted. The release keeps its pipeline and saved issue associations.
- Call: `mutation releaseUnarchive`, effect: write
- Body: `ReleaseUnarchiveRequest`, required

| Flag | Required | What |
|---|---|---|
| `--id <value>` | no | The identifier of the release to unarchive. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api release-update [options]`

- What: Updates a release by ID. Omitted fields remain unchanged. A release cannot move to another pipeline.
- Call: `mutation releaseUpdate`, effect: write
- Body: `ReleaseUpdateRequest`, required

| Flag | Required | What |
|---|---|---|
| `--input <value>` | no | A partial Release object to update the Release with. |
| `--id <value>` | no | The identifier of the release to update. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api release-update-by-pipeline [options]`

- What: Updates a release by pipeline identifier. Finds the release by version, otherwise the latest started release or else the planned release with the earliest target date, and optionally transitions it to a new stage by name.
- Call: `mutation releaseUpdateByPipeline`, effect: write
- Body: `ReleaseUpdateByPipelineRequest`, required

| Flag | Required | What |
|---|---|---|
| `--input <value>` | no | The input containing the pipeline ID, optional version, and optional stage name. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api release-update-by-pipeline-by-access-key [options]`

- What: Updates a release by pipeline using an access key.
- Call: `mutation releaseUpdateByPipelineByAccessKey`, effect: write
- Body: `ReleaseUpdateByPipelineByAccessKeyRequest`, required

| Flag | Required | What |
|---|---|---|
| `--input <value>` | no | The input containing the optional version and optional stage name. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api releases [options]`

- What: All releases in the workspace, with optional filtering and sorting.
- Call: `query releases`, effect: read
- Pages: cursor: send `after` (body), read the next one from `pageInfo.endCursor`; items in `nodes`; `pageInfo.hasNextPage` is false on the last page; page size in `first` (body)
- Body: `ReleasesRequest`

| Flag | Required | What |
|---|---|---|
| `--filter <value>` | no | Filter returned releases. |
| `--before <value>` | no | Returns results before this cursor. Pair with \`last\` to paginate backward, using a cursor returned by the same connection. Keep the filters and ordering unchanged between pages. Cannot be combined with \`first\` or \`after\`. |
| `--after <value>` | no | Returns results after this cursor. Pair with \`first\` and the previous page's \`endCursor\` to fetch the next page. Keep the filters and ordering unchanged between pages. Cannot be combined with \`last\` or \`before\`. |
| `--first <value>` | no | The maximum number of results to return, starting after \`after\` if supplied. Between 1 and 250. Defaults to 50 when neither \`first\` nor \`last\` is supplied. Cannot be combined with \`last\` or \`before\`. |
| `--last <value>` | no | The maximum number of results to return, ending before \`before\` if supplied. Between 1 and 250. Cannot be combined with \`first\` or \`after\`. |
| `--include-archived <value>` | no | Includes archived resources alongside active ones. Defaults to false, which returns only active resources. This does not include deleted resources. |
| `--order-by <value>` | no | Orders results by creation time or last meaningful update time. Defaults to \`createdAt\`. Results are newest first with \`first\` and oldest first with \`last\`; use the returned \`endCursor\` as \`before\` to continue backward. Cannot be combined with custom \`sort\` options on fields that support them. |
| `--sort <value>` | no | Sort returned releases. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |
| `--all` | no | read every page, as the API pages it |
