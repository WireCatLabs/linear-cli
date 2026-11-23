import { CliError } from "@wirecat/cli-base"
import type { ServiceApiCall } from "@wirecat/cli-core/cli"
import type { SourceChange, SourceContent, SourceFile } from "@wirecat/cli-core/documents"
import {
  type DocumentSlots,
  documentSourceFromManifest,
  type ManifestDocumentSource,
} from "@wirecat/cli-core/documents/cli"
import { API } from "../config.js"
import { DOCUMENT_MANIFEST } from "./manifest.js"

/** Every project, and the folder of the documents outside them: the root a profile syncs unless it chose projects. */
export const ROOT = "linear:all"
/** Documents on an issue, an initiative, a team, a cycle, a release or nowhere: Linear lets a document sit outside projects. */
export const ELSEWHERE = "linear:elsewhere"

export interface LinearFile extends SourceFile {
  providerMetadata: { kind: "folder" | "project" | "document" }
}

export type LinearDocumentSource = ManifestDocumentSource<LinearFile> &
  Required<Pick<ManifestDocumentSource<LinearFile>, "startToken" | "changes" | "childrenPage">>

export const isFolder = (file: LinearFile): boolean => file.providerMetadata.kind !== "document"

const FOLDER_MIME = "inode/directory"
// Cli-core's own change feed waits as long: a document saved while the last round was read is in the next.
const OVERLAP_MS = 10 * 60_000
const MOST_PAGES = 100

interface Row {
  id?: unknown
  name?: unknown
  url?: unknown
  createdAt?: unknown
  updatedAt?: unknown
  content?: unknown
  trashed?: unknown
  archivedAt?: unknown
  project?: { id?: unknown } | null
}

const text = (value: unknown) => (typeof value === "string" && value ? value : undefined)
const time = (value: unknown) => {
  const ms = typeof value === "string" ? Date.parse(value) : Number.NaN
  return Number.isFinite(ms) ? new Date(ms).toISOString() : undefined
}

const folder = (id: string, name: string, parents: string[]): LinearFile => ({
  id,
  name,
  mime: FOLDER_MIME,
  parents,
  url: "",
  trashed: false,
  canDownload: false,
  providerMetadata: { kind: "folder" },
})

const ROOT_FOLDER = folder(ROOT, "Linear", [])
const ELSEWHERE_FOLDER = folder(ELSEWHERE, "Not in a project", [ROOT])

// The owner's rule: only a real deletion removes, and only the trash is one. A document missing from a listing may be
// one another member sees, or the listing was short. Linear archives a completed project's documents by itself, and
// hiding "is separate from trashing or archiving" (its schema): both keep their text.
const deleted = (row: Row) => row.trashed === true

const projectFolder = (row: Row): LinearFile => {
  const id = text(row.id)
  if (!id) throw new CliError("invalid_response", "a Linear project came without an id", { reason: "source.no-id" })
  const createdAt = time(row.createdAt)
  const modifiedAt = time(row.updatedAt)
  return {
    ...folder(id, text(row.name)?.trim() || id, [ROOT]),
    url: text(row.url) ?? "",
    // An archived project still holds its documents; only a project in the trash takes them along.
    trashed: row.trashed === true,
    ...(createdAt ? { createdAt } : {}),
    ...(modifiedAt ? { modifiedAt } : {}),
    providerMetadata: { kind: "project" },
  }
}

const listingOf = (answer: unknown, name: string) => {
  const page = answer as { nodes?: unknown; pageInfo?: { hasNextPage?: unknown; endCursor?: unknown } } | null
  // An empty list read from a malformed answer would look like every document gone.
  if (!Array.isArray(page?.nodes))
    throw new CliError("invalid_response", `Linear answered ${name} without its list`, { reason: "source.no-list" })
  const end = text(page.pageInfo?.endCursor)
  return { rows: page.nodes as Row[], ...(page.pageInfo?.hasNextPage === true && end ? { next: end } : {}) }
}

/**
 * Linear's documents for cli-core's documents sync, every request one DOCUMENT_MANIFEST names. Projects are folders
 * under ROOT; documents outside a project sit in ELSEWHERE. The change feed names changed projects too, so a document
 * moved into a new project stays in scope.
 */
export const linearDocumentSource = (
  call: ServiceApiCall,
  { now = Date.now }: { now?: () => number } = {},
): LinearDocumentSource =>
  documentSourceFromManifest<LinearFile>(DOCUMENT_MANIFEST, {
    api: API.manifest,
    call,
    now,
    hooks: ({ read, file }) => {
      // A listing answers each document's text; the sync reads it right after, so the read is saved.
      const listed = new Map<string, { version: string | undefined; markdown: string }>()
      const documentFile = (row: Row): LinearFile => {
        const mapped = file(row)
        return {
          ...mapped,
          mime: "text/markdown",
          parents: [text(row.project?.id) ?? ELSEWHERE],
          trashed: deleted(row),
          canDownload: true,
          providerMetadata: { kind: "document" },
        }
      }
      // Only the rows a listing keeps: text of a row the "Not in a project" filter drops is never read.
      const remember = (rows: Row[], files: LinearFile[]) => {
        const kept = new Map(files.map((one) => [one.id, one]))
        for (const row of rows) {
          const one = kept.get(String(row.id))
          if (one && typeof row.content === "string")
            listed.set(one.id, { version: one.version, markdown: row.content })
        }
        return files
      }
      const page = async (name: string, slots: DocumentSlots) => listingOf(await read(name, slots), name)
      const every = async (name: string, slots: DocumentSlots) => {
        const rows: Row[] = []
        let cursor: string | undefined
        for (let pages = 0; pages < MOST_PAGES; pages++) {
          const listing = await page(name, { ...slots, ...(cursor ? { cursor } : {}) })
          for (const row of listing.rows) rows.push(row)
          if (!listing.next) return rows
          cursor = listing.next
        }
        throw new CliError(
          "invalid_response",
          `more than ${MOST_PAGES} pages of Linear changes since one sync; run sync --rescan`,
          { reason: "source.changes-too-many" },
        )
      }
      const childrenPage = async (id: string, cursor?: string): Promise<{ files: LinearFile[]; cursor?: string }> => {
        const slots = cursor ? { cursor } : {}
        if (id === ROOT) {
          const { rows, next } = await page("projects", slots)
          const files = rows.map(projectFolder)
          return next ? { files, cursor: next } : { files: [...files, ELSEWHERE_FOLDER] }
        }
        const { rows, next } =
          id === ELSEWHERE ? await page("everyDocument", slots) : await page("children", { ...slots, id })
        const files = remember(
          rows,
          rows.map(documentFile).filter((one) => one.parents.includes(id)),
        )
        return next ? { files, cursor: next } : { files }
      }
      return {
        metadata: async (id, known) => {
          if (id === ROOT) return ROOT_FOLDER
          if (id === ELSEWHERE) return ELSEWHERE_FOLDER
          if (known?.providerMetadata.kind === "document") return documentFile((await read("get", { id })) as Row)
          return projectFolder((await read("project", { id })) as Row)
        },
        childrenPage,
        children: async (id) => {
          const files: LinearFile[] = []
          let cursor: string | undefined
          do {
            const listing = await childrenPage(id, cursor)
            for (const one of listing.files) files.push(one)
            cursor = listing.cursor
          } while (cursor)
          return files
        },
        startToken: async () => String(now()),
        changes: async (token) => {
          const from = Number(token)
          if (!Number.isSafeInteger(from))
            throw new CliError("validation_error", `not a change token of Linear: ${token}`, {
              reason: "source.token-invalid",
            })
          const started = now()
          const since = new Date(from - OVERLAP_MS).toISOString()
          // Both lists are read before anything is answered: a round cut short marks nothing.
          const projects = (await every("projectChanges", { since })).map(projectFolder)
          const changed = await every("changes", { since })
          const documents = remember(changed, changed.map(documentFile))
          const items: SourceChange<LinearFile>[] = [...projects, ...documents].map((one) => ({
            id: one.id,
            removed: one.trashed,
            file: one,
          }))
          return { items, cursor: String(started) }
        },
        content: async (id, maxChars, known): Promise<SourceContent<LinearFile>> => {
          const held = listed.get(id)
          listed.delete(id)
          let metadata = known
          let markdown = held?.markdown ?? ""
          if (!known || !held || held.version !== known.version) {
            const row = (await read("content", { id })) as Row
            metadata = known ?? documentFile(row)
            markdown = typeof row.content === "string" ? row.content : ""
          }
          const cut = maxChars === undefined ? markdown : markdown.slice(0, maxChars)
          return { metadata: metadata as LinearFile, markdown: cut, text: cut, tabs: [] }
        },
      }
    },
  }) as LinearDocumentSource
