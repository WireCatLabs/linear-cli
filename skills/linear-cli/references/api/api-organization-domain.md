<!-- Generated from the API manifest and the command tree by pnpm generate. Do not edit. -->

# Linear API: organization-domain

## `linear api organization-domain-delete [options]`

- What: Removes a domain configuration from the workspace and its authentication settings. Requires workspace-settings permission. Other domain configurations for the workspace are unchanged.
- Call: `mutation organizationDomainDelete`, effect: destructive
- Permission keys: `linear.delete`
- Body: `OrganizationDomainDeleteRequest`, required

| Flag | Required | What |
|---|---|---|
| `--id <value>` | no | The identifier of the domain to delete. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |
