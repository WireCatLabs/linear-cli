<!-- Generated from the API manifest and the command tree by pnpm generate. Do not edit. -->

# Linear API: sla-configuration

## `linear api sla-configurations [options]`

- What: Lists enabled SLA rules from the workspace, the requested team, and its ancestor teams, in rule order. Only rules whose team and status filters could match the team are returned. Other issue conditions still need to be evaluated, so this list does not determine the SLA for a particular issue. Requires access to the requested team's settings.
- Call: `query slaConfigurations`, effect: read
- Body: `SlaConfigurationsRequest`, required

| Flag | Required | What |
|---|---|---|
| `--team-id <value>` | no | The identifier or key of the team to evaluate SLA rules against. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |
