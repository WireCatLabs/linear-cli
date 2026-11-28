<!-- Generated from the API manifest and the command tree by pnpm generate. Do not edit. -->

# Linear API: user

## `linear api available-users`

- What: Lists the signed-in account's workspace access. users contains memberships available with the current sign-in method; availableOrganizations contains workspaces the account may join. lockedUsers and lockedOrganizations identify workspaces that require another sign-in method, such as SAML. Each workspace membership has a different user ID even when it belongs to the same account.
- Call: `query availableUsers`, effect: read

## `linear api email-token-user-account-auth [options]`

- What: Completes email sign-in using the emailed token and the same clientAuthCode sent with emailUserAccountAuthChallenge. Successful authentication consumes the client binding and sets a session cookie. Use the returned memberships and available or locked workspaces to continue into a workspace; the deprecated token field is not populated. An expired token or a code from a different client cannot complete this flow.
- Call: `mutation emailTokenUserAccountAuth`, effect: write
- Body: `EmailTokenUserAccountAuthRequest`, required

| Flag | Required | What |
|---|---|---|
| `--input <value>` | no | The data used for token authentication. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api email-user-account-auth-challenge [options]`

- What: Starts email sign-in and sends a one-time token to the supplied address. Generate and retain a clientAuthCode UUID, then pass it with the emailed token to emailTokenUserAccountAuth within ten minutes. Requesting another challenge replaces the stored client binding for that email. When login challenge verification is enabled, challengeResponse is also required. Success confirms the challenge was accepted; email delivery may finish in the background.
- Call: `mutation emailUserAccountAuthChallenge`, effect: write
- Body: `EmailUserAccountAuthChallengeRequest`, required

| Flag | Required | What |
|---|---|---|
| `--input <value>` | no | The data used for email authentication. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api google-user-account-auth [options]`

- What: Exchanges a Google OAuth code, sets the authentication cookie, and returns workspace access details. May create an account unless disallowSignup is true.
- Call: `mutation googleUserAccountAuth`, effect: write
- Body: `GoogleUserAccountAuthRequest`, required

| Flag | Required | What |
|---|---|---|
| `--input <value>` | no | The data used for Google authentication. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api saml-token-user-account-auth [options]`

- What: Completes SAML sign-in with the email and token issued by the SAML flow, then sets the authentication cookie. The response identifies workspace memberships and any workspaces that require a different sign-in method. Unlike email token sign-in, this operation does not require clientAuthCode.
- Call: `mutation samlTokenUserAccountAuth`, effect: write
- Body: `SamlTokenUserAccountAuthRequest`, required

| Flag | Required | What |
|---|---|---|
| `--input <value>` | no | The data used for token authentication. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api user [options]`

- What: Fetches a specific user by their ID.
- Call: `query user`, effect: read
- Body: `UserRequest`, required

| Flag | Required | What |
|---|---|---|
| `--id <value>` | no | The identifier of the user to retrieve. To retrieve the authenticated user, use \`viewer\` query. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api user-change-role [options]`

- What: Changes the workspace role of a user. The requesting user must have a role equal to or higher than the target role. Requires workspace admin permissions.
- Call: `mutation userChangeRole`, effect: write
- Body: `UserChangeRoleRequest`, required

| Flag | Required | What |
|---|---|---|
| `--role <value>` | no | The new role for the user. |
| `--id <value>` | no | The identifier of the user |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api user-discord-connect [options]`

- What: Connects the Discord user to this Linear account via OAuth2.
- Call: `mutation userDiscordConnect`, effect: write
- Body: `UserDiscordConnectRequest`, required

| Flag | Required | What |
|---|---|---|
| `--redirect-uri <value>` | no | The Discord OAuth redirect URI. |
| `--code <value>` | no | The Discord OAuth code. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api user-external-user-disconnect [options]`

- What: Disconnects the external user from this Linear account.
- Call: `mutation userExternalUserDisconnect`, effect: write
- Body: `UserExternalUserDisconnectRequest`, required

| Flag | Required | What |
|---|---|---|
| `--workspace-integration-id <value>` | no | The workspace Jira integration whose account mapping to remove. If omitted, removes all Jira mappings without a personal connection. |
| `--service <value>` | no | The external service to disconnect. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api user-flag-update [options]`

- What: Updates a specific user settings flag by performing an operation (e.g., increment or clear) on it.
- Call: `mutation userFlagUpdate`, effect: write
- Body: `UserFlagUpdateRequest`, required

| Flag | Required | What |
|---|---|---|
| `--operation <value>` | no | Flag operation to perform. |
| `--flag <value>` | no | Settings flag to increment. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api user-revoke-all-sessions [options]`

- What: Revokes all active sessions for a user, forcing them to re-authenticate. Can only be called by a workspace admin or owner.
- Call: `mutation userRevokeAllSessions`, effect: write
- Body: `UserRevokeAllSessionsRequest`, required

| Flag | Required | What |
|---|---|---|
| `--id <value>` | no | The identifier of the user to logout all sessions of. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api user-revoke-session [options]`

- What: Revokes a specific authentication session for a user. The admin cannot revoke their own sessions with this mutation. Can only be called by a workspace admin or owner.
- Call: `mutation userRevokeSession`, effect: write
- Body: `UserRevokeSessionRequest`, required

| Flag | Required | What |
|---|---|---|
| `--session-id <value>` | no | The identifier of the session to revoke. |
| `--id <value>` | no | The identifier of the user whose session to revoke. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api user-sessions [options]`

- What: Lists all active authentication sessions for a user. Can only be called by a workspace admin or owner.
- Call: `query userSessions`, effect: read
- Body: `UserSessionsRequest`, required

| Flag | Required | What |
|---|---|---|
| `--id <value>` | no | The identifier of the user to list sessions of. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api user-suspend [options]`

- What: Suspends a user, deactivating their account and revoking access to the workspace. The suspended user's sessions are invalidated. Can only be called by a workspace admin or owner.
- Call: `mutation userSuspend`, effect: write
- Body: `UserSuspendRequest`, required

| Flag | Required | What |
|---|---|---|
| `--force-bypass-scim-restrictions <value>` | no | \[INTERNAL\] Whether to bypass SCIM restrictions when suspending. Use with caution — this overrides identity provider management. |
| `--id <value>` | no | The identifier of the user to suspend. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api user-unlink-from-identity-provider [options]`

- What: Unlinks a guest user from their identity provider. Can only be called by an admin when SCIM is enabled.
- Call: `mutation userUnlinkFromIdentityProvider`, effect: write
- Body: `UserUnlinkFromIdentityProviderRequest`, required

| Flag | Required | What |
|---|---|---|
| `--id <value>` | no | The identifier of the guest user to unlink from their identity provider. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api user-unsuspend [options]`

- What: Re-activates a suspended user, restoring their access to the workspace. Can only be called by a workspace admin or owner.
- Call: `mutation userUnsuspend`, effect: write
- Body: `UserUnsuspendRequest`, required

| Flag | Required | What |
|---|---|---|
| `--force-bypass-scim-restrictions <value>` | no | \[INTERNAL\] Whether to bypass SCIM restrictions when unsuspending. Use with caution — this overrides identity provider management. |
| `--id <value>` | no | The identifier of the user to unsuspend. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api user-update [options]`

- What: Updates a user’s profile. Use the user UUID or me for your own account. Updating another user requires member-management permission; identity-provider rules may block name changes, and application accounts only accept name and displayName.
- Call: `mutation userUpdate`, effect: write
- Body: `UserUpdateRequest`, required

| Flag | Required | What |
|---|---|---|
| `--input <value>` | no | A partial user object to update the user with. |
| `--id <value>` | no | The identifier of the user to update. Use \`me\` to reference currently authenticated user. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api user-view-preferences [options]`

- What: The authenticated user's workspace-level view display preferences for a view type. Returns the user-type preferences that are not scoped to a team, project, or other entity. Null if the user has not customized the view.
- Call: `query userViewPreferences`, effect: read
- Body: `UserViewPreferencesRequest`, required

| Flag | Required | What |
|---|---|---|
| `--view-type <value>` | no | The view type the preferences are associated with. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api users [options]`

- What: Users in the workspace, with filtering and pagination. Disabled accounts are excluded unless includeDisabled is true.
- Call: `query users`, effect: read
- Pages: cursor: send `after` (body), read the next one from `pageInfo.endCursor`; items in `nodes`; `pageInfo.hasNextPage` is false on the last page; page size in `first` (body)
- Body: `UsersRequest`

| Flag | Required | What |
|---|---|---|
| `--filter <value>` | no | Filter returned users. |
| `--include-disabled <value>` | no | Include disabled and suspended accounts. Defaults to false. |
| `--before <value>` | no | Returns results before this cursor. Pair with \`last\` to paginate backward, using a cursor returned by the same connection. Keep the filters and ordering unchanged between pages. Cannot be combined with \`first\` or \`after\`. |
| `--after <value>` | no | Returns results after this cursor. Pair with \`first\` and the previous page's \`endCursor\` to fetch the next page. Keep the filters and ordering unchanged between pages. Cannot be combined with \`last\` or \`before\`. |
| `--first <value>` | no | The maximum number of results to return, starting after \`after\` if supplied. Between 1 and 250. Defaults to 50 when neither \`first\` nor \`last\` is supplied. Cannot be combined with \`last\` or \`before\`. |
| `--last <value>` | no | The maximum number of results to return, ending before \`before\` if supplied. Between 1 and 250. Cannot be combined with \`first\` or \`after\`. |
| `--include-archived <value>` | no | Includes archived resources alongside active ones. Defaults to false, which returns only active resources. This does not include deleted resources. |
| `--order-by <value>` | no | Orders results by creation time or last meaningful update time. Defaults to \`createdAt\`. Results are newest first with \`first\` and oldest first with \`last\`; use the returned \`endCursor\` as \`before\` to continue backward. Cannot be combined with custom \`sort\` options on fields that support them. |
| `--sort <value>` | no | Sort returned users. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |
| `--all` | no | read every page, as the API pages it |
