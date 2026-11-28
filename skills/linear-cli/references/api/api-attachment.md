<!-- Generated from the API manifest and the command tree by pnpm generate. Do not edit. -->

# Linear API: attachment

## `linear api attachment [options]`

- What: An attachment by UUID or URL. A URL returns one matching attachment; use attachmentsForURL to retrieve all matches.
- Call: `query attachment`, effect: read
- Body: `AttachmentRequest`, required

| Flag | Required | What |
|---|---|---|
| `--id <value>` | no | The attachment UUID or URL. A URL returns one matching attachment. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api attachment-create [options]`

- What: Creates an attachment, or updates the existing attachment with the same URL on the same issue. This is useful for links and metadata managed by your integration. Use attachmentLinkURL or a service-specific link mutation when you want Linear to fetch integration metadata and apply its supported link behavior.
- Call: `mutation attachmentCreate`, effect: write
- Body: `AttachmentCreateRequest`, required

| Flag | Required | What |
|---|---|---|
| `--input <value>` | no | The attachment object to create. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api attachment-delete [options]`

- What: Deletes the attachment record from its issue. This removes the link in Linear; it does not delete the external resource.
- Call: `mutation attachmentDelete`, effect: destructive
- Permission keys: `linear.delete`
- Body: `AttachmentDeleteRequest`, required

| Flag | Required | What |
|---|---|---|
| `--id <value>` | no | The identifier of the attachment to delete. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api attachment-issue [options]`

- What: The issue linked to an attachment. Deprecated; use attachmentsForURL and select each attachment’s issue.
- Call: `query attachmentIssue`, effect: read, deprecated
- Body: `AttachmentIssueRequest`, required

| Flag | Required | What |
|---|---|---|
| `--id <value>` | no | \`id\` of the attachment for which you'll want to get the issue for. \[Deprecated\] \`url\` as the \`id\` parameter. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api attachment-link-discord [options]`

- What: Link a Discord message to an issue. Requires a connected Discord integration.
- Call: `mutation attachmentLinkDiscord`, effect: write
- Body: `AttachmentLinkDiscordRequest`, required

| Flag | Required | What |
|---|---|---|
| `--create-as-user <value>` | no | Display name credited with creating the attachment. Available only to OAuth applications using actor=app. |
| `--display-icon-url <value>` | no | Avatar URL for createAsUser. Requires createAsUser and an OAuth application using actor=app. |
| `--title <value>` | no | The title to use for the attachment. |
| `--issue-id <value>` | no | The issue for which to link the Discord message. Can be a UUID or issue identifier (e.g., 'LIN-123'). |
| `--id <value>` | no | Optional attachment ID that may be provided through the API. |
| `--channel-id <value>` | no | The Discord channel ID for the message to link. |
| `--message-id <value>` | no | The Discord message ID for the message to link. |
| `--url <value>` | no | The Discord message URL for the message to link. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api attachment-link-front [options]`

- What: Link a Front conversation to an issue. Requires a connected Front integration.
- Call: `mutation attachmentLinkFront`, effect: write
- Body: `AttachmentLinkFrontRequest`, required

| Flag | Required | What |
|---|---|---|
| `--create-as-user <value>` | no | Display name credited with creating the attachment. Available only to OAuth applications using actor=app. |
| `--display-icon-url <value>` | no | Avatar URL for createAsUser. Requires createAsUser and an OAuth application using actor=app. |
| `--title <value>` | no | The title to use for the attachment. |
| `--conversation-id <value>` | no | The Front conversation ID to link. |
| `--issue-id <value>` | no | The issue for which to link the Front conversation. Can be a UUID or issue identifier (e.g., 'LIN-123'). |
| `--id <value>` | no | Optional attachment ID that may be provided through the API. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api attachment-link-git-hub-issue [options]`

- What: Link a GitHub issue to a Linear issue. Uses the matching GitHub integration and sync mapping when available; may fall back to a URL attachment.
- Call: `mutation attachmentLinkGitHubIssue`, effect: write
- Body: `AttachmentLinkGitHubIssueRequest`, required

| Flag | Required | What |
|---|---|---|
| `--create-as-user <value>` | no | Display name credited with creating the attachment. Available only to OAuth applications using actor=app. |
| `--display-icon-url <value>` | no | Avatar URL for createAsUser. Requires createAsUser and an OAuth application using actor=app. |
| `--title <value>` | no | The title to use for the attachment. |
| `--issue-id <value>` | no | The Linear issue for which to link the GitHub issue. Can be a UUID or issue identifier (e.g., 'LIN-123'). |
| `--id <value>` | no | Optional attachment ID that may be provided through the API. |
| `--url <value>` | no | The URL of the GitHub issue to link. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api attachment-link-git-hub-pr [options]`

- What: Link a GitHub pull request to an issue. Uses the matching GitHub integration when available; may fall back to a URL attachment.
- Call: `mutation attachmentLinkGitHubPR`, effect: write
- Body: `AttachmentLinkGitHubPRRequest`, required

| Flag | Required | What |
|---|---|---|
| `--create-as-user <value>` | no | Display name credited with creating the attachment. Available only to OAuth applications using actor=app. |
| `--display-icon-url <value>` | no | Avatar URL for createAsUser. Requires createAsUser and an OAuth application using actor=app. |
| `--title <value>` | no | The title to use for the attachment. |
| `--issue-id <value>` | no | The issue for which to link the GitHub pull request. Can be a UUID or issue identifier (e.g., 'LIN-123'). |
| `--id <value>` | no | Optional attachment ID that may be provided through the API. |
| `--url <value>` | no | The URL of the GitHub pull request to link. |
| `--link-kind <value>` | no | The kind of link between the issue and the pull request. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api attachment-link-git-lab-mr [options]`

- What: Links a GitLab merge request to an issue. Supply the merge-request URL, number, and full project path including any groups. Linear uses a matching integration when available and otherwise creates a basic URL attachment.
- Call: `mutation attachmentLinkGitLabMR`, effect: write
- Body: `AttachmentLinkGitLabMRRequest`, required

| Flag | Required | What |
|---|---|---|
| `--create-as-user <value>` | no | Display name credited with creating the attachment. Available only to OAuth applications using actor=app. |
| `--display-icon-url <value>` | no | Avatar URL for createAsUser. Requires createAsUser and an OAuth application using actor=app. |
| `--title <value>` | no | The title to use for the attachment. |
| `--issue-id <value>` | no | The issue for which to link the GitLab merge request. Can be a UUID or issue identifier (e.g., 'LIN-123'). |
| `--id <value>` | no | Optional attachment ID that may be provided through the API. |
| `--url <value>` | no | The URL of the GitLab merge request to link. |
| `--project-path-with-namespace <value>` | no | The path name to the project including any (sub)groups. E.g. linear/main/client. |
| `--number <value>` | no | The GitLab merge request number to link. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api attachment-link-intercom [options]`

- What: Link an Intercom conversation to an issue. Requires a connected Intercom integration.
- Call: `mutation attachmentLinkIntercom`, effect: write
- Body: `AttachmentLinkIntercomRequest`, required

| Flag | Required | What |
|---|---|---|
| `--create-as-user <value>` | no | Display name credited with creating the attachment. Available only to OAuth applications using actor=app. |
| `--display-icon-url <value>` | no | Avatar URL for createAsUser. Requires createAsUser and an OAuth application using actor=app. |
| `--title <value>` | no | The title to use for the attachment. |
| `--conversation-id <value>` | no | The Intercom conversation ID to link. |
| `--part-id <value>` | no | An optional Intercom conversation part ID to link to |
| `--id <value>` | no | Optional attachment ID that may be provided through the API. |
| `--issue-id <value>` | no | The issue for which to link the Intercom conversation. Can be a UUID or issue identifier (e.g., 'LIN-123'). |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api attachment-link-jira-issue [options]`

- What: Links a Jira issue to a Linear issue. The URL selects a connected Jira site; if it identifies no connected site, Linear uses the workspace’s sole Jira integration. With multiple Jira integrations, provide a URL for the intended site.
- Call: `mutation attachmentLinkJiraIssue`, effect: write
- Body: `AttachmentLinkJiraIssueRequest`, required

| Flag | Required | What |
|---|---|---|
| `--create-as-user <value>` | no | Display name credited with creating the attachment. Available only to OAuth applications using actor=app. |
| `--display-icon-url <value>` | no | Avatar URL for createAsUser. Requires createAsUser and an OAuth application using actor=app. |
| `--title <value>` | no | The title to use for the attachment. |
| `--issue-id <value>` | no | The issue for which to link the Jira issue. Can be a UUID or issue identifier (e.g., 'LIN-123'). |
| `--jira-issue-id <value>` | no | The Jira issue key or ID to link. |
| `--id <value>` | no | Optional attachment ID that may be provided through the API. |
| `--url <value>` | no | URL used to select the connected Jira site and as a fallback if the Jira issue cannot be fetched. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api attachment-link-salesforce [options]`

- What: Link a Salesforce case to an issue. Requires a connected Salesforce integration and a valid case URL.
- Call: `mutation attachmentLinkSalesforce`, effect: write
- Body: `AttachmentLinkSalesforceRequest`, required

| Flag | Required | What |
|---|---|---|
| `--create-as-user <value>` | no | Display name credited with creating the attachment. Available only to OAuth applications using actor=app. |
| `--display-icon-url <value>` | no | Avatar URL for createAsUser. Requires createAsUser and an OAuth application using actor=app. |
| `--title <value>` | no | The title to use for the attachment. |
| `--issue-id <value>` | no | The issue for which to link the Salesforce case. Can be a UUID or issue identifier (e.g., 'LIN-123'). |
| `--id <value>` | no | Optional attachment ID that may be provided through the API. |
| `--url <value>` | no | The URL of the Salesforce case to link. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api attachment-link-slack [options]`

- What: Link an existing Slack message to an issue. This creates a rich attachment using the workspace's Slack integration.
- Call: `mutation attachmentLinkSlack`, effect: write
- Body: `AttachmentLinkSlackRequest`, required

| Flag | Required | What |
|---|---|---|
| `--create-as-user <value>` | no | Display name credited with creating the attachment. Available only to OAuth applications using actor=app. |
| `--display-icon-url <value>` | no | Avatar URL for createAsUser. Requires createAsUser and an OAuth application using actor=app. |
| `--title <value>` | no | The title to use for the attachment. |
| `--issue-id <value>` | no | The issue to which to link the Slack message. Can be a UUID or issue identifier (e.g., 'LIN-123'). |
| `--url <value>` | no | The Slack message URL for the message to link. |
| `--id <value>` | no | Optional attachment ID that may be provided through the API. |
| `--sync-to-comment-thread <value>` | no | Sync the Slack thread with issue comments and import existing replies. Defaults to false; the thread cannot already be synced elsewhere. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api attachment-link-url [options]`

- What: Links a URL to an issue and, when recognized, uses the workspace’s matching integration to fetch richer details. Supported integrations can add behaviors such as status updates. If no matching integration can enrich the link, Linear creates a basic URL attachment.
- Call: `mutation attachmentLinkURL`, effect: write
- Body: `AttachmentLinkURLRequest`, required

| Flag | Required | What |
|---|---|---|
| `--create-as-user <value>` | no | Display name credited with creating the attachment. Available only to OAuth applications using actor=app. |
| `--display-icon-url <value>` | no | Avatar URL for createAsUser. Requires createAsUser and an OAuth application using actor=app. |
| `--title <value>` | no | The title to use for the attachment. |
| `--url <value>` | no | The url to link. |
| `--issue-id <value>` | no | The issue for which to link the url. Can be a UUID or issue identifier (e.g., 'LIN-123'). |
| `--id <value>` | no | The id for the attachment. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api attachment-link-zendesk [options]`

- What: Link a Zendesk ticket to an issue. Requires a connected Zendesk integration.
- Call: `mutation attachmentLinkZendesk`, effect: write
- Body: `AttachmentLinkZendeskRequest`, required

| Flag | Required | What |
|---|---|---|
| `--create-as-user <value>` | no | Display name credited with creating the attachment. Available only to OAuth applications using actor=app. |
| `--display-icon-url <value>` | no | Avatar URL for createAsUser. Requires createAsUser and an OAuth application using actor=app. |
| `--title <value>` | no | The title to use for the attachment. |
| `--ticket-id <value>` | no | The Zendesk ticket ID to link. |
| `--issue-id <value>` | no | The issue for which to link the Zendesk ticket. Can be a UUID or issue identifier (e.g., 'LIN-123'). |
| `--id <value>` | no | Optional attachment ID that may be provided through the API. |
| `--url <value>` | no | The URL of the Zendesk ticket to link. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api attachment-sources [options]`

- What: Lists distinct sources on accessible, non-archived issue attachments. API and OAuth attachment sources are grouped by URL domain; other sources are grouped by type. Each group includes the oldest attachment's source metadata. Results may be cached for up to one hour.
- Call: `query attachmentSources`, effect: read
- Body: `AttachmentSourcesRequest`

| Flag | Required | What |
|---|---|---|
| `--team-id <value>` | no | (optional) if provided will only return attachment sources for the given team. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api attachment-sync-to-slack [options]`

- What: Sync an existing Slack attachment with an issue comment thread and import existing replies. Requires a connected Slack integration whose bot can post in the channel; the Slack thread cannot already be synced elsewhere.
- Call: `mutation attachmentSyncToSlack`, effect: write
- Body: `AttachmentSyncToSlackRequest`, required

| Flag | Required | What |
|---|---|---|
| `--id <value>` | no | The ID of the Slack attachment to begin syncing. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api attachment-update [options]`

- What: Updates an existing attachment’s title, subtitle, metadata, or icon. title is required even when changing another field, and metadata replaces the full stored object. This mutation does not move the attachment or change its URL.
- Call: `mutation attachmentUpdate`, effect: write
- Body: `AttachmentUpdateRequest`, required

| Flag | Required | What |
|---|---|---|
| `--input <value>` | no | A partial attachment object to update the attachment with. |
| `--id <value>` | no | The identifier of the attachment to update. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api attachments [options]`

- What: Issue attachments the caller can access, with cursor pagination. Use attachmentsForURL to look up a resource URL.
- Call: `query attachments`, effect: read
- Pages: cursor: send `after` (body), read the next one from `pageInfo.endCursor`; items in `nodes`; `pageInfo.hasNextPage` is false on the last page; page size in `first` (body)
- Body: `AttachmentsRequest`

| Flag | Required | What |
|---|---|---|
| `--filter <value>` | no | Filter returned attachments. |
| `--before <value>` | no | Returns results before this cursor. Pair with \`last\` to paginate backward, using a cursor returned by the same connection. Keep the filters and ordering unchanged between pages. Cannot be combined with \`first\` or \`after\`. |
| `--after <value>` | no | Returns results after this cursor. Pair with \`first\` and the previous page's \`endCursor\` to fetch the next page. Keep the filters and ordering unchanged between pages. Cannot be combined with \`last\` or \`before\`. |
| `--first <value>` | no | The maximum number of results to return, starting after \`after\` if supplied. Between 1 and 250. Defaults to 50 when neither \`first\` nor \`last\` is supplied. Cannot be combined with \`last\` or \`before\`. |
| `--last <value>` | no | The maximum number of results to return, ending before \`before\` if supplied. Between 1 and 250. Cannot be combined with \`first\` or \`after\`. |
| `--include-archived <value>` | no | Includes archived resources alongside active ones. Defaults to false, which returns only active resources. This does not include deleted resources. |
| `--order-by <value>` | no | Orders results by creation time or last meaningful update time. Defaults to \`createdAt\`. Results are newest first with \`first\` and oldest first with \`last\`; use the returned \`endCursor\` as \`before\` to continue backward. Cannot be combined with custom \`sort\` options on fields that support them. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |
| `--all` | no | read every page, as the API pages it |

## `linear api attachments-for-url [options]`

- What: Finds the attachments for a resource URL across issues you can access. A URL can appear on several issues, so use this connection and select each attachment’s issue to find all linked issues.
- Call: `query attachmentsForURL`, effect: read
- Pages: cursor: send `after` (body), read the next one from `pageInfo.endCursor`; items in `nodes`; `pageInfo.hasNextPage` is false on the last page; page size in `first` (body)
- Body: `AttachmentsForURLRequest`, required

| Flag | Required | What |
|---|---|---|
| `--before <value>` | no | Returns results before this cursor. Pair with \`last\` to paginate backward, using a cursor returned by the same connection. Keep the filters and ordering unchanged between pages. Cannot be combined with \`first\` or \`after\`. |
| `--after <value>` | no | Returns results after this cursor. Pair with \`first\` and the previous page's \`endCursor\` to fetch the next page. Keep the filters and ordering unchanged between pages. Cannot be combined with \`last\` or \`before\`. |
| `--first <value>` | no | The maximum number of results to return, starting after \`after\` if supplied. Between 1 and 250. Defaults to 50 when neither \`first\` nor \`last\` is supplied. Cannot be combined with \`last\` or \`before\`. |
| `--last <value>` | no | The maximum number of results to return, ending before \`before\` if supplied. Between 1 and 250. Cannot be combined with \`first\` or \`after\`. |
| `--include-archived <value>` | no | Includes archived resources alongside active ones. Defaults to false, which returns only active resources. This does not include deleted resources. |
| `--order-by <value>` | no | Orders results by creation time or last meaningful update time. Defaults to \`createdAt\`. Results are newest first with \`first\` and oldest first with \`last\`; use the returned \`endCursor\` as \`before\` to continue backward. Cannot be combined with custom \`sort\` options on fields that support them. |
| `--url <value>` | no | The attachment URL. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |
| `--all` | no | read every page, as the API pages it |
