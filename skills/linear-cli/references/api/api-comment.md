<!-- Generated from the API manifest and the command tree by pnpm generate. Do not edit. -->

# Linear API: comment

## `linear api comment [options]`

- What: A comment by UUID or URL hash. Returns an error if no accessible comment matches.
- Call: `query comment`, effect: read
- Body: `CommentRequest`

| Flag | Required | What |
|---|---|---|
| `--id <value>` | no | Comment UUID. Supply either id or hash. |
| `--hash <value>` | no | Comment hash from a Linear comment URL. Supply either hash or id. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api comment-create [options]`

- What: Creates a comment on one resource, or a reply when parentId is supplied. You must be allowed to comment on that resource. For issue comments, the author is subscribed to the issue unless doNotSubscribeToIssue is true.
- Call: `mutation commentCreate`, effect: write
- Body: `CommentCreateRequest`, required

| Flag | Required | What |
|---|---|---|
| `--input <value>` | no | The comment object to create. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api comment-delete [options]`

- What: Deletes a comment and, for a root comment, its replies. You must be allowed to delete the comment and comment on its resource. Deleting a reply selected as the resolution reopens the parent thread.
- Call: `mutation commentDelete`, effect: destructive
- Permission keys: `linear.delete`
- Body: `CommentDeleteRequest`, required

| Flag | Required | What |
|---|---|---|
| `--id <value>` | no | The identifier of the comment to delete. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api comment-resolve [options]`

- What: Marks a root comment’s thread as resolved by you. You may select one of its replies as resolvingCommentId, or resolve the thread without a specific reply. Pass the root comment ID, even when the discussion ended in a reply.
- Call: `mutation commentResolve`, effect: write
- Body: `CommentResolveRequest`, required

| Flag | Required | What |
|---|---|---|
| `--resolving-comment-id <value>` | no | The identifier of the child comment that resolves the thread. If not provided, the thread is resolved without a specific resolving comment. |
| `--id <value>` | no | The identifier of the comment to resolve. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api comment-unresolve [options]`

- What: Reopens a resolved thread and clears its resolution time, resolving user, and selected resolving reply. Pass the root comment ID. An already unresolved thread is returned unchanged.
- Call: `mutation commentUnresolve`, effect: write
- Body: `CommentUnresolveRequest`, required

| Flag | Required | What |
|---|---|---|
| `--id <value>` | no | The identifier of the comment to unresolve. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api comment-update [options]`

- What: Replaces a comment’s Markdown body and records an edit time. Content edits are restricted to an authorized author or acting user; comments originating in synced Slack messages or Intercom cannot be edited here. Omit body to keep the existing message.
- Call: `mutation commentUpdate`, effect: write
- Body: `CommentUpdateRequest`, required

| Flag | Required | What |
|---|---|---|
| `--skip-edited-at <value>` | no | \[INTERNAL\] Flag to prevent setting editedAt when updating bodyData (used for background uploads). |
| `--input <value>` | no | A partial comment object to update the comment with. |
| `--id <value>` | no | The identifier of the comment to update. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api comments [options]`

- What: All comments the user has access to in the workspace.
- Call: `query comments`, effect: read
- Pages: cursor: send `after` (body), read the next one from `pageInfo.endCursor`; items in `nodes`; `pageInfo.hasNextPage` is false on the last page; page size in `first` (body)
- Body: `CommentsRequest`

| Flag | Required | What |
|---|---|---|
| `--filter <value>` | no | Filter returned comments. |
| `--before <value>` | no | Returns results before this cursor. Pair with \`last\` to paginate backward, using a cursor returned by the same connection. Keep the filters and ordering unchanged between pages. Cannot be combined with \`first\` or \`after\`. |
| `--after <value>` | no | Returns results after this cursor. Pair with \`first\` and the previous page's \`endCursor\` to fetch the next page. Keep the filters and ordering unchanged between pages. Cannot be combined with \`last\` or \`before\`. |
| `--first <value>` | no | The maximum number of results to return, starting after \`after\` if supplied. Between 1 and 250. Defaults to 50 when neither \`first\` nor \`last\` is supplied. Cannot be combined with \`last\` or \`before\`. |
| `--last <value>` | no | The maximum number of results to return, ending before \`before\` if supplied. Between 1 and 250. Cannot be combined with \`first\` or \`after\`. |
| `--include-archived <value>` | no | Includes archived resources alongside active ones. Defaults to false, which returns only active resources. This does not include deleted resources. |
| `--order-by <value>` | no | Orders results by creation time or last meaningful update time. Defaults to \`createdAt\`. Results are newest first with \`first\` and oldest first with \`last\`; use the returned \`endCursor\` as \`before\` to continue backward. Cannot be combined with custom \`sort\` options on fields that support them. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |
| `--all` | no | read every page, as the API pages it |
