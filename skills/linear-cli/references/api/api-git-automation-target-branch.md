<!-- Generated from the API manifest and the command tree by pnpm generate. Do not edit. -->

# Linear API: git-automation-target-branch

## `linear api git-automation-target-branch-create [options]`

- What: Creates a team’s target-branch pattern for Git automation. Add automation rules that reference the returned definition to choose the status changes. Requires team-management permission and an active, non-retired team.
- Call: `mutation gitAutomationTargetBranchCreate`, effect: write
- Body: `GitAutomationTargetBranchCreateRequest`, required

| Flag | Required | What |
|---|---|---|
| `--input <value>` | no | The Git target branch automation to create. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api git-automation-target-branch-delete [options]`

- What: Deletes a target-branch definition and its associated automation rules. Future matching events use any remaining applicable rules, including team defaults. Requires team-management permission.
- Call: `mutation gitAutomationTargetBranchDelete`, effect: destructive
- Permission keys: `linear.delete`
- Body: `GitAutomationTargetBranchDeleteRequest`, required

| Flag | Required | What |
|---|---|---|
| `--id <value>` | no | The identifier of the target branch definition to delete. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api git-automation-target-branch-update [options]`

- What: Changes the pattern or matching mode used by every automation rule linked to this definition. Omitted fields stay unchanged. Requires team-management permission; definitions in retired teams cannot be updated.
- Call: `mutation gitAutomationTargetBranchUpdate`, effect: write
- Body: `GitAutomationTargetBranchUpdateRequest`, required

| Flag | Required | What |
|---|---|---|
| `--input <value>` | no | The updates. |
| `--id <value>` | no | The identifier of the Git target branch automation to update. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |
