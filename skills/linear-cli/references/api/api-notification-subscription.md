<!-- Generated from the API manifest and the command tree by pnpm generate. Do not edit. -->

# Linear API: notification-subscription

## `linear api notification-subscription [options]`

- What: A specific notification subscription by ID.
- Call: `query notificationSubscription`, effect: read
- Body: `NotificationSubscriptionRequest`, required

| Flag | Required | What |
|---|---|---|
| `--id <value>` | no | The identifier of the notification subscription to retrieve. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api notification-subscription-create [options]`

- What: Subscribes the authenticated user to one target and its requested notification types. Rejects an existing subscription to the same target and view.
- Call: `mutation notificationSubscriptionCreate`, effect: write
- Body: `NotificationSubscriptionCreateRequest`, required

| Flag | Required | What |
|---|---|---|
| `--input <value>` | no | The subscription object to create. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api notification-subscription-delete [options]`

- What: Deletes a notification subscription reference.
- Call: `mutation notificationSubscriptionDelete`, effect: destructive, deprecated
- Permission keys: `linear.delete`
- Body: `NotificationSubscriptionDeleteRequest`, required

| Flag | Required | What |
|---|---|---|
| `--id <value>` | no | The identifier of the notification subscription reference to delete. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api notification-subscription-update [options]`

- What: Updates a subscription owned by the authenticated user. Use active: false to pause it without deleting its configuration, or replace notificationSubscriptionTypes to change the events you follow. Subscriptions to read-only projects cannot be changed.
- Call: `mutation notificationSubscriptionUpdate`, effect: write
- Body: `NotificationSubscriptionUpdateRequest`, required

| Flag | Required | What |
|---|---|---|
| `--input <value>` | no | A partial notification subscription object to update the notification subscription with. |
| `--id <value>` | no | The identifier of the notification subscription to update. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api notification-subscriptions [options]`

- What: The authenticated user's subscriptions to entity notifications.
- Call: `query notificationSubscriptions`, effect: read
- Pages: cursor: send `after` (body), read the next one from `pageInfo.endCursor`; items in `nodes`; `pageInfo.hasNextPage` is false on the last page; page size in `first` (body)
- Body: `NotificationSubscriptionsRequest`

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
