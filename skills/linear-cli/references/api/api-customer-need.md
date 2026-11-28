<!-- Generated from the API manifest and the command tree by pnpm generate. Do not edit. -->

# Linear API: customer-need

## `linear api customer-need [options]`

- What: Retrieves a single customer need by ID or hash.
- Call: `query customerNeed`, effect: read
- Body: `CustomerNeedRequest`

| Flag | Required | What |
|---|---|---|
| `--id <value>` | no | The UUID of the customer need to retrieve. Cannot be used together with hash. |
| `--hash <value>` | no | The hash prefix of the customer need to retrieve (minimum 8 characters). Cannot be used together with id. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api customer-need-archive [options]`

- What: Archives a customer need so it can be removed from active request lists without permanently deleting it. Use customerNeedUnarchive to restore the saved need.
- Call: `mutation customerNeedArchive`, effect: destructive
- Permission keys: `linear.delete`
- Body: `CustomerNeedArchiveRequest`, required

| Flag | Required | What |
|---|---|---|
| `--id <value>` | no | The identifier of the customer need to archive. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api customer-need-create [options]`

- What: Records customer feedback, optionally linked to an issue. Unlinked requests require Customer Signals to be enabled. You can identify the customer, add Markdown feedback, or link a source attachment. Multiple requests can be recorded for the same customer and issue.
- Call: `mutation customerNeedCreate`, effect: write
- Body: `CustomerNeedCreateRequest`, required

| Flag | Required | What |
|---|---|---|
| `--input <value>` | no | The customer need to create. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api customer-need-create-from-attachment [options]`

- What: Creates a customer need from an existing issue attachment. If that attachment already has an archived need, the need is restored and follows the attachment’s current issue. An existing active need is not duplicated.
- Call: `mutation customerNeedCreateFromAttachment`, effect: write
- Body: `CustomerNeedCreateFromAttachmentRequest`, required

| Flag | Required | What |
|---|---|---|
| `--input <value>` | no | The customer need to create. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api customer-need-delete [options]`

- What: Permanently deletes a customer need. By default, its associated issue or project attachment is also deleted. Set keepAttachment to true to retain that source attachment; the linked issue or project is kept.
- Call: `mutation customerNeedDelete`, effect: destructive
- Permission keys: `linear.delete`
- Body: `CustomerNeedDeleteRequest`, required

| Flag | Required | What |
|---|---|---|
| `--keep-attachment <value>` | no | Whether to keep the attachment associated with the customer need. |
| `--id <value>` | no | The identifier of the customer need to delete. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api customer-need-unarchive [options]`

- What: Restores an archived customer need. The need must currently be archived; its saved feedback and associations are kept.
- Call: `mutation customerNeedUnarchive`, effect: write
- Body: `CustomerNeedUnarchiveRequest`, required

| Flag | Required | What |
|---|---|---|
| `--id <value>` | no | The identifier of the customer need to unarchive. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api customer-need-update [options]`

- What: Updates a customer request, including its feedback, customer, priority, or issue association. Only manually added source attachments can be replaced or removed. Use clearAttachment to remove such a source; moving the request to another issue also moves its source attachment.
- Call: `mutation customerNeedUpdate`, effect: write
- Body: `CustomerNeedUpdateRequest`, required

| Flag | Required | What |
|---|---|---|
| `--clear-attachment <value>` | no | Whether to remove the manually added source attachment. Sources managed by an integration cannot be removed this way. A different, nonempty attachmentUrl takes precedence. |
| `--input <value>` | no | The properties of the customer need to update. |
| `--id <value>` | no | The identifier of the customer need to update. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api customer-needs [options]`

- What: All customer needs in the workspace, with optional filtering.
- Call: `query customerNeeds`, effect: read
- Pages: cursor: send `after` (body), read the next one from `pageInfo.endCursor`; items in `nodes`; `pageInfo.hasNextPage` is false on the last page; page size in `first` (body)
- Body: `CustomerNeedsRequest`

| Flag | Required | What |
|---|---|---|
| `--filter <value>` | no | Filter returned customer needs. |
| `--before <value>` | no | Returns results before this cursor. Pair with \`last\` to paginate backward, using a cursor returned by the same connection. Keep the filters and ordering unchanged between pages. Cannot be combined with \`first\` or \`after\`. |
| `--after <value>` | no | Returns results after this cursor. Pair with \`first\` and the previous page's \`endCursor\` to fetch the next page. Keep the filters and ordering unchanged between pages. Cannot be combined with \`last\` or \`before\`. |
| `--first <value>` | no | The maximum number of results to return, starting after \`after\` if supplied. Between 1 and 250. Defaults to 50 when neither \`first\` nor \`last\` is supplied. Cannot be combined with \`last\` or \`before\`. |
| `--last <value>` | no | The maximum number of results to return, ending before \`before\` if supplied. Between 1 and 250. Cannot be combined with \`first\` or \`after\`. |
| `--include-archived <value>` | no | Includes archived resources alongside active ones. Defaults to false, which returns only active resources. This does not include deleted resources. |
| `--order-by <value>` | no | Orders results by creation time or last meaningful update time. Defaults to \`createdAt\`. Results are newest first with \`first\` and oldest first with \`last\`; use the returned \`endCursor\` as \`before\` to continue backward. Cannot be combined with custom \`sort\` options on fields that support them. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |
| `--all` | no | read every page, as the API pages it |
