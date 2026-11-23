// Generated from wirecat.config.ts by scripts/from-config.ts; run pnpm generate

export const VERIFY: { operation: string; id: string; name?: string; active?: string } = {
  operation: "viewer",
  id: "id",
  name: "name",
}

export const SOURCE: Readonly<Record<string, unknown>> & {
  readonly provider: string
  readonly kinds: readonly string[]
} = {
  provider: "linear",
  kinds: ["team", "user", "state", "label", "project", "issue", "comment"],
  entities: {
    team: {
      list: {
        operation: "teams",
        variables: {
          first: 100,
          includeArchived: true,
        },
        selection: "nodes { id createdAt updatedAt archivedAt name key } pageInfo { hasNextPage endCursor }",
      },
      changes: {
        operation: "teams",
        variables: {
          first: 100,
          includeArchived: true,
          orderBy: "updatedAt",
          filter: {
            updatedAt: {
              gte: "{since}",
            },
          },
        },
        selection: "nodes { id createdAt updatedAt archivedAt name key } pageInfo { hasNextPage endCursor }",
        since: "iso",
      },
      ids: {
        operation: "teams",
        variables: {
          first: 100,
          includeArchived: true,
        },
        selection: "nodes { id } pageInfo { hasNextPage endCursor }",
      },
      map: {
        externalId: "id",
        name: "name",
        key: "key",
        createdAt: "createdAt",
        updatedAt: "updatedAt",
        archivedAt: "archivedAt",
      },
    },
    user: {
      list: {
        operation: "users",
        variables: {
          first: 100,
          includeArchived: true,
          includeDisabled: true,
        },
        selection: "nodes { id createdAt updatedAt archivedAt name email active } pageInfo { hasNextPage endCursor }",
      },
      changes: {
        operation: "users",
        variables: {
          first: 100,
          includeArchived: true,
          includeDisabled: true,
          orderBy: "updatedAt",
          filter: {
            updatedAt: {
              gte: "{since}",
            },
          },
        },
        selection: "nodes { id createdAt updatedAt archivedAt name email active } pageInfo { hasNextPage endCursor }",
        since: "iso",
      },
      ids: {
        operation: "users",
        variables: {
          first: 100,
          includeArchived: true,
          includeDisabled: true,
        },
        selection: "nodes { id } pageInfo { hasNextPage endCursor }",
      },
      map: {
        externalId: "id",
        name: "name",
        email: "email",
        active: "active",
        createdAt: "createdAt",
        updatedAt: "updatedAt",
        archivedAt: "archivedAt",
      },
    },
    state: {
      list: {
        operation: "workflowStates",
        variables: {
          first: 100,
          includeArchived: true,
        },
        selection:
          "nodes { id createdAt updatedAt archivedAt name type position team { id } } pageInfo { hasNextPage endCursor }",
      },
      changes: {
        operation: "workflowStates",
        variables: {
          first: 100,
          includeArchived: true,
          orderBy: "updatedAt",
          filter: {
            updatedAt: {
              gte: "{since}",
            },
          },
        },
        selection:
          "nodes { id createdAt updatedAt archivedAt name type position team { id } } pageInfo { hasNextPage endCursor }",
        since: "iso",
      },
      ids: {
        operation: "workflowStates",
        variables: {
          first: 100,
          includeArchived: true,
        },
        selection: "nodes { id } pageInfo { hasNextPage endCursor }",
      },
      map: {
        externalId: "id",
        name: "name",
        type: "type",
        team: "team.id",
        position: "position",
        createdAt: "createdAt",
        updatedAt: "updatedAt",
        archivedAt: "archivedAt",
      },
    },
    label: {
      list: {
        operation: "issueLabels",
        variables: {
          first: 100,
          includeArchived: true,
        },
        selection: "nodes { id createdAt updatedAt archivedAt name team { id } } pageInfo { hasNextPage endCursor }",
      },
      changes: {
        operation: "issueLabels",
        variables: {
          first: 100,
          includeArchived: true,
          orderBy: "updatedAt",
          filter: {
            updatedAt: {
              gte: "{since}",
            },
          },
        },
        selection: "nodes { id createdAt updatedAt archivedAt name team { id } } pageInfo { hasNextPage endCursor }",
        since: "iso",
      },
      ids: {
        operation: "issueLabels",
        variables: {
          first: 100,
          includeArchived: true,
        },
        selection: "nodes { id } pageInfo { hasNextPage endCursor }",
      },
      map: {
        externalId: "id",
        name: "name",
        team: "team.id",
        createdAt: "createdAt",
        updatedAt: "updatedAt",
        archivedAt: "archivedAt",
      },
    },
    project: {
      list: {
        operation: "projects",
        variables: {
          first: 50,
          includeArchived: true,
        },
        selection:
          "nodes { id createdAt updatedAt archivedAt name description url targetDate status { type } lead { id } teams { nodes { id } } } pageInfo { hasNextPage endCursor }",
      },
      changes: {
        operation: "projects",
        variables: {
          first: 50,
          includeArchived: true,
          orderBy: "updatedAt",
          filter: {
            updatedAt: {
              gte: "{since}",
            },
          },
        },
        selection:
          "nodes { id createdAt updatedAt archivedAt name description url targetDate status { type } lead { id } teams { nodes { id } } } pageInfo { hasNextPage endCursor }",
        since: "iso",
      },
      ids: {
        operation: "projects",
        variables: {
          first: 50,
          includeArchived: true,
        },
        selection: "nodes { id } pageInfo { hasNextPage endCursor }",
      },
      map: {
        externalId: "id",
        name: "name",
        description: "description",
        status: "status.type",
        lead: "lead.id",
        teams: {
          each: "teams.nodes",
          id: "id",
        },
        targetDate: "targetDate",
        url: "url",
        createdAt: "createdAt",
        updatedAt: "updatedAt",
        archivedAt: "archivedAt",
      },
    },
    issue: {
      list: {
        operation: "issues",
        variables: {
          first: 50,
          includeArchived: true,
        },
        selection:
          "nodes { id createdAt updatedAt archivedAt identifier title description url priority dueDate completedAt canceledAt state { id } team { id } project { id } assignee { id } creator { id } parent { id } labels { nodes { id } } } pageInfo { hasNextPage endCursor }",
      },
      changes: {
        operation: "issues",
        variables: {
          first: 50,
          includeArchived: true,
          orderBy: "updatedAt",
          filter: {
            updatedAt: {
              gte: "{since}",
            },
          },
        },
        selection:
          "nodes { id createdAt updatedAt archivedAt identifier title description url priority dueDate completedAt canceledAt state { id } team { id } project { id } assignee { id } creator { id } parent { id } labels { nodes { id } } } pageInfo { hasNextPage endCursor }",
        since: "iso",
      },
      ids: {
        operation: "issues",
        variables: {
          first: 50,
          includeArchived: true,
        },
        selection: "nodes { id } pageInfo { hasNextPage endCursor }",
      },
      map: {
        externalId: "id",
        key: "identifier",
        title: "title",
        description: "description",
        state: "state.id",
        team: "team.id",
        project: "project.id",
        assignee: "assignee.id",
        creator: "creator.id",
        labels: {
          each: "labels.nodes",
          id: "id",
        },
        parent: "parent.id",
        priority: "priority",
        dueDate: "dueDate",
        completedAt: "completedAt",
        canceledAt: "canceledAt",
        url: "url",
        createdAt: "createdAt",
        updatedAt: "updatedAt",
        archivedAt: "archivedAt",
      },
    },
    comment: {
      list: {
        operation: "comments",
        variables: {
          first: 100,
          includeArchived: true,
        },
        selection:
          "nodes { id createdAt updatedAt archivedAt body url issue { id } user { id } } pageInfo { hasNextPage endCursor }",
      },
      changes: {
        operation: "comments",
        variables: {
          first: 100,
          includeArchived: true,
          orderBy: "updatedAt",
          filter: {
            updatedAt: {
              gte: "{since}",
            },
          },
        },
        selection:
          "nodes { id createdAt updatedAt archivedAt body url issue { id } user { id } } pageInfo { hasNextPage endCursor }",
        since: "iso",
      },
      ids: {
        operation: "comments",
        variables: {
          first: 100,
          includeArchived: true,
        },
        selection: "nodes { id } pageInfo { hasNextPage endCursor }",
      },
      map: {
        externalId: "id",
        issue: "issue.id",
        body: "body",
        author: "user.id",
        url: "url",
        createdAt: "createdAt",
        updatedAt: "updatedAt",
        archivedAt: "archivedAt",
      },
    },
  },
  self: {
    call: {
      operation: "viewer",
    },
    path: "id",
  },
  writes: {
    issue: {
      create: {
        operation: "issueCreate",
        variables: {
          input: "{values}",
        },
        selection:
          "success issue { id createdAt updatedAt archivedAt identifier title description url priority dueDate completedAt canceledAt state { id } team { id } project { id } assignee { id } creator { id } parent { id } labels { nodes { id } } }",
        items: "issue",
      },
      update: {
        operation: "issueUpdate",
        variables: {
          id: "{id}",
          input: "{values}",
        },
        selection:
          "success issue { id createdAt updatedAt archivedAt identifier title description url priority dueDate completedAt canceledAt state { id } team { id } project { id } assignee { id } creator { id } parent { id } labels { nodes { id } } }",
        items: "issue",
      },
      fields: {
        title: {
          to: "title",
        },
        description: {
          to: "description",
        },
        team: {
          to: "teamId",
        },
        state: {
          to: "stateId",
        },
        assignee: {
          to: "assigneeId",
        },
        priority: {
          to: "priority",
        },
        labels: {
          to: "labelIds",
        },
        project: {
          to: "projectId",
        },
        parent: {
          to: "parentId",
        },
      },
    },
    comment: {
      create: {
        operation: "commentCreate",
        variables: {
          input: "{values}",
        },
        selection: "success comment { id createdAt updatedAt archivedAt body url issue { id } user { id } }",
        items: "comment",
      },
      fields: {
        issue: {
          to: "issueId",
        },
        body: {
          to: "body",
        },
      },
    },
  },
}

import type { TrackerManifestHooks } from "@wirecat/cli-core/tracker"

export const HOOK_OPTIONS: { hooks?: TrackerManifestHooks } = {}
