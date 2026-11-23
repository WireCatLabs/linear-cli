# linear — design

Written by `npx @wirecat/cli-template new`. The agent reads it first, asks the further questions the reference CLI
does not answer, and starts building only after the owner has read it.

## First task

Delete this section once every step is done (WC-DOC-3).

1. If an answer below is missing, ask the owner the [design interview](skills/design-interview/SKILL.md).
2. Learn how a command reaches a service from the sample (`AGENTS.md`, "The sample"), and the domain, the
   store and its commands from the reference CLI below. Build the first command on the sample.
3. Ask the further questions in the interview that the reference CLI does not answer, and write the answers here.
   Build only after the owner has read this page.
4. When the first command reaches the service, rewrite `README.md`, `docs/index.md` and the description in
   `package.json` and `skills/linear-cli/SKILL.md` to say what the tool does and who it is for. Rewrite
   `appMcpCommand`'s `name` and `untrusted` in `src/program.ts` too: name the kinds of outside text the CLI
   carries (WC-MCP-11). Rewrite the tagline and the sign-in texts of `DESKTOP` in `src/identity.ts`, then run
   `pnpm generate`: WireCat Desktop shows them before it installs the tool.

## Answers

- **Category:** issue tracker (issues, projects, teams)
- **Content languages:** en
- **Sign-in:** an API token or key
- **The API:** official API documentation only
- **API description:** a GraphQL schema (introspection)
- **How people filter:** by time, by person, by container (chat, folder, calendar), by words in the text, by status or label
- **Never in the store, a log or the output:** tokens and passwords
- **Untrusted input:** issues and comments others wrote, names and titles set by others, links

## Reference CLI

No reference CLI for this category yet: pick the nearest one with the owner from the Reference CLIs page.

## Content languages

Languages: en.

## Further answers

- **Linear documents go through cli-core's documents (NEED-2807 A, 2026-11-23),** like Notion and Drive, so they
  reach the store, `linear <profile> search`, memo's `search all` and search by meaning. The source is `src/documents/source.ts`, built from
  `src/documents/manifest.ts` with cli-core's `documentSourceFromManifest`; the manifest stays out of
  `wirecat.config.ts`.
  - Folders are projects under `linear:all`. A document outside a project (on an issue, an initiative, a team, a
    cycle, a release, or private) sits in one folder, `linear:elsewhere`: Linear's filter cannot ask for "no
    project", so that folder lists every document and keeps the rest.
  - The account is the viewer's id, the same as the tracker's copy: one member's view never removes another's
    documents.
  - Only `trashed` is a deletion (coordinator's ruling, 2026-11-23, on the owner's "only a real deletion removes").
    An archived document keeps its text: Linear archives a completed project's documents by itself. A hidden one too:
    Linear's schema says hiding "is separate from trashing or archiving". A document missing from a listing keeps
    its text (cli-core marks it unavailable, not deleted).
  - The change feed names the projects changed since the last round, so a document moved into a new project stays
    in scope.
  - One `sync` copies both: cli-core's `documentLibrary` gives the documents commands without their own `sync`, and the
    tracker's `sync` runs theirs as its second part, refused if the documents' account is not the tracker's.

## Open questions for the owner
