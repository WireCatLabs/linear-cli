<!-- Generated from the API manifest and the command tree by pnpm generate. Do not edit. -->

# Linear API: webhook

## `linear api webhook [options]`

- What: Retrieves a single webhook by its identifier.
- Call: `query webhook`, effect: read
- Body: `WebhookRequest`, required

| Flag | Required | What |
|---|---|---|
| `--id <value>` | no | The identifier of the webhook to retrieve. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api webhook-create [options]`

- What: Creates a webhook subscription and returns its configuration, including the signing secret. Choose one team or all public teams, and provide a public HTTPS destination with the resource types you want to receive. The destination must not already be registered for the same team scope. Requires workspace API management permission; a team-specific webhook also requires that team’s management permission. AuditEntry subscriptions have separate audit log access requirements.
- Call: `mutation webhookCreate`, effect: write
- Body: `WebhookCreateRequest`, required

| Flag | Required | What |
|---|---|---|
| `--input <value>` | no | The webhook object to create. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api webhook-delete [options]`

- What: Deletes a webhook subscription and stops future deliveries.
- Call: `mutation webhookDelete`, effect: destructive
- Permission keys: `linear.delete`
- Body: `WebhookDeleteRequest`, required

| Flag | Required | What |
|---|---|---|
| `--id <value>` | no | The identifier of the Webhook to delete. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api webhook-rotate-secret [options]`

- What: Generates and returns a new HMAC-SHA256 signing secret for the webhook. Update your receiver to verify later deliveries with the returned key; the previous key is replaced rather than kept as a second active key. This changes webhook signatures, not the endpoint or subscribed event streams.
- Call: `mutation webhookRotateSecret`, effect: write
- Body: `WebhookRotateSecretRequest`, required

| Flag | Required | What |
|---|---|---|
| `--id <value>` | no | The identifier of the Webhook to rotate the secret for. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api webhook-update [options]`

- What: Updates an existing webhook without changing its team scope. Omitted properties remain unchanged, and resourceTypes replaces the complete list of event streams. Setting enabled to false pauses delivery while retaining the subscription. Changing secret changes the key your receiver must use for later deliveries. Requires workspace API management permission and access to the subscribed resource types.
- Call: `mutation webhookUpdate`, effect: write
- Body: `WebhookUpdateRequest`, required

| Flag | Required | What |
|---|---|---|
| `--input <value>` | no | The properties of the Webhook. |
| `--id <value>` | no | The identifier of the Webhook. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api webhooks [options]`

- What: Webhook subscriptions in the workspace, with cursor-based pagination. Requires permission to manage the workspace API.
- Call: `query webhooks`, effect: read
- Pages: cursor: send `after` (body), read the next one from `pageInfo.endCursor`; items in `nodes`; `pageInfo.hasNextPage` is false on the last page; page size in `first` (body)
- Body: `WebhooksRequest`

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
