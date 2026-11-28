<!-- Generated from the API manifest and the command tree by pnpm generate. Do not edit. -->

# Linear API: reaction

## `linear api reaction-create [options]`

- What: Adds an emoji reaction as you to one issue, comment, or update. If you already used that emoji on the same resource, the existing reaction is returned. You must be allowed to comment on the target.
- Call: `mutation reactionCreate`, effect: write
- Body: `ReactionCreateRequest`, required

| Flag | Required | What |
|---|---|---|
| `--input <value>` | no | The reaction object to create. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api reaction-delete [options]`

- What: Removes a reaction by its UUID and updates the target’s reaction summary. You must be its creator or have workspace permission to manage entities, and you must be allowed to comment on the target.
- Call: `mutation reactionDelete`, effect: destructive
- Permission keys: `linear.delete`
- Body: `ReactionDeleteRequest`, required

| Flag | Required | What |
|---|---|---|
| `--id <value>` | no | The identifier of the reaction to delete. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |
