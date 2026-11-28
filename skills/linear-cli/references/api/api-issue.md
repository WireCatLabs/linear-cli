<!-- Generated from the API manifest and the command tree by pnpm generate. Do not edit. -->

# Linear API: issue

## `linear api issue [options]`

- What: Finds an issue by UUID or a human-readable identifier such as ENG-123. Archived issues can also be returned. The query fails if the issue does not exist or you cannot access it.
- Call: `query issue`, effect: read
- Body: `IssueRequest`, required

| Flag | Required | What |
|---|---|---|
| `--id <value>` | no | Issue UUID or identifier, such as ENG-123. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api issue-add-label [options]`

- What: Add a label without replacing the issue’s existing labels. The label must be available to the issue’s team.
- Call: `mutation issueAddLabel`, effect: write
- Body: `IssueAddLabelRequest`, required

| Flag | Required | What |
|---|---|---|
| `--label-id <value>` | no | The identifier of the label to add. |
| `--id <value>` | no | The identifier of the issue to add the label to. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api issue-archive [options]`

- What: Archives an issue and its sub-issues, keeping their data available for later restoration. Archived issues are excluded from normal issue lists. Pass trash only when you want the deletion grace period to apply instead.
- Call: `mutation issueArchive`, effect: destructive
- Permission keys: `linear.delete`
- Body: `IssueArchiveRequest`, required

| Flag | Required | What |
|---|---|---|
| `--trash <value>` | no | Whether to trash the issue and its sub-issues. |
| `--id <value>` | no | The identifier of the issue to archive. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api issue-batch-create [options]`

- What: Creates one to 50 issues in a single batch. If any creation fails, none of the issues in the batch are saved. Put parent inputs before their sub-issues and supply parent UUIDs to connect issues created in the same batch.
- Call: `mutation issueBatchCreate`, effect: write
- Body: `IssueBatchCreateRequest`, required

| Flag | Required | What |
|---|---|---|
| `--input <value>` | no | A list of issue objects to create. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api issue-batch-update [options]`

- What: Applies the same update input to one to 50 issues. The batch runs as one transaction, so a failed update rolls back the other updates. Use the returned issues to read the resulting values.
- Call: `mutation issueBatchUpdate`, effect: write
- Body: `IssueBatchUpdateRequest`, required

| Flag | Required | What |
|---|---|---|
| `--input <value>` | no | A partial issue object to update the issues with. |
| `--ids <value>` | no | One to 50 distinct issue UUIDs to update. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api issue-create [options]`

- What: Creates an issue in the chosen team and returns it with its assigned identifier. You can supply a template to populate defaults and create any sub-issues it defines. Team settings and automation may set values such as the initial status, assignee, and cycle.
- Call: `mutation issueCreate`, effect: write
- Body: `IssueCreateRequest`, required

| Flag | Required | What |
|---|---|---|
| `--input <value>` | no | The issue object to create. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api issue-delete [options]`

- What: Moves an issue to the trash and trashes its unarchived sub-issues that you can access. Trashed issues can be restored during the 30-day grace period; permanentlyDelete skips that period and requires workspace entity-management permission.
- Call: `mutation issueDelete`, effect: destructive
- Permission keys: `linear.delete`
- Body: `IssueDeleteRequest`, required

| Flag | Required | What |
|---|---|---|
| `--permanently-delete <value>` | no | Delete immediately, skipping the 30-day grace period. Requires workspace permission to manage entities and access to the issue’s team. |
| `--id <value>` | no | The identifier of the issue to delete. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api issue-external-sync-disable [options]`

- What: Stop syncing an issue with the Jira or GitHub integration identified by its sync attachment.
- Call: `mutation issueExternalSyncDisable`, effect: write
- Body: `IssueExternalSyncDisableRequest`, required

| Flag | Required | What |
|---|---|---|
| `--attachment-id <value>` | no | The ID of the sync attachment to disable. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api issue-figma-file-key-search [options]`

- What: Find issues that are related to a given Figma file key.
- Call: `query issueFigmaFileKeySearch`, effect: read
- Pages: cursor: send `after` (body), read the next one from `pageInfo.endCursor`; items in `nodes`; `pageInfo.hasNextPage` is false on the last page; page size in `first` (body)
- Body: `IssueFigmaFileKeySearchRequest`, required

| Flag | Required | What |
|---|---|---|
| `--before <value>` | no | Returns results before this cursor. Pair with \`last\` to paginate backward, using a cursor returned by the same connection. Keep the filters and ordering unchanged between pages. Cannot be combined with \`first\` or \`after\`. |
| `--after <value>` | no | Returns results after this cursor. Pair with \`first\` and the previous page's \`endCursor\` to fetch the next page. Keep the filters and ordering unchanged between pages. Cannot be combined with \`last\` or \`before\`. |
| `--first <value>` | no | The maximum number of results to return, starting after \`after\` if supplied. Between 1 and 250. Defaults to 50 when neither \`first\` nor \`last\` is supplied. Cannot be combined with \`last\` or \`before\`. |
| `--last <value>` | no | The maximum number of results to return, ending before \`before\` if supplied. Between 1 and 250. Cannot be combined with \`first\` or \`after\`. |
| `--include-archived <value>` | no | Includes archived resources alongside active ones. Defaults to false, which returns only active resources. This does not include deleted resources. |
| `--order-by <value>` | no | Orders results by creation time or last meaningful update time. Defaults to \`createdAt\`. Results are newest first with \`first\` and oldest first with \`last\`; use the returned \`endCursor\` as \`before\` to continue backward. Cannot be combined with custom \`sort\` options on fields that support them. |
| `--file-key <value>` | no | The Figma file key. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |
| `--all` | no | read every page, as the API pages it |

## `linear api issue-filter-suggestion [options]`

- What: Suggests filters for an issue view based on a text prompt.
- Call: `query issueFilterSuggestion`, effect: read
- Body: `IssueFilterSuggestionRequest`, required

| Flag | Required | What |
|---|---|---|
| `--team-id <value>` | no | \[Internal\] The ID of the team if filtering a team view. |
| `--project-id <value>` | no | The ID of the project if filtering a project view. |
| `--prompt <value>` | no | The text prompt to generate a filter suggestion from. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api issue-priority-values`

- What: Issue priority values and corresponding labels.
- Call: `query issuePriorityValues`, effect: read

## `linear api issue-reminder [options]`

- What: Creates a reminder notification for you at reminderAt. The time must be in the future, and existing reminders for this issue are replaced. The payload returns success without an issue object.
- Call: `mutation issueReminder`, effect: write
- Body: `IssueReminderRequest`, required

| Flag | Required | What |
|---|---|---|
| `--reminder-at <value>` | no | Future time at which to deliver the reminder notification. |
| `--id <value>` | no | The identifier of the issue to add a reminder for. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api issue-remove-label [options]`

- What: Remove one label while keeping the issue’s other labels.
- Call: `mutation issueRemoveLabel`, effect: write
- Body: `IssueRemoveLabelRequest`, required

| Flag | Required | What |
|---|---|---|
| `--label-id <value>` | no | The identifier of the label to remove. |
| `--id <value>` | no | The identifier of the issue to remove the label from. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api issue-repository-suggestions [options]`

- What: Returns code repositories that are most likely to be relevant for implementing an issue.
- Call: `query issueRepositorySuggestions`, effect: read
- Body: `IssueRepositorySuggestionsRequest`, required

| Flag | Required | What |
|---|---|---|
| `--agent-session-id <value>` | no | Optional AgentSession ID associated with the issue for which the suggestions are being generated. |
| `--candidate-repositories <value>` | no | List of candidate repositories to restrict suggestions to. |
| `--issue-id <value>` | no | The ID of the issue to get repository suggestions for. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api issue-search [options]`

- What: \[DEPRECATED\] Search issues. This endpoint is deprecated and will be removed in the future – use \`searchIssues\` instead.
- Call: `query issueSearch`, effect: read
- Pages: cursor: send `after` (body), read the next one from `pageInfo.endCursor`; items in `nodes`; `pageInfo.hasNextPage` is false on the last page; page size in `first` (body)
- Body: `IssueSearchRequest`

| Flag | Required | What |
|---|---|---|
| `--filter <value>` | no | Filter returned issues. |
| `--query <value>` | no | \[Deprecated\] Search string to look for. |
| `--before <value>` | no | Returns results before this cursor. Pair with \`last\` to paginate backward, using a cursor returned by the same connection. Keep the filters and ordering unchanged between pages. Cannot be combined with \`first\` or \`after\`. |
| `--after <value>` | no | Returns results after this cursor. Pair with \`first\` and the previous page's \`endCursor\` to fetch the next page. Keep the filters and ordering unchanged between pages. Cannot be combined with \`last\` or \`before\`. |
| `--first <value>` | no | The maximum number of results to return, starting after \`after\` if supplied. Between 1 and 250. Defaults to 50 when neither \`first\` nor \`last\` is supplied. Cannot be combined with \`last\` or \`before\`. |
| `--last <value>` | no | The maximum number of results to return, ending before \`before\` if supplied. Between 1 and 250. Cannot be combined with \`first\` or \`after\`. |
| `--include-archived <value>` | no | Includes archived resources alongside active ones. Defaults to false, which returns only active resources. This does not include deleted resources. |
| `--order-by <value>` | no | Orders results by creation time or last meaningful update time. Defaults to \`createdAt\`. Results are newest first with \`first\` and oldest first with \`last\`; use the returned \`endCursor\` as \`before\` to continue backward. Cannot be combined with custom \`sort\` options on fields that support them. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |
| `--all` | no | read every page, as the API pages it |

## `linear api issue-share [options]`

- What: Shares an issue with a user who would not otherwise be able to access it. The viewer must have native access to the issue's full sub-issue tree and permission to share issues in the issue's team. Issues that inherit sharing from a parent issue cannot be shared directly.
- Call: `mutation issueShare`, effect: write
- Body: `IssueShareRequest`, required

| Flag | Required | What |
|---|---|---|
| `--user-id <value>` | no | The identifier of the user to share the issue with. |
| `--id <value>` | no | The identifier of the issue to share. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api issue-subscribe [options]`

- What: Subscribes a user to issue updates. Omit both userId and userEmail to subscribe yourself, or provide one of them to choose another workspace user. Subscribing an existing subscriber leaves the subscription in place.
- Call: `mutation issueSubscribe`, effect: write
- Body: `IssueSubscribeRequest`, required

| Flag | Required | What |
|---|---|---|
| `--user-email <value>` | no | Email of an active workspace user to subscribe. Cannot be combined with userId. |
| `--user-id <value>` | no | UUID of the user to subscribe. Cannot be combined with userEmail. |
| `--id <value>` | no | The identifier of the issue to subscribe to. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api issue-title-suggestion-from-customer-request [options]`

- What: Suggests an issue title based on a customer request message using AI summarization.
- Call: `query issueTitleSuggestionFromCustomerRequest`, effect: read
- Body: `IssueTitleSuggestionFromCustomerRequestRequest`, required

| Flag | Required | What |
|---|---|---|
| `--request <value>` | no | The customer request message to generate an issue title from. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api issue-unarchive [options]`

- What: Restores an archived issue and its sub-issues to normal issue lists. Automatic-archive markers are cleared, and a project association is removed if the project no longer includes the issue’s team.
- Call: `mutation issueUnarchive`, effect: write
- Body: `IssueUnarchiveRequest`, required

| Flag | Required | What |
|---|---|---|
| `--id <value>` | no | The identifier of the issue to unarchive. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api issue-unshare [options]`

- What: Stops sharing an issue with a user. The viewer must have native access to the issue's full sub-issue tree and permission to share issues in the issue's team. Issues that inherit sharing from a parent issue cannot be unshared directly.
- Call: `mutation issueUnshare`, effect: write
- Body: `IssueUnshareRequest`, required

| Flag | Required | What |
|---|---|---|
| `--user-id <value>` | no | The identifier of the user to remove from the issue share. |
| `--id <value>` | no | The identifier of the issue to stop sharing. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api issue-unsubscribe [options]`

- What: Removes a user’s subscription to issue updates. Omit both userId and userEmail to unsubscribe yourself, or provide one of them to choose another workspace user.
- Call: `mutation issueUnsubscribe`, effect: write
- Body: `IssueUnsubscribeRequest`, required

| Flag | Required | What |
|---|---|---|
| `--user-email <value>` | no | Email of an active workspace user to unsubscribe. Cannot be combined with userId. |
| `--user-id <value>` | no | UUID of the user to unsubscribe. Cannot be combined with userEmail. |
| `--id <value>` | no | The identifier of the issue to unsubscribe from. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api issue-update [options]`

- What: Updates an issue by UUID or human-readable identifier and returns its resulting values. Omitted fields keep their values; list inputs replace their existing lists unless an add/remove field is used. Changes can also trigger team workflow behavior, such as automatic cycle assignment.
- Call: `mutation issueUpdate`, effect: write
- Body: `IssueUpdateRequest`, required

| Flag | Required | What |
|---|---|---|
| `--input <value>` | no | A partial issue object to update the issue with. |
| `--id <value>` | no | The identifier of the issue to update. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api issue-vcs-branch-search [options]`

- What: Find an accessible issue referenced by a version-control branch name. Null if no issue matches.
- Call: `query issueVcsBranchSearch`, effect: read
- Body: `IssueVcsBranchSearchRequest`, required

| Flag | Required | What |
|---|---|---|
| `--branch-name <value>` | no | The VCS branch name to search for. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api issues [options]`

- What: Lists issues you can access. Use filter to narrow the results by team, assignee, status, labels, project, or cycle, and cursor arguments to fetch subsequent pages. Archived issues are excluded unless includeArchived is true.
- Call: `query issues`, effect: read
- Pages: cursor: send `after` (body), read the next one from `pageInfo.endCursor`; items in `nodes`; `pageInfo.hasNextPage` is false on the last page; page size in `first` (body)
- Body: `IssuesRequest`

| Flag | Required | What |
|---|---|---|
| `--filter <value>` | no | Filter returned issues. |
| `--before <value>` | no | Returns results before this cursor. Pair with \`last\` to paginate backward, using a cursor returned by the same connection. Keep the filters and ordering unchanged between pages. Cannot be combined with \`first\` or \`after\`. |
| `--after <value>` | no | Returns results after this cursor. Pair with \`first\` and the previous page's \`endCursor\` to fetch the next page. Keep the filters and ordering unchanged between pages. Cannot be combined with \`last\` or \`before\`. |
| `--first <value>` | no | The maximum number of results to return, starting after \`after\` if supplied. Between 1 and 250. Defaults to 50 when neither \`first\` nor \`last\` is supplied. Cannot be combined with \`last\` or \`before\`. |
| `--last <value>` | no | The maximum number of results to return, ending before \`before\` if supplied. Between 1 and 250. Cannot be combined with \`first\` or \`after\`. |
| `--include-archived <value>` | no | Includes archived resources alongside active ones. Defaults to false, which returns only active resources. This does not include deleted resources. |
| `--order-by <value>` | no | Orders results by creation time or last meaningful update time. Defaults to \`createdAt\`. Results are newest first with \`first\` and oldest first with \`last\`; use the returned \`endCursor\` as \`before\` to continue backward. Cannot be combined with custom \`sort\` options on fields that support them. |
| `--sort <value>` | no | Sort returned issues. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |
| `--all` | no | read every page, as the API pages it |

## `linear api search-issues [options]`

- What: Searches accessible issues using text matching and meaning. Results are ordered by relevance unless orderBy is supplied; use includeComments to search discussion text too. The issue filter narrows the retrieved candidates, so totalCount is not the final filtered count. Limited to 30 requests per minute.
- Call: `query searchIssues`, effect: read
- Pages: cursor: send `after` (body), read the next one from `pageInfo.endCursor`; items in `nodes`; `pageInfo.hasNextPage` is false on the last page; page size in `first` (body)
- Body: `SearchIssuesRequest`, required

| Flag | Required | What |
|---|---|---|
| `--filter <value>` | no | Filter returned issues. |
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
