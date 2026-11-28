<!-- Generated from the API manifest and the command tree by pnpm generate. Do not edit. -->

# Linear API: entity-external-link

## `linear api entity-external-link [options]`

- What: Retrieves a single entity external link by its identifier.
- Call: `query entityExternalLink`, effect: read
- Body: `EntityExternalLinkRequest`, required

| Flag | Required | What |
|---|---|---|
| `--id <value>` | no | The identifier of the entity external link to retrieve. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api entity-external-link-create [options]`

- What: Adds an external resource to an initiative, project, or release the caller can access and write to. Provide exactly one parent, a destination URL, and the label to show in Linear. Omit sortOrder to place the link last among the parent’s resources. This stores a reference to the URL; it does not upload or copy the destination content.
- Call: `mutation entityExternalLinkCreate`, effect: write
- Body: `EntityExternalLinkCreateRequest`, required

| Flag | Required | What |
|---|---|---|
| `--input <value>` | no | The entity link object to create. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api entity-external-link-delete [options]`

- What: Removes a resource link from Linear and clears any team pins that refer to it. The external URL’s content is unchanged. The caller must have access to the link’s parent scope; archived links can also be deleted.
- Call: `mutation entityExternalLinkDelete`, effect: destructive
- Permission keys: `linear.delete`
- Body: `EntityExternalLinkDeleteRequest`, required

| Flag | Required | What |
|---|---|---|
| `--id <value>` | no | The identifier of the entity link to delete. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api entity-external-link-update [options]`

- What: Changes an unarchived resource link’s URL, display label, or position within its parent’s resources. Omitted fields remain unchanged, and the parent cannot be changed. The link must be writable and within the caller’s permitted scope.
- Call: `mutation entityExternalLinkUpdate`, effect: write
- Body: `EntityExternalLinkUpdateRequest`, required

| Flag | Required | What |
|---|---|---|
| `--input <value>` | no | The entity link object to update. |
| `--id <value>` | no | The identifier of the entity link to update. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |
