<!-- Generated from the API manifest and the command tree by pnpm generate. Do not edit. -->

# Linear API: notification

## `linear api inbox-notification-update [options]`

- What: Changes read or snooze state for the authenticated user’s group of related inbox notifications. Supply a notification UUID from the group and at least one state change. The response includes the requested notification and all notifications changed.
- Call: `mutation inboxNotificationUpdate`, effect: write
- Body: `InboxNotificationUpdateRequest`, required

| Flag | Required | What |
|---|---|---|
| `--input <value>` | no | The inbox state changes to apply. |
| `--id <value>` | no | The identifier of the inbox notification to update. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api inbox-notifications [options]`

- What: The authenticated user’s visible inbox, excluding archived and snoozed notifications. Returns one notification per group of related activity.
- Call: `query inboxNotifications`, effect: read
- Pages: cursor: send `after` (body), read the next one from `pageInfo.endCursor`; items in `nodes`; `pageInfo.hasNextPage` is false on the last page; page size in `first` (body)
- Body: `InboxNotificationsRequest`

| Flag | Required | What |
|---|---|---|
| `--first <value>` | no | The maximum number of inbox notification stacks to return. Defaults to 50. |
| `--after <value>` | no | The cursor after which to return inbox notification stacks. |
| `--unread-only <value>` | no | Whether to return only unread inbox notification stacks. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |
| `--all` | no | read every page, as the API pages it |

## `linear api notification [options]`

- What: Returns one of the authenticated user’s notifications by UUID, including an archived notification.
- Call: `query notification`, effect: read
- Body: `NotificationRequest`, required

| Flag | Required | What |
|---|---|---|
| `--id <value>` | no | The identifier of the notification to retrieve. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api notification-archive [options]`

- What: Archives one of your notifications, removing it from the active inbox. Other notifications in the same group remain unchanged. Use notificationArchiveAll to archive the group.
- Call: `mutation notificationArchive`, effect: destructive
- Permission keys: `linear.delete`
- Body: `NotificationArchiveRequest`, required

| Flag | Required | What |
|---|---|---|
| `--id <value>` | no | The id of the notification to archive. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api notification-archive-all [options]`

- What: Archives the authenticated user’s active notifications for the selected entity or notification group.
- Call: `mutation notificationArchiveAll`, effect: write
- Body: `NotificationArchiveAllRequest`, required

| Flag | Required | What |
|---|---|---|
| `--input <value>` | no | The entity or notification group whose notifications to change. Supply exactly one identifier. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api notification-category-channel-subscription-update [options]`

- What: Subscribes to or unsubscribes from a specific notification category for a given notification channel. For example, subscribe to 'issueAssignment' notifications via the 'email' channel.
- Call: `mutation notificationCategoryChannelSubscriptionUpdate`, effect: write
- Body: `NotificationCategoryChannelSubscriptionUpdateRequest`, required

| Flag | Required | What |
|---|---|---|
| `--channel <value>` | no | The notification channel in which to subscribe to or unsubscribe from the category |
| `--category <value>` | no | The notification category to subscribe to or unsubscribe from |
| `--subscribe <value>` | no | True if the user wants to subscribe, false if the user wants to unsubscribe |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api notification-mark-read-all [options]`

- What: Marks the authenticated user’s active notifications for the selected entity or notification group as read.
- Call: `mutation notificationMarkReadAll`, effect: write
- Body: `NotificationMarkReadAllRequest`, required

| Flag | Required | What |
|---|---|---|
| `--read-at <value>` | no | The time when notification was marked as read. |
| `--input <value>` | no | The entity or notification group whose notifications to change. Supply exactly one identifier. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api notification-mark-unread-all [options]`

- What: Marks the authenticated user’s active notifications for the selected entity or notification group as unread.
- Call: `mutation notificationMarkUnreadAll`, effect: write
- Body: `NotificationMarkUnreadAllRequest`, required

| Flag | Required | What |
|---|---|---|
| `--input <value>` | no | The entity or notification group whose notifications to change. Supply exactly one identifier. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api notification-snooze-all [options]`

- What: Snoozes the authenticated user’s active notifications for the selected entity or notification group.
- Call: `mutation notificationSnoozeAll`, effect: write
- Body: `NotificationSnoozeAllRequest`, required

| Flag | Required | What |
|---|---|---|
| `--snoozed-until-at <value>` | no | The time until a notification will be snoozed. After that it will appear in the inbox again. |
| `--input <value>` | no | The entity or notification group whose notifications to change. Supply exactly one identifier. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api notification-unarchive [options]`

- What: Restores one of your archived notifications. Its read and snooze states are preserved, so a snoozed notification may still be absent from the visible inbox.
- Call: `mutation notificationUnarchive`, effect: write
- Body: `NotificationUnarchiveRequest`, required

| Flag | Required | What |
|---|---|---|
| `--id <value>` | no | The id of the notification to unarchive. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api notification-unsnooze-all [options]`

- What: Unsnoozes the authenticated user’s active notifications for the selected entity or notification group.
- Call: `mutation notificationUnsnoozeAll`, effect: write
- Body: `NotificationUnsnoozeAllRequest`, required

| Flag | Required | What |
|---|---|---|
| `--unsnoozed-at <value>` | no | The time when the notification was unsnoozed. |
| `--input <value>` | no | The entity or notification group whose notifications to change. Supply exactly one identifier. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api notification-update [options]`

- What: Updates one of the authenticated user’s notifications. Related notifications are unchanged.
- Call: `mutation notificationUpdate`, effect: write
- Body: `NotificationUpdateRequest`, required

| Flag | Required | What |
|---|---|---|
| `--input <value>` | no | A partial notification object to update the notification with. |
| `--id <value>` | no | The identifier of the notification to update. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api notifications [options]`

- What: Returns individual notifications received by the authenticated user, with optional filters. Related activity can produce several notifications; use inboxNotifications for the grouped inbox view.
- Call: `query notifications`, effect: read
- Pages: cursor: send `after` (body), read the next one from `pageInfo.endCursor`; items in `nodes`; `pageInfo.hasNextPage` is false on the last page; page size in `first` (body)
- Body: `NotificationsRequest`

| Flag | Required | What |
|---|---|---|
| `--filter <value>` | no | Filters returned notifications. |
| `--before <value>` | no | Returns results before this cursor. Pair with \`last\` to paginate backward, using a cursor returned by the same connection. Keep the filters and ordering unchanged between pages. Cannot be combined with \`first\` or \`after\`. |
| `--after <value>` | no | Returns results after this cursor. Pair with \`first\` and the previous page's \`endCursor\` to fetch the next page. Keep the filters and ordering unchanged between pages. Cannot be combined with \`last\` or \`before\`. |
| `--first <value>` | no | The maximum number of results to return, starting after \`after\` if supplied. Between 1 and 250. Defaults to 50 when neither \`first\` nor \`last\` is supplied. Cannot be combined with \`last\` or \`before\`. |
| `--last <value>` | no | The maximum number of results to return, ending before \`before\` if supplied. Between 1 and 250. Cannot be combined with \`first\` or \`after\`. |
| `--include-archived <value>` | no | Includes archived resources alongside active ones. Defaults to false, which returns only active resources. This does not include deleted resources. |
| `--order-by <value>` | no | Orders results by creation time or last meaningful update time. Defaults to \`createdAt\`. Results are newest first with \`first\` and oldest first with \`last\`; use the returned \`endCursor\` as \`before\` to continue backward. Cannot be combined with custom \`sort\` options on fields that support them. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |
| `--all` | no | read every page, as the API pages it |
