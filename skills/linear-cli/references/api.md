<!-- Generated from the API manifest and the command tree by pnpm generate. Do not edit. -->

# Linear API

Every operation of the Linear API this CLI offers is a command of its own. Read only the group
you need: `linear skill show api-<group>` prints it, as does the file `api/api-<group>.md` beside
this one. Each command lists its usage and flags as `--help` prints them.

Effects: `read` changes nothing; `write` changes the service; `destructive` deletes or overwrites there.

| Group | Read with | Commands | read | write | destructive |
|---|---|---|---|---|---|
| agent-activity | `linear skill show api-agent-activity` | 3 | 2 | 1 | 0 |
| agent-session | `linear skill show api-agent-session` | 6 | 2 | 4 | 0 |
| agent-skill | `linear skill show api-agent-skill` | 5 | 2 | 2 | 1 |
| application | `linear skill show api-application` | 1 | 1 | 0 | 0 |
| attachment | `linear skill show api-attachment` | 20 | 5 | 14 | 1 |
| audit-entry | `linear skill show api-audit-entry` | 2 | 2 | 0 | 0 |
| comment | `linear skill show api-comment` | 7 | 2 | 4 | 1 |
| custom-view | `linear skill show api-custom-view` | 6 | 3 | 2 | 1 |
| customer | `linear skill show api-customer` | 8 | 2 | 5 | 1 |
| customer-need | `linear skill show api-customer-need` | 8 | 2 | 4 | 2 |
| customer-status | `linear skill show api-customer-status` | 5 | 2 | 2 | 1 |
| customer-tier | `linear skill show api-customer-tier` | 5 | 2 | 2 | 1 |
| cycle | `linear skill show api-cycle` | 7 | 2 | 4 | 1 |
| document | `linear skill show api-document` | 8 | 3 | 4 | 1 |
| document-content-history | `linear skill show api-document-content-history` | 1 | 1 | 0 | 0 |
| email-intake-address | `linear skill show api-email-intake-address` | 7 | 2 | 4 | 1 |
| emoji | `linear skill show api-emoji` | 4 | 2 | 1 | 1 |
| entity-external-link | `linear skill show api-entity-external-link` | 4 | 1 | 2 | 1 |
| external-user | `linear skill show api-external-user` | 2 | 2 | 0 | 0 |
| favorite | `linear skill show api-favorite` | 5 | 2 | 2 | 1 |
| git-automation-state | `linear skill show api-git-automation-state` | 3 | 0 | 2 | 1 |
| git-automation-target-branch | `linear skill show api-git-automation-target-branch` | 3 | 0 | 2 | 1 |
| initiative | `linear skill show api-initiative` | 10 | 3 | 5 | 2 |
| initiative-label | `linear skill show api-initiative-label` | 7 | 2 | 4 | 1 |
| initiative-relation | `linear skill show api-initiative-relation` | 5 | 2 | 2 | 1 |
| initiative-to-project | `linear skill show api-initiative-to-project` | 5 | 2 | 2 | 1 |
| initiative-update | `linear skill show api-initiative-update` | 6 | 1 | 4 | 1 |
| integration | `linear skill show api-integration` | 46 | 4 | 39 | 3 |
| integration-template | `linear skill show api-integration-template` | 4 | 2 | 1 | 1 |
| integrations-settings | `linear skill show api-integrations-settings` | 3 | 1 | 2 | 0 |
| issue | `linear skill show api-issue` | 25 | 10 | 13 | 2 |
| issue-import | `linear skill show api-issue-import` | 11 | 3 | 7 | 1 |
| issue-label | `linear skill show api-issue-label` | 7 | 2 | 4 | 1 |
| issue-relation | `linear skill show api-issue-relation` | 5 | 2 | 2 | 1 |
| issue-to-release | `linear skill show api-issue-to-release` | 5 | 2 | 2 | 1 |
| jira-project | `linear skill show api-jira-project` | 3 | 2 | 1 | 0 |
| mutation | `linear skill show api-mutation` | 13 | 0 | 12 | 1 |
| notification | `linear skill show api-notification` | 13 | 3 | 9 | 1 |
| notification-subscription | `linear skill show api-notification-subscription` | 5 | 2 | 2 | 1 |
| oauth-application | `linear skill show api-oauth-application` | 8 | 3 | 4 | 1 |
| organization | `linear skill show api-organization` | 8 | 2 | 4 | 2 |
| organization-domain | `linear skill show api-organization-domain` | 1 | 0 | 0 | 1 |
| organization-invite | `linear skill show api-organization-invite` | 8 | 3 | 4 | 1 |
| project | `linear skill show api-project` | 12 | 4 | 6 | 2 |
| project-label | `linear skill show api-project-label` | 7 | 2 | 4 | 1 |
| project-milestone | `linear skill show api-project-milestone` | 6 | 2 | 3 | 1 |
| project-relation | `linear skill show api-project-relation` | 5 | 2 | 2 | 1 |
| project-status | `linear skill show api-project-status` | 6 | 2 | 3 | 1 |
| project-update | `linear skill show api-project-update` | 7 | 1 | 4 | 2 |
| push-subscription | `linear skill show api-push-subscription` | 3 | 1 | 1 | 1 |
| query | `linear skill show api-query` | 8 | 8 | 0 | 0 |
| reaction | `linear skill show api-reaction` | 2 | 0 | 1 | 1 |
| release | `linear skill show api-release` | 16 | 5 | 9 | 2 |
| release-note | `linear skill show api-release-note` | 5 | 2 | 2 | 1 |
| release-pipeline | `linear skill show api-release-pipeline` | 8 | 3 | 3 | 2 |
| release-stage | `linear skill show api-release-stage` | 6 | 2 | 3 | 1 |
| roadmap | `linear skill show api-roadmap` | 7 | 2 | 3 | 2 |
| roadmap-to-project | `linear skill show api-roadmap-to-project` | 5 | 2 | 2 | 1 |
| sla-configuration | `linear skill show api-sla-configuration` | 1 | 1 | 0 | 0 |
| team | `linear skill show api-team` | 9 | 3 | 3 | 3 |
| team-membership | `linear skill show api-team-membership` | 5 | 2 | 2 | 1 |
| template | `linear skill show api-template` | 7 | 4 | 2 | 1 |
| time-schedule | `linear skill show api-time-schedule` | 7 | 2 | 4 | 1 |
| triage-responsibility | `linear skill show api-triage-responsibility` | 5 | 2 | 2 | 1 |
| usage-alert | `linear skill show api-usage-alert` | 2 | 2 | 0 | 0 |
| user | `linear skill show api-user` | 19 | 5 | 14 | 0 |
| user-settings | `linear skill show api-user-settings` | 3 | 1 | 2 | 0 |
| view-preferences | `linear skill show api-view-preferences` | 3 | 0 | 2 | 1 |
| webhook | `linear skill show api-webhook` | 6 | 2 | 3 | 1 |
| workflow-state | `linear skill show api-workflow-state` | 5 | 2 | 2 | 1 |
