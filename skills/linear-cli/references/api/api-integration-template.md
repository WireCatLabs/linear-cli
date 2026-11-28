<!-- Generated from the API manifest and the command tree by pnpm generate. Do not edit. -->

# Linear API: integration-template

## `linear api integration-template [options]`

- What: Retrieves a single integration template connection by its identifier.
- Call: `query integrationTemplate`, effect: read
- Body: `IntegrationTemplateRequest`, required

| Flag | Required | What |
|---|---|---|
| `--id <value>` | no | The identifier of the integration template to retrieve. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api integration-template-create [options]`

- What: Makes an issue template available through Slack Asks, Slack, Intercom, Zendesk, or Salesforce. Slack Asks requires permission to manage Asks, a connected intake destination, and a team template; linking the template enables triage for that team. Other supported integrations require integration-management permission and accept up to ten templates. Private-team templates are supported only by Slack Asks.
- Call: `mutation integrationTemplateCreate`, effect: write
- Body: `IntegrationTemplateCreateRequest`, required

| Flag | Required | What |
|---|---|---|
| `--input <value>` | no | The template, integration, and optional external resource to link. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api integration-template-delete [options]`

- What: Removes a template's link to an integration or intake destination. The template itself and the integration remain available. Requires permission to manage the Asks integration for Slack Asks, or integration-management permission for other services.
- Call: `mutation integrationTemplateDelete`, effect: destructive
- Permission keys: `linear.delete`
- Body: `IntegrationTemplateDeleteRequest`, required

| Flag | Required | What |
|---|---|---|
| `--id <value>` | no | The identifier of the template-integration link to delete. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api integration-templates [options]`

- What: All integration template connections for the workspace, linking templates to integrations.
- Call: `query integrationTemplates`, effect: read
- Pages: cursor: send `after` (body), read the next one from `pageInfo.endCursor`; items in `nodes`; `pageInfo.hasNextPage` is false on the last page; page size in `first` (body)
- Body: `IntegrationTemplatesRequest`

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
