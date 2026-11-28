<!-- Generated from the API manifest and the command tree by pnpm generate. Do not edit. -->

# Linear API: git-automation-state

## `linear api git-automation-state-create [options]`

- What: Creates a rule that maps a Git event to an issue status for a team. Requires permission to manage that team. Rules cannot be created for retired teams.
- Call: `mutation gitAutomationStateCreate`, effect: write
- Body: `GitAutomationStateCreateRequest`, required

| Flag | Required | What |
|---|---|---|
| `--input <value>` | no | The automation state to create. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api git-automation-state-delete [options]`

- What: Permanently deletes a Git automation rule. Requires permission to manage its team. Removing a branch-specific rule allows the team’s default for that event to apply again.
- Call: `mutation gitAutomationStateDelete`, effect: destructive
- Permission keys: `linear.delete`
- Body: `GitAutomationStateDeleteRequest`, required

| Flag | Required | What |
|---|---|---|
| `--id <value>` | no | The identifier of the automation state to delete. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api git-automation-state-update [options]`

- What: Updates the status, branch scope, or event of an existing rule. Requires permission to manage its team, and the team must not be retired. Omitted fields keep their values.
- Call: `mutation gitAutomationStateUpdate`, effect: write
- Body: `GitAutomationStateUpdateRequest`, required

| Flag | Required | What |
|---|---|---|
| `--input <value>` | no | The state to update. |
| `--id <value>` | no | The identifier of the state to update. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |
