<!-- Generated from the API manifest and the command tree by pnpm generate. Do not edit. -->

# Linear API: oauth-application

## `linear api oauth-application [options]`

- What: \[ALPHA\] A specific OAuth application created by the calling OAuth application through the public API.
- Call: `query oauthApplication`, effect: read
- Body: `OauthApplicationRequest`, required

| Flag | Required | What |
|---|---|---|
| `--id <value>` | no | The identifier of the OAuth application to retrieve. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api oauth-application-archive [options]`

- What: \[ALPHA\] Archives an OAuth application created by the calling OAuth application.
- Call: `mutation oauthApplicationArchive`, effect: destructive
- Permission keys: `linear.delete`
- Body: `OauthApplicationArchiveRequest`, required

| Flag | Required | What |
|---|---|---|
| `--id <value>` | no | The identifier of the OAuth application to archive. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api oauth-application-coding-session-trusted-source`

- What: Returns the authenticated OAuth application's trusted-source status for Coding Sessions in the workspace. Requires an OAuth access token with the \`read\` scope.
- Call: `query oauthApplicationCodingSessionTrustedSource`, effect: read

## `linear api oauth-application-create [options]`

- What: \[ALPHA\] Creates an OAuth application private to the current workspace and managed by the calling OAuth application. The caller needs workspace API management permission. Save clientSecret and any webhookSecret from the first successful response. Retrying with the same idempotency key returns the existing unarchived application without updating it and with secrets omitted. Use the application’s id for later management operations and clientId for OAuth flows.
- Call: `mutation oauthApplicationCreate`, effect: write
- Body: `OauthApplicationCreateRequest`, required

| Flag | Required | What |
|---|---|---|
| `--input <value>` | no | The OAuth application object to create. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api oauth-application-rotate-secret [options]`

- What: \[ALPHA\] Replaces the client secret for an application created by the caller and returns the new secret. Store it before discarding the response; it cannot be retrieved later. Tokens issued through client\_credentials are revoked, while tokens from the authorization-code flow remain valid. The caller must be able to manage the application’s credentials, including its private-team access, as well as have workspace API management permission.
- Call: `mutation oauthApplicationRotateSecret`, effect: write
- Body: `OauthApplicationRotateSecretRequest`, required

| Flag | Required | What |
|---|---|---|
| `--id <value>` | no | The identifier of the OAuth application for which to rotate the secret. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api oauth-application-rotate-webhook-secret [options]`

- What: \[ALPHA\] Rotates the webhook signing secret for an OAuth application created by the calling OAuth application.
- Call: `mutation oauthApplicationRotateWebhookSecret`, effect: write
- Body: `OauthApplicationRotateWebhookSecretRequest`, required

| Flag | Required | What |
|---|---|---|
| `--id <value>` | no | The identifier of the OAuth application for which to rotate the webhook secret. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api oauth-application-update [options]`

- What: \[ALPHA\] Updates an unarchived application created by the calling OAuth application in this workspace. Omitted fields keep their current values. Enabling client\_credentials or changing the webhook destination requires access to every private team available to the app, or workspace owner permission; an app with access to all private teams requires an owner. Workspace API management permission is required for every update.
- Call: `mutation oauthApplicationUpdate`, effect: write
- Body: `OauthApplicationUpdateRequest`, required

| Flag | Required | What |
|---|---|---|
| `--input <value>` | no | A partial OAuth application object to update. |
| `--id <value>` | no | The identifier of the OAuth application to update. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api oauth-applications`

- What: \[ALPHA\] Lists unarchived applications created by the calling OAuth application in the current workspace. This is not a list of every application installed in the workspace. Requires OAuth authentication and workspace API management permission.
- Call: `query oauthApplications`, effect: read
