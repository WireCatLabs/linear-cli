<!-- Generated from the API manifest and the command tree by pnpm generate. Do not edit. -->

# Linear API: email-intake-address

## `linear api email-intake-address [options]`

- What: An accessible intake address by ID, including archived addresses.
- Call: `query emailIntakeAddress`, effect: read
- Body: `EmailIntakeAddressRequest`, required

| Flag | Required | What |
|---|---|---|
| `--id <value>` | no | The UUID of the intake address. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api email-intake-address-create [options]`

- What: Creates an address that accepts email for one team or issue template. For team and template types, an existing active address for that destination is returned instead of creating another. Use the returned emailAddress as the forwarding destination in your mail provider. Asks creation requires the appropriate plan and integration management permission; team and template addresses require permission to manage their destination. Form templates cannot be used for template intake.
- Call: `mutation emailIntakeAddressCreate`, effect: write
- Body: `EmailIntakeAddressCreateRequest`, required

| Flag | Required | What |
|---|---|---|
| `--input <value>` | no | The email intake address object to create. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api email-intake-address-delete [options]`

- What: Deletes an email intake address object.
- Call: `mutation emailIntakeAddressDelete`, effect: destructive
- Permission keys: `linear.delete`
- Body: `EmailIntakeAddressDeleteRequest`, required

| Flag | Required | What |
|---|---|---|
| `--id <value>` | no | The identifier of the email intake address to delete. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api email-intake-address-refresh-ses-domain-status [options]`

- What: Requests a check of the intake address’s custom sending domain after you update its DNS records. The check runs asynchronously: success means a check was requested, not that the domain passed verification. Query sesDomainIdentity.canSendFromCustomDomain and dnsRecords for the result. Returns success=false when no custom domain is configured or the domain is already fully verified.
- Call: `mutation emailIntakeAddressRefreshSesDomainStatus`, effect: write
- Body: `EmailIntakeAddressRefreshSesDomainStatusRequest`, required

| Flag | Required | What |
|---|---|---|
| `--id <value>` | no | The identifier of the email intake address to refresh the domain status for. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api email-intake-address-rotate [options]`

- What: Generates a new email address for an existing team or template intake configuration. The old address no longer routes incoming mail, so update any forwarding rules or places where you published it. The intake record and its settings are retained. Asks and Asks web addresses do not support rotation through this mutation.
- Call: `mutation emailIntakeAddressRotate`, effect: write
- Body: `EmailIntakeAddressRotateRequest`, required

| Flag | Required | What |
|---|---|---|
| `--id <value>` | no | The identifier of the email intake address. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api email-intake-address-update [options]`

- What: Updates an existing email intake address.
- Call: `mutation emailIntakeAddressUpdate`, effect: write
- Body: `EmailIntakeAddressUpdateRequest`, required

| Flag | Required | What |
|---|---|---|
| `--input <value>` | no | The properties of the email intake address to update. |
| `--id <value>` | no | The identifier of the email intake address. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api email-intake-addresses [options]`

- What: Email intake addresses accessible to the user in the workspace.
- Call: `query emailIntakeAddresses`, effect: read
- Pages: cursor: send `after` (body), read the next one from `pageInfo.endCursor`; items in `nodes`; `pageInfo.hasNextPage` is false on the last page; page size in `first` (body)
- Body: `EmailIntakeAddressesRequest`

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
