// A nested list with no size counts as 50 rows of Linear's complexity points; 50 a page stays well under the 10,000 a
// query may cost. https://linear.app/developers/rate-limiting
const page = { first: 50, after: "{cursor}" }
// Linear hides archived rows unless asked: a trashed document must reach the sync to be removed, an archived one to stay.
const all = { ...page, includeArchived: true }
const changed = { orderBy: "updatedAt", filter: { updatedAt: { gte: "{since}" } } }

/**
 * Linear's documents as cli-core's documents source reads them: every call the sync sends. Folders are projects; the
 * hooks in source.ts add the root, the folder of documents outside any project, the parents and what counts as
 * deleted, which a map's one `trashed` path cannot say.
 */
export const DOCUMENT_MANIFEST = {
  provider: "linear",
  // The same account as the tracker's copy (auth.verify in wirecat.config.ts): the profile's account file holds one.
  identity: { operation: "viewer", id: "id" },
  get: {
    operation: "document",
    body: { id: "{id}" },
    map: {
      id: "id",
      name: "title",
      url: "url",
      createdAt: "createdAt",
      modifiedAt: "updatedAt",
      version: "updatedAt",
    },
  },
  children: { operation: "documents", body: { ...all, filter: { project: { id: { eq: "{id}" } } } } },
  changes: { operation: "documents", body: { ...all, ...changed }, since: "iso", time: "updatedAt" },
  // Trashing keeps a document's updatedAt, so the changes listing misses it; only the audit log names it.
  deletions: {
    operation: "auditEntries",
    body: { ...page, filter: { type: { eq: "documentDeleted" }, createdAt: { gte: "{since}" } } },
    since: "iso",
    time: "createdAt",
    id: "metadata.entityId",
  },
  content: { operation: "document", body: { id: "{id}" }, markdown: "content" },
  // A restore from the trash moves no updatedAt and has no audit entry: only a full walk brings the document back.
  rescanEvery: "7d",
  reads: {
    project: { operation: "project", body: { id: "{id}" } },
    projects: { operation: "projects", body: all },
    projectChanges: { operation: "projects", body: { ...all, ...changed } },
    // Linear filters no document by a missing project, so the folder of the rest reads them all and keeps those.
    everyDocument: { operation: "documents", body: all },
  },
} as const
