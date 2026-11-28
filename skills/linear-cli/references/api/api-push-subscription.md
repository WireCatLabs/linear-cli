<!-- Generated from the API manifest and the command tree by pnpm generate. Do not edit. -->

# Linear API: push-subscription

## `linear api push-subscription-create [options]`

- What: Registers a browser or device to receive push notifications for the authenticated user. If the same subscription data is already registered, returns that record; otherwise replaces the subscription associated with the current sign-in session. userId in the input is ignored. Successful registration does not guarantee notification delivery; use pushSubscriptionTest to request a test notification.
- Call: `mutation pushSubscriptionCreate`, effect: write
- Body: `PushSubscriptionCreateRequest`, required

| Flag | Required | What |
|---|---|---|
| `--input <value>` | no | The push subscription to create. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api push-subscription-delete [options]`

- What: Deletes a push subscription to stop sending notifications through it. Select success to confirm deletion. This operation does not populate entity, so selecting that field produces a GraphQL error.
- Call: `mutation pushSubscriptionDelete`, effect: destructive
- Permission keys: `linear.delete`
- Body: `PushSubscriptionDeleteRequest`, required

| Flag | Required | What |
|---|---|---|
| `--id <value>` | no | The identifier of the push subscription to delete. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api push-subscription-test [options]`

- What: Queues a test notification for the authenticated user. Limited to three requests per minute; success confirms scheduling, not delivery.
- Call: `query pushSubscriptionTest`, effect: read
- Body: `PushSubscriptionTestRequest`

| Flag | Required | What |
|---|---|---|
| `--target-mobile <value>` | no | Whether to target mobile devices. Defaults to false, which targets desktop notifications. |
| `--send-strategy <value>` | no | Use push for push subscribers, desktop for connected desktop clients, desktopAndPush for both, or desktopThenPush to prefer connected desktop clients. Defaults to push. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |
