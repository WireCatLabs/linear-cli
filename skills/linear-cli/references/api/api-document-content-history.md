<!-- Generated from the API manifest and the command tree by pnpm generate. Do not edit. -->

# Linear API: document-content-history

## `linear api document-content-history [options]`

- What: Lists saved-version metadata for a DocumentContent UUID, newest first. Use the content record’s ID, such as Document.documentContentId, rather than the enclosing document’s UUID. The public result includes capture times and contributors, not historical body content.
- Call: `query documentContentHistory`, effect: read
- Body: `DocumentContentHistoryRequest`, required

| Flag | Required | What |
|---|---|---|
| `--id <value>` | no | The identifier of the document content to retrieve history for. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |
