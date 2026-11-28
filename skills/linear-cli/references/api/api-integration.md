<!-- Generated from the API manifest and the command tree by pnpm generate. Do not edit. -->

# Linear API: integration

## `linear api airbyte-integration-connect [options]`

- What: Registers an export key for Airbyte. Requires integration-creation and export permissions and a plan with data export. The key can read private-team data.
- Call: `mutation airbyteIntegrationConnect`, effect: write
- Body: `AirbyteIntegrationConnectRequest`, required

| Flag | Required | What |
|---|---|---|
| `--input <value>` | no | Airbyte integration settings. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api archived-integrations`

- What: GitHub connections archived within the last 30 days, newest first. Connections dismissed from the reconnect list are omitted.
- Call: `query archivedIntegrations`, effect: read

## `linear api integration [options]`

- What: Retrieves an integration by UUID, including archived integrations.
- Call: `query integration`, effect: read
- Body: `IntegrationRequest`, required

| Flag | Required | What |
|---|---|---|
| `--id <value>` | no | The identifier of the integration to retrieve. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api integration-archive [options]`

- What: Disconnects an integration that supports archiving while retaining its record for a later reconnect. You can archive your own personal connection; workspace connections generally require integration-creation permission. GitHub installation removal and Jira webhook cleanup run in the background, so a successful response can precede the completed disconnection. Services that do not support archiving must use integrationDelete instead.
- Call: `mutation integrationArchive`, effect: destructive
- Permission keys: `linear.delete`
- Body: `IntegrationArchiveRequest`, required

| Flag | Required | What |
|---|---|---|
| `--id <value>` | no | The identifier of the integration to archive. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api integration-asks-connect-channel [options]`

- What: Connects the public or private Slack channel selected during OAuth to an existing Asks integration. The channel must be in that integration's Slack workspace and must not already be connected. Individual channel connections require full Asks access and permission to manage Asks settings. Check addBot after success and invite the bot manually when true. Direct messages work with Asks without this setup.
- Call: `mutation integrationAsksConnectChannel`, effect: write
- Body: `IntegrationAsksConnectChannelRequest`, required

| Flag | Required | What |
|---|---|---|
| `--redirect-uri <value>` | no | The Slack OAuth redirect URI. |
| `--code <value>` | no | The Slack OAuth code. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api integration-delete [options]`

- What: Disconnects an integration that supports deletion and removes its connection record. You can remove your own personal connection; workspace connections require integration-creation permission, and team, project, or view connections follow the permissions for that resource. Some services finish external cleanup in the background, so success does not guarantee that cleanup has finished. Services that retain a record for reconnecting must use integrationArchive instead.
- Call: `mutation integrationDelete`, effect: destructive
- Permission keys: `linear.delete`
- Body: `IntegrationDeleteRequest`, required

| Flag | Required | What |
|---|---|---|
| `--skip-installation-deletion <value>` | no | Whether to skip deleting the installation on the external service side. |
| `--id <value>` | no | The identifier of the integration to delete. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api integration-discord [options]`

- What: Connects a Discord server using the OAuth code and redirect URI from its authorization flow, and links the authorizing Discord user to your Linear account. A Linear workspace can have one Discord connection, and the Discord server cannot already belong to another Linear workspace's connection.
- Call: `mutation integrationDiscord`, effect: write
- Body: `IntegrationDiscordRequest`, required

| Flag | Required | What |
|---|---|---|
| `--redirect-uri <value>` | no | The Discord OAuth redirect URI. |
| `--code <value>` | no | The Discord OAuth code. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api integration-figma [options]`

- What: Connects Figma using an OAuth authorization code and its redirect URI, storing the credentials needed for the workspace integration. The workspace cannot already have an active Figma connection.
- Call: `mutation integrationFigma`, effect: write
- Body: `IntegrationFigmaRequest`, required

| Flag | Required | What |
|---|---|---|
| `--redirect-uri <value>` | no | The Figma OAuth redirect URI. |
| `--code <value>` | no | The Figma OAuth code. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api integration-front [options]`

- What: Connects Front using an OAuth grant. Requires the workspace's support integration plan feature and no existing Front connection. New connections initially reopen linked Front conversations when a Linear issue is completed or canceled; comments do not trigger reopening by default.
- Call: `mutation integrationFront`, effect: write
- Body: `IntegrationFrontRequest`, required

| Flag | Required | What |
|---|---|---|
| `--redirect-uri <value>` | no | The Front OAuth redirect URI. |
| `--code <value>` | no | The Front OAuth code. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api integration-git-hub-enterprise-server-connect [options]`

- What: Starts a GitHub Enterprise Server connection for a GitHub organization or personal account. Open setupUrl to register the app, configure it with webhookSecret, then use installUrl to install it. Call verifyGitHubEnterpriseServerInstallation to check that the app has connected. Success here means the setup record was saved, not that installation is complete. An archived connection for the same organization is reused.
- Call: `mutation integrationGitHubEnterpriseServerConnect`, effect: write
- Body: `IntegrationGitHubEnterpriseServerConnectRequest`, required

| Flag | Required | What |
|---|---|---|
| `--organization-name <value>` | no | GitHub organization login name. Use an empty string to create the app for a personal account. |
| `--github-url <value>` | no | The base URL of the GitHub Enterprise Server installation. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api integration-git-hub-personal [options]`

- What: Links your GitHub account using an OAuth code from Linear's GitHub App authorization flow. codeAccess selects the app with repository code access and defaults to false. This is a personal account connection; connecting a workspace's GitHub App installation uses integrationGithubConnect.
- Call: `mutation integrationGitHubPersonal`, effect: write
- Body: `IntegrationGitHubPersonalRequest`, required

| Flag | Required | What |
|---|---|---|
| `--enterprise-url <value>` | no | The enterprise URL for GitHub Enterprise Cloud connections. Omit for github.com. |
| `--code-access <value>` | no | Whether to connect with code access. |
| `--code <value>` | no | The GitHub OAuth code. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api integration-github-commit-create`

- What: Creates the workspace's GitHub commit integration and returns its webhook secret. Use the secret when configuring the webhook in GitHub; creating this record alone does not configure GitHub to send events.
- Call: `mutation integrationGithubCommitCreate`, effect: write

## `linear api integration-github-connect [options]`

- What: Connects a GitHub App installation to the workspace using its installation ID and OAuth grant. If replacing a connection would make repositories used by GitHub Issues sync inaccessible, the call stops and returns gitHub.lostRepositoryNames. Review that list, then repeat with confirmReplace set to true to accept the change. GitHub Enterprise Cloud connections require the corresponding workspace plan feature.
- Call: `mutation integrationGithubConnect`, effect: write
- Body: `IntegrationGithubConnectRequest`, required

| Flag | Required | What |
|---|---|---|
| `--confirm-replace <value>` | no | Confirm replacing an existing installation after a prior call reported lostRepositoryNames. Defaults to false. |
| `--github-host <value>` | no | GitHub Enterprise Cloud hostname, such as acme.ghe.com, without a URL scheme or path. Omit for github.com. |
| `--code-access <value>` | no | Whether to connect the GitHub App with repository code access. Defaults to false. |
| `--code <value>` | no | The GitHub grant code that's exchanged for OAuth tokens. |
| `--installation-id <value>` | no | GitHub App installation ID as a positive integer string. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api integration-github-import-connect [options]`

- What: Connects the GitHub Import App installation authorized by the supplied OAuth code. This creates the connection used to discover repositories for import; it does not import issues by itself.
- Call: `mutation integrationGithubImportConnect`, effect: write
- Body: `IntegrationGithubImportConnectRequest`, required

| Flag | Required | What |
|---|---|---|
| `--code <value>` | no | The GitHub grant code that's exchanged for OAuth tokens. |
| `--installation-id <value>` | no | GitHub App installation ID as a positive integer string. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api integration-github-import-refresh [options]`

- What: Queues a refresh of repositories and labels available to a GitHub import integration. Success confirms scheduling.
- Call: `mutation integrationGithubImportRefresh`, effect: write
- Body: `IntegrationGithubImportRefreshRequest`, required

| Flag | Required | What |
|---|---|---|
| `--id <value>` | no | The id of the integration to update. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api integration-github-remove-code-access [options]`

- What: Removes repository code access from a GitHub connection. Check action in the response: Done means the change is complete, while InstallBasicApp means you need to finish installing the basic GitHub App before setup is complete.
- Call: `mutation integrationGithubRemoveCodeAccess`, effect: write
- Body: `IntegrationGithubRemoveCodeAccessRequest`, required

| Flag | Required | What |
|---|---|---|
| `--integration-id <value>` | no | The ID of the integration to remove code access from. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api integration-gitlab-connect [options]`

- What: Connects a GitLab instance after checking its access token. Configure the GitLab webhook with the returned webhookSecret after a successful response. Only one GitLab connection is allowed per workspace. Token or connectivity failures return success=false and diagnostic error fields instead of creating a connection.
- Call: `mutation integrationGitlabConnect`, effect: write
- Body: `IntegrationGitlabConnectRequest`, required

| Flag | Required | What |
|---|---|---|
| `--access-token <value>` | no | GitLab access token for the instance being connected. Linear validates it before saving the connection and uses its reported scopes and expiry when available. |
| `--gitlab-url <value>` | no | Base URL of the GitLab instance, including its URL scheme. Linear uses this host for token validation and subsequent API requests. |
| `--validation-project-path <value>` | no | Optional path or numeric ID of a project to use for the setup health check. Set this when the GitLab tenant blocks non-project API endpoints. |
| `--readonly <value>` | no | Whether the access token is limited to a read-only scope. Used as a fallback when \`validationProjectPath\` is set and \`personal\_access\_tokens/self\` is unreachable. |
| `--expires-at <value>` | no | ISO timestamp when the access token expires. Used as a fallback when \`validationProjectPath\` is set and \`personal\_access\_tokens/self\` is unreachable. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api integration-gitlab-rotate [options]`

- What: Rotates the GitLab token, revoking the previous token and saving its replacement.
- Call: `mutation integrationGitlabRotate`, effect: write
- Body: `IntegrationGitlabRotateRequest`, required

| Flag | Required | What |
|---|---|---|
| `--integration-id <value>` | no | UUID of the GitLab integration. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api integration-gitlab-test-connection [options]`

- What: Tests the stored access token against a self-hosted GitLab instance, using the validation project when one is configured. A successful check clears the connection's authentication and transient failure state. On failure, inspect success and the error fields for provider or proxy diagnostics. This mutation does not support the GitLab.com OAuth connection.
- Call: `mutation integrationGitlabTestConnection`, effect: write
- Body: `IntegrationGitlabTestConnectionRequest`, required

| Flag | Required | What |
|---|---|---|
| `--integration-id <value>` | no | The ID of the GitLab integration to test. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api integration-gitlab-update-rotation-settings [options]`

- What: Enables or disables automatic self-rotation of the GitLab token.
- Call: `mutation integrationGitlabUpdateRotationSettings`, effect: write
- Body: `IntegrationGitlabUpdateRotationSettingsRequest`, required

| Flag | Required | What |
|---|---|---|
| `--enabled <value>` | no | Whether Linear should automatically rotate the GitLab token. |
| `--integration-id <value>` | no | UUID of the GitLab integration. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api integration-gitlab-update-token [options]`

- What: Replaces a GitLab integration's access token after validating the replacement against its existing host and validation project. The connection and webhook stay in place. Supply readonly and expiresAt when the instance cannot report that token information.
- Call: `mutation integrationGitlabUpdateToken`, effect: write
- Body: `IntegrationGitlabUpdateTokenRequest`, required

| Flag | Required | What |
|---|---|---|
| `--expires-at <value>` | no | The time at which the replacement token expires. Used when GitLab cannot return its expiry. |
| `--readonly <value>` | no | Whether the replacement token has read-only access. Required when GitLab cannot return its scopes. |
| `--access-token <value>` | no | Replacement GitLab access token. Validated before it replaces the current token. |
| `--integration-id <value>` | no | UUID of the GitLab integration. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api integration-gong [options]`

- What: Connects Gong using an OAuth authorization code and its redirect URI. Requires the workspace's Gong integration plan feature and integration-creation permission. The workspace cannot already have an active Gong connection.
- Call: `mutation integrationGong`, effect: write
- Body: `IntegrationGongRequest`, required

| Flag | Required | What |
|---|---|---|
| `--redirect-uri <value>` | no | The Gong OAuth redirect URI. |
| `--code <value>` | no | The Gong OAuth code. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api integration-google-sheets [options]`

- What: Connects Google Sheets using an OAuth grant that includes both access and refresh tokens. The workspace can have one active Google Sheets connection. This call saves the connection; use refreshGoogleSheetsData to request an export refresh.
- Call: `mutation integrationGoogleSheets`, effect: write
- Body: `IntegrationGoogleSheetsRequest`, required

| Flag | Required | What |
|---|---|---|
| `--code <value>` | no | The Google OAuth code. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api integration-has-scopes [options]`

- What: Checks whether an active integration has every requested OAuth scope recorded on its connection. Use missingScopes to decide whether to request another authorization grant. This does not contact the provider or verify that the current token still works.
- Call: `query integrationHasScopes`, effect: read
- Body: `IntegrationHasScopesRequest`, required

| Flag | Required | What |
|---|---|---|
| `--scopes <value>` | no | Required scopes. |
| `--integration-id <value>` | no | The integration ID. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api integration-intercom [options]`

- What: Connects an Intercom workspace using an OAuth code and the redirect URI used during authorization. The workspace needs access to the support integration plan feature. Reconnecting the same Intercom workspace refreshes credentials and keeps its settings; disconnect first to switch to a different Intercom workspace. An Intercom workspace cannot be connected to another Linear workspace at the same time.
- Call: `mutation integrationIntercom`, effect: write
- Body: `IntegrationIntercomRequest`, required

| Flag | Required | What |
|---|---|---|
| `--domain-url <value>` | no | The Intercom domain URL to use for the integration. Defaults to app.intercom.com if not provided. |
| `--redirect-uri <value>` | no | The Intercom OAuth redirect URI. |
| `--code <value>` | no | The Intercom OAuth code. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api integration-intercom-delete`

- What: Uninstalls the Intercom connection and removes its Linear record. It also completes local cleanup when access was already revoked in Intercom. Calling this after the Linear connection has been removed returns an error.
- Call: `mutation integrationIntercomDelete`, effect: destructive
- Permission keys: `linear.delete`

## `linear api integration-intercom-settings-update [options]`

- What: \[DEPRECATED\] Updates settings on the Intercom integration.
- Call: `mutation integrationIntercomSettingsUpdate`, effect: write, deprecated
- Body: `IntegrationIntercomSettingsUpdateRequest`, required

| Flag | Required | What |
|---|---|---|
| `--input <value>` | no | A partial Intercom integration settings object to update the integration settings with. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api integration-jira-personal [options]`

- What: Links your Jira account to an existing workspace Jira integration. Supply either the OAuth authorization code for Jira Cloud or a personal access token for Jira Server. When the workspace has more than one possible Jira connection, supply workspaceIntegrationId to choose which one to link.
- Call: `mutation integrationJiraPersonal`, effect: write
- Body: `IntegrationJiraPersonalRequest`

| Flag | Required | What |
|---|---|---|
| `--workspace-integration-id <value>` | no | The workspace Jira integration to connect to. Required when the connection would otherwise be ambiguous. |
| `--code <value>` | no | The Jira OAuth code, when connecting using OAuth. |
| `--access-token <value>` | no | The Jira personal access token, when connecting using a PAT. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api integration-loom`

- What: Enables Loom integration for the workspace.
- Call: `mutation integrationLoom`, effect: write, deprecated

## `linear api integration-microsoft-personal-connect [options]`

- What: Links your Microsoft account to Linear. Its tenant must already be connected through a workspace Microsoft Teams integration. Reconnecting the same account refreshes credentials when the existing personal connection has an authentication error; otherwise, disconnect the existing personal connection before linking another account.
- Call: `mutation integrationMicrosoftPersonalConnect`, effect: write
- Body: `IntegrationMicrosoftPersonalConnectRequest`, required

| Flag | Required | What |
|---|---|---|
| `--redirect-uri <value>` | no | The Microsoft OAuth redirect URI. |
| `--code <value>` | no | The Microsoft OAuth code. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api integration-microsoft-teams [options]`

- What: Connects the Microsoft tenant identified by the OAuth grant to this Linear workspace. An archived connection to the same tenant is restored. Multiple tenants require the corresponding plan feature, and a tenant cannot be actively connected to another Linear workspace. Personal Microsoft accounts are linked separately with integrationMicrosoftPersonalConnect.
- Call: `mutation integrationMicrosoftTeams`, effect: write
- Body: `IntegrationMicrosoftTeamsRequest`, required

| Flag | Required | What |
|---|---|---|
| `--redirect-uri <value>` | no | The Microsoft OAuth redirect URI. |
| `--code <value>` | no | The Microsoft OAuth code. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api integration-request [options]`

- What: Records interest in an integration that is not currently available. No authentication is required, and this does not create an integration or start an installation. Success means the request was accepted for analytics; it does not promise that the integration will be built.
- Call: `mutation integrationRequest`, effect: write
- Body: `IntegrationRequestRequest`, required

| Flag | Required | What |
|---|---|---|
| `--input <value>` | no | Integration request details. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api integration-salesforce [options]`

- What: Connects Salesforce using an OAuth grant and verifies that the authorizing user can access the Linear managed package, including its required license. Requires the workspace's enterprise integration plan feature. Reconnecting an active connection to the same subdomain refreshes credentials while keeping settings and templates; restoring an archived connection runs setup again. Disconnect first to switch to a different Salesforce subdomain.
- Call: `mutation integrationSalesforce`, effect: write
- Body: `IntegrationSalesforceRequest`, required

| Flag | Required | What |
|---|---|---|
| `--code <value>` | no | The Salesforce OAuth code. |
| `--subdomain <value>` | no | Salesforce installation subdomain. Use the subdomain alone, containing letters, numbers, and dashes, rather than a complete URL. |
| `--redirect-uri <value>` | no | The Salesforce OAuth redirect URI. |
| `--code-verifier <value>` | no | The PKCE code verifier matching the code\_challenge sent on authorization. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api integration-sentry-connect [options]`

- What: Connects a Sentry installation by exchanging its grant code and confirming installation with Sentry. The workspace can have one active Sentry connection. The new connection initially enables completing linked Linear issues when Sentry issues are resolved and reopening them when Sentry issues are unresolved.
- Call: `mutation integrationSentryConnect`, effect: write
- Body: `IntegrationSentryConnectRequest`, required

| Flag | Required | What |
|---|---|---|
| `--code <value>` | no | The Sentry grant code that's exchanged for OAuth tokens. |
| `--installation-id <value>` | no | The Sentry installationId to connect with. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api integration-slack [options]`

- What: Connects a Slack workspace to the main Linear Slack app using an OAuth grant. Reconnecting an archived connection restores it with fresh credentials. Connecting multiple Slack workspaces requires the corresponding plan feature; the same Slack workspace cannot have two active connections or belong to another Linear workspace's connection.
- Call: `mutation integrationSlack`, effect: write
- Body: `IntegrationSlackRequest`, required

| Flag | Required | What |
|---|---|---|
| `--requested-scopes <value>` | no | The Slack OAuth scopes the client requested. Used to warn when Slack grants fewer scopes than requested. |
| `--should-use-v2-auth <value>` | no | \[DEPRECATED\] Whether or not v2 of Slack OAuth should be used. No longer used. |
| `--redirect-uri <value>` | no | The Slack OAuth redirect URI. |
| `--code <value>` | no | The Slack OAuth code. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api integration-slack-asks [options]`

- What: Connects a Slack workspace to the Linear Asks app for issue intake. Requires a workspace plan with Asks access. An archived connection to the same Slack workspace is restored with fresh credentials. Multiple Slack workspaces require the corresponding plan feature, and each Slack workspace can be connected to Asks in only one Linear workspace.
- Call: `mutation integrationSlackAsks`, effect: write
- Body: `IntegrationSlackAsksRequest`, required

| Flag | Required | What |
|---|---|---|
| `--requested-scopes <value>` | no | The Slack OAuth scopes the client requested. Used to warn when Slack grants fewer scopes than requested. |
| `--redirect-uri <value>` | no | The Slack OAuth redirect URI. |
| `--code <value>` | no | The Slack OAuth code. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api integration-slack-custom-view-notifications [options]`

- What: Connects the Slack channel selected during OAuth to a custom view and creates default notification settings if needed. You must be able to edit the view, and the view cannot already have this type of Slack connection. Check the response for remaining bot or workspace setup.
- Call: `mutation integrationSlackCustomViewNotifications`, effect: write
- Body: `IntegrationSlackCustomViewNotificationsRequest`, required

| Flag | Required | What |
|---|---|---|
| `--redirect-uri <value>` | no | The Slack OAuth redirect URI. |
| `--custom-view-id <value>` | no | UUID of the Linear custom view whose notifications should be sent to the selected Slack channel. |
| `--code <value>` | no | The Slack OAuth code. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api integration-slack-customer-channel-link [options]`

- What: Links a customer to a public or private Slack channel in a connected Asks workspace. Both the customer and channel must be unlinked.
- Call: `mutation integrationSlackCustomerChannelLink`, effect: write
- Body: `IntegrationSlackCustomerChannelLinkRequest`, required

| Flag | Required | What |
|---|---|---|
| `--redirect-uri <value>` | no | The Slack OAuth redirect URI. |
| `--customer-id <value>` | no | The customer to link the Slack channel with |
| `--code <value>` | no | The Slack OAuth code. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api integration-slack-import-emojis [options]`

- What: Queues an import of custom emoji from Slack using the OAuth grant. Success confirms scheduling.
- Call: `mutation integrationSlackImportEmojis`, effect: write
- Body: `IntegrationSlackImportEmojisRequest`, required

| Flag | Required | What |
|---|---|---|
| `--redirect-uri <value>` | no | The Slack OAuth redirect URI. |
| `--code <value>` | no | The Slack OAuth code. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api integration-slack-or-asks-update-slack-team-name [options]`

- What: Fetches the current Slack workspace name and updates the name stored on an active Slack or Asks integration. This refreshes Linear's display name; it does not rename the workspace in Slack. A valid integration token is required.
- Call: `mutation integrationSlackOrAsksUpdateSlackTeamName`, effect: write
- Body: `IntegrationSlackOrAsksUpdateSlackTeamNameRequest`, required

| Flag | Required | What |
|---|---|---|
| `--integration-id <value>` | no | The integration ID. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api integration-slack-org-project-updates-post [options]`

- What: Connects the Slack channel selected during OAuth to receive project updates from across the workspace. Requires integration-management permission. Check addBot and the nudge fields in the response for any remaining Slack setup.
- Call: `mutation integrationSlackOrgProjectUpdatesPost`, effect: write
- Body: `IntegrationSlackOrgProjectUpdatesPostRequest`, required

| Flag | Required | What |
|---|---|---|
| `--redirect-uri <value>` | no | The Slack OAuth redirect URI. |
| `--code <value>` | no | The Slack OAuth code. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api integration-slack-personal [options]`

- What: Links your Slack account for personal notifications and opens a direct message with the Linear app. The Slack workspace must already have a Slack or Asks connection. You can have one active personal Slack connection, and the same Slack account cannot be linked to another user in this Linear workspace. An archived connection owned by you can be restored.
- Call: `mutation integrationSlackPersonal`, effect: write
- Body: `IntegrationSlackPersonalRequest`, required

| Flag | Required | What |
|---|---|---|
| `--redirect-uri <value>` | no | The Slack OAuth redirect URI. |
| `--code <value>` | no | The Slack OAuth code. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api integration-slack-post [options]`

- What: Connects the Slack channel selected during OAuth to a Linear team and creates its default notification settings if needed. Requires permission to manage the team, and each team can have one such connection. Direct messages are not supported. Check addBot and the nudge fields in the response for any remaining Slack setup.
- Call: `mutation integrationSlackPost`, effect: write
- Body: `IntegrationSlackPostRequest`, required

| Flag | Required | What |
|---|---|---|
| `--should-use-v2-auth <value>` | no | \[DEPRECATED\] Whether or not v2 of Slack OAuth should be used. No longer used. |
| `--redirect-uri <value>` | no | The Slack OAuth redirect URI. |
| `--team-id <value>` | no | UUID of the Linear team whose notifications should be sent to the selected Slack channel. This is not a Slack workspace or channel ID. |
| `--code <value>` | no | The Slack OAuth code. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api integration-slack-project-post [options]`

- What: Connects the Slack channel selected during OAuth to a project you can access. Choose notifications for project notifications or updates for project updates; each service can have one connection per project. The call also links the channel to the project and creates default notification settings if needed. Check the response for remaining bot or workspace setup.
- Call: `mutation integrationSlackProjectPost`, effect: write
- Body: `IntegrationSlackProjectPostRequest`, required

| Flag | Required | What |
|---|---|---|
| `--service <value>` | no | The service to enable once connected, either 'notifications' or 'updates'. |
| `--redirect-uri <value>` | no | The Slack OAuth redirect URI. |
| `--project-id <value>` | no | UUID of the Linear project whose notifications or updates should be sent to the selected Slack channel. |
| `--code <value>` | no | The Slack OAuth code. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api integration-zendesk [options]`

- What: Connects Zendesk using an OAuth grant and creates or selects the user that authors internal notes. Requires the workspace's support integration plan feature. Reconnecting the same subdomain refreshes credentials and keeps existing settings; an archived connection is restored. Disconnect the current integration before switching to a different Zendesk subdomain.
- Call: `mutation integrationZendesk`, effect: write
- Body: `IntegrationZendeskRequest`, required

| Flag | Required | What |
|---|---|---|
| `--subdomain <value>` | no | Zendesk subdomain, such as acme for acme.zendesk.com. Use letters, numbers, and dashes without a scheme or domain suffix. |
| `--code <value>` | no | The Zendesk OAuth authorization code. |
| `--scope <value>` | no | The Zendesk OAuth scopes. Required when connecting with \`code\`. |
| `--redirect-uri <value>` | no | The Zendesk OAuth redirect URI. Required when connecting with \`code\`. |
| `--bot-user-role <value>` | no | Role for the Zendesk bot user Linear creates: end-user or agent. Omit to retain the role on reconnect; new connections default to end-user. Ignored when botUserId selects an existing user. |
| `--bot-user-id <value>` | no | The Zendesk user ID to use as the author of internal notes instead of creating a bot user. Omit to keep the configured user on reconnect, or pass null to create a new bot user. |
| `--custom-api-url <value>` | no | Custom base URL for Zendesk API requests, such as a proxy in front of Zendesk. OAuth requests always use the standard subdomain URL. |
| `--access-token <value>` | no | Bearer token that authenticates API requests instead of a Zendesk OAuth token. Requires \`customApiUrl\`; no OAuth exchange is performed. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api integrations [options]`

- What: Integrations accessible to the caller, with cursor-based pagination.
- Call: `query integrations`, effect: read
- Pages: cursor: send `after` (body), read the next one from `pageInfo.endCursor`; items in `nodes`; `pageInfo.hasNextPage` is false on the last page; page size in `first` (body)
- Body: `IntegrationsRequest`

| Flag | Required | What |
|---|---|---|
| `--before <value>` | no | Returns results before this cursor. Pair with \`last\` to paginate backward, using a cursor returned by the same connection. Keep the filters and ordering unchanged between pages. Cannot be combined with \`first\` or \`after\`. |
| `--after <value>` | no | Returns results after this cursor. Pair with \`first\` and the previous page's \`endCursor\` to fetch the next page. Keep the filters and ordering unchanged between pages. Cannot be combined with \`last\` or \`before\`. |
| `--first <value>` | no | The maximum number of results to return, starting after \`after\` if supplied. Between 1 and 250. Defaults to 50 when neither \`first\` nor \`last\` is supplied. Cannot be combined with \`last\` or \`before\`. |
| `--last <value>` | no | The maximum number of results to return, ending before \`before\` if supplied. Between 1 and 250. Cannot be combined with \`first\` or \`after\`. |
| `--include-archived <value>` | no | Includes archived resources alongside active ones. Defaults to false, which returns only active resources. This does not include deleted resources. |
| `--order-by <value>` | no | Orders results by creation time or last meaningful update time. Defaults to \`createdAt\`. Results are newest first with \`first\` and oldest first with \`last\`; use the returned \`endCursor\` as \`before\` to continue backward. Cannot be combined with custom \`sort\` options on fields that support them. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |
| `--all` | no | read every page, as the API pages it |
