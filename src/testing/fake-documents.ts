import { type GraphqlFakeAnswer, type GraphqlFakeCall, graphqlFake } from "@wirecat/cli-base/codegen"
import { manifestBaseUrl } from "@wirecat/cli-core/cli"
import { API } from "../config.js"
import { definitions } from "../generated/definitions.js"
import { FAKE_API_TOKEN } from "./fake-api.js"

export interface FakeDocument {
  id: string
  title: string
  content: string
  project?: string
  issue?: string
  createdAt: string
  updatedAt: string
  trashed?: boolean
  archivedAt?: string
  hiddenAt?: string
  /** Seen by the signed-in member: a private document of another member is left out of every answer. */
  visible?: boolean
}

export interface FakeProject {
  id: string
  name: string
  createdAt: string
  updatedAt: string
  trashed?: boolean
  archivedAt?: string
}

type Variables = Readonly<Record<string, unknown>>
type Selected = GraphqlFakeCall["selection"]

// The tracker and the documents source ask the same operations for different fields: a row keeps only those asked.
const within = (row: Record<string, unknown>, selection: unknown): Record<string, unknown> =>
  selection && typeof selection === "object"
    ? Object.fromEntries(Object.entries(row).filter(([key]) => key in (selection as object)))
    : row
const nodesOf = (selection: Selected) => (selection as { nodes?: unknown } | undefined)?.nodes

const LINEAR_MOST = 250

/**
 * Linear's documents and projects as the generated schema allows them: graphqlFake refuses a field, a variable or an
 * answer outside the schema, and this fake refuses the filters and paging it does not model, so a call it answers is
 * one it understood. Rows hold only what the selection asked for.
 */
export const fakeLinearDocuments = ({
  viewer = "user-1",
  token = FAKE_API_TOKEN,
  answers = {},
}: {
  viewer?: string
  token?: string
  /** Answers for the other operations, such as the tracker's issues; the rest get a sample of their selection. */
  answers?: Readonly<Record<string, (call: GraphqlFakeCall) => GraphqlFakeAnswer>>
} = {}) => {
  let now = Date.parse("2026-11-01T00:00:00.000Z")
  let signedIn = viewer
  const documents = new Map<string, FakeDocument>()
  const projects = new Map<string, FakeProject>()
  const failing = new Set<string>()
  const unmodelled: string[] = []
  const stamp = () => new Date(now).toISOString()

  const refused = (message: string) => {
    unmodelled.push(message)
    return { errors: [{ message, extensions: { code: "FAKE_UNMODELLED" } }] }
  }

  const page = <T extends { id: string; createdAt: string; updatedAt: string; archivedAt?: string }>(
    name: string,
    rows: T[],
    variables: Variables,
    selected: (row: T) => Record<string, unknown>,
  ) => {
    const allowed = new Set(["first", "after", "includeArchived", "orderBy", "filter"])
    const extra = Object.keys(variables).filter((key) => !allowed.has(key))
    if (extra.length) return refused(`${name}: the fake does not model ${extra.join(", ")}`)
    const first = (variables.first as number | undefined) ?? 50
    if (first < 1 || first > LINEAR_MOST) return refused(`${name}: first must be between 1 and ${LINEAR_MOST}`)
    const key = variables.orderBy === "updatedAt" ? "updatedAt" : "createdAt"
    const kept = rows
      .filter((row) => variables.includeArchived === true || !row.archivedAt)
      .sort((a, b) => b[key].localeCompare(a[key]) || a.id.localeCompare(b.id))
    const after = variables.after as string | undefined
    const start = after === undefined ? 0 : Number(after.replace(/^cursor:/u, ""))
    if (after !== undefined && (!after.startsWith("cursor:") || !Number.isInteger(start)))
      return refused(`${name}: ${after} is no cursor this fake gave`)
    const slice = kept.slice(start, start + first)
    const more = start + first < kept.length
    return {
      data: {
        nodes: slice.map(selected),
        pageInfo: { hasNextPage: more, endCursor: slice.length ? `cursor:${start + slice.length}` : null },
      },
    }
  }

  // Only the filters the source sends are modelled; any other is refused rather than answered unfiltered.
  const filtered = <T extends { updatedAt: string; project?: string }>(name: string, rows: T[], filter: unknown) => {
    if (filter === undefined) return rows
    const { project, updatedAt, ...rest } = filter as {
      project?: { id?: { eq?: string } }
      updatedAt?: { gte?: string }
    }
    if (Object.keys(rest).length) return `${name}: the fake does not model filter ${Object.keys(rest).join(", ")}`
    if (project && (Object.keys(project).join() !== "id" || Object.keys(project.id ?? {}).join() !== "eq"))
      return `${name}: the fake models project only as { id: { eq } }`
    if (updatedAt && Object.keys(updatedAt).join() !== "gte")
      return `${name}: the fake models updatedAt only as { gte }`
    return rows.filter(
      (row) =>
        (!project || row.project === project.id?.eq) &&
        (!updatedAt?.gte || Date.parse(row.updatedAt) >= Date.parse(updatedAt.gte)),
    )
  }

  const documentRow = (one: FakeDocument) => ({
    id: one.id,
    title: one.title,
    content: one.content,
    url: `https://linear.app/fake/document/${one.id}`,
    createdAt: one.createdAt,
    updatedAt: one.updatedAt,
    archivedAt: one.archivedAt ?? null,
    hiddenAt: one.hiddenAt ?? null,
    trashed: one.trashed ?? null,
    project: one.project ? { id: one.project } : null,
    issue: one.issue ? { id: one.issue } : null,
  })
  const projectRow = (one: FakeProject) => ({
    id: one.id,
    name: one.name,
    url: `https://linear.app/fake/project/${one.id}`,
    createdAt: one.createdAt,
    updatedAt: one.updatedAt,
    archivedAt: one.archivedAt ?? null,
    trashed: one.trashed ?? null,
  })
  const visible = () => [...documents.values()].filter((one) => one.visible !== false)
  const failure = (name: string) =>
    failing.has(name) ? { status: 503, errors: [{ message: "unavailable", extensions: { code: "INTERNAL" } }] } : null
  const missing = (what: string) => ({ errors: [{ message: `Entity not found: ${what}`, extensions: {} }] })

  const graphql = graphqlFake({
    operations: API.manifest.operations,
    definitions,
    url: manifestBaseUrl(API.manifest),
    auth: { header: "Authorization", value: token },
    answers: {
      ...answers,
      viewer: () => ({ data: { id: signedIn, name: "Fake Member" } }),
      documents: ({ variables, selection }: GraphqlFakeCall) => {
        const down = failure("documents")
        if (down) return down
        const rows = filtered("documents", visible(), variables.filter)
        const asked = nodesOf(selection)
        return typeof rows === "string"
          ? refused(rows)
          : page("documents", rows, variables, (one) => within(documentRow(one), asked))
      },
      document: ({ variables, selection }: GraphqlFakeCall) => {
        const one = documents.get(String(variables.id))
        return one && one.visible !== false ? { data: within(documentRow(one), selection) } : missing("Document")
      },
      projects: ({ variables, selection }: GraphqlFakeCall) => {
        const rows = filtered("projects", [...projects.values()], variables.filter)
        const asked = nodesOf(selection)
        return typeof rows === "string"
          ? refused(rows)
          : page("projects", rows, variables, (one) => within(projectRow(one), asked))
      },
      project: ({ variables, selection }: GraphqlFakeCall) => {
        const one = projects.get(String(variables.id))
        return one ? { data: within(projectRow(one), selection) } : missing("Project")
      },
    },
  })

  return {
    fetch: graphql.fetch,
    calls: graphql.calls,
    /** Every call the schema or this fake refused; a test that expects none asserts this is empty. */
    get refusals() {
      return [...graphql.refusals, ...unmodelled]
    },
    documents,
    projects,
    now: () => now,
    advance: (ms: number) => {
      now += ms
    },
    addProject: (id: string, name: string, fields: Partial<FakeProject> = {}) => {
      projects.set(id, { id, name, createdAt: stamp(), updatedAt: stamp(), ...fields })
    },
    addDocument: (id: string, fields: Partial<FakeDocument> = {}) => {
      documents.set(id, { id, title: id, content: `# ${id}`, createdAt: stamp(), updatedAt: stamp(), ...fields })
    },
    edit: (id: string, fields: Partial<FakeDocument>) => {
      const one = documents.get(id)
      if (!one) throw new Error(`no fake document ${id}`)
      documents.set(id, { ...one, ...fields, updatedAt: stamp() })
    },
    /** The token now names another member, as a token replaced in the keyring would. */
    signInAs: (id: string) => {
      signedIn = id
    },
    /** Every documents listing answers 503 from now on, until `recover`. */
    fail: (name: "documents") => failing.add(name),
    recover: (name: "documents") => failing.delete(name),
  }
}

export type FakeLinearDocuments = ReturnType<typeof fakeLinearDocuments>
