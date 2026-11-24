### Fixed

- **A document moved to Linear's trash leaves the local copy on the next sync.** Trashing a document does not change
  its edit time, so a plain `sync` used to miss it until `sync --rescan`. The sync now also reads the workspace's audit
  log of deleted documents. If Linear refuses the audit log to your key (it needs audit-log access), the sync still
  succeeds and warns `source.deletions-unchecked`; `sync --rescan` then finds the trashed documents. A document you
  restore from the trash comes back only with `sync --rescan`.
