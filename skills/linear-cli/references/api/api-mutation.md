<!-- Generated from the API manifest and the command tree by pnpm generate. Do not edit. -->

# Linear API: mutation

## `linear api contact-create [options]`

- What: Submits a message to Linear support on behalf of the authenticated user. Delivery happens after the request succeeds.
- Call: `mutation contactCreate`, effect: write
- Body: `ContactCreateRequest`, required

| Flag | Required | What |
|---|---|---|
| `--input <value>` | no | The contact entry to create. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api create-csv-export-report [options]`

- What: Queues a workspace CSV export and emails the requesting user a download link when it is ready. Success confirms scheduling, not completion. Private and restricted teams are excluded unless explicitly selected by their UUIDs. Requires workspace export permission, which permits selecting eligible teams even when the requester is not a member.
- Call: `mutation createCsvExportReport`, effect: write
- Body: `CreateCsvExportReportRequest`

| Flag | Required | What |
|---|---|---|
| `--include-private-team-ids <value>` | no | UUIDs of private teams to include in the export. Omit or use an empty list to exclude private teams. Restricted teams are selected separately. |
| `--include-restricted-team-ids <value>` | no | UUIDs of restricted teams to include in the export. An empty list excludes restricted teams. Omission falls back to the deprecated includeProtectedTeamIds list, or excludes them if neither list is provided. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api email-unsubscribe [options]`

- What: Unsubscribes a user from the selected email category using the user ID and token from a Linear email. No sign-in is required because the token authorizes the change. An invalid token returns success=false; other email categories and notification channels are unchanged.
- Call: `mutation emailUnsubscribe`, effect: write
- Body: `EmailUnsubscribeRequest`, required

| Flag | Required | What |
|---|---|---|
| `--input <value>` | no | Unsubscription details. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api file-upload [options]`

- What: Prepares a file upload and returns a signed destination. Upload the raw bytes with HTTP PUT to uploadFile.uploadUrl, using its headers and the supplied Content-Type; start the request within one minute and send exactly size bytes. Once the PUT succeeds, reference uploadFile.assetUrl in an issue description, comment, or attachment. This mutation does not create that reference for you. Workspace file-type restrictions and plan upload limits apply.
- Call: `mutation fileUpload`, effect: write
- Body: `FileUploadRequest`, required

| Flag | Required | What |
|---|---|---|
| `--meta-data <value>` | no | Optional metadata encoded as a JSON string, such as {"issueId":"..."} or {"commentId":"..."}. These references record upload context; they do not insert the file into that issue or comment. You still need to use assetUrl when creating or updating the content. |
| `--make-public <value>` | no | Whether anyone with the asset URL can view the uploaded image without authenticating. Omit or set false for a private upload. Only non-SVG images can be public; other file types are rejected when this is true. |
| `--size <value>` | no | Exact file size in bytes. The upload request must match this size. |
| `--content-type <value>` | no | MIME type of the uploaded file. |
| `--filename <value>` | no | Filename of the uploaded file. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api file-upload-dangerously-delete [options]`

- What: Permanently delete an uploaded file by asset URL. This should be used as a last resort and will break comments and documents that reference the asset.
- Call: `mutation fileUploadDangerouslyDelete`, effect: destructive
- Permission keys: `linear.delete`
- Body: `FileUploadDangerouslyDeleteRequest`, required

| Flag | Required | What |
|---|---|---|
| `--asset-url <value>` | no | The asset URL of the uploaded file to delete. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api image-upload-from-url [options]`

- What: Copies an image from an external URL into Linear’s private upload storage. The URL must let Linear download the image directly; an HTML page containing the image is not accepted. On success, the returned URL refers to the copied image and can be used in Linear content. Unlike fileUpload, this mutation performs the download and upload for you.
- Call: `mutation imageUploadFromUrl`, effect: write
- Body: `ImageUploadFromUrlRequest`, required

| Flag | Required | What |
|---|---|---|
| `--url <value>` | no | URL of the file to be uploaded to Linear. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api import-file-upload [options]`

- What: Prepares a file in Linear’s import storage. Upload the raw bytes with HTTP PUT to the returned uploadUrl, using all returned headers and the matching Content-Type. The upload must start within one minute and contain exactly the declared number of bytes. Success prepares the destination; it does not upload the bytes or start an import.
- Call: `mutation importFileUpload`, effect: write
- Body: `ImportFileUploadRequest`, required

| Flag | Required | What |
|---|---|---|
| `--meta-data <value>` | no | Optional metadata encoded as a JSON string, such as {"issueId":"..."} or {"commentId":"..."}. These references record upload context; they do not insert the file into that issue or comment. You still need to use assetUrl when creating or updating the content. |
| `--size <value>` | no | Exact file size in bytes. The upload request must match this size. |
| `--content-type <value>` | no | MIME type of the uploaded file. |
| `--filename <value>` | no | Filename of the uploaded file. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api logout [options]`

- What: Signs out the current session and clears authentication cookies. If the token has no session ID, signs out all sessions for the account.
- Call: `mutation logout`, effect: write
- Body: `LogoutRequest`

| Flag | Required | What |
|---|---|---|
| `--reason <value>` | no | Optional reason recorded with the sign-out event. It does not change which sessions are revoked. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api logout-all-sessions [options]`

- What: Signs out all sessions for the account, including the current session, and clears authentication cookies.
- Call: `mutation logoutAllSessions`, effect: write
- Body: `LogoutAllSessionsRequest`

| Flag | Required | What |
|---|---|---|
| `--reason <value>` | no | Optional reason recorded with the sign-out event. It does not change which sessions are revoked. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api logout-other-sessions [options]`

- What: Signs out every other session for the authenticated account while keeping the current session active.
- Call: `mutation logoutOtherSessions`, effect: write
- Body: `LogoutOtherSessionsRequest`

| Flag | Required | What |
|---|---|---|
| `--reason <value>` | no | Optional reason recorded with the sign-out event. It does not change which sessions are revoked. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api logout-session [options]`

- What: Revokes one sign-in session belonging to the authenticated account. Use an ID returned by authenticationSessions; it may be the current session or another device's session. Requires session JWT authentication.
- Call: `mutation logoutSession`, effect: write
- Body: `LogoutSessionRequest`, required

| Flag | Required | What |
|---|---|---|
| `--session-id <value>` | no | ID of the session to logout. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api refresh-google-sheets-data [options]`

- What: Queues a Google Sheets export refresh. Success confirms scheduling; the returned integration may still contain the previous export state.
- Call: `mutation refreshGoogleSheetsData`, effect: write
- Body: `RefreshGoogleSheetsDataRequest`, required

| Flag | Required | What |
|---|---|---|
| `--type <value>` | no | Export type: issue, project, or initiative. Defaults to issue. |
| `--id <value>` | no | The identifier of the Google Sheets integration to update. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api track-anonymous-event [options]`

- What: Submits an anonymous $pageview or $pageleave analytics event, with optional properties and session correlation. Unsupported event names return success=false. A successful response means tracking accepted the event, not that analytics delivery has completed. Limited to 30 requests per hour.
- Call: `mutation trackAnonymousEvent`, effect: write
- Body: `TrackAnonymousEventRequest`, required

| Flag | Required | What |
|---|---|---|
| `--input <value>` | no | Event tracking details. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |
