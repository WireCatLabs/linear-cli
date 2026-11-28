<!-- Generated from the API manifest and the command tree by pnpm generate. Do not edit. -->

# Linear API: project

## `linear api project [options]`

- What: Returns a project you can access by UUID, URL slug, or human-readable project identifier. Archived projects can also be retrieved.
- Call: `query project`, effect: read
- Body: `ProjectRequest`, required

| Flag | Required | What |
|---|---|---|
| `--id <value>` | no | The project UUID, slug ID, or human-readable identifier. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api project-add-label [options]`

- What: Adds a project label while keeping the project’s other labels. The label must be available to the project; label-group and team-scoping rules still apply.
- Call: `mutation projectAddLabel`, effect: write
- Body: `ProjectAddLabelRequest`, required

| Flag | Required | What |
|---|---|---|
| `--label-id <value>` | no | The identifier of the label to add. |
| `--id <value>` | no | The identifier of the project to add the label to. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api project-archive [options]`

- What: Archives a project.
- Call: `mutation projectArchive`, effect: destructive, deprecated
- Permission keys: `linear.delete`
- Body: `ProjectArchiveRequest`, required

| Flag | Required | What |
|---|---|---|
| `--trash <value>` | no | Whether to trash the project. |
| `--id <value>` | no | The identifier of the project to archive. Also the identifier from the URL is accepted. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api project-create [options]`

- What: Creates a project in the supplied teams. You can apply a project template to fill in defaults and create its milestones, initial issues, and initiative associations. The new project must have at least one accessible team.
- Call: `mutation projectCreate`, effect: write
- Body: `ProjectCreateRequest`, required

| Flag | Required | What |
|---|---|---|
| `--ai-conversation-id <value>` | no | \[Internal\] The identifier of the project draft conversation to attach to this project. |
| `--project-draft-id <value>` | no | \[Internal\] The identifier of the project draft that produced this project. |
| `--slack-channel-name <value>` | no | The full name for the Slack channel to create (including prefix). When provided, a Slack channel will be created and connected to the project. |
| `--input <value>` | no | The project properties to set on the new project. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api project-delete [options]`

- What: Moves a project to the trash. This archives the project rather than immediately deleting it permanently. You can restore it with projectUnarchive while it remains available in the trash.
- Call: `mutation projectDelete`, effect: destructive
- Permission keys: `linear.delete`
- Body: `ProjectDeleteRequest`, required

| Flag | Required | What |
|---|---|---|
| `--id <value>` | no | The identifier of the project to delete. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api project-external-sync-disable [options]`

- What: Disables external sync on a project.
- Call: `mutation projectExternalSyncDisable`, effect: write
- Body: `ProjectExternalSyncDisableRequest`, required

| Flag | Required | What |
|---|---|---|
| `--sync-source <value>` | no | The source of the external sync to disable. |
| `--project-id <value>` | no | The ID of the project to disable external sync for. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api project-filter-suggestion [options]`

- What: Suggests filters for a project view based on a text prompt.
- Call: `query projectFilterSuggestion`, effect: read
- Body: `ProjectFilterSuggestionRequest`, required

| Flag | Required | What |
|---|---|---|
| `--team-id <value>` | no | \[Internal\] The ID of the team if filtering a team view. |
| `--prompt <value>` | no | Text describing the projects to match. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api project-remove-label [options]`

- What: Removes a project label while keeping the project’s other labels. The label itself is not deleted.
- Call: `mutation projectRemoveLabel`, effect: write
- Body: `ProjectRemoveLabelRequest`, required

| Flag | Required | What |
|---|---|---|
| `--label-id <value>` | no | The identifier of the label to remove. |
| `--id <value>` | no | The identifier of the project to remove the label from. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api project-unarchive [options]`

- What: Restores an archived or trashed project. The operation checks the project quota of each associated team before restoring it.
- Call: `mutation projectUnarchive`, effect: write
- Body: `ProjectUnarchiveRequest`, required

| Flag | Required | What |
|---|---|---|
| `--id <value>` | no | The identifier of the project to restore. Also the identifier from the URL is accepted. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api project-update [options]`

- What: Updates the supplied fields of a project you can edit. Omitted fields keep their current values. List inputs such as memberIds and labelIds replace the corresponding lists; see each input for clearing rules and team-access behavior.
- Call: `mutation projectUpdate`, effect: write
- Body: `ProjectUpdateRequest`, required

| Flag | Required | What |
|---|---|---|
| `--input <value>` | no | A partial project object to update the project with. |
| `--id <value>` | no | The identifier of the project to update. Also the identifier from the URL is accepted. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api projects [options]`

- What: Returns projects visible to you in the workspace. Use filter to narrow the results and the connection arguments to page or sort them.
- Call: `query projects`, effect: read
- Pages: cursor: send `after` (body), read the next one from `pageInfo.endCursor`; items in `nodes`; `pageInfo.hasNextPage` is false on the last page; page size in `first` (body)
- Body: `ProjectsRequest`

| Flag | Required | What |
|---|---|---|
| `--filter <value>` | no | Filter returned projects. |
| `--before <value>` | no | Returns results before this cursor. Pair with \`last\` to paginate backward, using a cursor returned by the same connection. Keep the filters and ordering unchanged between pages. Cannot be combined with \`first\` or \`after\`. |
| `--after <value>` | no | Returns results after this cursor. Pair with \`first\` and the previous page's \`endCursor\` to fetch the next page. Keep the filters and ordering unchanged between pages. Cannot be combined with \`last\` or \`before\`. |
| `--first <value>` | no | The maximum number of results to return, starting after \`after\` if supplied. Between 1 and 250. Defaults to 50 when neither \`first\` nor \`last\` is supplied. Cannot be combined with \`last\` or \`before\`. |
| `--last <value>` | no | The maximum number of results to return, ending before \`before\` if supplied. Between 1 and 250. Cannot be combined with \`first\` or \`after\`. |
| `--include-archived <value>` | no | Includes archived resources alongside active ones. Defaults to false, which returns only active resources. This does not include deleted resources. |
| `--order-by <value>` | no | Orders results by creation time or last meaningful update time. Defaults to \`createdAt\`. Results are newest first with \`first\` and oldest first with \`last\`; use the returned \`endCursor\` as \`before\` to continue backward. Cannot be combined with custom \`sort\` options on fields that support them. |
| `--sort <value>` | no | Sort returned projects. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |
| `--all` | no | read every page, as the API pages it |

## `linear api search-projects [options]`

- What: Searches accessible projects using text matching and meaning. Use teamId to narrow the search, and includeArchived to include archived projects. Results are ordered by relevance unless orderBy is supplied and use cursor pagination. Limited to 30 requests per minute.
- Call: `query searchProjects`, effect: read
- Pages: cursor: send `after` (body), read the next one from `pageInfo.endCursor`; items in `nodes`; `pageInfo.hasNextPage` is false on the last page; page size in `first` (body)
- Body: `SearchProjectsRequest`, required

| Flag | Required | What |
|---|---|---|
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
