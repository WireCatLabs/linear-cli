<!-- Generated from the API manifest and the command tree by pnpm generate. Do not edit. -->

# Linear API: template

## `linear api template [options]`

- What: A template by UUID, including archived templates.
- Call: `query template`, effect: read
- Body: `TemplateRequest`, required

| Flag | Required | What |
|---|---|---|
| `--id <value>` | no | The identifier of the template to retrieve. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api template-create [options]`

- What: Create a template. Requires permission to manage templates in the workspace, team, or release pipeline that owns it.
- Call: `mutation templateCreate`, effect: write
- Body: `TemplateCreateRequest`, required

| Flag | Required | What |
|---|---|---|
| `--input <value>` | no | The template object to create. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api template-delete [options]`

- What: Deletes a template and its inherited copies. Requires permission to manage templates in its scope; inherited copies must be deleted at their source. Resources already created from the template remain.
- Call: `mutation templateDelete`, effect: destructive
- Permission keys: `linear.delete`
- Body: `TemplateDeleteRequest`, required

| Flag | Required | What |
|---|---|---|
| `--id <value>` | no | The identifier of the template to delete. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api template-search [options]`

- What: Finds templates matching a filter, ordered as they appear in Linear. Unlike templates, this excludes archived templates by default and supports a result limit. A null-team filter selects templates without a team, including pipeline-scoped release-note templates.
- Call: `query templateSearch`, effect: read
- Body: `TemplateSearchRequest`

| Flag | Required | What |
|---|---|---|
| `--include-archived <value>` | no | Should archived resources be included (default: false). |
| `--first <value>` | no | Maximum results. Capped at 250. |
| `--filter <value>` | no | Filter to apply to the template results. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api template-update [options]`

- What: Changes a template’s metadata, saved defaults, or team scope. Update an inherited template at its source, and supply the full templateData when replacing its configuration. Changing a template does not rewrite resources already created from it.
- Call: `mutation templateUpdate`, effect: write
- Body: `TemplateUpdateRequest`, required

| Flag | Required | What |
|---|---|---|
| `--input <value>` | no | The properties of the template to update. |
| `--id <value>` | no | The identifier of the template. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api templates`

- What: All accessible workspace and team templates, including archived templates. Use templateSearch for filters and a result limit.
- Call: `query templates`, effect: read

## `linear api templates-for-integration [options]`

- What: Lists templates enabled for the specified integration service. The returned templateData also includes the body as Markdown for integrations that cannot read Linear’s rich-text format. Unsupported service types return an empty list.
- Call: `query templatesForIntegration`, effect: read
- Body: `TemplatesForIntegrationRequest`, required

| Flag | Required | What |
|---|---|---|
| `--integration-type <value>` | no | The type of integration for which to return associated templates. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |
