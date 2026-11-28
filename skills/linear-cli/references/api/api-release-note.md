<!-- Generated from the API manifest and the command tree by pnpm generate. Do not edit. -->

# Linear API: release-note

## `linear api release-note [options]`

- What: Fetch a release note by its UUID or slug identifier.
- Call: `query releaseNote`, effect: read
- Body: `ReleaseNoteRequest`, required

| Flag | Required | What |
|---|---|---|
| `--id <value>` | no | The release note UUID or slug ID. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api release-note-create [options]`

- What: Creates a note covering releases from one pipeline. Supply explicit release IDs or an inclusive range, plus an optional title and Markdown body. A scheduled pipeline’s note must cover exactly one release.
- Call: `mutation releaseNoteCreate`, effect: write
- Body: `ReleaseNoteCreateRequest`, required

| Flag | Required | What |
|---|---|---|
| `--input <value>` | no | The release note fields. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api release-note-delete [options]`

- What: Permanently deletes a release note and its body. The covered releases remain.
- Call: `mutation releaseNoteDelete`, effect: destructive
- Permission keys: `linear.delete`
- Body: `ReleaseNoteDeleteRequest`, required

| Flag | Required | What |
|---|---|---|
| `--id <value>` | no | The identifier of the release note to delete. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api release-note-update [options]`

- What: Updates a release note’s title, body, or covered releases. Omitted fields remain unchanged, and a new release selection replaces the old one. The note stays in its original pipeline.
- Call: `mutation releaseNoteUpdate`, effect: write
- Body: `ReleaseNoteUpdateRequest`, required

| Flag | Required | What |
|---|---|---|
| `--input <value>` | no | The fields to update. |
| `--id <value>` | no | The identifier of the release note to update. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api release-notes [options]`

- What: Release notes in the workspace.
- Call: `query releaseNotes`, effect: read
- Pages: cursor: send `after` (body), read the next one from `pageInfo.endCursor`; items in `nodes`; `pageInfo.hasNextPage` is false on the last page; page size in `first` (body)
- Body: `ReleaseNotesRequest`

| Flag | Required | What |
|---|---|---|
| `--filter <value>` | no | Filter returned release notes. |
| `--before <value>` | no | Returns results before this cursor. Pair with \`last\` to paginate backward, using a cursor returned by the same connection. Keep the filters and ordering unchanged between pages. Cannot be combined with \`first\` or \`after\`. |
| `--after <value>` | no | Returns results after this cursor. Pair with \`first\` and the previous page's \`endCursor\` to fetch the next page. Keep the filters and ordering unchanged between pages. Cannot be combined with \`last\` or \`before\`. |
| `--first <value>` | no | The maximum number of results to return, starting after \`after\` if supplied. Between 1 and 250. Defaults to 50 when neither \`first\` nor \`last\` is supplied. Cannot be combined with \`last\` or \`before\`. |
| `--last <value>` | no | The maximum number of results to return, ending before \`before\` if supplied. Between 1 and 250. Cannot be combined with \`first\` or \`after\`. |
| `--include-archived <value>` | no | Includes archived resources alongside active ones. Defaults to false, which returns only active resources. This does not include deleted resources. |
| `--order-by <value>` | no | Orders results by creation time or last meaningful update time. Defaults to \`createdAt\`. Results are newest first with \`first\` and oldest first with \`last\`; use the returned \`endCursor\` as \`before\` to continue backward. Cannot be combined with custom \`sort\` options on fields that support them. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |
| `--all` | no | read every page, as the API pages it |
