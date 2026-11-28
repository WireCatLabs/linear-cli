<!-- Generated from the API manifest and the command tree by pnpm generate. Do not edit. -->

# Linear API: organization

## `linear api organization`

- What: Returns the workspace associated with the credentials used for this request. Its ID and URL key identify the workspace, and its fields expose shared settings and resources.
- Call: `query organization`, effect: read

## `linear api organization-cancel-delete`

- What: Cancels a scheduled workspace deletion while the deletion process still permits cancellation. Requires workspace-settings permission.
- Call: `mutation organizationCancelDelete`, effect: destructive
- Permission keys: `linear.delete`

## `linear api organization-delete [options]`

- What: Schedules deletion of the workspace and its data after validating the code from organizationDeleteChallenge. This does not finish the deletion during the request. Use organizationCancelDelete while cancellation is still available.
- Call: `mutation organizationDelete`, effect: destructive
- Permission keys: `linear.delete`
- Body: `OrganizationDeleteRequest`, required

| Flag | Required | What |
|---|---|---|
| `--input <value>` | no | Information required to delete the workspace. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api organization-delete-challenge`

- What: Requests a deletion confirmation code for the workspace. The code is sent to the requesting user's email and must be used with the organizationDelete mutation to confirm deletion.
- Call: `mutation organizationDeleteChallenge`, effect: write

## `linear api organization-exists [options]`

- What: Checks whether a workspace with the given URL key exists.
- Call: `query organizationExists`, effect: read
- Body: `OrganizationExistsRequest`, required

| Flag | Required | What |
|---|---|---|
| `--url-key <value>` | no | The URL key of the workspace to check. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api organization-start-trial`

- What: \[DEPRECATED\] Starts a trial for the workspace.
- Call: `mutation organizationStartTrial`, effect: write, deprecated

## `linear api organization-start-trial-for-plan [options]`

- What: Starts a trial for the workspace on the specified plan type. The workspace must not already be on a paid plan or in an active trial.
- Call: `mutation organizationStartTrialForPlan`, effect: write
- Body: `OrganizationStartTrialForPlanRequest`, required

| Flag | Required | What |
|---|---|---|
| `--input <value>` | no | Plan details for trial |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api organization-update [options]`

- What: Updates the workspace associated with your credentials. Omitted fields keep their current values. Most changes require workspace-settings permission; project and initiative reminder schedules require schedule-management permission. Some settings also depend on the workspace’s plan.
- Call: `mutation organizationUpdate`, effect: write
- Body: `OrganizationUpdateRequest`, required

| Flag | Required | What |
|---|---|---|
| `--input <value>` | no | A partial workspace object to update the workspace with. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |
