<!-- Generated from the API manifest and the command tree by pnpm generate. Do not edit. -->

# Linear API: view-preferences

## `linear api view-preferences-create [options]`

- What: Saves display settings for a view and scope. Existing records that conflict with the supplied type, view type, and scope are deleted and replaced, so supply the settings you want to retain. Personal preferences are owned by the current user.
- Call: `mutation viewPreferencesCreate`, effect: write
- Body: `ViewPreferencesCreateRequest`, required

| Flag | Required | What |
|---|---|---|
| `--input <value>` | no | The ViewPreferences object to create. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api view-preferences-delete [options]`

- What: Deletes a saved preferences record, allowing the view to use its fallback defaults. You can delete only your own user-type preferences. If the record is already absent, the mutation still succeeds.
- Call: `mutation viewPreferencesDelete`, effect: destructive
- Permission keys: `linear.delete`
- Body: `ViewPreferencesDeleteRequest`, required

| Flag | Required | What |
|---|---|---|
| `--id <value>` | no | The identifier of the ViewPreferences to delete. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api view-preferences-update [options]`

- What: Replaces the supplied settings objects on a saved preferences record. You can update only your own user-type preferences; changing workspace defaults for a custom view also requires permission to edit that view.
- Call: `mutation viewPreferencesUpdate`, effect: write
- Body: `ViewPreferencesUpdateRequest`, required

| Flag | Required | What |
|---|---|---|
| `--input <value>` | no | The properties of the view preferences. |
| `--id <value>` | no | The identifier of the ViewPreferences object. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |
