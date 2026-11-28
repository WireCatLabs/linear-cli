<!-- Generated from the API manifest and the command tree by pnpm generate. Do not edit. -->

# Linear API: issue-import

## `linear api issue-import-check-csv [options]`

- What: Validate a Jira CSV uploaded to the workspace. Invalid files return an error.
- Call: `query issueImportCheckCSV`, effect: read
- Body: `IssueImportCheckCSVRequest`, required

| Flag | Required | What |
|---|---|---|
| `--csv-url <value>` | no | Asset URL of a CSV uploaded to this workspace’s import storage. |
| `--service <value>` | no | CSV source service. Only jira is supported. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api issue-import-check-sync [options]`

- What: Checks whether a GitHub or Jira import can continue syncing with its source after import. A false result includes an explanation when available; other services return canSync: false. This check does not enable sync.
- Call: `query issueImportCheckSync`, effect: read
- Body: `IssueImportCheckSyncRequest`, required

| Flag | Required | What |
|---|---|---|
| `--issue-import-id <value>` | no | The ID of the issue import for which to check sync eligibility |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api issue-import-create-asana [options]`

- What: Starts fetching Asana tasks into an asynchronous import job. Choose an existing destination team or a new team name. Configure the fetched data and call issueImportProcess to create Linear records.
- Call: `mutation issueImportCreateAsana`, effect: write
- Body: `IssueImportCreateAsanaRequest`, required

| Flag | Required | What |
|---|---|---|
| `--team-id <value>` | no | UUID of an existing destination team. Provide either teamId or teamName. |
| `--team-name <value>` | no | Name of a new destination team. Provide either teamId or teamName. |
| `--asana-token <value>` | no | Asana token to fetch information from the Asana API. |
| `--asana-team-name <value>` | no | Name of the source Asana team. |
| `--asana-project-names <value>` | no | Names of Asana projects in the team. When set, only tasks from these projects are imported. When empty, all projects are imported. |
| `--instant-process <value>` | no | Start creating Linear records after fetching source data, using default mappings. Defaults to false, allowing mappings to be reviewed first. |
| `--include-closed-issues <value>` | no | Include completed Asana tasks when fetching source data. |
| `--id <value>` | no | ID of issue import. If not provided it will be generated. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api issue-import-create-clubhouse [options]`

- What: Starts fetching stories from Shortcut, whose legacy API name is clubhouse, into an asynchronous import job. Choose an existing destination team or a new team name. Configure the fetched data and call issueImportProcess to create Linear records.
- Call: `mutation issueImportCreateClubhouse`, effect: write
- Body: `IssueImportCreateClubhouseRequest`, required

| Flag | Required | What |
|---|---|---|
| `--team-id <value>` | no | UUID of an existing destination team. Provide either teamId or teamName. |
| `--team-name <value>` | no | Name of a new destination team. Provide either teamId or teamName. |
| `--clubhouse-token <value>` | no | Shortcut (formerly Clubhouse) token to fetch information from the Clubhouse API. |
| `--clubhouse-group-name <value>` | no | Name of the source Shortcut group. |
| `--instant-process <value>` | no | Start creating Linear records after fetching source data, using default mappings. Defaults to false, allowing mappings to be reviewed first. |
| `--include-closed-issues <value>` | no | Include completed Shortcut stories when fetching source data. |
| `--id <value>` | no | ID of issue import. If not provided it will be generated. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api issue-import-create-csvjira [options]`

- What: Creates an asynchronous import from a Jira CSV already uploaded to the workspace’s import storage. Choose an existing destination team or a new team name. The response accepts the job; it does not mean the imported records are ready.
- Call: `mutation issueImportCreateCSVJira`, effect: write
- Body: `IssueImportCreateCSVJiraRequest`, required

| Flag | Required | What |
|---|---|---|
| `--team-id <value>` | no | UUID of an existing destination team. To create a team, omit this and provide teamName. |
| `--team-name <value>` | no | Name of a new destination team. Cannot be combined with teamId. |
| `--csv-url <value>` | no | Asset URL of a Jira CSV uploaded to this workspace’s import storage. |
| `--jira-hostname <value>` | no | Jira installation or cloud hostname. |
| `--jira-token <value>` | no | Jira personal access token to access Jira REST API. |
| `--jira-email <value>` | no | Jira user account email. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api issue-import-create-github [options]`

- What: Starts fetching GitHub issues into an asynchronous import job. Choose an existing destination team or provide a name for a new one, and repositories the workspace can import from. After fetching and configuration, use issueImportProcess to create the Linear records. Requires workspace import permission.
- Call: `mutation issueImportCreateGithub`, effect: write
- Body: `IssueImportCreateGithubRequest`

| Flag | Required | What |
|---|---|---|
| `--team-id <value>` | no | UUID of an existing destination team. Provide either teamId or teamName. |
| `--team-name <value>` | no | Name of a new destination team. Provide either teamId or teamName. |
| `--github-repo-ids <value>` | no | Numeric GitHub repository IDs to import. The workspace must have import access to these repositories. |
| `--github-labels <value>` | no | GitHub label names to use when filtering the imported issues. Omit or send an empty list to import without a label filter. |
| `--instant-process <value>` | no | Start creating Linear records after fetching source data, using default mappings. Defaults to false, allowing mappings to be reviewed first. |
| `--include-closed-issues <value>` | no | Include closed GitHub issues when fetching source data. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api issue-import-create-jira [options]`

- What: Starts fetching Jira issues into an asynchronous import job. Choose an existing destination team or a new team name and the source Jira project. After fetching and configuration, use issueImportProcess to create the Linear records. Requires workspace import permission.
- Call: `mutation issueImportCreateJira`, effect: write
- Body: `IssueImportCreateJiraRequest`, required

| Flag | Required | What |
|---|---|---|
| `--team-id <value>` | no | UUID of an existing destination team. Provide either teamId or teamName. |
| `--team-name <value>` | no | Name of a new destination team. Provide either teamId or teamName. |
| `--jira-token <value>` | no | Jira personal access token to access Jira REST API. |
| `--jira-project <value>` | no | Jira project key from which we will import data. |
| `--jira-email <value>` | no | Jira user account email. |
| `--jira-hostname <value>` | no | Jira installation or cloud hostname. |
| `--jql <value>` | no | Additional JQL conditions within jiraProject. The project restriction is always applied. |
| `--instant-process <value>` | no | Start creating Linear records after fetching source data, using default mappings. Defaults to false, allowing mappings to be reviewed first. |
| `--include-closed-issues <value>` | no | Include closed Jira issues when fetching source data. |
| `--id <value>` | no | ID of issue import. If not provided it will be generated. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api issue-import-delete [options]`

- What: Schedules deletion of an import and the data it created, then returns the job with status deleting. This is available within 14 days for eligible imports awaiting configuration, completed imports, or failed imports. You must be the creator or an admin with the destination team’s deletion permission, and another import from the same service must not be processing.
- Call: `mutation issueImportDelete`, effect: destructive
- Permission keys: `linear.delete`
- Body: `IssueImportDeleteRequest`, required

| Flag | Required | What |
|---|---|---|
| `--issue-import-id <value>` | no | ID of the issue import to delete. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api issue-import-jql-check [options]`

- What: Validate JQL within the specified Jira project and return an approximate match count.
- Call: `query issueImportJqlCheck`, effect: read
- Body: `IssueImportJqlCheckRequest`, required

| Flag | Required | What |
|---|---|---|
| `--jira-hostname <value>` | no | Jira installation or cloud hostname. |
| `--jira-token <value>` | no | Jira personal access token to access Jira REST API. |
| `--jira-email <value>` | no | Jira user account email. |
| `--jira-project <value>` | no | Jira project key to use as the base filter of the query. |
| `--jql <value>` | no | The JQL query to validate. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api issue-import-process [options]`

- What: Saves the supplied mappings and schedules creation of Linear records from the fetched source data. The import must be inProgress; otherwise the mappings are saved but success is false. A successful response means processing was accepted, not that it has finished. Linear-to-Linear migrations can only be managed from the Linear app.
- Call: `mutation issueImportProcess`, effect: write
- Body: `IssueImportProcessRequest`, required

| Flag | Required | What |
|---|---|---|
| `--mapping <value>` | no | The mapping configuration to use for processing the import. |
| `--issue-import-id <value>` | no | ID of the issue import which we're going to process. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api issue-import-update [options]`

- What: Saves mapping choices without starting the import. For external-service imports, supply the full replacement mapping. Requires workspace import permission; Linear-to-Linear migrations can only be managed from the Linear app.
- Call: `mutation issueImportUpdate`, effect: write
- Body: `IssueImportUpdateRequest`, required

| Flag | Required | What |
|---|---|---|
| `--input <value>` | no | The properties of the issue import to update. |
| `--id <value>` | no | The identifier of the issue import. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |
