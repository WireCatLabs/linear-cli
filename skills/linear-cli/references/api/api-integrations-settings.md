<!-- Generated from the API manifest and the command tree by pnpm generate. Do not edit. -->

# Linear API: integrations-settings

## `linear api integrations-settings [options]`

- What: Retrieves a specific integration settings configuration by its identifier.
- Call: `query integrationsSettings`, effect: read
- Body: `IntegrationsSettingsRequest`, required

| Flag | Required | What |
|---|---|---|
| `--id <value>` | no | The identifier of the integration settings to retrieve. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api integrations-settings-create [options]`

- What: Creates notification preferences for a destination you can access, with edit permission required for custom views. Supply exactly one team, project, initiative, or view. Settings must not already exist for that destination and, for team settings, context view; use integrationsSettingsUpdate when they do. An app writing initiative preferences also needs initiative:write scope.
- Call: `mutation integrationsSettingsCreate`, effect: write
- Body: `IntegrationsSettingsCreateRequest`, required

| Flag | Required | What |
|---|---|---|
| `--input <value>` | no | The settings to create. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api integrations-settings-update [options]`

- What: Updates the event preferences on an existing integration settings record. Only supplied booleans change, and the destination stays the same. Custom-view settings require permission to edit the view; apps changing initiative settings need initiative:write scope. For older settings that combined update and comment notifications, the first edit preserves the previous comment preference independently.
- Call: `mutation integrationsSettingsUpdate`, effect: write
- Body: `IntegrationsSettingsUpdateRequest`, required

| Flag | Required | What |
|---|---|---|
| `--input <value>` | no | A settings object to update the settings with. |
| `--id <value>` | no | The identifier of the settings to update. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |
