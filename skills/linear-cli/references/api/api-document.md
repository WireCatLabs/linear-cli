<!-- Generated from the API manifest and the command tree by pnpm generate. Do not edit. -->

# Linear API: document

## `linear api document [options]`

- What: Finds a document by UUID or the short identifier used in its URL. Archived documents can also be returned if you still have access.
- Call: `query document`, effect: read
- Body: `DocumentRequest`, required

| Flag | Required | What |
|---|---|---|
| `--id <value>` | no | The identifier or slug of the document to retrieve. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api document-create [options]`

- What: Creates a document in a project, issue, or release, with optional initial Markdown content. The returned document includes its assigned UUID and metadata; select content to read the resulting body.
- Call: `mutation documentCreate`, effect: write
- Body: `DocumentCreateRequest`, required

| Flag | Required | What |
|---|---|---|
| `--input <value>` | no | The document to create. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api document-delete [options]`

- What: Moves a document to the trash and archives it, including the sub-documents covered by its archive cascade. It is not permanently removed by this mutation. You must be allowed to manage the document; use documentUnarchive to restore it.
- Call: `mutation documentDelete`, effect: destructive
- Permission keys: `linear.delete`
- Body: `DocumentDeleteRequest`, required

| Flag | Required | What |
|---|---|---|
| `--if-parent-document-id <value>` | no | \[Internal\] Only trash the document if it is still a sub-document of this document. Otherwise the mutation fails and the document is left unchanged. |
| `--id <value>` | no | The identifier of the document to delete. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api document-unarchive [options]`

- What: Restores a trashed document and its eligible sub-documents. You must be allowed to manage the restored documents. If the containing resource is archived, restore that resource first.
- Call: `mutation documentUnarchive`, effect: write
- Body: `DocumentUnarchiveRequest`, required

| Flag | Required | What |
|---|---|---|
| `--id <value>` | no | The identifier of the document to restore. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api document-update [options]`

- What: Updates a document’s metadata or replaces its Markdown body. You must have edit access to the document. Supplying a different container moves the document there, which can affect access; omitted fields are left unchanged.
- Call: `mutation documentUpdate`, effect: write
- Body: `DocumentUpdateRequest`, required

| Flag | Required | What |
|---|---|---|
| `--input <value>` | no | A partial document object to update the document with. |
| `--id <value>` | no | The identifier of the document to update. Also the identifier from the URL is accepted. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api document-update-workspace-access [options]`

- What: \[Internal\] Changes what people outside a document's teams can do with a document in a public team or in a project with a public team: edit, comment, or view. It can't be above the document's general access. Only the owner of the document, an owner of one of its teams, or a workspace admin can change it. Comment and view need an owner who can access the document.
- Call: `mutation documentUpdateWorkspaceAccess`, effect: write
- Body: `DocumentUpdateWorkspaceAccessRequest`, required

| Flag | Required | What |
|---|---|---|
| `--previous-workspace-access <value>` | no | The workspace access level of this document when the change was confirmed. When given, the change fails if the document has another level now. |
| `--apply-to-sub-documents <value>` | no | Whether to also change the sub-documents whose levels equal the document's levels before the change. Sub-documents with other levels, without an owner who can access them, or that the user cannot loosen keep their level. |
| `--workspace-access <value>` | no | The new workspace access level: edit, comment, or view. |
| `--id <value>` | no | The identifier of the document. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api documents [options]`

- What: Lists documents you can access, with filters and cursor pagination. Archived documents are excluded unless includeArchived is true; access still follows each document’s location and sharing settings.
- Call: `query documents`, effect: read
- Pages: cursor: send `after` (body), read the next one from `pageInfo.endCursor`; items in `nodes`; `pageInfo.hasNextPage` is false on the last page; page size in `first` (body)
- Body: `DocumentsRequest`

| Flag | Required | What |
|---|---|---|
| `--filter <value>` | no | Filter returned documents. |
| `--before <value>` | no | Returns results before this cursor. Pair with \`last\` to paginate backward, using a cursor returned by the same connection. Keep the filters and ordering unchanged between pages. Cannot be combined with \`first\` or \`after\`. |
| `--after <value>` | no | Returns results after this cursor. Pair with \`first\` and the previous page's \`endCursor\` to fetch the next page. Keep the filters and ordering unchanged between pages. Cannot be combined with \`last\` or \`before\`. |
| `--first <value>` | no | The maximum number of results to return, starting after \`after\` if supplied. Between 1 and 250. Defaults to 50 when neither \`first\` nor \`last\` is supplied. Cannot be combined with \`last\` or \`before\`. |
| `--last <value>` | no | The maximum number of results to return, ending before \`before\` if supplied. Between 1 and 250. Cannot be combined with \`first\` or \`after\`. |
| `--include-archived <value>` | no | Includes archived resources alongside active ones. Defaults to false, which returns only active resources. This does not include deleted resources. |
| `--order-by <value>` | no | Orders results by creation time or last meaningful update time. Defaults to \`createdAt\`. Results are newest first with \`first\` and oldest first with \`last\`; use the returned \`endCursor\` as \`before\` to continue backward. Cannot be combined with custom \`sort\` options on fields that support them. |
| `--sort <value>` | no | Sort returned documents. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |
| `--all` | no | read every page, as the API pages it |

## `linear api search-documents [options]`

- What: Searches accessible documents using text matching and meaning. Use teamId to narrow the search, and includeArchived to include archived documents. Results are ordered by relevance unless orderBy is supplied and use cursor pagination. Limited to 30 requests per minute.
- Call: `query searchDocuments`, effect: read
- Pages: cursor: send `after` (body), read the next one from `pageInfo.endCursor`; items in `nodes`; `pageInfo.hasNextPage` is false on the last page; page size in `first` (body)
- Body: `SearchDocumentsRequest`, required

| Flag | Required | What |
|---|---|---|
| `--filter <value>` | no | Filter returned documents. |
| `--before <value>` | no | Returns results before this cursor. Pair with \`last\` to paginate backward, using a cursor returned by the same connection. Keep the filters and ordering unchanged between pages. Cannot be combined with \`first\` or \`after\`. |
| `--after <value>` | no | Returns results after this cursor. Pair with \`first\` and the previous page's \`endCursor\` to fetch the next page. Keep the filters and ordering unchanged between pages. Cannot be combined with \`last\` or \`before\`. |
| `--first <value>` | no | The maximum number of results to return, starting after \`after\` if supplied. Between 1 and 250. Defaults to 50 when neither \`first\` nor \`last\` is supplied. Cannot be combined with \`last\` or \`before\`. |
| `--last <value>` | no | The maximum number of results to return, ending before \`before\` if supplied. Between 1 and 250. Cannot be combined with \`first\` or \`after\`. |
| `--include-archived <value>` | no | Includes archived resources alongside active ones. Defaults to false, which returns only active resources. This does not include deleted resources. |
| `--order-by <value>` | no | Orders results by creation time or last meaningful update time. Defaults to \`createdAt\`. Results are newest first with \`first\` and oldest first with \`last\`; use the returned \`endCursor\` as \`before\` to continue backward. Cannot be combined with custom \`sort\` options on fields that support them. |
| `--term <value>` | no | The text to search for, from 1 to 1024 characters. You can use keywords or a natural-language description; search combines text matching with relevance by meaning. |
| `--include-comments <value>` | no | Include comment text when searching issues. Defaults to false; ignored for project and document searches. |
| `--team-id <value>` | no | UUID of a team to restrict results to. Omit or pass null to search all accessible teams. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |
| `--all` | no | read every page, as the API pages it |
