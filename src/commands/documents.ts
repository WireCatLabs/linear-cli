import { retrying } from "@wirecat/cli-base/http"
import { type ProviderEntry, providerNamed } from "@wirecat/cli-core"
import { serviceApiCall } from "@wirecat/cli-core/cli"
import { documentIngestion } from "@wirecat/cli-core/documents"
import { type DocumentWords, documentLibrary } from "@wirecat/cli-core/documents/cli"
import { Pacer, pacePathFor } from "@wirecat/cli-core/sends"
import { API, configuration } from "../config.js"
import { contextOf, PACE, tokenOf } from "../context.js"
import { isFolder, type LinearFile, linearDocumentSource, ROOT } from "../documents/source.js"
import { IDENTITY, SERVICE } from "../identity.js"
import { serviceFetch } from "./api.js"

// cli-core's registry holds linear with both kinds, so search all lists one Linear account for issues and documents.
const PROVIDER = providerNamed("linear") as ProviderEntry

export const WORDS: DocumentWords = {
  app: IDENTITY.command,
  remote: "linear",
  provider: SERVICE,
  source: PROVIDER.name,
  text: {
    documents: "read the Linear documents synced to this computer",
    documentsList: "list the synced Linear documents with their projects",
    documentArgument: "document id or a search hit's document: ref",
    folders: "choose the Linear projects whose documents sync copies",
    folderArgument: `project id, ${ROOT} for every project, or linear:elsewhere for documents outside projects`,
    folderToAdd: ROOT,
    syncLimit: "how many documents to read from Linear in this run",
  },
}

const external = (id: string) => `${id}.md`

/**
 * cli-core's documents commands over Linear's documents, without their own sync: the tracker's `sync` runs it as its
 * second part, so one `linear sync` copies issues and documents under the one account session start checked.
 */
export const linearDocuments = () =>
  documentLibrary<LinearFile>({
    app: IDENTITY,
    resolveSettings: configuration.resolveSettings,
    provider: PROVIDER,
    words: WORDS,
    service: SERVICE,
    source: (command) => {
      const { environment, env, profile } = contextOf(command)
      const fetch = retrying(serviceFetch(environment), {
        pacer: new Pacer(pacePathFor(IDENTITY, profile, env), PACE),
      })
      return linearDocumentSource(
        serviceApiCall({ manifest: API.manifest, service: API.service, fetch, token: () => tokenOf(command) }),
      )
    },
    ingestion: (store) =>
      documentIngestion<LinearFile>(store, {
        provider: PROVIDER.name,
        command: IDENTITY.command,
        externalId: external,
        catalogInput: (file) => ({
          externalId: external(file.id),
          kind: isFolder(file) ? "folder" : "file",
          name: file.name,
          parents: file.parents.map(external),
          url: file.url,
          mime: file.mime,
          ...(file.createdAt ? { createdAt: file.createdAt } : {}),
          ...(file.modifiedAt ? { modifiedAt: file.modifiedAt } : {}),
        }),
        frontMatter: ({ metadata }) => ({
          source: PROVIDER.name,
          sourceUrl: metadata.url,
          documentId: metadata.id,
          modifiedAt: metadata.modifiedAt ?? null,
        }),
      }),
    idOf: (input) => input.trim(),
    isFolder,
    row: (file, reference) => ({
      id: file.id,
      name: file.name,
      project: file.parents[0] ?? null,
      url: file.url,
      modified_at: file.modifiedAt ?? null,
      reference,
    }),
    textLimit: 1_000_000,
    maxEntries: 10_000,
    coverage: "documents in the chosen projects, or in every project and outside them with linear:all",
  })
