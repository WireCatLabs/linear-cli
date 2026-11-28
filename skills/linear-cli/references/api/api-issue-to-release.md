<!-- Generated from the API manifest and the command tree by pnpm generate. Do not edit. -->

# Linear API: issue-to-release

## `linear api issue-to-release [options]`

- What: Get an active issue-to-release link by its UUID.
- Call: `query issueToRelease`, effect: read
- Body: `IssueToReleaseRequest`, required

| Flag | Required | What |
|---|---|---|
| `--id <value>` | no | The identifier of the issue-to-release association to retrieve. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api issue-to-release-create [options]`

- What: Associates an issue with a release and returns the link. The issue must be editable and both resources accessible; release management must be available in the workspace. If the association already exists, the mutation returns an error rather than reusing it.
- Call: `mutation issueToReleaseCreate`, effect: write
- Body: `IssueToReleaseCreateRequest`, required

| Flag | Required | What |
|---|---|---|
| `--input <value>` | no | The properties of the issueToRelease to create. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api issue-to-release-delete [options]`

- What: Removes an issue-to-release association by the link’s UUID, keeping the issue and release. The issue must be editable and the release accessible. Returns an error when the link does not exist.
- Call: `mutation issueToReleaseDelete`, effect: destructive
- Permission keys: `linear.delete`
- Body: `IssueToReleaseDeleteRequest`, required

| Flag | Required | What |
|---|---|---|
| `--id <value>` | no | The identifier of the issue-to-release association to delete. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api issue-to-release-delete-by-issue-and-release [options]`

- What: Removes the association between the specified issue and release, keeping both resources. The issue must be editable and the release accessible. Returns an error when the association does not exist.
- Call: `mutation issueToReleaseDeleteByIssueAndRelease`, effect: write
- Body: `IssueToReleaseDeleteByIssueAndReleaseRequest`, required

| Flag | Required | What |
|---|---|---|
| `--release-id <value>` | no | The identifier of the release. |
| `--issue-id <value>` | no | The identifier of the issue. Can be a UUID or issue identifier (e.g., 'LIN-123'). |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api issue-to-releases [options]`

- What: A paginated list of accessible issue-to-release links.
- Call: `query issueToReleases`, effect: read
- Pages: cursor: send `after` (body), read the next one from `pageInfo.endCursor`; items in `nodes`; `pageInfo.hasNextPage` is false on the last page; page size in `first` (body)
- Body: `IssueToReleasesRequest`

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
