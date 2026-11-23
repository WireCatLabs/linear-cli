### Added

- **Linear documents, synced beside the issues.** The same `sync` copies them into the local store, and cli-core's
  shared documents commands read them offline: `folders` chooses the projects (`linear:all` for every project and the
  documents outside them), `documents list|show|export|history|context`, `search`, `status`, `changes`, `catalog`,
  and the `tags`, `notes`, `memories`, `facts`, `relationships` and `identities` groups. `linear <profile> search`
  finds them by words and by meaning, and memo's `search all` finds them in the notes lane as kind `document`. Only a
  document Linear put in the trash is removed; an archived, hidden or no longer visible one keeps its text.
- **Issues, projects and comments found by meaning.** `sync --embed` indexes them with a model already downloaded,
  and memo's `search all` then finds them by meaning as well as by words (cli-core 0.730.0).
- **Issues found by other forms of a word and by its start.** `search all` and `issues search` find "invoices" for
  "invoice" and "export" for "exp…" (four letters or more); comments are found by meaning together with their issue's
  key and title, and two sign-ins to one workspace show each issue once (cli-core 0.736.0).
