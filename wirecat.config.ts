import { defineCli } from "@wirecat/cli-core/manifest"

const page = "pageInfo { hasNextPage endCursor }"
const times = "createdAt updatedAt archivedAt"
const timeMap = { createdAt: "createdAt", updatedAt: "updatedAt", archivedAt: "archivedAt" }
// Linear hides archived rows unless asked; the copy keeps them, marked.
const all = { first: 100, includeArchived: true }
const issueFields =
  "identifier title description url priority dueDate completedAt canceledAt state { id } team { id } " +
  "project { id } cycle { id } assignee { id } creator { id } parent { id } labels { nodes { id } } trashed"
const commentFields = "body url issue { id } user { id }"

// Three calls per kind: everything, what changed since the cursor, and every id for the deletion pass, which selects
// only the id and what marks a row deleted, to keep Linear's complexity points low.
const kind = (operation: string, fields: string, extra: Record<string, unknown> = {}, ids = "id") => {
  const selection = `nodes { id ${times} ${fields} } ${page}`
  return {
    list: { operation, variables: { ...all, ...extra }, selection },
    changes: {
      operation,
      variables: { ...all, ...extra, orderBy: "updatedAt", filter: { updatedAt: { gte: "{since}" } } },
      selection,
      since: "iso" as const,
    },
    ids: { operation, variables: { ...all, ...extra }, selection: `nodes { ${ids} } ${page}` },
  }
}

export default defineCli({
  identity: {
    command: "linear",
    package: "@wirecat/linear-cli",
    prefix: "WCLINEAR",
    service: "Linear",
    owner: "WireCatLabs",
  },
  spec: { kind: "graphql", from: "https://api.linear.app/graphql" },
  // The copy is keyed by the user, not the workspace: Linear shows each member other teams, and a deletion pass over
  // one member's view would mark another's private issues deleted.
  auth: { preset: "token", verify: { operation: "viewer", id: "id", name: "name" } },
  category: "tracker",
  source: {
    provider: "linear",
    kinds: ["team", "user", "state", "label", "project", "sprint", "issue", "comment"],
    entities: {
      team: { ...kind("teams", "name key"), map: { externalId: "id", name: "name", key: "key", ...timeMap } },
      user: {
        // Deactivated members still authored issues and comments.
        ...kind("users", "name email active", { includeDisabled: true }),
        map: { externalId: "id", name: "name", email: "email", active: "active", ...timeMap },
      },
      state: {
        ...kind("workflowStates", "name type position team { id }"),
        map: { externalId: "id", name: "name", type: "type", team: "team.id", position: "position", ...timeMap },
      },
      label: {
        ...kind("issueLabels", "name team { id }"),
        map: { externalId: "id", name: "name", team: "team.id", ...timeMap },
      },
      project: {
        // A nested list with no size counts as 50 rows of Linear's complexity points; 50 a page stays well under the
        // 10,000 a query may cost. https://linear.app/developers/rate-limiting
        ...kind("projects", "name description url targetDate status { type } lead { id } teams { nodes { id } }", {
          first: 50,
        }),
        map: {
          externalId: "id",
          name: "name",
          description: "description",
          status: "status.type",
          lead: "lead.id",
          teams: { each: "teams.nodes", id: "id" },
          targetDate: "targetDate",
          url: "url",
          ...timeMap,
        },
      },
      // Linear's cycles; most have no name, and the copy titles them by number.
      sprint: {
        ...kind("cycles", "number name description startsAt endsAt completedAt team { id }"),
        map: {
          externalId: "id",
          name: "name",
          number: "number",
          description: "description",
          team: "team.id",
          startsAt: "startsAt",
          endsAt: "endsAt",
          completedAt: "completedAt",
          ...timeMap,
        },
      },
      issue: {
        // Trashing an issue leaves its updatedAt, so only the daily id pass sees it: it reads trashed to leave it out.
        ...kind("issues", issueFields, { first: 50 }, "id trashed"),
        map: {
          externalId: "id",
          key: "identifier",
          title: "title",
          description: "description",
          state: "state.id",
          team: "team.id",
          project: "project.id",
          sprint: "cycle.id",
          assignee: "assignee.id",
          creator: "creator.id",
          labels: { each: "labels.nodes", id: "id" },
          parent: "parent.id",
          priority: "priority",
          dueDate: "dueDate",
          completedAt: "completedAt",
          canceledAt: "canceledAt",
          url: "url",
          deleted: "trashed",
          ...timeMap,
        },
      },
      comment: {
        ...kind("comments", commentFields),
        map: { externalId: "id", issue: "issue.id", body: "body", author: "user.id", url: "url", ...timeMap },
      },
    },
    self: { call: { operation: "viewer" }, path: "id" },
    // The mutation answers the written row, read with the kind's own map, so no second read follows a write.
    writes: {
      issue: {
        create: {
          operation: "issueCreate",
          variables: { input: "{values}" },
          selection: `success issue { id ${times} ${issueFields} }`,
          items: "issue",
        },
        update: {
          operation: "issueUpdate",
          variables: { id: "{id}", input: "{values}" },
          selection: `success issue { id ${times} ${issueFields} }`,
          items: "issue",
        },
        fields: {
          title: { to: "title" },
          description: { to: "description" },
          team: { to: "teamId" },
          state: { to: "stateId" },
          assignee: { to: "assigneeId" },
          priority: { to: "priority" },
          labels: { to: "labelIds" },
          project: { to: "projectId" },
          parent: { to: "parentId" },
        },
      },
      comment: {
        create: {
          operation: "commentCreate",
          variables: { input: "{values}" },
          selection: `success comment { id ${times} ${commentFields} }`,
          items: "comment",
        },
        fields: { issue: { to: "issueId" }, body: { to: "body" } },
      },
    },
  },
})
