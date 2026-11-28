<!-- Generated from the API manifest and the command tree by pnpm generate. Do not edit. -->

# Linear API: application

## `linear api application-info [options]`

- What: Looks up an OAuth application's name, developer, and branding using its OAuth clientId. Use this to identify an application before authorization. Private applications can be read only from their owning workspace; this lookup does not grant or install the application.
- Call: `query applicationInfo`, effect: read
- Body: `ApplicationInfoRequest`, required

| Flag | Required | What |
|---|---|---|
| `--client-id <value>` | no | The client ID of the application. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |
