<!-- Generated from the API manifest and the command tree by pnpm generate. Do not edit. -->

# Linear API: agent-skill

## `linear api agent-skill [options]`

- What: Retrieves an accessible, unarchived agent skill by UUID.
- Call: `query agentSkill`, effect: read
- Body: `AgentSkillRequest`, required

| Flag | Required | What |
|---|---|---|
| `--id <value>` | no | The identifier of the agent skill to retrieve. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api agent-skill-create [options]`

- What: Creates reusable Markdown instructions for the Linear Agent, owned by the authenticated user. Omit teamId for a personal skill, or provide a team UUID to share it with that team. Creating a team skill requires permission to manage the team’s agent skills. The returned skill contains the saved instructions and display details.
- Call: `mutation agentSkillCreate`, effect: write
- Body: `AgentSkillCreateRequest`, required

| Flag | Required | What |
|---|---|---|
| `--input <value>` | no | The agent skill object to create. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api agent-skill-delete [options]`

- What: Deletes an agent skill and its inherited copies. Inherited skills must be deleted from the team that owns the source skill.
- Call: `mutation agentSkillDelete`, effect: destructive
- Permission keys: `linear.delete`
- Body: `AgentSkillDeleteRequest`, required

| Flag | Required | What |
|---|---|---|
| `--id <value>` | no | The identifier of the agent skill to delete. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api agent-skill-update [options]`

- What: Updates a skill the caller can manage. Omitted fields remain unchanged, and a supplied body replaces the full instruction text. For a team skill, the caller needs agent skill management permission; moving it also requires that permission in the destination team. Inherited copies cannot be edited directly—update their source skill instead.
- Call: `mutation agentSkillUpdate`, effect: write
- Body: `AgentSkillUpdateRequest`, required

| Flag | Required | What |
|---|---|---|
| `--input <value>` | no | Data to update the agent skill with. |
| `--id <value>` | no | The identifier of the agent skill to update. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |

## `linear api agent-skills [options]`

- What: Returns the skills the caller can access, including personal skills and shared team or workspace skills. Use filter to narrow the result and the connection arguments to paginate. Inherited team skills can appear as separate records; their inheritance fields identify the source.
- Call: `query agentSkills`, effect: read
- Pages: cursor: send `after` (body), read the next one from `pageInfo.endCursor`; items in `nodes`; `pageInfo.hasNextPage` is false on the last page; page size in `first` (body)
- Body: `AgentSkillsRequest`

| Flag | Required | What |
|---|---|---|
| `--filter <value>` | no | Filter returned skills. |
| `--before <value>` | no | Returns results before this cursor. Pair with \`last\` to paginate backward, using a cursor returned by the same connection. Keep the filters and ordering unchanged between pages. Cannot be combined with \`first\` or \`after\`. |
| `--after <value>` | no | Returns results after this cursor. Pair with \`first\` and the previous page's \`endCursor\` to fetch the next page. Keep the filters and ordering unchanged between pages. Cannot be combined with \`last\` or \`before\`. |
| `--first <value>` | no | The maximum number of results to return, starting after \`after\` if supplied. Between 1 and 250. Defaults to 50 when neither \`first\` nor \`last\` is supplied. Cannot be combined with \`last\` or \`before\`. |
| `--last <value>` | no | The maximum number of results to return, ending before \`before\` if supplied. Between 1 and 250. Cannot be combined with \`first\` or \`after\`. |
| `--include-archived <value>` | no | Includes archived resources alongside active ones. Defaults to false, which returns only active resources. This does not include deleted resources. |
| `--order-by <value>` | no | Orders results by creation time or last meaningful update time. Defaults to \`createdAt\`. Results are newest first with \`first\` and oldest first with \`last\`; use the returned \`endCursor\` as \`before\` to continue backward. Cannot be combined with custom \`sort\` options on fields that support them. |
| `--body <json>` | no | the request body as JSON; - reads it from stdin |
| `--body-file <path>` | no | the request body from a JSON file; - is stdin |
| `--all` | no | read every page, as the API pages it |
