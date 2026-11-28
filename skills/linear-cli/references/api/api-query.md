<!-- Generated from the API manifest and the command tree by pnpm generate. Do not edit. -->

# Linear API: query

## `linear api authentication-sessions`

- What: Lists active browser, desktop, and mobile sign-in sessions for the authenticated account. isCurrentSession identifies the session making this request. Use a returned session ID with logoutSession to revoke a specific session. Requires session JWT authentication; API keys and OAuth access tokens do not provide this session list.
- Call: `query authenticationSessions`, effect: read

## `linear api dependency-package-metadata [options]`

- What: Looks up license, publication time, and package-wide weekly downloads for up to 500 exact package versions. Currently supports the public npm registry. Results preserve request order, but missing versions, invalid package names, and failed registry lookups are omitted, so match by name and version rather than array index. Version facts and download counts are cached and may not reflect the latest registry changes.
- Call: `query dependencyPackageMetadata`, effect: read
- Body: `DependencyPackageMetadataRequest`, required

| Flag | Required | What |
|---|---|---|
| `--packages <value>` | no | Packages to look up, in response order. Maximum 500. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api quotas [options]`

- What: Public resource quotas for the authenticated workspace. These are not subscription limits.
- Call: `query quotas`, effect: read
- Pages: cursor: send `after` (body), read the next one from `pageInfo.endCursor`; items in `nodes`; `pageInfo.hasNextPage` is false on the last page; page size in `first` (body)
- Body: `QuotasRequest`

| Flag | Required | What |
|---|---|---|
| `--filter <value>` | no | Limits the returned quotas by key or scope. |
| `--before <value>` | no | Returns results before this cursor. Pair with \`last\` to paginate backward, using a cursor returned by the same connection. Keep the filters and ordering unchanged between pages. Cannot be combined with \`first\` or \`after\`. |
| `--after <value>` | no | Returns results after this cursor. Pair with \`first\` and the previous page's \`endCursor\` to fetch the next page. Keep the filters and ordering unchanged between pages. Cannot be combined with \`last\` or \`before\`. |
| `--first <value>` | no | The maximum number of results to return, starting after \`after\` if supplied. Between 1 and 250. Defaults to 50 when neither \`first\` nor \`last\` is supplied. Cannot be combined with \`last\` or \`before\`. |
| `--last <value>` | no | The maximum number of results to return, ending before \`before\` if supplied. Between 1 and 250. Cannot be combined with \`first\` or \`after\`. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |
| `--all` | no | read every page, as the API pages it |

## `linear api rate-limit-status`

- What: Returns the quota state recorded for this GraphQL request, including both request count and query complexity. This query also consumes quota. Use remainingAmount with period and allowedAmount to pace requests: quota refills gradually, and reset is not a single instant when an exhausted fixed window is cleared. Other requests made with the same limited identity can consume the remaining quota.
- Call: `query rateLimitStatus`, effect: read

## `linear api semantic-search [options]`

- What: Searches accessible issues, projects, initiatives, and documents together using a natural-language query. Use types to choose resource types and filters to narrow each type separately. Returns ranked results without cursor pagination; maxResults controls the requested count, with extra exact matches or original issues possible. Limited to 30 requests per minute.
- Call: `query semanticSearch`, effect: read
- Body: `SemanticSearchRequest`, required

| Flag | Required | What |
|---|---|---|
| `--query <value>` | no | A search phrase or natural-language description of what you are looking for, from 1 to 1024 characters. Results combine text matching with relevance by meaning. |
| `--types <value>` | no | The types of results to return (default: all). |
| `--max-results <value>` | no | The requested number of ranked search results, from 1 to 50; defaults to 50. Exact matches and original issues for matching duplicates can add results beyond this number. |
| `--include-archived <value>` | no | Whether to include archived results in the search (default: false). |
| `--filters <value>` | no | Filters to apply to the semantic search results of each type. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api sso-url-from-email [options]`

- What: Returns a SAML sign-in URL for an existing membership or a matching email domain. Errors if no SSO-enabled workspace is found.
- Call: `query ssoUrlFromEmail`, effect: read
- Body: `SsoUrlFromEmailRequest`, required

| Flag | Required | What |
|---|---|---|
| `--is-desktop <value>` | no | Whether the client is the desktop app. |
| `--type <value>` | no | Type of identity provider. |
| `--email <value>` | no | Email to query the SSO login URL by. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api verify-git-hub-enterprise-server-installation [options]`

- What: Checks whether Linear has received the first connection from the GitHub Enterprise Server app during this setup attempt.
- Call: `query verifyGitHubEnterpriseServerInstallation`, effect: read
- Body: `VerifyGitHubEnterpriseServerInstallationRequest`, required

| Flag | Required | What |
|---|---|---|
| `--integration-id <value>` | no | The integration ID. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api viewer`

- What: The account making this request. For OAuth applications using actor=app, this is the application account.
- Call: `query viewer`, effect: read
