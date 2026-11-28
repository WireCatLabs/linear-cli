<!-- Generated from the API manifest and the command tree by pnpm generate. Do not edit. -->

# Linear API: customer

## `linear api customer [options]`

- What: Retrieves a single customer by ID or slug.
- Call: `query customer`, effect: read
- Body: `CustomerRequest`, required

| Flag | Required | What |
|---|---|---|
| `--id <value>` | no | The identifier or slug of the customer to retrieve. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api customer-create [options]`

- What: Creates a customer when the Customers feature is available and enabled in the workspace. Business domains and external IDs must not belong to another customer, including archived customers. If no status is supplied, the first customer status by position is used.
- Call: `mutation customerCreate`, effect: write
- Body: `CustomerCreateRequest`, required

| Flag | Required | What |
|---|---|---|
| `--input <value>` | no | The customer to create. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api customer-delete [options]`

- What: Permanently deletes a customer, including an archived customer. Use customerMerge when you want to preserve its requests by transferring them to another customer.
- Call: `mutation customerDelete`, effect: destructive
- Permission keys: `linear.delete`
- Body: `CustomerDeleteRequest`, required

| Flag | Required | What |
|---|---|---|
| `--id <value>` | no | The identifier of the customer to delete. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api customer-merge [options]`

- What: Merges two customers by transferring all needs from the source customer to the target customer. The source customer is archived after the merge. Domains, external IDs, and metadata are combined on the target customer.
- Call: `mutation customerMerge`, effect: write
- Body: `CustomerMergeRequest`, required

| Flag | Required | What |
|---|---|---|
| `--source-customer-id <value>` | no | The ID of the source customer to merge. All needs from this customer will be transferred to the target, and this customer will be archived. |
| `--target-customer-id <value>` | no | The ID of the target customer to merge into. This customer will receive all needs from the source customer and retain its own. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api customer-unsync [options]`

- What: Disconnects a customer from its configured data source integration so the integration no longer updates it. External IDs belonging to that source are cleared. Requires permission to manage workspace customer settings.
- Call: `mutation customerUnsync`, effect: write
- Body: `CustomerUnsyncRequest`, required

| Flag | Required | What |
|---|---|---|
| `--id <value>` | no | The identifier of the customer to unsync. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api customer-update [options]`

- What: Updates the supplied customer fields, leaving omitted fields unchanged. For a customer managed by an integration, only fields that are editable in Linear are applied; managed fields are ignored. The request fails if none of the supplied fields are editable.
- Call: `mutation customerUpdate`, effect: write
- Body: `CustomerUpdateRequest`, required

| Flag | Required | What |
|---|---|---|
| `--input <value>` | no | The properties of the customer to update. |
| `--id <value>` | no | The identifier of the customer to update. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api customer-upsert [options]`

- What: Finds a customer using the supplied UUID, external ID, Slack channel, or domains, and updates it; otherwise creates one. A name is required when no customer matches. Unlike customerUpdate, this operation can override integration-managed fields, and a tierName can create a new customer tier.
- Call: `mutation customerUpsert`, effect: write
- Body: `CustomerUpsertRequest`, required

| Flag | Required | What |
|---|---|---|
| `--input <value>` | no | The customer to create. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api customers [options]`

- What: All customers in the workspace, with optional filtering and sorting.
- Call: `query customers`, effect: read
- Pages: cursor: send `after` (body), read the next one from `pageInfo.endCursor`; items in `nodes`; `pageInfo.hasNextPage` is false on the last page; page size in `first` (body)
- Body: `CustomersRequest`

| Flag | Required | What |
|---|---|---|
| `--filter <value>` | no | Filter returned customers. |
| `--before <value>` | no | Returns results before this cursor. Pair with \`last\` to paginate backward, using a cursor returned by the same connection. Keep the filters and ordering unchanged between pages. Cannot be combined with \`first\` or \`after\`. |
| `--after <value>` | no | Returns results after this cursor. Pair with \`first\` and the previous page's \`endCursor\` to fetch the next page. Keep the filters and ordering unchanged between pages. Cannot be combined with \`last\` or \`before\`. |
| `--first <value>` | no | The maximum number of results to return, starting after \`after\` if supplied. Between 1 and 250. Defaults to 50 when neither \`first\` nor \`last\` is supplied. Cannot be combined with \`last\` or \`before\`. |
| `--last <value>` | no | The maximum number of results to return, ending before \`before\` if supplied. Between 1 and 250. Cannot be combined with \`first\` or \`after\`. |
| `--include-archived <value>` | no | Includes archived resources alongside active ones. Defaults to false, which returns only active resources. This does not include deleted resources. |
| `--order-by <value>` | no | Orders results by creation time or last meaningful update time. Defaults to \`createdAt\`. Results are newest first with \`first\` and oldest first with \`last\`; use the returned \`endCursor\` as \`before\` to continue backward. Cannot be combined with custom \`sort\` options on fields that support them. |
| `--sorts <value>` | no | Sort criteria for the returned customers. Up to 3 sort fields can be specified. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |
| `--all` | no | read every page, as the API pages it |
