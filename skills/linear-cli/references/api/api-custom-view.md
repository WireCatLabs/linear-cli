<!-- Generated from the API manifest and the command tree by pnpm generate. Do not edit. -->

# Linear API: custom-view

## `linear api custom-view [options]`

- What: One specific custom view, looked up by ID or slug.
- Call: `query customView`, effect: read
- Body: `CustomViewRequest`, required

| Flag | Required | What |
|---|---|---|
| `--id <value>` | no | The identifier of the custom view to retrieve. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api custom-view-create [options]`

- What: Creates a saved view owned by you. Choose an issue, project, initiative, or update filter and set shared if others in its scope should use it. Display settings can be saved separately with viewPreferencesCreate.
- Call: `mutation customViewCreate`, effect: write
- Body: `CustomViewCreateRequest`, required

| Flag | Required | What |
|---|---|---|
| `--input <value>` | no | The properties of the custom view to create. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api custom-view-delete [options]`

- What: Deletes a saved view without deleting the items it displayed. Only workspace members can delete views shared with the whole workspace; deleting a view used in a pinned tab also requires permission to edit that tab. Use customViewHasSubscribers to check whether other people receive notifications from the view.
- Call: `mutation customViewDelete`, effect: destructive
- Permission keys: `linear.delete`
- Body: `CustomViewDeleteRequest`, required

| Flag | Required | What |
|---|---|---|
| `--id <value>` | no | The identifier of the custom view to delete. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api custom-view-has-subscribers [options]`

- What: Whether a custom view has active notification subscribers other than the current user. Useful for warning before deleting a shared view.
- Call: `query customViewHasSubscribers`, effect: read
- Body: `CustomViewHasSubscribersRequest`, required

| Flag | Required | What |
|---|---|---|
| `--id <value>` | no | The identifier of the custom view. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api custom-view-update [options]`

- What: Updates a saved view’s metadata, scope, or filter configuration. Omitted fields are unchanged. Only workspace members can change views shared with the whole workspace; editing a view used in a pinned tab also requires permission to edit that tab.
- Call: `mutation customViewUpdate`, effect: write
- Body: `CustomViewUpdateRequest`, required

| Flag | Required | What |
|---|---|---|
| `--input <value>` | no | The properties of the custom view to update. |
| `--id <value>` | no | The identifier of the custom view to update. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api custom-views [options]`

- What: All custom views accessible to the user, including personal views and shared workspace views. Excludes views scoped to a specific project or initiative.
- Call: `query customViews`, effect: read
- Pages: cursor: send `after` (body), read the next one from `pageInfo.endCursor`; items in `nodes`; `pageInfo.hasNextPage` is false on the last page; page size in `first` (body)
- Body: `CustomViewsRequest`

| Flag | Required | What |
|---|---|---|
| `--filter <value>` | no | Filter returned custom views. |
| `--before <value>` | no | Returns results before this cursor. Pair with \`last\` to paginate backward, using a cursor returned by the same connection. Keep the filters and ordering unchanged between pages. Cannot be combined with \`first\` or \`after\`. |
| `--after <value>` | no | Returns results after this cursor. Pair with \`first\` and the previous page's \`endCursor\` to fetch the next page. Keep the filters and ordering unchanged between pages. Cannot be combined with \`last\` or \`before\`. |
| `--first <value>` | no | The maximum number of results to return, starting after \`after\` if supplied. Between 1 and 250. Defaults to 50 when neither \`first\` nor \`last\` is supplied. Cannot be combined with \`last\` or \`before\`. |
| `--last <value>` | no | The maximum number of results to return, ending before \`before\` if supplied. Between 1 and 250. Cannot be combined with \`first\` or \`after\`. |
| `--include-archived <value>` | no | Includes archived resources alongside active ones. Defaults to false, which returns only active resources. This does not include deleted resources. |
| `--order-by <value>` | no | Orders results by creation time or last meaningful update time. Defaults to \`createdAt\`. Results are newest first with \`first\` and oldest first with \`last\`; use the returned \`endCursor\` as \`before\` to continue backward. Cannot be combined with custom \`sort\` options on fields that support them. |
| `--sort <value>` | no | Sort returned custom views. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |
| `--all` | no | read every page, as the API pages it |
