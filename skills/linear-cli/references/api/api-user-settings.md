<!-- Generated from the API manifest and the command tree by pnpm generate. Do not edit. -->

# Linear API: user-settings

## `linear api user-settings`

- What: The authenticated user's notification and UI settings.
- Call: `query userSettings`, effect: read

## `linear api user-settings-flags-reset [options]`

- What: Resets one or more of the user's setting flags. If no specific flags are provided, all flags are reset.
- Call: `mutation userSettingsFlagsReset`, effect: write
- Body: `UserSettingsFlagsResetRequest`

| Flag | Required | What |
|---|---|---|
| `--flags <value>` | no | The flags to reset. If not provided all flags will be reset. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api user-settings-update [options]`

- What: Updates the settings record identified by id. You must own that record or have permission to manage workspace entities. General settings and notification category or channel preferences merge with existing values. See notificationDeliveryPreferences for its schedule replacement and mobile-channel effects.
- Call: `mutation userSettingsUpdate`, effect: write
- Body: `UserSettingsUpdateRequest`, required

| Flag | Required | What |
|---|---|---|
| `--input <value>` | no | A partial notification object to update the settings with. |
| `--id <value>` | no | The identifier of the userSettings to update. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |
