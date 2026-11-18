# Changelog

Notable changes to `@wirecat/linear-cli`. One section per version, newest first.

## 0.1.0 — 18.11.2026

### Added

- Started from `@wirecat/cli-template` 0.31.0.
- Built from one file, `wirecat.config.ts`, with no hooks.
- **`linear <profile> sync` copies your Linear workspace into WireCat's local store**: teams, users, workflow
  states, labels, projects, issues and comments, archived ones marked. After the first run it reads only what changed,
  and once a day it finds what Linear deleted. The copy belongs to the user whose personal API key signed in, since
  Linear shows each member other teams.
- **`linear <profile> issues`, `projects`, `teams`, `users`, `states` and `labels` read the copy**, offline too.
  `issues assign ENG-12` makes an issue your task: the task points at the issue and copies none of its text.
- **`linear <profile> api` reaches every query and mutation of Linear's GraphQL schema**, one command each; a write
  asks for its permission key, a delete or archive for `linear.delete`.
- Sign in with a Linear personal API key on stdin: `linear <profile> session start`. It is kept in the system
  keyring, never as an argument.
