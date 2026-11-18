// GENERATED. DO NOT EDIT.
// Source: spec/linear/, checked against provenance.json
// Run: pnpm generate

import { integer, number } from "@wirecat/cli-base/codegen/runtime"
import * as v from "valibot"
import type * as T from "./types.js"

export const AccessKey: v.GenericSchema<unknown, T.AccessKey> = v.looseObject({
  id: v.optional(v.string()),
  createdAt: v.optional(v.string()),
  updatedAt: v.optional(v.string()),
  archivedAt: v.optional(v.nullable(v.string())),
  organization: v.optional(v.lazy(() => Organization)),
  creator: v.optional(v.nullable(v.lazy(() => User))),
  lastUsedAt: v.optional(v.nullable(v.string())),
  revokedAt: v.optional(v.nullable(v.string())),
})

export const AccessKeyRelease: v.GenericSchema<unknown, T.AccessKeyRelease> = v.looseObject({
  id: v.optional(v.string()),
  name: v.optional(v.string()),
  createdAt: v.optional(v.string()),
  commitSha: v.optional(v.nullable(v.string())),
  version: v.optional(v.nullable(v.string())),
  completedAt: v.optional(v.nullable(v.string())),
  archivedAt: v.optional(v.nullable(v.string())),
  stage: v.optional(v.lazy(() => AccessKeyReleaseStage)),
  url: v.optional(v.string()),
})

export const AccessKeyReleasePayload: v.GenericSchema<unknown, T.AccessKeyReleasePayload> = v.looseObject({
  lastSyncId: v.optional(number()),
  release: v.optional(v.lazy(() => AccessKeyRelease)),
  success: v.optional(v.boolean()),
})

export const AccessKeyReleasePipeline: v.GenericSchema<unknown, T.AccessKeyReleasePipeline> = v.looseObject({
  id: v.optional(v.string()),
  includePathPatterns: v.optional(v.array(v.string())),
})

export const AccessKeyReleaseStage: v.GenericSchema<unknown, T.AccessKeyReleaseStage> = v.looseObject({
  name: v.optional(v.string()),
  type: v.optional(v.lazy(() => ReleaseStageType)),
})

export const ActivityCollectionFilter: v.GenericSchema<unknown, T.ActivityCollectionFilter> = v.looseObject({
  id: v.optional(v.nullable(v.lazy(() => IDComparator))),
  createdAt: v.optional(v.nullable(v.lazy(() => DateComparator))),
  updatedAt: v.optional(v.nullable(v.lazy(() => DateComparator))),
  user: v.optional(v.nullable(v.lazy(() => UserFilter))),
  and: v.optional(v.nullable(v.array(v.lazy(() => ActivityCollectionFilter)))),
  or: v.optional(v.nullable(v.array(v.lazy(() => ActivityCollectionFilter)))),
  some: v.optional(v.nullable(v.lazy(() => ActivityFilter))),
  every: v.optional(v.nullable(v.lazy(() => ActivityFilter))),
  length: v.optional(v.nullable(v.lazy(() => NumberComparator))),
})

export const ActivityFilter: v.GenericSchema<unknown, T.ActivityFilter> = v.looseObject({
  id: v.optional(v.nullable(v.lazy(() => IDComparator))),
  createdAt: v.optional(v.nullable(v.lazy(() => DateComparator))),
  updatedAt: v.optional(v.nullable(v.lazy(() => DateComparator))),
  user: v.optional(v.nullable(v.lazy(() => UserFilter))),
  and: v.optional(v.nullable(v.array(v.lazy(() => ActivityFilter)))),
  or: v.optional(v.nullable(v.array(v.lazy(() => ActivityFilter)))),
})

export const ActorBot: v.GenericSchema<unknown, T.ActorBot> = v.looseObject({
  id: v.optional(v.nullable(v.string())),
  type: v.optional(v.string()),
  subType: v.optional(v.nullable(v.string())),
  name: v.optional(v.nullable(v.string())),
  userDisplayName: v.optional(v.nullable(v.string())),
  avatarUrl: v.optional(v.nullable(v.string())),
})

export const AgentActivity: v.GenericSchema<unknown, T.AgentActivity> = v.looseObject({
  id: v.optional(v.string()),
  createdAt: v.optional(v.string()),
  updatedAt: v.optional(v.string()),
  archivedAt: v.optional(v.nullable(v.string())),
  agentSession: v.optional(v.lazy(() => AgentSession)),
  content: v.optional(v.lazy(() => AgentActivityContent)),
  sourceComment: v.optional(v.nullable(v.lazy(() => Comment))),
  user: v.optional(v.lazy(() => User)),
  sourceMetadata: v.optional(v.nullable(v.unknown())),
  signal: v.optional(v.nullable(v.lazy(() => AgentActivitySignal))),
  ephemeral: v.optional(v.boolean()),
  promptAuthor: v.optional(v.nullable(v.lazy(() => User))),
  signalMetadata: v.optional(v.nullable(v.unknown())),
})

export const AgentActivityActionContent: v.GenericSchema<unknown, T.AgentActivityActionContent> = v.looseObject({
  type: v.optional(v.lazy(() => AgentActivityType)),
  action: v.optional(v.string()),
  parameter: v.optional(v.string()),
  result: v.optional(v.nullable(v.string())),
})

export const AgentActivityConnection: v.GenericSchema<unknown, T.AgentActivityConnection> = v.looseObject({
  edges: v.optional(v.array(v.lazy(() => AgentActivityEdge))),
  nodes: v.optional(v.array(v.lazy(() => AgentActivity))),
  pageInfo: v.optional(v.lazy(() => PageInfo)),
})

export const AgentActivityContent: v.GenericSchema<unknown, T.AgentActivityContent> = v.union([
  v.lazy(() => AgentActivityThoughtContent),
  v.lazy(() => AgentActivityActionContent),
  v.lazy(() => AgentActivityResponseContent),
  v.lazy(() => AgentActivityPromptContent),
  v.lazy(() => AgentActivityErrorContent),
  v.lazy(() => AgentActivityElicitationContent),
])

export const AgentActivityCreateInput: v.GenericSchema<unknown, T.AgentActivityCreateInput> = v.looseObject({
  id: v.optional(v.nullable(v.string())),
  agentSessionId: v.string(),
  signal: v.optional(v.nullable(v.lazy(() => AgentActivitySignal))),
  signalMetadata: v.optional(v.nullable(v.unknown())),
  contextualMetadata: v.optional(v.nullable(v.unknown())),
  content: v.unknown(),
  ephemeral: v.optional(v.nullable(v.boolean())),
})

export const AgentActivityEdge: v.GenericSchema<unknown, T.AgentActivityEdge> = v.looseObject({
  node: v.optional(v.lazy(() => AgentActivity)),
  cursor: v.optional(v.string()),
})

export const AgentActivityElicitationContent: v.GenericSchema<unknown, T.AgentActivityElicitationContent> =
  v.looseObject({
    type: v.optional(v.lazy(() => AgentActivityType)),
    body: v.optional(v.string()),
  })

export const AgentActivityErrorContent: v.GenericSchema<unknown, T.AgentActivityErrorContent> = v.looseObject({
  type: v.optional(v.lazy(() => AgentActivityType)),
  body: v.optional(v.string()),
  reasonCode: v.optional(v.nullable(v.string())),
})

export const AgentActivityFilter: v.GenericSchema<unknown, T.AgentActivityFilter> = v.looseObject({
  id: v.optional(v.nullable(v.lazy(() => IDComparator))),
  createdAt: v.optional(v.nullable(v.lazy(() => DateComparator))),
  updatedAt: v.optional(v.nullable(v.lazy(() => DateComparator))),
  agentSessionId: v.optional(v.nullable(v.lazy(() => StringComparator))),
  type: v.optional(v.nullable(v.lazy(() => StringComparator))),
  sourceComment: v.optional(v.nullable(v.lazy(() => NullableCommentFilter))),
  and: v.optional(v.nullable(v.array(v.lazy(() => AgentActivityFilter)))),
  or: v.optional(v.nullable(v.array(v.lazy(() => AgentActivityFilter)))),
})

export const AgentActivityPayload: v.GenericSchema<unknown, T.AgentActivityPayload> = v.looseObject({
  lastSyncId: v.optional(number()),
  agentActivity: v.optional(v.lazy(() => AgentActivity)),
  success: v.optional(v.boolean()),
})

export const AgentActivityPromptContent: v.GenericSchema<unknown, T.AgentActivityPromptContent> = v.looseObject({
  type: v.optional(v.lazy(() => AgentActivityType)),
  body: v.optional(v.string()),
  title: v.optional(v.nullable(v.string())),
})

export const AgentActivityResponseContent: v.GenericSchema<unknown, T.AgentActivityResponseContent> = v.looseObject({
  type: v.optional(v.lazy(() => AgentActivityType)),
  body: v.optional(v.string()),
})

export const AgentActivitySignal: v.GenericSchema<unknown, T.AgentActivitySignal> = v.picklist([
  "stop",
  "continue",
  "auth",
  "select",
])

export const AgentActivityThoughtContent: v.GenericSchema<unknown, T.AgentActivityThoughtContent> = v.looseObject({
  type: v.optional(v.lazy(() => AgentActivityType)),
  body: v.optional(v.string()),
})

export const AgentActivityType: v.GenericSchema<unknown, T.AgentActivityType> = v.picklist([
  "thought",
  "action",
  "response",
  "elicitation",
  "error",
  "prompt",
])

export const AgentSession: v.GenericSchema<unknown, T.AgentSession> = v.looseObject({
  id: v.optional(v.string()),
  createdAt: v.optional(v.string()),
  updatedAt: v.optional(v.string()),
  archivedAt: v.optional(v.nullable(v.string())),
  creator: v.optional(v.nullable(v.lazy(() => User))),
  appUser: v.optional(v.lazy(() => User)),
  comment: v.optional(v.nullable(v.lazy(() => Comment))),
  sourceComment: v.optional(v.nullable(v.lazy(() => Comment))),
  issue: v.optional(v.nullable(v.lazy(() => Issue))),
  slugId: v.optional(v.string()),
  status: v.optional(v.lazy(() => AgentSessionStatus)),
  startedAt: v.optional(v.nullable(v.string())),
  endedAt: v.optional(v.nullable(v.string())),
  dismissedAt: v.optional(v.nullable(v.string())),
  dismissedBy: v.optional(v.nullable(v.lazy(() => User))),
  activities: v.optional(v.lazy(() => AgentActivityConnection)),
  externalLink: v.optional(v.nullable(v.string())),
  summary: v.optional(v.nullable(v.string())),
  sourceMetadata: v.optional(v.nullable(v.unknown())),
  plan: v.optional(v.nullable(v.unknown())),
  context: v.optional(v.unknown()),
  type: v.optional(v.nullable(v.lazy(() => AgentSessionType))),
  url: v.optional(v.nullable(v.string())),
  externalLinks: v.optional(v.array(v.lazy(() => AgentSessionExternalLink))),
  externalUrls: v.optional(v.unknown()),
})

export const AgentSessionConnection: v.GenericSchema<unknown, T.AgentSessionConnection> = v.looseObject({
  edges: v.optional(v.array(v.lazy(() => AgentSessionEdge))),
  nodes: v.optional(v.array(v.lazy(() => AgentSession))),
  pageInfo: v.optional(v.lazy(() => PageInfo)),
})

export const AgentSessionCreateOnComment: v.GenericSchema<unknown, T.AgentSessionCreateOnComment> = v.looseObject({
  commentId: v.string(),
  externalLink: v.optional(v.nullable(v.string())),
  externalUrls: v.optional(v.nullable(v.array(v.lazy(() => AgentSessionExternalUrlInput)))),
})

export const AgentSessionCreateOnIssue: v.GenericSchema<unknown, T.AgentSessionCreateOnIssue> = v.looseObject({
  issueId: v.string(),
  externalLink: v.optional(v.nullable(v.string())),
  externalUrls: v.optional(v.nullable(v.array(v.lazy(() => AgentSessionExternalUrlInput)))),
})

export const AgentSessionEdge: v.GenericSchema<unknown, T.AgentSessionEdge> = v.looseObject({
  node: v.optional(v.lazy(() => AgentSession)),
  cursor: v.optional(v.string()),
})

export const AgentSessionExternalLink: v.GenericSchema<unknown, T.AgentSessionExternalLink> = v.looseObject({
  url: v.optional(v.string()),
  label: v.optional(v.string()),
})

export const AgentSessionExternalUrlInput: v.GenericSchema<unknown, T.AgentSessionExternalUrlInput> = v.looseObject({
  url: v.string(),
  label: v.string(),
})

export const AgentSessionNotification: v.GenericSchema<unknown, T.AgentSessionNotification> = v.looseObject({
  id: v.optional(v.string()),
  createdAt: v.optional(v.string()),
  updatedAt: v.optional(v.string()),
  archivedAt: v.optional(v.nullable(v.string())),
  type: v.optional(v.string()),
  actor: v.optional(v.nullable(v.lazy(() => User))),
  externalUserActor: v.optional(v.nullable(v.lazy(() => ExternalUser))),
  user: v.optional(v.lazy(() => User)),
  readAt: v.optional(v.nullable(v.string())),
  emailedAt: v.optional(v.nullable(v.string())),
  snoozedUntilAt: v.optional(v.nullable(v.string())),
  unsnoozedAt: v.optional(v.nullable(v.string())),
  category: v.optional(v.lazy(() => NotificationCategory)),
  botActor: v.optional(v.nullable(v.lazy(() => ActorBot))),
  agentSessionId: v.optional(v.string()),
  agentActivityId: v.optional(v.nullable(v.string())),
})

export const AgentSessionPayload: v.GenericSchema<unknown, T.AgentSessionPayload> = v.looseObject({
  lastSyncId: v.optional(number()),
  success: v.optional(v.boolean()),
  agentSession: v.optional(v.lazy(() => AgentSession)),
})

export const AgentSessionStatus: v.GenericSchema<unknown, T.AgentSessionStatus> = v.picklist([
  "pending",
  "active",
  "stopping",
  "complete",
  "awaitingInput",
  "error",
  "stale",
])

export const AgentSessionType: v.GenericSchema<unknown, T.AgentSessionType> = v.picklist(["commentThread"])

export const AgentSessionUpdateExternalUrlInput: v.GenericSchema<unknown, T.AgentSessionUpdateExternalUrlInput> =
  v.looseObject({
    externalLink: v.optional(v.nullable(v.string())),
    externalUrls: v.optional(v.nullable(v.array(v.lazy(() => AgentSessionExternalUrlInput)))),
    addedExternalUrls: v.optional(v.nullable(v.array(v.lazy(() => AgentSessionExternalUrlInput)))),
    removedExternalUrls: v.optional(v.nullable(v.array(v.string()))),
  })

export const AgentSessionUpdateInput: v.GenericSchema<unknown, T.AgentSessionUpdateInput> = v.looseObject({
  summary: v.optional(v.nullable(v.string())),
  externalLink: v.optional(v.nullable(v.string())),
  externalUrls: v.optional(v.nullable(v.array(v.lazy(() => AgentSessionExternalUrlInput)))),
  addedExternalUrls: v.optional(v.nullable(v.array(v.lazy(() => AgentSessionExternalUrlInput)))),
  removedExternalUrls: v.optional(v.nullable(v.array(v.string()))),
  plan: v.optional(v.nullable(v.unknown())),
})

export const AgentSkill: v.GenericSchema<unknown, T.AgentSkill> = v.looseObject({
  id: v.optional(v.string()),
  createdAt: v.optional(v.string()),
  updatedAt: v.optional(v.string()),
  archivedAt: v.optional(v.nullable(v.string())),
  teamId: v.optional(v.nullable(v.string())),
  inheritedFrom: v.optional(v.nullable(v.lazy(() => AgentSkill))),
  owner: v.optional(v.lazy(() => User)),
  creator: v.optional(v.lazy(() => User)),
  shared: v.optional(v.boolean()),
  body: v.optional(v.string()),
  description: v.optional(v.nullable(v.string())),
  title: v.optional(v.string()),
  icon: v.optional(v.nullable(v.string())),
  color: v.optional(v.nullable(v.string())),
  lastUpdatedBy: v.optional(v.nullable(v.lazy(() => User))),
  slugId: v.optional(v.string()),
  lastUsedAt: v.optional(v.nullable(v.string())),
  recentUsageCount: v.optional(number()),
})

export const AgentSkillConnection: v.GenericSchema<unknown, T.AgentSkillConnection> = v.looseObject({
  edges: v.optional(v.array(v.lazy(() => AgentSkillEdge))),
  nodes: v.optional(v.array(v.lazy(() => AgentSkill))),
  pageInfo: v.optional(v.lazy(() => PageInfo)),
})

export const AgentSkillCreateInput: v.GenericSchema<unknown, T.AgentSkillCreateInput> = v.looseObject({
  id: v.optional(v.nullable(v.string())),
  teamId: v.optional(v.nullable(v.string())),
  title: v.optional(v.nullable(v.string())),
  body: v.string(),
  icon: v.optional(v.nullable(v.string())),
  color: v.optional(v.nullable(v.string())),
})

export const AgentSkillEdge: v.GenericSchema<unknown, T.AgentSkillEdge> = v.looseObject({
  node: v.optional(v.lazy(() => AgentSkill)),
  cursor: v.optional(v.string()),
})

export const AgentSkillFilter: v.GenericSchema<unknown, T.AgentSkillFilter> = v.looseObject({
  id: v.optional(v.nullable(v.lazy(() => IDComparator))),
  createdAt: v.optional(v.nullable(v.lazy(() => DateComparator))),
  updatedAt: v.optional(v.nullable(v.lazy(() => DateComparator))),
  ownerId: v.optional(v.nullable(v.lazy(() => IDComparator))),
  shared: v.optional(v.nullable(v.lazy(() => BooleanComparator))),
  team: v.optional(v.nullable(v.lazy(() => NullableTeamFilter))),
  and: v.optional(v.nullable(v.array(v.lazy(() => AgentSkillFilter)))),
  or: v.optional(v.nullable(v.array(v.lazy(() => AgentSkillFilter)))),
})

export const AgentSkillPayload: v.GenericSchema<unknown, T.AgentSkillPayload> = v.looseObject({
  lastSyncId: v.optional(number()),
  agentSkill: v.optional(v.lazy(() => AgentSkill)),
  success: v.optional(v.boolean()),
})

export const AgentSkillUpdateInput: v.GenericSchema<unknown, T.AgentSkillUpdateInput> = v.looseObject({
  teamId: v.optional(v.nullable(v.string())),
  body: v.optional(v.nullable(v.string())),
  title: v.optional(v.nullable(v.string())),
  icon: v.optional(v.nullable(v.string())),
  color: v.optional(v.nullable(v.string())),
})

export const AiPromptRules: v.GenericSchema<unknown, T.AiPromptRules> = v.looseObject({
  id: v.optional(v.string()),
  createdAt: v.optional(v.string()),
  updatedAt: v.optional(v.string()),
  archivedAt: v.optional(v.nullable(v.string())),
  updatedBy: v.optional(v.nullable(v.lazy(() => User))),
})

export const AirbyteConfigurationInput: v.GenericSchema<unknown, T.AirbyteConfigurationInput> = v.looseObject({
  apiKey: v.string(),
})

export const Application: v.GenericSchema<unknown, T.Application> = v.looseObject({
  id: v.optional(v.string()),
  clientId: v.optional(v.string()),
  name: v.optional(v.string()),
  description: v.optional(v.nullable(v.string())),
  developer: v.optional(v.string()),
  developerUrl: v.optional(v.string()),
  imageUrl: v.optional(v.nullable(v.string())),
})

export const ApproximateNeedCountSort: v.GenericSchema<unknown, T.ApproximateNeedCountSort> = v.looseObject({
  nulls: v.optional(v.nullable(v.lazy(() => PaginationNulls))),
  order: v.optional(v.nullable(v.lazy(() => PaginationSortOrder))),
})

export const ArchivedIntegrationPayload: v.GenericSchema<unknown, T.ArchivedIntegrationPayload> = v.looseObject({
  id: v.optional(v.string()),
  service: v.optional(v.string()),
  archivedAt: v.optional(v.string()),
  orgLogin: v.optional(v.nullable(v.string())),
  externalOrgId: v.optional(v.nullable(v.string())),
  orgAvatarUrl: v.optional(v.nullable(v.string())),
  enterpriseUrl: v.optional(v.nullable(v.string())),
  codeAccess: v.optional(v.nullable(v.boolean())),
})

export const ArchivePayload: v.GenericSchema<unknown, T.ArchivePayload> = v.looseObject({
  lastSyncId: v.optional(number()),
  success: v.optional(v.boolean()),
})

export const ArchiveResponse: v.GenericSchema<unknown, T.ArchiveResponse> = v.looseObject({
  archive: v.optional(v.string()),
  totalCount: v.optional(number()),
  databaseVersion: v.optional(number()),
  includesDependencies: v.optional(v.array(v.string())),
})

export const AsksChannelConnectPayload: v.GenericSchema<unknown, T.AsksChannelConnectPayload> = v.looseObject({
  lastSyncId: v.optional(number()),
  integration: v.optional(v.nullable(v.lazy(() => Integration))),
  success: v.optional(v.boolean()),
  gitHub: v.optional(v.nullable(v.lazy(() => GitHubIntegrationConnectDetails))),
  mapping: v.optional(v.lazy(() => SlackChannelNameMapping)),
  addBot: v.optional(v.boolean()),
})

export const AssigneeSort: v.GenericSchema<unknown, T.AssigneeSort> = v.looseObject({
  nulls: v.optional(v.nullable(v.lazy(() => PaginationNulls))),
  order: v.optional(v.nullable(v.lazy(() => PaginationSortOrder))),
})

export const Attachment: v.GenericSchema<unknown, T.Attachment> = v.looseObject({
  id: v.optional(v.string()),
  createdAt: v.optional(v.string()),
  updatedAt: v.optional(v.string()),
  archivedAt: v.optional(v.nullable(v.string())),
  title: v.optional(v.string()),
  subtitle: v.optional(v.nullable(v.string())),
  url: v.optional(v.string()),
  creator: v.optional(v.nullable(v.lazy(() => User))),
  externalUserCreator: v.optional(v.nullable(v.lazy(() => ExternalUser))),
  metadata: v.optional(v.unknown()),
  source: v.optional(v.nullable(v.unknown())),
  sourceType: v.optional(v.nullable(v.string())),
  groupBySource: v.optional(v.boolean()),
  originalIssue: v.optional(v.nullable(v.lazy(() => Issue))),
  issue: v.optional(v.lazy(() => Issue)),
  bodyData: v.optional(v.nullable(v.string())),
})

export const AttachmentCollectionFilter: v.GenericSchema<unknown, T.AttachmentCollectionFilter> = v.looseObject({
  id: v.optional(v.nullable(v.lazy(() => IDComparator))),
  createdAt: v.optional(v.nullable(v.lazy(() => DateComparator))),
  updatedAt: v.optional(v.nullable(v.lazy(() => DateComparator))),
  title: v.optional(v.nullable(v.lazy(() => StringComparator))),
  subtitle: v.optional(v.nullable(v.lazy(() => NullableStringComparator))),
  url: v.optional(v.nullable(v.lazy(() => StringComparator))),
  creator: v.optional(v.nullable(v.lazy(() => NullableUserFilter))),
  sourceType: v.optional(v.nullable(v.lazy(() => SourceTypeComparator))),
  and: v.optional(v.nullable(v.array(v.lazy(() => AttachmentCollectionFilter)))),
  or: v.optional(v.nullable(v.array(v.lazy(() => AttachmentCollectionFilter)))),
  some: v.optional(v.nullable(v.lazy(() => AttachmentFilter))),
  every: v.optional(v.nullable(v.lazy(() => AttachmentFilter))),
  length: v.optional(v.nullable(v.lazy(() => NumberComparator))),
})

export const AttachmentConnection: v.GenericSchema<unknown, T.AttachmentConnection> = v.looseObject({
  edges: v.optional(v.array(v.lazy(() => AttachmentEdge))),
  nodes: v.optional(v.array(v.lazy(() => Attachment))),
  pageInfo: v.optional(v.lazy(() => PageInfo)),
})

export const AttachmentCreateInput: v.GenericSchema<unknown, T.AttachmentCreateInput> = v.looseObject({
  id: v.optional(v.nullable(v.string())),
  title: v.string(),
  subtitle: v.optional(v.nullable(v.string())),
  url: v.string(),
  issueId: v.string(),
  iconUrl: v.optional(v.nullable(v.string())),
  metadata: v.optional(v.nullable(v.unknown())),
  groupBySource: v.optional(v.nullable(v.boolean())),
  commentBody: v.optional(v.nullable(v.string())),
  createAsUser: v.optional(v.nullable(v.string())),
  displayIconUrl: v.optional(v.nullable(v.string())),
})

export const AttachmentEdge: v.GenericSchema<unknown, T.AttachmentEdge> = v.looseObject({
  node: v.optional(v.lazy(() => Attachment)),
  cursor: v.optional(v.string()),
})

export const AttachmentFilter: v.GenericSchema<unknown, T.AttachmentFilter> = v.looseObject({
  id: v.optional(v.nullable(v.lazy(() => IDComparator))),
  createdAt: v.optional(v.nullable(v.lazy(() => DateComparator))),
  updatedAt: v.optional(v.nullable(v.lazy(() => DateComparator))),
  title: v.optional(v.nullable(v.lazy(() => StringComparator))),
  subtitle: v.optional(v.nullable(v.lazy(() => NullableStringComparator))),
  url: v.optional(v.nullable(v.lazy(() => StringComparator))),
  creator: v.optional(v.nullable(v.lazy(() => NullableUserFilter))),
  sourceType: v.optional(v.nullable(v.lazy(() => SourceTypeComparator))),
  and: v.optional(v.nullable(v.array(v.lazy(() => AttachmentFilter)))),
  or: v.optional(v.nullable(v.array(v.lazy(() => AttachmentFilter)))),
})

export const AttachmentPayload: v.GenericSchema<unknown, T.AttachmentPayload> = v.looseObject({
  lastSyncId: v.optional(number()),
  attachment: v.optional(v.lazy(() => Attachment)),
  success: v.optional(v.boolean()),
})

export const AttachmentSourcesPayload: v.GenericSchema<unknown, T.AttachmentSourcesPayload> = v.looseObject({
  sources: v.optional(v.unknown()),
})

export const AttachmentUpdateInput: v.GenericSchema<unknown, T.AttachmentUpdateInput> = v.looseObject({
  title: v.string(),
  subtitle: v.optional(v.nullable(v.string())),
  metadata: v.optional(v.nullable(v.unknown())),
  iconUrl: v.optional(v.nullable(v.string())),
})

export const AuditEntry: v.GenericSchema<unknown, T.AuditEntry> = v.looseObject({
  id: v.optional(v.string()),
  createdAt: v.optional(v.string()),
  updatedAt: v.optional(v.string()),
  archivedAt: v.optional(v.nullable(v.string())),
  type: v.optional(v.string()),
  organization: v.optional(v.nullable(v.lazy(() => Organization))),
  actor: v.optional(v.nullable(v.lazy(() => User))),
  actorId: v.optional(v.nullable(v.string())),
  ip: v.optional(v.nullable(v.string())),
  countryCode: v.optional(v.nullable(v.string())),
  metadata: v.optional(v.nullable(v.unknown())),
  requestInformation: v.optional(v.nullable(v.unknown())),
})

export const AuditEntryConnection: v.GenericSchema<unknown, T.AuditEntryConnection> = v.looseObject({
  edges: v.optional(v.array(v.lazy(() => AuditEntryEdge))),
  nodes: v.optional(v.array(v.lazy(() => AuditEntry))),
  pageInfo: v.optional(v.lazy(() => PageInfo)),
})

export const AuditEntryEdge: v.GenericSchema<unknown, T.AuditEntryEdge> = v.looseObject({
  node: v.optional(v.lazy(() => AuditEntry)),
  cursor: v.optional(v.string()),
})

export const AuditEntryFilter: v.GenericSchema<unknown, T.AuditEntryFilter> = v.looseObject({
  id: v.optional(v.nullable(v.lazy(() => IDComparator))),
  createdAt: v.optional(v.nullable(v.lazy(() => DateComparator))),
  updatedAt: v.optional(v.nullable(v.lazy(() => DateComparator))),
  type: v.optional(v.nullable(v.lazy(() => StringComparator))),
  ip: v.optional(v.nullable(v.lazy(() => StringComparator))),
  countryCode: v.optional(v.nullable(v.lazy(() => StringComparator))),
  entityId: v.optional(v.nullable(v.lazy(() => StringComparator))),
  entityType: v.optional(v.nullable(v.lazy(() => StringComparator))),
  entityIdentifier: v.optional(v.nullable(v.lazy(() => StringComparator))),
  actor: v.optional(v.nullable(v.lazy(() => NullableUserFilter))),
  and: v.optional(v.nullable(v.array(v.lazy(() => AuditEntryFilter)))),
  or: v.optional(v.nullable(v.array(v.lazy(() => AuditEntryFilter)))),
})

export const AuditEntryType: v.GenericSchema<unknown, T.AuditEntryType> = v.looseObject({
  type: v.optional(v.string()),
  description: v.optional(v.string()),
})

export const AuthenticationSessionResponse: v.GenericSchema<unknown, T.AuthenticationSessionResponse> = v.looseObject({
  createdAt: v.optional(v.string()),
  id: v.optional(v.string()),
  type: v.optional(v.lazy(() => AuthenticationSessionType)),
  ip: v.optional(v.nullable(v.string())),
  locationCountry: v.optional(v.nullable(v.string())),
  locationCountryCode: v.optional(v.nullable(v.string())),
  countryCodes: v.optional(v.array(v.string())),
  locationRegionCode: v.optional(v.nullable(v.string())),
  locationCity: v.optional(v.nullable(v.string())),
  userAgent: v.optional(v.nullable(v.string())),
  browserType: v.optional(v.nullable(v.string())),
  service: v.optional(v.nullable(v.string())),
  lastActiveAt: v.optional(v.nullable(v.string())),
  updatedAt: v.optional(v.string()),
  location: v.optional(v.nullable(v.string())),
  operatingSystem: v.optional(v.nullable(v.string())),
  client: v.optional(v.nullable(v.string())),
  name: v.optional(v.string()),
  detailedName: v.optional(v.string()),
  isCurrentSession: v.optional(v.boolean()),
})

export const AuthenticationSessionType: v.GenericSchema<unknown, T.AuthenticationSessionType> = v.picklist([
  "web",
  "desktop",
  "ios",
  "android",
])

export const AuthOrganization: v.GenericSchema<unknown, T.AuthOrganization> = v.looseObject({
  createdAt: v.optional(v.string()),
  id: v.optional(v.string()),
  name: v.optional(v.string()),
  enabled: v.optional(v.boolean()),
  urlKey: v.optional(v.string()),
  previousUrlKeys: v.optional(v.array(v.string())),
  logoUrl: v.optional(v.nullable(v.string())),
  deletionRequestedAt: v.optional(v.nullable(v.string())),
  releaseChannel: v.optional(v.lazy(() => ReleaseChannel)),
  samlEnabled: v.optional(v.boolean()),
  allowedAuthServices: v.optional(v.array(v.string())),
  authSettings: v.optional(v.unknown()),
  scimEnabled: v.optional(v.boolean()),
  serviceId: v.optional(v.string()),
  region: v.optional(v.string()),
  cell: v.optional(v.string()),
  approximateUserCount: v.optional(number()),
  hideNonPrimaryOrganizations: v.optional(v.boolean()),
  userCount: v.optional(v.nullable(number())),
})

export const AuthResolverResponse: v.GenericSchema<unknown, T.AuthResolverResponse> = v.looseObject({
  id: v.optional(v.string()),
  email: v.optional(v.string()),
  allowDomainAccess: v.optional(v.nullable(v.boolean())),
  users: v.optional(v.array(v.lazy(() => AuthUser))),
  lockedUsers: v.optional(v.array(v.lazy(() => AuthUser))),
  availableOrganizations: v.optional(v.nullable(v.array(v.lazy(() => AuthOrganization)))),
  lockedOrganizations: v.optional(v.nullable(v.array(v.lazy(() => AuthOrganization)))),
  lastUsedOrganizationId: v.optional(v.nullable(v.string())),
  service: v.optional(v.nullable(v.string())),
  token: v.optional(v.nullable(v.string())),
})

export const AuthUser: v.GenericSchema<unknown, T.AuthUser> = v.looseObject({
  createdAt: v.optional(v.string()),
  id: v.optional(v.string()),
  name: v.optional(v.string()),
  displayName: v.optional(v.string()),
  email: v.optional(v.string()),
  avatarUrl: v.optional(v.nullable(v.string())),
  role: v.optional(v.lazy(() => UserRoleType)),
  oauthClientId: v.optional(v.nullable(v.string())),
  active: v.optional(v.boolean()),
  userAccountId: v.optional(v.string()),
  organization: v.optional(v.lazy(() => AuthOrganization)),
})

export const BooleanComparator: v.GenericSchema<unknown, T.BooleanComparator> = v.looseObject({
  eq: v.optional(v.nullable(v.boolean())),
  neq: v.optional(v.nullable(v.boolean())),
})

export const CandidateRepository: v.GenericSchema<unknown, T.CandidateRepository> = v.looseObject({
  repositoryFullName: v.string(),
  hostname: v.string(),
})

export const CodeRepository: v.GenericSchema<unknown, T.CodeRepository> = v.looseObject({
  id: v.optional(v.string()),
  createdAt: v.optional(v.string()),
  updatedAt: v.optional(v.string()),
  archivedAt: v.optional(v.nullable(v.string())),
  owner: v.optional(v.string()),
  name: v.optional(v.string()),
  externalRepositoryId: v.optional(v.string()),
  externalOwnerId: v.optional(v.string()),
  visibility: v.optional(v.string()),
  baseUrl: v.optional(v.string()),
  defaultBranch: v.optional(v.string()),
  fullPath: v.optional(v.string()),
})

export const CodingSessionsDisabledReason: v.GenericSchema<unknown, T.CodingSessionsDisabledReason> = v.picklist([
  "CODING_SESSIONS_DISABLED",
  "TRUSTED_EXTERNAL_SOURCES_UNAVAILABLE",
  "APP_NOT_TRUSTED",
])

export const Comment: v.GenericSchema<unknown, T.Comment> = v.looseObject({
  id: v.optional(v.string()),
  createdAt: v.optional(v.string()),
  updatedAt: v.optional(v.string()),
  archivedAt: v.optional(v.nullable(v.string())),
  body: v.optional(v.string()),
  issue: v.optional(v.nullable(v.lazy(() => Issue))),
  issueId: v.optional(v.nullable(v.string())),
  documentContent: v.optional(v.nullable(v.lazy(() => DocumentContent))),
  documentContentId: v.optional(v.nullable(v.string())),
  projectUpdate: v.optional(v.nullable(v.lazy(() => ProjectUpdate))),
  projectUpdateId: v.optional(v.nullable(v.string())),
  initiativeUpdate: v.optional(v.nullable(v.lazy(() => InitiativeUpdate))),
  initiativeUpdateId: v.optional(v.nullable(v.string())),
  project: v.optional(v.nullable(v.lazy(() => Project))),
  projectId: v.optional(v.nullable(v.string())),
  initiative: v.optional(v.nullable(v.lazy(() => Initiative))),
  initiativeId: v.optional(v.nullable(v.string())),
  parent: v.optional(v.nullable(v.lazy(() => Comment))),
  parentId: v.optional(v.nullable(v.string())),
  resolvingUser: v.optional(v.nullable(v.lazy(() => User))),
  resolvedAt: v.optional(v.nullable(v.string())),
  resolvingComment: v.optional(v.nullable(v.lazy(() => Comment))),
  resolvingCommentId: v.optional(v.nullable(v.string())),
  user: v.optional(v.nullable(v.lazy(() => User))),
  externalUser: v.optional(v.nullable(v.lazy(() => ExternalUser))),
  editedAt: v.optional(v.nullable(v.string())),
  quotedText: v.optional(v.nullable(v.string())),
  reactionData: v.optional(v.unknown()),
  url: v.optional(v.string()),
  children: v.optional(v.lazy(() => CommentConnection)),
  agentSession: v.optional(v.nullable(v.lazy(() => AgentSession))),
  createdIssues: v.optional(v.lazy(() => IssueConnection)),
  botActor: v.optional(v.nullable(v.lazy(() => ActorBot))),
  onBehalfOf: v.optional(v.nullable(v.lazy(() => User))),
  externalThread: v.optional(v.nullable(v.lazy(() => SyncedExternalThread))),
  reactions: v.optional(v.array(v.lazy(() => Reaction))),
  syncedWith: v.optional(v.nullable(v.array(v.lazy(() => ExternalEntityInfo)))),
})

export const CommentCollectionFilter: v.GenericSchema<unknown, T.CommentCollectionFilter> = v.looseObject({
  id: v.optional(v.nullable(v.lazy(() => IDComparator))),
  createdAt: v.optional(v.nullable(v.lazy(() => DateComparator))),
  updatedAt: v.optional(v.nullable(v.lazy(() => DateComparator))),
  body: v.optional(v.nullable(v.lazy(() => StringComparator))),
  user: v.optional(v.nullable(v.lazy(() => UserFilter))),
  issue: v.optional(v.nullable(v.lazy(() => NullableIssueFilter))),
  projectUpdate: v.optional(v.nullable(v.lazy(() => NullableProjectUpdateFilter))),
  initiativeUpdate: v.optional(v.nullable(v.lazy(() => NullableInitiativeUpdateFilter))),
  parent: v.optional(v.nullable(v.lazy(() => NullableCommentFilter))),
  documentContent: v.optional(v.nullable(v.lazy(() => NullableDocumentContentFilter))),
  project: v.optional(v.nullable(v.lazy(() => NullableProjectFilter))),
  initiative: v.optional(v.nullable(v.lazy(() => NullableInitiativeFilter))),
  reactions: v.optional(v.nullable(v.lazy(() => ReactionCollectionFilter))),
  needs: v.optional(v.nullable(v.lazy(() => CustomerNeedCollectionFilter))),
  and: v.optional(v.nullable(v.array(v.lazy(() => CommentCollectionFilter)))),
  or: v.optional(v.nullable(v.array(v.lazy(() => CommentCollectionFilter)))),
  some: v.optional(v.nullable(v.lazy(() => CommentFilter))),
  every: v.optional(v.nullable(v.lazy(() => CommentFilter))),
  length: v.optional(v.nullable(v.lazy(() => NumberComparator))),
})

export const CommentConnection: v.GenericSchema<unknown, T.CommentConnection> = v.looseObject({
  edges: v.optional(v.array(v.lazy(() => CommentEdge))),
  nodes: v.optional(v.array(v.lazy(() => Comment))),
  pageInfo: v.optional(v.lazy(() => PageInfo)),
})

export const CommentCreateInput: v.GenericSchema<unknown, T.CommentCreateInput> = v.looseObject({
  id: v.optional(v.nullable(v.string())),
  body: v.optional(v.nullable(v.string())),
  issueId: v.optional(v.nullable(v.string())),
  projectUpdateId: v.optional(v.nullable(v.string())),
  initiativeUpdateId: v.optional(v.nullable(v.string())),
  postId: v.optional(v.nullable(v.string())),
  documentContentId: v.optional(v.nullable(v.string())),
  projectId: v.optional(v.nullable(v.string())),
  initiativeId: v.optional(v.nullable(v.string())),
  parentId: v.optional(v.nullable(v.string())),
  createAsUser: v.optional(v.nullable(v.string())),
  displayIconUrl: v.optional(v.nullable(v.string())),
  createdAt: v.optional(v.nullable(v.string())),
  doNotSubscribeToIssue: v.optional(v.nullable(v.boolean())),
  createOnSyncedSlackThread: v.optional(v.nullable(v.boolean())),
  quotedText: v.optional(v.nullable(v.string())),
})

export const CommentEdge: v.GenericSchema<unknown, T.CommentEdge> = v.looseObject({
  node: v.optional(v.lazy(() => Comment)),
  cursor: v.optional(v.string()),
})

export const CommentFilter: v.GenericSchema<unknown, T.CommentFilter> = v.looseObject({
  id: v.optional(v.nullable(v.lazy(() => IDComparator))),
  createdAt: v.optional(v.nullable(v.lazy(() => DateComparator))),
  updatedAt: v.optional(v.nullable(v.lazy(() => DateComparator))),
  body: v.optional(v.nullable(v.lazy(() => StringComparator))),
  user: v.optional(v.nullable(v.lazy(() => UserFilter))),
  issue: v.optional(v.nullable(v.lazy(() => NullableIssueFilter))),
  projectUpdate: v.optional(v.nullable(v.lazy(() => NullableProjectUpdateFilter))),
  initiativeUpdate: v.optional(v.nullable(v.lazy(() => NullableInitiativeUpdateFilter))),
  parent: v.optional(v.nullable(v.lazy(() => NullableCommentFilter))),
  documentContent: v.optional(v.nullable(v.lazy(() => NullableDocumentContentFilter))),
  project: v.optional(v.nullable(v.lazy(() => NullableProjectFilter))),
  initiative: v.optional(v.nullable(v.lazy(() => NullableInitiativeFilter))),
  reactions: v.optional(v.nullable(v.lazy(() => ReactionCollectionFilter))),
  needs: v.optional(v.nullable(v.lazy(() => CustomerNeedCollectionFilter))),
  and: v.optional(v.nullable(v.array(v.lazy(() => CommentFilter)))),
  or: v.optional(v.nullable(v.array(v.lazy(() => CommentFilter)))),
})

export const CommentPayload: v.GenericSchema<unknown, T.CommentPayload> = v.looseObject({
  lastSyncId: v.optional(number()),
  comment: v.optional(v.lazy(() => Comment)),
  success: v.optional(v.boolean()),
})

export const CommentUpdateInput: v.GenericSchema<unknown, T.CommentUpdateInput> = v.looseObject({
  body: v.optional(v.nullable(v.string())),
  quotedText: v.optional(v.nullable(v.string())),
})

export const CompletedAtSort: v.GenericSchema<unknown, T.CompletedAtSort> = v.looseObject({
  nulls: v.optional(v.nullable(v.lazy(() => PaginationNulls))),
  order: v.optional(v.nullable(v.lazy(() => PaginationSortOrder))),
})

export const ContactCreateInput: v.GenericSchema<unknown, T.ContactCreateInput> = v.looseObject({
  type: v.string(),
  message: v.string(),
  operatingSystem: v.optional(v.nullable(v.string())),
  browser: v.optional(v.nullable(v.string())),
  device: v.optional(v.nullable(v.string())),
  clientVersion: v.optional(v.nullable(v.string())),
  disappointmentRating: v.optional(v.nullable(integer())),
})

export const ContactPayload: v.GenericSchema<unknown, T.ContactPayload> = v.looseObject({
  success: v.optional(v.boolean()),
})

export const ContentComparator: v.GenericSchema<unknown, T.ContentComparator> = v.looseObject({
  contains: v.optional(v.nullable(v.string())),
  notContains: v.optional(v.nullable(v.string())),
})

export const ContextViewType: v.GenericSchema<unknown, T.ContextViewType> = v.picklist([
  "activeIssues",
  "activeCycle",
  "upcomingCycle",
  "backlog",
  "triage",
])

export const CreateCsvExportReportPayload: v.GenericSchema<unknown, T.CreateCsvExportReportPayload> = v.looseObject({
  success: v.optional(v.boolean()),
})

export const CreatedAtSort: v.GenericSchema<unknown, T.CreatedAtSort> = v.looseObject({
  nulls: v.optional(v.nullable(v.lazy(() => PaginationNulls))),
  order: v.optional(v.nullable(v.lazy(() => PaginationSortOrder))),
})

export const Customer: v.GenericSchema<unknown, T.Customer> = v.looseObject({
  id: v.optional(v.string()),
  createdAt: v.optional(v.string()),
  updatedAt: v.optional(v.string()),
  archivedAt: v.optional(v.nullable(v.string())),
  name: v.optional(v.string()),
  logoUrl: v.optional(v.nullable(v.string())),
  domains: v.optional(v.array(v.string())),
  externalIds: v.optional(v.array(v.string())),
  slackChannelId: v.optional(v.nullable(v.string())),
  owner: v.optional(v.nullable(v.lazy(() => User))),
  status: v.optional(v.lazy(() => CustomerStatus)),
  revenue: v.optional(v.nullable(integer())),
  size: v.optional(v.nullable(number())),
  tier: v.optional(v.nullable(v.lazy(() => CustomerTier))),
  approximateNeedCount: v.optional(number()),
  slugId: v.optional(v.string()),
  mainSourceId: v.optional(v.nullable(v.string())),
  needs: v.optional(v.array(v.lazy(() => CustomerNeed))),
  integration: v.optional(v.nullable(v.lazy(() => Integration))),
  url: v.optional(v.string()),
})

export const CustomerConnection: v.GenericSchema<unknown, T.CustomerConnection> = v.looseObject({
  edges: v.optional(v.array(v.lazy(() => CustomerEdge))),
  nodes: v.optional(v.array(v.lazy(() => Customer))),
  pageInfo: v.optional(v.lazy(() => PageInfo)),
})

export const CustomerCountSort: v.GenericSchema<unknown, T.CustomerCountSort> = v.looseObject({
  nulls: v.optional(v.nullable(v.lazy(() => PaginationNulls))),
  order: v.optional(v.nullable(v.lazy(() => PaginationSortOrder))),
})

export const CustomerCreatedAtSort: v.GenericSchema<unknown, T.CustomerCreatedAtSort> = v.looseObject({
  nulls: v.optional(v.nullable(v.lazy(() => PaginationNulls))),
  order: v.optional(v.nullable(v.lazy(() => PaginationSortOrder))),
})

export const CustomerCreateInput: v.GenericSchema<unknown, T.CustomerCreateInput> = v.looseObject({
  id: v.optional(v.nullable(v.string())),
  name: v.string(),
  domains: v.optional(v.nullable(v.array(v.string()))),
  externalIds: v.optional(v.nullable(v.array(v.string()))),
  slackChannelId: v.optional(v.nullable(v.string())),
  ownerId: v.optional(v.nullable(v.string())),
  statusId: v.optional(v.nullable(v.string())),
  revenue: v.optional(v.nullable(integer())),
  size: v.optional(v.nullable(integer())),
  tierId: v.optional(v.nullable(v.string())),
  logoUrl: v.optional(v.nullable(v.string())),
  mainSourceId: v.optional(v.nullable(v.string())),
})

export const CustomerEdge: v.GenericSchema<unknown, T.CustomerEdge> = v.looseObject({
  node: v.optional(v.lazy(() => Customer)),
  cursor: v.optional(v.string()),
})

export const CustomerFilter: v.GenericSchema<unknown, T.CustomerFilter> = v.looseObject({
  id: v.optional(v.nullable(v.lazy(() => IDComparator))),
  createdAt: v.optional(v.nullable(v.lazy(() => DateComparator))),
  updatedAt: v.optional(v.nullable(v.lazy(() => DateComparator))),
  name: v.optional(v.nullable(v.lazy(() => StringComparator))),
  slackChannelId: v.optional(v.nullable(v.lazy(() => StringComparator))),
  domains: v.optional(v.nullable(v.lazy(() => StringArrayComparator))),
  externalIds: v.optional(v.nullable(v.lazy(() => StringArrayComparator))),
  owner: v.optional(v.nullable(v.lazy(() => NullableUserFilter))),
  needs: v.optional(v.nullable(v.lazy(() => CustomerNeedCollectionFilter))),
  revenue: v.optional(v.nullable(v.lazy(() => NumberComparator))),
  size: v.optional(v.nullable(v.lazy(() => NumberComparator))),
  status: v.optional(v.nullable(v.lazy(() => CustomerStatusFilter))),
  tier: v.optional(v.nullable(v.lazy(() => CustomerTierFilter))),
  and: v.optional(v.nullable(v.array(v.lazy(() => CustomerFilter)))),
  or: v.optional(v.nullable(v.array(v.lazy(() => CustomerFilter)))),
})

export const CustomerImportantCountSort: v.GenericSchema<unknown, T.CustomerImportantCountSort> = v.looseObject({
  nulls: v.optional(v.nullable(v.lazy(() => PaginationNulls))),
  order: v.optional(v.nullable(v.lazy(() => PaginationSortOrder))),
})

export const CustomerNeed: v.GenericSchema<unknown, T.CustomerNeed> = v.looseObject({
  id: v.optional(v.string()),
  createdAt: v.optional(v.string()),
  updatedAt: v.optional(v.string()),
  archivedAt: v.optional(v.nullable(v.string())),
  customer: v.optional(v.nullable(v.lazy(() => Customer))),
  issue: v.optional(v.nullable(v.lazy(() => Issue))),
  project: v.optional(v.nullable(v.lazy(() => Project))),
  comment: v.optional(v.nullable(v.lazy(() => Comment))),
  attachment: v.optional(v.nullable(v.lazy(() => Attachment))),
  projectAttachment: v.optional(v.nullable(v.lazy(() => ProjectAttachment))),
  priority: v.optional(number()),
  body: v.optional(v.nullable(v.string())),
  creator: v.optional(v.nullable(v.lazy(() => User))),
  originalIssue: v.optional(v.nullable(v.lazy(() => Issue))),
  url: v.optional(v.nullable(v.string())),
  content: v.optional(v.nullable(v.string())),
})

export const CustomerNeedArchivePayload: v.GenericSchema<unknown, T.CustomerNeedArchivePayload> = v.looseObject({
  lastSyncId: v.optional(number()),
  success: v.optional(v.boolean()),
  entity: v.optional(v.nullable(v.lazy(() => CustomerNeed))),
})

export const CustomerNeedCollectionFilter: v.GenericSchema<unknown, T.CustomerNeedCollectionFilter> = v.looseObject({
  id: v.optional(v.nullable(v.lazy(() => IDComparator))),
  createdAt: v.optional(v.nullable(v.lazy(() => DateComparator))),
  updatedAt: v.optional(v.nullable(v.lazy(() => DateComparator))),
  priority: v.optional(v.nullable(v.lazy(() => NumberComparator))),
  project: v.optional(v.nullable(v.lazy(() => NullableProjectFilter))),
  issue: v.optional(v.nullable(v.lazy(() => NullableIssueFilter))),
  comment: v.optional(v.nullable(v.lazy(() => NullableCommentFilter))),
  customer: v.optional(v.nullable(v.lazy(() => NullableCustomerFilter))),
  and: v.optional(v.nullable(v.array(v.lazy(() => CustomerNeedCollectionFilter)))),
  or: v.optional(v.nullable(v.array(v.lazy(() => CustomerNeedCollectionFilter)))),
  some: v.optional(v.nullable(v.lazy(() => CustomerNeedFilter))),
  every: v.optional(v.nullable(v.lazy(() => CustomerNeedFilter))),
  length: v.optional(v.nullable(v.lazy(() => NumberComparator))),
})

export const CustomerNeedConnection: v.GenericSchema<unknown, T.CustomerNeedConnection> = v.looseObject({
  edges: v.optional(v.array(v.lazy(() => CustomerNeedEdge))),
  nodes: v.optional(v.array(v.lazy(() => CustomerNeed))),
  pageInfo: v.optional(v.lazy(() => PageInfo)),
})

export const CustomerNeedCreateFromAttachmentInput: v.GenericSchema<unknown, T.CustomerNeedCreateFromAttachmentInput> =
  v.looseObject({
    attachmentId: v.string(),
  })

export const CustomerNeedCreateInput: v.GenericSchema<unknown, T.CustomerNeedCreateInput> = v.looseObject({
  id: v.optional(v.nullable(v.string())),
  customerId: v.optional(v.nullable(v.string())),
  customerExternalId: v.optional(v.nullable(v.string())),
  issueId: v.optional(v.nullable(v.string())),
  commentId: v.optional(v.nullable(v.string())),
  attachmentId: v.optional(v.nullable(v.string())),
  priority: v.optional(v.nullable(number())),
  body: v.optional(v.nullable(v.string())),
  attachmentUrl: v.optional(v.nullable(v.string())),
  createAsUser: v.optional(v.nullable(v.string())),
  displayIconUrl: v.optional(v.nullable(v.string())),
  createdAt: v.optional(v.nullable(v.string())),
})

export const CustomerNeedEdge: v.GenericSchema<unknown, T.CustomerNeedEdge> = v.looseObject({
  node: v.optional(v.lazy(() => CustomerNeed)),
  cursor: v.optional(v.string()),
})

export const CustomerNeedFilter: v.GenericSchema<unknown, T.CustomerNeedFilter> = v.looseObject({
  id: v.optional(v.nullable(v.lazy(() => IDComparator))),
  createdAt: v.optional(v.nullable(v.lazy(() => DateComparator))),
  updatedAt: v.optional(v.nullable(v.lazy(() => DateComparator))),
  priority: v.optional(v.nullable(v.lazy(() => NumberComparator))),
  project: v.optional(v.nullable(v.lazy(() => NullableProjectFilter))),
  issue: v.optional(v.nullable(v.lazy(() => NullableIssueFilter))),
  comment: v.optional(v.nullable(v.lazy(() => NullableCommentFilter))),
  customer: v.optional(v.nullable(v.lazy(() => NullableCustomerFilter))),
  and: v.optional(v.nullable(v.array(v.lazy(() => CustomerNeedFilter)))),
  or: v.optional(v.nullable(v.array(v.lazy(() => CustomerNeedFilter)))),
})

export const CustomerNeedNotification: v.GenericSchema<unknown, T.CustomerNeedNotification> = v.looseObject({
  id: v.optional(v.string()),
  createdAt: v.optional(v.string()),
  updatedAt: v.optional(v.string()),
  archivedAt: v.optional(v.nullable(v.string())),
  type: v.optional(v.string()),
  actor: v.optional(v.nullable(v.lazy(() => User))),
  externalUserActor: v.optional(v.nullable(v.lazy(() => ExternalUser))),
  user: v.optional(v.lazy(() => User)),
  readAt: v.optional(v.nullable(v.string())),
  emailedAt: v.optional(v.nullable(v.string())),
  snoozedUntilAt: v.optional(v.nullable(v.string())),
  unsnoozedAt: v.optional(v.nullable(v.string())),
  category: v.optional(v.lazy(() => NotificationCategory)),
  botActor: v.optional(v.nullable(v.lazy(() => ActorBot))),
  customerNeedId: v.optional(v.string()),
  relatedIssue: v.optional(v.nullable(v.lazy(() => Issue))),
  relatedProject: v.optional(v.nullable(v.lazy(() => Project))),
  customerNeed: v.optional(v.lazy(() => CustomerNeed)),
})

export const CustomerNeedPayload: v.GenericSchema<unknown, T.CustomerNeedPayload> = v.looseObject({
  lastSyncId: v.optional(number()),
  need: v.optional(v.lazy(() => CustomerNeed)),
  success: v.optional(v.boolean()),
})

export const CustomerNeedUpdateInput: v.GenericSchema<unknown, T.CustomerNeedUpdateInput> = v.looseObject({
  id: v.optional(v.nullable(v.string())),
  customerId: v.optional(v.nullable(v.string())),
  customerExternalId: v.optional(v.nullable(v.string())),
  issueId: v.optional(v.nullable(v.string())),
  priority: v.optional(v.nullable(number())),
  applyPriorityToRelatedNeeds: v.optional(v.nullable(v.boolean())),
  body: v.optional(v.nullable(v.string())),
  attachmentUrl: v.optional(v.nullable(v.string())),
})

export const CustomerNeedUpdatePayload: v.GenericSchema<unknown, T.CustomerNeedUpdatePayload> = v.looseObject({
  lastSyncId: v.optional(number()),
  need: v.optional(v.lazy(() => CustomerNeed)),
  success: v.optional(v.boolean()),
  updatedRelatedNeeds: v.optional(v.array(v.lazy(() => CustomerNeed))),
})

export const CustomerNotification: v.GenericSchema<unknown, T.CustomerNotification> = v.looseObject({
  id: v.optional(v.string()),
  createdAt: v.optional(v.string()),
  updatedAt: v.optional(v.string()),
  archivedAt: v.optional(v.nullable(v.string())),
  type: v.optional(v.string()),
  actor: v.optional(v.nullable(v.lazy(() => User))),
  externalUserActor: v.optional(v.nullable(v.lazy(() => ExternalUser))),
  user: v.optional(v.lazy(() => User)),
  readAt: v.optional(v.nullable(v.string())),
  emailedAt: v.optional(v.nullable(v.string())),
  snoozedUntilAt: v.optional(v.nullable(v.string())),
  unsnoozedAt: v.optional(v.nullable(v.string())),
  category: v.optional(v.lazy(() => NotificationCategory)),
  botActor: v.optional(v.nullable(v.lazy(() => ActorBot))),
  customerId: v.optional(v.string()),
  customer: v.optional(v.lazy(() => Customer)),
})

export const CustomerNotificationSubscription: v.GenericSchema<unknown, T.CustomerNotificationSubscription> =
  v.looseObject({
    id: v.optional(v.string()),
    createdAt: v.optional(v.string()),
    updatedAt: v.optional(v.string()),
    archivedAt: v.optional(v.nullable(v.string())),
    subscriber: v.optional(v.lazy(() => User)),
    customer: v.optional(v.lazy(() => Customer)),
    customView: v.optional(v.nullable(v.lazy(() => CustomView))),
    cycle: v.optional(v.nullable(v.lazy(() => Cycle))),
    label: v.optional(v.nullable(v.lazy(() => IssueLabel))),
    project: v.optional(v.nullable(v.lazy(() => Project))),
    initiative: v.optional(v.nullable(v.lazy(() => Initiative))),
    team: v.optional(v.nullable(v.lazy(() => Team))),
    user: v.optional(v.nullable(v.lazy(() => User))),
    contextViewType: v.optional(v.nullable(v.lazy(() => ContextViewType))),
    userContextViewType: v.optional(v.nullable(v.lazy(() => UserContextViewType))),
    active: v.optional(v.boolean()),
    includeSubInitiativeUpdates: v.optional(v.boolean()),
    notificationSubscriptionTypes: v.optional(v.array(v.string())),
  })

export const CustomerPayload: v.GenericSchema<unknown, T.CustomerPayload> = v.looseObject({
  lastSyncId: v.optional(number()),
  customer: v.optional(v.lazy(() => Customer)),
  success: v.optional(v.boolean()),
})

export const CustomerRevenueSort: v.GenericSchema<unknown, T.CustomerRevenueSort> = v.looseObject({
  nulls: v.optional(v.nullable(v.lazy(() => PaginationNulls))),
  order: v.optional(v.nullable(v.lazy(() => PaginationSortOrder))),
})

export const CustomerSort: v.GenericSchema<unknown, T.CustomerSort> = v.looseObject({
  nulls: v.optional(v.nullable(v.lazy(() => PaginationNulls))),
  order: v.optional(v.nullable(v.lazy(() => PaginationSortOrder))),
})

export const CustomerSortInput: v.GenericSchema<unknown, T.CustomerSortInput> = v.looseObject({
  name: v.optional(v.nullable(v.lazy(() => NameSort))),
  createdAt: v.optional(v.nullable(v.lazy(() => CustomerCreatedAtSort))),
  owner: v.optional(v.nullable(v.lazy(() => OwnerSort))),
  status: v.optional(v.nullable(v.lazy(() => CustomerStatusSort))),
  revenue: v.optional(v.nullable(v.lazy(() => RevenueSort))),
  size: v.optional(v.nullable(v.lazy(() => SizeSort))),
  tier: v.optional(v.nullable(v.lazy(() => TierSort))),
  approximateNeedCount: v.optional(v.nullable(v.lazy(() => ApproximateNeedCountSort))),
})

export const CustomerStatus: v.GenericSchema<unknown, T.CustomerStatus> = v.looseObject({
  id: v.optional(v.string()),
  createdAt: v.optional(v.string()),
  updatedAt: v.optional(v.string()),
  archivedAt: v.optional(v.nullable(v.string())),
  name: v.optional(v.string()),
  color: v.optional(v.string()),
  description: v.optional(v.nullable(v.string())),
  position: v.optional(number()),
  displayName: v.optional(v.string()),
  type: v.optional(v.nullable(v.lazy(() => CustomerStatusType))),
})

export const CustomerStatusConnection: v.GenericSchema<unknown, T.CustomerStatusConnection> = v.looseObject({
  edges: v.optional(v.array(v.lazy(() => CustomerStatusEdge))),
  nodes: v.optional(v.array(v.lazy(() => CustomerStatus))),
  pageInfo: v.optional(v.lazy(() => PageInfo)),
})

export const CustomerStatusCreateInput: v.GenericSchema<unknown, T.CustomerStatusCreateInput> = v.looseObject({
  id: v.optional(v.nullable(v.string())),
  name: v.optional(v.nullable(v.string())),
  color: v.string(),
  description: v.optional(v.nullable(v.string())),
  position: v.optional(v.nullable(number())),
  displayName: v.optional(v.nullable(v.string())),
})

export const CustomerStatusEdge: v.GenericSchema<unknown, T.CustomerStatusEdge> = v.looseObject({
  node: v.optional(v.lazy(() => CustomerStatus)),
  cursor: v.optional(v.string()),
})

export const CustomerStatusFilter: v.GenericSchema<unknown, T.CustomerStatusFilter> = v.looseObject({
  id: v.optional(v.nullable(v.lazy(() => IDComparator))),
  createdAt: v.optional(v.nullable(v.lazy(() => DateComparator))),
  updatedAt: v.optional(v.nullable(v.lazy(() => DateComparator))),
  name: v.optional(v.nullable(v.lazy(() => StringComparator))),
  description: v.optional(v.nullable(v.lazy(() => StringComparator))),
  position: v.optional(v.nullable(v.lazy(() => NumberComparator))),
  type: v.optional(v.nullable(v.lazy(() => StringComparator))),
  color: v.optional(v.nullable(v.lazy(() => StringComparator))),
  and: v.optional(v.nullable(v.array(v.lazy(() => CustomerStatusFilter)))),
  or: v.optional(v.nullable(v.array(v.lazy(() => CustomerStatusFilter)))),
})

export const CustomerStatusPayload: v.GenericSchema<unknown, T.CustomerStatusPayload> = v.looseObject({
  lastSyncId: v.optional(number()),
  status: v.optional(v.lazy(() => CustomerStatus)),
  success: v.optional(v.boolean()),
})

export const CustomerStatusSort: v.GenericSchema<unknown, T.CustomerStatusSort> = v.looseObject({
  nulls: v.optional(v.nullable(v.lazy(() => PaginationNulls))),
  order: v.optional(v.nullable(v.lazy(() => PaginationSortOrder))),
})

export const CustomerStatusType: v.GenericSchema<unknown, T.CustomerStatusType> = v.picklist(["active", "inactive"])

export const CustomerStatusUpdateInput: v.GenericSchema<unknown, T.CustomerStatusUpdateInput> = v.looseObject({
  name: v.optional(v.nullable(v.string())),
  color: v.optional(v.nullable(v.string())),
  description: v.optional(v.nullable(v.string())),
  position: v.optional(v.nullable(number())),
  displayName: v.optional(v.nullable(v.string())),
})

export const CustomerTier: v.GenericSchema<unknown, T.CustomerTier> = v.looseObject({
  id: v.optional(v.string()),
  createdAt: v.optional(v.string()),
  updatedAt: v.optional(v.string()),
  archivedAt: v.optional(v.nullable(v.string())),
  name: v.optional(v.string()),
  color: v.optional(v.string()),
  description: v.optional(v.nullable(v.string())),
  position: v.optional(number()),
  displayName: v.optional(v.string()),
})

export const CustomerTierConnection: v.GenericSchema<unknown, T.CustomerTierConnection> = v.looseObject({
  edges: v.optional(v.array(v.lazy(() => CustomerTierEdge))),
  nodes: v.optional(v.array(v.lazy(() => CustomerTier))),
  pageInfo: v.optional(v.lazy(() => PageInfo)),
})

export const CustomerTierCreateInput: v.GenericSchema<unknown, T.CustomerTierCreateInput> = v.looseObject({
  id: v.optional(v.nullable(v.string())),
  name: v.optional(v.nullable(v.string())),
  color: v.string(),
  description: v.optional(v.nullable(v.string())),
  position: v.optional(v.nullable(number())),
  displayName: v.optional(v.nullable(v.string())),
})

export const CustomerTierEdge: v.GenericSchema<unknown, T.CustomerTierEdge> = v.looseObject({
  node: v.optional(v.lazy(() => CustomerTier)),
  cursor: v.optional(v.string()),
})

export const CustomerTierFilter: v.GenericSchema<unknown, T.CustomerTierFilter> = v.looseObject({
  id: v.optional(v.nullable(v.lazy(() => IDComparator))),
  createdAt: v.optional(v.nullable(v.lazy(() => DateComparator))),
  updatedAt: v.optional(v.nullable(v.lazy(() => DateComparator))),
  null: v.optional(v.nullable(v.boolean())),
  displayName: v.optional(v.nullable(v.lazy(() => StringComparator))),
  description: v.optional(v.nullable(v.lazy(() => StringComparator))),
  position: v.optional(v.nullable(v.lazy(() => NumberComparator))),
  color: v.optional(v.nullable(v.lazy(() => StringComparator))),
  and: v.optional(v.nullable(v.array(v.lazy(() => CustomerTierFilter)))),
  or: v.optional(v.nullable(v.array(v.lazy(() => CustomerTierFilter)))),
})

export const CustomerTierPayload: v.GenericSchema<unknown, T.CustomerTierPayload> = v.looseObject({
  lastSyncId: v.optional(number()),
  tier: v.optional(v.lazy(() => CustomerTier)),
  success: v.optional(v.boolean()),
})

export const CustomerTierUpdateInput: v.GenericSchema<unknown, T.CustomerTierUpdateInput> = v.looseObject({
  name: v.optional(v.nullable(v.string())),
  color: v.optional(v.nullable(v.string())),
  description: v.optional(v.nullable(v.string())),
  position: v.optional(v.nullable(number())),
  displayName: v.optional(v.nullable(v.string())),
})

export const CustomerUpdateInput: v.GenericSchema<unknown, T.CustomerUpdateInput> = v.looseObject({
  name: v.optional(v.nullable(v.string())),
  domains: v.optional(v.nullable(v.array(v.string()))),
  externalIds: v.optional(v.nullable(v.array(v.string()))),
  slackChannelId: v.optional(v.nullable(v.string())),
  ownerId: v.optional(v.nullable(v.string())),
  statusId: v.optional(v.nullable(v.string())),
  revenue: v.optional(v.nullable(integer())),
  size: v.optional(v.nullable(integer())),
  tierId: v.optional(v.nullable(v.string())),
  logoUrl: v.optional(v.nullable(v.string())),
  mainSourceId: v.optional(v.nullable(v.string())),
})

export const CustomerUpsertInput: v.GenericSchema<unknown, T.CustomerUpsertInput> = v.looseObject({
  id: v.optional(v.nullable(v.string())),
  name: v.optional(v.nullable(v.string())),
  domains: v.optional(v.nullable(v.array(v.string()))),
  externalId: v.optional(v.nullable(v.string())),
  slackChannelId: v.optional(v.nullable(v.string())),
  ownerId: v.optional(v.nullable(v.string())),
  statusId: v.optional(v.nullable(v.string())),
  revenue: v.optional(v.nullable(integer())),
  size: v.optional(v.nullable(integer())),
  tierId: v.optional(v.nullable(v.string())),
  logoUrl: v.optional(v.nullable(v.string())),
  tierName: v.optional(v.nullable(v.string())),
})

export const CustomView: v.GenericSchema<unknown, T.CustomView> = v.looseObject({
  id: v.optional(v.string()),
  createdAt: v.optional(v.string()),
  updatedAt: v.optional(v.string()),
  archivedAt: v.optional(v.nullable(v.string())),
  name: v.optional(v.string()),
  description: v.optional(v.nullable(v.string())),
  icon: v.optional(v.nullable(v.string())),
  color: v.optional(v.nullable(v.string())),
  organization: v.optional(v.lazy(() => Organization)),
  creator: v.optional(v.lazy(() => User)),
  owner: v.optional(v.lazy(() => User)),
  updatedBy: v.optional(v.nullable(v.lazy(() => User))),
  filters: v.optional(v.unknown()),
  filterData: v.optional(v.unknown()),
  projectFilterData: v.optional(v.nullable(v.unknown())),
  initiativeFilterData: v.optional(v.nullable(v.unknown())),
  feedItemFilterData: v.optional(v.nullable(v.unknown())),
  filterTimezone: v.optional(v.nullable(v.string())),
  shared: v.optional(v.boolean()),
  slugId: v.optional(v.string()),
  modelName: v.optional(v.string()),
  team: v.optional(v.nullable(v.lazy(() => Team))),
  projects: v.optional(v.lazy(() => ProjectConnection)),
  issues: v.optional(v.lazy(() => IssueConnection)),
  userViewPreferences: v.optional(v.nullable(v.lazy(() => ViewPreferences))),
  organizationViewPreferences: v.optional(v.nullable(v.lazy(() => ViewPreferences))),
  viewPreferencesValues: v.optional(v.nullable(v.lazy(() => ViewPreferencesValues))),
  initiatives: v.optional(v.lazy(() => InitiativeConnection)),
})

export const CustomViewConnection: v.GenericSchema<unknown, T.CustomViewConnection> = v.looseObject({
  edges: v.optional(v.array(v.lazy(() => CustomViewEdge))),
  nodes: v.optional(v.array(v.lazy(() => CustomView))),
  pageInfo: v.optional(v.lazy(() => PageInfo)),
})

export const CustomViewCreatedAtSort: v.GenericSchema<unknown, T.CustomViewCreatedAtSort> = v.looseObject({
  nulls: v.optional(v.nullable(v.lazy(() => PaginationNulls))),
  order: v.optional(v.nullable(v.lazy(() => PaginationSortOrder))),
})

export const CustomViewCreateInput: v.GenericSchema<unknown, T.CustomViewCreateInput> = v.looseObject({
  id: v.optional(v.nullable(v.string())),
  name: v.string(),
  description: v.optional(v.nullable(v.string())),
  icon: v.optional(v.nullable(v.string())),
  color: v.optional(v.nullable(v.string())),
  teamId: v.optional(v.nullable(v.string())),
  projectId: v.optional(v.nullable(v.string())),
  initiativeId: v.optional(v.nullable(v.string())),
  ownerId: v.optional(v.nullable(v.string())),
  filterData: v.optional(v.nullable(v.lazy(() => IssueFilter))),
  projectFilterData: v.optional(v.nullable(v.lazy(() => ProjectFilter))),
  initiativeFilterData: v.optional(v.nullable(v.lazy(() => InitiativeFilter))),
  feedItemFilterData: v.optional(v.nullable(v.lazy(() => FeedItemFilter))),
  shared: v.optional(v.nullable(v.boolean())),
})

export const CustomViewEdge: v.GenericSchema<unknown, T.CustomViewEdge> = v.looseObject({
  node: v.optional(v.lazy(() => CustomView)),
  cursor: v.optional(v.string()),
})

export const CustomViewFilter: v.GenericSchema<unknown, T.CustomViewFilter> = v.looseObject({
  id: v.optional(v.nullable(v.lazy(() => IDComparator))),
  createdAt: v.optional(v.nullable(v.lazy(() => DateComparator))),
  updatedAt: v.optional(v.nullable(v.lazy(() => DateComparator))),
  name: v.optional(v.nullable(v.lazy(() => StringComparator))),
  modelName: v.optional(v.nullable(v.lazy(() => StringComparator))),
  team: v.optional(v.nullable(v.lazy(() => NullableTeamFilter))),
  creator: v.optional(v.nullable(v.lazy(() => UserFilter))),
  shared: v.optional(v.nullable(v.lazy(() => BooleanComparator))),
  hasFacet: v.optional(v.nullable(v.boolean())),
  and: v.optional(v.nullable(v.array(v.lazy(() => CustomViewFilter)))),
  or: v.optional(v.nullable(v.array(v.lazy(() => CustomViewFilter)))),
})

export const CustomViewHasSubscribersPayload: v.GenericSchema<unknown, T.CustomViewHasSubscribersPayload> =
  v.looseObject({
    hasSubscribers: v.optional(v.boolean()),
  })

export const CustomViewNameSort: v.GenericSchema<unknown, T.CustomViewNameSort> = v.looseObject({
  nulls: v.optional(v.nullable(v.lazy(() => PaginationNulls))),
  order: v.optional(v.nullable(v.lazy(() => PaginationSortOrder))),
})

export const CustomViewNotificationSubscription: v.GenericSchema<unknown, T.CustomViewNotificationSubscription> =
  v.looseObject({
    id: v.optional(v.string()),
    createdAt: v.optional(v.string()),
    updatedAt: v.optional(v.string()),
    archivedAt: v.optional(v.nullable(v.string())),
    subscriber: v.optional(v.lazy(() => User)),
    customer: v.optional(v.nullable(v.lazy(() => Customer))),
    customView: v.optional(v.lazy(() => CustomView)),
    cycle: v.optional(v.nullable(v.lazy(() => Cycle))),
    label: v.optional(v.nullable(v.lazy(() => IssueLabel))),
    project: v.optional(v.nullable(v.lazy(() => Project))),
    initiative: v.optional(v.nullable(v.lazy(() => Initiative))),
    team: v.optional(v.nullable(v.lazy(() => Team))),
    user: v.optional(v.nullable(v.lazy(() => User))),
    contextViewType: v.optional(v.nullable(v.lazy(() => ContextViewType))),
    userContextViewType: v.optional(v.nullable(v.lazy(() => UserContextViewType))),
    active: v.optional(v.boolean()),
    includeSubInitiativeUpdates: v.optional(v.boolean()),
    notificationSubscriptionTypes: v.optional(v.array(v.string())),
  })

export const CustomViewPayload: v.GenericSchema<unknown, T.CustomViewPayload> = v.looseObject({
  lastSyncId: v.optional(number()),
  customView: v.optional(v.lazy(() => CustomView)),
  success: v.optional(v.boolean()),
})

export const CustomViewSharedSort: v.GenericSchema<unknown, T.CustomViewSharedSort> = v.looseObject({
  nulls: v.optional(v.nullable(v.lazy(() => PaginationNulls))),
  order: v.optional(v.nullable(v.lazy(() => PaginationSortOrder))),
})

export const CustomViewSortInput: v.GenericSchema<unknown, T.CustomViewSortInput> = v.looseObject({
  name: v.optional(v.nullable(v.lazy(() => CustomViewNameSort))),
  createdAt: v.optional(v.nullable(v.lazy(() => CustomViewCreatedAtSort))),
  shared: v.optional(v.nullable(v.lazy(() => CustomViewSharedSort))),
  updatedAt: v.optional(v.nullable(v.lazy(() => CustomViewUpdatedAtSort))),
})

export const CustomViewUpdatedAtSort: v.GenericSchema<unknown, T.CustomViewUpdatedAtSort> = v.looseObject({
  nulls: v.optional(v.nullable(v.lazy(() => PaginationNulls))),
  order: v.optional(v.nullable(v.lazy(() => PaginationSortOrder))),
})

export const CustomViewUpdateInput: v.GenericSchema<unknown, T.CustomViewUpdateInput> = v.looseObject({
  name: v.optional(v.nullable(v.string())),
  description: v.optional(v.nullable(v.string())),
  icon: v.optional(v.nullable(v.string())),
  color: v.optional(v.nullable(v.string())),
  teamId: v.optional(v.nullable(v.string())),
  ownerId: v.optional(v.nullable(v.string())),
  filterData: v.optional(v.nullable(v.lazy(() => IssueFilter))),
  projectFilterData: v.optional(v.nullable(v.lazy(() => ProjectFilter))),
  initiativeFilterData: v.optional(v.nullable(v.lazy(() => InitiativeFilter))),
  feedItemFilterData: v.optional(v.nullable(v.lazy(() => FeedItemFilter))),
  shared: v.optional(v.nullable(v.boolean())),
})

export const Cycle: v.GenericSchema<unknown, T.Cycle> = v.looseObject({
  id: v.optional(v.string()),
  createdAt: v.optional(v.string()),
  updatedAt: v.optional(v.string()),
  archivedAt: v.optional(v.nullable(v.string())),
  number: v.optional(number()),
  name: v.optional(v.nullable(v.string())),
  description: v.optional(v.nullable(v.string())),
  startsAt: v.optional(v.string()),
  endsAt: v.optional(v.string()),
  completedAt: v.optional(v.nullable(v.string())),
  autoArchivedAt: v.optional(v.nullable(v.string())),
  issueCountHistory: v.optional(v.array(number())),
  completedIssueCountHistory: v.optional(v.array(number())),
  scopeHistory: v.optional(v.array(number())),
  completedScopeHistory: v.optional(v.array(number())),
  inProgressScopeHistory: v.optional(v.array(number())),
  team: v.optional(v.lazy(() => Team)),
  inheritedFrom: v.optional(v.nullable(v.lazy(() => Cycle))),
  isActive: v.optional(v.boolean()),
  isFuture: v.optional(v.boolean()),
  isPast: v.optional(v.boolean()),
  issues: v.optional(v.lazy(() => IssueConnection)),
  uncompletedIssuesUponClose: v.optional(v.lazy(() => IssueConnection)),
  progress: v.optional(number()),
  isNext: v.optional(v.boolean()),
  isPrevious: v.optional(v.boolean()),
})

export const CycleArchivePayload: v.GenericSchema<unknown, T.CycleArchivePayload> = v.looseObject({
  lastSyncId: v.optional(number()),
  success: v.optional(v.boolean()),
  entity: v.optional(v.nullable(v.lazy(() => Cycle))),
})

export const CycleConnection: v.GenericSchema<unknown, T.CycleConnection> = v.looseObject({
  edges: v.optional(v.array(v.lazy(() => CycleEdge))),
  nodes: v.optional(v.array(v.lazy(() => Cycle))),
  pageInfo: v.optional(v.lazy(() => PageInfo)),
})

export const CycleCreateInput: v.GenericSchema<unknown, T.CycleCreateInput> = v.looseObject({
  id: v.optional(v.nullable(v.string())),
  name: v.optional(v.nullable(v.string())),
  description: v.optional(v.nullable(v.string())),
  teamId: v.string(),
  startsAt: v.string(),
  endsAt: v.string(),
  completedAt: v.optional(v.nullable(v.string())),
})

export const CycleEdge: v.GenericSchema<unknown, T.CycleEdge> = v.looseObject({
  node: v.optional(v.lazy(() => Cycle)),
  cursor: v.optional(v.string()),
})

export const CycleFilter: v.GenericSchema<unknown, T.CycleFilter> = v.looseObject({
  id: v.optional(v.nullable(v.lazy(() => IDComparator))),
  createdAt: v.optional(v.nullable(v.lazy(() => DateComparator))),
  updatedAt: v.optional(v.nullable(v.lazy(() => DateComparator))),
  number: v.optional(v.nullable(v.lazy(() => NumberComparator))),
  name: v.optional(v.nullable(v.lazy(() => StringComparator))),
  startsAt: v.optional(v.nullable(v.lazy(() => DateComparator))),
  endsAt: v.optional(v.nullable(v.lazy(() => DateComparator))),
  completedAt: v.optional(v.nullable(v.lazy(() => DateComparator))),
  isActive: v.optional(v.nullable(v.lazy(() => BooleanComparator))),
  isInCooldown: v.optional(v.nullable(v.lazy(() => BooleanComparator))),
  isNext: v.optional(v.nullable(v.lazy(() => BooleanComparator))),
  isPrevious: v.optional(v.nullable(v.lazy(() => BooleanComparator))),
  isFuture: v.optional(v.nullable(v.lazy(() => BooleanComparator))),
  isPast: v.optional(v.nullable(v.lazy(() => BooleanComparator))),
  team: v.optional(v.nullable(v.lazy(() => TeamFilter))),
  issues: v.optional(v.nullable(v.lazy(() => IssueCollectionFilter))),
  inheritedFromId: v.optional(v.nullable(v.lazy(() => IDComparator))),
  and: v.optional(v.nullable(v.array(v.lazy(() => CycleFilter)))),
  or: v.optional(v.nullable(v.array(v.lazy(() => CycleFilter)))),
})

export const CycleNotificationSubscription: v.GenericSchema<unknown, T.CycleNotificationSubscription> = v.looseObject({
  id: v.optional(v.string()),
  createdAt: v.optional(v.string()),
  updatedAt: v.optional(v.string()),
  archivedAt: v.optional(v.nullable(v.string())),
  subscriber: v.optional(v.lazy(() => User)),
  customer: v.optional(v.nullable(v.lazy(() => Customer))),
  customView: v.optional(v.nullable(v.lazy(() => CustomView))),
  cycle: v.optional(v.lazy(() => Cycle)),
  label: v.optional(v.nullable(v.lazy(() => IssueLabel))),
  project: v.optional(v.nullable(v.lazy(() => Project))),
  initiative: v.optional(v.nullable(v.lazy(() => Initiative))),
  team: v.optional(v.nullable(v.lazy(() => Team))),
  user: v.optional(v.nullable(v.lazy(() => User))),
  contextViewType: v.optional(v.nullable(v.lazy(() => ContextViewType))),
  userContextViewType: v.optional(v.nullable(v.lazy(() => UserContextViewType))),
  active: v.optional(v.boolean()),
  includeSubInitiativeUpdates: v.optional(v.boolean()),
  notificationSubscriptionTypes: v.optional(v.array(v.string())),
})

export const CyclePayload: v.GenericSchema<unknown, T.CyclePayload> = v.looseObject({
  lastSyncId: v.optional(number()),
  cycle: v.optional(v.nullable(v.lazy(() => Cycle))),
  success: v.optional(v.boolean()),
})

export const CyclePeriod: v.GenericSchema<unknown, T.CyclePeriod> = v.picklist(["before", "during", "after"])

export const CyclePeriodComparator: v.GenericSchema<unknown, T.CyclePeriodComparator> = v.looseObject({
  eq: v.optional(v.nullable(v.lazy(() => CyclePeriod))),
  neq: v.optional(v.nullable(v.lazy(() => CyclePeriod))),
  in: v.optional(v.nullable(v.array(v.lazy(() => CyclePeriod)))),
  nin: v.optional(v.nullable(v.array(v.lazy(() => CyclePeriod)))),
  null: v.optional(v.nullable(v.boolean())),
})

export const CycleShiftAllInput: v.GenericSchema<unknown, T.CycleShiftAllInput> = v.looseObject({
  id: v.string(),
  daysToShift: number(),
})

export const CycleSort: v.GenericSchema<unknown, T.CycleSort> = v.looseObject({
  nulls: v.optional(v.nullable(v.lazy(() => PaginationNulls))),
  order: v.optional(v.nullable(v.lazy(() => PaginationSortOrder))),
  currentCycleFirst: v.optional(v.nullable(v.boolean())),
})

export const CycleUpdateInput: v.GenericSchema<unknown, T.CycleUpdateInput> = v.looseObject({
  name: v.optional(v.nullable(v.string())),
  description: v.optional(v.nullable(v.string())),
  startsAt: v.optional(v.nullable(v.string())),
  endsAt: v.optional(v.nullable(v.string())),
  completedAt: v.optional(v.nullable(v.string())),
})

export const DateComparator: v.GenericSchema<unknown, T.DateComparator> = v.looseObject({
  eq: v.optional(v.nullable(v.string())),
  neq: v.optional(v.nullable(v.string())),
  in: v.optional(v.nullable(v.array(v.string()))),
  nin: v.optional(v.nullable(v.array(v.string()))),
  lt: v.optional(v.nullable(v.string())),
  lte: v.optional(v.nullable(v.string())),
  gt: v.optional(v.nullable(v.string())),
  gte: v.optional(v.nullable(v.string())),
  today: v.optional(v.nullable(v.boolean())),
  timezone: v.optional(v.nullable(v.string())),
})

export const DateResolutionType: v.GenericSchema<unknown, T.DateResolutionType> = v.picklist([
  "month",
  "quarter",
  "halfYear",
  "year",
])

export const Day: v.GenericSchema<unknown, T.Day> = v.picklist([
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
])

export const DelegateSort: v.GenericSchema<unknown, T.DelegateSort> = v.looseObject({
  nulls: v.optional(v.nullable(v.lazy(() => PaginationNulls))),
  order: v.optional(v.nullable(v.lazy(() => PaginationSortOrder))),
})

export const DeleteOrganizationInput: v.GenericSchema<unknown, T.DeleteOrganizationInput> = v.looseObject({
  deletionCode: v.string(),
})

export const DeletePayload: v.GenericSchema<unknown, T.DeletePayload> = v.looseObject({
  lastSyncId: v.optional(number()),
  success: v.optional(v.boolean()),
  entityId: v.optional(v.string()),
})

export const DependencyEcosystem: v.GenericSchema<unknown, T.DependencyEcosystem> = v.picklist(["npm"])

export const DependencyPackageInput: v.GenericSchema<unknown, T.DependencyPackageInput> = v.looseObject({
  ecosystem: v.lazy(() => DependencyEcosystem),
  name: v.string(),
  version: v.string(),
})

export const DependencyPackageMetadataResult: v.GenericSchema<unknown, T.DependencyPackageMetadataResult> =
  v.looseObject({
    name: v.optional(v.string()),
    version: v.optional(v.string()),
    license: v.optional(v.nullable(v.string())),
    publishedAt: v.optional(v.nullable(v.string())),
    weeklyDownloads: v.optional(v.nullable(number())),
  })

export const Document: v.GenericSchema<unknown, T.Document> = v.looseObject({
  id: v.optional(v.string()),
  createdAt: v.optional(v.string()),
  updatedAt: v.optional(v.string()),
  archivedAt: v.optional(v.nullable(v.string())),
  title: v.optional(v.string()),
  icon: v.optional(v.nullable(v.string())),
  color: v.optional(v.nullable(v.string())),
  creator: v.optional(v.nullable(v.lazy(() => User))),
  owner: v.optional(v.nullable(v.lazy(() => User))),
  updatedBy: v.optional(v.nullable(v.lazy(() => User))),
  project: v.optional(v.nullable(v.lazy(() => Project))),
  initiative: v.optional(v.nullable(v.lazy(() => Initiative))),
  issue: v.optional(v.nullable(v.lazy(() => Issue))),
  release: v.optional(v.nullable(v.lazy(() => Release))),
  slugId: v.optional(v.string()),
  lastAppliedTemplate: v.optional(v.nullable(v.lazy(() => Template))),
  hiddenAt: v.optional(v.nullable(v.string())),
  trashed: v.optional(v.nullable(v.boolean())),
  sortOrder: v.optional(number()),
  comments: v.optional(v.lazy(() => CommentConnection)),
  subscribers: v.optional(v.lazy(() => UserConnection)),
  content: v.optional(v.nullable(v.string())),
  documentContentId: v.optional(v.nullable(v.string())),
  url: v.optional(v.string()),
  workspaceAccess: v.optional(v.nullable(v.lazy(() => DocumentShareRole))),
})

export const DocumentArchivePayload: v.GenericSchema<unknown, T.DocumentArchivePayload> = v.looseObject({
  lastSyncId: v.optional(number()),
  success: v.optional(v.boolean()),
  entity: v.optional(v.nullable(v.lazy(() => Document))),
})

export const DocumentConnection: v.GenericSchema<unknown, T.DocumentConnection> = v.looseObject({
  edges: v.optional(v.array(v.lazy(() => DocumentEdge))),
  nodes: v.optional(v.array(v.lazy(() => Document))),
  pageInfo: v.optional(v.lazy(() => PageInfo)),
})

export const DocumentContent: v.GenericSchema<unknown, T.DocumentContent> = v.looseObject({
  id: v.optional(v.string()),
  createdAt: v.optional(v.string()),
  updatedAt: v.optional(v.string()),
  archivedAt: v.optional(v.nullable(v.string())),
  content: v.optional(v.nullable(v.string())),
  contentState: v.optional(v.nullable(v.string())),
  issue: v.optional(v.nullable(v.lazy(() => Issue))),
  project: v.optional(v.nullable(v.lazy(() => Project))),
  initiative: v.optional(v.nullable(v.lazy(() => Initiative))),
  projectMilestone: v.optional(v.nullable(v.lazy(() => ProjectMilestone))),
  document: v.optional(v.nullable(v.lazy(() => Document))),
  aiPromptRules: v.optional(v.nullable(v.lazy(() => AiPromptRules))),
  welcomeMessage: v.optional(v.nullable(v.lazy(() => WelcomeMessage))),
  restoredAt: v.optional(v.nullable(v.string())),
})

export const DocumentContentHistory: v.GenericSchema<unknown, T.DocumentContentHistory> = v.looseObject({
  id: v.optional(v.string()),
  createdAt: v.optional(v.string()),
  updatedAt: v.optional(v.string()),
  archivedAt: v.optional(v.nullable(v.string())),
  documentContent: v.optional(v.lazy(() => DocumentContent)),
  actorIds: v.optional(v.array(v.string())),
  contentDataSnapshotAt: v.optional(v.string()),
})

export const DocumentContentHistoryPayload: v.GenericSchema<unknown, T.DocumentContentHistoryPayload> = v.looseObject({
  history: v.optional(v.array(v.lazy(() => DocumentContentHistoryType))),
  success: v.optional(v.boolean()),
})

export const DocumentContentHistoryType: v.GenericSchema<unknown, T.DocumentContentHistoryType> = v.looseObject({
  id: v.optional(v.string()),
  documentContentId: v.optional(v.string()),
  createdAt: v.optional(v.string()),
  contentDataSnapshotAt: v.optional(v.string()),
  actorIds: v.optional(v.nullable(v.array(v.string()))),
})

export const DocumentContentRevision: v.GenericSchema<unknown, T.DocumentContentRevision> = v.looseObject({
  id: v.optional(v.string()),
  createdAt: v.optional(v.string()),
  updatedAt: v.optional(v.string()),
  archivedAt: v.optional(v.nullable(v.string())),
  documentContent: v.optional(v.lazy(() => DocumentContent)),
  documentContentId: v.optional(v.string()),
  contentState: v.optional(v.string()),
  baseContentState: v.optional(v.string()),
  contributorWorkflowDefinitionIds: v.optional(v.array(v.string())),
  summary: v.optional(v.nullable(v.string())),
  contentHash: v.optional(v.nullable(v.string())),
  summaryContentHash: v.optional(v.nullable(v.string())),
})

export const DocumentCreatedAtSort: v.GenericSchema<unknown, T.DocumentCreatedAtSort> = v.looseObject({
  nulls: v.optional(v.nullable(v.lazy(() => PaginationNulls))),
  order: v.optional(v.nullable(v.lazy(() => PaginationSortOrder))),
})

export const DocumentCreateInput: v.GenericSchema<unknown, T.DocumentCreateInput> = v.looseObject({
  id: v.optional(v.nullable(v.string())),
  title: v.string(),
  icon: v.optional(v.nullable(v.string())),
  color: v.optional(v.nullable(v.string())),
  content: v.optional(v.nullable(v.string())),
  projectId: v.optional(v.nullable(v.string())),
  issueId: v.optional(v.nullable(v.string())),
  releaseId: v.optional(v.nullable(v.string())),
  lastAppliedTemplateId: v.optional(v.nullable(v.string())),
  ownerId: v.optional(v.nullable(v.string())),
  sortOrder: v.optional(v.nullable(number())),
})

export const DocumentCreatorSort: v.GenericSchema<unknown, T.DocumentCreatorSort> = v.looseObject({
  nulls: v.optional(v.nullable(v.lazy(() => PaginationNulls))),
  order: v.optional(v.nullable(v.lazy(() => PaginationSortOrder))),
})

export const DocumentEdge: v.GenericSchema<unknown, T.DocumentEdge> = v.looseObject({
  node: v.optional(v.lazy(() => Document)),
  cursor: v.optional(v.string()),
})

export const DocumentFilter: v.GenericSchema<unknown, T.DocumentFilter> = v.looseObject({
  id: v.optional(v.nullable(v.lazy(() => IDComparator))),
  createdAt: v.optional(v.nullable(v.lazy(() => DateComparator))),
  updatedAt: v.optional(v.nullable(v.lazy(() => DateComparator))),
  title: v.optional(v.nullable(v.lazy(() => StringComparator))),
  searchableContent: v.optional(v.nullable(v.lazy(() => ContentComparator))),
  slugId: v.optional(v.nullable(v.lazy(() => StringComparator))),
  creator: v.optional(v.nullable(v.lazy(() => UserFilter))),
  owner: v.optional(v.nullable(v.lazy(() => NullableUserFilter))),
  project: v.optional(v.nullable(v.lazy(() => ProjectFilter))),
  issue: v.optional(v.nullable(v.lazy(() => IssueFilter))),
  initiative: v.optional(v.nullable(v.lazy(() => InitiativeFilter))),
  team: v.optional(v.nullable(v.lazy(() => NullableTeamFilter))),
  cycle: v.optional(v.nullable(v.lazy(() => CycleFilter))),
  release: v.optional(v.nullable(v.lazy(() => ReleaseFilter))),
  parentDocument: v.optional(v.nullable(v.lazy(() => NullableDocumentFilter))),
  personalUser: v.optional(v.nullable(v.lazy(() => NullableUserFilter))),
  and: v.optional(v.nullable(v.array(v.lazy(() => DocumentFilter)))),
  or: v.optional(v.nullable(v.array(v.lazy(() => DocumentFilter)))),
})

export const DocumentNotification: v.GenericSchema<unknown, T.DocumentNotification> = v.looseObject({
  commentId: v.optional(v.nullable(v.string())),
  parentCommentId: v.optional(v.nullable(v.string())),
  reactionEmoji: v.optional(v.nullable(v.string())),
  id: v.optional(v.string()),
  createdAt: v.optional(v.string()),
  updatedAt: v.optional(v.string()),
  archivedAt: v.optional(v.nullable(v.string())),
  type: v.optional(v.string()),
  actor: v.optional(v.nullable(v.lazy(() => User))),
  externalUserActor: v.optional(v.nullable(v.lazy(() => ExternalUser))),
  user: v.optional(v.lazy(() => User)),
  readAt: v.optional(v.nullable(v.string())),
  emailedAt: v.optional(v.nullable(v.string())),
  snoozedUntilAt: v.optional(v.nullable(v.string())),
  unsnoozedAt: v.optional(v.nullable(v.string())),
  category: v.optional(v.lazy(() => NotificationCategory)),
  botActor: v.optional(v.nullable(v.lazy(() => ActorBot))),
  documentId: v.optional(v.string()),
})

export const DocumentPayload: v.GenericSchema<unknown, T.DocumentPayload> = v.looseObject({
  lastSyncId: v.optional(number()),
  document: v.optional(v.lazy(() => Document)),
  success: v.optional(v.boolean()),
})

export const DocumentProjectSort: v.GenericSchema<unknown, T.DocumentProjectSort> = v.looseObject({
  nulls: v.optional(v.nullable(v.lazy(() => PaginationNulls))),
  order: v.optional(v.nullable(v.lazy(() => PaginationSortOrder))),
})

export const DocumentSearchPayload: v.GenericSchema<unknown, T.DocumentSearchPayload> = v.looseObject({
  edges: v.optional(v.array(v.lazy(() => DocumentSearchResultEdge))),
  nodes: v.optional(v.array(v.lazy(() => DocumentSearchResult))),
  pageInfo: v.optional(v.lazy(() => PageInfo)),
  archivePayload: v.optional(v.lazy(() => ArchiveResponse)),
  totalCount: v.optional(number()),
})

export const DocumentSearchResult: v.GenericSchema<unknown, T.DocumentSearchResult> = v.looseObject({
  id: v.optional(v.string()),
  createdAt: v.optional(v.string()),
  updatedAt: v.optional(v.string()),
  archivedAt: v.optional(v.nullable(v.string())),
  title: v.optional(v.string()),
  icon: v.optional(v.nullable(v.string())),
  color: v.optional(v.nullable(v.string())),
  creator: v.optional(v.nullable(v.lazy(() => User))),
  owner: v.optional(v.nullable(v.lazy(() => User))),
  updatedBy: v.optional(v.nullable(v.lazy(() => User))),
  project: v.optional(v.nullable(v.lazy(() => Project))),
  initiative: v.optional(v.nullable(v.lazy(() => Initiative))),
  issue: v.optional(v.nullable(v.lazy(() => Issue))),
  release: v.optional(v.nullable(v.lazy(() => Release))),
  slugId: v.optional(v.string()),
  lastAppliedTemplate: v.optional(v.nullable(v.lazy(() => Template))),
  hiddenAt: v.optional(v.nullable(v.string())),
  trashed: v.optional(v.nullable(v.boolean())),
  sortOrder: v.optional(number()),
  comments: v.optional(v.lazy(() => CommentConnection)),
  subscribers: v.optional(v.lazy(() => UserConnection)),
  content: v.optional(v.nullable(v.string())),
  documentContentId: v.optional(v.nullable(v.string())),
  url: v.optional(v.string()),
  workspaceAccess: v.optional(v.nullable(v.lazy(() => DocumentShareRole))),
  metadata: v.optional(v.unknown()),
})

export const DocumentSearchResultEdge: v.GenericSchema<unknown, T.DocumentSearchResultEdge> = v.looseObject({
  node: v.optional(v.lazy(() => DocumentSearchResult)),
  cursor: v.optional(v.string()),
})

export const DocumentShareRole: v.GenericSchema<unknown, T.DocumentShareRole> = v.picklist(["edit", "comment", "view"])

export const DocumentSortInput: v.GenericSchema<unknown, T.DocumentSortInput> = v.looseObject({
  title: v.optional(v.nullable(v.lazy(() => DocumentTitleSort))),
  creator: v.optional(v.nullable(v.lazy(() => DocumentCreatorSort))),
  project: v.optional(v.nullable(v.lazy(() => DocumentProjectSort))),
  createdAt: v.optional(v.nullable(v.lazy(() => DocumentCreatedAtSort))),
  updatedAt: v.optional(v.nullable(v.lazy(() => DocumentUpdatedAtSort))),
})

export const DocumentTitleSort: v.GenericSchema<unknown, T.DocumentTitleSort> = v.looseObject({
  nulls: v.optional(v.nullable(v.lazy(() => PaginationNulls))),
  order: v.optional(v.nullable(v.lazy(() => PaginationSortOrder))),
})

export const DocumentUpdatedAtSort: v.GenericSchema<unknown, T.DocumentUpdatedAtSort> = v.looseObject({
  nulls: v.optional(v.nullable(v.lazy(() => PaginationNulls))),
  order: v.optional(v.nullable(v.lazy(() => PaginationSortOrder))),
})

export const DocumentUpdateInput: v.GenericSchema<unknown, T.DocumentUpdateInput> = v.looseObject({
  title: v.optional(v.nullable(v.string())),
  icon: v.optional(v.nullable(v.string())),
  color: v.optional(v.nullable(v.string())),
  content: v.optional(v.nullable(v.string())),
  projectId: v.optional(v.nullable(v.string())),
  issueId: v.optional(v.nullable(v.string())),
  releaseId: v.optional(v.nullable(v.string())),
  lastAppliedTemplateId: v.optional(v.nullable(v.string())),
  ownerId: v.optional(v.nullable(v.string())),
  hiddenAt: v.optional(v.nullable(v.string())),
  sortOrder: v.optional(v.nullable(number())),
  trashed: v.optional(v.nullable(v.boolean())),
})

export const Draft: v.GenericSchema<unknown, T.Draft> = v.looseObject({
  id: v.optional(v.string()),
  createdAt: v.optional(v.string()),
  updatedAt: v.optional(v.string()),
  archivedAt: v.optional(v.nullable(v.string())),
  bodyData: v.optional(v.unknown()),
  data: v.optional(v.nullable(v.unknown())),
  updateHealth: v.optional(v.nullable(v.lazy(() => DraftUpdateHealthType))),
  generationMetadata: v.optional(v.nullable(v.lazy(() => DraftGenerationMetadata))),
  isAutogenerated: v.optional(v.boolean()),
  user: v.optional(v.lazy(() => User)),
  issue: v.optional(v.nullable(v.lazy(() => Issue))),
  project: v.optional(v.nullable(v.lazy(() => Project))),
  projectUpdate: v.optional(v.nullable(v.lazy(() => ProjectUpdate))),
  initiative: v.optional(v.nullable(v.lazy(() => Initiative))),
  initiativeUpdate: v.optional(v.nullable(v.lazy(() => InitiativeUpdate))),
  parentComment: v.optional(v.nullable(v.lazy(() => Comment))),
  customerNeed: v.optional(v.nullable(v.lazy(() => CustomerNeed))),
  team: v.optional(v.nullable(v.lazy(() => Team))),
})

export const DraftConnection: v.GenericSchema<unknown, T.DraftConnection> = v.looseObject({
  edges: v.optional(v.array(v.lazy(() => DraftEdge))),
  nodes: v.optional(v.array(v.lazy(() => Draft))),
  pageInfo: v.optional(v.lazy(() => PageInfo)),
})

export const DraftEdge: v.GenericSchema<unknown, T.DraftEdge> = v.looseObject({
  node: v.optional(v.lazy(() => Draft)),
  cursor: v.optional(v.string()),
})

export const DraftGenerationMetadata: v.GenericSchema<unknown, T.DraftGenerationMetadata> = v.looseObject({
  generatedContent: v.optional(v.unknown()),
  generatedAt: v.optional(v.string()),
  generationCount: v.optional(integer()),
})

export const DraftUpdateHealthType: v.GenericSchema<unknown, T.DraftUpdateHealthType> = v.picklist([
  "onTrack",
  "atRisk",
  "offTrack",
])

export const DueDateSort: v.GenericSchema<unknown, T.DueDateSort> = v.looseObject({
  nulls: v.optional(v.nullable(v.lazy(() => PaginationNulls))),
  order: v.optional(v.nullable(v.lazy(() => PaginationSortOrder))),
})

export const EmailIntakeAddress: v.GenericSchema<unknown, T.EmailIntakeAddress> = v.looseObject({
  id: v.optional(v.string()),
  createdAt: v.optional(v.string()),
  updatedAt: v.optional(v.string()),
  archivedAt: v.optional(v.nullable(v.string())),
  address: v.optional(v.string()),
  type: v.optional(v.lazy(() => EmailIntakeAddressType)),
  forwardingEmailAddress: v.optional(v.nullable(v.string())),
  senderName: v.optional(v.nullable(v.string())),
  enabled: v.optional(v.boolean()),
  repliesEnabled: v.optional(v.boolean()),
  useUserNamesInReplies: v.optional(v.boolean()),
  template: v.optional(v.nullable(v.lazy(() => Template))),
  team: v.optional(v.nullable(v.lazy(() => Team))),
  organization: v.optional(v.lazy(() => Organization)),
  sesDomainIdentity: v.optional(v.nullable(v.lazy(() => SesDomainIdentity))),
  creator: v.optional(v.nullable(v.lazy(() => User))),
  customerRequestsEnabled: v.optional(v.boolean()),
  issueCreatedAutoReply: v.optional(v.nullable(v.string())),
  issueCreatedAutoReplyEnabled: v.optional(v.boolean()),
  issueCompletedAutoReplyEnabled: v.optional(v.boolean()),
  issueCompletedAutoReply: v.optional(v.nullable(v.string())),
  issueCanceledAutoReplyEnabled: v.optional(v.boolean()),
  issueCanceledAutoReply: v.optional(v.nullable(v.string())),
  reopenOnReply: v.optional(v.boolean()),
  lastUsedAt: v.optional(v.nullable(v.string())),
  emailAddress: v.optional(v.string()),
})

export const EmailIntakeAddressConnection: v.GenericSchema<unknown, T.EmailIntakeAddressConnection> = v.looseObject({
  edges: v.optional(v.array(v.lazy(() => EmailIntakeAddressEdge))),
  nodes: v.optional(v.array(v.lazy(() => EmailIntakeAddress))),
  pageInfo: v.optional(v.lazy(() => PageInfo)),
})

export const EmailIntakeAddressCreateInput: v.GenericSchema<unknown, T.EmailIntakeAddressCreateInput> = v.looseObject({
  id: v.optional(v.nullable(v.string())),
  type: v.optional(v.nullable(v.lazy(() => EmailIntakeAddressType))),
  forwardingEmailAddress: v.optional(v.nullable(v.string())),
  senderName: v.optional(v.nullable(v.string())),
  teamId: v.optional(v.nullable(v.string())),
  templateId: v.optional(v.nullable(v.string())),
  repliesEnabled: v.optional(v.nullable(v.boolean())),
  useUserNamesInReplies: v.optional(v.nullable(v.boolean())),
  issueCreatedAutoReplyEnabled: v.optional(v.nullable(v.boolean())),
  issueCreatedAutoReply: v.optional(v.nullable(v.string())),
  issueCompletedAutoReplyEnabled: v.optional(v.nullable(v.boolean())),
  issueCompletedAutoReply: v.optional(v.nullable(v.string())),
  issueCanceledAutoReplyEnabled: v.optional(v.nullable(v.boolean())),
  issueCanceledAutoReply: v.optional(v.nullable(v.string())),
  customerRequestsEnabled: v.optional(v.nullable(v.boolean())),
  reopenOnReply: v.optional(v.nullable(v.boolean())),
})

export const EmailIntakeAddressEdge: v.GenericSchema<unknown, T.EmailIntakeAddressEdge> = v.looseObject({
  node: v.optional(v.lazy(() => EmailIntakeAddress)),
  cursor: v.optional(v.string()),
})

export const EmailIntakeAddressPayload: v.GenericSchema<unknown, T.EmailIntakeAddressPayload> = v.looseObject({
  lastSyncId: v.optional(number()),
  emailIntakeAddress: v.optional(v.lazy(() => EmailIntakeAddress)),
  success: v.optional(v.boolean()),
})

export const EmailIntakeAddressRefreshSesDomainStatusPayload: v.GenericSchema<
  unknown,
  T.EmailIntakeAddressRefreshSesDomainStatusPayload
> = v.looseObject({
  success: v.optional(v.boolean()),
})

export const EmailIntakeAddressType: v.GenericSchema<unknown, T.EmailIntakeAddressType> = v.picklist([
  "team",
  "template",
  "asks",
  "asksWeb",
])

export const EmailIntakeAddressUpdateInput: v.GenericSchema<unknown, T.EmailIntakeAddressUpdateInput> = v.looseObject({
  enabled: v.optional(v.nullable(v.boolean())),
  forwardingEmailAddress: v.optional(v.nullable(v.string())),
  senderName: v.optional(v.nullable(v.string())),
  teamId: v.optional(v.nullable(v.string())),
  templateId: v.optional(v.nullable(v.string())),
  repliesEnabled: v.optional(v.nullable(v.boolean())),
  useUserNamesInReplies: v.optional(v.nullable(v.boolean())),
  issueCreatedAutoReplyEnabled: v.optional(v.nullable(v.boolean())),
  issueCreatedAutoReply: v.optional(v.nullable(v.string())),
  issueCompletedAutoReplyEnabled: v.optional(v.nullable(v.boolean())),
  issueCompletedAutoReply: v.optional(v.nullable(v.string())),
  issueCanceledAutoReplyEnabled: v.optional(v.nullable(v.boolean())),
  issueCanceledAutoReply: v.optional(v.nullable(v.string())),
  customerRequestsEnabled: v.optional(v.nullable(v.boolean())),
  reopenOnReply: v.optional(v.nullable(v.boolean())),
})

export const EmailUnsubscribeInput: v.GenericSchema<unknown, T.EmailUnsubscribeInput> = v.looseObject({
  type: v.string(),
  token: v.string(),
  userId: v.string(),
})

export const EmailUnsubscribePayload: v.GenericSchema<unknown, T.EmailUnsubscribePayload> = v.looseObject({
  success: v.optional(v.boolean()),
})

export const EmailUserAccountAuthChallengeInput: v.GenericSchema<unknown, T.EmailUserAccountAuthChallengeInput> =
  v.looseObject({
    email: v.string(),
    isDesktop: v.optional(v.nullable(v.boolean())),
    clientAuthCode: v.optional(v.nullable(v.string())),
    inviteLink: v.optional(v.nullable(v.string())),
    loginCodeOnly: v.optional(v.nullable(v.boolean())),
    challengeResponse: v.optional(v.nullable(v.string())),
    sessionId: v.optional(v.nullable(v.string())),
  })

export const EmailUserAccountAuthChallengeResponse: v.GenericSchema<unknown, T.EmailUserAccountAuthChallengeResponse> =
  v.looseObject({
    success: v.optional(v.boolean()),
    authType: v.optional(v.string()),
  })

export const Emoji: v.GenericSchema<unknown, T.Emoji> = v.looseObject({
  id: v.optional(v.string()),
  createdAt: v.optional(v.string()),
  updatedAt: v.optional(v.string()),
  archivedAt: v.optional(v.nullable(v.string())),
  name: v.optional(v.string()),
  url: v.optional(v.string()),
  source: v.optional(v.string()),
  creator: v.optional(v.nullable(v.lazy(() => User))),
  organization: v.optional(v.lazy(() => Organization)),
})

export const EmojiConnection: v.GenericSchema<unknown, T.EmojiConnection> = v.looseObject({
  edges: v.optional(v.array(v.lazy(() => EmojiEdge))),
  nodes: v.optional(v.array(v.lazy(() => Emoji))),
  pageInfo: v.optional(v.lazy(() => PageInfo)),
})

export const EmojiCreatedAtSort: v.GenericSchema<unknown, T.EmojiCreatedAtSort> = v.looseObject({
  nulls: v.optional(v.nullable(v.lazy(() => PaginationNulls))),
  order: v.optional(v.nullable(v.lazy(() => PaginationSortOrder))),
})

export const EmojiCreateInput: v.GenericSchema<unknown, T.EmojiCreateInput> = v.looseObject({
  id: v.optional(v.nullable(v.string())),
  name: v.string(),
  url: v.string(),
})

export const EmojiEdge: v.GenericSchema<unknown, T.EmojiEdge> = v.looseObject({
  node: v.optional(v.lazy(() => Emoji)),
  cursor: v.optional(v.string()),
})

export const EmojiFilter: v.GenericSchema<unknown, T.EmojiFilter> = v.looseObject({
  id: v.optional(v.nullable(v.lazy(() => IDComparator))),
  createdAt: v.optional(v.nullable(v.lazy(() => DateComparator))),
  updatedAt: v.optional(v.nullable(v.lazy(() => DateComparator))),
  name: v.optional(v.nullable(v.lazy(() => StringComparator))),
  and: v.optional(v.nullable(v.array(v.lazy(() => EmojiFilter)))),
  or: v.optional(v.nullable(v.array(v.lazy(() => EmojiFilter)))),
})

export const EmojiPayload: v.GenericSchema<unknown, T.EmojiPayload> = v.looseObject({
  lastSyncId: v.optional(number()),
  emoji: v.optional(v.lazy(() => Emoji)),
  success: v.optional(v.boolean()),
})

export const EmojiSortInput: v.GenericSchema<unknown, T.EmojiSortInput> = v.looseObject({
  createdAt: v.optional(v.nullable(v.lazy(() => EmojiCreatedAtSort))),
})

export const Entity: v.GenericSchema<unknown, T.Entity> = v.looseObject({
  id: v.optional(v.string()),
  createdAt: v.optional(v.string()),
  updatedAt: v.optional(v.string()),
  archivedAt: v.optional(v.nullable(v.string())),
})

export const EntityExternalLink: v.GenericSchema<unknown, T.EntityExternalLink> = v.looseObject({
  id: v.optional(v.string()),
  createdAt: v.optional(v.string()),
  updatedAt: v.optional(v.string()),
  archivedAt: v.optional(v.nullable(v.string())),
  url: v.optional(v.string()),
  label: v.optional(v.string()),
  sortOrder: v.optional(number()),
  creator: v.optional(v.nullable(v.lazy(() => User))),
  initiative: v.optional(v.nullable(v.lazy(() => Initiative))),
  project: v.optional(v.nullable(v.lazy(() => Project))),
})

export const EntityExternalLinkConnection: v.GenericSchema<unknown, T.EntityExternalLinkConnection> = v.looseObject({
  edges: v.optional(v.array(v.lazy(() => EntityExternalLinkEdge))),
  nodes: v.optional(v.array(v.lazy(() => EntityExternalLink))),
  pageInfo: v.optional(v.lazy(() => PageInfo)),
})

export const EntityExternalLinkCreateInput: v.GenericSchema<unknown, T.EntityExternalLinkCreateInput> = v.looseObject({
  id: v.optional(v.nullable(v.string())),
  url: v.string(),
  label: v.string(),
  initiativeId: v.optional(v.nullable(v.string())),
  projectId: v.optional(v.nullable(v.string())),
  releaseId: v.optional(v.nullable(v.string())),
  sortOrder: v.optional(v.nullable(number())),
})

export const EntityExternalLinkEdge: v.GenericSchema<unknown, T.EntityExternalLinkEdge> = v.looseObject({
  node: v.optional(v.lazy(() => EntityExternalLink)),
  cursor: v.optional(v.string()),
})

export const EntityExternalLinkPayload: v.GenericSchema<unknown, T.EntityExternalLinkPayload> = v.looseObject({
  lastSyncId: v.optional(number()),
  entityExternalLink: v.optional(v.lazy(() => EntityExternalLink)),
  success: v.optional(v.boolean()),
})

export const EntityExternalLinkUpdateInput: v.GenericSchema<unknown, T.EntityExternalLinkUpdateInput> = v.looseObject({
  url: v.optional(v.nullable(v.string())),
  label: v.optional(v.nullable(v.string())),
  sortOrder: v.optional(v.nullable(number())),
})

export const EntityIdentifierIDComparator: v.GenericSchema<unknown, T.EntityIdentifierIDComparator> = v.looseObject({
  eq: v.optional(v.nullable(v.string())),
  neq: v.optional(v.nullable(v.string())),
  in: v.optional(v.nullable(v.array(v.string()))),
  nin: v.optional(v.nullable(v.array(v.string()))),
})

export const EstimateComparator: v.GenericSchema<unknown, T.EstimateComparator> = v.looseObject({
  eq: v.optional(v.nullable(number())),
  neq: v.optional(v.nullable(number())),
  in: v.optional(v.nullable(v.array(number()))),
  nin: v.optional(v.nullable(v.array(number()))),
  null: v.optional(v.nullable(v.boolean())),
  lt: v.optional(v.nullable(number())),
  lte: v.optional(v.nullable(number())),
  gt: v.optional(v.nullable(number())),
  gte: v.optional(v.nullable(number())),
  or: v.optional(v.nullable(v.array(v.lazy(() => NullableNumberComparator)))),
  and: v.optional(v.nullable(v.array(v.lazy(() => NullableNumberComparator)))),
})

export const EstimateSort: v.GenericSchema<unknown, T.EstimateSort> = v.looseObject({
  nulls: v.optional(v.nullable(v.lazy(() => PaginationNulls))),
  order: v.optional(v.nullable(v.lazy(() => PaginationSortOrder))),
})

export const EventTrackingInput: v.GenericSchema<unknown, T.EventTrackingInput> = v.looseObject({
  event: v.string(),
  properties: v.optional(v.nullable(v.unknown())),
  sessionId: v.optional(v.nullable(v.string())),
})

export const EventTrackingPayload: v.GenericSchema<unknown, T.EventTrackingPayload> = v.looseObject({
  success: v.optional(v.boolean()),
})

export const ExternalEntityInfo: v.GenericSchema<unknown, T.ExternalEntityInfo> = v.looseObject({
  id: v.optional(v.string()),
  service: v.optional(v.lazy(() => ExternalSyncService)),
  metadata: v.optional(v.nullable(v.lazy(() => ExternalEntityInfoMetadata))),
})

export const ExternalEntityInfoGithubMetadata: v.GenericSchema<unknown, T.ExternalEntityInfoGithubMetadata> =
  v.looseObject({
    repo: v.optional(v.nullable(v.string())),
    owner: v.optional(v.nullable(v.string())),
    number: v.optional(v.nullable(number())),
  })

export const ExternalEntityInfoJiraMetadata: v.GenericSchema<unknown, T.ExternalEntityInfoJiraMetadata> = v.looseObject(
  {
    issueKey: v.optional(v.nullable(v.string())),
    projectId: v.optional(v.nullable(v.string())),
    issueTypeId: v.optional(v.nullable(v.string())),
  },
)

export const ExternalEntityInfoMetadata: v.GenericSchema<unknown, T.ExternalEntityInfoMetadata> = v.union([
  v.lazy(() => ExternalEntityInfoGithubMetadata),
  v.lazy(() => ExternalEntityInfoJiraMetadata),
  v.lazy(() => ExternalEntitySlackMetadata),
])

export const ExternalEntitySlackMetadata: v.GenericSchema<unknown, T.ExternalEntitySlackMetadata> = v.looseObject({
  isFromSlack: v.optional(v.boolean()),
  channelId: v.optional(v.nullable(v.string())),
  channelName: v.optional(v.nullable(v.string())),
  messageUrl: v.optional(v.nullable(v.string())),
})

export const ExternalSyncService: v.GenericSchema<unknown, T.ExternalSyncService> = v.picklist([
  "jira",
  "github",
  "slack",
])

export const ExternalUser: v.GenericSchema<unknown, T.ExternalUser> = v.looseObject({
  id: v.optional(v.string()),
  createdAt: v.optional(v.string()),
  updatedAt: v.optional(v.string()),
  archivedAt: v.optional(v.nullable(v.string())),
  name: v.optional(v.string()),
  displayName: v.optional(v.string()),
  email: v.optional(v.nullable(v.string())),
  avatarUrl: v.optional(v.nullable(v.string())),
  organization: v.optional(v.lazy(() => Organization)),
  lastSeen: v.optional(v.nullable(v.string())),
})

export const ExternalUserConnection: v.GenericSchema<unknown, T.ExternalUserConnection> = v.looseObject({
  edges: v.optional(v.array(v.lazy(() => ExternalUserEdge))),
  nodes: v.optional(v.array(v.lazy(() => ExternalUser))),
  pageInfo: v.optional(v.lazy(() => PageInfo)),
})

export const ExternalUserEdge: v.GenericSchema<unknown, T.ExternalUserEdge> = v.looseObject({
  node: v.optional(v.lazy(() => ExternalUser)),
  cursor: v.optional(v.string()),
})

export const Facet: v.GenericSchema<unknown, T.Facet> = v.looseObject({
  id: v.optional(v.string()),
  createdAt: v.optional(v.string()),
  updatedAt: v.optional(v.string()),
  archivedAt: v.optional(v.nullable(v.string())),
  sortOrder: v.optional(number()),
  sourceOrganization: v.optional(v.nullable(v.lazy(() => Organization))),
  sourceTeam: v.optional(v.nullable(v.lazy(() => Team))),
  sourceProject: v.optional(v.nullable(v.lazy(() => Project))),
  sourceInitiative: v.optional(v.nullable(v.lazy(() => Initiative))),
  sourceFeedUser: v.optional(v.nullable(v.lazy(() => User))),
  sourcePage: v.optional(v.nullable(v.lazy(() => FacetPageSource))),
  targetCustomView: v.optional(v.nullable(v.lazy(() => CustomView))),
})

export const FacetPageSource: v.GenericSchema<unknown, T.FacetPageSource> = v.picklist([
  "projects",
  "initiatives",
  "teamIssues",
  "feed",
])

export const Favorite: v.GenericSchema<unknown, T.Favorite> = v.looseObject({
  id: v.optional(v.string()),
  createdAt: v.optional(v.string()),
  updatedAt: v.optional(v.string()),
  archivedAt: v.optional(v.nullable(v.string())),
  type: v.optional(v.string()),
  parent: v.optional(v.nullable(v.lazy(() => Favorite))),
  folderName: v.optional(v.nullable(v.string())),
  liveFolderPreset: v.optional(v.nullable(v.string())),
  liveFolderDefinition: v.optional(v.nullable(v.unknown())),
  projectTab: v.optional(v.nullable(v.lazy(() => ProjectTab))),
  predefinedViewType: v.optional(v.nullable(v.string())),
  initiativeTab: v.optional(v.nullable(v.lazy(() => InitiativeTab))),
  pipelineTab: v.optional(v.nullable(v.lazy(() => PipelineTab))),
  owner: v.optional(v.lazy(() => User)),
  sortOrder: v.optional(number()),
  children: v.optional(v.lazy(() => FavoriteConnection)),
  issue: v.optional(v.nullable(v.lazy(() => Issue))),
  project: v.optional(v.nullable(v.lazy(() => Project))),
  projectTeam: v.optional(v.nullable(v.lazy(() => Team))),
  cycle: v.optional(v.nullable(v.lazy(() => Cycle))),
  customView: v.optional(v.nullable(v.lazy(() => CustomView))),
  predefinedViewTeam: v.optional(v.nullable(v.lazy(() => Team))),
  document: v.optional(v.nullable(v.lazy(() => Document))),
  initiative: v.optional(v.nullable(v.lazy(() => Initiative))),
  label: v.optional(v.nullable(v.lazy(() => IssueLabel))),
  projectLabel: v.optional(v.nullable(v.lazy(() => ProjectLabel))),
  user: v.optional(v.nullable(v.lazy(() => User))),
  customer: v.optional(v.nullable(v.lazy(() => Customer))),
  release: v.optional(v.nullable(v.lazy(() => Release))),
  releasePipeline: v.optional(v.nullable(v.lazy(() => ReleasePipeline))),
  releaseNote: v.optional(v.nullable(v.lazy(() => ReleaseNote))),
  team: v.optional(v.nullable(v.lazy(() => Team))),
  workflowDefinition: v.optional(v.nullable(v.lazy(() => WorkflowDefinition))),
  url: v.optional(v.nullable(v.string())),
})

export const FavoriteConnection: v.GenericSchema<unknown, T.FavoriteConnection> = v.looseObject({
  edges: v.optional(v.array(v.lazy(() => FavoriteEdge))),
  nodes: v.optional(v.array(v.lazy(() => Favorite))),
  pageInfo: v.optional(v.lazy(() => PageInfo)),
})

export const FavoriteCreateInput: v.GenericSchema<unknown, T.FavoriteCreateInput> = v.looseObject({
  id: v.optional(v.nullable(v.string())),
  folderName: v.optional(v.nullable(v.string())),
  liveFolderPreset: v.optional(v.nullable(v.string())),
  parentId: v.optional(v.nullable(v.string())),
  issueId: v.optional(v.nullable(v.string())),
  facetId: v.optional(v.nullable(v.string())),
  projectId: v.optional(v.nullable(v.string())),
  projectTab: v.optional(v.nullable(v.lazy(() => ProjectTab))),
  predefinedViewType: v.optional(v.nullable(v.string())),
  predefinedViewTeamId: v.optional(v.nullable(v.string())),
  cycleId: v.optional(v.nullable(v.string())),
  customViewId: v.optional(v.nullable(v.string())),
  documentId: v.optional(v.nullable(v.string())),
  initiativeTab: v.optional(v.nullable(v.lazy(() => InitiativeTab))),
  labelId: v.optional(v.nullable(v.string())),
  projectLabelId: v.optional(v.nullable(v.string())),
  userId: v.optional(v.nullable(v.string())),
  sortOrder: v.optional(v.nullable(number())),
  customerId: v.optional(v.nullable(v.string())),
  dashboardId: v.optional(v.nullable(v.string())),
  pullRequestId: v.optional(v.nullable(v.string())),
  releaseId: v.optional(v.nullable(v.string())),
  releasePipelineId: v.optional(v.nullable(v.string())),
  pipelineTab: v.optional(v.nullable(v.lazy(() => PipelineTab))),
  releaseNoteId: v.optional(v.nullable(v.string())),
  teamId: v.optional(v.nullable(v.string())),
  workflowDefinitionId: v.optional(v.nullable(v.string())),
})

export const FavoriteEdge: v.GenericSchema<unknown, T.FavoriteEdge> = v.looseObject({
  node: v.optional(v.lazy(() => Favorite)),
  cursor: v.optional(v.string()),
})

export const FavoritePayload: v.GenericSchema<unknown, T.FavoritePayload> = v.looseObject({
  lastSyncId: v.optional(number()),
  favorite: v.optional(v.lazy(() => Favorite)),
  success: v.optional(v.boolean()),
})

export const FavoriteUpdateInput: v.GenericSchema<unknown, T.FavoriteUpdateInput> = v.looseObject({
  sortOrder: v.optional(v.nullable(number())),
  parentId: v.optional(v.nullable(v.string())),
  folderName: v.optional(v.nullable(v.string())),
})

export const FeedItemFilter: v.GenericSchema<unknown, T.FeedItemFilter> = v.looseObject({
  id: v.optional(v.nullable(v.lazy(() => IDComparator))),
  createdAt: v.optional(v.nullable(v.lazy(() => DateComparator))),
  updatedAt: v.optional(v.nullable(v.lazy(() => DateComparator))),
  author: v.optional(v.nullable(v.lazy(() => UserFilter))),
  updateType: v.optional(v.nullable(v.lazy(() => StringComparator))),
  updateHealth: v.optional(v.nullable(v.lazy(() => StringComparator))),
  projectUpdate: v.optional(v.nullable(v.lazy(() => ProjectUpdateFilter))),
  relatedInitiatives: v.optional(v.nullable(v.lazy(() => InitiativeCollectionFilter))),
  relatedTeams: v.optional(v.nullable(v.lazy(() => TeamCollectionFilter))),
  and: v.optional(v.nullable(v.array(v.lazy(() => FeedItemFilter)))),
  or: v.optional(v.nullable(v.array(v.lazy(() => FeedItemFilter)))),
})

export const FeedSummarySchedule: v.GenericSchema<unknown, T.FeedSummarySchedule> = v.picklist([
  "daily",
  "weekly",
  "never",
])

export const FileUploadDeletePayload: v.GenericSchema<unknown, T.FileUploadDeletePayload> = v.looseObject({
  success: v.optional(v.boolean()),
})

export const FrequencyResolutionType: v.GenericSchema<unknown, T.FrequencyResolutionType> = v.picklist([
  "daily",
  "weekly",
])

export const FrontAttachmentPayload: v.GenericSchema<unknown, T.FrontAttachmentPayload> = v.looseObject({
  lastSyncId: v.optional(number()),
  attachment: v.optional(v.lazy(() => Attachment)),
  success: v.optional(v.boolean()),
})

export const GitAutomationState: v.GenericSchema<unknown, T.GitAutomationState> = v.looseObject({
  id: v.optional(v.string()),
  createdAt: v.optional(v.string()),
  updatedAt: v.optional(v.string()),
  archivedAt: v.optional(v.nullable(v.string())),
  state: v.optional(v.nullable(v.lazy(() => WorkflowState))),
  team: v.optional(v.lazy(() => Team)),
  targetBranch: v.optional(v.nullable(v.lazy(() => GitAutomationTargetBranch))),
  event: v.optional(v.lazy(() => GitAutomationStates)),
  branchPattern: v.optional(v.nullable(v.string())),
})

export const GitAutomationStateConnection: v.GenericSchema<unknown, T.GitAutomationStateConnection> = v.looseObject({
  edges: v.optional(v.array(v.lazy(() => GitAutomationStateEdge))),
  nodes: v.optional(v.array(v.lazy(() => GitAutomationState))),
  pageInfo: v.optional(v.lazy(() => PageInfo)),
})

export const GitAutomationStateCreateInput: v.GenericSchema<unknown, T.GitAutomationStateCreateInput> = v.looseObject({
  id: v.optional(v.nullable(v.string())),
  teamId: v.string(),
  stateId: v.optional(v.nullable(v.string())),
  targetBranchId: v.optional(v.nullable(v.string())),
  event: v.lazy(() => GitAutomationStates),
})

export const GitAutomationStateEdge: v.GenericSchema<unknown, T.GitAutomationStateEdge> = v.looseObject({
  node: v.optional(v.lazy(() => GitAutomationState)),
  cursor: v.optional(v.string()),
})

export const GitAutomationStatePayload: v.GenericSchema<unknown, T.GitAutomationStatePayload> = v.looseObject({
  lastSyncId: v.optional(number()),
  gitAutomationState: v.optional(v.lazy(() => GitAutomationState)),
  success: v.optional(v.boolean()),
})

export const GitAutomationStates: v.GenericSchema<unknown, T.GitAutomationStates> = v.picklist([
  "draft",
  "start",
  "review",
  "mergeable",
  "merge",
])

export const GitAutomationStateUpdateInput: v.GenericSchema<unknown, T.GitAutomationStateUpdateInput> = v.looseObject({
  stateId: v.optional(v.nullable(v.string())),
  targetBranchId: v.optional(v.nullable(v.string())),
  event: v.optional(v.nullable(v.lazy(() => GitAutomationStates))),
})

export const GitAutomationTargetBranch: v.GenericSchema<unknown, T.GitAutomationTargetBranch> = v.looseObject({
  id: v.optional(v.string()),
  createdAt: v.optional(v.string()),
  updatedAt: v.optional(v.string()),
  archivedAt: v.optional(v.nullable(v.string())),
  team: v.optional(v.lazy(() => Team)),
  branchPattern: v.optional(v.string()),
  isRegex: v.optional(v.boolean()),
  automationStates: v.optional(v.lazy(() => GitAutomationStateConnection)),
})

export const GitAutomationTargetBranchCreateInput: v.GenericSchema<unknown, T.GitAutomationTargetBranchCreateInput> =
  v.looseObject({
    id: v.optional(v.nullable(v.string())),
    teamId: v.string(),
    branchPattern: v.string(),
    isRegex: v.optional(v.nullable(v.boolean())),
  })

export const GitAutomationTargetBranchPayload: v.GenericSchema<unknown, T.GitAutomationTargetBranchPayload> =
  v.looseObject({
    lastSyncId: v.optional(number()),
    targetBranch: v.optional(v.lazy(() => GitAutomationTargetBranch)),
    success: v.optional(v.boolean()),
  })

export const GitAutomationTargetBranchUpdateInput: v.GenericSchema<unknown, T.GitAutomationTargetBranchUpdateInput> =
  v.looseObject({
    branchPattern: v.optional(v.nullable(v.string())),
    isRegex: v.optional(v.nullable(v.boolean())),
  })

export const GitHubCommitIntegrationPayload: v.GenericSchema<unknown, T.GitHubCommitIntegrationPayload> = v.looseObject(
  {
    lastSyncId: v.optional(number()),
    integration: v.optional(v.nullable(v.lazy(() => Integration))),
    success: v.optional(v.boolean()),
    gitHub: v.optional(v.nullable(v.lazy(() => GitHubIntegrationConnectDetails))),
    webhookSecret: v.optional(v.string()),
  },
)

export const GitHubEnterpriseServerInstallVerificationPayload: v.GenericSchema<
  unknown,
  T.GitHubEnterpriseServerInstallVerificationPayload
> = v.looseObject({
  success: v.optional(v.boolean()),
})

export const GitHubEnterpriseServerPayload: v.GenericSchema<unknown, T.GitHubEnterpriseServerPayload> = v.looseObject({
  lastSyncId: v.optional(number()),
  integration: v.optional(v.nullable(v.lazy(() => Integration))),
  success: v.optional(v.boolean()),
  gitHub: v.optional(v.nullable(v.lazy(() => GitHubIntegrationConnectDetails))),
  setupUrl: v.optional(v.string()),
  installUrl: v.optional(v.string()),
  webhookSecret: v.optional(v.string()),
})

export const GitHubIntegrationConnectDetails: v.GenericSchema<unknown, T.GitHubIntegrationConnectDetails> =
  v.looseObject({
    lostRepositoryNames: v.optional(v.nullable(v.array(v.string()))),
  })

export const GitHubRemoveCodeAccessAction: v.GenericSchema<unknown, T.GitHubRemoveCodeAccessAction> = v.picklist([
  "Done",
  "InstallBasicApp",
])

export const GithubTeam: v.GenericSchema<unknown, T.GithubTeam> = v.looseObject({
  id: v.optional(v.string()),
  createdAt: v.optional(v.string()),
  updatedAt: v.optional(v.string()),
  archivedAt: v.optional(v.nullable(v.string())),
  name: v.optional(v.string()),
  slug: v.optional(v.string()),
  description: v.optional(v.nullable(v.string())),
  avatarUrl: v.optional(v.nullable(v.string())),
  organization: v.optional(v.lazy(() => Organization)),
  lastSeen: v.optional(v.nullable(v.string())),
})

export const GitLabIntegrationCreatePayload: v.GenericSchema<unknown, T.GitLabIntegrationCreatePayload> = v.looseObject(
  {
    lastSyncId: v.optional(number()),
    integration: v.optional(v.nullable(v.lazy(() => Integration))),
    success: v.optional(v.boolean()),
    gitHub: v.optional(v.nullable(v.lazy(() => GitHubIntegrationConnectDetails))),
    webhookSecret: v.optional(v.string()),
    error: v.optional(v.nullable(v.string())),
    errorResponseBody: v.optional(v.nullable(v.string())),
    errorResponseHeaders: v.optional(v.nullable(v.string())),
    errorRequest: v.optional(v.nullable(v.string())),
  },
)

export const GitLabTestConnectionPayload: v.GenericSchema<unknown, T.GitLabTestConnectionPayload> = v.looseObject({
  lastSyncId: v.optional(number()),
  integration: v.optional(v.nullable(v.lazy(() => Integration))),
  success: v.optional(v.boolean()),
  gitHub: v.optional(v.nullable(v.lazy(() => GitHubIntegrationConnectDetails))),
  error: v.optional(v.nullable(v.string())),
  errorResponseBody: v.optional(v.nullable(v.string())),
  errorResponseHeaders: v.optional(v.nullable(v.string())),
  errorRequest: v.optional(v.nullable(v.string())),
})

export const GitLinkKind: v.GenericSchema<unknown, T.GitLinkKind> = v.picklist(["closes", "contributes", "links"])

export const GoogleUserAccountAuthInput: v.GenericSchema<unknown, T.GoogleUserAccountAuthInput> = v.looseObject({
  code: v.string(),
  redirectUri: v.optional(v.nullable(v.string())),
  timezone: v.string(),
  inviteLink: v.optional(v.nullable(v.string())),
  disallowSignup: v.optional(v.nullable(v.boolean())),
  sessionId: v.optional(v.nullable(v.string())),
})

export const IDComparator: v.GenericSchema<unknown, T.IDComparator> = v.looseObject({
  eq: v.optional(v.nullable(v.string())),
  neq: v.optional(v.nullable(v.string())),
  in: v.optional(v.nullable(v.array(v.string()))),
  nin: v.optional(v.nullable(v.array(v.string()))),
})

export const IdentityProvider: v.GenericSchema<unknown, T.IdentityProvider> = v.looseObject({
  id: v.optional(v.string()),
  createdAt: v.optional(v.string()),
  updatedAt: v.optional(v.string()),
  archivedAt: v.optional(v.nullable(v.string())),
  defaultMigrated: v.optional(v.boolean()),
  type: v.optional(v.lazy(() => IdentityProviderType)),
  samlEnabled: v.optional(v.boolean()),
  ssoEndpoint: v.optional(v.nullable(v.string())),
  ssoBinding: v.optional(v.nullable(v.string())),
  ssoSignAlgo: v.optional(v.nullable(v.string())),
  ssoSigningCert: v.optional(v.nullable(v.string())),
  issuerEntityId: v.optional(v.nullable(v.string())),
  spEntityId: v.optional(v.nullable(v.string())),
  priority: v.optional(v.nullable(number())),
  ssoVerifiedAt: v.optional(v.nullable(v.string())),
  scimEnabled: v.optional(v.boolean()),
  allowNameChange: v.optional(v.boolean()),
})

export const IdentityProviderType: v.GenericSchema<unknown, T.IdentityProviderType> = v.picklist([
  "general",
  "webForms",
])

export const ImageUploadFromUrlPayload: v.GenericSchema<unknown, T.ImageUploadFromUrlPayload> = v.looseObject({
  lastSyncId: v.optional(number()),
  url: v.optional(v.nullable(v.string())),
  success: v.optional(v.boolean()),
})

export const ImportUsersOption: v.GenericSchema<unknown, T.ImportUsersOption> = v.picklist([
  "matchAndInvite",
  "matchOnly",
  "skip",
])

export const InboxNotificationUpdateInput: v.GenericSchema<unknown, T.InboxNotificationUpdateInput> = v.looseObject({
  read: v.optional(v.nullable(v.boolean())),
  snoozedUntilAt: v.optional(v.nullable(v.string())),
})

export const InboxNotificationUpdatePayload: v.GenericSchema<unknown, T.InboxNotificationUpdatePayload> = v.looseObject(
  {
    lastSyncId: v.optional(number()),
    notification: v.optional(v.lazy(() => Notification)),
    updatedNotifications: v.optional(v.array(v.lazy(() => Notification))),
    success: v.optional(v.boolean()),
  },
)

export const InheritanceEntityMapping: v.GenericSchema<unknown, T.InheritanceEntityMapping> = v.looseObject({
  workflowStates: v.unknown(),
  issueLabels: v.optional(v.nullable(v.unknown())),
  projectLabels: v.optional(v.nullable(v.unknown())),
})

export const Initiative: v.GenericSchema<unknown, T.Initiative> = v.looseObject({
  id: v.optional(v.string()),
  createdAt: v.optional(v.string()),
  updatedAt: v.optional(v.string()),
  archivedAt: v.optional(v.nullable(v.string())),
  updateReminderFrequencyInWeeks: v.optional(v.nullable(number())),
  updateReminderFrequency: v.optional(v.nullable(number())),
  frequencyResolution: v.optional(v.lazy(() => FrequencyResolutionType)),
  updateRemindersDay: v.optional(v.nullable(v.lazy(() => Day))),
  updateRemindersHour: v.optional(v.nullable(number())),
  name: v.optional(v.string()),
  description: v.optional(v.nullable(v.string())),
  organization: v.optional(v.lazy(() => Organization)),
  creator: v.optional(v.nullable(v.lazy(() => User))),
  owner: v.optional(v.nullable(v.lazy(() => User))),
  leadTeam: v.optional(v.nullable(v.lazy(() => Team))),
  slugId: v.optional(v.string()),
  sortOrder: v.optional(number()),
  color: v.optional(v.nullable(v.string())),
  icon: v.optional(v.nullable(v.string())),
  trashed: v.optional(v.nullable(v.boolean())),
  targetDate: v.optional(v.nullable(v.string())),
  targetDateResolution: v.optional(v.nullable(v.lazy(() => DateResolutionType))),
  status: v.optional(v.lazy(() => InitiativeStatus)),
  lastUpdate: v.optional(v.nullable(v.lazy(() => InitiativeUpdate))),
  health: v.optional(v.nullable(v.lazy(() => InitiativeUpdateHealthType))),
  healthUpdatedAt: v.optional(v.nullable(v.string())),
  startedAt: v.optional(v.nullable(v.string())),
  completedAt: v.optional(v.nullable(v.string())),
  labelIds: v.optional(v.array(v.string())),
  priority: v.optional(integer()),
  prioritySortOrder: v.optional(number()),
  url: v.optional(v.string()),
  visibility: v.optional(v.lazy(() => InitiativeVisibility)),
  projects: v.optional(v.lazy(() => ProjectConnection)),
  links: v.optional(v.lazy(() => EntityExternalLinkConnection)),
  integrationsSettings: v.optional(v.nullable(v.lazy(() => IntegrationsSettings))),
  history: v.optional(v.lazy(() => InitiativeHistoryConnection)),
  initiativeUpdates: v.optional(v.lazy(() => InitiativeUpdateConnection)),
  subInitiatives: v.optional(v.lazy(() => InitiativeConnection)),
  parentInitiative: v.optional(v.nullable(v.lazy(() => Initiative))),
  content: v.optional(v.nullable(v.string())),
  documentContent: v.optional(v.nullable(v.lazy(() => DocumentContent))),
  documents: v.optional(v.lazy(() => DocumentConnection)),
  labels: v.optional(v.lazy(() => InitiativeLabelConnection)),
})

export const InitiativeArchivePayload: v.GenericSchema<unknown, T.InitiativeArchivePayload> = v.looseObject({
  lastSyncId: v.optional(number()),
  success: v.optional(v.boolean()),
  entity: v.optional(v.nullable(v.lazy(() => Initiative))),
})

export const InitiativeCollectionFilter: v.GenericSchema<unknown, T.InitiativeCollectionFilter> = v.looseObject({
  id: v.optional(v.nullable(v.lazy(() => EntityIdentifierIDComparator))),
  createdAt: v.optional(v.nullable(v.lazy(() => DateComparator))),
  updatedAt: v.optional(v.nullable(v.lazy(() => DateComparator))),
  name: v.optional(v.nullable(v.lazy(() => StringComparator))),
  slugId: v.optional(v.nullable(v.lazy(() => StringComparator))),
  customIdentifier: v.optional(v.nullable(v.lazy(() => NullableStringComparator))),
  searchableContent: v.optional(v.nullable(v.lazy(() => ContentComparator))),
  creator: v.optional(v.nullable(v.lazy(() => NullableUserFilter))),
  status: v.optional(v.nullable(v.lazy(() => StringComparator))),
  priority: v.optional(v.nullable(v.lazy(() => NullableNumberComparator))),
  teams: v.optional(v.nullable(v.lazy(() => TeamCollectionFilter))),
  leadTeam: v.optional(v.nullable(v.lazy(() => NullableTeamFilter))),
  owner: v.optional(v.nullable(v.lazy(() => NullableUserFilter))),
  targetDate: v.optional(v.nullable(v.lazy(() => NullableDateComparator))),
  startedAt: v.optional(v.nullable(v.lazy(() => NullableDateComparator))),
  completedAt: v.optional(v.nullable(v.lazy(() => NullableDateComparator))),
  canceledAt: v.optional(v.nullable(v.lazy(() => NullableDateComparator))),
  health: v.optional(v.nullable(v.lazy(() => StringComparator))),
  healthWithAge: v.optional(v.nullable(v.lazy(() => StringComparator))),
  activityType: v.optional(v.nullable(v.lazy(() => StringComparator))),
  ancestors: v.optional(v.nullable(v.lazy(() => InitiativeCollectionFilter))),
  labels: v.optional(v.nullable(v.lazy(() => InitiativeLabelCollectionFilter))),
  projects: v.optional(v.nullable(v.lazy(() => ProjectCollectionFilter))),
  initiativeUpdates: v.optional(v.nullable(v.lazy(() => InitiativeUpdatesCollectionFilter))),
  and: v.optional(v.nullable(v.array(v.lazy(() => InitiativeCollectionFilter)))),
  or: v.optional(v.nullable(v.array(v.lazy(() => InitiativeCollectionFilter)))),
  some: v.optional(v.nullable(v.lazy(() => InitiativeFilter))),
  every: v.optional(v.nullable(v.lazy(() => InitiativeFilter))),
  length: v.optional(v.nullable(v.lazy(() => NumberComparator))),
})

export const InitiativeConnection: v.GenericSchema<unknown, T.InitiativeConnection> = v.looseObject({
  edges: v.optional(v.array(v.lazy(() => InitiativeEdge))),
  nodes: v.optional(v.array(v.lazy(() => Initiative))),
  pageInfo: v.optional(v.lazy(() => PageInfo)),
})

export const InitiativeCreatedAtSort: v.GenericSchema<unknown, T.InitiativeCreatedAtSort> = v.looseObject({
  nulls: v.optional(v.nullable(v.lazy(() => PaginationNulls))),
  order: v.optional(v.nullable(v.lazy(() => PaginationSortOrder))),
})

export const InitiativeCreateInput: v.GenericSchema<unknown, T.InitiativeCreateInput> = v.looseObject({
  id: v.optional(v.nullable(v.string())),
  name: v.string(),
  description: v.optional(v.nullable(v.string())),
  ownerId: v.optional(v.nullable(v.string())),
  leadTeamId: v.optional(v.nullable(v.string())),
  sortOrder: v.optional(v.nullable(number())),
  prioritySortOrder: v.optional(v.nullable(number())),
  color: v.optional(v.nullable(v.string())),
  icon: v.optional(v.nullable(v.string())),
  status: v.optional(v.nullable(v.lazy(() => InitiativeStatus))),
  targetDate: v.optional(v.nullable(v.string())),
  targetDateResolution: v.optional(v.nullable(v.lazy(() => DateResolutionType))),
  content: v.optional(v.nullable(v.string())),
  priority: v.optional(v.nullable(integer())),
  labelIds: v.optional(v.nullable(v.array(v.string()))),
})

export const InitiativeEdge: v.GenericSchema<unknown, T.InitiativeEdge> = v.looseObject({
  node: v.optional(v.lazy(() => Initiative)),
  cursor: v.optional(v.string()),
})

export const InitiativeFilter: v.GenericSchema<unknown, T.InitiativeFilter> = v.looseObject({
  id: v.optional(v.nullable(v.lazy(() => EntityIdentifierIDComparator))),
  createdAt: v.optional(v.nullable(v.lazy(() => DateComparator))),
  updatedAt: v.optional(v.nullable(v.lazy(() => DateComparator))),
  name: v.optional(v.nullable(v.lazy(() => StringComparator))),
  slugId: v.optional(v.nullable(v.lazy(() => StringComparator))),
  customIdentifier: v.optional(v.nullable(v.lazy(() => NullableStringComparator))),
  searchableContent: v.optional(v.nullable(v.lazy(() => ContentComparator))),
  creator: v.optional(v.nullable(v.lazy(() => NullableUserFilter))),
  status: v.optional(v.nullable(v.lazy(() => StringComparator))),
  priority: v.optional(v.nullable(v.lazy(() => NullableNumberComparator))),
  teams: v.optional(v.nullable(v.lazy(() => TeamCollectionFilter))),
  leadTeam: v.optional(v.nullable(v.lazy(() => NullableTeamFilter))),
  owner: v.optional(v.nullable(v.lazy(() => NullableUserFilter))),
  targetDate: v.optional(v.nullable(v.lazy(() => NullableDateComparator))),
  startedAt: v.optional(v.nullable(v.lazy(() => NullableDateComparator))),
  completedAt: v.optional(v.nullable(v.lazy(() => NullableDateComparator))),
  canceledAt: v.optional(v.nullable(v.lazy(() => NullableDateComparator))),
  health: v.optional(v.nullable(v.lazy(() => StringComparator))),
  healthWithAge: v.optional(v.nullable(v.lazy(() => StringComparator))),
  activityType: v.optional(v.nullable(v.lazy(() => StringComparator))),
  ancestors: v.optional(v.nullable(v.lazy(() => InitiativeCollectionFilter))),
  labels: v.optional(v.nullable(v.lazy(() => InitiativeLabelCollectionFilter))),
  projects: v.optional(v.nullable(v.lazy(() => ProjectCollectionFilter))),
  initiativeUpdates: v.optional(v.nullable(v.lazy(() => InitiativeUpdatesCollectionFilter))),
  and: v.optional(v.nullable(v.array(v.lazy(() => InitiativeFilter)))),
  or: v.optional(v.nullable(v.array(v.lazy(() => InitiativeFilter)))),
})

export const InitiativeFilterSuggestionPayload: v.GenericSchema<unknown, T.InitiativeFilterSuggestionPayload> =
  v.looseObject({
    filter: v.optional(v.nullable(v.unknown())),
    logId: v.optional(v.nullable(v.string())),
  })

export const InitiativeHealthSort: v.GenericSchema<unknown, T.InitiativeHealthSort> = v.looseObject({
  nulls: v.optional(v.nullable(v.lazy(() => PaginationNulls))),
  order: v.optional(v.nullable(v.lazy(() => PaginationSortOrder))),
})

export const InitiativeHealthUpdatedAtSort: v.GenericSchema<unknown, T.InitiativeHealthUpdatedAtSort> = v.looseObject({
  nulls: v.optional(v.nullable(v.lazy(() => PaginationNulls))),
  order: v.optional(v.nullable(v.lazy(() => PaginationSortOrder))),
})

export const InitiativeHistory: v.GenericSchema<unknown, T.InitiativeHistory> = v.looseObject({
  id: v.optional(v.string()),
  createdAt: v.optional(v.string()),
  updatedAt: v.optional(v.string()),
  archivedAt: v.optional(v.nullable(v.string())),
  entries: v.optional(v.unknown()),
  initiative: v.optional(v.lazy(() => Initiative)),
})

export const InitiativeHistoryConnection: v.GenericSchema<unknown, T.InitiativeHistoryConnection> = v.looseObject({
  edges: v.optional(v.array(v.lazy(() => InitiativeHistoryEdge))),
  nodes: v.optional(v.array(v.lazy(() => InitiativeHistory))),
  pageInfo: v.optional(v.lazy(() => PageInfo)),
})

export const InitiativeHistoryEdge: v.GenericSchema<unknown, T.InitiativeHistoryEdge> = v.looseObject({
  node: v.optional(v.lazy(() => InitiativeHistory)),
  cursor: v.optional(v.string()),
})

export const InitiativeLabel: v.GenericSchema<unknown, T.InitiativeLabel> = v.looseObject({
  id: v.optional(v.string()),
  createdAt: v.optional(v.string()),
  updatedAt: v.optional(v.string()),
  archivedAt: v.optional(v.nullable(v.string())),
  name: v.optional(v.string()),
  description: v.optional(v.nullable(v.string())),
  color: v.optional(v.string()),
  isGroup: v.optional(v.boolean()),
  lastAppliedAt: v.optional(v.nullable(v.string())),
  groupType: v.optional(v.nullable(v.lazy(() => LabelGroupType))),
  organization: v.optional(v.lazy(() => Organization)),
  creator: v.optional(v.nullable(v.lazy(() => User))),
  retiredBy: v.optional(v.nullable(v.lazy(() => User))),
  parent: v.optional(v.nullable(v.lazy(() => InitiativeLabel))),
  initiatives: v.optional(v.lazy(() => InitiativeConnection)),
  children: v.optional(v.lazy(() => InitiativeLabelConnection)),
})

export const InitiativeLabelCollectionFilter: v.GenericSchema<unknown, T.InitiativeLabelCollectionFilter> =
  v.looseObject({
    id: v.optional(v.nullable(v.lazy(() => IDComparator))),
    createdAt: v.optional(v.nullable(v.lazy(() => DateComparator))),
    updatedAt: v.optional(v.nullable(v.lazy(() => DateComparator))),
    name: v.optional(v.nullable(v.lazy(() => StringComparator))),
    isGroup: v.optional(v.nullable(v.lazy(() => BooleanComparator))),
    creator: v.optional(v.nullable(v.lazy(() => NullableUserFilter))),
    parent: v.optional(v.nullable(v.lazy(() => InitiativeLabelFilter))),
    null: v.optional(v.nullable(v.boolean())),
    and: v.optional(v.nullable(v.array(v.lazy(() => InitiativeLabelCollectionFilter)))),
    or: v.optional(v.nullable(v.array(v.lazy(() => InitiativeLabelCollectionFilter)))),
    some: v.optional(v.nullable(v.lazy(() => InitiativeLabelCollectionFilter))),
    every: v.optional(v.nullable(v.lazy(() => InitiativeLabelFilter))),
    length: v.optional(v.nullable(v.lazy(() => NumberComparator))),
  })

export const InitiativeLabelConnection: v.GenericSchema<unknown, T.InitiativeLabelConnection> = v.looseObject({
  edges: v.optional(v.array(v.lazy(() => InitiativeLabelEdge))),
  nodes: v.optional(v.array(v.lazy(() => InitiativeLabel))),
  pageInfo: v.optional(v.lazy(() => PageInfo)),
})

export const InitiativeLabelCreateInput: v.GenericSchema<unknown, T.InitiativeLabelCreateInput> = v.looseObject({
  id: v.optional(v.nullable(v.string())),
  name: v.string(),
  description: v.optional(v.nullable(v.string())),
  color: v.optional(v.nullable(v.string())),
  parentId: v.optional(v.nullable(v.string())),
  isGroup: v.optional(v.nullable(v.boolean())),
  retiredAt: v.optional(v.nullable(v.string())),
  groupType: v.optional(v.nullable(v.lazy(() => LabelGroupType))),
})

export const InitiativeLabelEdge: v.GenericSchema<unknown, T.InitiativeLabelEdge> = v.looseObject({
  node: v.optional(v.lazy(() => InitiativeLabel)),
  cursor: v.optional(v.string()),
})

export const InitiativeLabelFilter: v.GenericSchema<unknown, T.InitiativeLabelFilter> = v.looseObject({
  id: v.optional(v.nullable(v.lazy(() => IDComparator))),
  createdAt: v.optional(v.nullable(v.lazy(() => DateComparator))),
  updatedAt: v.optional(v.nullable(v.lazy(() => DateComparator))),
  name: v.optional(v.nullable(v.lazy(() => StringComparator))),
  isGroup: v.optional(v.nullable(v.lazy(() => BooleanComparator))),
  creator: v.optional(v.nullable(v.lazy(() => NullableUserFilter))),
  parent: v.optional(v.nullable(v.lazy(() => InitiativeLabelFilter))),
  and: v.optional(v.nullable(v.array(v.lazy(() => InitiativeLabelFilter)))),
  or: v.optional(v.nullable(v.array(v.lazy(() => InitiativeLabelFilter)))),
})

export const InitiativeLabelPayload: v.GenericSchema<unknown, T.InitiativeLabelPayload> = v.looseObject({
  lastSyncId: v.optional(number()),
  initiativeLabel: v.optional(v.lazy(() => InitiativeLabel)),
  success: v.optional(v.boolean()),
})

export const InitiativeLabelUpdateInput: v.GenericSchema<unknown, T.InitiativeLabelUpdateInput> = v.looseObject({
  name: v.optional(v.nullable(v.string())),
  description: v.optional(v.nullable(v.string())),
  parentId: v.optional(v.nullable(v.string())),
  color: v.optional(v.nullable(v.string())),
  isGroup: v.optional(v.nullable(v.boolean())),
  retiredAt: v.optional(v.nullable(v.string())),
  groupType: v.optional(v.nullable(v.lazy(() => LabelGroupType))),
})

export const InitiativeManualSort: v.GenericSchema<unknown, T.InitiativeManualSort> = v.looseObject({
  nulls: v.optional(v.nullable(v.lazy(() => PaginationNulls))),
  order: v.optional(v.nullable(v.lazy(() => PaginationSortOrder))),
})

export const InitiativeNameSort: v.GenericSchema<unknown, T.InitiativeNameSort> = v.looseObject({
  nulls: v.optional(v.nullable(v.lazy(() => PaginationNulls))),
  order: v.optional(v.nullable(v.lazy(() => PaginationSortOrder))),
})

export const InitiativeNotification: v.GenericSchema<unknown, T.InitiativeNotification> = v.looseObject({
  commentId: v.optional(v.nullable(v.string())),
  parentCommentId: v.optional(v.nullable(v.string())),
  reactionEmoji: v.optional(v.nullable(v.string())),
  id: v.optional(v.string()),
  createdAt: v.optional(v.string()),
  updatedAt: v.optional(v.string()),
  archivedAt: v.optional(v.nullable(v.string())),
  type: v.optional(v.string()),
  actor: v.optional(v.nullable(v.lazy(() => User))),
  externalUserActor: v.optional(v.nullable(v.lazy(() => ExternalUser))),
  user: v.optional(v.lazy(() => User)),
  readAt: v.optional(v.nullable(v.string())),
  emailedAt: v.optional(v.nullable(v.string())),
  snoozedUntilAt: v.optional(v.nullable(v.string())),
  unsnoozedAt: v.optional(v.nullable(v.string())),
  category: v.optional(v.lazy(() => NotificationCategory)),
  botActor: v.optional(v.nullable(v.lazy(() => ActorBot))),
  initiativeId: v.optional(v.string()),
  initiativeUpdateId: v.optional(v.nullable(v.string())),
  initiative: v.optional(v.nullable(v.lazy(() => Initiative))),
  document: v.optional(v.nullable(v.lazy(() => Document))),
  initiativeUpdate: v.optional(v.nullable(v.lazy(() => InitiativeUpdate))),
  comment: v.optional(v.nullable(v.lazy(() => Comment))),
  parentComment: v.optional(v.nullable(v.lazy(() => Comment))),
})

export const InitiativeNotificationSubscription: v.GenericSchema<unknown, T.InitiativeNotificationSubscription> =
  v.looseObject({
    id: v.optional(v.string()),
    createdAt: v.optional(v.string()),
    updatedAt: v.optional(v.string()),
    archivedAt: v.optional(v.nullable(v.string())),
    subscriber: v.optional(v.lazy(() => User)),
    customer: v.optional(v.nullable(v.lazy(() => Customer))),
    customView: v.optional(v.nullable(v.lazy(() => CustomView))),
    cycle: v.optional(v.nullable(v.lazy(() => Cycle))),
    label: v.optional(v.nullable(v.lazy(() => IssueLabel))),
    project: v.optional(v.nullable(v.lazy(() => Project))),
    initiative: v.optional(v.lazy(() => Initiative)),
    team: v.optional(v.nullable(v.lazy(() => Team))),
    user: v.optional(v.nullable(v.lazy(() => User))),
    contextViewType: v.optional(v.nullable(v.lazy(() => ContextViewType))),
    userContextViewType: v.optional(v.nullable(v.lazy(() => UserContextViewType))),
    active: v.optional(v.boolean()),
    includeSubInitiativeUpdates: v.optional(v.boolean()),
    notificationSubscriptionTypes: v.optional(v.array(v.string())),
  })

export const InitiativeOwnerSort: v.GenericSchema<unknown, T.InitiativeOwnerSort> = v.looseObject({
  nulls: v.optional(v.nullable(v.lazy(() => PaginationNulls))),
  order: v.optional(v.nullable(v.lazy(() => PaginationSortOrder))),
})

export const InitiativePayload: v.GenericSchema<unknown, T.InitiativePayload> = v.looseObject({
  lastSyncId: v.optional(number()),
  initiative: v.optional(v.lazy(() => Initiative)),
  success: v.optional(v.boolean()),
})

export const InitiativePrioritySort: v.GenericSchema<unknown, T.InitiativePrioritySort> = v.looseObject({
  nulls: v.optional(v.nullable(v.lazy(() => PaginationNulls))),
  order: v.optional(v.nullable(v.lazy(() => PaginationSortOrder))),
  noPriorityFirst: v.optional(v.nullable(v.boolean())),
})

export const InitiativeRelation: v.GenericSchema<unknown, T.InitiativeRelation> = v.looseObject({
  id: v.optional(v.string()),
  createdAt: v.optional(v.string()),
  updatedAt: v.optional(v.string()),
  archivedAt: v.optional(v.nullable(v.string())),
  initiative: v.optional(v.lazy(() => Initiative)),
  relatedInitiative: v.optional(v.lazy(() => Initiative)),
  user: v.optional(v.nullable(v.lazy(() => User))),
  sortOrder: v.optional(number()),
})

export const InitiativeRelationConnection: v.GenericSchema<unknown, T.InitiativeRelationConnection> = v.looseObject({
  edges: v.optional(v.array(v.lazy(() => InitiativeRelationEdge))),
  nodes: v.optional(v.array(v.lazy(() => InitiativeRelation))),
  pageInfo: v.optional(v.lazy(() => PageInfo)),
})

export const InitiativeRelationCreateInput: v.GenericSchema<unknown, T.InitiativeRelationCreateInput> = v.looseObject({
  id: v.optional(v.nullable(v.string())),
  initiativeId: v.string(),
  relatedInitiativeId: v.string(),
  sortOrder: v.optional(v.nullable(number())),
})

export const InitiativeRelationEdge: v.GenericSchema<unknown, T.InitiativeRelationEdge> = v.looseObject({
  node: v.optional(v.lazy(() => InitiativeRelation)),
  cursor: v.optional(v.string()),
})

export const InitiativeRelationPayload: v.GenericSchema<unknown, T.InitiativeRelationPayload> = v.looseObject({
  lastSyncId: v.optional(number()),
  initiativeRelation: v.optional(v.lazy(() => InitiativeRelation)),
  success: v.optional(v.boolean()),
})

export const InitiativeRelationUpdateInput: v.GenericSchema<unknown, T.InitiativeRelationUpdateInput> = v.looseObject({
  sortOrder: v.optional(v.nullable(number())),
})

export const InitiativeSortInput: v.GenericSchema<unknown, T.InitiativeSortInput> = v.looseObject({
  name: v.optional(v.nullable(v.lazy(() => InitiativeNameSort))),
  manual: v.optional(v.nullable(v.lazy(() => InitiativeManualSort))),
  updatedAt: v.optional(v.nullable(v.lazy(() => InitiativeUpdatedAtSort))),
  createdAt: v.optional(v.nullable(v.lazy(() => InitiativeCreatedAtSort))),
  targetDate: v.optional(v.nullable(v.lazy(() => InitiativeTargetDateSort))),
  health: v.optional(v.nullable(v.lazy(() => InitiativeHealthSort))),
  healthUpdatedAt: v.optional(v.nullable(v.lazy(() => InitiativeHealthUpdatedAtSort))),
  owner: v.optional(v.nullable(v.lazy(() => InitiativeOwnerSort))),
  priority: v.optional(v.nullable(v.lazy(() => InitiativePrioritySort))),
})

export const InitiativeStatus: v.GenericSchema<unknown, T.InitiativeStatus> = v.picklist([
  "Proposed",
  "Planned",
  "Active",
  "Completed",
  "Canceled",
])

export const InitiativeTab: v.GenericSchema<unknown, T.InitiativeTab> = v.picklist(["overview", "projects", "updates"])

export const InitiativeTargetDateSort: v.GenericSchema<unknown, T.InitiativeTargetDateSort> = v.looseObject({
  nulls: v.optional(v.nullable(v.lazy(() => PaginationNulls))),
  order: v.optional(v.nullable(v.lazy(() => PaginationSortOrder))),
})

export const InitiativeToProject: v.GenericSchema<unknown, T.InitiativeToProject> = v.looseObject({
  id: v.optional(v.string()),
  createdAt: v.optional(v.string()),
  updatedAt: v.optional(v.string()),
  archivedAt: v.optional(v.nullable(v.string())),
  project: v.optional(v.lazy(() => Project)),
  initiative: v.optional(v.lazy(() => Initiative)),
  sortOrder: v.optional(v.string()),
})

export const InitiativeToProjectConnection: v.GenericSchema<unknown, T.InitiativeToProjectConnection> = v.looseObject({
  edges: v.optional(v.array(v.lazy(() => InitiativeToProjectEdge))),
  nodes: v.optional(v.array(v.lazy(() => InitiativeToProject))),
  pageInfo: v.optional(v.lazy(() => PageInfo)),
})

export const InitiativeToProjectCreateInput: v.GenericSchema<unknown, T.InitiativeToProjectCreateInput> = v.looseObject(
  {
    id: v.optional(v.nullable(v.string())),
    projectId: v.string(),
    initiativeId: v.string(),
    sortOrder: v.optional(v.nullable(number())),
  },
)

export const InitiativeToProjectEdge: v.GenericSchema<unknown, T.InitiativeToProjectEdge> = v.looseObject({
  node: v.optional(v.lazy(() => InitiativeToProject)),
  cursor: v.optional(v.string()),
})

export const InitiativeToProjectPayload: v.GenericSchema<unknown, T.InitiativeToProjectPayload> = v.looseObject({
  lastSyncId: v.optional(number()),
  initiativeToProject: v.optional(v.lazy(() => InitiativeToProject)),
  success: v.optional(v.boolean()),
})

export const InitiativeToProjectUpdateInput: v.GenericSchema<unknown, T.InitiativeToProjectUpdateInput> = v.looseObject(
  {
    sortOrder: v.optional(v.nullable(number())),
  },
)

export const InitiativeUpdate: v.GenericSchema<unknown, T.InitiativeUpdate> = v.looseObject({
  id: v.optional(v.string()),
  createdAt: v.optional(v.string()),
  updatedAt: v.optional(v.string()),
  archivedAt: v.optional(v.nullable(v.string())),
  body: v.optional(v.string()),
  editedAt: v.optional(v.nullable(v.string())),
  reactionData: v.optional(v.unknown()),
  slugId: v.optional(v.string()),
  initiative: v.optional(v.lazy(() => Initiative)),
  user: v.optional(v.lazy(() => User)),
  health: v.optional(v.lazy(() => InitiativeUpdateHealthType)),
  isDiffHidden: v.optional(v.boolean()),
  url: v.optional(v.string()),
  isStale: v.optional(v.boolean()),
  diff: v.optional(v.nullable(v.unknown())),
  diffMarkdown: v.optional(v.nullable(v.string())),
  reactions: v.optional(v.array(v.lazy(() => Reaction))),
  comments: v.optional(v.lazy(() => CommentConnection)),
  commentCount: v.optional(integer()),
})

export const InitiativeUpdateArchivePayload: v.GenericSchema<unknown, T.InitiativeUpdateArchivePayload> = v.looseObject(
  {
    lastSyncId: v.optional(number()),
    success: v.optional(v.boolean()),
    entity: v.optional(v.nullable(v.lazy(() => InitiativeUpdate))),
  },
)

export const InitiativeUpdateConnection: v.GenericSchema<unknown, T.InitiativeUpdateConnection> = v.looseObject({
  edges: v.optional(v.array(v.lazy(() => InitiativeUpdateEdge))),
  nodes: v.optional(v.array(v.lazy(() => InitiativeUpdate))),
  pageInfo: v.optional(v.lazy(() => PageInfo)),
})

export const InitiativeUpdateCreateInput: v.GenericSchema<unknown, T.InitiativeUpdateCreateInput> = v.looseObject({
  id: v.optional(v.nullable(v.string())),
  body: v.optional(v.nullable(v.string())),
  health: v.optional(v.nullable(v.lazy(() => InitiativeUpdateHealthType))),
  initiativeId: v.string(),
  isDiffHidden: v.optional(v.nullable(v.boolean())),
})

export const InitiativeUpdatedAtSort: v.GenericSchema<unknown, T.InitiativeUpdatedAtSort> = v.looseObject({
  nulls: v.optional(v.nullable(v.lazy(() => PaginationNulls))),
  order: v.optional(v.nullable(v.lazy(() => PaginationSortOrder))),
})

export const InitiativeUpdateEdge: v.GenericSchema<unknown, T.InitiativeUpdateEdge> = v.looseObject({
  node: v.optional(v.lazy(() => InitiativeUpdate)),
  cursor: v.optional(v.string()),
})

export const InitiativeUpdateFilter: v.GenericSchema<unknown, T.InitiativeUpdateFilter> = v.looseObject({
  id: v.optional(v.nullable(v.lazy(() => IDComparator))),
  createdAt: v.optional(v.nullable(v.lazy(() => DateComparator))),
  updatedAt: v.optional(v.nullable(v.lazy(() => DateComparator))),
  user: v.optional(v.nullable(v.lazy(() => UserFilter))),
  initiative: v.optional(v.nullable(v.lazy(() => InitiativeFilter))),
  reactions: v.optional(v.nullable(v.lazy(() => ReactionCollectionFilter))),
  and: v.optional(v.nullable(v.array(v.lazy(() => InitiativeUpdateFilter)))),
  or: v.optional(v.nullable(v.array(v.lazy(() => InitiativeUpdateFilter)))),
})

export const InitiativeUpdateHealthType: v.GenericSchema<unknown, T.InitiativeUpdateHealthType> = v.picklist([
  "onTrack",
  "atRisk",
  "offTrack",
])

export const InitiativeUpdateInput: v.GenericSchema<unknown, T.InitiativeUpdateInput> = v.looseObject({
  name: v.optional(v.nullable(v.string())),
  description: v.optional(v.nullable(v.string())),
  ownerId: v.optional(v.nullable(v.string())),
  leadTeamId: v.optional(v.nullable(v.string())),
  sortOrder: v.optional(v.nullable(number())),
  prioritySortOrder: v.optional(v.nullable(number())),
  color: v.optional(v.nullable(v.string())),
  icon: v.optional(v.nullable(v.string())),
  targetDate: v.optional(v.nullable(v.string())),
  status: v.optional(v.nullable(v.lazy(() => InitiativeStatus))),
  targetDateResolution: v.optional(v.nullable(v.lazy(() => DateResolutionType))),
  trashed: v.optional(v.nullable(v.boolean())),
  content: v.optional(v.nullable(v.string())),
  updateReminderFrequencyInWeeks: v.optional(v.nullable(number())),
  updateReminderFrequency: v.optional(v.nullable(number())),
  frequencyResolution: v.optional(v.nullable(v.lazy(() => FrequencyResolutionType))),
  updateRemindersDay: v.optional(v.nullable(v.lazy(() => Day))),
  updateRemindersHour: v.optional(v.nullable(integer())),
  priority: v.optional(v.nullable(integer())),
  labelIds: v.optional(v.nullable(v.array(v.string()))),
})

export const InitiativeUpdatePayload: v.GenericSchema<unknown, T.InitiativeUpdatePayload> = v.looseObject({
  lastSyncId: v.optional(number()),
  initiativeUpdate: v.optional(v.lazy(() => InitiativeUpdate)),
  success: v.optional(v.boolean()),
})

export const InitiativeUpdateReminderPayload: v.GenericSchema<unknown, T.InitiativeUpdateReminderPayload> =
  v.looseObject({
    lastSyncId: v.optional(number()),
    success: v.optional(v.boolean()),
  })

export const InitiativeUpdatesCollectionFilter: v.GenericSchema<unknown, T.InitiativeUpdatesCollectionFilter> =
  v.looseObject({
    id: v.optional(v.nullable(v.lazy(() => IDComparator))),
    createdAt: v.optional(v.nullable(v.lazy(() => DateComparator))),
    updatedAt: v.optional(v.nullable(v.lazy(() => DateComparator))),
    and: v.optional(v.nullable(v.array(v.lazy(() => InitiativeUpdatesCollectionFilter)))),
    or: v.optional(v.nullable(v.array(v.lazy(() => InitiativeUpdatesCollectionFilter)))),
    some: v.optional(v.nullable(v.lazy(() => InitiativeUpdatesFilter))),
    every: v.optional(v.nullable(v.lazy(() => InitiativeUpdatesFilter))),
    length: v.optional(v.nullable(v.lazy(() => NumberComparator))),
  })

export const InitiativeUpdatesFilter: v.GenericSchema<unknown, T.InitiativeUpdatesFilter> = v.looseObject({
  id: v.optional(v.nullable(v.lazy(() => IDComparator))),
  createdAt: v.optional(v.nullable(v.lazy(() => DateComparator))),
  updatedAt: v.optional(v.nullable(v.lazy(() => DateComparator))),
  and: v.optional(v.nullable(v.array(v.lazy(() => InitiativeUpdatesFilter)))),
  or: v.optional(v.nullable(v.array(v.lazy(() => InitiativeUpdatesFilter)))),
})

export const InitiativeUpdateUpdateInput: v.GenericSchema<unknown, T.InitiativeUpdateUpdateInput> = v.looseObject({
  body: v.optional(v.nullable(v.string())),
  health: v.optional(v.nullable(v.lazy(() => InitiativeUpdateHealthType))),
})

export const InitiativeVisibility: v.GenericSchema<unknown, T.InitiativeVisibility> = v.picklist([
  "public",
  "restricted",
  "private",
])

export const Integration: v.GenericSchema<unknown, T.Integration> = v.looseObject({
  id: v.optional(v.string()),
  createdAt: v.optional(v.string()),
  updatedAt: v.optional(v.string()),
  archivedAt: v.optional(v.nullable(v.string())),
  service: v.optional(v.string()),
  organization: v.optional(v.lazy(() => Organization)),
  team: v.optional(v.nullable(v.lazy(() => Team))),
  creator: v.optional(v.lazy(() => User)),
})

export const IntegrationConnection: v.GenericSchema<unknown, T.IntegrationConnection> = v.looseObject({
  edges: v.optional(v.array(v.lazy(() => IntegrationEdge))),
  nodes: v.optional(v.array(v.lazy(() => Integration))),
  pageInfo: v.optional(v.lazy(() => PageInfo)),
})

export const IntegrationEdge: v.GenericSchema<unknown, T.IntegrationEdge> = v.looseObject({
  node: v.optional(v.lazy(() => Integration)),
  cursor: v.optional(v.string()),
})

export const IntegrationGithubRemoveCodeAccessPayload: v.GenericSchema<
  unknown,
  T.IntegrationGithubRemoveCodeAccessPayload
> = v.looseObject({
  lastSyncId: v.optional(number()),
  action: v.optional(v.lazy(() => GitHubRemoveCodeAccessAction)),
})

export const IntegrationHasScopesPayload: v.GenericSchema<unknown, T.IntegrationHasScopesPayload> = v.looseObject({
  hasAllScopes: v.optional(v.boolean()),
  missingScopes: v.optional(v.nullable(v.array(v.string()))),
})

export const IntegrationPayload: v.GenericSchema<unknown, T.IntegrationPayload> = v.looseObject({
  lastSyncId: v.optional(number()),
  integration: v.optional(v.nullable(v.lazy(() => Integration))),
  success: v.optional(v.boolean()),
  gitHub: v.optional(v.nullable(v.lazy(() => GitHubIntegrationConnectDetails))),
})

export const IntegrationRequestInput: v.GenericSchema<unknown, T.IntegrationRequestInput> = v.looseObject({
  email: v.optional(v.nullable(v.string())),
  name: v.string(),
})

export const IntegrationRequestPayload: v.GenericSchema<unknown, T.IntegrationRequestPayload> = v.looseObject({
  success: v.optional(v.boolean()),
})

export const IntegrationService: v.GenericSchema<unknown, T.IntegrationService> = v.picklist([
  "airbyte",
  "claudeSecurity",
  "datadog",
  "discord",
  "figma",
  "figmaPlugin",
  "front",
  "github",
  "gong",
  "githubEnterpriseServer",
  "githubCommit",
  "githubImport",
  "githubPersonal",
  "githubCodeAccessPersonal",
  "gitlab",
  "gitlabPersonal",
  "origin",
  "googleCalendarPersonal",
  "googleSheets",
  "intercom",
  "jira",
  "jiraPersonal",
  "launchDarkly",
  "launchDarklyPersonal",
  "loom",
  "notion",
  "opsgenie",
  "pagerDuty",
  "salesforce",
  "slack",
  "slackAsks",
  "asksWeb",
  "slackCustomViewNotifications",
  "slackOrgProjectUpdatesPost",
  "slackOrgInitiativeUpdatesPost",
  "slackPersonal",
  "slackPost",
  "slackProjectPost",
  "slackProjectUpdatesPost",
  "slackInitiativePost",
  "sentry",
  "zendesk",
  "email",
  "mcpServerPersonal",
  "mcpServer",
  "microsoftTeams",
  "microsoftPersonal",
  "microsoftTeamsProjectPost",
])

export const IntegrationSlackWorkspaceNamePayload: v.GenericSchema<unknown, T.IntegrationSlackWorkspaceNamePayload> =
  v.looseObject({
    name: v.optional(v.string()),
    success: v.optional(v.boolean()),
  })

export const IntegrationsSettings: v.GenericSchema<unknown, T.IntegrationsSettings> = v.looseObject({
  id: v.optional(v.string()),
  createdAt: v.optional(v.string()),
  updatedAt: v.optional(v.string()),
  archivedAt: v.optional(v.nullable(v.string())),
  contextViewType: v.optional(v.nullable(v.lazy(() => ContextViewType))),
  slackIssueCreated: v.optional(v.nullable(v.boolean())),
  slackIssueNewComment: v.optional(v.nullable(v.boolean())),
  slackIssueStatusChangedDone: v.optional(v.nullable(v.boolean())),
  slackIssueAddedToView: v.optional(v.nullable(v.boolean())),
  slackIssueStatusChangedAll: v.optional(v.nullable(v.boolean())),
  slackProjectUpdateCreated: v.optional(v.nullable(v.boolean())),
  slackProjectCommentCreated: v.optional(v.nullable(v.boolean())),
  microsoftTeamsProjectUpdateCreated: v.optional(v.nullable(v.boolean())),
  slackProjectUpdateCreatedToTeam: v.optional(v.nullable(v.boolean())),
  slackProjectUpdateCreatedToWorkspace: v.optional(v.nullable(v.boolean())),
  slackInitiativeUpdateCreated: v.optional(v.nullable(v.boolean())),
  slackInitiativeCommentCreated: v.optional(v.nullable(v.boolean())),
  slackIssueAddedToTriage: v.optional(v.nullable(v.boolean())),
  slackIssueSlaHighRisk: v.optional(v.nullable(v.boolean())),
  slackIssueSlaBreached: v.optional(v.nullable(v.boolean())),
  team: v.optional(v.nullable(v.lazy(() => Team))),
  project: v.optional(v.nullable(v.lazy(() => Project))),
  initiative: v.optional(v.nullable(v.lazy(() => Initiative))),
})

export const IntegrationsSettingsCreateInput: v.GenericSchema<unknown, T.IntegrationsSettingsCreateInput> =
  v.looseObject({
    slackIssueCreated: v.optional(v.nullable(v.boolean())),
    slackIssueAddedToView: v.optional(v.nullable(v.boolean())),
    slackIssueNewComment: v.optional(v.nullable(v.boolean())),
    slackIssueStatusChangedDone: v.optional(v.nullable(v.boolean())),
    slackIssueStatusChangedAll: v.optional(v.nullable(v.boolean())),
    slackProjectUpdateCreated: v.optional(v.nullable(v.boolean())),
    slackProjectCommentCreated: v.optional(v.nullable(v.boolean())),
    microsoftTeamsProjectUpdateCreated: v.optional(v.nullable(v.boolean())),
    slackProjectUpdateCreatedToTeam: v.optional(v.nullable(v.boolean())),
    slackProjectUpdateCreatedToWorkspace: v.optional(v.nullable(v.boolean())),
    slackInitiativeUpdateCreated: v.optional(v.nullable(v.boolean())),
    slackInitiativeCommentCreated: v.optional(v.nullable(v.boolean())),
    slackIssueAddedToTriage: v.optional(v.nullable(v.boolean())),
    slackIssueSlaHighRisk: v.optional(v.nullable(v.boolean())),
    slackIssueSlaBreached: v.optional(v.nullable(v.boolean())),
    id: v.optional(v.nullable(v.string())),
    teamId: v.optional(v.nullable(v.string())),
    projectId: v.optional(v.nullable(v.string())),
    initiativeId: v.optional(v.nullable(v.string())),
    customViewId: v.optional(v.nullable(v.string())),
    contextViewType: v.optional(v.nullable(v.lazy(() => ContextViewType))),
  })

export const IntegrationsSettingsPayload: v.GenericSchema<unknown, T.IntegrationsSettingsPayload> = v.looseObject({
  lastSyncId: v.optional(number()),
  integrationsSettings: v.optional(v.lazy(() => IntegrationsSettings)),
  success: v.optional(v.boolean()),
})

export const IntegrationsSettingsUpdateInput: v.GenericSchema<unknown, T.IntegrationsSettingsUpdateInput> =
  v.looseObject({
    slackIssueCreated: v.optional(v.nullable(v.boolean())),
    slackIssueAddedToView: v.optional(v.nullable(v.boolean())),
    slackIssueNewComment: v.optional(v.nullable(v.boolean())),
    slackIssueStatusChangedDone: v.optional(v.nullable(v.boolean())),
    slackIssueStatusChangedAll: v.optional(v.nullable(v.boolean())),
    slackProjectUpdateCreated: v.optional(v.nullable(v.boolean())),
    slackProjectCommentCreated: v.optional(v.nullable(v.boolean())),
    microsoftTeamsProjectUpdateCreated: v.optional(v.nullable(v.boolean())),
    slackProjectUpdateCreatedToTeam: v.optional(v.nullable(v.boolean())),
    slackProjectUpdateCreatedToWorkspace: v.optional(v.nullable(v.boolean())),
    slackInitiativeUpdateCreated: v.optional(v.nullable(v.boolean())),
    slackInitiativeCommentCreated: v.optional(v.nullable(v.boolean())),
    slackIssueAddedToTriage: v.optional(v.nullable(v.boolean())),
    slackIssueSlaHighRisk: v.optional(v.nullable(v.boolean())),
    slackIssueSlaBreached: v.optional(v.nullable(v.boolean())),
  })

export const IntegrationTemplate: v.GenericSchema<unknown, T.IntegrationTemplate> = v.looseObject({
  id: v.optional(v.string()),
  createdAt: v.optional(v.string()),
  updatedAt: v.optional(v.string()),
  archivedAt: v.optional(v.nullable(v.string())),
  template: v.optional(v.lazy(() => Template)),
  integration: v.optional(v.lazy(() => Integration)),
  foreignEntityId: v.optional(v.nullable(v.string())),
})

export const IntegrationTemplateConnection: v.GenericSchema<unknown, T.IntegrationTemplateConnection> = v.looseObject({
  edges: v.optional(v.array(v.lazy(() => IntegrationTemplateEdge))),
  nodes: v.optional(v.array(v.lazy(() => IntegrationTemplate))),
  pageInfo: v.optional(v.lazy(() => PageInfo)),
})

export const IntegrationTemplateCreateInput: v.GenericSchema<unknown, T.IntegrationTemplateCreateInput> = v.looseObject(
  {
    id: v.optional(v.nullable(v.string())),
    integrationId: v.string(),
    templateId: v.string(),
    foreignEntityId: v.optional(v.nullable(v.string())),
  },
)

export const IntegrationTemplateEdge: v.GenericSchema<unknown, T.IntegrationTemplateEdge> = v.looseObject({
  node: v.optional(v.lazy(() => IntegrationTemplate)),
  cursor: v.optional(v.string()),
})

export const IntegrationTemplatePayload: v.GenericSchema<unknown, T.IntegrationTemplatePayload> = v.looseObject({
  lastSyncId: v.optional(number()),
  integrationTemplate: v.optional(v.lazy(() => IntegrationTemplate)),
  success: v.optional(v.boolean()),
})

export const IntercomSettingsInput: v.GenericSchema<unknown, T.IntercomSettingsInput> = v.looseObject({
  sendNoteOnStatusChange: v.optional(v.nullable(v.boolean())),
  sendNoteOnComment: v.optional(v.nullable(v.boolean())),
  automateTicketReopeningOnCompletion: v.optional(v.nullable(v.boolean())),
  automateTicketReopeningOnCancellation: v.optional(v.nullable(v.boolean())),
  automateTicketReopeningOnComment: v.optional(v.nullable(v.boolean())),
  disableCustomerRequestsAutoCreation: v.optional(v.nullable(v.boolean())),
  automateTicketReopeningOnProjectCompletion: v.optional(v.nullable(v.boolean())),
  automateTicketReopeningOnProjectCancellation: v.optional(v.nullable(v.boolean())),
  enableAiIntake: v.optional(v.nullable(v.boolean())),
  enableAiIntakeAttachmentProcessing: v.optional(v.nullable(v.boolean())),
})

export const Issue: v.GenericSchema<unknown, T.Issue> = v.looseObject({
  id: v.optional(v.string()),
  createdAt: v.optional(v.string()),
  updatedAt: v.optional(v.string()),
  archivedAt: v.optional(v.nullable(v.string())),
  number: v.optional(number()),
  title: v.optional(v.string()),
  priority: v.optional(number()),
  estimate: v.optional(v.nullable(number())),
  boardOrder: v.optional(number()),
  sortOrder: v.optional(number()),
  prioritySortOrder: v.optional(number()),
  startedAt: v.optional(v.nullable(v.string())),
  completedAt: v.optional(v.nullable(v.string())),
  startedTriageAt: v.optional(v.nullable(v.string())),
  triagedAt: v.optional(v.nullable(v.string())),
  canceledAt: v.optional(v.nullable(v.string())),
  autoClosedAt: v.optional(v.nullable(v.string())),
  autoArchivedAt: v.optional(v.nullable(v.string())),
  dueDate: v.optional(v.nullable(v.string())),
  slaStartedAt: v.optional(v.nullable(v.string())),
  slaMediumRiskAt: v.optional(v.nullable(v.string())),
  slaHighRiskAt: v.optional(v.nullable(v.string())),
  slaBreachesAt: v.optional(v.nullable(v.string())),
  slaType: v.optional(v.nullable(v.string())),
  addedToProjectAt: v.optional(v.nullable(v.string())),
  addedToCycleAt: v.optional(v.nullable(v.string())),
  addedToTeamAt: v.optional(v.nullable(v.string())),
  trashed: v.optional(v.nullable(v.boolean())),
  snoozedUntilAt: v.optional(v.nullable(v.string())),
  labelIds: v.optional(v.array(v.string())),
  team: v.optional(v.lazy(() => Team)),
  cycle: v.optional(v.nullable(v.lazy(() => Cycle))),
  project: v.optional(v.nullable(v.lazy(() => Project))),
  projectMilestone: v.optional(v.nullable(v.lazy(() => ProjectMilestone))),
  lastAppliedTemplate: v.optional(v.nullable(v.lazy(() => Template))),
  recurringIssueTemplate: v.optional(v.nullable(v.lazy(() => Template))),
  previousIdentifiers: v.optional(v.array(v.string())),
  creator: v.optional(v.nullable(v.lazy(() => User))),
  externalUserCreator: v.optional(v.nullable(v.lazy(() => ExternalUser))),
  assignee: v.optional(v.nullable(v.lazy(() => User))),
  delegate: v.optional(v.nullable(v.lazy(() => User))),
  snoozedBy: v.optional(v.nullable(v.lazy(() => User))),
  state: v.optional(v.lazy(() => WorkflowState)),
  subIssueSortOrder: v.optional(v.nullable(number())),
  reactionData: v.optional(v.unknown()),
  priorityLabel: v.optional(v.string()),
  sourceComment: v.optional(v.nullable(v.lazy(() => Comment))),
  integrationSourceType: v.optional(v.nullable(v.lazy(() => IntegrationService))),
  inheritsSharedAccess: v.optional(v.boolean()),
  documents: v.optional(v.lazy(() => DocumentConnection)),
  botActor: v.optional(v.nullable(v.lazy(() => ActorBot))),
  favorite: v.optional(v.nullable(v.lazy(() => Favorite))),
  identifier: v.optional(v.string()),
  url: v.optional(v.string()),
  branchName: v.optional(v.string()),
  sharedAccess: v.optional(v.lazy(() => IssueSharedAccess)),
  customerTicketCount: v.optional(integer()),
  subscribers: v.optional(v.lazy(() => UserConnection)),
  parent: v.optional(v.nullable(v.lazy(() => Issue))),
  children: v.optional(v.lazy(() => IssueConnection)),
  comments: v.optional(v.lazy(() => CommentConnection)),
  history: v.optional(v.lazy(() => IssueHistoryConnection)),
  labels: v.optional(v.lazy(() => IssueLabelConnection)),
  relations: v.optional(v.lazy(() => IssueRelationConnection)),
  inverseRelations: v.optional(v.lazy(() => IssueRelationConnection)),
  attachments: v.optional(v.lazy(() => AttachmentConnection)),
  formerAttachments: v.optional(v.lazy(() => AttachmentConnection)),
  description: v.optional(v.nullable(v.string())),
  documentContent: v.optional(v.nullable(v.lazy(() => DocumentContent))),
  reactions: v.optional(v.array(v.lazy(() => Reaction))),
  needs: v.optional(v.lazy(() => CustomerNeedConnection)),
  formerNeeds: v.optional(v.lazy(() => CustomerNeedConnection)),
  releases: v.optional(v.lazy(() => ReleaseConnection)),
  syncedWith: v.optional(v.nullable(v.array(v.lazy(() => ExternalEntityInfo)))),
  asksRequester: v.optional(v.nullable(v.lazy(() => User))),
  asksExternalUserRequester: v.optional(v.nullable(v.lazy(() => ExternalUser))),
  stateHistory: v.optional(v.lazy(() => IssueStateSpanConnection)),
})

export const IssueArchivePayload: v.GenericSchema<unknown, T.IssueArchivePayload> = v.looseObject({
  lastSyncId: v.optional(number()),
  success: v.optional(v.boolean()),
  entity: v.optional(v.nullable(v.lazy(() => Issue))),
})

export const IssueBatchCreateInput: v.GenericSchema<unknown, T.IssueBatchCreateInput> = v.looseObject({
  issues: v.array(v.lazy(() => IssueCreateInput)),
})

export const IssueBatchPayload: v.GenericSchema<unknown, T.IssueBatchPayload> = v.looseObject({
  lastSyncId: v.optional(number()),
  issues: v.optional(v.array(v.lazy(() => Issue))),
  success: v.optional(v.boolean()),
})

export const IssueCollectionFilter: v.GenericSchema<unknown, T.IssueCollectionFilter> = v.looseObject({
  id: v.optional(v.nullable(v.lazy(() => IssueIDComparator))),
  createdAt: v.optional(v.nullable(v.lazy(() => DateComparator))),
  updatedAt: v.optional(v.nullable(v.lazy(() => DateComparator))),
  number: v.optional(v.nullable(v.lazy(() => NumberComparator))),
  title: v.optional(v.nullable(v.lazy(() => StringComparator))),
  description: v.optional(v.nullable(v.lazy(() => NullableStringComparator))),
  priority: v.optional(v.nullable(v.lazy(() => NullableNumberComparator))),
  estimate: v.optional(v.nullable(v.lazy(() => EstimateComparator))),
  startedAt: v.optional(v.nullable(v.lazy(() => NullableDateComparator))),
  triagedAt: v.optional(v.nullable(v.lazy(() => NullableDateComparator))),
  completedAt: v.optional(v.nullable(v.lazy(() => NullableDateComparator))),
  canceledAt: v.optional(v.nullable(v.lazy(() => NullableDateComparator))),
  slaBreachesAt: v.optional(v.nullable(v.lazy(() => NullableDateComparator))),
  archivedAt: v.optional(v.nullable(v.lazy(() => NullableDateComparator))),
  autoClosedAt: v.optional(v.nullable(v.lazy(() => NullableDateComparator))),
  autoArchivedAt: v.optional(v.nullable(v.lazy(() => NullableDateComparator))),
  addedToCycleAt: v.optional(v.nullable(v.lazy(() => NullableDateComparator))),
  addedToCyclePeriod: v.optional(v.nullable(v.lazy(() => CyclePeriodComparator))),
  dueDate: v.optional(v.nullable(v.lazy(() => NullableTimelessDateComparator))),
  accumulatedStateUpdatedAt: v.optional(v.nullable(v.lazy(() => NullableDateComparator))),
  snoozedUntilAt: v.optional(v.nullable(v.lazy(() => NullableDateComparator))),
  assignee: v.optional(v.nullable(v.lazy(() => NullableUserFilter))),
  delegate: v.optional(v.nullable(v.lazy(() => NullableUserFilter))),
  lastAppliedTemplate: v.optional(v.nullable(v.lazy(() => NullableTemplateFilter))),
  recurringIssueTemplate: v.optional(v.nullable(v.lazy(() => NullableTemplateFilter))),
  sourceMetadata: v.optional(v.nullable(v.lazy(() => SourceMetadataComparator))),
  creator: v.optional(v.nullable(v.lazy(() => NullableUserFilter))),
  parent: v.optional(v.nullable(v.lazy(() => NullableIssueFilter))),
  snoozedBy: v.optional(v.nullable(v.lazy(() => NullableUserFilter))),
  labels: v.optional(v.nullable(v.lazy(() => IssueLabelCollectionFilter))),
  subscribers: v.optional(v.nullable(v.lazy(() => UserCollectionFilter))),
  hasSharedUsers: v.optional(v.nullable(v.lazy(() => RelationExistsComparator))),
  sharedWith: v.optional(v.nullable(v.lazy(() => UserCollectionFilter))),
  team: v.optional(v.nullable(v.lazy(() => TeamFilter))),
  projectMilestone: v.optional(v.nullable(v.lazy(() => NullableProjectMilestoneFilter))),
  comments: v.optional(v.nullable(v.lazy(() => CommentCollectionFilter))),
  activity: v.optional(v.nullable(v.lazy(() => ActivityCollectionFilter))),
  suggestions: v.optional(v.nullable(v.lazy(() => IssueSuggestionCollectionFilter))),
  cycle: v.optional(v.nullable(v.lazy(() => NullableCycleFilter))),
  project: v.optional(v.nullable(v.lazy(() => NullableProjectFilter))),
  state: v.optional(v.nullable(v.lazy(() => WorkflowStateFilter))),
  children: v.optional(v.nullable(v.lazy(() => IssueCollectionFilter))),
  attachments: v.optional(v.nullable(v.lazy(() => AttachmentCollectionFilter))),
  searchableContent: v.optional(v.nullable(v.lazy(() => ContentComparator))),
  hasRelatedRelations: v.optional(v.nullable(v.lazy(() => RelationExistsComparator))),
  hasDuplicateRelations: v.optional(v.nullable(v.lazy(() => RelationExistsComparator))),
  hasBlockedByRelations: v.optional(v.nullable(v.lazy(() => RelationExistsComparator))),
  hasBlockingRelations: v.optional(v.nullable(v.lazy(() => RelationExistsComparator))),
  hasSuggestedRelatedIssues: v.optional(v.nullable(v.lazy(() => RelationExistsComparator))),
  hasSuggestedSimilarIssues: v.optional(v.nullable(v.lazy(() => RelationExistsComparator))),
  hasSuggestedAssignees: v.optional(v.nullable(v.lazy(() => RelationExistsComparator))),
  hasSuggestedProjects: v.optional(v.nullable(v.lazy(() => RelationExistsComparator))),
  hasSuggestedLabels: v.optional(v.nullable(v.lazy(() => RelationExistsComparator))),
  hasSuggestedTeams: v.optional(v.nullable(v.lazy(() => RelationExistsComparator))),
  hasActiveAgentSessions: v.optional(v.nullable(v.lazy(() => RelationExistsComparator))),
  hasDismissedAgentSessions: v.optional(v.nullable(v.lazy(() => RelationExistsComparator))),
  hasErroredAgentSessions: v.optional(v.nullable(v.lazy(() => RelationExistsComparator))),
  hasMergedAgentPullRequests: v.optional(v.nullable(v.lazy(() => RelationExistsComparator))),
  slaStatus: v.optional(v.nullable(v.lazy(() => SlaStatusComparator))),
  reactions: v.optional(v.nullable(v.lazy(() => ReactionCollectionFilter))),
  needs: v.optional(v.nullable(v.lazy(() => CustomerNeedCollectionFilter))),
  releases: v.optional(v.nullable(v.lazy(() => ReleaseCollectionFilter))),
  customerCount: v.optional(v.nullable(v.lazy(() => NumberComparator))),
  customerImportantCount: v.optional(v.nullable(v.lazy(() => NumberComparator))),
  leadTime: v.optional(v.nullable(v.lazy(() => NullableDurationComparator))),
  cycleTime: v.optional(v.nullable(v.lazy(() => NullableDurationComparator))),
  ageTime: v.optional(v.nullable(v.lazy(() => NullableDurationComparator))),
  triageTime: v.optional(v.nullable(v.lazy(() => NullableDurationComparator))),
  and: v.optional(v.nullable(v.array(v.lazy(() => IssueCollectionFilter)))),
  or: v.optional(v.nullable(v.array(v.lazy(() => IssueCollectionFilter)))),
  some: v.optional(v.nullable(v.lazy(() => IssueFilter))),
  every: v.optional(v.nullable(v.lazy(() => IssueFilter))),
  length: v.optional(v.nullable(v.lazy(() => NumberComparator))),
})

export const IssueConnection: v.GenericSchema<unknown, T.IssueConnection> = v.looseObject({
  edges: v.optional(v.array(v.lazy(() => IssueEdge))),
  nodes: v.optional(v.array(v.lazy(() => Issue))),
  pageInfo: v.optional(v.lazy(() => PageInfo)),
})

export const IssueCreateInput: v.GenericSchema<unknown, T.IssueCreateInput> = v.looseObject({
  id: v.optional(v.nullable(v.string())),
  title: v.optional(v.nullable(v.string())),
  description: v.optional(v.nullable(v.string())),
  assigneeId: v.optional(v.nullable(v.string())),
  delegateId: v.optional(v.nullable(v.string())),
  parentId: v.optional(v.nullable(v.string())),
  priority: v.optional(v.nullable(integer())),
  estimate: v.optional(v.nullable(integer())),
  subscriberIds: v.optional(v.nullable(v.array(v.string()))),
  labelIds: v.optional(v.nullable(v.array(v.string()))),
  teamId: v.string(),
  cycleId: v.optional(v.nullable(v.string())),
  projectId: v.optional(v.nullable(v.string())),
  projectMilestoneId: v.optional(v.nullable(v.string())),
  lastAppliedTemplateId: v.optional(v.nullable(v.string())),
  stateId: v.optional(v.nullable(v.string())),
  referenceCommentId: v.optional(v.nullable(v.string())),
  sourceCommentId: v.optional(v.nullable(v.string())),
  sortOrder: v.optional(v.nullable(number())),
  prioritySortOrder: v.optional(v.nullable(number())),
  subIssueSortOrder: v.optional(v.nullable(number())),
  dueDate: v.optional(v.nullable(v.string())),
  createAsUser: v.optional(v.nullable(v.string())),
  displayIconUrl: v.optional(v.nullable(v.string())),
  preserveSortOrderOnCreate: v.optional(v.nullable(v.boolean())),
  createdAt: v.optional(v.nullable(v.string())),
  templateId: v.optional(v.nullable(v.string())),
  completedAt: v.optional(v.nullable(v.string())),
  slaType: v.optional(v.nullable(v.lazy(() => SLADayCountType))),
  useDefaultTemplate: v.optional(v.nullable(v.boolean())),
  releaseIds: v.optional(v.nullable(v.array(v.string()))),
})

export const IssueEdge: v.GenericSchema<unknown, T.IssueEdge> = v.looseObject({
  node: v.optional(v.lazy(() => Issue)),
  cursor: v.optional(v.string()),
})

export const IssueFilter: v.GenericSchema<unknown, T.IssueFilter> = v.looseObject({
  id: v.optional(v.nullable(v.lazy(() => IssueIDComparator))),
  createdAt: v.optional(v.nullable(v.lazy(() => DateComparator))),
  updatedAt: v.optional(v.nullable(v.lazy(() => DateComparator))),
  number: v.optional(v.nullable(v.lazy(() => NumberComparator))),
  title: v.optional(v.nullable(v.lazy(() => StringComparator))),
  description: v.optional(v.nullable(v.lazy(() => NullableStringComparator))),
  priority: v.optional(v.nullable(v.lazy(() => NullableNumberComparator))),
  estimate: v.optional(v.nullable(v.lazy(() => EstimateComparator))),
  startedAt: v.optional(v.nullable(v.lazy(() => NullableDateComparator))),
  triagedAt: v.optional(v.nullable(v.lazy(() => NullableDateComparator))),
  completedAt: v.optional(v.nullable(v.lazy(() => NullableDateComparator))),
  canceledAt: v.optional(v.nullable(v.lazy(() => NullableDateComparator))),
  slaBreachesAt: v.optional(v.nullable(v.lazy(() => NullableDateComparator))),
  archivedAt: v.optional(v.nullable(v.lazy(() => NullableDateComparator))),
  autoClosedAt: v.optional(v.nullable(v.lazy(() => NullableDateComparator))),
  autoArchivedAt: v.optional(v.nullable(v.lazy(() => NullableDateComparator))),
  addedToCycleAt: v.optional(v.nullable(v.lazy(() => NullableDateComparator))),
  addedToCyclePeriod: v.optional(v.nullable(v.lazy(() => CyclePeriodComparator))),
  dueDate: v.optional(v.nullable(v.lazy(() => NullableTimelessDateComparator))),
  accumulatedStateUpdatedAt: v.optional(v.nullable(v.lazy(() => NullableDateComparator))),
  snoozedUntilAt: v.optional(v.nullable(v.lazy(() => NullableDateComparator))),
  assignee: v.optional(v.nullable(v.lazy(() => NullableUserFilter))),
  delegate: v.optional(v.nullable(v.lazy(() => NullableUserFilter))),
  lastAppliedTemplate: v.optional(v.nullable(v.lazy(() => NullableTemplateFilter))),
  recurringIssueTemplate: v.optional(v.nullable(v.lazy(() => NullableTemplateFilter))),
  sourceMetadata: v.optional(v.nullable(v.lazy(() => SourceMetadataComparator))),
  creator: v.optional(v.nullable(v.lazy(() => NullableUserFilter))),
  parent: v.optional(v.nullable(v.lazy(() => NullableIssueFilter))),
  snoozedBy: v.optional(v.nullable(v.lazy(() => NullableUserFilter))),
  labels: v.optional(v.nullable(v.lazy(() => IssueLabelCollectionFilter))),
  subscribers: v.optional(v.nullable(v.lazy(() => UserCollectionFilter))),
  hasSharedUsers: v.optional(v.nullable(v.lazy(() => RelationExistsComparator))),
  sharedWith: v.optional(v.nullable(v.lazy(() => UserCollectionFilter))),
  team: v.optional(v.nullable(v.lazy(() => TeamFilter))),
  projectMilestone: v.optional(v.nullable(v.lazy(() => NullableProjectMilestoneFilter))),
  comments: v.optional(v.nullable(v.lazy(() => CommentCollectionFilter))),
  activity: v.optional(v.nullable(v.lazy(() => ActivityCollectionFilter))),
  suggestions: v.optional(v.nullable(v.lazy(() => IssueSuggestionCollectionFilter))),
  cycle: v.optional(v.nullable(v.lazy(() => NullableCycleFilter))),
  project: v.optional(v.nullable(v.lazy(() => NullableProjectFilter))),
  state: v.optional(v.nullable(v.lazy(() => WorkflowStateFilter))),
  children: v.optional(v.nullable(v.lazy(() => IssueCollectionFilter))),
  attachments: v.optional(v.nullable(v.lazy(() => AttachmentCollectionFilter))),
  searchableContent: v.optional(v.nullable(v.lazy(() => ContentComparator))),
  hasRelatedRelations: v.optional(v.nullable(v.lazy(() => RelationExistsComparator))),
  hasDuplicateRelations: v.optional(v.nullable(v.lazy(() => RelationExistsComparator))),
  hasBlockedByRelations: v.optional(v.nullable(v.lazy(() => RelationExistsComparator))),
  hasBlockingRelations: v.optional(v.nullable(v.lazy(() => RelationExistsComparator))),
  hasSuggestedRelatedIssues: v.optional(v.nullable(v.lazy(() => RelationExistsComparator))),
  hasSuggestedSimilarIssues: v.optional(v.nullable(v.lazy(() => RelationExistsComparator))),
  hasSuggestedAssignees: v.optional(v.nullable(v.lazy(() => RelationExistsComparator))),
  hasSuggestedProjects: v.optional(v.nullable(v.lazy(() => RelationExistsComparator))),
  hasSuggestedLabels: v.optional(v.nullable(v.lazy(() => RelationExistsComparator))),
  hasSuggestedTeams: v.optional(v.nullable(v.lazy(() => RelationExistsComparator))),
  hasActiveAgentSessions: v.optional(v.nullable(v.lazy(() => RelationExistsComparator))),
  hasDismissedAgentSessions: v.optional(v.nullable(v.lazy(() => RelationExistsComparator))),
  hasErroredAgentSessions: v.optional(v.nullable(v.lazy(() => RelationExistsComparator))),
  hasMergedAgentPullRequests: v.optional(v.nullable(v.lazy(() => RelationExistsComparator))),
  slaStatus: v.optional(v.nullable(v.lazy(() => SlaStatusComparator))),
  reactions: v.optional(v.nullable(v.lazy(() => ReactionCollectionFilter))),
  needs: v.optional(v.nullable(v.lazy(() => CustomerNeedCollectionFilter))),
  releases: v.optional(v.nullable(v.lazy(() => ReleaseCollectionFilter))),
  customerCount: v.optional(v.nullable(v.lazy(() => NumberComparator))),
  customerImportantCount: v.optional(v.nullable(v.lazy(() => NumberComparator))),
  leadTime: v.optional(v.nullable(v.lazy(() => NullableDurationComparator))),
  cycleTime: v.optional(v.nullable(v.lazy(() => NullableDurationComparator))),
  ageTime: v.optional(v.nullable(v.lazy(() => NullableDurationComparator))),
  triageTime: v.optional(v.nullable(v.lazy(() => NullableDurationComparator))),
  and: v.optional(v.nullable(v.array(v.lazy(() => IssueFilter)))),
  or: v.optional(v.nullable(v.array(v.lazy(() => IssueFilter)))),
})

export const IssueFilterSuggestionPayload: v.GenericSchema<unknown, T.IssueFilterSuggestionPayload> = v.looseObject({
  filter: v.optional(v.nullable(v.unknown())),
  logId: v.optional(v.nullable(v.string())),
})

export const IssueHistory: v.GenericSchema<unknown, T.IssueHistory> = v.looseObject({
  id: v.optional(v.string()),
  createdAt: v.optional(v.string()),
  updatedAt: v.optional(v.string()),
  archivedAt: v.optional(v.nullable(v.string())),
  issue: v.optional(v.lazy(() => Issue)),
  actorId: v.optional(v.nullable(v.string())),
  updatedDescription: v.optional(v.nullable(v.boolean())),
  fromTitle: v.optional(v.nullable(v.string())),
  toTitle: v.optional(v.nullable(v.string())),
  fromAssigneeId: v.optional(v.nullable(v.string())),
  toAssigneeId: v.optional(v.nullable(v.string())),
  fromPriority: v.optional(v.nullable(number())),
  toPriority: v.optional(v.nullable(number())),
  fromTeamId: v.optional(v.nullable(v.string())),
  toTeamId: v.optional(v.nullable(v.string())),
  fromParentId: v.optional(v.nullable(v.string())),
  toParentId: v.optional(v.nullable(v.string())),
  fromStateId: v.optional(v.nullable(v.string())),
  toStateId: v.optional(v.nullable(v.string())),
  fromCycleId: v.optional(v.nullable(v.string())),
  toCycleId: v.optional(v.nullable(v.string())),
  toConvertedProjectId: v.optional(v.nullable(v.string())),
  fromProjectId: v.optional(v.nullable(v.string())),
  toProjectId: v.optional(v.nullable(v.string())),
  fromEstimate: v.optional(v.nullable(number())),
  toEstimate: v.optional(v.nullable(number())),
  archived: v.optional(v.nullable(v.boolean())),
  trashed: v.optional(v.nullable(v.boolean())),
  attachmentId: v.optional(v.nullable(v.string())),
  addedLabelIds: v.optional(v.nullable(v.array(v.string()))),
  removedLabelIds: v.optional(v.nullable(v.array(v.string()))),
  addedToReleaseIds: v.optional(v.nullable(v.array(v.string()))),
  removedFromReleaseIds: v.optional(v.nullable(v.array(v.string()))),
  relationChanges: v.optional(v.nullable(v.array(v.lazy(() => IssueRelationHistoryPayload)))),
  autoClosed: v.optional(v.nullable(v.boolean())),
  autoArchived: v.optional(v.nullable(v.boolean())),
  fromDueDate: v.optional(v.nullable(v.string())),
  toDueDate: v.optional(v.nullable(v.string())),
  customerNeedId: v.optional(v.nullable(v.string())),
  actor: v.optional(v.nullable(v.lazy(() => User))),
  actors: v.optional(v.nullable(v.array(v.lazy(() => User)))),
  descriptionUpdatedBy: v.optional(v.nullable(v.array(v.lazy(() => User)))),
  fromAssignee: v.optional(v.nullable(v.lazy(() => User))),
  toAssignee: v.optional(v.nullable(v.lazy(() => User))),
  fromCycle: v.optional(v.nullable(v.lazy(() => Cycle))),
  toCycle: v.optional(v.nullable(v.lazy(() => Cycle))),
  toConvertedProject: v.optional(v.nullable(v.lazy(() => Project))),
  fromDelegate: v.optional(v.nullable(v.lazy(() => User))),
  toDelegate: v.optional(v.nullable(v.lazy(() => User))),
  fromProject: v.optional(v.nullable(v.lazy(() => Project))),
  toProject: v.optional(v.nullable(v.lazy(() => Project))),
  fromState: v.optional(v.nullable(v.lazy(() => WorkflowState))),
  toState: v.optional(v.nullable(v.lazy(() => WorkflowState))),
  fromTeam: v.optional(v.nullable(v.lazy(() => Team))),
  toTeam: v.optional(v.nullable(v.lazy(() => Team))),
  fromParent: v.optional(v.nullable(v.lazy(() => Issue))),
  toParent: v.optional(v.nullable(v.lazy(() => Issue))),
  attachment: v.optional(v.nullable(v.lazy(() => Attachment))),
  issueImport: v.optional(v.nullable(v.lazy(() => IssueImport))),
  triageResponsibilityNotifiedUsers: v.optional(v.nullable(v.array(v.lazy(() => User)))),
  triageResponsibilityAutoAssigned: v.optional(v.nullable(v.boolean())),
  triageResponsibilityTeam: v.optional(v.nullable(v.lazy(() => Team))),
  fromProjectMilestone: v.optional(v.nullable(v.lazy(() => ProjectMilestone))),
  toProjectMilestone: v.optional(v.nullable(v.lazy(() => ProjectMilestone))),
  fromSlaStartedAt: v.optional(v.nullable(v.string())),
  toSlaStartedAt: v.optional(v.nullable(v.string())),
  fromSlaBreachesAt: v.optional(v.nullable(v.string())),
  toSlaBreachesAt: v.optional(v.nullable(v.string())),
  fromSlaBreached: v.optional(v.nullable(v.boolean())),
  toSlaBreached: v.optional(v.nullable(v.boolean())),
  fromSlaType: v.optional(v.nullable(v.string())),
  toSlaType: v.optional(v.nullable(v.string())),
  botActor: v.optional(v.nullable(v.lazy(() => ActorBot))),
  addedLabels: v.optional(v.nullable(v.array(v.lazy(() => IssueLabel)))),
  removedLabels: v.optional(v.nullable(v.array(v.lazy(() => IssueLabel)))),
  addedToReleases: v.optional(v.nullable(v.array(v.lazy(() => Release)))),
  removedFromReleases: v.optional(v.nullable(v.array(v.lazy(() => Release)))),
})

export const IssueHistoryConnection: v.GenericSchema<unknown, T.IssueHistoryConnection> = v.looseObject({
  edges: v.optional(v.array(v.lazy(() => IssueHistoryEdge))),
  nodes: v.optional(v.array(v.lazy(() => IssueHistory))),
  pageInfo: v.optional(v.lazy(() => PageInfo)),
})

export const IssueHistoryEdge: v.GenericSchema<unknown, T.IssueHistoryEdge> = v.looseObject({
  node: v.optional(v.lazy(() => IssueHistory)),
  cursor: v.optional(v.string()),
})

export const IssueIDComparator: v.GenericSchema<unknown, T.IssueIDComparator> = v.looseObject({
  eq: v.optional(v.nullable(v.string())),
  neq: v.optional(v.nullable(v.string())),
  in: v.optional(v.nullable(v.array(v.string()))),
  nin: v.optional(v.nullable(v.array(v.string()))),
})

export const IssueImport: v.GenericSchema<unknown, T.IssueImport> = v.looseObject({
  id: v.optional(v.string()),
  createdAt: v.optional(v.string()),
  updatedAt: v.optional(v.string()),
  archivedAt: v.optional(v.nullable(v.string())),
  teamName: v.optional(v.nullable(v.string())),
  creatorId: v.optional(v.nullable(v.string())),
  service: v.optional(v.string()),
  status: v.optional(v.string()),
  mapping: v.optional(v.nullable(v.unknown())),
  error: v.optional(v.nullable(v.string())),
  progress: v.optional(v.nullable(number())),
  csvFileUrl: v.optional(v.nullable(v.string())),
  errorMetadata: v.optional(v.nullable(v.unknown())),
  serviceMetadata: v.optional(v.nullable(v.unknown())),
  displayName: v.optional(v.string()),
})

export const IssueImportCheckPayload: v.GenericSchema<unknown, T.IssueImportCheckPayload> = v.looseObject({
  success: v.optional(v.boolean()),
})

export const IssueImportDeletePayload: v.GenericSchema<unknown, T.IssueImportDeletePayload> = v.looseObject({
  lastSyncId: v.optional(number()),
  issueImport: v.optional(v.nullable(v.lazy(() => IssueImport))),
  success: v.optional(v.boolean()),
})

export const IssueImportJqlCheckPayload: v.GenericSchema<unknown, T.IssueImportJqlCheckPayload> = v.looseObject({
  success: v.optional(v.boolean()),
  count: v.optional(v.nullable(number())),
  error: v.optional(v.nullable(v.string())),
})

export const IssueImportPayload: v.GenericSchema<unknown, T.IssueImportPayload> = v.looseObject({
  lastSyncId: v.optional(number()),
  issueImport: v.optional(v.nullable(v.lazy(() => IssueImport))),
  success: v.optional(v.boolean()),
})

export const IssueImportSyncCheckPayload: v.GenericSchema<unknown, T.IssueImportSyncCheckPayload> = v.looseObject({
  canSync: v.optional(v.boolean()),
  error: v.optional(v.nullable(v.string())),
})

export const IssueImportUpdateInput: v.GenericSchema<unknown, T.IssueImportUpdateInput> = v.looseObject({
  mapping: v.unknown(),
})

export const IssueLabel: v.GenericSchema<unknown, T.IssueLabel> = v.looseObject({
  id: v.optional(v.string()),
  createdAt: v.optional(v.string()),
  updatedAt: v.optional(v.string()),
  archivedAt: v.optional(v.nullable(v.string())),
  name: v.optional(v.string()),
  description: v.optional(v.nullable(v.string())),
  color: v.optional(v.string()),
  isGroup: v.optional(v.boolean()),
  lastAppliedAt: v.optional(v.nullable(v.string())),
  groupType: v.optional(v.nullable(v.lazy(() => LabelGroupType))),
  organization: v.optional(v.lazy(() => Organization)),
  team: v.optional(v.nullable(v.lazy(() => Team))),
  creator: v.optional(v.nullable(v.lazy(() => User))),
  retiredBy: v.optional(v.nullable(v.lazy(() => User))),
  parent: v.optional(v.nullable(v.lazy(() => IssueLabel))),
  inheritedFrom: v.optional(v.nullable(v.lazy(() => IssueLabel))),
  issues: v.optional(v.lazy(() => IssueConnection)),
  children: v.optional(v.lazy(() => IssueLabelConnection)),
})

export const IssueLabelCollectionFilter: v.GenericSchema<unknown, T.IssueLabelCollectionFilter> = v.looseObject({
  id: v.optional(v.nullable(v.lazy(() => IDComparator))),
  createdAt: v.optional(v.nullable(v.lazy(() => DateComparator))),
  updatedAt: v.optional(v.nullable(v.lazy(() => DateComparator))),
  name: v.optional(v.nullable(v.lazy(() => StringComparator))),
  isGroup: v.optional(v.nullable(v.lazy(() => BooleanComparator))),
  creator: v.optional(v.nullable(v.lazy(() => NullableUserFilter))),
  team: v.optional(v.nullable(v.lazy(() => NullableTeamFilter))),
  parent: v.optional(v.nullable(v.lazy(() => IssueLabelFilter))),
  null: v.optional(v.nullable(v.boolean())),
  and: v.optional(v.nullable(v.array(v.lazy(() => IssueLabelCollectionFilter)))),
  or: v.optional(v.nullable(v.array(v.lazy(() => IssueLabelCollectionFilter)))),
  some: v.optional(v.nullable(v.lazy(() => IssueLabelFilter))),
  every: v.optional(v.nullable(v.lazy(() => IssueLabelFilter))),
  length: v.optional(v.nullable(v.lazy(() => NumberComparator))),
})

export const IssueLabelConnection: v.GenericSchema<unknown, T.IssueLabelConnection> = v.looseObject({
  edges: v.optional(v.array(v.lazy(() => IssueLabelEdge))),
  nodes: v.optional(v.array(v.lazy(() => IssueLabel))),
  pageInfo: v.optional(v.lazy(() => PageInfo)),
})

export const IssueLabelCreateInput: v.GenericSchema<unknown, T.IssueLabelCreateInput> = v.looseObject({
  id: v.optional(v.nullable(v.string())),
  name: v.string(),
  description: v.optional(v.nullable(v.string())),
  color: v.optional(v.nullable(v.string())),
  parentId: v.optional(v.nullable(v.string())),
  isGroup: v.optional(v.nullable(v.boolean())),
  retiredAt: v.optional(v.nullable(v.string())),
  groupType: v.optional(v.nullable(v.lazy(() => LabelGroupType))),
  teamId: v.optional(v.nullable(v.string())),
})

export const IssueLabelEdge: v.GenericSchema<unknown, T.IssueLabelEdge> = v.looseObject({
  node: v.optional(v.lazy(() => IssueLabel)),
  cursor: v.optional(v.string()),
})

export const IssueLabelFilter: v.GenericSchema<unknown, T.IssueLabelFilter> = v.looseObject({
  id: v.optional(v.nullable(v.lazy(() => IDComparator))),
  createdAt: v.optional(v.nullable(v.lazy(() => DateComparator))),
  updatedAt: v.optional(v.nullable(v.lazy(() => DateComparator))),
  name: v.optional(v.nullable(v.lazy(() => StringComparator))),
  isGroup: v.optional(v.nullable(v.lazy(() => BooleanComparator))),
  creator: v.optional(v.nullable(v.lazy(() => NullableUserFilter))),
  team: v.optional(v.nullable(v.lazy(() => NullableTeamFilter))),
  parent: v.optional(v.nullable(v.lazy(() => IssueLabelFilter))),
  and: v.optional(v.nullable(v.array(v.lazy(() => IssueLabelFilter)))),
  or: v.optional(v.nullable(v.array(v.lazy(() => IssueLabelFilter)))),
})

export const IssueLabelPayload: v.GenericSchema<unknown, T.IssueLabelPayload> = v.looseObject({
  lastSyncId: v.optional(number()),
  issueLabel: v.optional(v.lazy(() => IssueLabel)),
  success: v.optional(v.boolean()),
})

export const IssueLabelUpdateInput: v.GenericSchema<unknown, T.IssueLabelUpdateInput> = v.looseObject({
  name: v.optional(v.nullable(v.string())),
  description: v.optional(v.nullable(v.string())),
  parentId: v.optional(v.nullable(v.string())),
  color: v.optional(v.nullable(v.string())),
  isGroup: v.optional(v.nullable(v.boolean())),
  retiredAt: v.optional(v.nullable(v.string())),
  groupType: v.optional(v.nullable(v.lazy(() => LabelGroupType))),
})

export const IssueNotification: v.GenericSchema<unknown, T.IssueNotification> = v.looseObject({
  commentId: v.optional(v.nullable(v.string())),
  parentCommentId: v.optional(v.nullable(v.string())),
  reactionEmoji: v.optional(v.nullable(v.string())),
  id: v.optional(v.string()),
  createdAt: v.optional(v.string()),
  updatedAt: v.optional(v.string()),
  archivedAt: v.optional(v.nullable(v.string())),
  type: v.optional(v.string()),
  actor: v.optional(v.nullable(v.lazy(() => User))),
  externalUserActor: v.optional(v.nullable(v.lazy(() => ExternalUser))),
  user: v.optional(v.lazy(() => User)),
  readAt: v.optional(v.nullable(v.string())),
  emailedAt: v.optional(v.nullable(v.string())),
  snoozedUntilAt: v.optional(v.nullable(v.string())),
  unsnoozedAt: v.optional(v.nullable(v.string())),
  category: v.optional(v.lazy(() => NotificationCategory)),
  botActor: v.optional(v.nullable(v.lazy(() => ActorBot))),
  issueId: v.optional(v.string()),
  issue: v.optional(v.lazy(() => Issue)),
  comment: v.optional(v.nullable(v.lazy(() => Comment))),
  parentComment: v.optional(v.nullable(v.lazy(() => Comment))),
  team: v.optional(v.lazy(() => Team)),
  subscriptions: v.optional(v.nullable(v.array(v.lazy(() => NotificationSubscription)))),
})

export const IssuePayload: v.GenericSchema<unknown, T.IssuePayload> = v.looseObject({
  lastSyncId: v.optional(number()),
  issue: v.optional(v.nullable(v.lazy(() => Issue))),
  success: v.optional(v.boolean()),
})

export const IssuePriorityValue: v.GenericSchema<unknown, T.IssuePriorityValue> = v.looseObject({
  priority: v.optional(integer()),
  label: v.optional(v.string()),
})

export const IssueReferenceInput: v.GenericSchema<unknown, T.IssueReferenceInput> = v.looseObject({
  identifier: v.string(),
  commitSha: v.string(),
})

export const IssueRelation: v.GenericSchema<unknown, T.IssueRelation> = v.looseObject({
  id: v.optional(v.string()),
  createdAt: v.optional(v.string()),
  updatedAt: v.optional(v.string()),
  archivedAt: v.optional(v.nullable(v.string())),
  type: v.optional(v.string()),
  issue: v.optional(v.lazy(() => Issue)),
  relatedIssue: v.optional(v.lazy(() => Issue)),
})

export const IssueRelationConnection: v.GenericSchema<unknown, T.IssueRelationConnection> = v.looseObject({
  edges: v.optional(v.array(v.lazy(() => IssueRelationEdge))),
  nodes: v.optional(v.array(v.lazy(() => IssueRelation))),
  pageInfo: v.optional(v.lazy(() => PageInfo)),
})

export const IssueRelationCreateInput: v.GenericSchema<unknown, T.IssueRelationCreateInput> = v.looseObject({
  id: v.optional(v.nullable(v.string())),
  type: v.lazy(() => IssueRelationType),
  issueId: v.string(),
  relatedIssueId: v.string(),
})

export const IssueRelationEdge: v.GenericSchema<unknown, T.IssueRelationEdge> = v.looseObject({
  node: v.optional(v.lazy(() => IssueRelation)),
  cursor: v.optional(v.string()),
})

export const IssueRelationHistoryPayload: v.GenericSchema<unknown, T.IssueRelationHistoryPayload> = v.looseObject({
  identifier: v.optional(v.string()),
  type: v.optional(v.string()),
})

export const IssueRelationPayload: v.GenericSchema<unknown, T.IssueRelationPayload> = v.looseObject({
  lastSyncId: v.optional(number()),
  issueRelation: v.optional(v.lazy(() => IssueRelation)),
  success: v.optional(v.boolean()),
})

export const IssueRelationType: v.GenericSchema<unknown, T.IssueRelationType> = v.picklist([
  "blocks",
  "duplicate",
  "related",
  "similar",
])

export const IssueRelationUpdateInput: v.GenericSchema<unknown, T.IssueRelationUpdateInput> = v.looseObject({
  type: v.optional(v.nullable(v.string())),
  issueId: v.optional(v.nullable(v.string())),
  relatedIssueId: v.optional(v.nullable(v.string())),
})

export const IssueSearchPayload: v.GenericSchema<unknown, T.IssueSearchPayload> = v.looseObject({
  edges: v.optional(v.array(v.lazy(() => IssueSearchResultEdge))),
  nodes: v.optional(v.array(v.lazy(() => IssueSearchResult))),
  pageInfo: v.optional(v.lazy(() => PageInfo)),
  archivePayload: v.optional(v.lazy(() => ArchiveResponse)),
  totalCount: v.optional(number()),
})

export const IssueSearchResult: v.GenericSchema<unknown, T.IssueSearchResult> = v.looseObject({
  id: v.optional(v.string()),
  createdAt: v.optional(v.string()),
  updatedAt: v.optional(v.string()),
  archivedAt: v.optional(v.nullable(v.string())),
  number: v.optional(number()),
  title: v.optional(v.string()),
  priority: v.optional(number()),
  estimate: v.optional(v.nullable(number())),
  boardOrder: v.optional(number()),
  sortOrder: v.optional(number()),
  prioritySortOrder: v.optional(number()),
  startedAt: v.optional(v.nullable(v.string())),
  completedAt: v.optional(v.nullable(v.string())),
  startedTriageAt: v.optional(v.nullable(v.string())),
  triagedAt: v.optional(v.nullable(v.string())),
  canceledAt: v.optional(v.nullable(v.string())),
  autoClosedAt: v.optional(v.nullable(v.string())),
  autoArchivedAt: v.optional(v.nullable(v.string())),
  dueDate: v.optional(v.nullable(v.string())),
  slaStartedAt: v.optional(v.nullable(v.string())),
  slaMediumRiskAt: v.optional(v.nullable(v.string())),
  slaHighRiskAt: v.optional(v.nullable(v.string())),
  slaBreachesAt: v.optional(v.nullable(v.string())),
  slaType: v.optional(v.nullable(v.string())),
  addedToProjectAt: v.optional(v.nullable(v.string())),
  addedToCycleAt: v.optional(v.nullable(v.string())),
  addedToTeamAt: v.optional(v.nullable(v.string())),
  trashed: v.optional(v.nullable(v.boolean())),
  snoozedUntilAt: v.optional(v.nullable(v.string())),
  labelIds: v.optional(v.array(v.string())),
  team: v.optional(v.lazy(() => Team)),
  cycle: v.optional(v.nullable(v.lazy(() => Cycle))),
  project: v.optional(v.nullable(v.lazy(() => Project))),
  projectMilestone: v.optional(v.nullable(v.lazy(() => ProjectMilestone))),
  lastAppliedTemplate: v.optional(v.nullable(v.lazy(() => Template))),
  recurringIssueTemplate: v.optional(v.nullable(v.lazy(() => Template))),
  previousIdentifiers: v.optional(v.array(v.string())),
  creator: v.optional(v.nullable(v.lazy(() => User))),
  externalUserCreator: v.optional(v.nullable(v.lazy(() => ExternalUser))),
  assignee: v.optional(v.nullable(v.lazy(() => User))),
  delegate: v.optional(v.nullable(v.lazy(() => User))),
  snoozedBy: v.optional(v.nullable(v.lazy(() => User))),
  state: v.optional(v.lazy(() => WorkflowState)),
  subIssueSortOrder: v.optional(v.nullable(number())),
  reactionData: v.optional(v.unknown()),
  priorityLabel: v.optional(v.string()),
  sourceComment: v.optional(v.nullable(v.lazy(() => Comment))),
  integrationSourceType: v.optional(v.nullable(v.lazy(() => IntegrationService))),
  inheritsSharedAccess: v.optional(v.boolean()),
  documents: v.optional(v.lazy(() => DocumentConnection)),
  botActor: v.optional(v.nullable(v.lazy(() => ActorBot))),
  favorite: v.optional(v.nullable(v.lazy(() => Favorite))),
  identifier: v.optional(v.string()),
  url: v.optional(v.string()),
  branchName: v.optional(v.string()),
  sharedAccess: v.optional(v.lazy(() => IssueSharedAccess)),
  customerTicketCount: v.optional(integer()),
  subscribers: v.optional(v.lazy(() => UserConnection)),
  parent: v.optional(v.nullable(v.lazy(() => Issue))),
  children: v.optional(v.lazy(() => IssueConnection)),
  comments: v.optional(v.lazy(() => CommentConnection)),
  history: v.optional(v.lazy(() => IssueHistoryConnection)),
  labels: v.optional(v.lazy(() => IssueLabelConnection)),
  relations: v.optional(v.lazy(() => IssueRelationConnection)),
  inverseRelations: v.optional(v.lazy(() => IssueRelationConnection)),
  attachments: v.optional(v.lazy(() => AttachmentConnection)),
  formerAttachments: v.optional(v.lazy(() => AttachmentConnection)),
  description: v.optional(v.nullable(v.string())),
  documentContent: v.optional(v.nullable(v.lazy(() => DocumentContent))),
  reactions: v.optional(v.array(v.lazy(() => Reaction))),
  needs: v.optional(v.lazy(() => CustomerNeedConnection)),
  formerNeeds: v.optional(v.lazy(() => CustomerNeedConnection)),
  releases: v.optional(v.lazy(() => ReleaseConnection)),
  syncedWith: v.optional(v.nullable(v.array(v.lazy(() => ExternalEntityInfo)))),
  asksRequester: v.optional(v.nullable(v.lazy(() => User))),
  asksExternalUserRequester: v.optional(v.nullable(v.lazy(() => ExternalUser))),
  stateHistory: v.optional(v.lazy(() => IssueStateSpanConnection)),
  metadata: v.optional(v.unknown()),
})

export const IssueSearchResultEdge: v.GenericSchema<unknown, T.IssueSearchResultEdge> = v.looseObject({
  node: v.optional(v.lazy(() => IssueSearchResult)),
  cursor: v.optional(v.string()),
})

export const IssueSharedAccess: v.GenericSchema<unknown, T.IssueSharedAccess> = v.looseObject({
  isShared: v.optional(v.boolean()),
  viewerHasOnlySharedAccess: v.optional(v.boolean()),
  sharedWithCount: v.optional(integer()),
  sharedWithUsers: v.optional(v.array(v.lazy(() => User))),
  disallowedIssueFields: v.optional(v.array(v.lazy(() => IssueSharedAccessDisallowedField))),
})

export const IssueSharedAccessDisallowedField: v.GenericSchema<unknown, T.IssueSharedAccessDisallowedField> =
  v.picklist(["projectId", "teamId", "cycleId", "projectMilestoneId"])

export const IssueSharingPolicy: v.GenericSchema<unknown, T.IssueSharingPolicy> = v.picklist([
  "disabled",
  "adminsOnly",
  "allMembers",
])

export const IssueSortInput: v.GenericSchema<unknown, T.IssueSortInput> = v.looseObject({
  priority: v.optional(v.nullable(v.lazy(() => PrioritySort))),
  estimate: v.optional(v.nullable(v.lazy(() => EstimateSort))),
  title: v.optional(v.nullable(v.lazy(() => TitleSort))),
  label: v.optional(v.nullable(v.lazy(() => LabelSort))),
  labelGroup: v.optional(v.nullable(v.lazy(() => LabelGroupSort))),
  slaStatus: v.optional(v.nullable(v.lazy(() => SlaStatusSort))),
  createdAt: v.optional(v.nullable(v.lazy(() => CreatedAtSort))),
  updatedAt: v.optional(v.nullable(v.lazy(() => UpdatedAtSort))),
  completedAt: v.optional(v.nullable(v.lazy(() => CompletedAtSort))),
  dueDate: v.optional(v.nullable(v.lazy(() => DueDateSort))),
  cycle: v.optional(v.nullable(v.lazy(() => CycleSort))),
  milestone: v.optional(v.nullable(v.lazy(() => MilestoneSort))),
  assignee: v.optional(v.nullable(v.lazy(() => AssigneeSort))),
  delegate: v.optional(v.nullable(v.lazy(() => DelegateSort))),
  project: v.optional(v.nullable(v.lazy(() => ProjectSort))),
  team: v.optional(v.nullable(v.lazy(() => TeamSort))),
  manual: v.optional(v.nullable(v.lazy(() => ManualSort))),
  workflowState: v.optional(v.nullable(v.lazy(() => WorkflowStateSort))),
  customer: v.optional(v.nullable(v.lazy(() => CustomerSort))),
  customerRevenue: v.optional(v.nullable(v.lazy(() => CustomerRevenueSort))),
  customerCount: v.optional(v.nullable(v.lazy(() => CustomerCountSort))),
  customerImportantCount: v.optional(v.nullable(v.lazy(() => CustomerImportantCountSort))),
  rootIssue: v.optional(v.nullable(v.lazy(() => RootIssueSort))),
  linkCount: v.optional(v.nullable(v.lazy(() => LinkCountSort))),
  release: v.optional(v.nullable(v.lazy(() => ReleaseSort))),
})

export const IssueStateSpan: v.GenericSchema<unknown, T.IssueStateSpan> = v.looseObject({
  id: v.optional(v.string()),
  stateId: v.optional(v.string()),
  startedAt: v.optional(v.string()),
  endedAt: v.optional(v.nullable(v.string())),
  state: v.optional(v.nullable(v.lazy(() => WorkflowState))),
})

export const IssueStateSpanConnection: v.GenericSchema<unknown, T.IssueStateSpanConnection> = v.looseObject({
  edges: v.optional(v.array(v.lazy(() => IssueStateSpanEdge))),
  nodes: v.optional(v.array(v.lazy(() => IssueStateSpan))),
  pageInfo: v.optional(v.lazy(() => PageInfo)),
})

export const IssueStateSpanEdge: v.GenericSchema<unknown, T.IssueStateSpanEdge> = v.looseObject({
  node: v.optional(v.lazy(() => IssueStateSpan)),
  cursor: v.optional(v.string()),
})

export const IssueSubscriptionFilter: v.GenericSchema<unknown, T.IssueSubscriptionFilter> = v.looseObject({
  teamId: v.optional(v.nullable(v.lazy(() => IDComparator))),
  projectId: v.optional(v.nullable(v.lazy(() => IDComparator))),
  assigneeId: v.optional(v.nullable(v.lazy(() => IDComparator))),
  stateId: v.optional(v.nullable(v.lazy(() => IDComparator))),
  parentId: v.optional(v.nullable(v.lazy(() => IDComparator))),
})

export const IssueSuggestionCollectionFilter: v.GenericSchema<unknown, T.IssueSuggestionCollectionFilter> =
  v.looseObject({
    id: v.optional(v.nullable(v.lazy(() => IDComparator))),
    createdAt: v.optional(v.nullable(v.lazy(() => DateComparator))),
    updatedAt: v.optional(v.nullable(v.lazy(() => DateComparator))),
    type: v.optional(v.nullable(v.lazy(() => StringComparator))),
    state: v.optional(v.nullable(v.lazy(() => StringComparator))),
    suggestedUser: v.optional(v.nullable(v.lazy(() => NullableUserFilter))),
    suggestedProject: v.optional(v.nullable(v.lazy(() => NullableProjectFilter))),
    suggestedTeam: v.optional(v.nullable(v.lazy(() => NullableTeamFilter))),
    suggestedLabel: v.optional(v.nullable(v.lazy(() => IssueLabelFilter))),
    and: v.optional(v.nullable(v.array(v.lazy(() => IssueSuggestionCollectionFilter)))),
    or: v.optional(v.nullable(v.array(v.lazy(() => IssueSuggestionCollectionFilter)))),
    some: v.optional(v.nullable(v.lazy(() => IssueSuggestionFilter))),
    every: v.optional(v.nullable(v.lazy(() => IssueSuggestionFilter))),
    length: v.optional(v.nullable(v.lazy(() => NumberComparator))),
  })

export const IssueSuggestionFilter: v.GenericSchema<unknown, T.IssueSuggestionFilter> = v.looseObject({
  id: v.optional(v.nullable(v.lazy(() => IDComparator))),
  createdAt: v.optional(v.nullable(v.lazy(() => DateComparator))),
  updatedAt: v.optional(v.nullable(v.lazy(() => DateComparator))),
  type: v.optional(v.nullable(v.lazy(() => StringComparator))),
  state: v.optional(v.nullable(v.lazy(() => StringComparator))),
  suggestedUser: v.optional(v.nullable(v.lazy(() => NullableUserFilter))),
  suggestedProject: v.optional(v.nullable(v.lazy(() => NullableProjectFilter))),
  suggestedTeam: v.optional(v.nullable(v.lazy(() => NullableTeamFilter))),
  suggestedLabel: v.optional(v.nullable(v.lazy(() => IssueLabelFilter))),
  and: v.optional(v.nullable(v.array(v.lazy(() => IssueSuggestionFilter)))),
  or: v.optional(v.nullable(v.array(v.lazy(() => IssueSuggestionFilter)))),
})

export const IssueTitleSuggestionFromCustomerRequestPayload: v.GenericSchema<
  unknown,
  T.IssueTitleSuggestionFromCustomerRequestPayload
> = v.looseObject({
  lastSyncId: v.optional(number()),
  title: v.optional(v.string()),
})

export const IssueToRelease: v.GenericSchema<unknown, T.IssueToRelease> = v.looseObject({
  id: v.optional(v.string()),
  createdAt: v.optional(v.string()),
  updatedAt: v.optional(v.string()),
  archivedAt: v.optional(v.nullable(v.string())),
  issue: v.optional(v.lazy(() => Issue)),
  release: v.optional(v.lazy(() => Release)),
})

export const IssueToReleaseConnection: v.GenericSchema<unknown, T.IssueToReleaseConnection> = v.looseObject({
  edges: v.optional(v.array(v.lazy(() => IssueToReleaseEdge))),
  nodes: v.optional(v.array(v.lazy(() => IssueToRelease))),
  pageInfo: v.optional(v.lazy(() => PageInfo)),
})

export const IssueToReleaseCreateInput: v.GenericSchema<unknown, T.IssueToReleaseCreateInput> = v.looseObject({
  id: v.optional(v.nullable(v.string())),
  issueId: v.string(),
  releaseId: v.string(),
})

export const IssueToReleaseEdge: v.GenericSchema<unknown, T.IssueToReleaseEdge> = v.looseObject({
  node: v.optional(v.lazy(() => IssueToRelease)),
  cursor: v.optional(v.string()),
})

export const IssueToReleasePayload: v.GenericSchema<unknown, T.IssueToReleasePayload> = v.looseObject({
  lastSyncId: v.optional(number()),
  issueToRelease: v.optional(v.lazy(() => IssueToRelease)),
  success: v.optional(v.boolean()),
})

export const IssueUpdateInput: v.GenericSchema<unknown, T.IssueUpdateInput> = v.looseObject({
  title: v.optional(v.nullable(v.string())),
  description: v.optional(v.nullable(v.string())),
  assigneeId: v.optional(v.nullable(v.string())),
  delegateId: v.optional(v.nullable(v.string())),
  parentId: v.optional(v.nullable(v.string())),
  priority: v.optional(v.nullable(integer())),
  estimate: v.optional(v.nullable(integer())),
  subscriberIds: v.optional(v.nullable(v.array(v.string()))),
  labelIds: v.optional(v.nullable(v.array(v.string()))),
  addedLabelIds: v.optional(v.nullable(v.array(v.string()))),
  removedLabelIds: v.optional(v.nullable(v.array(v.string()))),
  releaseIds: v.optional(v.nullable(v.array(v.string()))),
  addedReleaseIds: v.optional(v.nullable(v.array(v.string()))),
  removedReleaseIds: v.optional(v.nullable(v.array(v.string()))),
  teamId: v.optional(v.nullable(v.string())),
  cycleId: v.optional(v.nullable(v.string())),
  projectId: v.optional(v.nullable(v.string())),
  projectMilestoneId: v.optional(v.nullable(v.string())),
  lastAppliedTemplateId: v.optional(v.nullable(v.string())),
  stateId: v.optional(v.nullable(v.string())),
  sortOrder: v.optional(v.nullable(number())),
  prioritySortOrder: v.optional(v.nullable(number())),
  subIssueSortOrder: v.optional(v.nullable(number())),
  dueDate: v.optional(v.nullable(v.string())),
  inheritsSharedAccess: v.optional(v.nullable(v.boolean())),
  trashed: v.optional(v.nullable(v.boolean())),
  snoozedUntilAt: v.optional(v.nullable(v.string())),
  snoozedById: v.optional(v.nullable(v.string())),
  slaType: v.optional(v.nullable(v.lazy(() => SLADayCountType))),
  autoClosedByParentClosing: v.optional(v.nullable(v.boolean())),
})

export const JiraProject: v.GenericSchema<unknown, T.JiraProject> = v.looseObject({
  id: v.optional(v.string()),
  createdAt: v.optional(v.string()),
  updatedAt: v.optional(v.string()),
  archivedAt: v.optional(v.nullable(v.string())),
  integration: v.optional(v.lazy(() => Integration)),
  externalId: v.optional(v.string()),
  key: v.optional(v.string()),
  name: v.optional(v.string()),
  team: v.optional(v.nullable(v.lazy(() => Team))),
  syncDirection: v.optional(v.nullable(v.lazy(() => JiraSyncDirection))),
  isDefault: v.optional(v.boolean()),
  syncEnabledAt: v.optional(v.nullable(v.string())),
  creator: v.optional(v.nullable(v.lazy(() => User))),
  linearTeam: v.optional(v.nullable(v.lazy(() => Team))),
  syncStatus: v.optional(v.lazy(() => JiraProjectSyncStatus)),
  importStatus: v.optional(v.lazy(() => JiraProjectImportStatus)),
  latestImport: v.optional(v.nullable(v.lazy(() => IssueImport))),
  importedIssueCount: v.optional(v.nullable(integer())),
  configurationError: v.optional(v.nullable(v.string())),
})

export const JiraProjectBatchMigrateInput: v.GenericSchema<unknown, T.JiraProjectBatchMigrateInput> = v.looseObject({
  integrationId: v.string(),
  projects: v.array(v.lazy(() => JiraProjectBatchMigrateProjectInput)),
})

export const JiraProjectBatchMigratePayload: v.GenericSchema<unknown, T.JiraProjectBatchMigratePayload> = v.looseObject(
  {
    lastSyncId: v.optional(number()),
    success: v.optional(v.boolean()),
    projects: v.optional(v.array(v.lazy(() => JiraProjectMigrationResult))),
  },
)

export const JiraProjectBatchMigrateProjectInput: v.GenericSchema<unknown, T.JiraProjectBatchMigrateProjectInput> =
  v.looseObject({
    externalId: v.optional(v.nullable(v.string())),
    key: v.optional(v.nullable(v.string())),
    teamId: v.optional(v.nullable(v.string())),
    teamName: v.optional(v.nullable(v.string())),
    import: v.optional(v.nullable(v.lazy(() => JiraProjectMigrateImportInput))),
    sync: v.optional(v.nullable(v.lazy(() => JiraProjectMigrateSyncInput))),
  })

export const JiraProjectConnection: v.GenericSchema<unknown, T.JiraProjectConnection> = v.looseObject({
  edges: v.optional(v.array(v.lazy(() => JiraProjectEdge))),
  nodes: v.optional(v.array(v.lazy(() => JiraProject))),
  pageInfo: v.optional(v.lazy(() => PageInfo)),
})

export const JiraProjectEdge: v.GenericSchema<unknown, T.JiraProjectEdge> = v.looseObject({
  node: v.optional(v.lazy(() => JiraProject)),
  cursor: v.optional(v.string()),
})

export const JiraProjectFilter: v.GenericSchema<unknown, T.JiraProjectFilter> = v.looseObject({
  id: v.optional(v.nullable(v.lazy(() => IDComparator))),
  createdAt: v.optional(v.nullable(v.lazy(() => DateComparator))),
  updatedAt: v.optional(v.nullable(v.lazy(() => DateComparator))),
  integrationId: v.optional(v.nullable(v.lazy(() => IDComparator))),
  key: v.optional(v.nullable(v.lazy(() => StringComparator))),
  team: v.optional(v.nullable(v.lazy(() => NullableTeamFilter))),
  and: v.optional(v.nullable(v.array(v.lazy(() => JiraProjectFilter)))),
  or: v.optional(v.nullable(v.array(v.lazy(() => JiraProjectFilter)))),
})

export const JiraProjectImportStatus: v.GenericSchema<unknown, T.JiraProjectImportStatus> = v.picklist([
  "none",
  "queued",
  "importing",
  "imported",
  "failed",
  "expired",
  "deleting",
])

export const JiraProjectMigrateImportInput: v.GenericSchema<unknown, T.JiraProjectMigrateImportInput> = v.looseObject({
  jql: v.optional(v.nullable(v.string())),
  includeStaleIssues: v.boolean(),
  includeClosedIssues: v.boolean(),
  users: v.lazy(() => ImportUsersOption),
})

export const JiraProjectMigrateSyncInput: v.GenericSchema<unknown, T.JiraProjectMigrateSyncInput> = v.looseObject({
  syncDirection: v.lazy(() => JiraSyncDirection),
})

export const JiraProjectMigrationError: v.GenericSchema<unknown, T.JiraProjectMigrationError> = v.looseObject({
  code: v.optional(v.lazy(() => JiraProjectMigrationErrorCode)),
  message: v.optional(v.string()),
})

export const JiraProjectMigrationErrorCode: v.GenericSchema<unknown, T.JiraProjectMigrationErrorCode> = v.picklist([
  "invalidOptions",
  "duplicateProject",
  "projectNotFound",
  "projectAlreadySyncing",
  "projectSyncsWithAnotherTeam",
  "projectBeingImported",
  "importDeletionRunning",
  "projectChanged",
  "teamNotFound",
  "teamNotAccessible",
  "teamInheritsWorkflowStatuses",
  "teamQuotaExceeded",
  "legacySyncDirection",
  "missingTeamCreationPermission",
  "missingInvitePermission",
  "missingJiraAccess",
  "missingWebhookPermission",
  "missingCreateIssuesPermission",
  "projectNotReadable",
  "invalidJql",
  "noMatchingIssues",
  "jiraAuthFailed",
  "jiraRateLimited",
  "jiraUnavailable",
])

export const JiraProjectMigrationResult: v.GenericSchema<unknown, T.JiraProjectMigrationResult> = v.looseObject({
  index: v.optional(integer()),
  externalId: v.optional(v.nullable(v.string())),
  key: v.optional(v.nullable(v.string())),
  name: v.optional(v.nullable(v.string())),
  success: v.optional(v.boolean()),
  error: v.optional(v.nullable(v.lazy(() => JiraProjectMigrationError))),
  issueCount: v.optional(v.nullable(integer())),
  jiraProject: v.optional(v.nullable(v.lazy(() => JiraProject))),
  issueImport: v.optional(v.nullable(v.lazy(() => IssueImport))),
})

export const JiraProjectSyncStatus: v.GenericSchema<unknown, T.JiraProjectSyncStatus> = v.picklist([
  "bidirectional",
  "jiraToLinear",
  "afterImport",
  "notSyncing",
])

export const JiraSyncDirection: v.GenericSchema<unknown, T.JiraSyncDirection> = v.picklist([
  "bidirectional",
  "jiraToLinear",
  "legacyJiraToLinear",
])

export const LabelGroupSort: v.GenericSchema<unknown, T.LabelGroupSort> = v.looseObject({
  nulls: v.optional(v.nullable(v.lazy(() => PaginationNulls))),
  order: v.optional(v.nullable(v.lazy(() => PaginationSortOrder))),
  labelGroupId: v.string(),
})

export const LabelGroupType: v.GenericSchema<unknown, T.LabelGroupType> = v.picklist(["singleSelect", "multiSelect"])

export const LabelNotificationSubscription: v.GenericSchema<unknown, T.LabelNotificationSubscription> = v.looseObject({
  id: v.optional(v.string()),
  createdAt: v.optional(v.string()),
  updatedAt: v.optional(v.string()),
  archivedAt: v.optional(v.nullable(v.string())),
  subscriber: v.optional(v.lazy(() => User)),
  customer: v.optional(v.nullable(v.lazy(() => Customer))),
  customView: v.optional(v.nullable(v.lazy(() => CustomView))),
  cycle: v.optional(v.nullable(v.lazy(() => Cycle))),
  label: v.optional(v.lazy(() => IssueLabel)),
  project: v.optional(v.nullable(v.lazy(() => Project))),
  initiative: v.optional(v.nullable(v.lazy(() => Initiative))),
  team: v.optional(v.nullable(v.lazy(() => Team))),
  user: v.optional(v.nullable(v.lazy(() => User))),
  contextViewType: v.optional(v.nullable(v.lazy(() => ContextViewType))),
  userContextViewType: v.optional(v.nullable(v.lazy(() => UserContextViewType))),
  active: v.optional(v.boolean()),
  includeSubInitiativeUpdates: v.optional(v.boolean()),
  notificationSubscriptionTypes: v.optional(v.array(v.string())),
})

export const LabelSort: v.GenericSchema<unknown, T.LabelSort> = v.looseObject({
  nulls: v.optional(v.nullable(v.lazy(() => PaginationNulls))),
  order: v.optional(v.nullable(v.lazy(() => PaginationSortOrder))),
})

export const LinkCountSort: v.GenericSchema<unknown, T.LinkCountSort> = v.looseObject({
  nulls: v.optional(v.nullable(v.lazy(() => PaginationNulls))),
  order: v.optional(v.nullable(v.lazy(() => PaginationSortOrder))),
})

export const LogoutResponse: v.GenericSchema<unknown, T.LogoutResponse> = v.looseObject({
  success: v.optional(v.boolean()),
})

export const ManualSort: v.GenericSchema<unknown, T.ManualSort> = v.looseObject({
  nulls: v.optional(v.nullable(v.lazy(() => PaginationNulls))),
  order: v.optional(v.nullable(v.lazy(() => PaginationSortOrder))),
})

export const MilestoneSort: v.GenericSchema<unknown, T.MilestoneSort> = v.looseObject({
  nulls: v.optional(v.nullable(v.lazy(() => PaginationNulls))),
  order: v.optional(v.nullable(v.lazy(() => PaginationSortOrder))),
})

export const Mutation: v.GenericSchema<unknown, T.Mutation> = v.looseObject({
  organizationUpdate: v.optional(v.lazy(() => OrganizationPayload)),
  organizationDeleteChallenge: v.optional(v.lazy(() => OrganizationDeletePayload)),
  organizationDelete: v.optional(v.lazy(() => OrganizationDeletePayload)),
  organizationCancelDelete: v.optional(v.lazy(() => OrganizationCancelDeletePayload)),
  organizationStartTrialForPlan: v.optional(v.lazy(() => OrganizationStartTrialPayload)),
  organizationStartTrial: v.optional(v.lazy(() => OrganizationStartTrialPayload)),
  agentActivityCreate: v.optional(v.lazy(() => AgentActivityPayload)),
  agentSessionCreateOnComment: v.optional(v.lazy(() => AgentSessionPayload)),
  agentSessionCreateOnIssue: v.optional(v.lazy(() => AgentSessionPayload)),
  agentSessionUpdateExternalUrl: v.optional(v.lazy(() => AgentSessionPayload)),
  agentSessionUpdate: v.optional(v.lazy(() => AgentSessionPayload)),
  agentSkillCreate: v.optional(v.lazy(() => AgentSkillPayload)),
  agentSkillUpdate: v.optional(v.lazy(() => AgentSkillPayload)),
  agentSkillDelete: v.optional(v.lazy(() => DeletePayload)),
  attachmentCreate: v.optional(v.lazy(() => AttachmentPayload)),
  attachmentUpdate: v.optional(v.lazy(() => AttachmentPayload)),
  attachmentLinkURL: v.optional(v.lazy(() => AttachmentPayload)),
  attachmentLinkGitLabMR: v.optional(v.lazy(() => AttachmentPayload)),
  attachmentLinkGitHubIssue: v.optional(v.lazy(() => AttachmentPayload)),
  attachmentLinkGitHubPR: v.optional(v.lazy(() => AttachmentPayload)),
  attachmentLinkZendesk: v.optional(v.lazy(() => AttachmentPayload)),
  attachmentLinkDiscord: v.optional(v.lazy(() => AttachmentPayload)),
  attachmentSyncToSlack: v.optional(v.lazy(() => AttachmentPayload)),
  attachmentLinkSlack: v.optional(v.lazy(() => AttachmentPayload)),
  attachmentLinkFront: v.optional(v.lazy(() => FrontAttachmentPayload)),
  attachmentLinkIntercom: v.optional(v.lazy(() => AttachmentPayload)),
  attachmentLinkJiraIssue: v.optional(v.lazy(() => AttachmentPayload)),
  attachmentLinkSalesforce: v.optional(v.lazy(() => AttachmentPayload)),
  attachmentDelete: v.optional(v.lazy(() => DeletePayload)),
  emailUserAccountAuthChallenge: v.optional(v.lazy(() => EmailUserAccountAuthChallengeResponse)),
  emailTokenUserAccountAuth: v.optional(v.lazy(() => AuthResolverResponse)),
  samlTokenUserAccountAuth: v.optional(v.lazy(() => AuthResolverResponse)),
  googleUserAccountAuth: v.optional(v.lazy(() => AuthResolverResponse)),
  logout: v.optional(v.lazy(() => LogoutResponse)),
  logoutSession: v.optional(v.lazy(() => LogoutResponse)),
  logoutAllSessions: v.optional(v.lazy(() => LogoutResponse)),
  logoutOtherSessions: v.optional(v.lazy(() => LogoutResponse)),
  commentCreate: v.optional(v.lazy(() => CommentPayload)),
  commentUpdate: v.optional(v.lazy(() => CommentPayload)),
  commentDelete: v.optional(v.lazy(() => DeletePayload)),
  commentResolve: v.optional(v.lazy(() => CommentPayload)),
  commentUnresolve: v.optional(v.lazy(() => CommentPayload)),
  contactCreate: v.optional(v.lazy(() => ContactPayload)),
  projectCreate: v.optional(v.lazy(() => ProjectPayload)),
  projectUpdate: v.optional(v.lazy(() => ProjectPayload)),
  projectDelete: v.optional(v.lazy(() => ProjectArchivePayload)),
  projectArchive: v.optional(v.lazy(() => ProjectArchivePayload)),
  projectUnarchive: v.optional(v.lazy(() => ProjectArchivePayload)),
  projectAddLabel: v.optional(v.lazy(() => ProjectPayload)),
  projectRemoveLabel: v.optional(v.lazy(() => ProjectPayload)),
  projectExternalSyncDisable: v.optional(v.lazy(() => ProjectPayload)),
  customViewCreate: v.optional(v.lazy(() => CustomViewPayload)),
  customViewUpdate: v.optional(v.lazy(() => CustomViewPayload)),
  customViewDelete: v.optional(v.lazy(() => DeletePayload)),
  customerNeedCreate: v.optional(v.lazy(() => CustomerNeedPayload)),
  customerNeedCreateFromAttachment: v.optional(v.lazy(() => CustomerNeedPayload)),
  customerNeedUpdate: v.optional(v.lazy(() => CustomerNeedUpdatePayload)),
  customerNeedDelete: v.optional(v.lazy(() => DeletePayload)),
  customerNeedArchive: v.optional(v.lazy(() => CustomerNeedArchivePayload)),
  customerNeedUnarchive: v.optional(v.lazy(() => CustomerNeedArchivePayload)),
  customerCreate: v.optional(v.lazy(() => CustomerPayload)),
  customerUpdate: v.optional(v.lazy(() => CustomerPayload)),
  customerDelete: v.optional(v.lazy(() => DeletePayload)),
  customerMerge: v.optional(v.lazy(() => CustomerPayload)),
  customerUpsert: v.optional(v.lazy(() => CustomerPayload)),
  customerUnsync: v.optional(v.lazy(() => CustomerPayload)),
  customerStatusCreate: v.optional(v.lazy(() => CustomerStatusPayload)),
  customerStatusUpdate: v.optional(v.lazy(() => CustomerStatusPayload)),
  customerStatusDelete: v.optional(v.lazy(() => DeletePayload)),
  customerTierCreate: v.optional(v.lazy(() => CustomerTierPayload)),
  customerTierUpdate: v.optional(v.lazy(() => CustomerTierPayload)),
  customerTierDelete: v.optional(v.lazy(() => DeletePayload)),
  cycleCreate: v.optional(v.lazy(() => CyclePayload)),
  cycleUpdate: v.optional(v.lazy(() => CyclePayload)),
  cycleArchive: v.optional(v.lazy(() => CycleArchivePayload)),
  cycleShiftAll: v.optional(v.lazy(() => CyclePayload)),
  cycleStartUpcomingCycleToday: v.optional(v.lazy(() => CyclePayload)),
  documentCreate: v.optional(v.lazy(() => DocumentPayload)),
  documentUpdate: v.optional(v.lazy(() => DocumentPayload)),
  documentUpdateWorkspaceAccess: v.optional(v.lazy(() => DocumentPayload)),
  documentDelete: v.optional(v.lazy(() => DocumentArchivePayload)),
  documentUnarchive: v.optional(v.lazy(() => DocumentArchivePayload)),
  emailIntakeAddressCreate: v.optional(v.lazy(() => EmailIntakeAddressPayload)),
  emailIntakeAddressRotate: v.optional(v.lazy(() => EmailIntakeAddressPayload)),
  emailIntakeAddressUpdate: v.optional(v.lazy(() => EmailIntakeAddressPayload)),
  emailIntakeAddressRefreshSesDomainStatus: v.optional(v.lazy(() => EmailIntakeAddressRefreshSesDomainStatusPayload)),
  emailIntakeAddressDelete: v.optional(v.lazy(() => DeletePayload)),
  emailUnsubscribe: v.optional(v.lazy(() => EmailUnsubscribePayload)),
  emojiCreate: v.optional(v.lazy(() => EmojiPayload)),
  emojiDelete: v.optional(v.lazy(() => DeletePayload)),
  entityExternalLinkCreate: v.optional(v.lazy(() => EntityExternalLinkPayload)),
  entityExternalLinkUpdate: v.optional(v.lazy(() => EntityExternalLinkPayload)),
  entityExternalLinkDelete: v.optional(v.lazy(() => DeletePayload)),
  trackAnonymousEvent: v.optional(v.lazy(() => EventTrackingPayload)),
  favoriteCreate: v.optional(v.lazy(() => FavoritePayload)),
  favoriteUpdate: v.optional(v.lazy(() => FavoritePayload)),
  favoriteDelete: v.optional(v.lazy(() => DeletePayload)),
  fileUpload: v.optional(v.lazy(() => UploadPayload)),
  importFileUpload: v.optional(v.lazy(() => UploadPayload)),
  imageUploadFromUrl: v.optional(v.lazy(() => ImageUploadFromUrlPayload)),
  fileUploadDangerouslyDelete: v.optional(v.lazy(() => FileUploadDeletePayload)),
  gitAutomationStateCreate: v.optional(v.lazy(() => GitAutomationStatePayload)),
  gitAutomationStateUpdate: v.optional(v.lazy(() => GitAutomationStatePayload)),
  gitAutomationStateDelete: v.optional(v.lazy(() => DeletePayload)),
  gitAutomationTargetBranchCreate: v.optional(v.lazy(() => GitAutomationTargetBranchPayload)),
  gitAutomationTargetBranchUpdate: v.optional(v.lazy(() => GitAutomationTargetBranchPayload)),
  gitAutomationTargetBranchDelete: v.optional(v.lazy(() => DeletePayload)),
  initiativeCreate: v.optional(v.lazy(() => InitiativePayload)),
  initiativeUpdate: v.optional(v.lazy(() => InitiativePayload)),
  initiativeArchive: v.optional(v.lazy(() => InitiativeArchivePayload)),
  initiativeUnarchive: v.optional(v.lazy(() => InitiativeArchivePayload)),
  initiativeDelete: v.optional(v.lazy(() => DeletePayload)),
  initiativeAddLabel: v.optional(v.lazy(() => InitiativePayload)),
  initiativeRemoveLabel: v.optional(v.lazy(() => InitiativePayload)),
  initiativeLabelCreate: v.optional(v.lazy(() => InitiativeLabelPayload)),
  initiativeLabelUpdate: v.optional(v.lazy(() => InitiativeLabelPayload)),
  initiativeLabelDelete: v.optional(v.lazy(() => DeletePayload)),
  initiativeLabelRetire: v.optional(v.lazy(() => InitiativeLabelPayload)),
  initiativeLabelRestore: v.optional(v.lazy(() => InitiativeLabelPayload)),
  initiativeRelationCreate: v.optional(v.lazy(() => InitiativeRelationPayload)),
  initiativeRelationUpdate: v.optional(v.lazy(() => InitiativeRelationPayload)),
  initiativeRelationDelete: v.optional(v.lazy(() => DeletePayload)),
  initiativeToProjectCreate: v.optional(v.lazy(() => InitiativeToProjectPayload)),
  initiativeToProjectUpdate: v.optional(v.lazy(() => InitiativeToProjectPayload)),
  initiativeToProjectDelete: v.optional(v.lazy(() => DeletePayload)),
  initiativeUpdateCreate: v.optional(v.lazy(() => InitiativeUpdatePayload)),
  initiativeUpdateUpdate: v.optional(v.lazy(() => InitiativeUpdatePayload)),
  initiativeUpdateArchive: v.optional(v.lazy(() => InitiativeUpdateArchivePayload)),
  createInitiativeUpdateReminder: v.optional(v.lazy(() => InitiativeUpdateReminderPayload)),
  initiativeUpdateUnarchive: v.optional(v.lazy(() => InitiativeUpdateArchivePayload)),
  integrationRequest: v.optional(v.lazy(() => IntegrationRequestPayload)),
  integrationGithubCommitCreate: v.optional(v.lazy(() => GitHubCommitIntegrationPayload)),
  integrationGithubConnect: v.optional(v.lazy(() => IntegrationPayload)),
  integrationGithubRemoveCodeAccess: v.optional(v.lazy(() => IntegrationGithubRemoveCodeAccessPayload)),
  integrationGithubImportConnect: v.optional(v.lazy(() => IntegrationPayload)),
  integrationGithubImportRefresh: v.optional(v.lazy(() => IntegrationPayload)),
  integrationGitHubEnterpriseServerConnect: v.optional(v.lazy(() => GitHubEnterpriseServerPayload)),
  integrationGitlabConnect: v.optional(v.lazy(() => GitLabIntegrationCreatePayload)),
  integrationGitlabUpdateToken: v.optional(v.lazy(() => IntegrationPayload)),
  integrationGitlabUpdateRotationSettings: v.optional(v.lazy(() => IntegrationPayload)),
  integrationGitlabRotate: v.optional(v.lazy(() => IntegrationPayload)),
  integrationGitlabTestConnection: v.optional(v.lazy(() => GitLabTestConnectionPayload)),
  airbyteIntegrationConnect: v.optional(v.lazy(() => IntegrationPayload)),
  integrationJiraPersonal: v.optional(v.lazy(() => IntegrationPayload)),
  integrationGitHubPersonal: v.optional(v.lazy(() => IntegrationPayload)),
  integrationIntercom: v.optional(v.lazy(() => IntegrationPayload)),
  integrationIntercomDelete: v.optional(v.lazy(() => IntegrationPayload)),
  integrationIntercomSettingsUpdate: v.optional(v.lazy(() => IntegrationPayload)),
  integrationDiscord: v.optional(v.lazy(() => IntegrationPayload)),
  integrationSlack: v.optional(v.lazy(() => IntegrationPayload)),
  integrationSlackAsks: v.optional(v.lazy(() => IntegrationPayload)),
  integrationSlackOrAsksUpdateSlackTeamName: v.optional(v.lazy(() => IntegrationSlackWorkspaceNamePayload)),
  integrationSlackPersonal: v.optional(v.lazy(() => IntegrationPayload)),
  integrationAsksConnectChannel: v.optional(v.lazy(() => AsksChannelConnectPayload)),
  integrationSlackPost: v.optional(v.lazy(() => SlackChannelConnectPayload)),
  integrationSlackProjectPost: v.optional(v.lazy(() => SlackChannelConnectPayload)),
  integrationSlackCustomViewNotifications: v.optional(v.lazy(() => SlackChannelConnectPayload)),
  integrationSlackCustomerChannelLink: v.optional(v.lazy(() => SuccessPayload)),
  integrationSlackOrgProjectUpdatesPost: v.optional(v.lazy(() => SlackChannelConnectPayload)),
  integrationSlackImportEmojis: v.optional(v.lazy(() => IntegrationPayload)),
  integrationFigma: v.optional(v.lazy(() => IntegrationPayload)),
  integrationGong: v.optional(v.lazy(() => IntegrationPayload)),
  integrationMicrosoftTeams: v.optional(v.lazy(() => IntegrationPayload)),
  integrationMicrosoftPersonalConnect: v.optional(v.lazy(() => IntegrationPayload)),
  integrationGoogleSheets: v.optional(v.lazy(() => IntegrationPayload)),
  refreshGoogleSheetsData: v.optional(v.lazy(() => IntegrationPayload)),
  integrationSentryConnect: v.optional(v.lazy(() => IntegrationPayload)),
  integrationFront: v.optional(v.lazy(() => IntegrationPayload)),
  integrationZendesk: v.optional(v.lazy(() => IntegrationPayload)),
  integrationLoom: v.optional(v.lazy(() => IntegrationPayload)),
  integrationSalesforce: v.optional(v.lazy(() => IntegrationPayload)),
  integrationDelete: v.optional(v.lazy(() => DeletePayload)),
  integrationArchive: v.optional(v.lazy(() => DeletePayload)),
  integrationTemplateCreate: v.optional(v.lazy(() => IntegrationTemplatePayload)),
  integrationTemplateDelete: v.optional(v.lazy(() => DeletePayload)),
  integrationsSettingsCreate: v.optional(v.lazy(() => IntegrationsSettingsPayload)),
  integrationsSettingsUpdate: v.optional(v.lazy(() => IntegrationsSettingsPayload)),
  issueImportCreateGithub: v.optional(v.lazy(() => IssueImportPayload)),
  issueImportCreateJira: v.optional(v.lazy(() => IssueImportPayload)),
  issueImportCreateCSVJira: v.optional(v.lazy(() => IssueImportPayload)),
  issueImportCreateClubhouse: v.optional(v.lazy(() => IssueImportPayload)),
  issueImportCreateAsana: v.optional(v.lazy(() => IssueImportPayload)),
  issueImportDelete: v.optional(v.lazy(() => IssueImportDeletePayload)),
  issueImportProcess: v.optional(v.lazy(() => IssueImportPayload)),
  issueImportUpdate: v.optional(v.lazy(() => IssueImportPayload)),
  issueLabelCreate: v.optional(v.lazy(() => IssueLabelPayload)),
  issueLabelUpdate: v.optional(v.lazy(() => IssueLabelPayload)),
  issueLabelDelete: v.optional(v.lazy(() => DeletePayload)),
  issueLabelRetire: v.optional(v.lazy(() => IssueLabelPayload)),
  issueLabelRestore: v.optional(v.lazy(() => IssueLabelPayload)),
  issueRelationCreate: v.optional(v.lazy(() => IssueRelationPayload)),
  issueRelationUpdate: v.optional(v.lazy(() => IssueRelationPayload)),
  issueRelationDelete: v.optional(v.lazy(() => DeletePayload)),
  issueCreate: v.optional(v.lazy(() => IssuePayload)),
  issueBatchCreate: v.optional(v.lazy(() => IssueBatchPayload)),
  issueUpdate: v.optional(v.lazy(() => IssuePayload)),
  issueBatchUpdate: v.optional(v.lazy(() => IssueBatchPayload)),
  issueArchive: v.optional(v.lazy(() => IssueArchivePayload)),
  issueUnarchive: v.optional(v.lazy(() => IssueArchivePayload)),
  issueDelete: v.optional(v.lazy(() => IssueArchivePayload)),
  issueAddLabel: v.optional(v.lazy(() => IssuePayload)),
  issueRemoveLabel: v.optional(v.lazy(() => IssuePayload)),
  issueShare: v.optional(v.lazy(() => IssuePayload)),
  issueUnshare: v.optional(v.lazy(() => IssuePayload)),
  issueReminder: v.optional(v.lazy(() => IssuePayload)),
  issueSubscribe: v.optional(v.lazy(() => IssuePayload)),
  issueUnsubscribe: v.optional(v.lazy(() => IssuePayload)),
  issueExternalSyncDisable: v.optional(v.lazy(() => IssuePayload)),
  issueToReleaseCreate: v.optional(v.lazy(() => IssueToReleasePayload)),
  issueToReleaseDeleteByIssueAndRelease: v.optional(v.lazy(() => DeletePayload)),
  issueToReleaseDelete: v.optional(v.lazy(() => DeletePayload)),
  jiraProjectBatchMigrate: v.optional(v.lazy(() => JiraProjectBatchMigratePayload)),
  notificationUpdate: v.optional(v.lazy(() => NotificationPayload)),
  inboxNotificationUpdate: v.optional(v.lazy(() => InboxNotificationUpdatePayload)),
  notificationMarkReadAll: v.optional(v.lazy(() => NotificationBatchActionPayload)),
  notificationMarkUnreadAll: v.optional(v.lazy(() => NotificationBatchActionPayload)),
  notificationSnoozeAll: v.optional(v.lazy(() => NotificationBatchActionPayload)),
  notificationUnsnoozeAll: v.optional(v.lazy(() => NotificationBatchActionPayload)),
  notificationArchive: v.optional(v.lazy(() => NotificationArchivePayload)),
  notificationArchiveAll: v.optional(v.lazy(() => NotificationBatchActionPayload)),
  notificationUnarchive: v.optional(v.lazy(() => NotificationArchivePayload)),
  notificationSubscriptionCreate: v.optional(v.lazy(() => NotificationSubscriptionPayload)),
  notificationSubscriptionUpdate: v.optional(v.lazy(() => NotificationSubscriptionPayload)),
  notificationSubscriptionDelete: v.optional(v.lazy(() => DeletePayload)),
  oauthApplicationCreate: v.optional(v.lazy(() => OAuthApplicationCreatePayload)),
  oauthApplicationUpdate: v.optional(v.lazy(() => OAuthApplicationPayload)),
  oauthApplicationArchive: v.optional(v.lazy(() => OAuthApplicationArchivePayload)),
  oauthApplicationRotateSecret: v.optional(v.lazy(() => OAuthApplicationRotateSecretPayload)),
  oauthApplicationRotateWebhookSecret: v.optional(v.lazy(() => OAuthApplicationRotateWebhookSecretPayload)),
  organizationDomainDelete: v.optional(v.lazy(() => DeletePayload)),
  organizationInviteCreate: v.optional(v.lazy(() => OrganizationInvitePayload)),
  organizationInviteUpdate: v.optional(v.lazy(() => OrganizationInvitePayload)),
  resendOrganizationInvite: v.optional(v.lazy(() => DeletePayload)),
  resendOrganizationInviteByEmail: v.optional(v.lazy(() => DeletePayload)),
  organizationInviteDelete: v.optional(v.lazy(() => DeletePayload)),
  projectLabelCreate: v.optional(v.lazy(() => ProjectLabelPayload)),
  projectLabelUpdate: v.optional(v.lazy(() => ProjectLabelPayload)),
  projectLabelDelete: v.optional(v.lazy(() => DeletePayload)),
  projectLabelRetire: v.optional(v.lazy(() => ProjectLabelPayload)),
  projectLabelRestore: v.optional(v.lazy(() => ProjectLabelPayload)),
  projectMilestoneCreate: v.optional(v.lazy(() => ProjectMilestonePayload)),
  projectMilestoneUpdate: v.optional(v.lazy(() => ProjectMilestonePayload)),
  projectMilestoneDelete: v.optional(v.lazy(() => DeletePayload)),
  projectMilestoneMove: v.optional(v.lazy(() => ProjectMilestoneMovePayload)),
  projectRelationCreate: v.optional(v.lazy(() => ProjectRelationPayload)),
  projectRelationUpdate: v.optional(v.lazy(() => ProjectRelationPayload)),
  projectRelationDelete: v.optional(v.lazy(() => DeletePayload)),
  projectStatusCreate: v.optional(v.lazy(() => ProjectStatusPayload)),
  projectStatusUpdate: v.optional(v.lazy(() => ProjectStatusPayload)),
  projectStatusArchive: v.optional(v.lazy(() => ProjectStatusArchivePayload)),
  projectStatusUnarchive: v.optional(v.lazy(() => ProjectStatusArchivePayload)),
  projectUpdateCreate: v.optional(v.lazy(() => ProjectUpdatePayload)),
  projectUpdateUpdate: v.optional(v.lazy(() => ProjectUpdatePayload)),
  projectUpdateArchive: v.optional(v.lazy(() => ProjectUpdateArchivePayload)),
  projectUpdateUnarchive: v.optional(v.lazy(() => ProjectUpdateArchivePayload)),
  projectUpdateDelete: v.optional(v.lazy(() => DeletePayload)),
  createProjectUpdateReminder: v.optional(v.lazy(() => ProjectUpdateReminderPayload)),
  pushSubscriptionCreate: v.optional(v.lazy(() => PushSubscriptionPayload)),
  pushSubscriptionDelete: v.optional(v.lazy(() => PushSubscriptionPayload)),
  reactionCreate: v.optional(v.lazy(() => ReactionPayload)),
  reactionDelete: v.optional(v.lazy(() => DeletePayload)),
  releaseNoteCreate: v.optional(v.lazy(() => ReleaseNotePayload)),
  releaseNoteUpdate: v.optional(v.lazy(() => ReleaseNotePayload)),
  releaseNoteDelete: v.optional(v.lazy(() => DeletePayload)),
  releasePipelineCreate: v.optional(v.lazy(() => ReleasePipelinePayload)),
  releasePipelineUpdate: v.optional(v.lazy(() => ReleasePipelinePayload)),
  releasePipelineArchive: v.optional(v.lazy(() => ReleasePipelineArchivePayload)),
  releasePipelineUnarchive: v.optional(v.lazy(() => ReleasePipelineArchivePayload)),
  releasePipelineDelete: v.optional(v.lazy(() => ReleasePipelineArchivePayload)),
  releaseSync: v.optional(v.lazy(() => ReleasePayload)),
  releaseCreate: v.optional(v.lazy(() => ReleasePayload)),
  releaseUpdate: v.optional(v.lazy(() => ReleasePayload)),
  releaseComplete: v.optional(v.lazy(() => ReleasePayload)),
  releaseUpdateByPipeline: v.optional(v.lazy(() => ReleasePayload)),
  releaseDelete: v.optional(v.lazy(() => ReleaseArchivePayload)),
  releaseArchive: v.optional(v.lazy(() => ReleaseArchivePayload)),
  releaseUnarchive: v.optional(v.lazy(() => ReleaseArchivePayload)),
  releaseSyncByAccessKey: v.optional(v.lazy(() => AccessKeyReleasePayload)),
  releaseCompleteByAccessKey: v.optional(v.lazy(() => AccessKeyReleasePayload)),
  releaseUpdateByPipelineByAccessKey: v.optional(v.lazy(() => AccessKeyReleasePayload)),
  releaseStageCreate: v.optional(v.lazy(() => ReleaseStagePayload)),
  releaseStageUpdate: v.optional(v.lazy(() => ReleaseStagePayload)),
  releaseStageArchive: v.optional(v.lazy(() => ReleaseStageArchivePayload)),
  releaseStageUnarchive: v.optional(v.lazy(() => ReleaseStageArchivePayload)),
  createCsvExportReport: v.optional(v.lazy(() => CreateCsvExportReportPayload)),
  roadmapCreate: v.optional(v.lazy(() => RoadmapPayload)),
  roadmapUpdate: v.optional(v.lazy(() => RoadmapPayload)),
  roadmapArchive: v.optional(v.lazy(() => RoadmapArchivePayload)),
  roadmapUnarchive: v.optional(v.lazy(() => RoadmapArchivePayload)),
  roadmapDelete: v.optional(v.lazy(() => DeletePayload)),
  roadmapToProjectCreate: v.optional(v.lazy(() => RoadmapToProjectPayload)),
  roadmapToProjectUpdate: v.optional(v.lazy(() => RoadmapToProjectPayload)),
  roadmapToProjectDelete: v.optional(v.lazy(() => DeletePayload)),
  teamKeyDelete: v.optional(v.lazy(() => DeletePayload)),
  teamMembershipCreate: v.optional(v.lazy(() => TeamMembershipPayload)),
  teamMembershipUpdate: v.optional(v.lazy(() => TeamMembershipPayload)),
  teamMembershipDelete: v.optional(v.lazy(() => DeletePayload)),
  teamCreate: v.optional(v.lazy(() => TeamPayload)),
  teamUpdate: v.optional(v.lazy(() => TeamPayload)),
  teamDelete: v.optional(v.lazy(() => DeletePayload)),
  teamUnarchive: v.optional(v.lazy(() => TeamArchivePayload)),
  teamCyclesDelete: v.optional(v.lazy(() => TeamPayload)),
  templateCreate: v.optional(v.lazy(() => TemplatePayload)),
  templateUpdate: v.optional(v.lazy(() => TemplatePayload)),
  templateDelete: v.optional(v.lazy(() => DeletePayload)),
  timeScheduleCreate: v.optional(v.lazy(() => TimeSchedulePayload)),
  timeScheduleUpdate: v.optional(v.lazy(() => TimeSchedulePayload)),
  timeScheduleUpsertExternal: v.optional(v.lazy(() => TimeSchedulePayload)),
  timeScheduleDelete: v.optional(v.lazy(() => DeletePayload)),
  timeScheduleRefreshIntegrationSchedule: v.optional(v.lazy(() => TimeSchedulePayload)),
  triageResponsibilityCreate: v.optional(v.lazy(() => TriageResponsibilityPayload)),
  triageResponsibilityUpdate: v.optional(v.lazy(() => TriageResponsibilityPayload)),
  triageResponsibilityDelete: v.optional(v.lazy(() => DeletePayload)),
  userUpdate: v.optional(v.lazy(() => UserPayload)),
  userDiscordConnect: v.optional(v.lazy(() => UserPayload)),
  userExternalUserDisconnect: v.optional(v.lazy(() => UserPayload)),
  userChangeRole: v.optional(v.lazy(() => UserAdminPayload)),
  userSuspend: v.optional(v.lazy(() => UserAdminPayload)),
  userRevokeAllSessions: v.optional(v.lazy(() => UserAdminPayload)),
  userRevokeSession: v.optional(v.lazy(() => UserAdminPayload)),
  userUnsuspend: v.optional(v.lazy(() => UserAdminPayload)),
  userUnlinkFromIdentityProvider: v.optional(v.lazy(() => UserAdminPayload)),
  userSettingsUpdate: v.optional(v.lazy(() => UserSettingsPayload)),
  userSettingsFlagsReset: v.optional(v.lazy(() => UserSettingsFlagsResetPayload)),
  userFlagUpdate: v.optional(v.lazy(() => UserSettingsFlagPayload)),
  notificationCategoryChannelSubscriptionUpdate: v.optional(v.lazy(() => UserSettingsPayload)),
  viewPreferencesCreate: v.optional(v.lazy(() => ViewPreferencesPayload)),
  viewPreferencesUpdate: v.optional(v.lazy(() => ViewPreferencesPayload)),
  viewPreferencesDelete: v.optional(v.lazy(() => DeletePayload)),
  webhookCreate: v.optional(v.lazy(() => WebhookPayload)),
  webhookUpdate: v.optional(v.lazy(() => WebhookPayload)),
  webhookDelete: v.optional(v.lazy(() => DeletePayload)),
  webhookRotateSecret: v.optional(v.lazy(() => WebhookRotateSecretPayload)),
  workflowStateCreate: v.optional(v.lazy(() => WorkflowStatePayload)),
  workflowStateUpdate: v.optional(v.lazy(() => WorkflowStatePayload)),
  workflowStateArchive: v.optional(v.lazy(() => WorkflowStateArchivePayload)),
})

export const NameSort: v.GenericSchema<unknown, T.NameSort> = v.looseObject({
  nulls: v.optional(v.nullable(v.lazy(() => PaginationNulls))),
  order: v.optional(v.nullable(v.lazy(() => PaginationSortOrder))),
})

export const Node: v.GenericSchema<unknown, T.Node> = v.looseObject({
  id: v.optional(v.string()),
})

export const Notification: v.GenericSchema<unknown, T.Notification> = v.looseObject({
  id: v.optional(v.string()),
  createdAt: v.optional(v.string()),
  updatedAt: v.optional(v.string()),
  archivedAt: v.optional(v.nullable(v.string())),
  type: v.optional(v.string()),
  actor: v.optional(v.nullable(v.lazy(() => User))),
  externalUserActor: v.optional(v.nullable(v.lazy(() => ExternalUser))),
  user: v.optional(v.lazy(() => User)),
  readAt: v.optional(v.nullable(v.string())),
  emailedAt: v.optional(v.nullable(v.string())),
  snoozedUntilAt: v.optional(v.nullable(v.string())),
  unsnoozedAt: v.optional(v.nullable(v.string())),
  category: v.optional(v.lazy(() => NotificationCategory)),
  botActor: v.optional(v.nullable(v.lazy(() => ActorBot))),
})

export const NotificationArchivePayload: v.GenericSchema<unknown, T.NotificationArchivePayload> = v.looseObject({
  lastSyncId: v.optional(number()),
  success: v.optional(v.boolean()),
  entity: v.optional(v.nullable(v.lazy(() => Notification))),
})

export const NotificationBatchActionPayload: v.GenericSchema<unknown, T.NotificationBatchActionPayload> = v.looseObject(
  {
    lastSyncId: v.optional(number()),
    notifications: v.optional(v.array(v.lazy(() => Notification))),
    success: v.optional(v.boolean()),
  },
)

export const NotificationCategory: v.GenericSchema<unknown, T.NotificationCategory> = v.picklist([
  "assignments",
  "statusChanges",
  "commentsAndReplies",
  "mentions",
  "reactions",
  "subscriptions",
  "documentChanges",
  "postsAndUpdates",
  "reminders",
  "reviews",
  "loops",
  "appsAndIntegrations",
  "triage",
  "customers",
  "feed",
  "billing",
  "system",
])

export const NotificationCategoryPreferences: v.GenericSchema<unknown, T.NotificationCategoryPreferences> =
  v.looseObject({
    assignments: v.optional(v.lazy(() => NotificationChannelPreferences)),
    statusChanges: v.optional(v.lazy(() => NotificationChannelPreferences)),
    commentsAndReplies: v.optional(v.lazy(() => NotificationChannelPreferences)),
    mentions: v.optional(v.lazy(() => NotificationChannelPreferences)),
    reactions: v.optional(v.lazy(() => NotificationChannelPreferences)),
    subscriptions: v.optional(v.lazy(() => NotificationChannelPreferences)),
    documentChanges: v.optional(v.lazy(() => NotificationChannelPreferences)),
    postsAndUpdates: v.optional(v.lazy(() => NotificationChannelPreferences)),
    reminders: v.optional(v.lazy(() => NotificationChannelPreferences)),
    reviews: v.optional(v.lazy(() => NotificationChannelPreferences)),
    loops: v.optional(v.lazy(() => NotificationChannelPreferences)),
    appsAndIntegrations: v.optional(v.lazy(() => NotificationChannelPreferences)),
    system: v.optional(v.lazy(() => NotificationChannelPreferences)),
    triage: v.optional(v.lazy(() => NotificationChannelPreferences)),
    customers: v.optional(v.lazy(() => NotificationChannelPreferences)),
    feed: v.optional(v.lazy(() => NotificationChannelPreferences)),
    billing: v.optional(v.lazy(() => NotificationChannelPreferences)),
  })

export const NotificationCategoryPreferencesInput: v.GenericSchema<unknown, T.NotificationCategoryPreferencesInput> =
  v.looseObject({
    assignments: v.optional(v.nullable(v.lazy(() => PartialNotificationChannelPreferencesInput))),
    statusChanges: v.optional(v.nullable(v.lazy(() => PartialNotificationChannelPreferencesInput))),
    commentsAndReplies: v.optional(v.nullable(v.lazy(() => PartialNotificationChannelPreferencesInput))),
    mentions: v.optional(v.nullable(v.lazy(() => PartialNotificationChannelPreferencesInput))),
    reactions: v.optional(v.nullable(v.lazy(() => PartialNotificationChannelPreferencesInput))),
    subscriptions: v.optional(v.nullable(v.lazy(() => PartialNotificationChannelPreferencesInput))),
    documentChanges: v.optional(v.nullable(v.lazy(() => PartialNotificationChannelPreferencesInput))),
    postsAndUpdates: v.optional(v.nullable(v.lazy(() => PartialNotificationChannelPreferencesInput))),
    reminders: v.optional(v.nullable(v.lazy(() => PartialNotificationChannelPreferencesInput))),
    reviews: v.optional(v.nullable(v.lazy(() => PartialNotificationChannelPreferencesInput))),
    loops: v.optional(v.nullable(v.lazy(() => PartialNotificationChannelPreferencesInput))),
    appsAndIntegrations: v.optional(v.nullable(v.lazy(() => PartialNotificationChannelPreferencesInput))),
    triage: v.optional(v.nullable(v.lazy(() => PartialNotificationChannelPreferencesInput))),
    customers: v.optional(v.nullable(v.lazy(() => PartialNotificationChannelPreferencesInput))),
    feed: v.optional(v.nullable(v.lazy(() => PartialNotificationChannelPreferencesInput))),
    billing: v.optional(v.nullable(v.lazy(() => PartialNotificationChannelPreferencesInput))),
  })

export const NotificationChannel: v.GenericSchema<unknown, T.NotificationChannel> = v.picklist([
  "desktop",
  "mobile",
  "email",
  "slack",
])

export const NotificationChannelPreferences: v.GenericSchema<unknown, T.NotificationChannelPreferences> = v.looseObject(
  {
    mobile: v.optional(v.boolean()),
    desktop: v.optional(v.boolean()),
    email: v.optional(v.boolean()),
    slack: v.optional(v.boolean()),
  },
)

export const NotificationConnection: v.GenericSchema<unknown, T.NotificationConnection> = v.looseObject({
  edges: v.optional(v.array(v.lazy(() => NotificationEdge))),
  nodes: v.optional(v.array(v.lazy(() => Notification))),
  pageInfo: v.optional(v.lazy(() => PageInfo)),
})

export const NotificationDeliveryPreferences: v.GenericSchema<unknown, T.NotificationDeliveryPreferences> =
  v.looseObject({
    mobile: v.optional(v.nullable(v.lazy(() => NotificationDeliveryPreferencesChannel))),
  })

export const NotificationDeliveryPreferencesChannel: v.GenericSchema<
  unknown,
  T.NotificationDeliveryPreferencesChannel
> = v.looseObject({
  notificationsDisabled: v.optional(v.nullable(v.boolean())),
  schedule: v.optional(v.nullable(v.lazy(() => NotificationDeliveryPreferencesSchedule))),
})

export const NotificationDeliveryPreferencesChannelInput: v.GenericSchema<
  unknown,
  T.NotificationDeliveryPreferencesChannelInput
> = v.looseObject({
  schedule: v.optional(v.nullable(v.lazy(() => NotificationDeliveryPreferencesScheduleInput))),
})

export const NotificationDeliveryPreferencesDay: v.GenericSchema<unknown, T.NotificationDeliveryPreferencesDay> =
  v.looseObject({
    start: v.optional(v.nullable(v.string())),
    end: v.optional(v.nullable(v.string())),
  })

export const NotificationDeliveryPreferencesDayInput: v.GenericSchema<
  unknown,
  T.NotificationDeliveryPreferencesDayInput
> = v.looseObject({
  start: v.optional(v.nullable(v.string())),
  end: v.optional(v.nullable(v.string())),
})

export const NotificationDeliveryPreferencesInput: v.GenericSchema<unknown, T.NotificationDeliveryPreferencesInput> =
  v.looseObject({
    mobile: v.optional(v.nullable(v.lazy(() => NotificationDeliveryPreferencesChannelInput))),
  })

export const NotificationDeliveryPreferencesSchedule: v.GenericSchema<
  unknown,
  T.NotificationDeliveryPreferencesSchedule
> = v.looseObject({
  disabled: v.optional(v.nullable(v.boolean())),
  sunday: v.optional(v.lazy(() => NotificationDeliveryPreferencesDay)),
  monday: v.optional(v.lazy(() => NotificationDeliveryPreferencesDay)),
  tuesday: v.optional(v.lazy(() => NotificationDeliveryPreferencesDay)),
  wednesday: v.optional(v.lazy(() => NotificationDeliveryPreferencesDay)),
  thursday: v.optional(v.lazy(() => NotificationDeliveryPreferencesDay)),
  friday: v.optional(v.lazy(() => NotificationDeliveryPreferencesDay)),
  saturday: v.optional(v.lazy(() => NotificationDeliveryPreferencesDay)),
})

export const NotificationDeliveryPreferencesScheduleInput: v.GenericSchema<
  unknown,
  T.NotificationDeliveryPreferencesScheduleInput
> = v.looseObject({
  disabled: v.optional(v.nullable(v.boolean())),
  sunday: v.lazy(() => NotificationDeliveryPreferencesDayInput),
  monday: v.lazy(() => NotificationDeliveryPreferencesDayInput),
  tuesday: v.lazy(() => NotificationDeliveryPreferencesDayInput),
  wednesday: v.lazy(() => NotificationDeliveryPreferencesDayInput),
  thursday: v.lazy(() => NotificationDeliveryPreferencesDayInput),
  friday: v.lazy(() => NotificationDeliveryPreferencesDayInput),
  saturday: v.lazy(() => NotificationDeliveryPreferencesDayInput),
})

export const NotificationEdge: v.GenericSchema<unknown, T.NotificationEdge> = v.looseObject({
  node: v.optional(v.lazy(() => Notification)),
  cursor: v.optional(v.string()),
})

export const NotificationEntityInput: v.GenericSchema<unknown, T.NotificationEntityInput> = v.looseObject({
  issueId: v.optional(v.nullable(v.string())),
  projectId: v.optional(v.nullable(v.string())),
  initiativeId: v.optional(v.nullable(v.string())),
  projectUpdateId: v.optional(v.nullable(v.string())),
  initiativeUpdateId: v.optional(v.nullable(v.string())),
  oauthClientApprovalId: v.optional(v.nullable(v.string())),
  id: v.optional(v.nullable(v.string())),
})

export const NotificationFilter: v.GenericSchema<unknown, T.NotificationFilter> = v.looseObject({
  id: v.optional(v.nullable(v.lazy(() => IDComparator))),
  createdAt: v.optional(v.nullable(v.lazy(() => DateComparator))),
  updatedAt: v.optional(v.nullable(v.lazy(() => DateComparator))),
  type: v.optional(v.nullable(v.lazy(() => StringComparator))),
  subscriptionType: v.optional(v.nullable(v.lazy(() => NotificationSubscriptionTypeComparator))),
  archivedAt: v.optional(v.nullable(v.lazy(() => DateComparator))),
  and: v.optional(v.nullable(v.array(v.lazy(() => NotificationFilter)))),
  or: v.optional(v.nullable(v.array(v.lazy(() => NotificationFilter)))),
})

export const NotificationPayload: v.GenericSchema<unknown, T.NotificationPayload> = v.looseObject({
  lastSyncId: v.optional(number()),
  notification: v.optional(v.lazy(() => Notification)),
  success: v.optional(v.boolean()),
})

export const NotificationSubscription: v.GenericSchema<unknown, T.NotificationSubscription> = v.looseObject({
  id: v.optional(v.string()),
  createdAt: v.optional(v.string()),
  updatedAt: v.optional(v.string()),
  archivedAt: v.optional(v.nullable(v.string())),
  subscriber: v.optional(v.lazy(() => User)),
  customer: v.optional(v.nullable(v.lazy(() => Customer))),
  customView: v.optional(v.nullable(v.lazy(() => CustomView))),
  cycle: v.optional(v.nullable(v.lazy(() => Cycle))),
  label: v.optional(v.nullable(v.lazy(() => IssueLabel))),
  project: v.optional(v.nullable(v.lazy(() => Project))),
  initiative: v.optional(v.nullable(v.lazy(() => Initiative))),
  team: v.optional(v.nullable(v.lazy(() => Team))),
  user: v.optional(v.nullable(v.lazy(() => User))),
  contextViewType: v.optional(v.nullable(v.lazy(() => ContextViewType))),
  userContextViewType: v.optional(v.nullable(v.lazy(() => UserContextViewType))),
  active: v.optional(v.boolean()),
  includeSubInitiativeUpdates: v.optional(v.boolean()),
})

export const NotificationSubscriptionConnection: v.GenericSchema<unknown, T.NotificationSubscriptionConnection> =
  v.looseObject({
    edges: v.optional(v.array(v.lazy(() => NotificationSubscriptionEdge))),
    nodes: v.optional(v.array(v.lazy(() => NotificationSubscription))),
    pageInfo: v.optional(v.lazy(() => PageInfo)),
  })

export const NotificationSubscriptionCreateInput: v.GenericSchema<unknown, T.NotificationSubscriptionCreateInput> =
  v.looseObject({
    id: v.optional(v.nullable(v.string())),
    customerId: v.optional(v.nullable(v.string())),
    customViewId: v.optional(v.nullable(v.string())),
    cycleId: v.optional(v.nullable(v.string())),
    initiativeId: v.optional(v.nullable(v.string())),
    labelId: v.optional(v.nullable(v.string())),
    projectId: v.optional(v.nullable(v.string())),
    teamId: v.optional(v.nullable(v.string())),
    userId: v.optional(v.nullable(v.string())),
    contextViewType: v.optional(v.nullable(v.lazy(() => ContextViewType))),
    userContextViewType: v.optional(v.nullable(v.lazy(() => UserContextViewType))),
    notificationSubscriptionTypes: v.optional(v.nullable(v.array(v.string()))),
    active: v.optional(v.nullable(v.boolean())),
    includeSubInitiativeUpdates: v.optional(v.nullable(v.boolean())),
  })

export const NotificationSubscriptionEdge: v.GenericSchema<unknown, T.NotificationSubscriptionEdge> = v.looseObject({
  node: v.optional(v.lazy(() => NotificationSubscription)),
  cursor: v.optional(v.string()),
})

export const NotificationSubscriptionPayload: v.GenericSchema<unknown, T.NotificationSubscriptionPayload> =
  v.looseObject({
    lastSyncId: v.optional(number()),
    notificationSubscription: v.optional(v.lazy(() => NotificationSubscription)),
    success: v.optional(v.boolean()),
  })

export const NotificationSubscriptionType: v.GenericSchema<unknown, T.NotificationSubscriptionType> = v.picklist([
  "customer",
  "customView",
  "cycle",
  "label",
  "issue",
  "oauthClientApproval",
  "project",
  "initiative",
  "document",
  "pullRequest",
  "team",
  "user",
  "workflowDefinition",
])

export const NotificationSubscriptionTypeComparator: v.GenericSchema<
  unknown,
  T.NotificationSubscriptionTypeComparator
> = v.looseObject({
  eq: v.optional(v.nullable(v.lazy(() => NotificationSubscriptionType))),
  neq: v.optional(v.nullable(v.lazy(() => NotificationSubscriptionType))),
  in: v.optional(v.nullable(v.array(v.lazy(() => NotificationSubscriptionType)))),
  nin: v.optional(v.nullable(v.array(v.lazy(() => NotificationSubscriptionType)))),
})

export const NotificationSubscriptionUpdateInput: v.GenericSchema<unknown, T.NotificationSubscriptionUpdateInput> =
  v.looseObject({
    includeSubInitiativeUpdates: v.optional(v.nullable(v.boolean())),
    notificationSubscriptionTypes: v.optional(v.nullable(v.array(v.string()))),
    active: v.optional(v.nullable(v.boolean())),
  })

export const NotificationUpdateInput: v.GenericSchema<unknown, T.NotificationUpdateInput> = v.looseObject({
  readAt: v.optional(v.nullable(v.string())),
  snoozedUntilAt: v.optional(v.nullable(v.string())),
  projectUpdateId: v.optional(v.nullable(v.string())),
  initiativeUpdateId: v.optional(v.nullable(v.string())),
})

export const NullableCommentFilter: v.GenericSchema<unknown, T.NullableCommentFilter> = v.looseObject({
  id: v.optional(v.nullable(v.lazy(() => IDComparator))),
  createdAt: v.optional(v.nullable(v.lazy(() => DateComparator))),
  updatedAt: v.optional(v.nullable(v.lazy(() => DateComparator))),
  body: v.optional(v.nullable(v.lazy(() => StringComparator))),
  user: v.optional(v.nullable(v.lazy(() => UserFilter))),
  issue: v.optional(v.nullable(v.lazy(() => NullableIssueFilter))),
  projectUpdate: v.optional(v.nullable(v.lazy(() => NullableProjectUpdateFilter))),
  initiativeUpdate: v.optional(v.nullable(v.lazy(() => NullableInitiativeUpdateFilter))),
  parent: v.optional(v.nullable(v.lazy(() => NullableCommentFilter))),
  documentContent: v.optional(v.nullable(v.lazy(() => NullableDocumentContentFilter))),
  project: v.optional(v.nullable(v.lazy(() => NullableProjectFilter))),
  initiative: v.optional(v.nullable(v.lazy(() => NullableInitiativeFilter))),
  reactions: v.optional(v.nullable(v.lazy(() => ReactionCollectionFilter))),
  needs: v.optional(v.nullable(v.lazy(() => CustomerNeedCollectionFilter))),
  null: v.optional(v.nullable(v.boolean())),
  and: v.optional(v.nullable(v.array(v.lazy(() => NullableCommentFilter)))),
  or: v.optional(v.nullable(v.array(v.lazy(() => NullableCommentFilter)))),
})

export const NullableCustomerFilter: v.GenericSchema<unknown, T.NullableCustomerFilter> = v.looseObject({
  id: v.optional(v.nullable(v.lazy(() => IDComparator))),
  createdAt: v.optional(v.nullable(v.lazy(() => DateComparator))),
  updatedAt: v.optional(v.nullable(v.lazy(() => DateComparator))),
  name: v.optional(v.nullable(v.lazy(() => StringComparator))),
  slackChannelId: v.optional(v.nullable(v.lazy(() => StringComparator))),
  domains: v.optional(v.nullable(v.lazy(() => StringArrayComparator))),
  externalIds: v.optional(v.nullable(v.lazy(() => StringArrayComparator))),
  owner: v.optional(v.nullable(v.lazy(() => NullableUserFilter))),
  needs: v.optional(v.nullable(v.lazy(() => CustomerNeedCollectionFilter))),
  revenue: v.optional(v.nullable(v.lazy(() => NumberComparator))),
  size: v.optional(v.nullable(v.lazy(() => NumberComparator))),
  status: v.optional(v.nullable(v.lazy(() => CustomerStatusFilter))),
  tier: v.optional(v.nullable(v.lazy(() => CustomerTierFilter))),
  null: v.optional(v.nullable(v.boolean())),
  and: v.optional(v.nullable(v.array(v.lazy(() => NullableCustomerFilter)))),
  or: v.optional(v.nullable(v.array(v.lazy(() => NullableCustomerFilter)))),
})

export const NullableCycleFilter: v.GenericSchema<unknown, T.NullableCycleFilter> = v.looseObject({
  id: v.optional(v.nullable(v.lazy(() => IDComparator))),
  createdAt: v.optional(v.nullable(v.lazy(() => DateComparator))),
  updatedAt: v.optional(v.nullable(v.lazy(() => DateComparator))),
  number: v.optional(v.nullable(v.lazy(() => NumberComparator))),
  name: v.optional(v.nullable(v.lazy(() => StringComparator))),
  startsAt: v.optional(v.nullable(v.lazy(() => DateComparator))),
  endsAt: v.optional(v.nullable(v.lazy(() => DateComparator))),
  completedAt: v.optional(v.nullable(v.lazy(() => DateComparator))),
  isActive: v.optional(v.nullable(v.lazy(() => BooleanComparator))),
  isInCooldown: v.optional(v.nullable(v.lazy(() => BooleanComparator))),
  isNext: v.optional(v.nullable(v.lazy(() => BooleanComparator))),
  isPrevious: v.optional(v.nullable(v.lazy(() => BooleanComparator))),
  isFuture: v.optional(v.nullable(v.lazy(() => BooleanComparator))),
  isPast: v.optional(v.nullable(v.lazy(() => BooleanComparator))),
  team: v.optional(v.nullable(v.lazy(() => TeamFilter))),
  issues: v.optional(v.nullable(v.lazy(() => IssueCollectionFilter))),
  inheritedFromId: v.optional(v.nullable(v.lazy(() => IDComparator))),
  null: v.optional(v.nullable(v.boolean())),
  and: v.optional(v.nullable(v.array(v.lazy(() => NullableCycleFilter)))),
  or: v.optional(v.nullable(v.array(v.lazy(() => NullableCycleFilter)))),
})

export const NullableDateComparator: v.GenericSchema<unknown, T.NullableDateComparator> = v.looseObject({
  eq: v.optional(v.nullable(v.string())),
  neq: v.optional(v.nullable(v.string())),
  in: v.optional(v.nullable(v.array(v.string()))),
  nin: v.optional(v.nullable(v.array(v.string()))),
  null: v.optional(v.nullable(v.boolean())),
  lt: v.optional(v.nullable(v.string())),
  lte: v.optional(v.nullable(v.string())),
  gt: v.optional(v.nullable(v.string())),
  gte: v.optional(v.nullable(v.string())),
  today: v.optional(v.nullable(v.boolean())),
  timezone: v.optional(v.nullable(v.string())),
})

export const NullableDocumentContentFilter: v.GenericSchema<unknown, T.NullableDocumentContentFilter> = v.looseObject({
  id: v.optional(v.nullable(v.lazy(() => IDComparator))),
  createdAt: v.optional(v.nullable(v.lazy(() => DateComparator))),
  updatedAt: v.optional(v.nullable(v.lazy(() => DateComparator))),
  content: v.optional(v.nullable(v.lazy(() => NullableStringComparator))),
  project: v.optional(v.nullable(v.lazy(() => ProjectFilter))),
  initiative: v.optional(v.nullable(v.lazy(() => InitiativeFilter))),
  issue: v.optional(v.nullable(v.lazy(() => IssueFilter))),
  document: v.optional(v.nullable(v.lazy(() => DocumentFilter))),
  projectMilestone: v.optional(v.nullable(v.lazy(() => ProjectMilestoneFilter))),
  null: v.optional(v.nullable(v.boolean())),
  and: v.optional(v.nullable(v.array(v.lazy(() => NullableDocumentContentFilter)))),
  or: v.optional(v.nullable(v.array(v.lazy(() => NullableDocumentContentFilter)))),
})

export const NullableDocumentFilter: v.GenericSchema<unknown, T.NullableDocumentFilter> = v.looseObject({
  id: v.optional(v.nullable(v.lazy(() => IDComparator))),
  createdAt: v.optional(v.nullable(v.lazy(() => DateComparator))),
  updatedAt: v.optional(v.nullable(v.lazy(() => DateComparator))),
  title: v.optional(v.nullable(v.lazy(() => StringComparator))),
  searchableContent: v.optional(v.nullable(v.lazy(() => ContentComparator))),
  slugId: v.optional(v.nullable(v.lazy(() => StringComparator))),
  creator: v.optional(v.nullable(v.lazy(() => UserFilter))),
  owner: v.optional(v.nullable(v.lazy(() => NullableUserFilter))),
  project: v.optional(v.nullable(v.lazy(() => ProjectFilter))),
  issue: v.optional(v.nullable(v.lazy(() => IssueFilter))),
  initiative: v.optional(v.nullable(v.lazy(() => InitiativeFilter))),
  team: v.optional(v.nullable(v.lazy(() => NullableTeamFilter))),
  cycle: v.optional(v.nullable(v.lazy(() => CycleFilter))),
  release: v.optional(v.nullable(v.lazy(() => ReleaseFilter))),
  parentDocument: v.optional(v.nullable(v.lazy(() => NullableDocumentFilter))),
  personalUser: v.optional(v.nullable(v.lazy(() => NullableUserFilter))),
  null: v.optional(v.nullable(v.boolean())),
  and: v.optional(v.nullable(v.array(v.lazy(() => NullableDocumentFilter)))),
  or: v.optional(v.nullable(v.array(v.lazy(() => NullableDocumentFilter)))),
})

export const NullableDurationComparator: v.GenericSchema<unknown, T.NullableDurationComparator> = v.looseObject({
  eq: v.optional(v.nullable(v.union([v.string(), number()]))),
  neq: v.optional(v.nullable(v.union([v.string(), number()]))),
  in: v.optional(v.nullable(v.array(v.union([v.string(), number()])))),
  nin: v.optional(v.nullable(v.array(v.union([v.string(), number()])))),
  null: v.optional(v.nullable(v.boolean())),
  lt: v.optional(v.nullable(v.union([v.string(), number()]))),
  lte: v.optional(v.nullable(v.union([v.string(), number()]))),
  gt: v.optional(v.nullable(v.union([v.string(), number()]))),
  gte: v.optional(v.nullable(v.union([v.string(), number()]))),
})

export const NullableInitiativeFilter: v.GenericSchema<unknown, T.NullableInitiativeFilter> = v.looseObject({
  id: v.optional(v.nullable(v.lazy(() => EntityIdentifierIDComparator))),
  createdAt: v.optional(v.nullable(v.lazy(() => DateComparator))),
  updatedAt: v.optional(v.nullable(v.lazy(() => DateComparator))),
  name: v.optional(v.nullable(v.lazy(() => StringComparator))),
  slugId: v.optional(v.nullable(v.lazy(() => StringComparator))),
  customIdentifier: v.optional(v.nullable(v.lazy(() => NullableStringComparator))),
  searchableContent: v.optional(v.nullable(v.lazy(() => ContentComparator))),
  creator: v.optional(v.nullable(v.lazy(() => NullableUserFilter))),
  status: v.optional(v.nullable(v.lazy(() => StringComparator))),
  priority: v.optional(v.nullable(v.lazy(() => NullableNumberComparator))),
  teams: v.optional(v.nullable(v.lazy(() => TeamCollectionFilter))),
  leadTeam: v.optional(v.nullable(v.lazy(() => NullableTeamFilter))),
  owner: v.optional(v.nullable(v.lazy(() => NullableUserFilter))),
  targetDate: v.optional(v.nullable(v.lazy(() => NullableDateComparator))),
  startedAt: v.optional(v.nullable(v.lazy(() => NullableDateComparator))),
  completedAt: v.optional(v.nullable(v.lazy(() => NullableDateComparator))),
  canceledAt: v.optional(v.nullable(v.lazy(() => NullableDateComparator))),
  health: v.optional(v.nullable(v.lazy(() => StringComparator))),
  healthWithAge: v.optional(v.nullable(v.lazy(() => StringComparator))),
  activityType: v.optional(v.nullable(v.lazy(() => StringComparator))),
  ancestors: v.optional(v.nullable(v.lazy(() => InitiativeCollectionFilter))),
  labels: v.optional(v.nullable(v.lazy(() => InitiativeLabelCollectionFilter))),
  projects: v.optional(v.nullable(v.lazy(() => ProjectCollectionFilter))),
  initiativeUpdates: v.optional(v.nullable(v.lazy(() => InitiativeUpdatesCollectionFilter))),
  null: v.optional(v.nullable(v.boolean())),
  and: v.optional(v.nullable(v.array(v.lazy(() => NullableInitiativeFilter)))),
  or: v.optional(v.nullable(v.array(v.lazy(() => NullableInitiativeFilter)))),
})

export const NullableInitiativeUpdateFilter: v.GenericSchema<unknown, T.NullableInitiativeUpdateFilter> = v.looseObject(
  {
    id: v.optional(v.nullable(v.lazy(() => IDComparator))),
    createdAt: v.optional(v.nullable(v.lazy(() => DateComparator))),
    updatedAt: v.optional(v.nullable(v.lazy(() => DateComparator))),
    user: v.optional(v.nullable(v.lazy(() => UserFilter))),
    initiative: v.optional(v.nullable(v.lazy(() => InitiativeFilter))),
    reactions: v.optional(v.nullable(v.lazy(() => ReactionCollectionFilter))),
    null: v.optional(v.nullable(v.boolean())),
    and: v.optional(v.nullable(v.array(v.lazy(() => NullableInitiativeUpdateFilter)))),
    or: v.optional(v.nullable(v.array(v.lazy(() => NullableInitiativeUpdateFilter)))),
  },
)

export const NullableIssueFilter: v.GenericSchema<unknown, T.NullableIssueFilter> = v.looseObject({
  id: v.optional(v.nullable(v.lazy(() => IssueIDComparator))),
  createdAt: v.optional(v.nullable(v.lazy(() => DateComparator))),
  updatedAt: v.optional(v.nullable(v.lazy(() => DateComparator))),
  number: v.optional(v.nullable(v.lazy(() => NumberComparator))),
  title: v.optional(v.nullable(v.lazy(() => StringComparator))),
  description: v.optional(v.nullable(v.lazy(() => NullableStringComparator))),
  priority: v.optional(v.nullable(v.lazy(() => NullableNumberComparator))),
  estimate: v.optional(v.nullable(v.lazy(() => EstimateComparator))),
  startedAt: v.optional(v.nullable(v.lazy(() => NullableDateComparator))),
  triagedAt: v.optional(v.nullable(v.lazy(() => NullableDateComparator))),
  completedAt: v.optional(v.nullable(v.lazy(() => NullableDateComparator))),
  canceledAt: v.optional(v.nullable(v.lazy(() => NullableDateComparator))),
  slaBreachesAt: v.optional(v.nullable(v.lazy(() => NullableDateComparator))),
  archivedAt: v.optional(v.nullable(v.lazy(() => NullableDateComparator))),
  autoClosedAt: v.optional(v.nullable(v.lazy(() => NullableDateComparator))),
  autoArchivedAt: v.optional(v.nullable(v.lazy(() => NullableDateComparator))),
  addedToCycleAt: v.optional(v.nullable(v.lazy(() => NullableDateComparator))),
  addedToCyclePeriod: v.optional(v.nullable(v.lazy(() => CyclePeriodComparator))),
  dueDate: v.optional(v.nullable(v.lazy(() => NullableTimelessDateComparator))),
  accumulatedStateUpdatedAt: v.optional(v.nullable(v.lazy(() => NullableDateComparator))),
  snoozedUntilAt: v.optional(v.nullable(v.lazy(() => NullableDateComparator))),
  assignee: v.optional(v.nullable(v.lazy(() => NullableUserFilter))),
  delegate: v.optional(v.nullable(v.lazy(() => NullableUserFilter))),
  lastAppliedTemplate: v.optional(v.nullable(v.lazy(() => NullableTemplateFilter))),
  recurringIssueTemplate: v.optional(v.nullable(v.lazy(() => NullableTemplateFilter))),
  sourceMetadata: v.optional(v.nullable(v.lazy(() => SourceMetadataComparator))),
  creator: v.optional(v.nullable(v.lazy(() => NullableUserFilter))),
  parent: v.optional(v.nullable(v.lazy(() => NullableIssueFilter))),
  snoozedBy: v.optional(v.nullable(v.lazy(() => NullableUserFilter))),
  labels: v.optional(v.nullable(v.lazy(() => IssueLabelCollectionFilter))),
  subscribers: v.optional(v.nullable(v.lazy(() => UserCollectionFilter))),
  hasSharedUsers: v.optional(v.nullable(v.lazy(() => RelationExistsComparator))),
  sharedWith: v.optional(v.nullable(v.lazy(() => UserCollectionFilter))),
  team: v.optional(v.nullable(v.lazy(() => TeamFilter))),
  projectMilestone: v.optional(v.nullable(v.lazy(() => NullableProjectMilestoneFilter))),
  comments: v.optional(v.nullable(v.lazy(() => CommentCollectionFilter))),
  activity: v.optional(v.nullable(v.lazy(() => ActivityCollectionFilter))),
  suggestions: v.optional(v.nullable(v.lazy(() => IssueSuggestionCollectionFilter))),
  cycle: v.optional(v.nullable(v.lazy(() => NullableCycleFilter))),
  project: v.optional(v.nullable(v.lazy(() => NullableProjectFilter))),
  state: v.optional(v.nullable(v.lazy(() => WorkflowStateFilter))),
  children: v.optional(v.nullable(v.lazy(() => IssueCollectionFilter))),
  attachments: v.optional(v.nullable(v.lazy(() => AttachmentCollectionFilter))),
  searchableContent: v.optional(v.nullable(v.lazy(() => ContentComparator))),
  hasRelatedRelations: v.optional(v.nullable(v.lazy(() => RelationExistsComparator))),
  hasDuplicateRelations: v.optional(v.nullable(v.lazy(() => RelationExistsComparator))),
  hasBlockedByRelations: v.optional(v.nullable(v.lazy(() => RelationExistsComparator))),
  hasBlockingRelations: v.optional(v.nullable(v.lazy(() => RelationExistsComparator))),
  hasSuggestedRelatedIssues: v.optional(v.nullable(v.lazy(() => RelationExistsComparator))),
  hasSuggestedSimilarIssues: v.optional(v.nullable(v.lazy(() => RelationExistsComparator))),
  hasSuggestedAssignees: v.optional(v.nullable(v.lazy(() => RelationExistsComparator))),
  hasSuggestedProjects: v.optional(v.nullable(v.lazy(() => RelationExistsComparator))),
  hasSuggestedLabels: v.optional(v.nullable(v.lazy(() => RelationExistsComparator))),
  hasSuggestedTeams: v.optional(v.nullable(v.lazy(() => RelationExistsComparator))),
  hasActiveAgentSessions: v.optional(v.nullable(v.lazy(() => RelationExistsComparator))),
  hasDismissedAgentSessions: v.optional(v.nullable(v.lazy(() => RelationExistsComparator))),
  hasErroredAgentSessions: v.optional(v.nullable(v.lazy(() => RelationExistsComparator))),
  hasMergedAgentPullRequests: v.optional(v.nullable(v.lazy(() => RelationExistsComparator))),
  slaStatus: v.optional(v.nullable(v.lazy(() => SlaStatusComparator))),
  reactions: v.optional(v.nullable(v.lazy(() => ReactionCollectionFilter))),
  needs: v.optional(v.nullable(v.lazy(() => CustomerNeedCollectionFilter))),
  releases: v.optional(v.nullable(v.lazy(() => ReleaseCollectionFilter))),
  customerCount: v.optional(v.nullable(v.lazy(() => NumberComparator))),
  customerImportantCount: v.optional(v.nullable(v.lazy(() => NumberComparator))),
  leadTime: v.optional(v.nullable(v.lazy(() => NullableDurationComparator))),
  cycleTime: v.optional(v.nullable(v.lazy(() => NullableDurationComparator))),
  ageTime: v.optional(v.nullable(v.lazy(() => NullableDurationComparator))),
  triageTime: v.optional(v.nullable(v.lazy(() => NullableDurationComparator))),
  null: v.optional(v.nullable(v.boolean())),
  and: v.optional(v.nullable(v.array(v.lazy(() => NullableIssueFilter)))),
  or: v.optional(v.nullable(v.array(v.lazy(() => NullableIssueFilter)))),
})

export const NullableNumberComparator: v.GenericSchema<unknown, T.NullableNumberComparator> = v.looseObject({
  eq: v.optional(v.nullable(number())),
  neq: v.optional(v.nullable(number())),
  in: v.optional(v.nullable(v.array(number()))),
  nin: v.optional(v.nullable(v.array(number()))),
  null: v.optional(v.nullable(v.boolean())),
  lt: v.optional(v.nullable(number())),
  lte: v.optional(v.nullable(number())),
  gt: v.optional(v.nullable(number())),
  gte: v.optional(v.nullable(number())),
})

export const NullableProjectFilter: v.GenericSchema<unknown, T.NullableProjectFilter> = v.looseObject({
  id: v.optional(v.nullable(v.lazy(() => EntityIdentifierIDComparator))),
  createdAt: v.optional(v.nullable(v.lazy(() => DateComparator))),
  updatedAt: v.optional(v.nullable(v.lazy(() => DateComparator))),
  name: v.optional(v.nullable(v.lazy(() => StringComparator))),
  slugId: v.optional(v.nullable(v.lazy(() => StringComparator))),
  customIdentifier: v.optional(v.nullable(v.lazy(() => NullableStringComparator))),
  state: v.optional(v.nullable(v.lazy(() => StringComparator))),
  status: v.optional(v.nullable(v.lazy(() => ProjectStatusFilter))),
  priority: v.optional(v.nullable(v.lazy(() => NullableNumberComparator))),
  labels: v.optional(v.nullable(v.lazy(() => ProjectLabelCollectionFilter))),
  searchableContent: v.optional(v.nullable(v.lazy(() => ContentComparator))),
  startedAt: v.optional(v.nullable(v.lazy(() => NullableDateComparator))),
  completedAt: v.optional(v.nullable(v.lazy(() => NullableDateComparator))),
  canceledAt: v.optional(v.nullable(v.lazy(() => NullableDateComparator))),
  startDate: v.optional(v.nullable(v.lazy(() => NullableDateComparator))),
  targetDate: v.optional(v.nullable(v.lazy(() => NullableDateComparator))),
  health: v.optional(v.nullable(v.lazy(() => StringComparator))),
  healthWithAge: v.optional(v.nullable(v.lazy(() => StringComparator))),
  activityType: v.optional(v.nullable(v.lazy(() => StringComparator))),
  hasRelatedRelations: v.optional(v.nullable(v.lazy(() => RelationExistsComparator))),
  hasDependedOnByRelations: v.optional(v.nullable(v.lazy(() => RelationExistsComparator))),
  hasDependsOnRelations: v.optional(v.nullable(v.lazy(() => RelationExistsComparator))),
  hasBlockedByRelations: v.optional(v.nullable(v.lazy(() => RelationExistsComparator))),
  hasBlockingRelations: v.optional(v.nullable(v.lazy(() => RelationExistsComparator))),
  hasViolatedRelations: v.optional(v.nullable(v.lazy(() => RelationExistsComparator))),
  projectUpdates: v.optional(v.nullable(v.lazy(() => ProjectUpdatesCollectionFilter))),
  creator: v.optional(v.nullable(v.lazy(() => UserFilter))),
  lead: v.optional(v.nullable(v.lazy(() => NullableUserFilter))),
  members: v.optional(v.nullable(v.lazy(() => UserCollectionFilter))),
  issues: v.optional(v.nullable(v.lazy(() => IssueCollectionFilter))),
  roadmaps: v.optional(v.nullable(v.lazy(() => RoadmapCollectionFilter))),
  initiatives: v.optional(v.nullable(v.lazy(() => InitiativeCollectionFilter))),
  projectMilestones: v.optional(v.nullable(v.lazy(() => ProjectMilestoneCollectionFilter))),
  completedProjectMilestones: v.optional(v.nullable(v.lazy(() => ProjectMilestoneCollectionFilter))),
  nextProjectMilestone: v.optional(v.nullable(v.lazy(() => ProjectMilestoneFilter))),
  accessibleTeams: v.optional(v.nullable(v.lazy(() => TeamCollectionFilter))),
  leadTeam: v.optional(v.nullable(v.lazy(() => NullableTeamFilter))),
  lastAppliedTemplate: v.optional(v.nullable(v.lazy(() => NullableTemplateFilter))),
  needs: v.optional(v.nullable(v.lazy(() => CustomerNeedCollectionFilter))),
  customerCount: v.optional(v.nullable(v.lazy(() => NumberComparator))),
  customerImportantCount: v.optional(v.nullable(v.lazy(() => NumberComparator))),
  null: v.optional(v.nullable(v.boolean())),
  and: v.optional(v.nullable(v.array(v.lazy(() => NullableProjectFilter)))),
  or: v.optional(v.nullable(v.array(v.lazy(() => NullableProjectFilter)))),
})

export const NullableProjectMilestoneFilter: v.GenericSchema<unknown, T.NullableProjectMilestoneFilter> = v.looseObject(
  {
    id: v.optional(v.nullable(v.lazy(() => IDComparator))),
    createdAt: v.optional(v.nullable(v.lazy(() => DateComparator))),
    updatedAt: v.optional(v.nullable(v.lazy(() => DateComparator))),
    name: v.optional(v.nullable(v.lazy(() => NullableStringComparator))),
    targetDate: v.optional(v.nullable(v.lazy(() => NullableDateComparator))),
    project: v.optional(v.nullable(v.lazy(() => NullableProjectFilter))),
    null: v.optional(v.nullable(v.boolean())),
    and: v.optional(v.nullable(v.array(v.lazy(() => NullableProjectMilestoneFilter)))),
    or: v.optional(v.nullable(v.array(v.lazy(() => NullableProjectMilestoneFilter)))),
  },
)

export const NullableProjectUpdateFilter: v.GenericSchema<unknown, T.NullableProjectUpdateFilter> = v.looseObject({
  id: v.optional(v.nullable(v.lazy(() => IDComparator))),
  createdAt: v.optional(v.nullable(v.lazy(() => DateComparator))),
  updatedAt: v.optional(v.nullable(v.lazy(() => DateComparator))),
  user: v.optional(v.nullable(v.lazy(() => UserFilter))),
  project: v.optional(v.nullable(v.lazy(() => ProjectFilter))),
  reactions: v.optional(v.nullable(v.lazy(() => ReactionCollectionFilter))),
  null: v.optional(v.nullable(v.boolean())),
  and: v.optional(v.nullable(v.array(v.lazy(() => NullableProjectUpdateFilter)))),
  or: v.optional(v.nullable(v.array(v.lazy(() => NullableProjectUpdateFilter)))),
})

export const NullableStringComparator: v.GenericSchema<unknown, T.NullableStringComparator> = v.looseObject({
  eq: v.optional(v.nullable(v.string())),
  neq: v.optional(v.nullable(v.string())),
  in: v.optional(v.nullable(v.array(v.string()))),
  nin: v.optional(v.nullable(v.array(v.string()))),
  null: v.optional(v.nullable(v.boolean())),
  eqIgnoreCase: v.optional(v.nullable(v.string())),
  neqIgnoreCase: v.optional(v.nullable(v.string())),
  startsWith: v.optional(v.nullable(v.string())),
  startsWithIgnoreCase: v.optional(v.nullable(v.string())),
  notStartsWith: v.optional(v.nullable(v.string())),
  endsWith: v.optional(v.nullable(v.string())),
  notEndsWith: v.optional(v.nullable(v.string())),
  contains: v.optional(v.nullable(v.string())),
  containsIgnoreCase: v.optional(v.nullable(v.string())),
  notContains: v.optional(v.nullable(v.string())),
  notContainsIgnoreCase: v.optional(v.nullable(v.string())),
  containsIgnoreCaseAndAccent: v.optional(v.nullable(v.string())),
})

export const NullableTeamFilter: v.GenericSchema<unknown, T.NullableTeamFilter> = v.looseObject({
  id: v.optional(v.nullable(v.lazy(() => IDComparator))),
  createdAt: v.optional(v.nullable(v.lazy(() => DateComparator))),
  updatedAt: v.optional(v.nullable(v.lazy(() => DateComparator))),
  name: v.optional(v.nullable(v.lazy(() => StringComparator))),
  key: v.optional(v.nullable(v.lazy(() => StringComparator))),
  description: v.optional(v.nullable(v.lazy(() => NullableStringComparator))),
  private: v.optional(v.nullable(v.lazy(() => BooleanComparator))),
  visibility: v.optional(v.nullable(v.lazy(() => TeamVisibilityComparator))),
  members: v.optional(v.nullable(v.lazy(() => UserCollectionFilter))),
  users: v.optional(v.nullable(v.lazy(() => UserCollectionFilter))),
  owners: v.optional(v.nullable(v.lazy(() => UserCollectionFilter))),
  retiredAt: v.optional(v.nullable(v.lazy(() => NullableDateComparator))),
  issues: v.optional(v.nullable(v.lazy(() => IssueCollectionFilter))),
  parent: v.optional(v.nullable(v.lazy(() => NullableTeamFilter))),
  ancestors: v.optional(v.nullable(v.lazy(() => TeamCollectionFilter))),
  restrictedBy: v.optional(v.nullable(v.lazy(() => NullableTeamFilter))),
  releasePipelines: v.optional(v.nullable(v.lazy(() => ReleasePipelineCollectionFilter))),
  null: v.optional(v.nullable(v.boolean())),
  and: v.optional(v.nullable(v.array(v.lazy(() => NullableTeamFilter)))),
  or: v.optional(v.nullable(v.array(v.lazy(() => NullableTeamFilter)))),
})

export const NullableTemplateFilter: v.GenericSchema<unknown, T.NullableTemplateFilter> = v.looseObject({
  id: v.optional(v.nullable(v.lazy(() => IDComparator))),
  createdAt: v.optional(v.nullable(v.lazy(() => DateComparator))),
  updatedAt: v.optional(v.nullable(v.lazy(() => DateComparator))),
  name: v.optional(v.nullable(v.lazy(() => StringComparator))),
  type: v.optional(v.nullable(v.lazy(() => StringComparator))),
  inheritedFromId: v.optional(v.nullable(v.lazy(() => IDComparator))),
  team: v.optional(v.nullable(v.lazy(() => NullableTeamFilter))),
  null: v.optional(v.nullable(v.boolean())),
  and: v.optional(v.nullable(v.array(v.lazy(() => NullableTemplateFilter)))),
  or: v.optional(v.nullable(v.array(v.lazy(() => NullableTemplateFilter)))),
})

export const NullableTimelessDateComparator: v.GenericSchema<unknown, T.NullableTimelessDateComparator> = v.looseObject(
  {
    eq: v.optional(v.nullable(v.string())),
    neq: v.optional(v.nullable(v.string())),
    in: v.optional(v.nullable(v.array(v.string()))),
    nin: v.optional(v.nullable(v.array(v.string()))),
    null: v.optional(v.nullable(v.boolean())),
    lt: v.optional(v.nullable(v.string())),
    lte: v.optional(v.nullable(v.string())),
    gt: v.optional(v.nullable(v.string())),
    gte: v.optional(v.nullable(v.string())),
    today: v.optional(v.nullable(v.boolean())),
    timezone: v.optional(v.nullable(v.string())),
  },
)

export const NullableUserFilter: v.GenericSchema<unknown, T.NullableUserFilter> = v.looseObject({
  id: v.optional(v.nullable(v.lazy(() => IDComparator))),
  createdAt: v.optional(v.nullable(v.lazy(() => DateComparator))),
  updatedAt: v.optional(v.nullable(v.lazy(() => DateComparator))),
  name: v.optional(v.nullable(v.lazy(() => StringComparator))),
  displayName: v.optional(v.nullable(v.lazy(() => StringComparator))),
  email: v.optional(v.nullable(v.lazy(() => StringComparator))),
  active: v.optional(v.nullable(v.lazy(() => BooleanComparator))),
  assignedIssues: v.optional(v.nullable(v.lazy(() => IssueCollectionFilter))),
  admin: v.optional(v.nullable(v.lazy(() => BooleanComparator))),
  owner: v.optional(v.nullable(v.lazy(() => BooleanComparator))),
  invited: v.optional(v.nullable(v.lazy(() => BooleanComparator))),
  isInvited: v.optional(v.nullable(v.lazy(() => BooleanComparator))),
  app: v.optional(v.nullable(v.lazy(() => BooleanComparator))),
  isMe: v.optional(v.nullable(v.lazy(() => BooleanComparator))),
  null: v.optional(v.nullable(v.boolean())),
  and: v.optional(v.nullable(v.array(v.lazy(() => NullableUserFilter)))),
  or: v.optional(v.nullable(v.array(v.lazy(() => NullableUserFilter)))),
})

export const NumberComparator: v.GenericSchema<unknown, T.NumberComparator> = v.looseObject({
  eq: v.optional(v.nullable(number())),
  neq: v.optional(v.nullable(number())),
  in: v.optional(v.nullable(v.array(number()))),
  nin: v.optional(v.nullable(v.array(number()))),
  lt: v.optional(v.nullable(number())),
  lte: v.optional(v.nullable(number())),
  gt: v.optional(v.nullable(number())),
  gte: v.optional(v.nullable(number())),
})

export const OAuthApplication: v.GenericSchema<unknown, T.OAuthApplication> = v.looseObject({
  id: v.optional(v.string()),
  clientId: v.optional(v.string()),
  name: v.optional(v.string()),
  description: v.optional(v.nullable(v.string())),
  developer: v.optional(v.string()),
  developerUrl: v.optional(v.string()),
  imageUrl: v.optional(v.nullable(v.string())),
  redirectUris: v.optional(v.array(v.string())),
  distribution: v.optional(v.lazy(() => OAuthApplicationDistribution)),
  webhookResourceTypes: v.optional(v.array(v.lazy(() => WebhookResourceType))),
  webhookUrl: v.optional(v.nullable(v.string())),
  webhookEnabled: v.optional(v.boolean()),
  grantTypes: v.optional(v.array(v.lazy(() => OAuthApplicationGrantType))),
  requireTokenBinding: v.optional(v.boolean()),
  createdAt: v.optional(v.string()),
  updatedAt: v.optional(v.string()),
})

export const OAuthApplicationArchivePayload: v.GenericSchema<unknown, T.OAuthApplicationArchivePayload> = v.looseObject(
  {
    success: v.optional(v.boolean()),
  },
)

export const OAuthApplicationCodingSessionTrustedSource: v.GenericSchema<
  unknown,
  T.OAuthApplicationCodingSessionTrustedSource
> = v.looseObject({
  enabled: v.optional(v.boolean()),
  disabledReason: v.optional(v.nullable(v.lazy(() => CodingSessionsDisabledReason))),
})

export const OAuthApplicationCreateInput: v.GenericSchema<unknown, T.OAuthApplicationCreateInput> = v.looseObject({
  name: v.string(),
  description: v.optional(v.nullable(v.string())),
  developer: v.string(),
  developerUrl: v.optional(v.nullable(v.string())),
  redirectUris: v.array(v.string()),
  grantTypes: v.optional(v.nullable(v.array(v.lazy(() => OAuthApplicationGrantType)))),
  requireTokenBinding: v.optional(v.nullable(v.boolean())),
  idempotencyKey: v.optional(v.nullable(v.string())),
  imageUrl: v.optional(v.nullable(v.string())),
  webhookUrl: v.optional(v.nullable(v.string())),
  webhookResourceTypes: v.optional(v.nullable(v.array(v.lazy(() => WebhookResourceType)))),
})

export const OAuthApplicationCreatePayload: v.GenericSchema<unknown, T.OAuthApplicationCreatePayload> = v.looseObject({
  success: v.optional(v.boolean()),
  application: v.optional(v.lazy(() => OAuthApplication)),
  clientSecret: v.optional(v.nullable(v.string())),
  webhookSecret: v.optional(v.nullable(v.string())),
})

export const OAuthApplicationDistribution: v.GenericSchema<unknown, T.OAuthApplicationDistribution> = v.picklist([
  "private",
  "public",
])

export const OAuthApplicationGrantType: v.GenericSchema<unknown, T.OAuthApplicationGrantType> = v.picklist([
  "authorization_code",
  "client_credentials",
])

export const OAuthApplicationPayload: v.GenericSchema<unknown, T.OAuthApplicationPayload> = v.looseObject({
  success: v.optional(v.boolean()),
  application: v.optional(v.lazy(() => OAuthApplication)),
})

export const OAuthApplicationRotateSecretPayload: v.GenericSchema<unknown, T.OAuthApplicationRotateSecretPayload> =
  v.looseObject({
    success: v.optional(v.boolean()),
    clientSecret: v.optional(v.string()),
  })

export const OAuthApplicationRotateWebhookSecretPayload: v.GenericSchema<
  unknown,
  T.OAuthApplicationRotateWebhookSecretPayload
> = v.looseObject({
  success: v.optional(v.boolean()),
  webhookSecret: v.optional(v.string()),
})

export const OAuthApplicationUpdateInput: v.GenericSchema<unknown, T.OAuthApplicationUpdateInput> = v.looseObject({
  name: v.optional(v.nullable(v.string())),
  description: v.optional(v.nullable(v.string())),
  developer: v.optional(v.nullable(v.string())),
  developerUrl: v.optional(v.nullable(v.string())),
  redirectUris: v.optional(v.nullable(v.array(v.string()))),
  grantTypes: v.optional(v.nullable(v.array(v.lazy(() => OAuthApplicationGrantType)))),
  requireTokenBinding: v.optional(v.nullable(v.boolean())),
  imageUrl: v.optional(v.nullable(v.string())),
  webhookUrl: v.optional(v.nullable(v.string())),
  webhookEnabled: v.optional(v.nullable(v.boolean())),
  webhookResourceTypes: v.optional(v.nullable(v.array(v.lazy(() => WebhookResourceType)))),
})

export const OauthClientApproval: v.GenericSchema<unknown, T.OauthClientApproval> = v.looseObject({
  id: v.optional(v.string()),
  createdAt: v.optional(v.string()),
  updatedAt: v.optional(v.string()),
  archivedAt: v.optional(v.nullable(v.string())),
  oauthClientId: v.optional(v.string()),
  requesterId: v.optional(v.string()),
  responderId: v.optional(v.nullable(v.string())),
  status: v.optional(v.lazy(() => OAuthClientApprovalStatus)),
  scopes: v.optional(v.array(v.string())),
  requestReason: v.optional(v.nullable(v.string())),
  denyReason: v.optional(v.nullable(v.string())),
  newlyRequestedScopes: v.optional(v.nullable(v.array(v.string()))),
})

export const OauthClientApprovalNotification: v.GenericSchema<unknown, T.OauthClientApprovalNotification> =
  v.looseObject({
    id: v.optional(v.string()),
    createdAt: v.optional(v.string()),
    updatedAt: v.optional(v.string()),
    archivedAt: v.optional(v.nullable(v.string())),
    type: v.optional(v.string()),
    actor: v.optional(v.nullable(v.lazy(() => User))),
    externalUserActor: v.optional(v.nullable(v.lazy(() => ExternalUser))),
    user: v.optional(v.lazy(() => User)),
    readAt: v.optional(v.nullable(v.string())),
    emailedAt: v.optional(v.nullable(v.string())),
    snoozedUntilAt: v.optional(v.nullable(v.string())),
    unsnoozedAt: v.optional(v.nullable(v.string())),
    category: v.optional(v.lazy(() => NotificationCategory)),
    botActor: v.optional(v.nullable(v.lazy(() => ActorBot))),
    oauthClientApprovalId: v.optional(v.string()),
    oauthClientApproval: v.optional(v.lazy(() => OauthClientApproval)),
  })

export const OAuthClientApprovalStatus: v.GenericSchema<unknown, T.OAuthClientApprovalStatus> = v.picklist([
  "requested",
  "approved",
  "denied",
])

export const Organization: v.GenericSchema<unknown, T.Organization> = v.looseObject({
  id: v.optional(v.string()),
  createdAt: v.optional(v.string()),
  updatedAt: v.optional(v.string()),
  archivedAt: v.optional(v.nullable(v.string())),
  name: v.optional(v.string()),
  urlKey: v.optional(v.string()),
  logoUrl: v.optional(v.nullable(v.string())),
  periodUploadVolume: v.optional(number()),
  gitBranchFormat: v.optional(v.nullable(v.string())),
  gitLinkbackMessagesEnabled: v.optional(v.boolean()),
  gitPublicLinkbackMessagesEnabled: v.optional(v.boolean()),
  gitLinkbackDescriptionsEnabled: v.optional(v.boolean()),
  suggestedBranchNameEnabled: v.optional(v.boolean()),
  roadmapEnabled: v.optional(v.boolean()),
  projectUpdateReminderFrequencyInWeeks: v.optional(v.nullable(number())),
  projectUpdateRemindersDay: v.optional(v.lazy(() => Day)),
  projectUpdateRemindersHour: v.optional(number()),
  initiativeUpdateReminderFrequencyInWeeks: v.optional(v.nullable(number())),
  initiativeUpdateRemindersDay: v.optional(v.lazy(() => Day)),
  initiativeUpdateRemindersHour: v.optional(number()),
  fiscalYearStartMonth: v.optional(number()),
  defaultHomeView: v.optional(v.nullable(v.string())),
  defaultHomeViewTargetId: v.optional(v.nullable(v.string())),
  samlEnabled: v.optional(v.boolean()),
  scimEnabled: v.optional(v.boolean()),
  securitySettings: v.optional(v.unknown()),
  authSettings: v.optional(v.unknown()),
  allowedAuthServices: v.optional(v.array(v.string())),
  allowedFileUploadContentTypes: v.optional(v.nullable(v.array(v.string()))),
  deletionRequestedAt: v.optional(v.nullable(v.string())),
  trialEndsAt: v.optional(v.nullable(v.string())),
  trialStartsAt: v.optional(v.nullable(v.string())),
  previousUrlKeys: v.optional(v.array(v.string())),
  hipaaComplianceEnabled: v.optional(v.boolean()),
  themeSettings: v.optional(v.nullable(v.unknown())),
  releaseChannel: v.optional(v.lazy(() => ReleaseChannel)),
  customersConfiguration: v.optional(v.unknown()),
  defaultFeedSummarySchedule: v.optional(v.nullable(v.lazy(() => FeedSummarySchedule))),
  feedEnabled: v.optional(v.boolean()),
  hideNonPrimaryOrganizations: v.optional(v.boolean()),
  aiThreadSummariesEnabled: v.optional(v.boolean()),
  aiDiscussionSummariesEnabled: v.optional(v.boolean()),
  pullRequestTourEnabled: v.optional(v.boolean()),
  pullRequestIssueMode: v.optional(v.string()),
  slaDayCount: v.optional(v.lazy(() => SLADayCountType)),
  projectUpdatesReminderFrequency: v.optional(v.lazy(() => ProjectUpdateReminderFrequency)),
  users: v.optional(v.lazy(() => UserConnection)),
  loops: v.optional(v.lazy(() => WorkflowDefinitionConnection)),
  teams: v.optional(v.lazy(() => TeamConnection)),
  projectStatuses: v.optional(v.array(v.lazy(() => ProjectStatus))),
  integrations: v.optional(v.lazy(() => IntegrationConnection)),
  slackProjectChannelIntegration: v.optional(v.nullable(v.lazy(() => Integration))),
  slackProjectChannelPrefix: v.optional(v.string()),
  subscription: v.optional(v.nullable(v.lazy(() => PaidSubscription))),
  userCount: v.optional(integer()),
  createdIssueCount: v.optional(integer()),
  templates: v.optional(v.lazy(() => TemplateConnection)),
  labels: v.optional(v.lazy(() => IssueLabelConnection)),
  projectLabels: v.optional(v.lazy(() => ProjectLabelConnection)),
  customerCount: v.optional(integer()),
  customersEnabled: v.optional(v.boolean()),
  releasesEnabled: v.optional(v.boolean()),
  allowMembersToInvite: v.optional(v.nullable(v.boolean())),
  restrictTeamCreationToAdmins: v.optional(v.nullable(v.boolean())),
  restrictLabelManagementToAdmins: v.optional(v.nullable(v.boolean())),
})

export const OrganizationAcceptedOrExpiredInviteDetailsPayload: v.GenericSchema<
  unknown,
  T.OrganizationAcceptedOrExpiredInviteDetailsPayload
> = v.looseObject({
  status: v.optional(v.lazy(() => OrganizationInviteStatus)),
})

export const OrganizationAuthSettingsInput: v.GenericSchema<unknown, T.OrganizationAuthSettingsInput> = v.looseObject({
  allowedAuthServices: v.optional(v.nullable(v.array(v.string()))),
  hideNonPrimaryOrganizations: v.optional(v.nullable(v.boolean())),
  disableAuthServiceBypass: v.optional(v.nullable(v.boolean())),
})

export const OrganizationCancelDeletePayload: v.GenericSchema<unknown, T.OrganizationCancelDeletePayload> =
  v.looseObject({
    success: v.optional(v.boolean()),
  })

export const OrganizationDeletePayload: v.GenericSchema<unknown, T.OrganizationDeletePayload> = v.looseObject({
  success: v.optional(v.boolean()),
})

export const OrganizationDomain: v.GenericSchema<unknown, T.OrganizationDomain> = v.looseObject({
  id: v.optional(v.string()),
  createdAt: v.optional(v.string()),
  updatedAt: v.optional(v.string()),
  archivedAt: v.optional(v.nullable(v.string())),
  identityProvider: v.optional(v.nullable(v.lazy(() => IdentityProvider))),
  name: v.optional(v.string()),
  verified: v.optional(v.boolean()),
  verificationEmail: v.optional(v.nullable(v.string())),
  creator: v.optional(v.nullable(v.lazy(() => User))),
  authType: v.optional(v.lazy(() => OrganizationDomainAuthType)),
  claimed: v.optional(v.nullable(v.boolean())),
  disableOrganizationCreation: v.optional(v.nullable(v.boolean())),
})

export const OrganizationDomainAuthType: v.GenericSchema<unknown, T.OrganizationDomainAuthType> = v.picklist([
  "saml",
  "general",
])

export const OrganizationExistsPayload: v.GenericSchema<unknown, T.OrganizationExistsPayload> = v.looseObject({
  success: v.optional(v.boolean()),
  exists: v.optional(v.boolean()),
})

export const OrganizationInvite: v.GenericSchema<unknown, T.OrganizationInvite> = v.looseObject({
  id: v.optional(v.string()),
  createdAt: v.optional(v.string()),
  updatedAt: v.optional(v.string()),
  archivedAt: v.optional(v.nullable(v.string())),
  email: v.optional(v.string()),
  role: v.optional(v.lazy(() => UserRoleType)),
  external: v.optional(v.boolean()),
  acceptedAt: v.optional(v.nullable(v.string())),
  expiresAt: v.optional(v.nullable(v.string())),
  metadata: v.optional(v.nullable(v.unknown())),
  inviter: v.optional(v.lazy(() => User)),
  invitee: v.optional(v.nullable(v.lazy(() => User))),
  organization: v.optional(v.lazy(() => Organization)),
})

export const OrganizationInviteConnection: v.GenericSchema<unknown, T.OrganizationInviteConnection> = v.looseObject({
  edges: v.optional(v.array(v.lazy(() => OrganizationInviteEdge))),
  nodes: v.optional(v.array(v.lazy(() => OrganizationInvite))),
  pageInfo: v.optional(v.lazy(() => PageInfo)),
})

export const OrganizationInviteCreateInput: v.GenericSchema<unknown, T.OrganizationInviteCreateInput> = v.looseObject({
  id: v.optional(v.nullable(v.string())),
  email: v.string(),
  role: v.optional(v.nullable(v.lazy(() => UserRoleType))),
  teamIds: v.optional(v.nullable(v.array(v.string()))),
})

export const OrganizationInviteDetailsPayload: v.GenericSchema<unknown, T.OrganizationInviteDetailsPayload> = v.union([
  v.lazy(() => OrganizationInviteFullDetailsPayload),
  v.lazy(() => OrganizationAcceptedOrExpiredInviteDetailsPayload),
])

export const OrganizationInviteEdge: v.GenericSchema<unknown, T.OrganizationInviteEdge> = v.looseObject({
  node: v.optional(v.lazy(() => OrganizationInvite)),
  cursor: v.optional(v.string()),
})

export const OrganizationInviteFullDetailsPayload: v.GenericSchema<unknown, T.OrganizationInviteFullDetailsPayload> =
  v.looseObject({
    status: v.optional(v.lazy(() => OrganizationInviteStatus)),
    inviter: v.optional(v.string()),
    email: v.optional(v.string()),
    role: v.optional(v.lazy(() => UserRoleType)),
    createdAt: v.optional(v.string()),
    organizationName: v.optional(v.string()),
    organizationId: v.optional(v.string()),
    organizationLogoUrl: v.optional(v.nullable(v.string())),
    accepted: v.optional(v.boolean()),
    expired: v.optional(v.boolean()),
    allowedAuthServices: v.optional(v.array(v.string())),
  })

export const OrganizationInvitePayload: v.GenericSchema<unknown, T.OrganizationInvitePayload> = v.looseObject({
  lastSyncId: v.optional(number()),
  organizationInvite: v.optional(v.lazy(() => OrganizationInvite)),
  success: v.optional(v.boolean()),
})

export const OrganizationInviteStatus: v.GenericSchema<unknown, T.OrganizationInviteStatus> = v.picklist([
  "pending",
  "accepted",
  "expired",
])

export const OrganizationInviteUpdateInput: v.GenericSchema<unknown, T.OrganizationInviteUpdateInput> = v.looseObject({
  teamIds: v.array(v.string()),
})

export const OrganizationPayload: v.GenericSchema<unknown, T.OrganizationPayload> = v.looseObject({
  lastSyncId: v.optional(number()),
  organization: v.optional(v.nullable(v.lazy(() => Organization))),
  success: v.optional(v.boolean()),
})

export const OrganizationQuota: v.GenericSchema<unknown, T.OrganizationQuota> = v.looseObject({
  id: v.optional(v.string()),
  key: v.optional(v.string()),
  scope: v.optional(v.lazy(() => OrganizationQuotaScope)),
  limit: v.optional(number()),
  name: v.optional(v.string()),
  description: v.optional(v.string()),
})

export const OrganizationQuotaConnection: v.GenericSchema<unknown, T.OrganizationQuotaConnection> = v.looseObject({
  edges: v.optional(v.array(v.lazy(() => OrganizationQuotaEdge))),
  nodes: v.optional(v.array(v.lazy(() => OrganizationQuota))),
  pageInfo: v.optional(v.lazy(() => PageInfo)),
})

export const OrganizationQuotaEdge: v.GenericSchema<unknown, T.OrganizationQuotaEdge> = v.looseObject({
  node: v.optional(v.lazy(() => OrganizationQuota)),
  cursor: v.optional(v.string()),
})

export const OrganizationQuotaFilter: v.GenericSchema<unknown, T.OrganizationQuotaFilter> = v.looseObject({
  key: v.optional(v.nullable(v.lazy(() => StringComparator))),
  scope: v.optional(v.nullable(v.lazy(() => StringComparator))),
  and: v.optional(v.nullable(v.array(v.lazy(() => OrganizationQuotaFilter)))),
  or: v.optional(v.nullable(v.array(v.lazy(() => OrganizationQuotaFilter)))),
})

export const OrganizationQuotaScope: v.GenericSchema<unknown, T.OrganizationQuotaScope> = v.picklist([
  "workspace",
  "team",
  "project",
  "initiative",
])

export const OrganizationSecuritySettingsInput: v.GenericSchema<unknown, T.OrganizationSecuritySettingsInput> =
  v.looseObject({
    adminManagementRole: v.optional(v.nullable(v.lazy(() => UserRoleType))),
    personalApiKeysRole: v.optional(v.nullable(v.lazy(() => UserRoleType))),
    invitationsRole: v.optional(v.nullable(v.lazy(() => UserRoleType))),
    teamCreationRole: v.optional(v.nullable(v.lazy(() => UserRoleType))),
    workspaceInitiativesRole: v.optional(v.nullable(v.lazy(() => UserRoleType))),
    labelManagementRole: v.optional(v.nullable(v.lazy(() => UserRoleType))),
    apiSettingsRole: v.optional(v.nullable(v.lazy(() => UserRoleType))),
    templateManagementRole: v.optional(v.nullable(v.lazy(() => UserRoleType))),
    automationManagementRole: v.optional(v.nullable(v.lazy(() => UserRoleType))),
    importRole: v.optional(v.nullable(v.lazy(() => UserRoleType))),
    agentGuidanceRole: v.optional(v.nullable(v.lazy(() => UserRoleType))),
    integrationCreationRole: v.optional(v.nullable(v.lazy(() => UserRoleType))),
    pinnedViewManagementRole: v.optional(v.nullable(v.lazy(() => UserRoleType))),
  })

export const OrganizationStartTrialInput: v.GenericSchema<unknown, T.OrganizationStartTrialInput> = v.looseObject({
  planType: v.string(),
})

export const OrganizationStartTrialPayload: v.GenericSchema<unknown, T.OrganizationStartTrialPayload> = v.looseObject({
  success: v.optional(v.boolean()),
})

export const OrganizationUpdateInput: v.GenericSchema<unknown, T.OrganizationUpdateInput> = v.looseObject({
  name: v.optional(v.nullable(v.string())),
  logoUrl: v.optional(v.nullable(v.string())),
  urlKey: v.optional(v.nullable(v.string())),
  gitBranchFormat: v.optional(v.nullable(v.string())),
  gitLinkbackMessagesEnabled: v.optional(v.nullable(v.boolean())),
  gitPublicLinkbackMessagesEnabled: v.optional(v.nullable(v.boolean())),
  gitLinkbackDescriptionsEnabled: v.optional(v.nullable(v.boolean())),
  suggestedBranchNameEnabled: v.optional(v.nullable(v.boolean())),
  roadmapEnabled: v.optional(v.nullable(v.boolean())),
  projectUpdateReminderFrequencyInWeeks: v.optional(v.nullable(number())),
  projectUpdateRemindersDay: v.optional(v.nullable(v.lazy(() => Day))),
  projectUpdateRemindersHour: v.optional(v.nullable(number())),
  initiativeUpdateReminderFrequencyInWeeks: v.optional(v.nullable(number())),
  initiativeUpdateRemindersDay: v.optional(v.nullable(v.lazy(() => Day))),
  initiativeUpdateRemindersHour: v.optional(v.nullable(number())),
  fiscalYearStartMonth: v.optional(v.nullable(number())),
  defaultHomeView: v.optional(v.nullable(v.string())),
  defaultHomeViewTargetId: v.optional(v.nullable(v.string())),
  reducedPersonalInformation: v.optional(v.nullable(v.boolean())),
  oauthAppReview: v.optional(v.nullable(v.boolean())),
  restrictAgentInvocationToMembers: v.optional(v.nullable(v.boolean())),
  allowedFileUploadContentTypes: v.optional(v.nullable(v.array(v.string()))),
  feedEnabled: v.optional(v.nullable(v.boolean())),
  defaultFeedSummarySchedule: v.optional(v.nullable(v.lazy(() => FeedSummarySchedule))),
  aiDiscussionSummariesEnabled: v.optional(v.nullable(v.boolean())),
  aiThreadSummariesEnabled: v.optional(v.nullable(v.boolean())),
  pullRequestTourEnabled: v.optional(v.nullable(v.boolean())),
  pullRequestIssueMode: v.optional(v.nullable(v.string())),
  hipaaComplianceEnabled: v.optional(v.nullable(v.boolean())),
  securitySettings: v.optional(v.nullable(v.lazy(() => OrganizationSecuritySettingsInput))),
  authSettings: v.optional(v.nullable(v.lazy(() => OrganizationAuthSettingsInput))),
  slackProjectChannelIntegrationId: v.optional(v.nullable(v.string())),
  slackProjectChannelPrefix: v.optional(v.nullable(v.string())),
})

export const OwnerSort: v.GenericSchema<unknown, T.OwnerSort> = v.looseObject({
  nulls: v.optional(v.nullable(v.lazy(() => PaginationNulls))),
  order: v.optional(v.nullable(v.lazy(() => PaginationSortOrder))),
})

export const PageInfo: v.GenericSchema<unknown, T.PageInfo> = v.looseObject({
  hasPreviousPage: v.optional(v.boolean()),
  hasNextPage: v.optional(v.boolean()),
  startCursor: v.optional(v.nullable(v.string())),
  endCursor: v.optional(v.nullable(v.string())),
})

export const PaginationNulls: v.GenericSchema<unknown, T.PaginationNulls> = v.picklist(["first", "last"])

export const PaginationOrderBy: v.GenericSchema<unknown, T.PaginationOrderBy> = v.picklist(["createdAt", "updatedAt"])

export const PaginationSortOrder: v.GenericSchema<unknown, T.PaginationSortOrder> = v.picklist([
  "Ascending",
  "Descending",
])

export const PaidSubscription: v.GenericSchema<unknown, T.PaidSubscription> = v.looseObject({
  id: v.optional(v.string()),
  createdAt: v.optional(v.string()),
  updatedAt: v.optional(v.string()),
  archivedAt: v.optional(v.nullable(v.string())),
  type: v.optional(v.string()),
  seats: v.optional(number()),
  seatsMinimum: v.optional(v.nullable(number())),
  seatsMaximum: v.optional(v.nullable(number())),
  creator: v.optional(v.nullable(v.lazy(() => User))),
  organization: v.optional(v.lazy(() => Organization)),
  collectionMethod: v.optional(v.string()),
  canceledAt: v.optional(v.nullable(v.string())),
  cancelAt: v.optional(v.nullable(v.string())),
  pendingChangeType: v.optional(v.nullable(v.string())),
  nextBillingAt: v.optional(v.nullable(v.string())),
})

export const PartialNotificationChannelPreferencesInput: v.GenericSchema<
  unknown,
  T.PartialNotificationChannelPreferencesInput
> = v.looseObject({
  mobile: v.optional(v.nullable(v.boolean())),
  desktop: v.optional(v.nullable(v.boolean())),
  email: v.optional(v.nullable(v.boolean())),
  slack: v.optional(v.nullable(v.boolean())),
})

export const PipelineTab: v.GenericSchema<unknown, T.PipelineTab> = v.picklist(["releaseNotes", "releases"])

export const PostNotification: v.GenericSchema<unknown, T.PostNotification> = v.looseObject({
  commentId: v.optional(v.nullable(v.string())),
  parentCommentId: v.optional(v.nullable(v.string())),
  reactionEmoji: v.optional(v.nullable(v.string())),
  id: v.optional(v.string()),
  createdAt: v.optional(v.string()),
  updatedAt: v.optional(v.string()),
  archivedAt: v.optional(v.nullable(v.string())),
  type: v.optional(v.string()),
  actor: v.optional(v.nullable(v.lazy(() => User))),
  externalUserActor: v.optional(v.nullable(v.lazy(() => ExternalUser))),
  user: v.optional(v.lazy(() => User)),
  readAt: v.optional(v.nullable(v.string())),
  emailedAt: v.optional(v.nullable(v.string())),
  snoozedUntilAt: v.optional(v.nullable(v.string())),
  unsnoozedAt: v.optional(v.nullable(v.string())),
  category: v.optional(v.lazy(() => NotificationCategory)),
  botActor: v.optional(v.nullable(v.lazy(() => ActorBot))),
  postId: v.optional(v.string()),
})

export const PrioritySort: v.GenericSchema<unknown, T.PrioritySort> = v.looseObject({
  nulls: v.optional(v.nullable(v.lazy(() => PaginationNulls))),
  order: v.optional(v.nullable(v.lazy(() => PaginationSortOrder))),
  noPriorityFirst: v.optional(v.nullable(v.boolean())),
  usePrioritySortOrderTiebreaker: v.optional(v.nullable(v.boolean())),
})

export const ProductAnnouncement: v.GenericSchema<unknown, T.ProductAnnouncement> = v.looseObject({
  id: v.optional(v.string()),
  createdAt: v.optional(v.string()),
  updatedAt: v.optional(v.string()),
  archivedAt: v.optional(v.nullable(v.string())),
  campaignId: v.optional(v.string()),
  kind: v.optional(v.string()),
  title: v.optional(v.string()),
  headline: v.optional(v.string()),
  description: v.optional(v.string()),
})

export const ProductAnnouncementNotification: v.GenericSchema<unknown, T.ProductAnnouncementNotification> =
  v.looseObject({
    id: v.optional(v.string()),
    createdAt: v.optional(v.string()),
    updatedAt: v.optional(v.string()),
    archivedAt: v.optional(v.nullable(v.string())),
    type: v.optional(v.string()),
    actor: v.optional(v.nullable(v.lazy(() => User))),
    externalUserActor: v.optional(v.nullable(v.lazy(() => ExternalUser))),
    user: v.optional(v.lazy(() => User)),
    readAt: v.optional(v.nullable(v.string())),
    emailedAt: v.optional(v.nullable(v.string())),
    snoozedUntilAt: v.optional(v.nullable(v.string())),
    unsnoozedAt: v.optional(v.nullable(v.string())),
    category: v.optional(v.lazy(() => NotificationCategory)),
    botActor: v.optional(v.nullable(v.lazy(() => ActorBot))),
    productAnnouncementId: v.optional(v.string()),
    productAnnouncement: v.optional(v.lazy(() => ProductAnnouncement)),
  })

export const Project: v.GenericSchema<unknown, T.Project> = v.looseObject({
  id: v.optional(v.string()),
  createdAt: v.optional(v.string()),
  updatedAt: v.optional(v.string()),
  archivedAt: v.optional(v.nullable(v.string())),
  updateReminderFrequencyInWeeks: v.optional(v.nullable(number())),
  updateReminderFrequency: v.optional(v.nullable(number())),
  frequencyResolution: v.optional(v.lazy(() => FrequencyResolutionType)),
  updateRemindersDay: v.optional(v.nullable(v.lazy(() => Day))),
  updateRemindersHour: v.optional(v.nullable(number())),
  name: v.optional(v.string()),
  description: v.optional(v.string()),
  slugId: v.optional(v.string()),
  icon: v.optional(v.nullable(v.string())),
  color: v.optional(v.string()),
  status: v.optional(v.lazy(() => ProjectStatus)),
  creator: v.optional(v.nullable(v.lazy(() => User))),
  lead: v.optional(v.nullable(v.lazy(() => User))),
  projectUpdateRemindersPausedUntilAt: v.optional(v.nullable(v.string())),
  startDate: v.optional(v.nullable(v.string())),
  startDateResolution: v.optional(v.nullable(v.lazy(() => DateResolutionType))),
  targetDate: v.optional(v.nullable(v.string())),
  targetDateResolution: v.optional(v.nullable(v.lazy(() => DateResolutionType))),
  startedAt: v.optional(v.nullable(v.string())),
  completedAt: v.optional(v.nullable(v.string())),
  canceledAt: v.optional(v.nullable(v.string())),
  autoArchivedAt: v.optional(v.nullable(v.string())),
  trashed: v.optional(v.nullable(v.boolean())),
  sortOrder: v.optional(number()),
  prioritySortOrder: v.optional(number()),
  convertedFromIssue: v.optional(v.nullable(v.lazy(() => Issue))),
  lastAppliedTemplate: v.optional(v.nullable(v.lazy(() => Template))),
  priority: v.optional(integer()),
  lastUpdate: v.optional(v.nullable(v.lazy(() => ProjectUpdate))),
  health: v.optional(v.nullable(v.lazy(() => ProjectUpdateHealthType))),
  healthUpdatedAt: v.optional(v.nullable(v.string())),
  issueCountHistory: v.optional(v.array(number())),
  completedIssueCountHistory: v.optional(v.array(number())),
  scopeHistory: v.optional(v.array(number())),
  completedScopeHistory: v.optional(v.array(number())),
  inProgressScopeHistory: v.optional(v.array(number())),
  slackNewIssue: v.optional(v.boolean()),
  slackIssueComments: v.optional(v.boolean()),
  slackIssueStatuses: v.optional(v.boolean()),
  labelIds: v.optional(v.array(v.string())),
  favorite: v.optional(v.nullable(v.lazy(() => Favorite))),
  url: v.optional(v.string()),
  initiatives: v.optional(v.lazy(() => InitiativeConnection)),
  initiativeToProjects: v.optional(v.lazy(() => InitiativeToProjectConnection)),
  teams: v.optional(v.lazy(() => TeamConnection)),
  members: v.optional(v.lazy(() => UserConnection)),
  projectUpdates: v.optional(v.lazy(() => ProjectUpdateConnection)),
  documents: v.optional(v.lazy(() => DocumentConnection)),
  projectMilestones: v.optional(v.lazy(() => ProjectMilestoneConnection)),
  issues: v.optional(v.lazy(() => IssueConnection)),
  externalLinks: v.optional(v.lazy(() => EntityExternalLinkConnection)),
  attachments: v.optional(v.lazy(() => ProjectAttachmentConnection)),
  resourceCount: v.optional(integer()),
  history: v.optional(v.lazy(() => ProjectHistoryConnection)),
  labels: v.optional(v.lazy(() => ProjectLabelConnection)),
  progress: v.optional(number()),
  scope: v.optional(number()),
  integrationsSettings: v.optional(v.nullable(v.lazy(() => IntegrationsSettings))),
  slackChannelId: v.optional(v.nullable(v.string())),
  microsoftTeamsChannelId: v.optional(v.nullable(v.string())),
  content: v.optional(v.nullable(v.string())),
  documentContent: v.optional(v.nullable(v.lazy(() => DocumentContent))),
  comments: v.optional(v.lazy(() => CommentConnection)),
  relations: v.optional(v.lazy(() => ProjectRelationConnection)),
  inverseRelations: v.optional(v.lazy(() => ProjectRelationConnection)),
  needs: v.optional(v.lazy(() => CustomerNeedConnection)),
  state: v.optional(v.string()),
  priorityLabel: v.optional(v.string()),
  syncedWith: v.optional(v.nullable(v.array(v.lazy(() => ExternalEntityInfo)))),
})

export const ProjectArchivePayload: v.GenericSchema<unknown, T.ProjectArchivePayload> = v.looseObject({
  lastSyncId: v.optional(number()),
  success: v.optional(v.boolean()),
  entity: v.optional(v.nullable(v.lazy(() => Project))),
})

export const ProjectAttachment: v.GenericSchema<unknown, T.ProjectAttachment> = v.looseObject({
  id: v.optional(v.string()),
  createdAt: v.optional(v.string()),
  updatedAt: v.optional(v.string()),
  archivedAt: v.optional(v.nullable(v.string())),
  title: v.optional(v.string()),
  subtitle: v.optional(v.nullable(v.string())),
  url: v.optional(v.string()),
  creator: v.optional(v.nullable(v.lazy(() => User))),
  metadata: v.optional(v.unknown()),
  source: v.optional(v.nullable(v.unknown())),
  sourceType: v.optional(v.nullable(v.string())),
})

export const ProjectAttachmentConnection: v.GenericSchema<unknown, T.ProjectAttachmentConnection> = v.looseObject({
  edges: v.optional(v.array(v.lazy(() => ProjectAttachmentEdge))),
  nodes: v.optional(v.array(v.lazy(() => ProjectAttachment))),
  pageInfo: v.optional(v.lazy(() => PageInfo)),
})

export const ProjectAttachmentEdge: v.GenericSchema<unknown, T.ProjectAttachmentEdge> = v.looseObject({
  node: v.optional(v.lazy(() => ProjectAttachment)),
  cursor: v.optional(v.string()),
})

export const ProjectCollectionFilter: v.GenericSchema<unknown, T.ProjectCollectionFilter> = v.looseObject({
  id: v.optional(v.nullable(v.lazy(() => EntityIdentifierIDComparator))),
  createdAt: v.optional(v.nullable(v.lazy(() => DateComparator))),
  updatedAt: v.optional(v.nullable(v.lazy(() => DateComparator))),
  name: v.optional(v.nullable(v.lazy(() => StringComparator))),
  slugId: v.optional(v.nullable(v.lazy(() => StringComparator))),
  customIdentifier: v.optional(v.nullable(v.lazy(() => NullableStringComparator))),
  state: v.optional(v.nullable(v.lazy(() => StringComparator))),
  status: v.optional(v.nullable(v.lazy(() => ProjectStatusFilter))),
  priority: v.optional(v.nullable(v.lazy(() => NullableNumberComparator))),
  labels: v.optional(v.nullable(v.lazy(() => ProjectLabelCollectionFilter))),
  searchableContent: v.optional(v.nullable(v.lazy(() => ContentComparator))),
  startedAt: v.optional(v.nullable(v.lazy(() => NullableDateComparator))),
  completedAt: v.optional(v.nullable(v.lazy(() => NullableDateComparator))),
  canceledAt: v.optional(v.nullable(v.lazy(() => NullableDateComparator))),
  startDate: v.optional(v.nullable(v.lazy(() => NullableDateComparator))),
  targetDate: v.optional(v.nullable(v.lazy(() => NullableDateComparator))),
  health: v.optional(v.nullable(v.lazy(() => StringComparator))),
  healthWithAge: v.optional(v.nullable(v.lazy(() => StringComparator))),
  activityType: v.optional(v.nullable(v.lazy(() => StringComparator))),
  hasRelatedRelations: v.optional(v.nullable(v.lazy(() => RelationExistsComparator))),
  hasDependedOnByRelations: v.optional(v.nullable(v.lazy(() => RelationExistsComparator))),
  hasDependsOnRelations: v.optional(v.nullable(v.lazy(() => RelationExistsComparator))),
  hasBlockedByRelations: v.optional(v.nullable(v.lazy(() => RelationExistsComparator))),
  hasBlockingRelations: v.optional(v.nullable(v.lazy(() => RelationExistsComparator))),
  hasViolatedRelations: v.optional(v.nullable(v.lazy(() => RelationExistsComparator))),
  projectUpdates: v.optional(v.nullable(v.lazy(() => ProjectUpdatesCollectionFilter))),
  creator: v.optional(v.nullable(v.lazy(() => UserFilter))),
  lead: v.optional(v.nullable(v.lazy(() => NullableUserFilter))),
  members: v.optional(v.nullable(v.lazy(() => UserCollectionFilter))),
  issues: v.optional(v.nullable(v.lazy(() => IssueCollectionFilter))),
  roadmaps: v.optional(v.nullable(v.lazy(() => RoadmapCollectionFilter))),
  initiatives: v.optional(v.nullable(v.lazy(() => InitiativeCollectionFilter))),
  projectMilestones: v.optional(v.nullable(v.lazy(() => ProjectMilestoneCollectionFilter))),
  completedProjectMilestones: v.optional(v.nullable(v.lazy(() => ProjectMilestoneCollectionFilter))),
  nextProjectMilestone: v.optional(v.nullable(v.lazy(() => ProjectMilestoneFilter))),
  accessibleTeams: v.optional(v.nullable(v.lazy(() => TeamCollectionFilter))),
  leadTeam: v.optional(v.nullable(v.lazy(() => NullableTeamFilter))),
  lastAppliedTemplate: v.optional(v.nullable(v.lazy(() => NullableTemplateFilter))),
  needs: v.optional(v.nullable(v.lazy(() => CustomerNeedCollectionFilter))),
  customerCount: v.optional(v.nullable(v.lazy(() => NumberComparator))),
  customerImportantCount: v.optional(v.nullable(v.lazy(() => NumberComparator))),
  and: v.optional(v.nullable(v.array(v.lazy(() => ProjectCollectionFilter)))),
  or: v.optional(v.nullable(v.array(v.lazy(() => ProjectCollectionFilter)))),
  some: v.optional(v.nullable(v.lazy(() => ProjectFilter))),
  every: v.optional(v.nullable(v.lazy(() => ProjectFilter))),
  length: v.optional(v.nullable(v.lazy(() => NumberComparator))),
})

export const ProjectConnection: v.GenericSchema<unknown, T.ProjectConnection> = v.looseObject({
  edges: v.optional(v.array(v.lazy(() => ProjectEdge))),
  nodes: v.optional(v.array(v.lazy(() => Project))),
  pageInfo: v.optional(v.lazy(() => PageInfo)),
})

export const ProjectCreatedAtSort: v.GenericSchema<unknown, T.ProjectCreatedAtSort> = v.looseObject({
  nulls: v.optional(v.nullable(v.lazy(() => PaginationNulls))),
  order: v.optional(v.nullable(v.lazy(() => PaginationSortOrder))),
})

export const ProjectCreateInput: v.GenericSchema<unknown, T.ProjectCreateInput> = v.looseObject({
  id: v.optional(v.nullable(v.string())),
  name: v.string(),
  icon: v.optional(v.nullable(v.string())),
  color: v.optional(v.nullable(v.string())),
  statusId: v.optional(v.nullable(v.string())),
  description: v.optional(v.nullable(v.string())),
  content: v.optional(v.nullable(v.string())),
  teamIds: v.array(v.string()),
  convertedFromIssueId: v.optional(v.nullable(v.string())),
  lastAppliedTemplateId: v.optional(v.nullable(v.string())),
  templateId: v.optional(v.nullable(v.string())),
  useDefaultTemplate: v.optional(v.nullable(v.boolean())),
  leadId: v.optional(v.nullable(v.string())),
  memberIds: v.optional(v.nullable(v.array(v.string()))),
  startDate: v.optional(v.nullable(v.string())),
  startDateResolution: v.optional(v.nullable(v.lazy(() => DateResolutionType))),
  targetDate: v.optional(v.nullable(v.string())),
  targetDateResolution: v.optional(v.nullable(v.lazy(() => DateResolutionType))),
  sortOrder: v.optional(v.nullable(number())),
  prioritySortOrder: v.optional(v.nullable(number())),
  priority: v.optional(v.nullable(integer())),
  labelIds: v.optional(v.nullable(v.array(v.string()))),
})

export const ProjectEdge: v.GenericSchema<unknown, T.ProjectEdge> = v.looseObject({
  node: v.optional(v.lazy(() => Project)),
  cursor: v.optional(v.string()),
})

export const ProjectFilter: v.GenericSchema<unknown, T.ProjectFilter> = v.looseObject({
  id: v.optional(v.nullable(v.lazy(() => EntityIdentifierIDComparator))),
  createdAt: v.optional(v.nullable(v.lazy(() => DateComparator))),
  updatedAt: v.optional(v.nullable(v.lazy(() => DateComparator))),
  name: v.optional(v.nullable(v.lazy(() => StringComparator))),
  slugId: v.optional(v.nullable(v.lazy(() => StringComparator))),
  customIdentifier: v.optional(v.nullable(v.lazy(() => NullableStringComparator))),
  state: v.optional(v.nullable(v.lazy(() => StringComparator))),
  status: v.optional(v.nullable(v.lazy(() => ProjectStatusFilter))),
  priority: v.optional(v.nullable(v.lazy(() => NullableNumberComparator))),
  labels: v.optional(v.nullable(v.lazy(() => ProjectLabelCollectionFilter))),
  searchableContent: v.optional(v.nullable(v.lazy(() => ContentComparator))),
  startedAt: v.optional(v.nullable(v.lazy(() => NullableDateComparator))),
  completedAt: v.optional(v.nullable(v.lazy(() => NullableDateComparator))),
  canceledAt: v.optional(v.nullable(v.lazy(() => NullableDateComparator))),
  startDate: v.optional(v.nullable(v.lazy(() => NullableDateComparator))),
  targetDate: v.optional(v.nullable(v.lazy(() => NullableDateComparator))),
  health: v.optional(v.nullable(v.lazy(() => StringComparator))),
  healthWithAge: v.optional(v.nullable(v.lazy(() => StringComparator))),
  activityType: v.optional(v.nullable(v.lazy(() => StringComparator))),
  hasRelatedRelations: v.optional(v.nullable(v.lazy(() => RelationExistsComparator))),
  hasDependedOnByRelations: v.optional(v.nullable(v.lazy(() => RelationExistsComparator))),
  hasDependsOnRelations: v.optional(v.nullable(v.lazy(() => RelationExistsComparator))),
  hasBlockedByRelations: v.optional(v.nullable(v.lazy(() => RelationExistsComparator))),
  hasBlockingRelations: v.optional(v.nullable(v.lazy(() => RelationExistsComparator))),
  hasViolatedRelations: v.optional(v.nullable(v.lazy(() => RelationExistsComparator))),
  projectUpdates: v.optional(v.nullable(v.lazy(() => ProjectUpdatesCollectionFilter))),
  creator: v.optional(v.nullable(v.lazy(() => UserFilter))),
  lead: v.optional(v.nullable(v.lazy(() => NullableUserFilter))),
  members: v.optional(v.nullable(v.lazy(() => UserCollectionFilter))),
  issues: v.optional(v.nullable(v.lazy(() => IssueCollectionFilter))),
  roadmaps: v.optional(v.nullable(v.lazy(() => RoadmapCollectionFilter))),
  initiatives: v.optional(v.nullable(v.lazy(() => InitiativeCollectionFilter))),
  projectMilestones: v.optional(v.nullable(v.lazy(() => ProjectMilestoneCollectionFilter))),
  completedProjectMilestones: v.optional(v.nullable(v.lazy(() => ProjectMilestoneCollectionFilter))),
  nextProjectMilestone: v.optional(v.nullable(v.lazy(() => ProjectMilestoneFilter))),
  accessibleTeams: v.optional(v.nullable(v.lazy(() => TeamCollectionFilter))),
  leadTeam: v.optional(v.nullable(v.lazy(() => NullableTeamFilter))),
  lastAppliedTemplate: v.optional(v.nullable(v.lazy(() => NullableTemplateFilter))),
  needs: v.optional(v.nullable(v.lazy(() => CustomerNeedCollectionFilter))),
  customerCount: v.optional(v.nullable(v.lazy(() => NumberComparator))),
  customerImportantCount: v.optional(v.nullable(v.lazy(() => NumberComparator))),
  and: v.optional(v.nullable(v.array(v.lazy(() => ProjectFilter)))),
  or: v.optional(v.nullable(v.array(v.lazy(() => ProjectFilter)))),
})

export const ProjectFilterSuggestionPayload: v.GenericSchema<unknown, T.ProjectFilterSuggestionPayload> = v.looseObject(
  {
    filter: v.optional(v.nullable(v.unknown())),
    logId: v.optional(v.nullable(v.string())),
  },
)

export const ProjectHealthSort: v.GenericSchema<unknown, T.ProjectHealthSort> = v.looseObject({
  nulls: v.optional(v.nullable(v.lazy(() => PaginationNulls))),
  order: v.optional(v.nullable(v.lazy(() => PaginationSortOrder))),
})

export const ProjectHistory: v.GenericSchema<unknown, T.ProjectHistory> = v.looseObject({
  id: v.optional(v.string()),
  createdAt: v.optional(v.string()),
  updatedAt: v.optional(v.string()),
  archivedAt: v.optional(v.nullable(v.string())),
  entries: v.optional(v.unknown()),
  project: v.optional(v.lazy(() => Project)),
})

export const ProjectHistoryConnection: v.GenericSchema<unknown, T.ProjectHistoryConnection> = v.looseObject({
  edges: v.optional(v.array(v.lazy(() => ProjectHistoryEdge))),
  nodes: v.optional(v.array(v.lazy(() => ProjectHistory))),
  pageInfo: v.optional(v.lazy(() => PageInfo)),
})

export const ProjectHistoryEdge: v.GenericSchema<unknown, T.ProjectHistoryEdge> = v.looseObject({
  node: v.optional(v.lazy(() => ProjectHistory)),
  cursor: v.optional(v.string()),
})

export const ProjectLabel: v.GenericSchema<unknown, T.ProjectLabel> = v.looseObject({
  id: v.optional(v.string()),
  createdAt: v.optional(v.string()),
  updatedAt: v.optional(v.string()),
  archivedAt: v.optional(v.nullable(v.string())),
  name: v.optional(v.string()),
  description: v.optional(v.nullable(v.string())),
  color: v.optional(v.string()),
  isGroup: v.optional(v.boolean()),
  lastAppliedAt: v.optional(v.nullable(v.string())),
  groupType: v.optional(v.nullable(v.lazy(() => LabelGroupType))),
  organization: v.optional(v.lazy(() => Organization)),
  team: v.optional(v.nullable(v.lazy(() => Team))),
  creator: v.optional(v.nullable(v.lazy(() => User))),
  retiredBy: v.optional(v.nullable(v.lazy(() => User))),
  parent: v.optional(v.nullable(v.lazy(() => ProjectLabel))),
  inheritedFrom: v.optional(v.nullable(v.lazy(() => ProjectLabel))),
  projects: v.optional(v.lazy(() => ProjectConnection)),
  children: v.optional(v.lazy(() => ProjectLabelConnection)),
})

export const ProjectLabelCollectionFilter: v.GenericSchema<unknown, T.ProjectLabelCollectionFilter> = v.looseObject({
  id: v.optional(v.nullable(v.lazy(() => IDComparator))),
  createdAt: v.optional(v.nullable(v.lazy(() => DateComparator))),
  updatedAt: v.optional(v.nullable(v.lazy(() => DateComparator))),
  name: v.optional(v.nullable(v.lazy(() => StringComparator))),
  isGroup: v.optional(v.nullable(v.lazy(() => BooleanComparator))),
  creator: v.optional(v.nullable(v.lazy(() => NullableUserFilter))),
  team: v.optional(v.nullable(v.lazy(() => NullableTeamFilter))),
  parent: v.optional(v.nullable(v.lazy(() => ProjectLabelFilter))),
  null: v.optional(v.nullable(v.boolean())),
  and: v.optional(v.nullable(v.array(v.lazy(() => ProjectLabelCollectionFilter)))),
  or: v.optional(v.nullable(v.array(v.lazy(() => ProjectLabelCollectionFilter)))),
  some: v.optional(v.nullable(v.lazy(() => ProjectLabelCollectionFilter))),
  every: v.optional(v.nullable(v.lazy(() => ProjectLabelFilter))),
  length: v.optional(v.nullable(v.lazy(() => NumberComparator))),
})

export const ProjectLabelConnection: v.GenericSchema<unknown, T.ProjectLabelConnection> = v.looseObject({
  edges: v.optional(v.array(v.lazy(() => ProjectLabelEdge))),
  nodes: v.optional(v.array(v.lazy(() => ProjectLabel))),
  pageInfo: v.optional(v.lazy(() => PageInfo)),
})

export const ProjectLabelCreateInput: v.GenericSchema<unknown, T.ProjectLabelCreateInput> = v.looseObject({
  id: v.optional(v.nullable(v.string())),
  name: v.string(),
  description: v.optional(v.nullable(v.string())),
  color: v.optional(v.nullable(v.string())),
  parentId: v.optional(v.nullable(v.string())),
  isGroup: v.optional(v.nullable(v.boolean())),
  retiredAt: v.optional(v.nullable(v.string())),
  groupType: v.optional(v.nullable(v.lazy(() => LabelGroupType))),
  teamId: v.optional(v.nullable(v.string())),
})

export const ProjectLabelEdge: v.GenericSchema<unknown, T.ProjectLabelEdge> = v.looseObject({
  node: v.optional(v.lazy(() => ProjectLabel)),
  cursor: v.optional(v.string()),
})

export const ProjectLabelFilter: v.GenericSchema<unknown, T.ProjectLabelFilter> = v.looseObject({
  id: v.optional(v.nullable(v.lazy(() => IDComparator))),
  createdAt: v.optional(v.nullable(v.lazy(() => DateComparator))),
  updatedAt: v.optional(v.nullable(v.lazy(() => DateComparator))),
  name: v.optional(v.nullable(v.lazy(() => StringComparator))),
  isGroup: v.optional(v.nullable(v.lazy(() => BooleanComparator))),
  creator: v.optional(v.nullable(v.lazy(() => NullableUserFilter))),
  team: v.optional(v.nullable(v.lazy(() => NullableTeamFilter))),
  parent: v.optional(v.nullable(v.lazy(() => ProjectLabelFilter))),
  and: v.optional(v.nullable(v.array(v.lazy(() => ProjectLabelFilter)))),
  or: v.optional(v.nullable(v.array(v.lazy(() => ProjectLabelFilter)))),
})

export const ProjectLabelPayload: v.GenericSchema<unknown, T.ProjectLabelPayload> = v.looseObject({
  lastSyncId: v.optional(number()),
  projectLabel: v.optional(v.lazy(() => ProjectLabel)),
  success: v.optional(v.boolean()),
})

export const ProjectLabelUpdateInput: v.GenericSchema<unknown, T.ProjectLabelUpdateInput> = v.looseObject({
  name: v.optional(v.nullable(v.string())),
  description: v.optional(v.nullable(v.string())),
  parentId: v.optional(v.nullable(v.string())),
  color: v.optional(v.nullable(v.string())),
  isGroup: v.optional(v.nullable(v.boolean())),
  retiredAt: v.optional(v.nullable(v.string())),
  groupType: v.optional(v.nullable(v.lazy(() => LabelGroupType))),
})

export const ProjectLeadSort: v.GenericSchema<unknown, T.ProjectLeadSort> = v.looseObject({
  nulls: v.optional(v.nullable(v.lazy(() => PaginationNulls))),
  order: v.optional(v.nullable(v.lazy(() => PaginationSortOrder))),
})

export const ProjectManualSort: v.GenericSchema<unknown, T.ProjectManualSort> = v.looseObject({
  nulls: v.optional(v.nullable(v.lazy(() => PaginationNulls))),
  order: v.optional(v.nullable(v.lazy(() => PaginationSortOrder))),
})

export const ProjectMilestone: v.GenericSchema<unknown, T.ProjectMilestone> = v.looseObject({
  id: v.optional(v.string()),
  createdAt: v.optional(v.string()),
  updatedAt: v.optional(v.string()),
  archivedAt: v.optional(v.nullable(v.string())),
  name: v.optional(v.string()),
  documentContent: v.optional(v.nullable(v.lazy(() => DocumentContent))),
  targetDate: v.optional(v.nullable(v.string())),
  project: v.optional(v.lazy(() => Project)),
  sortOrder: v.optional(number()),
  description: v.optional(v.nullable(v.string())),
  status: v.optional(v.lazy(() => ProjectMilestoneStatus)),
  progress: v.optional(number()),
  issues: v.optional(v.lazy(() => IssueConnection)),
})

export const ProjectMilestoneCollectionFilter: v.GenericSchema<unknown, T.ProjectMilestoneCollectionFilter> =
  v.looseObject({
    id: v.optional(v.nullable(v.lazy(() => IDComparator))),
    createdAt: v.optional(v.nullable(v.lazy(() => DateComparator))),
    updatedAt: v.optional(v.nullable(v.lazy(() => DateComparator))),
    name: v.optional(v.nullable(v.lazy(() => NullableStringComparator))),
    targetDate: v.optional(v.nullable(v.lazy(() => NullableDateComparator))),
    project: v.optional(v.nullable(v.lazy(() => NullableProjectFilter))),
    and: v.optional(v.nullable(v.array(v.lazy(() => ProjectMilestoneCollectionFilter)))),
    or: v.optional(v.nullable(v.array(v.lazy(() => ProjectMilestoneCollectionFilter)))),
    some: v.optional(v.nullable(v.lazy(() => ProjectMilestoneFilter))),
    every: v.optional(v.nullable(v.lazy(() => ProjectMilestoneFilter))),
    length: v.optional(v.nullable(v.lazy(() => NumberComparator))),
  })

export const ProjectMilestoneConnection: v.GenericSchema<unknown, T.ProjectMilestoneConnection> = v.looseObject({
  edges: v.optional(v.array(v.lazy(() => ProjectMilestoneEdge))),
  nodes: v.optional(v.array(v.lazy(() => ProjectMilestone))),
  pageInfo: v.optional(v.lazy(() => PageInfo)),
})

export const ProjectMilestoneCreateInput: v.GenericSchema<unknown, T.ProjectMilestoneCreateInput> = v.looseObject({
  id: v.optional(v.nullable(v.string())),
  name: v.string(),
  description: v.optional(v.nullable(v.string())),
  targetDate: v.optional(v.nullable(v.string())),
  projectId: v.string(),
  sortOrder: v.optional(v.nullable(number())),
})

export const ProjectMilestoneEdge: v.GenericSchema<unknown, T.ProjectMilestoneEdge> = v.looseObject({
  node: v.optional(v.lazy(() => ProjectMilestone)),
  cursor: v.optional(v.string()),
})

export const ProjectMilestoneFilter: v.GenericSchema<unknown, T.ProjectMilestoneFilter> = v.looseObject({
  id: v.optional(v.nullable(v.lazy(() => IDComparator))),
  createdAt: v.optional(v.nullable(v.lazy(() => DateComparator))),
  updatedAt: v.optional(v.nullable(v.lazy(() => DateComparator))),
  name: v.optional(v.nullable(v.lazy(() => NullableStringComparator))),
  targetDate: v.optional(v.nullable(v.lazy(() => NullableDateComparator))),
  project: v.optional(v.nullable(v.lazy(() => NullableProjectFilter))),
  and: v.optional(v.nullable(v.array(v.lazy(() => ProjectMilestoneFilter)))),
  or: v.optional(v.nullable(v.array(v.lazy(() => ProjectMilestoneFilter)))),
})

export const ProjectMilestoneMoveInput: v.GenericSchema<unknown, T.ProjectMilestoneMoveInput> = v.looseObject({
  projectId: v.string(),
  newIssueTeamId: v.optional(v.nullable(v.string())),
  addIssueTeamToProject: v.optional(v.nullable(v.boolean())),
  undoIssueTeamIds: v.optional(v.nullable(v.array(v.lazy(() => ProjectMilestoneMoveIssueToTeamInput)))),
  undoProjectTeamIds: v.optional(v.nullable(v.lazy(() => ProjectMilestoneMoveProjectTeamsInput))),
})

export const ProjectMilestoneMoveIssueToTeam: v.GenericSchema<unknown, T.ProjectMilestoneMoveIssueToTeam> =
  v.looseObject({
    issueId: v.optional(v.string()),
    teamId: v.optional(v.string()),
  })

export const ProjectMilestoneMoveIssueToTeamInput: v.GenericSchema<unknown, T.ProjectMilestoneMoveIssueToTeamInput> =
  v.looseObject({
    issueId: v.string(),
    teamId: v.string(),
  })

export const ProjectMilestoneMovePayload: v.GenericSchema<unknown, T.ProjectMilestoneMovePayload> = v.looseObject({
  lastSyncId: v.optional(number()),
  projectMilestone: v.optional(v.lazy(() => ProjectMilestone)),
  success: v.optional(v.boolean()),
  previousIssueTeamIds: v.optional(v.nullable(v.array(v.lazy(() => ProjectMilestoneMoveIssueToTeam)))),
  previousProjectTeamIds: v.optional(v.nullable(v.lazy(() => ProjectMilestoneMoveProjectTeams))),
})

export const ProjectMilestoneMoveProjectTeams: v.GenericSchema<unknown, T.ProjectMilestoneMoveProjectTeams> =
  v.looseObject({
    projectId: v.optional(v.string()),
    teamIds: v.optional(v.array(v.string())),
  })

export const ProjectMilestoneMoveProjectTeamsInput: v.GenericSchema<unknown, T.ProjectMilestoneMoveProjectTeamsInput> =
  v.looseObject({
    projectId: v.string(),
    teamIds: v.array(v.string()),
  })

export const ProjectMilestonePayload: v.GenericSchema<unknown, T.ProjectMilestonePayload> = v.looseObject({
  lastSyncId: v.optional(number()),
  projectMilestone: v.optional(v.lazy(() => ProjectMilestone)),
  success: v.optional(v.boolean()),
})

export const ProjectMilestoneStatus: v.GenericSchema<unknown, T.ProjectMilestoneStatus> = v.picklist([
  "unstarted",
  "next",
  "overdue",
  "done",
])

export const ProjectMilestoneUpdateInput: v.GenericSchema<unknown, T.ProjectMilestoneUpdateInput> = v.looseObject({
  name: v.optional(v.nullable(v.string())),
  description: v.optional(v.nullable(v.string())),
  targetDate: v.optional(v.nullable(v.string())),
  sortOrder: v.optional(v.nullable(number())),
  projectId: v.optional(v.nullable(v.string())),
})

export const ProjectNameSort: v.GenericSchema<unknown, T.ProjectNameSort> = v.looseObject({
  nulls: v.optional(v.nullable(v.lazy(() => PaginationNulls))),
  order: v.optional(v.nullable(v.lazy(() => PaginationSortOrder))),
})

export const ProjectNotification: v.GenericSchema<unknown, T.ProjectNotification> = v.looseObject({
  commentId: v.optional(v.nullable(v.string())),
  parentCommentId: v.optional(v.nullable(v.string())),
  reactionEmoji: v.optional(v.nullable(v.string())),
  id: v.optional(v.string()),
  createdAt: v.optional(v.string()),
  updatedAt: v.optional(v.string()),
  archivedAt: v.optional(v.nullable(v.string())),
  type: v.optional(v.string()),
  actor: v.optional(v.nullable(v.lazy(() => User))),
  externalUserActor: v.optional(v.nullable(v.lazy(() => ExternalUser))),
  user: v.optional(v.lazy(() => User)),
  readAt: v.optional(v.nullable(v.string())),
  emailedAt: v.optional(v.nullable(v.string())),
  snoozedUntilAt: v.optional(v.nullable(v.string())),
  unsnoozedAt: v.optional(v.nullable(v.string())),
  category: v.optional(v.lazy(() => NotificationCategory)),
  botActor: v.optional(v.nullable(v.lazy(() => ActorBot))),
  projectId: v.optional(v.string()),
  projectMilestoneId: v.optional(v.nullable(v.string())),
  projectUpdateId: v.optional(v.nullable(v.string())),
  project: v.optional(v.lazy(() => Project)),
  document: v.optional(v.nullable(v.lazy(() => Document))),
  projectUpdate: v.optional(v.nullable(v.lazy(() => ProjectUpdate))),
  comment: v.optional(v.nullable(v.lazy(() => Comment))),
  parentComment: v.optional(v.nullable(v.lazy(() => Comment))),
})

export const ProjectNotificationSubscription: v.GenericSchema<unknown, T.ProjectNotificationSubscription> =
  v.looseObject({
    id: v.optional(v.string()),
    createdAt: v.optional(v.string()),
    updatedAt: v.optional(v.string()),
    archivedAt: v.optional(v.nullable(v.string())),
    subscriber: v.optional(v.lazy(() => User)),
    customer: v.optional(v.nullable(v.lazy(() => Customer))),
    customView: v.optional(v.nullable(v.lazy(() => CustomView))),
    cycle: v.optional(v.nullable(v.lazy(() => Cycle))),
    label: v.optional(v.nullable(v.lazy(() => IssueLabel))),
    project: v.optional(v.lazy(() => Project)),
    initiative: v.optional(v.nullable(v.lazy(() => Initiative))),
    team: v.optional(v.nullable(v.lazy(() => Team))),
    user: v.optional(v.nullable(v.lazy(() => User))),
    contextViewType: v.optional(v.nullable(v.lazy(() => ContextViewType))),
    userContextViewType: v.optional(v.nullable(v.lazy(() => UserContextViewType))),
    active: v.optional(v.boolean()),
    includeSubInitiativeUpdates: v.optional(v.boolean()),
    notificationSubscriptionTypes: v.optional(v.array(v.string())),
  })

export const ProjectPayload: v.GenericSchema<unknown, T.ProjectPayload> = v.looseObject({
  lastSyncId: v.optional(number()),
  project: v.optional(v.nullable(v.lazy(() => Project))),
  success: v.optional(v.boolean()),
})

export const ProjectPrioritySort: v.GenericSchema<unknown, T.ProjectPrioritySort> = v.looseObject({
  nulls: v.optional(v.nullable(v.lazy(() => PaginationNulls))),
  order: v.optional(v.nullable(v.lazy(() => PaginationSortOrder))),
  noPriorityFirst: v.optional(v.nullable(v.boolean())),
})

export const ProjectRelation: v.GenericSchema<unknown, T.ProjectRelation> = v.looseObject({
  id: v.optional(v.string()),
  createdAt: v.optional(v.string()),
  updatedAt: v.optional(v.string()),
  archivedAt: v.optional(v.nullable(v.string())),
  type: v.optional(v.string()),
  project: v.optional(v.lazy(() => Project)),
  projectMilestone: v.optional(v.nullable(v.lazy(() => ProjectMilestone))),
  anchorType: v.optional(v.string()),
  relatedProject: v.optional(v.lazy(() => Project)),
  relatedProjectMilestone: v.optional(v.nullable(v.lazy(() => ProjectMilestone))),
  relatedAnchorType: v.optional(v.string()),
  user: v.optional(v.nullable(v.lazy(() => User))),
})

export const ProjectRelationConnection: v.GenericSchema<unknown, T.ProjectRelationConnection> = v.looseObject({
  edges: v.optional(v.array(v.lazy(() => ProjectRelationEdge))),
  nodes: v.optional(v.array(v.lazy(() => ProjectRelation))),
  pageInfo: v.optional(v.lazy(() => PageInfo)),
})

export const ProjectRelationCreateInput: v.GenericSchema<unknown, T.ProjectRelationCreateInput> = v.looseObject({
  id: v.optional(v.nullable(v.string())),
  type: v.string(),
  projectId: v.string(),
  projectMilestoneId: v.optional(v.nullable(v.string())),
  anchorType: v.string(),
  relatedProjectId: v.string(),
  relatedProjectMilestoneId: v.optional(v.nullable(v.string())),
  relatedAnchorType: v.string(),
})

export const ProjectRelationEdge: v.GenericSchema<unknown, T.ProjectRelationEdge> = v.looseObject({
  node: v.optional(v.lazy(() => ProjectRelation)),
  cursor: v.optional(v.string()),
})

export const ProjectRelationPayload: v.GenericSchema<unknown, T.ProjectRelationPayload> = v.looseObject({
  lastSyncId: v.optional(number()),
  projectRelation: v.optional(v.lazy(() => ProjectRelation)),
  success: v.optional(v.boolean()),
})

export const ProjectRelationUpdateInput: v.GenericSchema<unknown, T.ProjectRelationUpdateInput> = v.looseObject({
  type: v.optional(v.nullable(v.string())),
  projectId: v.optional(v.nullable(v.string())),
  projectMilestoneId: v.optional(v.nullable(v.string())),
  anchorType: v.optional(v.nullable(v.string())),
  relatedProjectId: v.optional(v.nullable(v.string())),
  relatedProjectMilestoneId: v.optional(v.nullable(v.string())),
  relatedAnchorType: v.optional(v.nullable(v.string())),
})

export const ProjectSearchPayload: v.GenericSchema<unknown, T.ProjectSearchPayload> = v.looseObject({
  edges: v.optional(v.array(v.lazy(() => ProjectSearchResultEdge))),
  nodes: v.optional(v.array(v.lazy(() => ProjectSearchResult))),
  pageInfo: v.optional(v.lazy(() => PageInfo)),
  archivePayload: v.optional(v.lazy(() => ArchiveResponse)),
  totalCount: v.optional(number()),
})

export const ProjectSearchResult: v.GenericSchema<unknown, T.ProjectSearchResult> = v.looseObject({
  id: v.optional(v.string()),
  createdAt: v.optional(v.string()),
  updatedAt: v.optional(v.string()),
  archivedAt: v.optional(v.nullable(v.string())),
  updateReminderFrequencyInWeeks: v.optional(v.nullable(number())),
  updateReminderFrequency: v.optional(v.nullable(number())),
  frequencyResolution: v.optional(v.lazy(() => FrequencyResolutionType)),
  updateRemindersDay: v.optional(v.nullable(v.lazy(() => Day))),
  updateRemindersHour: v.optional(v.nullable(number())),
  name: v.optional(v.string()),
  description: v.optional(v.string()),
  slugId: v.optional(v.string()),
  icon: v.optional(v.nullable(v.string())),
  color: v.optional(v.string()),
  status: v.optional(v.lazy(() => ProjectStatus)),
  creator: v.optional(v.nullable(v.lazy(() => User))),
  lead: v.optional(v.nullable(v.lazy(() => User))),
  projectUpdateRemindersPausedUntilAt: v.optional(v.nullable(v.string())),
  startDate: v.optional(v.nullable(v.string())),
  startDateResolution: v.optional(v.nullable(v.lazy(() => DateResolutionType))),
  targetDate: v.optional(v.nullable(v.string())),
  targetDateResolution: v.optional(v.nullable(v.lazy(() => DateResolutionType))),
  startedAt: v.optional(v.nullable(v.string())),
  completedAt: v.optional(v.nullable(v.string())),
  canceledAt: v.optional(v.nullable(v.string())),
  autoArchivedAt: v.optional(v.nullable(v.string())),
  trashed: v.optional(v.nullable(v.boolean())),
  sortOrder: v.optional(number()),
  prioritySortOrder: v.optional(number()),
  convertedFromIssue: v.optional(v.nullable(v.lazy(() => Issue))),
  lastAppliedTemplate: v.optional(v.nullable(v.lazy(() => Template))),
  priority: v.optional(integer()),
  lastUpdate: v.optional(v.nullable(v.lazy(() => ProjectUpdate))),
  health: v.optional(v.nullable(v.lazy(() => ProjectUpdateHealthType))),
  healthUpdatedAt: v.optional(v.nullable(v.string())),
  issueCountHistory: v.optional(v.array(number())),
  completedIssueCountHistory: v.optional(v.array(number())),
  scopeHistory: v.optional(v.array(number())),
  completedScopeHistory: v.optional(v.array(number())),
  inProgressScopeHistory: v.optional(v.array(number())),
  slackNewIssue: v.optional(v.boolean()),
  slackIssueComments: v.optional(v.boolean()),
  slackIssueStatuses: v.optional(v.boolean()),
  labelIds: v.optional(v.array(v.string())),
  favorite: v.optional(v.nullable(v.lazy(() => Favorite))),
  url: v.optional(v.string()),
  initiatives: v.optional(v.lazy(() => InitiativeConnection)),
  initiativeToProjects: v.optional(v.lazy(() => InitiativeToProjectConnection)),
  teams: v.optional(v.lazy(() => TeamConnection)),
  members: v.optional(v.lazy(() => UserConnection)),
  projectUpdates: v.optional(v.lazy(() => ProjectUpdateConnection)),
  documents: v.optional(v.lazy(() => DocumentConnection)),
  projectMilestones: v.optional(v.lazy(() => ProjectMilestoneConnection)),
  issues: v.optional(v.lazy(() => IssueConnection)),
  externalLinks: v.optional(v.lazy(() => EntityExternalLinkConnection)),
  attachments: v.optional(v.lazy(() => ProjectAttachmentConnection)),
  resourceCount: v.optional(integer()),
  history: v.optional(v.lazy(() => ProjectHistoryConnection)),
  labels: v.optional(v.lazy(() => ProjectLabelConnection)),
  progress: v.optional(number()),
  scope: v.optional(number()),
  integrationsSettings: v.optional(v.nullable(v.lazy(() => IntegrationsSettings))),
  slackChannelId: v.optional(v.nullable(v.string())),
  microsoftTeamsChannelId: v.optional(v.nullable(v.string())),
  content: v.optional(v.nullable(v.string())),
  documentContent: v.optional(v.nullable(v.lazy(() => DocumentContent))),
  comments: v.optional(v.lazy(() => CommentConnection)),
  relations: v.optional(v.lazy(() => ProjectRelationConnection)),
  inverseRelations: v.optional(v.lazy(() => ProjectRelationConnection)),
  needs: v.optional(v.lazy(() => CustomerNeedConnection)),
  state: v.optional(v.string()),
  priorityLabel: v.optional(v.string()),
  syncedWith: v.optional(v.nullable(v.array(v.lazy(() => ExternalEntityInfo)))),
  metadata: v.optional(v.unknown()),
})

export const ProjectSearchResultEdge: v.GenericSchema<unknown, T.ProjectSearchResultEdge> = v.looseObject({
  node: v.optional(v.lazy(() => ProjectSearchResult)),
  cursor: v.optional(v.string()),
})

export const ProjectSort: v.GenericSchema<unknown, T.ProjectSort> = v.looseObject({
  nulls: v.optional(v.nullable(v.lazy(() => PaginationNulls))),
  order: v.optional(v.nullable(v.lazy(() => PaginationSortOrder))),
})

export const ProjectSortInput: v.GenericSchema<unknown, T.ProjectSortInput> = v.looseObject({
  name: v.optional(v.nullable(v.lazy(() => ProjectNameSort))),
  status: v.optional(v.nullable(v.lazy(() => ProjectStatusSort))),
  priority: v.optional(v.nullable(v.lazy(() => ProjectPrioritySort))),
  manual: v.optional(v.nullable(v.lazy(() => ProjectManualSort))),
  targetDate: v.optional(v.nullable(v.lazy(() => TargetDateSort))),
  startDate: v.optional(v.nullable(v.lazy(() => StartDateSort))),
  createdAt: v.optional(v.nullable(v.lazy(() => ProjectCreatedAtSort))),
  updatedAt: v.optional(v.nullable(v.lazy(() => ProjectUpdatedAtSort))),
  health: v.optional(v.nullable(v.lazy(() => ProjectHealthSort))),
  lead: v.optional(v.nullable(v.lazy(() => ProjectLeadSort))),
})

export const ProjectStatus: v.GenericSchema<unknown, T.ProjectStatus> = v.looseObject({
  id: v.optional(v.string()),
  createdAt: v.optional(v.string()),
  updatedAt: v.optional(v.string()),
  archivedAt: v.optional(v.nullable(v.string())),
  name: v.optional(v.string()),
  color: v.optional(v.string()),
  description: v.optional(v.nullable(v.string())),
  position: v.optional(number()),
  type: v.optional(v.lazy(() => ProjectStatusType)),
  indefinite: v.optional(v.boolean()),
})

export const ProjectStatusArchivePayload: v.GenericSchema<unknown, T.ProjectStatusArchivePayload> = v.looseObject({
  lastSyncId: v.optional(number()),
  success: v.optional(v.boolean()),
  entity: v.optional(v.nullable(v.lazy(() => ProjectStatus))),
})

export const ProjectStatusConnection: v.GenericSchema<unknown, T.ProjectStatusConnection> = v.looseObject({
  edges: v.optional(v.array(v.lazy(() => ProjectStatusEdge))),
  nodes: v.optional(v.array(v.lazy(() => ProjectStatus))),
  pageInfo: v.optional(v.lazy(() => PageInfo)),
})

export const ProjectStatusCreateInput: v.GenericSchema<unknown, T.ProjectStatusCreateInput> = v.looseObject({
  id: v.optional(v.nullable(v.string())),
  name: v.string(),
  color: v.string(),
  description: v.optional(v.nullable(v.string())),
  position: number(),
  type: v.lazy(() => ProjectStatusType),
  indefinite: v.optional(v.nullable(v.boolean())),
})

export const ProjectStatusEdge: v.GenericSchema<unknown, T.ProjectStatusEdge> = v.looseObject({
  node: v.optional(v.lazy(() => ProjectStatus)),
  cursor: v.optional(v.string()),
})

export const ProjectStatusFilter: v.GenericSchema<unknown, T.ProjectStatusFilter> = v.looseObject({
  id: v.optional(v.nullable(v.lazy(() => IDComparator))),
  createdAt: v.optional(v.nullable(v.lazy(() => DateComparator))),
  updatedAt: v.optional(v.nullable(v.lazy(() => DateComparator))),
  name: v.optional(v.nullable(v.lazy(() => StringComparator))),
  description: v.optional(v.nullable(v.lazy(() => StringComparator))),
  position: v.optional(v.nullable(v.lazy(() => NumberComparator))),
  type: v.optional(v.nullable(v.lazy(() => StringComparator))),
  team: v.optional(v.nullable(v.lazy(() => NullableTeamFilter))),
  projects: v.optional(v.nullable(v.lazy(() => ProjectCollectionFilter))),
  and: v.optional(v.nullable(v.array(v.lazy(() => ProjectStatusFilter)))),
  or: v.optional(v.nullable(v.array(v.lazy(() => ProjectStatusFilter)))),
})

export const ProjectStatusPayload: v.GenericSchema<unknown, T.ProjectStatusPayload> = v.looseObject({
  lastSyncId: v.optional(number()),
  status: v.optional(v.lazy(() => ProjectStatus)),
  success: v.optional(v.boolean()),
})

export const ProjectStatusSort: v.GenericSchema<unknown, T.ProjectStatusSort> = v.looseObject({
  nulls: v.optional(v.nullable(v.lazy(() => PaginationNulls))),
  order: v.optional(v.nullable(v.lazy(() => PaginationSortOrder))),
})

export const ProjectStatusType: v.GenericSchema<unknown, T.ProjectStatusType> = v.picklist([
  "backlog",
  "planned",
  "started",
  "paused",
  "completed",
  "canceled",
])

export const ProjectStatusUpdateInput: v.GenericSchema<unknown, T.ProjectStatusUpdateInput> = v.looseObject({
  name: v.optional(v.nullable(v.string())),
  color: v.optional(v.nullable(v.string())),
  description: v.optional(v.nullable(v.string())),
  position: v.optional(v.nullable(number())),
  type: v.optional(v.nullable(v.lazy(() => ProjectStatusType))),
  indefinite: v.optional(v.nullable(v.boolean())),
})

export const ProjectTab: v.GenericSchema<unknown, T.ProjectTab> = v.picklist([
  "customers",
  "documents",
  "issues",
  "loops",
  "updates",
])

export const ProjectUpdate: v.GenericSchema<unknown, T.ProjectUpdate> = v.looseObject({
  id: v.optional(v.string()),
  createdAt: v.optional(v.string()),
  updatedAt: v.optional(v.string()),
  archivedAt: v.optional(v.nullable(v.string())),
  body: v.optional(v.string()),
  editedAt: v.optional(v.nullable(v.string())),
  reactionData: v.optional(v.unknown()),
  slugId: v.optional(v.string()),
  shortSummary: v.optional(v.nullable(v.string())),
  project: v.optional(v.lazy(() => Project)),
  health: v.optional(v.lazy(() => ProjectUpdateHealthType)),
  user: v.optional(v.lazy(() => User)),
  isDiffHidden: v.optional(v.boolean()),
  url: v.optional(v.string()),
  isStale: v.optional(v.boolean()),
  diff: v.optional(v.nullable(v.unknown())),
  diffMarkdown: v.optional(v.nullable(v.string())),
  reactions: v.optional(v.array(v.lazy(() => Reaction))),
  comments: v.optional(v.lazy(() => CommentConnection)),
  commentCount: v.optional(integer()),
})

export const ProjectUpdateArchivePayload: v.GenericSchema<unknown, T.ProjectUpdateArchivePayload> = v.looseObject({
  lastSyncId: v.optional(number()),
  success: v.optional(v.boolean()),
  entity: v.optional(v.nullable(v.lazy(() => ProjectUpdate))),
})

export const ProjectUpdateConnection: v.GenericSchema<unknown, T.ProjectUpdateConnection> = v.looseObject({
  edges: v.optional(v.array(v.lazy(() => ProjectUpdateEdge))),
  nodes: v.optional(v.array(v.lazy(() => ProjectUpdate))),
  pageInfo: v.optional(v.lazy(() => PageInfo)),
})

export const ProjectUpdateCreateInput: v.GenericSchema<unknown, T.ProjectUpdateCreateInput> = v.looseObject({
  id: v.optional(v.nullable(v.string())),
  body: v.optional(v.nullable(v.string())),
  projectId: v.string(),
  health: v.optional(v.nullable(v.lazy(() => ProjectUpdateHealthType))),
  isDiffHidden: v.optional(v.nullable(v.boolean())),
})

export const ProjectUpdatedAtSort: v.GenericSchema<unknown, T.ProjectUpdatedAtSort> = v.looseObject({
  nulls: v.optional(v.nullable(v.lazy(() => PaginationNulls))),
  order: v.optional(v.nullable(v.lazy(() => PaginationSortOrder))),
})

export const ProjectUpdateEdge: v.GenericSchema<unknown, T.ProjectUpdateEdge> = v.looseObject({
  node: v.optional(v.lazy(() => ProjectUpdate)),
  cursor: v.optional(v.string()),
})

export const ProjectUpdateFilter: v.GenericSchema<unknown, T.ProjectUpdateFilter> = v.looseObject({
  id: v.optional(v.nullable(v.lazy(() => IDComparator))),
  createdAt: v.optional(v.nullable(v.lazy(() => DateComparator))),
  updatedAt: v.optional(v.nullable(v.lazy(() => DateComparator))),
  user: v.optional(v.nullable(v.lazy(() => UserFilter))),
  project: v.optional(v.nullable(v.lazy(() => ProjectFilter))),
  reactions: v.optional(v.nullable(v.lazy(() => ReactionCollectionFilter))),
  and: v.optional(v.nullable(v.array(v.lazy(() => ProjectUpdateFilter)))),
  or: v.optional(v.nullable(v.array(v.lazy(() => ProjectUpdateFilter)))),
})

export const ProjectUpdateHealthType: v.GenericSchema<unknown, T.ProjectUpdateHealthType> = v.picklist([
  "onTrack",
  "atRisk",
  "offTrack",
])

export const ProjectUpdateInput: v.GenericSchema<unknown, T.ProjectUpdateInput> = v.looseObject({
  statusId: v.optional(v.nullable(v.string())),
  name: v.optional(v.nullable(v.string())),
  description: v.optional(v.nullable(v.string())),
  content: v.optional(v.nullable(v.string())),
  convertedFromIssueId: v.optional(v.nullable(v.string())),
  lastAppliedTemplateId: v.optional(v.nullable(v.string())),
  icon: v.optional(v.nullable(v.string())),
  color: v.optional(v.nullable(v.string())),
  teamIds: v.optional(v.nullable(v.array(v.string()))),
  projectUpdateRemindersPausedUntilAt: v.optional(v.nullable(v.string())),
  updateReminderFrequencyInWeeks: v.optional(v.nullable(number())),
  updateReminderFrequency: v.optional(v.nullable(number())),
  frequencyResolution: v.optional(v.nullable(v.lazy(() => FrequencyResolutionType))),
  updateRemindersDay: v.optional(v.nullable(v.lazy(() => Day))),
  updateRemindersHour: v.optional(v.nullable(integer())),
  leadId: v.optional(v.nullable(v.string())),
  memberIds: v.optional(v.nullable(v.array(v.string()))),
  startDate: v.optional(v.nullable(v.string())),
  startDateResolution: v.optional(v.nullable(v.lazy(() => DateResolutionType))),
  targetDate: v.optional(v.nullable(v.string())),
  targetDateResolution: v.optional(v.nullable(v.lazy(() => DateResolutionType))),
  completedAt: v.optional(v.nullable(v.string())),
  canceledAt: v.optional(v.nullable(v.string())),
  slackNewIssue: v.optional(v.nullable(v.boolean())),
  slackIssueComments: v.optional(v.nullable(v.boolean())),
  slackIssueStatuses: v.optional(v.nullable(v.boolean())),
  sortOrder: v.optional(v.nullable(number())),
  prioritySortOrder: v.optional(v.nullable(number())),
  trashed: v.optional(v.nullable(v.boolean())),
  priority: v.optional(v.nullable(integer())),
  labelIds: v.optional(v.nullable(v.array(v.string()))),
})

export const ProjectUpdatePayload: v.GenericSchema<unknown, T.ProjectUpdatePayload> = v.looseObject({
  lastSyncId: v.optional(number()),
  projectUpdate: v.optional(v.lazy(() => ProjectUpdate)),
  success: v.optional(v.boolean()),
})

export const ProjectUpdateReminderFrequency: v.GenericSchema<unknown, T.ProjectUpdateReminderFrequency> = v.picklist([
  "week",
  "twoWeeks",
  "month",
  "never",
])

export const ProjectUpdateReminderPayload: v.GenericSchema<unknown, T.ProjectUpdateReminderPayload> = v.looseObject({
  lastSyncId: v.optional(number()),
  success: v.optional(v.boolean()),
})

export const ProjectUpdatesCollectionFilter: v.GenericSchema<unknown, T.ProjectUpdatesCollectionFilter> = v.looseObject(
  {
    id: v.optional(v.nullable(v.lazy(() => IDComparator))),
    createdAt: v.optional(v.nullable(v.lazy(() => DateComparator))),
    updatedAt: v.optional(v.nullable(v.lazy(() => DateComparator))),
    health: v.optional(v.nullable(v.lazy(() => StringComparator))),
    and: v.optional(v.nullable(v.array(v.lazy(() => ProjectUpdatesCollectionFilter)))),
    or: v.optional(v.nullable(v.array(v.lazy(() => ProjectUpdatesCollectionFilter)))),
    some: v.optional(v.nullable(v.lazy(() => ProjectUpdatesFilter))),
    every: v.optional(v.nullable(v.lazy(() => ProjectUpdatesFilter))),
    length: v.optional(v.nullable(v.lazy(() => NumberComparator))),
  },
)

export const ProjectUpdatesFilter: v.GenericSchema<unknown, T.ProjectUpdatesFilter> = v.looseObject({
  id: v.optional(v.nullable(v.lazy(() => IDComparator))),
  createdAt: v.optional(v.nullable(v.lazy(() => DateComparator))),
  updatedAt: v.optional(v.nullable(v.lazy(() => DateComparator))),
  health: v.optional(v.nullable(v.lazy(() => StringComparator))),
  and: v.optional(v.nullable(v.array(v.lazy(() => ProjectUpdatesFilter)))),
  or: v.optional(v.nullable(v.array(v.lazy(() => ProjectUpdatesFilter)))),
})

export const ProjectUpdateUpdateInput: v.GenericSchema<unknown, T.ProjectUpdateUpdateInput> = v.looseObject({
  body: v.optional(v.nullable(v.string())),
  health: v.optional(v.nullable(v.lazy(() => ProjectUpdateHealthType))),
})

export const PullRequestComment: v.GenericSchema<unknown, T.PullRequestComment> = v.looseObject({
  id: v.optional(v.string()),
  createdAt: v.optional(v.string()),
  updatedAt: v.optional(v.string()),
  archivedAt: v.optional(v.nullable(v.string())),
  bodyData: v.optional(v.unknown()),
  externalThreadId: v.optional(v.nullable(v.string())),
  externalReviewId: v.optional(v.nullable(v.string())),
  decision: v.optional(v.nullable(v.lazy(() => PullRequestReviewerDecision))),
  editedAt: v.optional(v.nullable(v.string())),
  resolvedAt: v.optional(v.nullable(v.string())),
  pendingReviewId: v.optional(v.nullable(v.string())),
  reactionData: v.optional(v.unknown()),
})

export const PullRequestFileReview: v.GenericSchema<unknown, T.PullRequestFileReview> = v.looseObject({
  path: v.optional(v.string()),
  state: v.optional(v.string()),
  reviewedAtSha: v.optional(v.nullable(v.string())),
  reviewedAt: v.optional(v.nullable(v.string())),
})

export const PullRequestNotification: v.GenericSchema<unknown, T.PullRequestNotification> = v.looseObject({
  id: v.optional(v.string()),
  createdAt: v.optional(v.string()),
  updatedAt: v.optional(v.string()),
  archivedAt: v.optional(v.nullable(v.string())),
  type: v.optional(v.string()),
  actor: v.optional(v.nullable(v.lazy(() => User))),
  externalUserActor: v.optional(v.nullable(v.lazy(() => ExternalUser))),
  user: v.optional(v.lazy(() => User)),
  readAt: v.optional(v.nullable(v.string())),
  emailedAt: v.optional(v.nullable(v.string())),
  snoozedUntilAt: v.optional(v.nullable(v.string())),
  unsnoozedAt: v.optional(v.nullable(v.string())),
  category: v.optional(v.lazy(() => NotificationCategory)),
  botActor: v.optional(v.nullable(v.lazy(() => ActorBot))),
  pullRequestId: v.optional(v.string()),
  pullRequestCommentId: v.optional(v.nullable(v.string())),
})

export const PullRequestPendingReview: v.GenericSchema<unknown, T.PullRequestPendingReview> = v.looseObject({
  id: v.optional(v.string()),
  createdAt: v.optional(v.string()),
  updatedAt: v.optional(v.string()),
  archivedAt: v.optional(v.nullable(v.string())),
  decision: v.optional(v.nullable(v.string())),
  submittedAt: v.optional(v.nullable(v.string())),
  reviewedFiles: v.optional(v.array(v.lazy(() => PullRequestFileReview))),
})

export const PullRequestReferenceInput: v.GenericSchema<unknown, T.PullRequestReferenceInput> = v.looseObject({
  repositoryOwner: v.string(),
  repositoryName: v.string(),
  number: integer(),
})

export const PullRequestReviewerDecision: v.GenericSchema<unknown, T.PullRequestReviewerDecision> = v.picklist([
  "pending",
  "commented",
  "approved",
  "changesRequested",
  "dismissed",
])

export const PullRequestUserState: v.GenericSchema<unknown, T.PullRequestUserState> = v.looseObject({
  id: v.optional(v.string()),
  createdAt: v.optional(v.string()),
  updatedAt: v.optional(v.string()),
  archivedAt: v.optional(v.nullable(v.string())),
})

export const PushSubscription: v.GenericSchema<unknown, T.PushSubscription> = v.looseObject({
  id: v.optional(v.string()),
  createdAt: v.optional(v.string()),
  updatedAt: v.optional(v.string()),
  archivedAt: v.optional(v.nullable(v.string())),
})

export const PushSubscriptionCreateInput: v.GenericSchema<unknown, T.PushSubscriptionCreateInput> = v.looseObject({
  id: v.optional(v.nullable(v.string())),
  data: v.string(),
  type: v.optional(v.nullable(v.lazy(() => PushSubscriptionType))),
})

export const PushSubscriptionPayload: v.GenericSchema<unknown, T.PushSubscriptionPayload> = v.looseObject({
  lastSyncId: v.optional(number()),
  entity: v.optional(v.lazy(() => PushSubscription)),
  success: v.optional(v.boolean()),
})

export const PushSubscriptionTestPayload: v.GenericSchema<unknown, T.PushSubscriptionTestPayload> = v.looseObject({
  success: v.optional(v.boolean()),
})

export const PushSubscriptionType: v.GenericSchema<unknown, T.PushSubscriptionType> = v.picklist([
  "web",
  "apple",
  "appleDevelopment",
  "firebase",
])

export const Query: v.GenericSchema<unknown, T.Query> = v.looseObject({
  organization: v.optional(v.lazy(() => Organization)),
  organizationExists: v.optional(v.lazy(() => OrganizationExistsPayload)),
  agentActivities: v.optional(v.lazy(() => AgentActivityConnection)),
  agentActivity: v.optional(v.lazy(() => AgentActivity)),
  agentSessions: v.optional(v.lazy(() => AgentSessionConnection)),
  agentSession: v.optional(v.lazy(() => AgentSession)),
  agentSkills: v.optional(v.lazy(() => AgentSkillConnection)),
  agentSkill: v.optional(v.lazy(() => AgentSkill)),
  applicationInfo: v.optional(v.lazy(() => Application)),
  oauthApplicationCodingSessionTrustedSource: v.optional(v.lazy(() => OAuthApplicationCodingSessionTrustedSource)),
  attachments: v.optional(v.lazy(() => AttachmentConnection)),
  attachment: v.optional(v.lazy(() => Attachment)),
  attachmentsForURL: v.optional(v.lazy(() => AttachmentConnection)),
  attachmentIssue: v.optional(v.lazy(() => Issue)),
  attachmentSources: v.optional(v.lazy(() => AttachmentSourcesPayload)),
  auditEntryTypes: v.optional(v.array(v.lazy(() => AuditEntryType))),
  auditEntries: v.optional(v.lazy(() => AuditEntryConnection)),
  availableUsers: v.optional(v.lazy(() => AuthResolverResponse)),
  authenticationSessions: v.optional(v.array(v.lazy(() => AuthenticationSessionResponse))),
  ssoUrlFromEmail: v.optional(v.lazy(() => SsoUrlFromEmailResponse)),
  comments: v.optional(v.lazy(() => CommentConnection)),
  comment: v.optional(v.lazy(() => Comment)),
  projects: v.optional(v.lazy(() => ProjectConnection)),
  project: v.optional(v.lazy(() => Project)),
  projectFilterSuggestion: v.optional(v.lazy(() => ProjectFilterSuggestionPayload)),
  customViews: v.optional(v.lazy(() => CustomViewConnection)),
  customView: v.optional(v.lazy(() => CustomView)),
  customViewHasSubscribers: v.optional(v.lazy(() => CustomViewHasSubscribersPayload)),
  customerNeeds: v.optional(v.lazy(() => CustomerNeedConnection)),
  customerNeed: v.optional(v.lazy(() => CustomerNeed)),
  issueTitleSuggestionFromCustomerRequest: v.optional(v.lazy(() => IssueTitleSuggestionFromCustomerRequestPayload)),
  customers: v.optional(v.lazy(() => CustomerConnection)),
  customer: v.optional(v.lazy(() => Customer)),
  customerStatuses: v.optional(v.lazy(() => CustomerStatusConnection)),
  customerStatus: v.optional(v.lazy(() => CustomerStatus)),
  customerTiers: v.optional(v.lazy(() => CustomerTierConnection)),
  customerTier: v.optional(v.lazy(() => CustomerTier)),
  cycles: v.optional(v.lazy(() => CycleConnection)),
  cycle: v.optional(v.lazy(() => Cycle)),
  dependencyPackageMetadata: v.optional(v.array(v.lazy(() => DependencyPackageMetadataResult))),
  documentContentHistory: v.optional(v.lazy(() => DocumentContentHistoryPayload)),
  documents: v.optional(v.lazy(() => DocumentConnection)),
  document: v.optional(v.lazy(() => Document)),
  emailIntakeAddress: v.optional(v.lazy(() => EmailIntakeAddress)),
  emailIntakeAddresses: v.optional(v.lazy(() => EmailIntakeAddressConnection)),
  emojis: v.optional(v.lazy(() => EmojiConnection)),
  emoji: v.optional(v.lazy(() => Emoji)),
  entityExternalLink: v.optional(v.lazy(() => EntityExternalLink)),
  externalUsers: v.optional(v.lazy(() => ExternalUserConnection)),
  externalUser: v.optional(v.lazy(() => ExternalUser)),
  favorites: v.optional(v.lazy(() => FavoriteConnection)),
  favorite: v.optional(v.lazy(() => Favorite)),
  initiatives: v.optional(v.lazy(() => InitiativeConnection)),
  initiative: v.optional(v.lazy(() => Initiative)),
  initiativeFilterSuggestion: v.optional(v.lazy(() => InitiativeFilterSuggestionPayload)),
  initiativeLabels: v.optional(v.lazy(() => InitiativeLabelConnection)),
  initiativeLabel: v.optional(v.lazy(() => InitiativeLabel)),
  initiativeRelations: v.optional(v.lazy(() => InitiativeRelationConnection)),
  initiativeRelation: v.optional(v.lazy(() => InitiativeRelation)),
  initiativeToProjects: v.optional(v.lazy(() => InitiativeToProjectConnection)),
  initiativeToProject: v.optional(v.lazy(() => InitiativeToProject)),
  initiativeUpdates: v.optional(v.lazy(() => InitiativeUpdateConnection)),
  initiativeUpdate: v.optional(v.lazy(() => InitiativeUpdate)),
  integrations: v.optional(v.lazy(() => IntegrationConnection)),
  integration: v.optional(v.lazy(() => Integration)),
  archivedIntegrations: v.optional(v.array(v.lazy(() => ArchivedIntegrationPayload))),
  verifyGitHubEnterpriseServerInstallation: v.optional(v.lazy(() => GitHubEnterpriseServerInstallVerificationPayload)),
  integrationHasScopes: v.optional(v.lazy(() => IntegrationHasScopesPayload)),
  integrationTemplates: v.optional(v.lazy(() => IntegrationTemplateConnection)),
  integrationTemplate: v.optional(v.lazy(() => IntegrationTemplate)),
  integrationsSettings: v.optional(v.lazy(() => IntegrationsSettings)),
  issueImportCheckCSV: v.optional(v.lazy(() => IssueImportCheckPayload)),
  issueImportCheckSync: v.optional(v.lazy(() => IssueImportSyncCheckPayload)),
  issueImportJqlCheck: v.optional(v.lazy(() => IssueImportJqlCheckPayload)),
  issueLabels: v.optional(v.lazy(() => IssueLabelConnection)),
  issueLabel: v.optional(v.lazy(() => IssueLabel)),
  issueRelations: v.optional(v.lazy(() => IssueRelationConnection)),
  issueRelation: v.optional(v.lazy(() => IssueRelation)),
  issues: v.optional(v.lazy(() => IssueConnection)),
  issue: v.optional(v.lazy(() => Issue)),
  issueSearch: v.optional(v.lazy(() => IssueConnection)),
  issueVcsBranchSearch: v.optional(v.nullable(v.lazy(() => Issue))),
  issueFigmaFileKeySearch: v.optional(v.lazy(() => IssueConnection)),
  issuePriorityValues: v.optional(v.array(v.lazy(() => IssuePriorityValue))),
  issueFilterSuggestion: v.optional(v.lazy(() => IssueFilterSuggestionPayload)),
  issueRepositorySuggestions: v.optional(v.lazy(() => RepositorySuggestionsPayload)),
  issueToReleases: v.optional(v.lazy(() => IssueToReleaseConnection)),
  issueToRelease: v.optional(v.lazy(() => IssueToRelease)),
  jiraProjects: v.optional(v.lazy(() => JiraProjectConnection)),
  jiraProject: v.optional(v.lazy(() => JiraProject)),
  notifications: v.optional(v.lazy(() => NotificationConnection)),
  inboxNotifications: v.optional(v.lazy(() => NotificationConnection)),
  notification: v.optional(v.lazy(() => Notification)),
  notificationSubscriptions: v.optional(v.lazy(() => NotificationSubscriptionConnection)),
  notificationSubscription: v.optional(v.lazy(() => NotificationSubscription)),
  oauthApplications: v.optional(v.array(v.lazy(() => OAuthApplication))),
  oauthApplication: v.optional(v.lazy(() => OAuthApplication)),
  organizationInvites: v.optional(v.lazy(() => OrganizationInviteConnection)),
  organizationInvite: v.optional(v.lazy(() => OrganizationInvite)),
  organizationInviteDetails: v.optional(v.lazy(() => OrganizationInviteDetailsPayload)),
  quotas: v.optional(v.lazy(() => OrganizationQuotaConnection)),
  projectLabels: v.optional(v.lazy(() => ProjectLabelConnection)),
  projectLabel: v.optional(v.lazy(() => ProjectLabel)),
  projectMilestones: v.optional(v.lazy(() => ProjectMilestoneConnection)),
  projectMilestone: v.optional(v.lazy(() => ProjectMilestone)),
  projectRelations: v.optional(v.lazy(() => ProjectRelationConnection)),
  projectRelation: v.optional(v.lazy(() => ProjectRelation)),
  projectStatuses: v.optional(v.lazy(() => ProjectStatusConnection)),
  projectStatus: v.optional(v.lazy(() => ProjectStatus)),
  projectUpdates: v.optional(v.lazy(() => ProjectUpdateConnection)),
  projectUpdate: v.optional(v.lazy(() => ProjectUpdate)),
  pushSubscriptionTest: v.optional(v.lazy(() => PushSubscriptionTestPayload)),
  rateLimitStatus: v.optional(v.lazy(() => RateLimitPayload)),
  releaseNotes: v.optional(v.lazy(() => ReleaseNoteConnection)),
  releaseNote: v.optional(v.lazy(() => ReleaseNote)),
  releasePipelines: v.optional(v.lazy(() => ReleasePipelineConnection)),
  releasePipeline: v.optional(v.lazy(() => ReleasePipeline)),
  releasePipelineByAccessKey: v.optional(v.lazy(() => AccessKeyReleasePipeline)),
  latestReleaseByAccessKey: v.optional(v.nullable(v.lazy(() => AccessKeyRelease))),
  recentReleasesByAccessKey: v.optional(v.array(v.lazy(() => AccessKeyRelease))),
  releases: v.optional(v.lazy(() => ReleaseConnection)),
  release: v.optional(v.lazy(() => Release)),
  releaseSearch: v.optional(v.array(v.lazy(() => Release))),
  releaseStages: v.optional(v.lazy(() => ReleaseStageConnection)),
  releaseStage: v.optional(v.lazy(() => ReleaseStage)),
  roadmaps: v.optional(v.lazy(() => RoadmapConnection)),
  roadmap: v.optional(v.lazy(() => Roadmap)),
  roadmapToProjects: v.optional(v.lazy(() => RoadmapToProjectConnection)),
  roadmapToProject: v.optional(v.lazy(() => RoadmapToProject)),
  searchDocuments: v.optional(v.lazy(() => DocumentSearchPayload)),
  searchProjects: v.optional(v.lazy(() => ProjectSearchPayload)),
  searchIssues: v.optional(v.lazy(() => IssueSearchPayload)),
  semanticSearch: v.optional(v.lazy(() => SemanticSearchPayload)),
  slaConfigurations: v.optional(v.array(v.lazy(() => SlaConfiguration))),
  teamMemberships: v.optional(v.lazy(() => TeamMembershipConnection)),
  teamMembership: v.optional(v.lazy(() => TeamMembership)),
  teams: v.optional(v.lazy(() => TeamConnection)),
  administrableTeams: v.optional(v.lazy(() => TeamConnection)),
  team: v.optional(v.lazy(() => Team)),
  templates: v.optional(v.array(v.lazy(() => Template))),
  templateSearch: v.optional(v.array(v.lazy(() => Template))),
  template: v.optional(v.lazy(() => Template)),
  templatesForIntegration: v.optional(v.array(v.lazy(() => Template))),
  timeSchedules: v.optional(v.lazy(() => TimeScheduleConnection)),
  timeSchedule: v.optional(v.lazy(() => TimeSchedule)),
  triageResponsibilities: v.optional(v.lazy(() => TriageResponsibilityConnection)),
  triageResponsibility: v.optional(v.lazy(() => TriageResponsibility)),
  usageAlerts: v.optional(v.lazy(() => UsageAlertConnection)),
  usageAlert: v.optional(v.lazy(() => UsageAlert)),
  users: v.optional(v.lazy(() => UserConnection)),
  user: v.optional(v.lazy(() => User)),
  viewer: v.optional(v.lazy(() => User)),
  userSessions: v.optional(v.array(v.lazy(() => AuthenticationSessionResponse))),
  userSettings: v.optional(v.lazy(() => UserSettings)),
  userViewPreferences: v.optional(v.nullable(v.lazy(() => ViewPreferences))),
  webhooks: v.optional(v.lazy(() => WebhookConnection)),
  webhook: v.optional(v.lazy(() => Webhook)),
  workflowStates: v.optional(v.lazy(() => WorkflowStateConnection)),
  workflowState: v.optional(v.lazy(() => WorkflowState)),
})

export const RateLimitPayload: v.GenericSchema<unknown, T.RateLimitPayload> = v.looseObject({
  identifier: v.optional(v.nullable(v.string())),
  kind: v.optional(v.string()),
  limits: v.optional(v.array(v.lazy(() => RateLimitResultPayload))),
})

export const RateLimitResultPayload: v.GenericSchema<unknown, T.RateLimitResultPayload> = v.looseObject({
  type: v.optional(v.string()),
  requestedAmount: v.optional(number()),
  allowedAmount: v.optional(number()),
  period: v.optional(number()),
  remainingAmount: v.optional(number()),
  reset: v.optional(number()),
})

export const Reaction: v.GenericSchema<unknown, T.Reaction> = v.looseObject({
  id: v.optional(v.string()),
  createdAt: v.optional(v.string()),
  updatedAt: v.optional(v.string()),
  archivedAt: v.optional(v.nullable(v.string())),
  emoji: v.optional(v.string()),
  issue: v.optional(v.nullable(v.lazy(() => Issue))),
  comment: v.optional(v.nullable(v.lazy(() => Comment))),
  projectUpdate: v.optional(v.nullable(v.lazy(() => ProjectUpdate))),
  initiativeUpdate: v.optional(v.nullable(v.lazy(() => InitiativeUpdate))),
  user: v.optional(v.nullable(v.lazy(() => User))),
  externalUser: v.optional(v.nullable(v.lazy(() => ExternalUser))),
})

export const ReactionCollectionFilter: v.GenericSchema<unknown, T.ReactionCollectionFilter> = v.looseObject({
  id: v.optional(v.nullable(v.lazy(() => IDComparator))),
  createdAt: v.optional(v.nullable(v.lazy(() => DateComparator))),
  updatedAt: v.optional(v.nullable(v.lazy(() => DateComparator))),
  emoji: v.optional(v.nullable(v.lazy(() => StringComparator))),
  customEmojiId: v.optional(v.nullable(v.lazy(() => IDComparator))),
  and: v.optional(v.nullable(v.array(v.lazy(() => ReactionCollectionFilter)))),
  or: v.optional(v.nullable(v.array(v.lazy(() => ReactionCollectionFilter)))),
  some: v.optional(v.nullable(v.lazy(() => ReactionFilter))),
  every: v.optional(v.nullable(v.lazy(() => ReactionFilter))),
  length: v.optional(v.nullable(v.lazy(() => NumberComparator))),
})

export const ReactionCreateInput: v.GenericSchema<unknown, T.ReactionCreateInput> = v.looseObject({
  id: v.optional(v.nullable(v.string())),
  emoji: v.string(),
  commentId: v.optional(v.nullable(v.string())),
  projectUpdateId: v.optional(v.nullable(v.string())),
  initiativeUpdateId: v.optional(v.nullable(v.string())),
  issueId: v.optional(v.nullable(v.string())),
})

export const ReactionFilter: v.GenericSchema<unknown, T.ReactionFilter> = v.looseObject({
  id: v.optional(v.nullable(v.lazy(() => IDComparator))),
  createdAt: v.optional(v.nullable(v.lazy(() => DateComparator))),
  updatedAt: v.optional(v.nullable(v.lazy(() => DateComparator))),
  emoji: v.optional(v.nullable(v.lazy(() => StringComparator))),
  customEmojiId: v.optional(v.nullable(v.lazy(() => IDComparator))),
  and: v.optional(v.nullable(v.array(v.lazy(() => ReactionFilter)))),
  or: v.optional(v.nullable(v.array(v.lazy(() => ReactionFilter)))),
})

export const ReactionPayload: v.GenericSchema<unknown, T.ReactionPayload> = v.looseObject({
  lastSyncId: v.optional(number()),
  reaction: v.optional(v.lazy(() => Reaction)),
  success: v.optional(v.boolean()),
})

export const RelationExistsComparator: v.GenericSchema<unknown, T.RelationExistsComparator> = v.looseObject({
  eq: v.optional(v.nullable(v.boolean())),
  neq: v.optional(v.nullable(v.boolean())),
})

export const Release: v.GenericSchema<unknown, T.Release> = v.looseObject({
  id: v.optional(v.string()),
  createdAt: v.optional(v.string()),
  updatedAt: v.optional(v.string()),
  archivedAt: v.optional(v.nullable(v.string())),
  name: v.optional(v.string()),
  description: v.optional(v.nullable(v.string())),
  version: v.optional(v.nullable(v.string())),
  commitSha: v.optional(v.nullable(v.string())),
  pipeline: v.optional(v.lazy(() => ReleasePipeline)),
  stage: v.optional(v.lazy(() => ReleaseStage)),
  creator: v.optional(v.nullable(v.lazy(() => User))),
  slugId: v.optional(v.string()),
  startDate: v.optional(v.nullable(v.string())),
  targetDate: v.optional(v.nullable(v.string())),
  startedAt: v.optional(v.nullable(v.string())),
  completedAt: v.optional(v.nullable(v.string())),
  canceledAt: v.optional(v.nullable(v.string())),
  autoArchivedAt: v.optional(v.nullable(v.string())),
  trashed: v.optional(v.nullable(v.boolean())),
  progressHistory: v.optional(v.unknown()),
  currentProgress: v.optional(v.unknown()),
  history: v.optional(v.lazy(() => ReleaseHistoryConnection)),
  url: v.optional(v.string()),
  documents: v.optional(v.lazy(() => DocumentConnection)),
  issues: v.optional(v.lazy(() => IssueConnection)),
  issueCount: v.optional(integer()),
  links: v.optional(v.lazy(() => EntityExternalLinkConnection)),
  releaseNotes: v.optional(v.array(v.lazy(() => ReleaseNote))),
})

export const ReleaseArchivePayload: v.GenericSchema<unknown, T.ReleaseArchivePayload> = v.looseObject({
  lastSyncId: v.optional(number()),
  success: v.optional(v.boolean()),
  entity: v.optional(v.nullable(v.lazy(() => Release))),
})

export const ReleaseChannel: v.GenericSchema<unknown, T.ReleaseChannel> = v.picklist([
  "development",
  "internal",
  "privateBeta",
  "beta",
  "preRelease",
  "public",
])

export const ReleaseCollectionFilter: v.GenericSchema<unknown, T.ReleaseCollectionFilter> = v.looseObject({
  id: v.optional(v.nullable(v.lazy(() => IDComparator))),
  createdAt: v.optional(v.nullable(v.lazy(() => DateComparator))),
  updatedAt: v.optional(v.nullable(v.lazy(() => DateComparator))),
  name: v.optional(v.nullable(v.lazy(() => StringComparator))),
  version: v.optional(v.nullable(v.lazy(() => StringComparator))),
  pipeline: v.optional(v.nullable(v.lazy(() => ReleasePipelineFilter))),
  stage: v.optional(v.nullable(v.lazy(() => ReleaseStageFilter))),
  completedAt: v.optional(v.nullable(v.lazy(() => NullableDateComparator))),
  hasReleaseNotes: v.optional(v.nullable(v.lazy(() => BooleanComparator))),
  and: v.optional(v.nullable(v.array(v.lazy(() => ReleaseCollectionFilter)))),
  or: v.optional(v.nullable(v.array(v.lazy(() => ReleaseCollectionFilter)))),
  some: v.optional(v.nullable(v.lazy(() => ReleaseFilter))),
  every: v.optional(v.nullable(v.lazy(() => ReleaseFilter))),
  length: v.optional(v.nullable(v.lazy(() => NumberComparator))),
})

export const ReleaseCompleteInput: v.GenericSchema<unknown, T.ReleaseCompleteInput> = v.looseObject({
  version: v.optional(v.nullable(v.string())),
  commitSha: v.optional(v.nullable(v.string())),
  name: v.optional(v.nullable(v.string())),
  description: v.optional(v.nullable(v.string())),
  links: v.optional(v.nullable(v.array(v.lazy(() => ReleaseLinkInput)))),
  documents: v.optional(v.nullable(v.array(v.lazy(() => ReleaseDocumentInput)))),
  releaseNotes: v.optional(v.nullable(v.lazy(() => ReleaseNoteInput))),
  pipelineId: v.string(),
})

export const ReleaseCompleteInputBase: v.GenericSchema<unknown, T.ReleaseCompleteInputBase> = v.looseObject({
  version: v.optional(v.nullable(v.string())),
  commitSha: v.optional(v.nullable(v.string())),
  name: v.optional(v.nullable(v.string())),
  description: v.optional(v.nullable(v.string())),
  links: v.optional(v.nullable(v.array(v.lazy(() => ReleaseLinkInput)))),
  documents: v.optional(v.nullable(v.array(v.lazy(() => ReleaseDocumentInput)))),
  releaseNotes: v.optional(v.nullable(v.lazy(() => ReleaseNoteInput))),
})

export const ReleaseConnection: v.GenericSchema<unknown, T.ReleaseConnection> = v.looseObject({
  edges: v.optional(v.array(v.lazy(() => ReleaseEdge))),
  nodes: v.optional(v.array(v.lazy(() => Release))),
  pageInfo: v.optional(v.lazy(() => PageInfo)),
})

export const ReleaseCreateInput: v.GenericSchema<unknown, T.ReleaseCreateInput> = v.looseObject({
  id: v.optional(v.nullable(v.string())),
  name: v.string(),
  description: v.optional(v.nullable(v.string())),
  version: v.optional(v.nullable(v.string())),
  commitSha: v.optional(v.nullable(v.string())),
  pipelineId: v.string(),
  stageId: v.optional(v.nullable(v.string())),
  startDate: v.optional(v.nullable(v.string())),
  targetDate: v.optional(v.nullable(v.string())),
  createdAt: v.optional(v.nullable(v.string())),
  startedAt: v.optional(v.nullable(v.string())),
  completedAt: v.optional(v.nullable(v.string())),
})

export const ReleaseDebugSinkInput: v.GenericSchema<unknown, T.ReleaseDebugSinkInput> = v.looseObject({
  inspectedShas: v.array(v.string()),
  issues: v.unknown(),
  revertedIssues: v.optional(v.nullable(v.unknown())),
  pullRequests: v.array(v.unknown()),
  includePaths: v.optional(v.nullable(v.array(v.string()))),
  includeSubjects: v.optional(v.nullable(v.array(v.string()))),
  issuePattern: v.optional(v.nullable(v.string())),
})

export const ReleaseDocumentInput: v.GenericSchema<unknown, T.ReleaseDocumentInput> = v.looseObject({
  title: v.string(),
  content: v.string(),
})

export const ReleaseEdge: v.GenericSchema<unknown, T.ReleaseEdge> = v.looseObject({
  node: v.optional(v.lazy(() => Release)),
  cursor: v.optional(v.string()),
})

export const ReleaseFilter: v.GenericSchema<unknown, T.ReleaseFilter> = v.looseObject({
  id: v.optional(v.nullable(v.lazy(() => IDComparator))),
  createdAt: v.optional(v.nullable(v.lazy(() => DateComparator))),
  updatedAt: v.optional(v.nullable(v.lazy(() => DateComparator))),
  name: v.optional(v.nullable(v.lazy(() => StringComparator))),
  version: v.optional(v.nullable(v.lazy(() => StringComparator))),
  pipeline: v.optional(v.nullable(v.lazy(() => ReleasePipelineFilter))),
  stage: v.optional(v.nullable(v.lazy(() => ReleaseStageFilter))),
  completedAt: v.optional(v.nullable(v.lazy(() => NullableDateComparator))),
  hasReleaseNotes: v.optional(v.nullable(v.lazy(() => BooleanComparator))),
  and: v.optional(v.nullable(v.array(v.lazy(() => ReleaseFilter)))),
  or: v.optional(v.nullable(v.array(v.lazy(() => ReleaseFilter)))),
})

export const ReleaseHistory: v.GenericSchema<unknown, T.ReleaseHistory> = v.looseObject({
  id: v.optional(v.string()),
  createdAt: v.optional(v.string()),
  updatedAt: v.optional(v.string()),
  archivedAt: v.optional(v.nullable(v.string())),
  entries: v.optional(v.unknown()),
  release: v.optional(v.lazy(() => Release)),
})

export const ReleaseHistoryConnection: v.GenericSchema<unknown, T.ReleaseHistoryConnection> = v.looseObject({
  edges: v.optional(v.array(v.lazy(() => ReleaseHistoryEdge))),
  nodes: v.optional(v.array(v.lazy(() => ReleaseHistory))),
  pageInfo: v.optional(v.lazy(() => PageInfo)),
})

export const ReleaseHistoryEdge: v.GenericSchema<unknown, T.ReleaseHistoryEdge> = v.looseObject({
  node: v.optional(v.lazy(() => ReleaseHistory)),
  cursor: v.optional(v.string()),
})

export const ReleaseLinkInput: v.GenericSchema<unknown, T.ReleaseLinkInput> = v.looseObject({
  url: v.string(),
  label: v.optional(v.nullable(v.string())),
})

export const ReleaseNote: v.GenericSchema<unknown, T.ReleaseNote> = v.looseObject({
  id: v.optional(v.string()),
  createdAt: v.optional(v.string()),
  updatedAt: v.optional(v.string()),
  archivedAt: v.optional(v.nullable(v.string())),
  pipeline: v.optional(v.lazy(() => ReleasePipeline)),
  slugId: v.optional(v.string()),
  title: v.optional(v.nullable(v.string())),
  firstRelease: v.optional(v.nullable(v.lazy(() => Release))),
  lastRelease: v.optional(v.nullable(v.lazy(() => Release))),
  releaseCount: v.optional(integer()),
  generationStatus: v.optional(v.nullable(v.lazy(() => ReleaseNoteGenerationStatus))),
  releases: v.optional(v.array(v.lazy(() => Release))),
  url: v.optional(v.string()),
  documentContent: v.optional(v.nullable(v.lazy(() => DocumentContent))),
})

export const ReleaseNoteConnection: v.GenericSchema<unknown, T.ReleaseNoteConnection> = v.looseObject({
  edges: v.optional(v.array(v.lazy(() => ReleaseNoteEdge))),
  nodes: v.optional(v.array(v.lazy(() => ReleaseNote))),
  pageInfo: v.optional(v.lazy(() => PageInfo)),
})

export const ReleaseNoteCreateInput: v.GenericSchema<unknown, T.ReleaseNoteCreateInput> = v.looseObject({
  id: v.optional(v.nullable(v.string())),
  pipelineId: v.string(),
  releaseIds: v.optional(v.nullable(v.array(v.string()))),
  rangeFromReleaseId: v.optional(v.nullable(v.string())),
  rangeToReleaseId: v.optional(v.nullable(v.string())),
  title: v.optional(v.nullable(v.string())),
  content: v.optional(v.nullable(v.string())),
})

export const ReleaseNoteEdge: v.GenericSchema<unknown, T.ReleaseNoteEdge> = v.looseObject({
  node: v.optional(v.lazy(() => ReleaseNote)),
  cursor: v.optional(v.string()),
})

export const ReleaseNoteFilter: v.GenericSchema<unknown, T.ReleaseNoteFilter> = v.looseObject({
  id: v.optional(v.nullable(v.lazy(() => IDComparator))),
  createdAt: v.optional(v.nullable(v.lazy(() => DateComparator))),
  updatedAt: v.optional(v.nullable(v.lazy(() => DateComparator))),
  title: v.optional(v.nullable(v.lazy(() => StringComparator))),
  slugId: v.optional(v.nullable(v.lazy(() => StringComparator))),
  pipeline: v.optional(v.nullable(v.lazy(() => ReleasePipelineFilter))),
  release: v.optional(v.nullable(v.lazy(() => ReleaseFilter))),
  and: v.optional(v.nullable(v.array(v.lazy(() => ReleaseNoteFilter)))),
  or: v.optional(v.nullable(v.array(v.lazy(() => ReleaseNoteFilter)))),
})

export const ReleaseNoteGenerationStatus: v.GenericSchema<unknown, T.ReleaseNoteGenerationStatus> = v.picklist([
  "pending",
  "completed",
])

export const ReleaseNoteInput: v.GenericSchema<unknown, T.ReleaseNoteInput> = v.looseObject({
  content: v.string(),
  title: v.optional(v.nullable(v.string())),
})

export const ReleaseNotePayload: v.GenericSchema<unknown, T.ReleaseNotePayload> = v.looseObject({
  lastSyncId: v.optional(number()),
  releaseNote: v.optional(v.lazy(() => ReleaseNote)),
  success: v.optional(v.boolean()),
})

export const ReleaseNoteUpdateInput: v.GenericSchema<unknown, T.ReleaseNoteUpdateInput> = v.looseObject({
  releaseIds: v.optional(v.nullable(v.array(v.string()))),
  rangeFromReleaseId: v.optional(v.nullable(v.string())),
  rangeToReleaseId: v.optional(v.nullable(v.string())),
  title: v.optional(v.nullable(v.string())),
  content: v.optional(v.nullable(v.string())),
})

export const ReleasePayload: v.GenericSchema<unknown, T.ReleasePayload> = v.looseObject({
  lastSyncId: v.optional(number()),
  release: v.optional(v.lazy(() => Release)),
  success: v.optional(v.boolean()),
})

export const ReleasePipeline: v.GenericSchema<unknown, T.ReleasePipeline> = v.looseObject({
  id: v.optional(v.string()),
  createdAt: v.optional(v.string()),
  updatedAt: v.optional(v.string()),
  archivedAt: v.optional(v.nullable(v.string())),
  name: v.optional(v.string()),
  slugId: v.optional(v.string()),
  type: v.optional(v.lazy(() => ReleasePipelineType)),
  isProduction: v.optional(v.boolean()),
  autoGenerateReleaseNotesOnCompletion: v.optional(v.boolean()),
  rolloverIssuesOnCompletion: v.optional(v.boolean()),
  includePathPatterns: v.optional(v.array(v.string())),
  approximateReleaseCount: v.optional(integer()),
  trashed: v.optional(v.nullable(v.boolean())),
  releaseNoteTemplate: v.optional(v.nullable(v.lazy(() => Template))),
  latestReleaseNote: v.optional(v.nullable(v.lazy(() => ReleaseNote))),
  url: v.optional(v.string()),
  teams: v.optional(v.lazy(() => TeamConnection)),
  stages: v.optional(v.lazy(() => ReleaseStageConnection)),
  releases: v.optional(v.lazy(() => ReleaseConnection)),
})

export const ReleasePipelineArchivePayload: v.GenericSchema<unknown, T.ReleasePipelineArchivePayload> = v.looseObject({
  lastSyncId: v.optional(number()),
  success: v.optional(v.boolean()),
  entity: v.optional(v.nullable(v.lazy(() => ReleasePipeline))),
})

export const ReleasePipelineCollectionFilter: v.GenericSchema<unknown, T.ReleasePipelineCollectionFilter> =
  v.looseObject({
    id: v.optional(v.nullable(v.lazy(() => IDComparator))),
    createdAt: v.optional(v.nullable(v.lazy(() => DateComparator))),
    updatedAt: v.optional(v.nullable(v.lazy(() => DateComparator))),
    name: v.optional(v.nullable(v.lazy(() => StringComparator))),
    isProduction: v.optional(v.nullable(v.lazy(() => BooleanComparator))),
    type: v.optional(v.nullable(v.lazy(() => ReleasePipelineTypeComparator))),
    teams: v.optional(v.nullable(v.lazy(() => TeamCollectionFilter))),
    and: v.optional(v.nullable(v.array(v.lazy(() => ReleasePipelineCollectionFilter)))),
    or: v.optional(v.nullable(v.array(v.lazy(() => ReleasePipelineCollectionFilter)))),
    some: v.optional(v.nullable(v.lazy(() => ReleasePipelineFilter))),
    every: v.optional(v.nullable(v.lazy(() => ReleasePipelineFilter))),
    length: v.optional(v.nullable(v.lazy(() => NumberComparator))),
  })

export const ReleasePipelineConnection: v.GenericSchema<unknown, T.ReleasePipelineConnection> = v.looseObject({
  edges: v.optional(v.array(v.lazy(() => ReleasePipelineEdge))),
  nodes: v.optional(v.array(v.lazy(() => ReleasePipeline))),
  pageInfo: v.optional(v.lazy(() => PageInfo)),
})

export const ReleasePipelineCreateInput: v.GenericSchema<unknown, T.ReleasePipelineCreateInput> = v.looseObject({
  id: v.optional(v.nullable(v.string())),
  name: v.string(),
  slugId: v.optional(v.nullable(v.string())),
  type: v.optional(v.nullable(v.lazy(() => ReleasePipelineType))),
  isProduction: v.optional(v.nullable(v.boolean())),
  autoGenerateReleaseNotesOnCompletion: v.optional(v.nullable(v.boolean())),
  rolloverIssuesOnCompletion: v.optional(v.nullable(v.boolean())),
  includePathPatterns: v.optional(v.nullable(v.array(v.string()))),
  teamIds: v.optional(v.nullable(v.array(v.string()))),
})

export const ReleasePipelineEdge: v.GenericSchema<unknown, T.ReleasePipelineEdge> = v.looseObject({
  node: v.optional(v.lazy(() => ReleasePipeline)),
  cursor: v.optional(v.string()),
})

export const ReleasePipelineFilter: v.GenericSchema<unknown, T.ReleasePipelineFilter> = v.looseObject({
  id: v.optional(v.nullable(v.lazy(() => IDComparator))),
  createdAt: v.optional(v.nullable(v.lazy(() => DateComparator))),
  updatedAt: v.optional(v.nullable(v.lazy(() => DateComparator))),
  name: v.optional(v.nullable(v.lazy(() => StringComparator))),
  isProduction: v.optional(v.nullable(v.lazy(() => BooleanComparator))),
  type: v.optional(v.nullable(v.lazy(() => ReleasePipelineTypeComparator))),
  teams: v.optional(v.nullable(v.lazy(() => TeamCollectionFilter))),
  and: v.optional(v.nullable(v.array(v.lazy(() => ReleasePipelineFilter)))),
  or: v.optional(v.nullable(v.array(v.lazy(() => ReleasePipelineFilter)))),
})

export const ReleasePipelineNameSort: v.GenericSchema<unknown, T.ReleasePipelineNameSort> = v.looseObject({
  nulls: v.optional(v.nullable(v.lazy(() => PaginationNulls))),
  order: v.optional(v.nullable(v.lazy(() => PaginationSortOrder))),
})

export const ReleasePipelinePayload: v.GenericSchema<unknown, T.ReleasePipelinePayload> = v.looseObject({
  lastSyncId: v.optional(number()),
  releasePipeline: v.optional(v.lazy(() => ReleasePipeline)),
  success: v.optional(v.boolean()),
})

export const ReleasePipelineSortInput: v.GenericSchema<unknown, T.ReleasePipelineSortInput> = v.looseObject({
  name: v.optional(v.nullable(v.lazy(() => ReleasePipelineNameSort))),
})

export const ReleasePipelineType: v.GenericSchema<unknown, T.ReleasePipelineType> = v.picklist([
  "continuous",
  "scheduled",
])

export const ReleasePipelineTypeComparator: v.GenericSchema<unknown, T.ReleasePipelineTypeComparator> = v.looseObject({
  eq: v.optional(v.nullable(v.lazy(() => ReleasePipelineType))),
  neq: v.optional(v.nullable(v.lazy(() => ReleasePipelineType))),
  in: v.optional(v.nullable(v.array(v.lazy(() => ReleasePipelineType)))),
  nin: v.optional(v.nullable(v.array(v.lazy(() => ReleasePipelineType)))),
  null: v.optional(v.nullable(v.boolean())),
})

export const ReleasePipelineUpdateInput: v.GenericSchema<unknown, T.ReleasePipelineUpdateInput> = v.looseObject({
  name: v.optional(v.nullable(v.string())),
  slugId: v.optional(v.nullable(v.string())),
  type: v.optional(v.nullable(v.lazy(() => ReleasePipelineType))),
  isProduction: v.optional(v.nullable(v.boolean())),
  autoGenerateReleaseNotesOnCompletion: v.optional(v.nullable(v.boolean())),
  rolloverIssuesOnCompletion: v.optional(v.nullable(v.boolean())),
  includePathPatterns: v.optional(v.nullable(v.array(v.string()))),
  teamIds: v.optional(v.nullable(v.array(v.string()))),
})

export const ReleaseSort: v.GenericSchema<unknown, T.ReleaseSort> = v.looseObject({
  nulls: v.optional(v.nullable(v.lazy(() => PaginationNulls))),
  order: v.optional(v.nullable(v.lazy(() => PaginationSortOrder))),
})

export const ReleaseSortInput: v.GenericSchema<unknown, T.ReleaseSortInput> = v.looseObject({
  stage: v.optional(v.nullable(v.lazy(() => ReleaseStageSort))),
})

export const ReleaseStage: v.GenericSchema<unknown, T.ReleaseStage> = v.looseObject({
  id: v.optional(v.string()),
  createdAt: v.optional(v.string()),
  updatedAt: v.optional(v.string()),
  archivedAt: v.optional(v.nullable(v.string())),
  name: v.optional(v.string()),
  color: v.optional(v.string()),
  type: v.optional(v.lazy(() => ReleaseStageType)),
  position: v.optional(number()),
  frozen: v.optional(v.boolean()),
  pipeline: v.optional(v.lazy(() => ReleasePipeline)),
  releases: v.optional(v.lazy(() => ReleaseConnection)),
})

export const ReleaseStageArchivePayload: v.GenericSchema<unknown, T.ReleaseStageArchivePayload> = v.looseObject({
  lastSyncId: v.optional(number()),
  success: v.optional(v.boolean()),
  entity: v.optional(v.nullable(v.lazy(() => ReleaseStage))),
})

export const ReleaseStageConnection: v.GenericSchema<unknown, T.ReleaseStageConnection> = v.looseObject({
  edges: v.optional(v.array(v.lazy(() => ReleaseStageEdge))),
  nodes: v.optional(v.array(v.lazy(() => ReleaseStage))),
  pageInfo: v.optional(v.lazy(() => PageInfo)),
})

export const ReleaseStageCreateInput: v.GenericSchema<unknown, T.ReleaseStageCreateInput> = v.looseObject({
  id: v.optional(v.nullable(v.string())),
  name: v.string(),
  color: v.string(),
  type: v.lazy(() => ReleaseStageType),
  position: number(),
  pipelineId: v.string(),
  frozen: v.optional(v.nullable(v.boolean())),
})

export const ReleaseStageEdge: v.GenericSchema<unknown, T.ReleaseStageEdge> = v.looseObject({
  node: v.optional(v.lazy(() => ReleaseStage)),
  cursor: v.optional(v.string()),
})

export const ReleaseStageFilter: v.GenericSchema<unknown, T.ReleaseStageFilter> = v.looseObject({
  id: v.optional(v.nullable(v.lazy(() => IDComparator))),
  createdAt: v.optional(v.nullable(v.lazy(() => DateComparator))),
  updatedAt: v.optional(v.nullable(v.lazy(() => DateComparator))),
  type: v.optional(v.nullable(v.lazy(() => ReleaseStageTypeComparator))),
  name: v.optional(v.nullable(v.lazy(() => StringComparator))),
  and: v.optional(v.nullable(v.array(v.lazy(() => ReleaseStageFilter)))),
  or: v.optional(v.nullable(v.array(v.lazy(() => ReleaseStageFilter)))),
})

export const ReleaseStagePayload: v.GenericSchema<unknown, T.ReleaseStagePayload> = v.looseObject({
  lastSyncId: v.optional(number()),
  releaseStage: v.optional(v.lazy(() => ReleaseStage)),
  success: v.optional(v.boolean()),
})

export const ReleaseStageSort: v.GenericSchema<unknown, T.ReleaseStageSort> = v.looseObject({
  nulls: v.optional(v.nullable(v.lazy(() => PaginationNulls))),
  order: v.optional(v.nullable(v.lazy(() => PaginationSortOrder))),
})

export const ReleaseStageType: v.GenericSchema<unknown, T.ReleaseStageType> = v.picklist([
  "planned",
  "started",
  "completed",
  "canceled",
])

export const ReleaseStageTypeComparator: v.GenericSchema<unknown, T.ReleaseStageTypeComparator> = v.looseObject({
  eq: v.optional(v.nullable(v.lazy(() => ReleaseStageType))),
  neq: v.optional(v.nullable(v.lazy(() => ReleaseStageType))),
  in: v.optional(v.nullable(v.array(v.lazy(() => ReleaseStageType)))),
  nin: v.optional(v.nullable(v.array(v.lazy(() => ReleaseStageType)))),
  null: v.optional(v.nullable(v.boolean())),
})

export const ReleaseStageUpdateInput: v.GenericSchema<unknown, T.ReleaseStageUpdateInput> = v.looseObject({
  name: v.optional(v.nullable(v.string())),
  color: v.optional(v.nullable(v.string())),
  position: v.optional(v.nullable(number())),
  frozen: v.optional(v.nullable(v.boolean())),
})

export const ReleaseSyncInput: v.GenericSchema<unknown, T.ReleaseSyncInput> = v.looseObject({
  name: v.optional(v.nullable(v.string())),
  description: v.optional(v.nullable(v.string())),
  version: v.optional(v.nullable(v.string())),
  commitSha: v.string(),
  preserveStoredCommitSha: v.optional(v.nullable(v.boolean())),
  issueReferences: v.optional(v.nullable(v.array(v.lazy(() => IssueReferenceInput)))),
  revertedIssueReferences: v.optional(v.nullable(v.array(v.lazy(() => IssueReferenceInput)))),
  pullRequestReferences: v.optional(v.nullable(v.array(v.lazy(() => PullRequestReferenceInput)))),
  repository: v.optional(v.nullable(v.lazy(() => RepositoryDataInput))),
  debugSink: v.optional(v.nullable(v.lazy(() => ReleaseDebugSinkInput))),
  links: v.optional(v.nullable(v.array(v.lazy(() => ReleaseLinkInput)))),
  documents: v.optional(v.nullable(v.array(v.lazy(() => ReleaseDocumentInput)))),
  releaseNotes: v.optional(v.nullable(v.lazy(() => ReleaseNoteInput))),
  pipelineId: v.string(),
})

export const ReleaseSyncInputBase: v.GenericSchema<unknown, T.ReleaseSyncInputBase> = v.looseObject({
  name: v.optional(v.nullable(v.string())),
  description: v.optional(v.nullable(v.string())),
  version: v.optional(v.nullable(v.string())),
  commitSha: v.string(),
  preserveStoredCommitSha: v.optional(v.nullable(v.boolean())),
  issueReferences: v.optional(v.nullable(v.array(v.lazy(() => IssueReferenceInput)))),
  revertedIssueReferences: v.optional(v.nullable(v.array(v.lazy(() => IssueReferenceInput)))),
  pullRequestReferences: v.optional(v.nullable(v.array(v.lazy(() => PullRequestReferenceInput)))),
  repository: v.optional(v.nullable(v.lazy(() => RepositoryDataInput))),
  debugSink: v.optional(v.nullable(v.lazy(() => ReleaseDebugSinkInput))),
  links: v.optional(v.nullable(v.array(v.lazy(() => ReleaseLinkInput)))),
  documents: v.optional(v.nullable(v.array(v.lazy(() => ReleaseDocumentInput)))),
  releaseNotes: v.optional(v.nullable(v.lazy(() => ReleaseNoteInput))),
})

export const ReleaseUpdateByPipelineInput: v.GenericSchema<unknown, T.ReleaseUpdateByPipelineInput> = v.looseObject({
  version: v.optional(v.nullable(v.string())),
  stage: v.optional(v.nullable(v.string())),
  name: v.optional(v.nullable(v.string())),
  description: v.optional(v.nullable(v.string())),
  links: v.optional(v.nullable(v.array(v.lazy(() => ReleaseLinkInput)))),
  documents: v.optional(v.nullable(v.array(v.lazy(() => ReleaseDocumentInput)))),
  releaseNotes: v.optional(v.nullable(v.lazy(() => ReleaseNoteInput))),
  pipelineId: v.string(),
})

export const ReleaseUpdateByPipelineInputBase: v.GenericSchema<unknown, T.ReleaseUpdateByPipelineInputBase> =
  v.looseObject({
    version: v.optional(v.nullable(v.string())),
    stage: v.optional(v.nullable(v.string())),
    name: v.optional(v.nullable(v.string())),
    description: v.optional(v.nullable(v.string())),
    links: v.optional(v.nullable(v.array(v.lazy(() => ReleaseLinkInput)))),
    documents: v.optional(v.nullable(v.array(v.lazy(() => ReleaseDocumentInput)))),
    releaseNotes: v.optional(v.nullable(v.lazy(() => ReleaseNoteInput))),
  })

export const ReleaseUpdateInput: v.GenericSchema<unknown, T.ReleaseUpdateInput> = v.looseObject({
  name: v.optional(v.nullable(v.string())),
  description: v.optional(v.nullable(v.string())),
  version: v.optional(v.nullable(v.string())),
  commitSha: v.optional(v.nullable(v.string())),
  stageId: v.optional(v.nullable(v.string())),
  startDate: v.optional(v.nullable(v.string())),
  targetDate: v.optional(v.nullable(v.string())),
  startedAt: v.optional(v.nullable(v.string())),
  completedAt: v.optional(v.nullable(v.string())),
  trashed: v.optional(v.nullable(v.boolean())),
})

export const RepositoryDataInput: v.GenericSchema<unknown, T.RepositoryDataInput> = v.looseObject({
  owner: v.string(),
  name: v.string(),
  provider: v.string(),
  url: v.string(),
})

export const RepositorySuggestion: v.GenericSchema<unknown, T.RepositorySuggestion> = v.looseObject({
  repositoryFullName: v.optional(v.string()),
  hostname: v.optional(v.nullable(v.string())),
  confidence: v.optional(number()),
})

export const RepositorySuggestionsPayload: v.GenericSchema<unknown, T.RepositorySuggestionsPayload> = v.looseObject({
  suggestions: v.optional(v.array(v.lazy(() => RepositorySuggestion))),
})

export const RevenueSort: v.GenericSchema<unknown, T.RevenueSort> = v.looseObject({
  nulls: v.optional(v.nullable(v.lazy(() => PaginationNulls))),
  order: v.optional(v.nullable(v.lazy(() => PaginationSortOrder))),
})

export const Roadmap: v.GenericSchema<unknown, T.Roadmap> = v.looseObject({
  id: v.optional(v.string()),
  createdAt: v.optional(v.string()),
  updatedAt: v.optional(v.string()),
  archivedAt: v.optional(v.nullable(v.string())),
  name: v.optional(v.string()),
  description: v.optional(v.nullable(v.string())),
  organization: v.optional(v.lazy(() => Organization)),
  creator: v.optional(v.lazy(() => User)),
  owner: v.optional(v.nullable(v.lazy(() => User))),
  slugId: v.optional(v.string()),
  sortOrder: v.optional(number()),
  color: v.optional(v.nullable(v.string())),
  projects: v.optional(v.lazy(() => ProjectConnection)),
  url: v.optional(v.string()),
})

export const RoadmapArchivePayload: v.GenericSchema<unknown, T.RoadmapArchivePayload> = v.looseObject({
  lastSyncId: v.optional(number()),
  success: v.optional(v.boolean()),
  entity: v.optional(v.nullable(v.lazy(() => Roadmap))),
})

export const RoadmapCollectionFilter: v.GenericSchema<unknown, T.RoadmapCollectionFilter> = v.looseObject({
  id: v.optional(v.nullable(v.lazy(() => IDComparator))),
  createdAt: v.optional(v.nullable(v.lazy(() => DateComparator))),
  updatedAt: v.optional(v.nullable(v.lazy(() => DateComparator))),
  name: v.optional(v.nullable(v.lazy(() => StringComparator))),
  slugId: v.optional(v.nullable(v.lazy(() => StringComparator))),
  creator: v.optional(v.nullable(v.lazy(() => UserFilter))),
  and: v.optional(v.nullable(v.array(v.lazy(() => RoadmapCollectionFilter)))),
  or: v.optional(v.nullable(v.array(v.lazy(() => RoadmapCollectionFilter)))),
  some: v.optional(v.nullable(v.lazy(() => RoadmapFilter))),
  every: v.optional(v.nullable(v.lazy(() => RoadmapFilter))),
  length: v.optional(v.nullable(v.lazy(() => NumberComparator))),
})

export const RoadmapConnection: v.GenericSchema<unknown, T.RoadmapConnection> = v.looseObject({
  edges: v.optional(v.array(v.lazy(() => RoadmapEdge))),
  nodes: v.optional(v.array(v.lazy(() => Roadmap))),
  pageInfo: v.optional(v.lazy(() => PageInfo)),
})

export const RoadmapCreateInput: v.GenericSchema<unknown, T.RoadmapCreateInput> = v.looseObject({
  id: v.optional(v.nullable(v.string())),
  name: v.string(),
  description: v.optional(v.nullable(v.string())),
  ownerId: v.optional(v.nullable(v.string())),
  sortOrder: v.optional(v.nullable(number())),
  color: v.optional(v.nullable(v.string())),
})

export const RoadmapEdge: v.GenericSchema<unknown, T.RoadmapEdge> = v.looseObject({
  node: v.optional(v.lazy(() => Roadmap)),
  cursor: v.optional(v.string()),
})

export const RoadmapFilter: v.GenericSchema<unknown, T.RoadmapFilter> = v.looseObject({
  id: v.optional(v.nullable(v.lazy(() => IDComparator))),
  createdAt: v.optional(v.nullable(v.lazy(() => DateComparator))),
  updatedAt: v.optional(v.nullable(v.lazy(() => DateComparator))),
  name: v.optional(v.nullable(v.lazy(() => StringComparator))),
  slugId: v.optional(v.nullable(v.lazy(() => StringComparator))),
  creator: v.optional(v.nullable(v.lazy(() => UserFilter))),
  and: v.optional(v.nullable(v.array(v.lazy(() => RoadmapFilter)))),
  or: v.optional(v.nullable(v.array(v.lazy(() => RoadmapFilter)))),
})

export const RoadmapPayload: v.GenericSchema<unknown, T.RoadmapPayload> = v.looseObject({
  lastSyncId: v.optional(number()),
  roadmap: v.optional(v.lazy(() => Roadmap)),
  success: v.optional(v.boolean()),
})

export const RoadmapToProject: v.GenericSchema<unknown, T.RoadmapToProject> = v.looseObject({
  id: v.optional(v.string()),
  createdAt: v.optional(v.string()),
  updatedAt: v.optional(v.string()),
  archivedAt: v.optional(v.nullable(v.string())),
  project: v.optional(v.lazy(() => Project)),
  roadmap: v.optional(v.lazy(() => Roadmap)),
  sortOrder: v.optional(v.string()),
})

export const RoadmapToProjectConnection: v.GenericSchema<unknown, T.RoadmapToProjectConnection> = v.looseObject({
  edges: v.optional(v.array(v.lazy(() => RoadmapToProjectEdge))),
  nodes: v.optional(v.array(v.lazy(() => RoadmapToProject))),
  pageInfo: v.optional(v.lazy(() => PageInfo)),
})

export const RoadmapToProjectCreateInput: v.GenericSchema<unknown, T.RoadmapToProjectCreateInput> = v.looseObject({
  id: v.optional(v.nullable(v.string())),
  projectId: v.string(),
  roadmapId: v.string(),
  sortOrder: v.optional(v.nullable(number())),
})

export const RoadmapToProjectEdge: v.GenericSchema<unknown, T.RoadmapToProjectEdge> = v.looseObject({
  node: v.optional(v.lazy(() => RoadmapToProject)),
  cursor: v.optional(v.string()),
})

export const RoadmapToProjectPayload: v.GenericSchema<unknown, T.RoadmapToProjectPayload> = v.looseObject({
  lastSyncId: v.optional(number()),
  roadmapToProject: v.optional(v.lazy(() => RoadmapToProject)),
  success: v.optional(v.boolean()),
})

export const RoadmapToProjectUpdateInput: v.GenericSchema<unknown, T.RoadmapToProjectUpdateInput> = v.looseObject({
  sortOrder: v.optional(v.nullable(number())),
})

export const RoadmapUpdateInput: v.GenericSchema<unknown, T.RoadmapUpdateInput> = v.looseObject({
  name: v.optional(v.nullable(v.string())),
  description: v.optional(v.nullable(v.string())),
  ownerId: v.optional(v.nullable(v.string())),
  sortOrder: v.optional(v.nullable(number())),
  color: v.optional(v.nullable(v.string())),
})

export const RootIssueSort: v.GenericSchema<unknown, T.RootIssueSort> = v.looseObject({
  nulls: v.optional(v.nullable(v.lazy(() => PaginationNulls))),
  order: v.optional(v.nullable(v.lazy(() => PaginationSortOrder))),
  sort: v.lazy(() => IssueSortInput),
})

export const SemanticSearchFilters: v.GenericSchema<unknown, T.SemanticSearchFilters> = v.looseObject({
  issues: v.optional(v.nullable(v.lazy(() => IssueFilter))),
  projects: v.optional(v.nullable(v.lazy(() => ProjectFilter))),
  initiatives: v.optional(v.nullable(v.lazy(() => InitiativeFilter))),
  documents: v.optional(v.nullable(v.lazy(() => DocumentFilter))),
})

export const SemanticSearchPayload: v.GenericSchema<unknown, T.SemanticSearchPayload> = v.looseObject({
  enabled: v.optional(v.boolean()),
  results: v.optional(v.array(v.lazy(() => SemanticSearchResult))),
})

export const SemanticSearchResult: v.GenericSchema<unknown, T.SemanticSearchResult> = v.looseObject({
  id: v.optional(v.string()),
  type: v.optional(v.lazy(() => SemanticSearchResultType)),
  issue: v.optional(v.nullable(v.lazy(() => Issue))),
  project: v.optional(v.nullable(v.lazy(() => Project))),
  initiative: v.optional(v.nullable(v.lazy(() => Initiative))),
  document: v.optional(v.nullable(v.lazy(() => Document))),
})

export const SemanticSearchResultType: v.GenericSchema<unknown, T.SemanticSearchResultType> = v.picklist([
  "issue",
  "project",
  "initiative",
  "document",
])

export const SendStrategy: v.GenericSchema<unknown, T.SendStrategy> = v.picklist([
  "desktopThenPush",
  "desktopAndPush",
  "desktop",
  "push",
])

export const SesDomainIdentity: v.GenericSchema<unknown, T.SesDomainIdentity> = v.looseObject({
  id: v.optional(v.string()),
  createdAt: v.optional(v.string()),
  updatedAt: v.optional(v.string()),
  archivedAt: v.optional(v.nullable(v.string())),
  domain: v.optional(v.string()),
  region: v.optional(v.string()),
  organization: v.optional(v.lazy(() => Organization)),
  creator: v.optional(v.nullable(v.lazy(() => User))),
  canSendFromCustomDomain: v.optional(v.boolean()),
  dnsRecords: v.optional(v.array(v.lazy(() => SesDomainIdentityDnsRecord))),
})

export const SesDomainIdentityDnsRecord: v.GenericSchema<unknown, T.SesDomainIdentityDnsRecord> = v.looseObject({
  type: v.optional(v.string()),
  name: v.optional(v.string()),
  content: v.optional(v.string()),
  isVerified: v.optional(v.boolean()),
})

export const SizeSort: v.GenericSchema<unknown, T.SizeSort> = v.looseObject({
  nulls: v.optional(v.nullable(v.lazy(() => PaginationNulls))),
  order: v.optional(v.nullable(v.lazy(() => PaginationSortOrder))),
})

export const SlackAsksTeamSettings: v.GenericSchema<unknown, T.SlackAsksTeamSettings> = v.looseObject({
  id: v.optional(v.string()),
  hasDefaultAsk: v.optional(v.boolean()),
})

export const SlackChannelConnectPayload: v.GenericSchema<unknown, T.SlackChannelConnectPayload> = v.looseObject({
  lastSyncId: v.optional(number()),
  integration: v.optional(v.nullable(v.lazy(() => Integration))),
  success: v.optional(v.boolean()),
  gitHub: v.optional(v.nullable(v.lazy(() => GitHubIntegrationConnectDetails))),
  addBot: v.optional(v.boolean()),
  nudgeToConnectMainSlackIntegration: v.optional(v.nullable(v.boolean())),
  nudgeToUpdateMainSlackIntegration: v.optional(v.nullable(v.boolean())),
})

export const SlackChannelNameMapping: v.GenericSchema<unknown, T.SlackChannelNameMapping> = v.looseObject({
  id: v.optional(v.string()),
  name: v.optional(v.string()),
  isPrivate: v.optional(v.nullable(v.boolean())),
  isShared: v.optional(v.nullable(v.boolean())),
  botAdded: v.optional(v.nullable(v.boolean())),
  teams: v.optional(v.array(v.lazy(() => SlackAsksTeamSettings))),
  autoCreateOnMessage: v.optional(v.nullable(v.boolean())),
  autoCreateOnEmoji: v.optional(v.nullable(v.boolean())),
  autoCreateOnBotMention: v.optional(v.nullable(v.boolean())),
  autoCreateTemplateId: v.optional(v.nullable(v.string())),
  postCancellationUpdates: v.optional(v.nullable(v.boolean())),
  postCompletionUpdates: v.optional(v.nullable(v.boolean())),
  postAcceptedFromTriageUpdates: v.optional(v.nullable(v.boolean())),
  aiTitles: v.optional(v.nullable(v.boolean())),
  postAssignmentUpdates: v.optional(v.nullable(v.boolean())),
  postSlaUpdates: v.optional(v.nullable(v.boolean())),
})

export const SlaConfiguration: v.GenericSchema<unknown, T.SlaConfiguration> = v.looseObject({
  id: v.optional(v.string()),
  name: v.optional(v.string()),
  conditions: v.optional(v.unknown()),
  sla: v.optional(v.nullable(number())),
  slaType: v.optional(v.nullable(v.lazy(() => SLADayCountType))),
  startMode: v.optional(v.nullable(v.lazy(() => SLAStartMode))),
  removesSla: v.optional(v.boolean()),
})

export const SLADayCountType: v.GenericSchema<unknown, T.SLADayCountType> = v.picklist(["all", "onlyBusinessDays"])

export const SLAStartMode: v.GenericSchema<unknown, T.SLAStartMode> = v.picklist(["ruleMatch", "issueCreation"])

export const SlaStatus: v.GenericSchema<unknown, T.SlaStatus> = v.picklist([
  "Breached",
  "HighRisk",
  "MediumRisk",
  "LowRisk",
  "Completed",
  "Failed",
])

export const SlaStatusComparator: v.GenericSchema<unknown, T.SlaStatusComparator> = v.looseObject({
  eq: v.optional(v.nullable(v.lazy(() => SlaStatus))),
  neq: v.optional(v.nullable(v.lazy(() => SlaStatus))),
  in: v.optional(v.nullable(v.array(v.lazy(() => SlaStatus)))),
  nin: v.optional(v.nullable(v.array(v.lazy(() => SlaStatus)))),
  null: v.optional(v.nullable(v.boolean())),
})

export const SlaStatusSort: v.GenericSchema<unknown, T.SlaStatusSort> = v.looseObject({
  nulls: v.optional(v.nullable(v.lazy(() => PaginationNulls))),
  order: v.optional(v.nullable(v.lazy(() => PaginationSortOrder))),
})

export const SourceMetadataComparator: v.GenericSchema<unknown, T.SourceMetadataComparator> = v.looseObject({
  null: v.optional(v.nullable(v.boolean())),
  subType: v.optional(v.nullable(v.lazy(() => SubTypeComparator))),
  workflowDefinitionId: v.optional(v.nullable(v.lazy(() => WorkflowDefinitionIdComparator))),
})

export const SourceTypeComparator: v.GenericSchema<unknown, T.SourceTypeComparator> = v.looseObject({
  eq: v.optional(v.nullable(v.string())),
  neq: v.optional(v.nullable(v.string())),
  in: v.optional(v.nullable(v.array(v.string()))),
  nin: v.optional(v.nullable(v.array(v.string()))),
  eqIgnoreCase: v.optional(v.nullable(v.string())),
  neqIgnoreCase: v.optional(v.nullable(v.string())),
  startsWith: v.optional(v.nullable(v.string())),
  startsWithIgnoreCase: v.optional(v.nullable(v.string())),
  notStartsWith: v.optional(v.nullable(v.string())),
  endsWith: v.optional(v.nullable(v.string())),
  notEndsWith: v.optional(v.nullable(v.string())),
  contains: v.optional(v.nullable(v.string())),
  containsIgnoreCase: v.optional(v.nullable(v.string())),
  notContains: v.optional(v.nullable(v.string())),
  notContainsIgnoreCase: v.optional(v.nullable(v.string())),
  containsIgnoreCaseAndAccent: v.optional(v.nullable(v.string())),
})

export const SsoUrlFromEmailResponse: v.GenericSchema<unknown, T.SsoUrlFromEmailResponse> = v.looseObject({
  success: v.optional(v.boolean()),
  samlSsoUrl: v.optional(v.string()),
})

export const StartDateSort: v.GenericSchema<unknown, T.StartDateSort> = v.looseObject({
  nulls: v.optional(v.nullable(v.lazy(() => PaginationNulls))),
  order: v.optional(v.nullable(v.lazy(() => PaginationSortOrder))),
})

export const StringArrayComparator: v.GenericSchema<unknown, T.StringArrayComparator> = v.looseObject({
  length: v.optional(v.nullable(v.lazy(() => NumberComparator))),
  every: v.optional(v.nullable(v.lazy(() => StringItemComparator))),
  some: v.optional(v.nullable(v.lazy(() => StringItemComparator))),
})

export const StringComparator: v.GenericSchema<unknown, T.StringComparator> = v.looseObject({
  eq: v.optional(v.nullable(v.string())),
  neq: v.optional(v.nullable(v.string())),
  in: v.optional(v.nullable(v.array(v.string()))),
  nin: v.optional(v.nullable(v.array(v.string()))),
  eqIgnoreCase: v.optional(v.nullable(v.string())),
  neqIgnoreCase: v.optional(v.nullable(v.string())),
  startsWith: v.optional(v.nullable(v.string())),
  startsWithIgnoreCase: v.optional(v.nullable(v.string())),
  notStartsWith: v.optional(v.nullable(v.string())),
  endsWith: v.optional(v.nullable(v.string())),
  notEndsWith: v.optional(v.nullable(v.string())),
  contains: v.optional(v.nullable(v.string())),
  containsIgnoreCase: v.optional(v.nullable(v.string())),
  notContains: v.optional(v.nullable(v.string())),
  notContainsIgnoreCase: v.optional(v.nullable(v.string())),
  containsIgnoreCaseAndAccent: v.optional(v.nullable(v.string())),
})

export const StringItemComparator: v.GenericSchema<unknown, T.StringItemComparator> = v.looseObject({
  eq: v.optional(v.nullable(v.string())),
  neq: v.optional(v.nullable(v.string())),
  in: v.optional(v.nullable(v.array(v.string()))),
  nin: v.optional(v.nullable(v.array(v.string()))),
  eqIgnoreCase: v.optional(v.nullable(v.string())),
  neqIgnoreCase: v.optional(v.nullable(v.string())),
  startsWith: v.optional(v.nullable(v.string())),
  startsWithIgnoreCase: v.optional(v.nullable(v.string())),
  notStartsWith: v.optional(v.nullable(v.string())),
  endsWith: v.optional(v.nullable(v.string())),
  notEndsWith: v.optional(v.nullable(v.string())),
  contains: v.optional(v.nullable(v.string())),
  containsIgnoreCase: v.optional(v.nullable(v.string())),
  notContains: v.optional(v.nullable(v.string())),
  notContainsIgnoreCase: v.optional(v.nullable(v.string())),
  containsIgnoreCaseAndAccent: v.optional(v.nullable(v.string())),
})

export const Subscription: v.GenericSchema<unknown, T.Subscription> = v.looseObject({
  workflowStateCreated: v.optional(v.lazy(() => WorkflowState)),
  workflowStateUpdated: v.optional(v.lazy(() => WorkflowState)),
  workflowStateArchived: v.optional(v.lazy(() => WorkflowState)),
  issueHistoryCreated: v.optional(v.lazy(() => IssueHistory)),
  issueHistoryUpdated: v.optional(v.lazy(() => IssueHistory)),
  issueRelationCreated: v.optional(v.lazy(() => IssueRelation)),
  issueRelationUpdated: v.optional(v.lazy(() => IssueRelation)),
  issueRelationDeleted: v.optional(v.lazy(() => IssueRelation)),
  agentActivityCreated: v.optional(v.lazy(() => AgentActivity)),
  agentActivityUpdated: v.optional(v.lazy(() => AgentActivity)),
  agentActivityArchived: v.optional(v.lazy(() => AgentActivity)),
  projectLabelCreated: v.optional(v.lazy(() => ProjectLabel)),
  projectLabelUpdated: v.optional(v.lazy(() => ProjectLabel)),
  projectLabelDeleted: v.optional(v.lazy(() => ProjectLabel)),
  userSettingsUpdated: v.optional(v.lazy(() => UserSettings)),
  favoriteCreated: v.optional(v.lazy(() => Favorite)),
  favoriteUpdated: v.optional(v.lazy(() => Favorite)),
  favoriteDeleted: v.optional(v.lazy(() => Favorite)),
  documentContentRevisionCreated: v.optional(v.lazy(() => DocumentContentRevision)),
  documentContentRevisionUpdated: v.optional(v.lazy(() => DocumentContentRevision)),
  documentContentRevisionDeleted: v.optional(v.lazy(() => DocumentContentRevision)),
  notificationCreated: v.optional(v.lazy(() => Notification)),
  notificationUpdated: v.optional(v.lazy(() => Notification)),
  notificationArchived: v.optional(v.lazy(() => Notification)),
  notificationUnarchived: v.optional(v.lazy(() => Notification)),
  notificationDeleted: v.optional(v.lazy(() => Notification)),
  teamMembershipCreated: v.optional(v.lazy(() => TeamMembership)),
  teamMembershipUpdated: v.optional(v.lazy(() => TeamMembership)),
  teamMembershipDeleted: v.optional(v.lazy(() => TeamMembership)),
  issueLabelCreated: v.optional(v.lazy(() => IssueLabel)),
  issueLabelUpdated: v.optional(v.lazy(() => IssueLabel)),
  issueLabelDeleted: v.optional(v.lazy(() => IssueLabel)),
  projectUpdateCreated: v.optional(v.lazy(() => ProjectUpdate)),
  projectUpdateUpdated: v.optional(v.lazy(() => ProjectUpdate)),
  projectUpdateArchived: v.optional(v.lazy(() => ProjectUpdate)),
  projectUpdateDeleted: v.optional(v.lazy(() => ProjectUpdate)),
  draftCreated: v.optional(v.lazy(() => Draft)),
  draftUpdated: v.optional(v.lazy(() => Draft)),
  draftDeleted: v.optional(v.lazy(() => Draft)),
  roadmapCreated: v.optional(v.lazy(() => Roadmap)),
  roadmapUpdated: v.optional(v.lazy(() => Roadmap)),
  roadmapDeleted: v.optional(v.lazy(() => Roadmap)),
  initiativeCreated: v.optional(v.lazy(() => Initiative)),
  initiativeUpdated: v.optional(v.lazy(() => Initiative)),
  initiativeDeleted: v.optional(v.lazy(() => Initiative)),
  documentCreated: v.optional(v.lazy(() => Document)),
  documentUpdated: v.optional(v.lazy(() => Document)),
  documentArchived: v.optional(v.lazy(() => Document)),
  documentUnarchived: v.optional(v.lazy(() => Document)),
  cycleCreated: v.optional(v.lazy(() => Cycle)),
  cycleUpdated: v.optional(v.lazy(() => Cycle)),
  cycleArchived: v.optional(v.lazy(() => Cycle)),
  teamCreated: v.optional(v.lazy(() => Team)),
  teamUpdated: v.optional(v.lazy(() => Team)),
  teamDeleted: v.optional(v.lazy(() => Team)),
  commentCreated: v.optional(v.lazy(() => Comment)),
  commentUpdated: v.optional(v.lazy(() => Comment)),
  commentArchived: v.optional(v.lazy(() => Comment)),
  commentUnarchived: v.optional(v.lazy(() => Comment)),
  commentDeleted: v.optional(v.lazy(() => Comment)),
  issueCreated: v.optional(v.lazy(() => Issue)),
  issueUpdated: v.optional(v.lazy(() => Issue)),
  issueArchived: v.optional(v.lazy(() => Issue)),
  issueUnarchived: v.optional(v.lazy(() => Issue)),
  userCreated: v.optional(v.lazy(() => User)),
  userUpdated: v.optional(v.lazy(() => User)),
  projectCreated: v.optional(v.lazy(() => Project)),
  projectUpdated: v.optional(v.lazy(() => Project)),
  projectArchived: v.optional(v.lazy(() => Project)),
  projectUnarchived: v.optional(v.lazy(() => Project)),
  documentContentCreated: v.optional(v.lazy(() => DocumentContent)),
  documentContentUpdated: v.optional(v.lazy(() => DocumentContent)),
  agentSessionCreated: v.optional(v.lazy(() => AgentSession)),
  agentSessionUpdated: v.optional(v.lazy(() => AgentSession)),
  organizationUpdated: v.optional(v.lazy(() => Organization)),
})

export const SubTypeComparator: v.GenericSchema<unknown, T.SubTypeComparator> = v.looseObject({
  eq: v.optional(v.nullable(v.string())),
  neq: v.optional(v.nullable(v.string())),
  in: v.optional(v.nullable(v.array(v.string()))),
  nin: v.optional(v.nullable(v.array(v.string()))),
  null: v.optional(v.nullable(v.boolean())),
})

export const SuccessPayload: v.GenericSchema<unknown, T.SuccessPayload> = v.looseObject({
  lastSyncId: v.optional(number()),
  success: v.optional(v.boolean()),
})

export const Summary: v.GenericSchema<unknown, T.Summary> = v.looseObject({
  id: v.optional(v.string()),
  createdAt: v.optional(v.string()),
  updatedAt: v.optional(v.string()),
  archivedAt: v.optional(v.nullable(v.string())),
  issue: v.optional(v.lazy(() => Issue)),
  content: v.optional(v.unknown()),
  evalLogId: v.optional(v.nullable(v.string())),
  generationStatus: v.optional(v.lazy(() => SummaryGenerationStatus)),
  generatedAt: v.optional(v.string()),
})

export const SummaryGenerationStatus: v.GenericSchema<unknown, T.SummaryGenerationStatus> = v.picklist([
  "pending",
  "completed",
  "failed",
])

export const SyncedExternalThread: v.GenericSchema<unknown, T.SyncedExternalThread> = v.looseObject({
  id: v.optional(v.nullable(v.string())),
  type: v.optional(v.string()),
  subType: v.optional(v.nullable(v.string())),
  name: v.optional(v.nullable(v.string())),
  displayName: v.optional(v.nullable(v.string())),
  url: v.optional(v.nullable(v.string())),
  isConnected: v.optional(v.boolean()),
  isPersonalIntegrationConnected: v.optional(v.boolean()),
  isPersonalIntegrationRequired: v.optional(v.boolean()),
})

export const TargetDateSort: v.GenericSchema<unknown, T.TargetDateSort> = v.looseObject({
  nulls: v.optional(v.nullable(v.lazy(() => PaginationNulls))),
  order: v.optional(v.nullable(v.lazy(() => PaginationSortOrder))),
})

export const Team: v.GenericSchema<unknown, T.Team> = v.looseObject({
  id: v.optional(v.string()),
  createdAt: v.optional(v.string()),
  updatedAt: v.optional(v.string()),
  archivedAt: v.optional(v.nullable(v.string())),
  name: v.optional(v.string()),
  key: v.optional(v.string()),
  description: v.optional(v.nullable(v.string())),
  icon: v.optional(v.nullable(v.string())),
  color: v.optional(v.nullable(v.string())),
  retiredAt: v.optional(v.nullable(v.string())),
  organization: v.optional(v.lazy(() => Organization)),
  parent: v.optional(v.nullable(v.lazy(() => Team))),
  cyclesEnabled: v.optional(v.boolean()),
  cycleStartDay: v.optional(number()),
  cycleDuration: v.optional(number()),
  cycleCooldownTime: v.optional(number()),
  cycleIssueAutoAssignStarted: v.optional(v.boolean()),
  cycleIssueAutoAssignCompleted: v.optional(v.boolean()),
  cycleLockToActive: v.optional(v.boolean()),
  upcomingCycleCount: v.optional(number()),
  timezone: v.optional(v.string()),
  inheritWorkflowStatuses: v.optional(v.boolean()),
  inheritIssueEstimation: v.optional(v.boolean()),
  issueEstimationType: v.optional(v.string()),
  issueOrderingNoPriorityFirst: v.optional(v.boolean()),
  issueEstimationAllowZero: v.optional(v.boolean()),
  setIssueSortOrderOnStateChange: v.optional(v.string()),
  issueEstimationExtended: v.optional(v.boolean()),
  defaultIssueEstimate: v.optional(number()),
  triageEnabled: v.optional(v.boolean()),
  requirePriorityToLeaveTriage: v.optional(v.boolean()),
  defaultIssueState: v.optional(v.nullable(v.lazy(() => WorkflowState))),
  defaultTemplateForMembers: v.optional(v.nullable(v.lazy(() => Template))),
  defaultTemplateForMembersId: v.optional(v.nullable(v.string())),
  defaultTemplateForNonMembers: v.optional(v.nullable(v.lazy(() => Template))),
  defaultTemplateForNonMembersId: v.optional(v.nullable(v.string())),
  defaultProjectTemplate: v.optional(v.nullable(v.lazy(() => Template))),
  triageIssueState: v.optional(v.nullable(v.lazy(() => WorkflowState))),
  private: v.optional(v.boolean()),
  allMembersCanJoin: v.optional(v.nullable(v.boolean())),
  securitySettings: v.optional(v.unknown()),
  scimManaged: v.optional(v.boolean()),
  scimGroupName: v.optional(v.nullable(v.string())),
  draftWorkflowState: v.optional(v.nullable(v.lazy(() => WorkflowState))),
  startWorkflowState: v.optional(v.nullable(v.lazy(() => WorkflowState))),
  reviewWorkflowState: v.optional(v.nullable(v.lazy(() => WorkflowState))),
  mergeableWorkflowState: v.optional(v.nullable(v.lazy(() => WorkflowState))),
  mergeWorkflowState: v.optional(v.nullable(v.lazy(() => WorkflowState))),
  groupIssueHistory: v.optional(v.boolean()),
  aiThreadSummariesEnabled: v.optional(v.boolean()),
  aiDiscussionSummariesEnabled: v.optional(v.boolean()),
  slackNewIssue: v.optional(v.boolean()),
  slackIssueComments: v.optional(v.boolean()),
  slackIssueStatuses: v.optional(v.boolean()),
  autoClosePeriod: v.optional(v.nullable(number())),
  autoCloseStateId: v.optional(v.nullable(v.string())),
  autoArchivePeriod: v.optional(number()),
  autoCloseParentIssues: v.optional(v.nullable(v.boolean())),
  autoCloseChildIssues: v.optional(v.nullable(v.boolean())),
  cycleCalenderUrl: v.optional(v.string()),
  visibility: v.optional(v.lazy(() => TeamVisibility)),
  markedAsDuplicateWorkflowState: v.optional(v.nullable(v.lazy(() => WorkflowState))),
  displayName: v.optional(v.string()),
  issues: v.optional(v.lazy(() => IssueConnection)),
  issueCount: v.optional(integer()),
  ledInitiativeCount: v.optional(integer()),
  loops: v.optional(v.lazy(() => WorkflowDefinitionConnection)),
  cycles: v.optional(v.lazy(() => CycleConnection)),
  activeCycle: v.optional(v.nullable(v.lazy(() => Cycle))),
  triageResponsibility: v.optional(v.nullable(v.lazy(() => TriageResponsibility))),
  members: v.optional(v.lazy(() => UserConnection)),
  membership: v.optional(v.nullable(v.lazy(() => TeamMembership))),
  viewerCanJoin: v.optional(v.boolean()),
  viewerMembership: v.optional(v.nullable(v.lazy(() => TeamMembership))),
  viewerCanLeave: v.optional(v.boolean()),
  memberships: v.optional(v.lazy(() => TeamMembershipConnection)),
  projects: v.optional(v.lazy(() => ProjectConnection)),
  releasePipelines: v.optional(v.lazy(() => ReleasePipelineConnection)),
  states: v.optional(v.lazy(() => WorkflowStateConnection)),
  gitAutomationStates: v.optional(v.lazy(() => GitAutomationStateConnection)),
  templates: v.optional(v.lazy(() => TemplateConnection)),
  labels: v.optional(v.lazy(() => IssueLabelConnection)),
  webhooks: v.optional(v.lazy(() => WebhookConnection)),
  integrationsSettings: v.optional(v.nullable(v.lazy(() => IntegrationsSettings))),
  initiativesEnabled: v.optional(v.boolean()),
  issueSortOrderDefaultToBottom: v.optional(v.boolean()),
  inviteHash: v.optional(v.string()),
})

export const TeamArchivePayload: v.GenericSchema<unknown, T.TeamArchivePayload> = v.looseObject({
  lastSyncId: v.optional(number()),
  success: v.optional(v.boolean()),
  entity: v.optional(v.nullable(v.lazy(() => Team))),
})

export const TeamCollectionFilter: v.GenericSchema<unknown, T.TeamCollectionFilter> = v.looseObject({
  id: v.optional(v.nullable(v.lazy(() => IDComparator))),
  createdAt: v.optional(v.nullable(v.lazy(() => DateComparator))),
  updatedAt: v.optional(v.nullable(v.lazy(() => DateComparator))),
  and: v.optional(v.nullable(v.array(v.lazy(() => TeamCollectionFilter)))),
  or: v.optional(v.nullable(v.array(v.lazy(() => TeamCollectionFilter)))),
  some: v.optional(v.nullable(v.lazy(() => TeamFilter))),
  every: v.optional(v.nullable(v.lazy(() => TeamFilter))),
  length: v.optional(v.nullable(v.lazy(() => NumberComparator))),
  parent: v.optional(v.nullable(v.lazy(() => NullableTeamFilter))),
  ancestors: v.optional(v.nullable(v.lazy(() => TeamCollectionFilter))),
})

export const TeamConnection: v.GenericSchema<unknown, T.TeamConnection> = v.looseObject({
  edges: v.optional(v.array(v.lazy(() => TeamEdge))),
  nodes: v.optional(v.array(v.lazy(() => Team))),
  pageInfo: v.optional(v.lazy(() => PageInfo)),
})

export const TeamCreateInput: v.GenericSchema<unknown, T.TeamCreateInput> = v.looseObject({
  id: v.optional(v.nullable(v.string())),
  name: v.string(),
  description: v.optional(v.nullable(v.string())),
  key: v.optional(v.nullable(v.string())),
  icon: v.optional(v.nullable(v.string())),
  color: v.optional(v.nullable(v.string())),
  cyclesEnabled: v.optional(v.nullable(v.boolean())),
  cycleStartDay: v.optional(v.nullable(number())),
  cycleDuration: v.optional(v.nullable(integer())),
  cycleCooldownTime: v.optional(v.nullable(integer())),
  cycleIssueAutoAssignStarted: v.optional(v.nullable(v.boolean())),
  cycleIssueAutoAssignCompleted: v.optional(v.nullable(v.boolean())),
  cycleLockToActive: v.optional(v.nullable(v.boolean())),
  upcomingCycleCount: v.optional(v.nullable(number())),
  triageEnabled: v.optional(v.nullable(v.boolean())),
  requirePriorityToLeaveTriage: v.optional(v.nullable(v.boolean())),
  timezone: v.optional(v.nullable(v.string())),
  inheritIssueEstimation: v.optional(v.nullable(v.boolean())),
  issueEstimationType: v.optional(v.nullable(v.string())),
  issueEstimationAllowZero: v.optional(v.nullable(v.boolean())),
  setIssueSortOrderOnStateChange: v.optional(v.nullable(v.string())),
  issueEstimationExtended: v.optional(v.nullable(v.boolean())),
  defaultIssueEstimate: v.optional(v.nullable(number())),
  groupIssueHistory: v.optional(v.nullable(v.boolean())),
  defaultTemplateForMembersId: v.optional(v.nullable(v.string())),
  defaultTemplateForNonMembersId: v.optional(v.nullable(v.string())),
  defaultProjectTemplateId: v.optional(v.nullable(v.string())),
  autoClosePeriod: v.optional(v.nullable(number())),
  autoCloseStateId: v.optional(v.nullable(v.string())),
  autoArchivePeriod: v.optional(v.nullable(number())),
  parentId: v.optional(v.nullable(v.string())),
  issueSharingEnabled: v.optional(v.nullable(v.boolean())),
  initiativesEnabled: v.optional(v.nullable(v.boolean())),
})

export const TeamEdge: v.GenericSchema<unknown, T.TeamEdge> = v.looseObject({
  node: v.optional(v.lazy(() => Team)),
  cursor: v.optional(v.string()),
})

export const TeamFilter: v.GenericSchema<unknown, T.TeamFilter> = v.looseObject({
  id: v.optional(v.nullable(v.lazy(() => IDComparator))),
  createdAt: v.optional(v.nullable(v.lazy(() => DateComparator))),
  updatedAt: v.optional(v.nullable(v.lazy(() => DateComparator))),
  name: v.optional(v.nullable(v.lazy(() => StringComparator))),
  key: v.optional(v.nullable(v.lazy(() => StringComparator))),
  description: v.optional(v.nullable(v.lazy(() => NullableStringComparator))),
  private: v.optional(v.nullable(v.lazy(() => BooleanComparator))),
  visibility: v.optional(v.nullable(v.lazy(() => TeamVisibilityComparator))),
  members: v.optional(v.nullable(v.lazy(() => UserCollectionFilter))),
  users: v.optional(v.nullable(v.lazy(() => UserCollectionFilter))),
  owners: v.optional(v.nullable(v.lazy(() => UserCollectionFilter))),
  retiredAt: v.optional(v.nullable(v.lazy(() => NullableDateComparator))),
  issues: v.optional(v.nullable(v.lazy(() => IssueCollectionFilter))),
  parent: v.optional(v.nullable(v.lazy(() => NullableTeamFilter))),
  ancestors: v.optional(v.nullable(v.lazy(() => TeamCollectionFilter))),
  restrictedBy: v.optional(v.nullable(v.lazy(() => NullableTeamFilter))),
  releasePipelines: v.optional(v.nullable(v.lazy(() => ReleasePipelineCollectionFilter))),
  and: v.optional(v.nullable(v.array(v.lazy(() => TeamFilter)))),
  or: v.optional(v.nullable(v.array(v.lazy(() => TeamFilter)))),
})

export const TeamMembership: v.GenericSchema<unknown, T.TeamMembership> = v.looseObject({
  id: v.optional(v.string()),
  createdAt: v.optional(v.string()),
  updatedAt: v.optional(v.string()),
  archivedAt: v.optional(v.nullable(v.string())),
  user: v.optional(v.lazy(() => User)),
  team: v.optional(v.lazy(() => Team)),
  owner: v.optional(v.boolean()),
  sortOrder: v.optional(number()),
})

export const TeamMembershipConnection: v.GenericSchema<unknown, T.TeamMembershipConnection> = v.looseObject({
  edges: v.optional(v.array(v.lazy(() => TeamMembershipEdge))),
  nodes: v.optional(v.array(v.lazy(() => TeamMembership))),
  pageInfo: v.optional(v.lazy(() => PageInfo)),
})

export const TeamMembershipCreateInput: v.GenericSchema<unknown, T.TeamMembershipCreateInput> = v.looseObject({
  id: v.optional(v.nullable(v.string())),
  userId: v.string(),
  teamId: v.string(),
  sortOrder: v.optional(v.nullable(number())),
})

export const TeamMembershipEdge: v.GenericSchema<unknown, T.TeamMembershipEdge> = v.looseObject({
  node: v.optional(v.lazy(() => TeamMembership)),
  cursor: v.optional(v.string()),
})

export const TeamMembershipPayload: v.GenericSchema<unknown, T.TeamMembershipPayload> = v.looseObject({
  lastSyncId: v.optional(number()),
  teamMembership: v.optional(v.nullable(v.lazy(() => TeamMembership))),
  success: v.optional(v.boolean()),
})

export const TeamMembershipUpdateInput: v.GenericSchema<unknown, T.TeamMembershipUpdateInput> = v.looseObject({
  sortOrder: v.optional(v.nullable(number())),
})

export const TeamNotificationSubscription: v.GenericSchema<unknown, T.TeamNotificationSubscription> = v.looseObject({
  id: v.optional(v.string()),
  createdAt: v.optional(v.string()),
  updatedAt: v.optional(v.string()),
  archivedAt: v.optional(v.nullable(v.string())),
  subscriber: v.optional(v.lazy(() => User)),
  customer: v.optional(v.nullable(v.lazy(() => Customer))),
  customView: v.optional(v.nullable(v.lazy(() => CustomView))),
  cycle: v.optional(v.nullable(v.lazy(() => Cycle))),
  label: v.optional(v.nullable(v.lazy(() => IssueLabel))),
  project: v.optional(v.nullable(v.lazy(() => Project))),
  initiative: v.optional(v.nullable(v.lazy(() => Initiative))),
  team: v.optional(v.lazy(() => Team)),
  user: v.optional(v.nullable(v.lazy(() => User))),
  contextViewType: v.optional(v.nullable(v.lazy(() => ContextViewType))),
  userContextViewType: v.optional(v.nullable(v.lazy(() => UserContextViewType))),
  active: v.optional(v.boolean()),
  includeSubInitiativeUpdates: v.optional(v.boolean()),
  notificationSubscriptionTypes: v.optional(v.array(v.string())),
})

export const TeamPayload: v.GenericSchema<unknown, T.TeamPayload> = v.looseObject({
  lastSyncId: v.optional(number()),
  team: v.optional(v.nullable(v.lazy(() => Team))),
  success: v.optional(v.boolean()),
})

export const TeamPinnedResource: v.GenericSchema<unknown, T.TeamPinnedResource> = v.looseObject({
  id: v.optional(v.string()),
  createdAt: v.optional(v.string()),
  updatedAt: v.optional(v.string()),
  archivedAt: v.optional(v.nullable(v.string())),
  team: v.optional(v.lazy(() => Team)),
  section: v.optional(v.nullable(v.lazy(() => TeamResourceSection))),
  document: v.optional(v.nullable(v.lazy(() => Document))),
  entityExternalLink: v.optional(v.nullable(v.lazy(() => EntityExternalLink))),
  sortOrder: v.optional(number()),
  creator: v.optional(v.nullable(v.lazy(() => User))),
  updatedBy: v.optional(v.nullable(v.lazy(() => User))),
})

export const TeamResourceSection: v.GenericSchema<unknown, T.TeamResourceSection> = v.looseObject({
  id: v.optional(v.string()),
  createdAt: v.optional(v.string()),
  updatedAt: v.optional(v.string()),
  archivedAt: v.optional(v.nullable(v.string())),
  team: v.optional(v.lazy(() => Team)),
  title: v.optional(v.string()),
  sortOrder: v.optional(number()),
  creator: v.optional(v.nullable(v.lazy(() => User))),
  updatedBy: v.optional(v.nullable(v.lazy(() => User))),
})

export const TeamRoleType: v.GenericSchema<unknown, T.TeamRoleType> = v.picklist(["owner", "member"])

export const TeamSecuritySettingsInput: v.GenericSchema<unknown, T.TeamSecuritySettingsInput> = v.looseObject({
  issueSharing: v.optional(v.nullable(v.lazy(() => TeamRoleType))),
  labelManagement: v.optional(v.nullable(v.lazy(() => TeamRoleType))),
  memberManagement: v.optional(v.nullable(v.lazy(() => TeamRoleType))),
  teamManagement: v.optional(v.nullable(v.lazy(() => TeamRoleType))),
  templateManagement: v.optional(v.nullable(v.lazy(() => TeamRoleType))),
  agentSkillsManagement: v.optional(v.nullable(v.lazy(() => TeamRoleType))),
  automationManagement: v.optional(v.nullable(v.lazy(() => TeamRoleType))),
  pinnedViewManagement: v.optional(v.nullable(v.lazy(() => TeamRoleType))),
})

export const TeamSort: v.GenericSchema<unknown, T.TeamSort> = v.looseObject({
  nulls: v.optional(v.nullable(v.lazy(() => PaginationNulls))),
  order: v.optional(v.nullable(v.lazy(() => PaginationSortOrder))),
})

export const TeamUpdateInput: v.GenericSchema<unknown, T.TeamUpdateInput> = v.looseObject({
  name: v.optional(v.nullable(v.string())),
  description: v.optional(v.nullable(v.string())),
  key: v.optional(v.nullable(v.string())),
  icon: v.optional(v.nullable(v.string())),
  color: v.optional(v.nullable(v.string())),
  cyclesEnabled: v.optional(v.nullable(v.boolean())),
  cycleStartDay: v.optional(v.nullable(number())),
  cycleDuration: v.optional(v.nullable(integer())),
  cycleCooldownTime: v.optional(v.nullable(integer())),
  cycleIssueAutoAssignStarted: v.optional(v.nullable(v.boolean())),
  cycleIssueAutoAssignCompleted: v.optional(v.nullable(v.boolean())),
  cycleLockToActive: v.optional(v.nullable(v.boolean())),
  cycleEnabledStartDate: v.optional(v.nullable(v.string())),
  upcomingCycleCount: v.optional(v.nullable(number())),
  timezone: v.optional(v.nullable(v.string())),
  inheritIssueEstimation: v.optional(v.nullable(v.boolean())),
  issueEstimationType: v.optional(v.nullable(v.string())),
  issueEstimationAllowZero: v.optional(v.nullable(v.boolean())),
  setIssueSortOrderOnStateChange: v.optional(v.nullable(v.string())),
  issueEstimationExtended: v.optional(v.nullable(v.boolean())),
  defaultIssueEstimate: v.optional(v.nullable(number())),
  slackNewIssue: v.optional(v.nullable(v.boolean())),
  slackIssueComments: v.optional(v.nullable(v.boolean())),
  slackIssueStatuses: v.optional(v.nullable(v.boolean())),
  groupIssueHistory: v.optional(v.nullable(v.boolean())),
  aiThreadSummariesEnabled: v.optional(v.nullable(v.boolean())),
  aiDiscussionSummariesEnabled: v.optional(v.nullable(v.boolean())),
  defaultTemplateForMembersId: v.optional(v.nullable(v.string())),
  defaultTemplateForNonMembersId: v.optional(v.nullable(v.string())),
  defaultProjectTemplateId: v.optional(v.nullable(v.string())),
  private: v.optional(v.nullable(v.boolean())),
  triageEnabled: v.optional(v.nullable(v.boolean())),
  requirePriorityToLeaveTriage: v.optional(v.nullable(v.boolean())),
  defaultIssueStateId: v.optional(v.nullable(v.string())),
  autoClosePeriod: v.optional(v.nullable(number())),
  autoCloseStateId: v.optional(v.nullable(v.string())),
  autoCloseParentIssues: v.optional(v.nullable(v.boolean())),
  autoCloseChildIssues: v.optional(v.nullable(v.boolean())),
  autoArchivePeriod: v.optional(v.nullable(number())),
  joinByDefault: v.optional(v.nullable(v.boolean())),
  scimManaged: v.optional(v.nullable(v.boolean())),
  scimGroupName: v.optional(v.nullable(v.string())),
  parentId: v.optional(v.nullable(v.string())),
  issueSharingEnabled: v.optional(v.nullable(v.boolean())),
  initiativesEnabled: v.optional(v.nullable(v.boolean())),
  securitySettings: v.optional(v.nullable(v.lazy(() => TeamSecuritySettingsInput))),
  allMembersCanJoin: v.optional(v.nullable(v.boolean())),
  retiredAt: v.optional(v.nullable(v.string())),
})

export const TeamVisibility: v.GenericSchema<unknown, T.TeamVisibility> = v.picklist([
  "public",
  "restricted",
  "private",
])

export const TeamVisibilityComparator: v.GenericSchema<unknown, T.TeamVisibilityComparator> = v.looseObject({
  eq: v.optional(v.nullable(v.lazy(() => TeamVisibility))),
  neq: v.optional(v.nullable(v.lazy(() => TeamVisibility))),
  in: v.optional(v.nullable(v.array(v.lazy(() => TeamVisibility)))),
  nin: v.optional(v.nullable(v.array(v.lazy(() => TeamVisibility)))),
})

export const Template: v.GenericSchema<unknown, T.Template> = v.looseObject({
  id: v.optional(v.string()),
  createdAt: v.optional(v.string()),
  updatedAt: v.optional(v.string()),
  archivedAt: v.optional(v.nullable(v.string())),
  type: v.optional(v.string()),
  name: v.optional(v.string()),
  description: v.optional(v.nullable(v.string())),
  icon: v.optional(v.nullable(v.string())),
  color: v.optional(v.nullable(v.string())),
  templateData: v.optional(v.unknown()),
  sortOrder: v.optional(number()),
  lastAppliedAt: v.optional(v.nullable(v.string())),
  organization: v.optional(v.lazy(() => Organization)),
  team: v.optional(v.nullable(v.lazy(() => Team))),
  pipeline: v.optional(v.nullable(v.lazy(() => ReleasePipeline))),
  creator: v.optional(v.nullable(v.lazy(() => User))),
  lastUpdatedBy: v.optional(v.nullable(v.lazy(() => User))),
  inheritedFrom: v.optional(v.nullable(v.lazy(() => Template))),
  content: v.optional(v.nullable(v.string())),
  hasFormFields: v.optional(v.boolean()),
})

export const TemplateConnection: v.GenericSchema<unknown, T.TemplateConnection> = v.looseObject({
  edges: v.optional(v.array(v.lazy(() => TemplateEdge))),
  nodes: v.optional(v.array(v.lazy(() => Template))),
  pageInfo: v.optional(v.lazy(() => PageInfo)),
})

export const TemplateCreateInput: v.GenericSchema<unknown, T.TemplateCreateInput> = v.looseObject({
  id: v.optional(v.nullable(v.string())),
  type: v.string(),
  teamId: v.optional(v.nullable(v.string())),
  pipelineId: v.optional(v.nullable(v.string())),
  name: v.string(),
  description: v.optional(v.nullable(v.string())),
  icon: v.optional(v.nullable(v.string())),
  color: v.optional(v.nullable(v.string())),
  templateData: v.unknown(),
  sortOrder: v.optional(v.nullable(number())),
})

export const TemplateEdge: v.GenericSchema<unknown, T.TemplateEdge> = v.looseObject({
  node: v.optional(v.lazy(() => Template)),
  cursor: v.optional(v.string()),
})

export const TemplateFilter: v.GenericSchema<unknown, T.TemplateFilter> = v.looseObject({
  id: v.optional(v.nullable(v.lazy(() => IDComparator))),
  createdAt: v.optional(v.nullable(v.lazy(() => DateComparator))),
  updatedAt: v.optional(v.nullable(v.lazy(() => DateComparator))),
  name: v.optional(v.nullable(v.lazy(() => StringComparator))),
  type: v.optional(v.nullable(v.lazy(() => StringComparator))),
  inheritedFromId: v.optional(v.nullable(v.lazy(() => IDComparator))),
  team: v.optional(v.nullable(v.lazy(() => NullableTeamFilter))),
  and: v.optional(v.nullable(v.array(v.lazy(() => TemplateFilter)))),
  or: v.optional(v.nullable(v.array(v.lazy(() => TemplateFilter)))),
})

export const TemplatePayload: v.GenericSchema<unknown, T.TemplatePayload> = v.looseObject({
  lastSyncId: v.optional(number()),
  template: v.optional(v.lazy(() => Template)),
  success: v.optional(v.boolean()),
})

export const TemplateUpdateInput: v.GenericSchema<unknown, T.TemplateUpdateInput> = v.looseObject({
  name: v.optional(v.nullable(v.string())),
  description: v.optional(v.nullable(v.string())),
  icon: v.optional(v.nullable(v.string())),
  color: v.optional(v.nullable(v.string())),
  teamId: v.optional(v.nullable(v.string())),
  templateData: v.optional(v.nullable(v.unknown())),
  sortOrder: v.optional(v.nullable(number())),
})

export const TierSort: v.GenericSchema<unknown, T.TierSort> = v.looseObject({
  nulls: v.optional(v.nullable(v.lazy(() => PaginationNulls))),
  order: v.optional(v.nullable(v.lazy(() => PaginationSortOrder))),
})

export const TimeSchedule: v.GenericSchema<unknown, T.TimeSchedule> = v.looseObject({
  id: v.optional(v.string()),
  createdAt: v.optional(v.string()),
  updatedAt: v.optional(v.string()),
  archivedAt: v.optional(v.nullable(v.string())),
  name: v.optional(v.string()),
  entries: v.optional(v.nullable(v.array(v.lazy(() => TimeScheduleEntry)))),
  externalId: v.optional(v.nullable(v.string())),
  externalUrl: v.optional(v.nullable(v.string())),
  config: v.optional(v.nullable(v.lazy(() => TimeScheduleConfig))),
  organization: v.optional(v.lazy(() => Organization)),
  integration: v.optional(v.nullable(v.lazy(() => Integration))),
})

export const TimeScheduleConfig: v.GenericSchema<unknown, T.TimeScheduleConfig> = v.looseObject({
  nextShiftByUserId: v.optional(v.unknown()),
})

export const TimeScheduleConfigInput: v.GenericSchema<unknown, T.TimeScheduleConfigInput> = v.looseObject({
  nextShiftByUserId: v.unknown(),
})

export const TimeScheduleConnection: v.GenericSchema<unknown, T.TimeScheduleConnection> = v.looseObject({
  edges: v.optional(v.array(v.lazy(() => TimeScheduleEdge))),
  nodes: v.optional(v.array(v.lazy(() => TimeSchedule))),
  pageInfo: v.optional(v.lazy(() => PageInfo)),
})

export const TimeScheduleCreateInput: v.GenericSchema<unknown, T.TimeScheduleCreateInput> = v.looseObject({
  id: v.optional(v.nullable(v.string())),
  name: v.string(),
  entries: v.array(v.lazy(() => TimeScheduleEntryInput)),
  externalId: v.optional(v.nullable(v.string())),
  externalUrl: v.optional(v.nullable(v.string())),
  config: v.optional(v.nullable(v.lazy(() => TimeScheduleConfigInput))),
})

export const TimeScheduleEdge: v.GenericSchema<unknown, T.TimeScheduleEdge> = v.looseObject({
  node: v.optional(v.lazy(() => TimeSchedule)),
  cursor: v.optional(v.string()),
})

export const TimeScheduleEntry: v.GenericSchema<unknown, T.TimeScheduleEntry> = v.looseObject({
  userId: v.optional(v.nullable(v.string())),
  userEmail: v.optional(v.nullable(v.string())),
  startsAt: v.optional(v.string()),
  endsAt: v.optional(v.string()),
  overriddenUser: v.optional(v.nullable(v.lazy(() => TimeScheduleUser))),
})

export const TimeScheduleEntryInput: v.GenericSchema<unknown, T.TimeScheduleEntryInput> = v.looseObject({
  userId: v.optional(v.nullable(v.string())),
  userEmail: v.optional(v.nullable(v.string())),
  startsAt: v.string(),
  endsAt: v.string(),
  overriddenUser: v.optional(v.nullable(v.lazy(() => TimeScheduleUserInput))),
})

export const TimeSchedulePayload: v.GenericSchema<unknown, T.TimeSchedulePayload> = v.looseObject({
  lastSyncId: v.optional(number()),
  timeSchedule: v.optional(v.lazy(() => TimeSchedule)),
  success: v.optional(v.boolean()),
})

export const TimeScheduleUpdateInput: v.GenericSchema<unknown, T.TimeScheduleUpdateInput> = v.looseObject({
  name: v.optional(v.nullable(v.string())),
  entries: v.optional(v.nullable(v.array(v.lazy(() => TimeScheduleEntryInput)))),
  externalId: v.optional(v.nullable(v.string())),
  externalUrl: v.optional(v.nullable(v.string())),
  config: v.optional(v.nullable(v.lazy(() => TimeScheduleConfigInput))),
})

export const TimeScheduleUser: v.GenericSchema<unknown, T.TimeScheduleUser> = v.looseObject({
  userId: v.optional(v.nullable(v.string())),
  userEmail: v.optional(v.nullable(v.string())),
})

export const TimeScheduleUserInput: v.GenericSchema<unknown, T.TimeScheduleUserInput> = v.looseObject({
  userId: v.optional(v.nullable(v.string())),
  userEmail: v.optional(v.nullable(v.string())),
})

export const TitleSort: v.GenericSchema<unknown, T.TitleSort> = v.looseObject({
  nulls: v.optional(v.nullable(v.lazy(() => PaginationNulls))),
  order: v.optional(v.nullable(v.lazy(() => PaginationSortOrder))),
})

export const TokenUserAccountAuthInput: v.GenericSchema<unknown, T.TokenUserAccountAuthInput> = v.looseObject({
  email: v.string(),
  token: v.string(),
  timezone: v.string(),
  inviteLink: v.optional(v.nullable(v.string())),
  clientAuthCode: v.optional(v.nullable(v.string())),
})

export const TriageResponsibility: v.GenericSchema<unknown, T.TriageResponsibility> = v.looseObject({
  id: v.optional(v.string()),
  createdAt: v.optional(v.string()),
  updatedAt: v.optional(v.string()),
  archivedAt: v.optional(v.nullable(v.string())),
  action: v.optional(v.lazy(() => TriageResponsibilityAction)),
  manualSelection: v.optional(v.nullable(v.lazy(() => TriageResponsibilityManualSelection))),
  team: v.optional(v.lazy(() => Team)),
  timeSchedule: v.optional(v.nullable(v.lazy(() => TimeSchedule))),
  currentUser: v.optional(v.nullable(v.lazy(() => User))),
})

export const TriageResponsibilityAction: v.GenericSchema<unknown, T.TriageResponsibilityAction> = v.picklist([
  "assign",
  "notify",
])

export const TriageResponsibilityConnection: v.GenericSchema<unknown, T.TriageResponsibilityConnection> = v.looseObject(
  {
    edges: v.optional(v.array(v.lazy(() => TriageResponsibilityEdge))),
    nodes: v.optional(v.array(v.lazy(() => TriageResponsibility))),
    pageInfo: v.optional(v.lazy(() => PageInfo)),
  },
)

export const TriageResponsibilityCreateInput: v.GenericSchema<unknown, T.TriageResponsibilityCreateInput> =
  v.looseObject({
    id: v.optional(v.nullable(v.string())),
    teamId: v.string(),
    action: v.string(),
    manualSelection: v.optional(v.nullable(v.lazy(() => TriageResponsibilityManualSelectionInput))),
    timeScheduleId: v.optional(v.nullable(v.string())),
  })

export const TriageResponsibilityEdge: v.GenericSchema<unknown, T.TriageResponsibilityEdge> = v.looseObject({
  node: v.optional(v.lazy(() => TriageResponsibility)),
  cursor: v.optional(v.string()),
})

export const TriageResponsibilityManualSelection: v.GenericSchema<unknown, T.TriageResponsibilityManualSelection> =
  v.looseObject({
    userIds: v.optional(v.array(v.string())),
  })

export const TriageResponsibilityManualSelectionInput: v.GenericSchema<
  unknown,
  T.TriageResponsibilityManualSelectionInput
> = v.looseObject({
  userIds: v.array(v.string()),
})

export const TriageResponsibilityPayload: v.GenericSchema<unknown, T.TriageResponsibilityPayload> = v.looseObject({
  lastSyncId: v.optional(number()),
  triageResponsibility: v.optional(v.lazy(() => TriageResponsibility)),
  success: v.optional(v.boolean()),
})

export const TriageResponsibilityUpdateInput: v.GenericSchema<unknown, T.TriageResponsibilityUpdateInput> =
  v.looseObject({
    action: v.optional(v.nullable(v.string())),
    manualSelection: v.optional(v.nullable(v.lazy(() => TriageResponsibilityManualSelectionInput))),
    timeScheduleId: v.optional(v.nullable(v.string())),
  })

export const UpdatedAtSort: v.GenericSchema<unknown, T.UpdatedAtSort> = v.looseObject({
  nulls: v.optional(v.nullable(v.lazy(() => PaginationNulls))),
  order: v.optional(v.nullable(v.lazy(() => PaginationSortOrder))),
})

export const UploadFile: v.GenericSchema<unknown, T.UploadFile> = v.looseObject({
  filename: v.optional(v.string()),
  contentType: v.optional(v.string()),
  size: v.optional(integer()),
  uploadUrl: v.optional(v.string()),
  assetUrl: v.optional(v.string()),
  metaData: v.optional(v.nullable(v.unknown())),
  headers: v.optional(v.array(v.lazy(() => UploadFileHeader))),
})

export const UploadFileHeader: v.GenericSchema<unknown, T.UploadFileHeader> = v.looseObject({
  key: v.optional(v.string()),
  value: v.optional(v.string()),
})

export const UploadPayload: v.GenericSchema<unknown, T.UploadPayload> = v.looseObject({
  lastSyncId: v.optional(number()),
  uploadFile: v.optional(v.nullable(v.lazy(() => UploadFile))),
  success: v.optional(v.boolean()),
})

export const UsageAlert: v.GenericSchema<unknown, T.UsageAlert> = v.looseObject({
  id: v.optional(v.string()),
  createdAt: v.optional(v.string()),
  updatedAt: v.optional(v.string()),
  archivedAt: v.optional(v.nullable(v.string())),
  type: v.optional(v.string()),
  metadata: v.optional(v.unknown()),
  resolvedAt: v.optional(v.nullable(v.string())),
})

export const UsageAlertConnection: v.GenericSchema<unknown, T.UsageAlertConnection> = v.looseObject({
  edges: v.optional(v.array(v.lazy(() => UsageAlertEdge))),
  nodes: v.optional(v.array(v.lazy(() => UsageAlert))),
  pageInfo: v.optional(v.lazy(() => PageInfo)),
})

export const UsageAlertEdge: v.GenericSchema<unknown, T.UsageAlertEdge> = v.looseObject({
  node: v.optional(v.lazy(() => UsageAlert)),
  cursor: v.optional(v.string()),
})

export const UsageAlertFilter: v.GenericSchema<unknown, T.UsageAlertFilter> = v.looseObject({
  id: v.optional(v.nullable(v.lazy(() => IDComparator))),
  createdAt: v.optional(v.nullable(v.lazy(() => DateComparator))),
  updatedAt: v.optional(v.nullable(v.lazy(() => DateComparator))),
  type: v.optional(v.nullable(v.lazy(() => UsageAlertTypeComparator))),
  and: v.optional(v.nullable(v.array(v.lazy(() => UsageAlertFilter)))),
  or: v.optional(v.nullable(v.array(v.lazy(() => UsageAlertFilter)))),
})

export const UsageAlertNotification: v.GenericSchema<unknown, T.UsageAlertNotification> = v.looseObject({
  id: v.optional(v.string()),
  createdAt: v.optional(v.string()),
  updatedAt: v.optional(v.string()),
  archivedAt: v.optional(v.nullable(v.string())),
  type: v.optional(v.string()),
  actor: v.optional(v.nullable(v.lazy(() => User))),
  externalUserActor: v.optional(v.nullable(v.lazy(() => ExternalUser))),
  user: v.optional(v.lazy(() => User)),
  readAt: v.optional(v.nullable(v.string())),
  emailedAt: v.optional(v.nullable(v.string())),
  snoozedUntilAt: v.optional(v.nullable(v.string())),
  unsnoozedAt: v.optional(v.nullable(v.string())),
  category: v.optional(v.lazy(() => NotificationCategory)),
  botActor: v.optional(v.nullable(v.lazy(() => ActorBot))),
  usageAlertId: v.optional(v.string()),
  usageAlert: v.optional(v.lazy(() => UsageAlert)),
})

export const UsageAlertType: v.GenericSchema<unknown, T.UsageAlertType> = v.picklist([
  "lowBalance",
  "exhausted",
  "expiringPromoCredit",
  "spendLimitReached",
])

export const UsageAlertTypeComparator: v.GenericSchema<unknown, T.UsageAlertTypeComparator> = v.looseObject({
  eq: v.optional(v.nullable(v.lazy(() => UsageAlertType))),
  neq: v.optional(v.nullable(v.lazy(() => UsageAlertType))),
  in: v.optional(v.nullable(v.array(v.lazy(() => UsageAlertType)))),
  nin: v.optional(v.nullable(v.array(v.lazy(() => UsageAlertType)))),
})

export const User: v.GenericSchema<unknown, T.User> = v.looseObject({
  id: v.optional(v.string()),
  createdAt: v.optional(v.string()),
  updatedAt: v.optional(v.string()),
  archivedAt: v.optional(v.nullable(v.string())),
  name: v.optional(v.string()),
  displayName: v.optional(v.string()),
  email: v.optional(v.string()),
  avatarUrl: v.optional(v.nullable(v.string())),
  disableReason: v.optional(v.nullable(v.string())),
  calendarHash: v.optional(v.nullable(v.string())),
  description: v.optional(v.nullable(v.string())),
  title: v.optional(v.nullable(v.string())),
  statusEmoji: v.optional(v.nullable(v.string())),
  statusLabel: v.optional(v.nullable(v.string())),
  statusUntilAt: v.optional(v.nullable(v.string())),
  timezone: v.optional(v.nullable(v.string())),
  organization: v.optional(v.lazy(() => Organization)),
  lastSeen: v.optional(v.nullable(v.string())),
  initials: v.optional(v.string()),
  avatarBackgroundColor: v.optional(v.string()),
  guest: v.optional(v.boolean()),
  app: v.optional(v.boolean()),
  active: v.optional(v.boolean()),
  drafts: v.optional(v.lazy(() => DraftConnection)),
  url: v.optional(v.string()),
  assignedIssues: v.optional(v.lazy(() => IssueConnection)),
  delegatedIssues: v.optional(v.lazy(() => IssueConnection)),
  createdIssues: v.optional(v.lazy(() => IssueConnection)),
  createdIssueCount: v.optional(integer()),
  teams: v.optional(v.lazy(() => TeamConnection)),
  teamMemberships: v.optional(v.lazy(() => TeamMembershipConnection)),
  canAccessAnyPublicTeam: v.optional(v.boolean()),
  isMe: v.optional(v.boolean()),
  admin: v.optional(v.boolean()),
  owner: v.optional(v.boolean()),
  isAssignable: v.optional(v.boolean()),
  isMentionable: v.optional(v.boolean()),
  supportsAgentSessions: v.optional(v.boolean()),
  inviteHash: v.optional(v.string()),
  gitHubUserId: v.optional(v.nullable(v.string())),
})

export const UserAdminPayload: v.GenericSchema<unknown, T.UserAdminPayload> = v.looseObject({
  success: v.optional(v.boolean()),
})

export const UserCollectionFilter: v.GenericSchema<unknown, T.UserCollectionFilter> = v.looseObject({
  id: v.optional(v.nullable(v.lazy(() => IDComparator))),
  createdAt: v.optional(v.nullable(v.lazy(() => DateComparator))),
  updatedAt: v.optional(v.nullable(v.lazy(() => DateComparator))),
  name: v.optional(v.nullable(v.lazy(() => StringComparator))),
  displayName: v.optional(v.nullable(v.lazy(() => StringComparator))),
  email: v.optional(v.nullable(v.lazy(() => StringComparator))),
  active: v.optional(v.nullable(v.lazy(() => BooleanComparator))),
  assignedIssues: v.optional(v.nullable(v.lazy(() => IssueCollectionFilter))),
  admin: v.optional(v.nullable(v.lazy(() => BooleanComparator))),
  owner: v.optional(v.nullable(v.lazy(() => BooleanComparator))),
  invited: v.optional(v.nullable(v.lazy(() => BooleanComparator))),
  isInvited: v.optional(v.nullable(v.lazy(() => BooleanComparator))),
  app: v.optional(v.nullable(v.lazy(() => BooleanComparator))),
  isMe: v.optional(v.nullable(v.lazy(() => BooleanComparator))),
  and: v.optional(v.nullable(v.array(v.lazy(() => UserCollectionFilter)))),
  or: v.optional(v.nullable(v.array(v.lazy(() => UserCollectionFilter)))),
  some: v.optional(v.nullable(v.lazy(() => UserFilter))),
  every: v.optional(v.nullable(v.lazy(() => UserFilter))),
  length: v.optional(v.nullable(v.lazy(() => NumberComparator))),
})

export const UserConnection: v.GenericSchema<unknown, T.UserConnection> = v.looseObject({
  edges: v.optional(v.array(v.lazy(() => UserEdge))),
  nodes: v.optional(v.array(v.lazy(() => User))),
  pageInfo: v.optional(v.lazy(() => PageInfo)),
})

export const UserContextViewType: v.GenericSchema<unknown, T.UserContextViewType> = v.picklist(["assigned"])

export const UserDisplayNameSort: v.GenericSchema<unknown, T.UserDisplayNameSort> = v.looseObject({
  nulls: v.optional(v.nullable(v.lazy(() => PaginationNulls))),
  order: v.optional(v.nullable(v.lazy(() => PaginationSortOrder))),
})

export const UserEdge: v.GenericSchema<unknown, T.UserEdge> = v.looseObject({
  node: v.optional(v.lazy(() => User)),
  cursor: v.optional(v.string()),
})

export const UserFilter: v.GenericSchema<unknown, T.UserFilter> = v.looseObject({
  id: v.optional(v.nullable(v.lazy(() => IDComparator))),
  createdAt: v.optional(v.nullable(v.lazy(() => DateComparator))),
  updatedAt: v.optional(v.nullable(v.lazy(() => DateComparator))),
  name: v.optional(v.nullable(v.lazy(() => StringComparator))),
  displayName: v.optional(v.nullable(v.lazy(() => StringComparator))),
  email: v.optional(v.nullable(v.lazy(() => StringComparator))),
  active: v.optional(v.nullable(v.lazy(() => BooleanComparator))),
  assignedIssues: v.optional(v.nullable(v.lazy(() => IssueCollectionFilter))),
  admin: v.optional(v.nullable(v.lazy(() => BooleanComparator))),
  owner: v.optional(v.nullable(v.lazy(() => BooleanComparator))),
  invited: v.optional(v.nullable(v.lazy(() => BooleanComparator))),
  isInvited: v.optional(v.nullable(v.lazy(() => BooleanComparator))),
  app: v.optional(v.nullable(v.lazy(() => BooleanComparator))),
  isMe: v.optional(v.nullable(v.lazy(() => BooleanComparator))),
  and: v.optional(v.nullable(v.array(v.lazy(() => UserFilter)))),
  or: v.optional(v.nullable(v.array(v.lazy(() => UserFilter)))),
})

export const UserFlagType: v.GenericSchema<unknown, T.UserFlagType> = v.picklist([
  "updatedSlackThreadSyncIntegration",
  "completedOnboarding",
  "desktopInstalled",
  "teamsPageIntroductionDismissed",
  "joinTeamIntroductionDismissed",
  "desktopDownloadToastDismissed",
  "emptyBacklogDismissed",
  "emptyCustomViewsDismissed",
  "emptyActiveIssuesDismissed",
  "emptyMyIssuesDismissed",
  "triageWelcomeDismissed",
  "cycleWelcomeDismissed",
  "projectWelcomeDismissed",
  "projectBacklogWelcomeDismissed",
  "projectUpdatesWelcomeDismissed",
  "pulseWelcomeDismissed",
  "analyticsWelcomeDismissed",
  "insightsWelcomeDismissed",
  "insightsHelpDismissed",
  "figmaPromptDismissed",
  "issueMovePromptCompleted",
  "migrateThemePreference",
  "listSelectionTip",
  "emptyParagraphSlashCommandTip",
  "editorSlashCommandUsed",
  "canPlaySnake",
  "canPlayTetris",
  "importBannerDismissed",
  "tryInvitePeopleDismissed",
  "tryRoadmapsDismissed",
  "tryCyclesDismissed",
  "tryTriageDismissed",
  "tryGithubDismissed",
  "tryCursorDismissed",
  "tryCodexDismissed",
  "rewindBannerDismissed",
  "helpIslandFeatureInsightsDismissed",
  "dueDateShortcutMigration",
  "slackCommentReactionTipShown",
  "issueLabelSuggestionUsed",
  "threadedCommentsNudgeIsSeen",
  "desktopTabsOnboardingDismissed",
  "milestoneOnboardingIsSeenAndDismissed",
  "projectBoardOnboardingIsSeenAndDismissed",
  "figmaPluginBannerDismissed",
  "initiativesBannerDismissed",
  "commandMenuClearShortcutTip",
  "slackBotWelcomeMessageShown",
  "slackAiFeedbackAcknowledgementShown",
  "teamsBotWelcomeMessageShown",
  "slackAgentPromoFromCreateNewIssueShown",
  "agentExamplesDismissed",
  "agentHomePageNotice",
  "agentHomeHeadlineSeen",
  "agentSharedSkillsPromoDismissed",
  "agentSharedSkillsSplashAnimationSeen",
  "agentLoopsPromoShown",
  "loopEditRestrictionSpeedbumpShown",
  "slackProjectChannelsPromoDismissed",
  "slackProjectChannelsPromoShown",
  "reviewsPromptToConnectGithubDismissed",
  "workspaceSetupCompletedHidden",
  "pinnedDocumentsEmptyStateDismissed",
  "homeCardsEmptyStateDismissed",
  "all",
])

export const UserFlagUpdateOperation: v.GenericSchema<unknown, T.UserFlagUpdateOperation> = v.picklist([
  "incr",
  "decr",
  "clear",
  "lock",
])

export const UserNameSort: v.GenericSchema<unknown, T.UserNameSort> = v.looseObject({
  nulls: v.optional(v.nullable(v.lazy(() => PaginationNulls))),
  order: v.optional(v.nullable(v.lazy(() => PaginationSortOrder))),
})

export const UserNotificationSubscription: v.GenericSchema<unknown, T.UserNotificationSubscription> = v.looseObject({
  id: v.optional(v.string()),
  createdAt: v.optional(v.string()),
  updatedAt: v.optional(v.string()),
  archivedAt: v.optional(v.nullable(v.string())),
  subscriber: v.optional(v.lazy(() => User)),
  customer: v.optional(v.nullable(v.lazy(() => Customer))),
  customView: v.optional(v.nullable(v.lazy(() => CustomView))),
  cycle: v.optional(v.nullable(v.lazy(() => Cycle))),
  label: v.optional(v.nullable(v.lazy(() => IssueLabel))),
  project: v.optional(v.nullable(v.lazy(() => Project))),
  initiative: v.optional(v.nullable(v.lazy(() => Initiative))),
  team: v.optional(v.nullable(v.lazy(() => Team))),
  user: v.optional(v.lazy(() => User)),
  contextViewType: v.optional(v.nullable(v.lazy(() => ContextViewType))),
  userContextViewType: v.optional(v.nullable(v.lazy(() => UserContextViewType))),
  active: v.optional(v.boolean()),
  includeSubInitiativeUpdates: v.optional(v.boolean()),
  notificationSubscriptionTypes: v.optional(v.array(v.string())),
})

export const UserPayload: v.GenericSchema<unknown, T.UserPayload> = v.looseObject({
  lastSyncId: v.optional(number()),
  user: v.optional(v.nullable(v.lazy(() => User))),
  success: v.optional(v.boolean()),
})

export const UserRoleType: v.GenericSchema<unknown, T.UserRoleType> = v.picklist([
  "owner",
  "admin",
  "guest",
  "user",
  "app",
])

export const UserSettings: v.GenericSchema<unknown, T.UserSettings> = v.looseObject({
  id: v.optional(v.string()),
  createdAt: v.optional(v.string()),
  updatedAt: v.optional(v.string()),
  archivedAt: v.optional(v.nullable(v.string())),
  notificationDeliveryPreferences: v.optional(v.lazy(() => NotificationDeliveryPreferences)),
  unsubscribedFrom: v.optional(v.array(v.string())),
  user: v.optional(v.lazy(() => User)),
  calendarHash: v.optional(v.nullable(v.string())),
  subscribedToChangelog: v.optional(v.boolean()),
  subscribedToDPA: v.optional(v.boolean()),
  subscribedToInviteAccepted: v.optional(v.boolean()),
  subscribedToPrivacyLegalUpdates: v.optional(v.boolean()),
  feedSummarySchedule: v.optional(v.nullable(v.lazy(() => FeedSummarySchedule))),
  showFullUserNames: v.optional(v.boolean()),
  showCodeBlockLineNumbers: v.optional(v.boolean()),
  feedLastSeenTime: v.optional(v.nullable(v.string())),
  autoAssignToSelf: v.optional(v.boolean()),
  notificationCategoryPreferences: v.optional(v.lazy(() => NotificationCategoryPreferences)),
  notificationChannelPreferences: v.optional(v.lazy(() => NotificationChannelPreferences)),
  theme: v.optional(v.nullable(v.lazy(() => UserSettingsTheme))),
})

export const UserSettingsCustomSidebarTheme: v.GenericSchema<unknown, T.UserSettingsCustomSidebarTheme> = v.looseObject(
  {
    accent: v.optional(v.array(number())),
    base: v.optional(v.array(number())),
    contrast: v.optional(integer()),
  },
)

export const UserSettingsCustomTheme: v.GenericSchema<unknown, T.UserSettingsCustomTheme> = v.looseObject({
  accent: v.optional(v.array(number())),
  base: v.optional(v.array(number())),
  contrast: v.optional(integer()),
  sidebar: v.optional(v.nullable(v.lazy(() => UserSettingsCustomSidebarTheme))),
})

export const UserSettingsFlagPayload: v.GenericSchema<unknown, T.UserSettingsFlagPayload> = v.looseObject({
  lastSyncId: v.optional(number()),
  flag: v.optional(v.nullable(v.string())),
  value: v.optional(v.nullable(integer())),
  success: v.optional(v.boolean()),
})

export const UserSettingsFlagsResetPayload: v.GenericSchema<unknown, T.UserSettingsFlagsResetPayload> = v.looseObject({
  lastSyncId: v.optional(number()),
  success: v.optional(v.boolean()),
})

export const UserSettingsPayload: v.GenericSchema<unknown, T.UserSettingsPayload> = v.looseObject({
  lastSyncId: v.optional(number()),
  userSettings: v.optional(v.lazy(() => UserSettings)),
  success: v.optional(v.boolean()),
})

export const UserSettingsTheme: v.GenericSchema<unknown, T.UserSettingsTheme> = v.looseObject({
  preset: v.optional(v.lazy(() => UserSettingsThemePreset)),
  custom: v.optional(v.nullable(v.lazy(() => UserSettingsCustomTheme))),
})

export const UserSettingsThemeDeviceType: v.GenericSchema<unknown, T.UserSettingsThemeDeviceType> = v.picklist([
  "desktop",
  "mobileWeb",
])

export const UserSettingsThemeMode: v.GenericSchema<unknown, T.UserSettingsThemeMode> = v.picklist(["light", "dark"])

export const UserSettingsThemePreset: v.GenericSchema<unknown, T.UserSettingsThemePreset> = v.picklist([
  "system",
  "light",
  "pureLight",
  "dark",
  "magicBlue",
  "classicDark",
  "custom",
])

export const UserSettingsUpdateInput: v.GenericSchema<unknown, T.UserSettingsUpdateInput> = v.looseObject({
  settings: v.optional(v.nullable(v.unknown())),
  subscribedToChangelog: v.optional(v.nullable(v.boolean())),
  subscribedToDPA: v.optional(v.nullable(v.boolean())),
  subscribedToInviteAccepted: v.optional(v.nullable(v.boolean())),
  subscribedToPrivacyLegalUpdates: v.optional(v.nullable(v.boolean())),
  subscribedToGeneralMarketingCommunications: v.optional(v.nullable(v.boolean())),
  notificationCategoryPreferences: v.optional(v.nullable(v.lazy(() => NotificationCategoryPreferencesInput))),
  notificationChannelPreferences: v.optional(v.nullable(v.lazy(() => PartialNotificationChannelPreferencesInput))),
  notificationDeliveryPreferences: v.optional(v.nullable(v.lazy(() => NotificationDeliveryPreferencesInput))),
})

export const UserSortInput: v.GenericSchema<unknown, T.UserSortInput> = v.looseObject({
  name: v.optional(v.nullable(v.lazy(() => UserNameSort))),
  displayName: v.optional(v.nullable(v.lazy(() => UserDisplayNameSort))),
})

export const UserUpdateInput: v.GenericSchema<unknown, T.UserUpdateInput> = v.looseObject({
  name: v.optional(v.nullable(v.string())),
  displayName: v.optional(v.nullable(v.string())),
  avatarUrl: v.optional(v.nullable(v.string())),
  description: v.optional(v.nullable(v.string())),
  title: v.optional(v.nullable(v.string())),
  statusEmoji: v.optional(v.nullable(v.string())),
  statusLabel: v.optional(v.nullable(v.string())),
  statusUntilAt: v.optional(v.nullable(v.string())),
  timezone: v.optional(v.nullable(v.string())),
})

export const ViewPreferences: v.GenericSchema<unknown, T.ViewPreferences> = v.looseObject({
  id: v.optional(v.string()),
  createdAt: v.optional(v.string()),
  updatedAt: v.optional(v.string()),
  archivedAt: v.optional(v.nullable(v.string())),
  type: v.optional(v.string()),
  viewType: v.optional(v.string()),
  preferences: v.optional(v.lazy(() => ViewPreferencesValues)),
})

export const ViewPreferencesCreateInput: v.GenericSchema<unknown, T.ViewPreferencesCreateInput> = v.looseObject({
  id: v.optional(v.nullable(v.string())),
  type: v.lazy(() => ViewPreferencesType),
  viewType: v.lazy(() => ViewType),
  preferences: v.unknown(),
  insights: v.optional(v.nullable(v.unknown())),
  teamId: v.optional(v.nullable(v.string())),
  projectId: v.optional(v.nullable(v.string())),
  labelId: v.optional(v.nullable(v.string())),
  projectLabelId: v.optional(v.nullable(v.string())),
  initiativeLabelId: v.optional(v.nullable(v.string())),
  releasePipelineId: v.optional(v.nullable(v.string())),
  customViewId: v.optional(v.nullable(v.string())),
  userId: v.optional(v.nullable(v.string())),
})

export const ViewPreferencesInitiativeLabelGroupColumn: v.GenericSchema<
  unknown,
  T.ViewPreferencesInitiativeLabelGroupColumn
> = v.looseObject({
  id: v.optional(v.string()),
  active: v.optional(v.boolean()),
})

export const ViewPreferencesPayload: v.GenericSchema<unknown, T.ViewPreferencesPayload> = v.looseObject({
  lastSyncId: v.optional(number()),
  viewPreferences: v.optional(v.lazy(() => ViewPreferences)),
  success: v.optional(v.boolean()),
})

export const ViewPreferencesProjectLabelGroupColumn: v.GenericSchema<
  unknown,
  T.ViewPreferencesProjectLabelGroupColumn
> = v.looseObject({
  id: v.optional(v.string()),
  active: v.optional(v.boolean()),
})

export const ViewPreferencesType: v.GenericSchema<unknown, T.ViewPreferencesType> = v.picklist(["organization", "user"])

export const ViewPreferencesUpdateInput: v.GenericSchema<unknown, T.ViewPreferencesUpdateInput> = v.looseObject({
  preferences: v.optional(v.nullable(v.unknown())),
  insights: v.optional(v.nullable(v.unknown())),
})

export const ViewPreferencesValues: v.GenericSchema<unknown, T.ViewPreferencesValues> = v.looseObject({
  layout: v.optional(v.nullable(v.string())),
  viewOrdering: v.optional(v.nullable(v.string())),
  viewOrderingDirection: v.optional(v.nullable(v.string())),
  issueGrouping: v.optional(v.nullable(v.string())),
  issueSubGrouping: v.optional(v.nullable(v.string())),
  issueNesting: v.optional(v.nullable(v.string())),
  showCompletedIssues: v.optional(v.nullable(v.string())),
  showParents: v.optional(v.nullable(v.boolean())),
  showSubIssues: v.optional(v.nullable(v.boolean())),
  showSubTeamIssues: v.optional(v.nullable(v.boolean())),
  openInSplitView: v.optional(v.nullable(v.boolean())),
  showSupervisedIssues: v.optional(v.nullable(v.boolean())),
  showTriageIssues: v.optional(v.nullable(v.boolean())),
  showSnoozedItems: v.optional(v.nullable(v.boolean())),
  showOnlySnoozedItems: v.optional(v.nullable(v.boolean())),
  showArchivedItems: v.optional(v.nullable(v.boolean())),
  showReadItems: v.optional(v.nullable(v.boolean())),
  showUnreadItemsFirst: v.optional(v.nullable(v.boolean())),
  closedIssuesOrderedByRecency: v.optional(v.nullable(v.boolean())),
  showEmptyGroups: v.optional(v.nullable(v.boolean())),
  showEmptyGroupsBoard: v.optional(v.nullable(v.boolean())),
  showEmptyGroupsList: v.optional(v.nullable(v.boolean())),
  showEmptySubGroups: v.optional(v.nullable(v.boolean())),
  showEmptySubGroupsBoard: v.optional(v.nullable(v.boolean())),
  showEmptySubGroupsList: v.optional(v.nullable(v.boolean())),
  issueGroupingLabelGroupId: v.optional(v.nullable(v.string())),
  issueSubGroupingLabelGroupId: v.optional(v.nullable(v.string())),
  fieldId: v.optional(v.nullable(v.boolean())),
  fieldStatus: v.optional(v.nullable(v.boolean())),
  fieldPriority: v.optional(v.nullable(v.boolean())),
  fieldDateCreated: v.optional(v.nullable(v.boolean())),
  fieldDateUpdated: v.optional(v.nullable(v.boolean())),
  fieldDateArchived: v.optional(v.nullable(v.boolean())),
  fieldDateMyActivity: v.optional(v.nullable(v.boolean())),
  fieldAssignee: v.optional(v.nullable(v.boolean())),
  fieldEstimate: v.optional(v.nullable(v.boolean())),
  fieldPullRequests: v.optional(v.nullable(v.boolean())),
  fieldPreviewLinks: v.optional(v.nullable(v.boolean())),
  fieldSentryIssues: v.optional(v.nullable(v.boolean())),
  fieldDueDate: v.optional(v.nullable(v.boolean())),
  fieldLinkCount: v.optional(v.nullable(v.boolean())),
  fieldCustomerCount: v.optional(v.nullable(v.boolean())),
  fieldCustomerRevenue: v.optional(v.nullable(v.boolean())),
  fieldSla: v.optional(v.nullable(v.boolean())),
  fieldUserPresence: v.optional(v.nullable(v.boolean())),
  fieldLabels: v.optional(v.nullable(v.boolean())),
  fieldProject: v.optional(v.nullable(v.boolean())),
  fieldCycle: v.optional(v.nullable(v.boolean())),
  fieldMilestone: v.optional(v.nullable(v.boolean())),
  fieldRelease: v.optional(v.nullable(v.boolean())),
  fieldTimeInCurrentStatus: v.optional(v.nullable(v.boolean())),
  hiddenColumns: v.optional(v.nullable(v.array(v.string()))),
  hiddenRows: v.optional(v.nullable(v.array(v.string()))),
  hiddenGroupsList: v.optional(v.nullable(v.array(v.string()))),
  columnOrderBoard: v.optional(v.nullable(v.array(v.string()))),
  columnOrderList: v.optional(v.nullable(v.array(v.string()))),
  projectLayout: v.optional(v.nullable(v.string())),
  projectViewOrdering: v.optional(v.nullable(v.string())),
  projectGrouping: v.optional(v.nullable(v.string())),
  projectSubGrouping: v.optional(v.nullable(v.string())),
  projectGroupOrdering: v.optional(v.nullable(v.string())),
  groupOrderingMode: v.optional(v.nullable(v.string())),
  projectGroupingDateResolution: v.optional(v.nullable(v.string())),
  showCompletedProjects: v.optional(v.nullable(v.string())),
  projectGroupingLabelGroupId: v.optional(v.nullable(v.string())),
  projectSubGroupingLabelGroupId: v.optional(v.nullable(v.string())),
  projectLabelGroupColumns: v.optional(v.nullable(v.array(v.lazy(() => ViewPreferencesProjectLabelGroupColumn)))),
  showSubTeamProjects: v.optional(v.nullable(v.boolean())),
  showOnlyLeadTeamProjects: v.optional(v.nullable(v.boolean())),
  showSubInitiativeProjects: v.optional(v.nullable(v.boolean())),
  projectShowEmptyGroups: v.optional(v.nullable(v.string())),
  projectShowEmptyGroupsList: v.optional(v.nullable(v.string())),
  projectShowEmptyGroupsTimeline: v.optional(v.nullable(v.string())),
  projectShowEmptyGroupsBoard: v.optional(v.nullable(v.string())),
  projectShowEmptySubGroups: v.optional(v.nullable(v.string())),
  projectShowEmptySubGroupsList: v.optional(v.nullable(v.string())),
  projectShowEmptySubGroupsTimeline: v.optional(v.nullable(v.string())),
  projectShowEmptySubGroupsBoard: v.optional(v.nullable(v.string())),
  projectFieldId: v.optional(v.nullable(v.boolean())),
  projectFieldStatus: v.optional(v.nullable(v.boolean())),
  projectFieldPriority: v.optional(v.nullable(v.boolean())),
  projectFieldLead: v.optional(v.nullable(v.boolean())),
  projectFieldHealth: v.optional(v.nullable(v.boolean())),
  projectFieldMembers: v.optional(v.nullable(v.boolean())),
  projectFieldStartDate: v.optional(v.nullable(v.boolean())),
  projectFieldTargetDate: v.optional(v.nullable(v.boolean())),
  projectFieldTeams: v.optional(v.nullable(v.boolean())),
  projectFieldRoadmaps: v.optional(v.nullable(v.boolean())),
  projectFieldInitiatives: v.optional(v.nullable(v.boolean())),
  projectFieldMilestone: v.optional(v.nullable(v.boolean())),
  projectFieldDescription: v.optional(v.nullable(v.boolean())),
  projectFieldPredictions: v.optional(v.nullable(v.boolean())),
  projectFieldRelations: v.optional(v.nullable(v.boolean())),
  projectFieldRolloutStage: v.optional(v.nullable(v.boolean())),
  projectFieldActivity: v.optional(v.nullable(v.boolean())),
  projectFieldCustomerCount: v.optional(v.nullable(v.boolean())),
  projectFieldCustomerRevenue: v.optional(v.nullable(v.boolean())),
  projectFieldLabels: v.optional(v.nullable(v.boolean())),
  projectFieldDateCreated: v.optional(v.nullable(v.boolean())),
  projectFieldDateUpdated: v.optional(v.nullable(v.boolean())),
  projectFieldDateCompleted: v.optional(v.nullable(v.boolean())),
  projectFieldIssues: v.optional(v.nullable(v.boolean())),
  projectFieldStatusTimeline: v.optional(v.nullable(v.boolean())),
  projectFieldLeadTimeline: v.optional(v.nullable(v.boolean())),
  projectFieldHealthTimeline: v.optional(v.nullable(v.boolean())),
  projectFieldMilestoneTimeline: v.optional(v.nullable(v.boolean())),
  projectFieldPredictionsTimeline: v.optional(v.nullable(v.boolean())),
  projectFieldRelationsTimeline: v.optional(v.nullable(v.boolean())),
  projectFieldDescriptionBoard: v.optional(v.nullable(v.boolean())),
  projectFieldMembersBoard: v.optional(v.nullable(v.boolean())),
  projectFieldMembersList: v.optional(v.nullable(v.boolean())),
  projectFieldMembersTimeline: v.optional(v.nullable(v.boolean())),
  projectFieldRoadmapsBoard: v.optional(v.nullable(v.boolean())),
  projectFieldRoadmapsList: v.optional(v.nullable(v.boolean())),
  projectFieldRoadmapsTimeline: v.optional(v.nullable(v.boolean())),
  projectFieldTeamsBoard: v.optional(v.nullable(v.boolean())),
  projectFieldTeamsList: v.optional(v.nullable(v.boolean())),
  projectFieldTeamsTimeline: v.optional(v.nullable(v.boolean())),
  projectZoomLevel: v.optional(v.nullable(v.string())),
  timelineZoomScale: v.optional(v.nullable(number())),
  timelineChronologyShowCycleTeamIds: v.optional(v.nullable(v.array(v.string()))),
  timelineChronologyShowWeekNumbers: v.optional(v.nullable(v.boolean())),
  timelineShowProjectsAside: v.optional(v.nullable(v.boolean())),
  initiativeGrouping: v.optional(v.nullable(v.string())),
  initiativeGroupingLabelGroupId: v.optional(v.nullable(v.string())),
  initiativeLabelGroupColumns: v.optional(v.nullable(v.array(v.lazy(() => ViewPreferencesInitiativeLabelGroupColumn)))),
  initiativesViewOrdering: v.optional(v.nullable(v.string())),
  initiativeFieldId: v.optional(v.nullable(v.boolean())),
  initiativeFieldProjects: v.optional(v.nullable(v.boolean())),
  initiativeFieldTeams: v.optional(v.nullable(v.boolean())),
  initiativeFieldLeadTeam: v.optional(v.nullable(v.boolean())),
  initiativeFieldDescription: v.optional(v.nullable(v.boolean())),
  initiativeFieldOwner: v.optional(v.nullable(v.boolean())),
  initiativeFieldStartDate: v.optional(v.nullable(v.boolean())),
  initiativeFieldTargetDate: v.optional(v.nullable(v.boolean())),
  initiativeFieldPriority: v.optional(v.nullable(v.boolean())),
  initiativeFieldDateCompleted: v.optional(v.nullable(v.boolean())),
  initiativeFieldDateUpdated: v.optional(v.nullable(v.boolean())),
  initiativeFieldDateCreated: v.optional(v.nullable(v.boolean())),
  initiativeFieldStatus: v.optional(v.nullable(v.boolean())),
  initiativeFieldActivity: v.optional(v.nullable(v.boolean())),
  initiativeFieldInitiativeHealth: v.optional(v.nullable(v.boolean())),
  initiativeFieldHealth: v.optional(v.nullable(v.boolean())),
  initiativeFieldLabels: v.optional(v.nullable(v.boolean())),
  showNestedInitiatives: v.optional(v.nullable(v.boolean())),
  showTeamInitiatives: v.optional(v.nullable(v.boolean())),
  customersViewOrdering: v.optional(v.nullable(v.string())),
  customerFieldRequestCount: v.optional(v.nullable(v.boolean())),
  customerFieldDomains: v.optional(v.nullable(v.boolean())),
  customerFieldOwner: v.optional(v.nullable(v.boolean())),
  customerFieldRevenue: v.optional(v.nullable(v.boolean())),
  customerFieldSize: v.optional(v.nullable(v.boolean())),
  customerFieldSource: v.optional(v.nullable(v.boolean())),
  customerFieldStatus: v.optional(v.nullable(v.boolean())),
  customerFieldTier: v.optional(v.nullable(v.boolean())),
  customerPageNeedsViewGrouping: v.optional(v.nullable(v.string())),
  customerPageNeedsViewOrdering: v.optional(v.nullable(v.string())),
  customerPageNeedsShowImportantFirst: v.optional(v.nullable(v.boolean())),
  customerPageNeedsShowCompletedIssuesAndProjects: v.optional(v.nullable(v.string())),
  customerPageNeedsFieldIssueIdentifier: v.optional(v.nullable(v.boolean())),
  customerPageNeedsFieldIssuePriority: v.optional(v.nullable(v.boolean())),
  customerPageNeedsFieldIssueStatus: v.optional(v.nullable(v.boolean())),
  customerPageNeedsFieldIssueTargetDueDate: v.optional(v.nullable(v.boolean())),
  embeddedCustomerNeedsViewOrdering: v.optional(v.nullable(v.string())),
  embeddedCustomerNeedsShowImportantFirst: v.optional(v.nullable(v.boolean())),
  projectCustomerNeedsViewGrouping: v.optional(v.nullable(v.string())),
  projectCustomerNeedsViewOrdering: v.optional(v.nullable(v.string())),
  projectCustomerNeedsShowImportantFirst: v.optional(v.nullable(v.boolean())),
  projectCustomerNeedsShowCompletedIssuesLast: v.optional(v.nullable(v.boolean())),
  teamViewOrdering: v.optional(v.nullable(v.string())),
  teamFieldIdentifier: v.optional(v.nullable(v.boolean())),
  teamFieldMembership: v.optional(v.nullable(v.boolean())),
  teamFieldOwner: v.optional(v.nullable(v.boolean())),
  teamFieldMembers: v.optional(v.nullable(v.boolean())),
  teamFieldProjects: v.optional(v.nullable(v.boolean())),
  teamFieldCycle: v.optional(v.nullable(v.boolean())),
  teamFieldDateCreated: v.optional(v.nullable(v.boolean())),
  teamFieldDateUpdated: v.optional(v.nullable(v.boolean())),
  customViewsOrdering: v.optional(v.nullable(v.string())),
  customViewFieldOwner: v.optional(v.nullable(v.boolean())),
  customViewFieldVisibility: v.optional(v.nullable(v.boolean())),
  customViewFieldDateCreated: v.optional(v.nullable(v.boolean())),
  customViewFieldDateUpdated: v.optional(v.nullable(v.boolean())),
  dashboardsOrdering: v.optional(v.nullable(v.string())),
  dashboardFieldOwner: v.optional(v.nullable(v.boolean())),
  dashboardFieldDateCreated: v.optional(v.nullable(v.boolean())),
  dashboardFieldDateUpdated: v.optional(v.nullable(v.boolean())),
  workspaceMembersViewOrdering: v.optional(v.nullable(v.string())),
  memberFieldStatus: v.optional(v.nullable(v.boolean())),
  memberFieldJoined: v.optional(v.nullable(v.boolean())),
  memberFieldTeams: v.optional(v.nullable(v.boolean())),
  automationGrouping: v.optional(v.nullable(v.string())),
  automationOrdering: v.optional(v.nullable(v.string())),
  automationFieldTrigger: v.optional(v.nullable(v.boolean())),
  automationFieldLastExecuted: v.optional(v.nullable(v.boolean())),
  automationFieldStats: v.optional(v.nullable(v.boolean())),
  automationFieldTeam: v.optional(v.nullable(v.boolean())),
  automationShowDescendants: v.optional(v.nullable(v.boolean())),
  automationShowDisabled: v.optional(v.nullable(v.boolean())),
  automationShowTemplates: v.optional(v.nullable(v.boolean())),
  automationStatsPeriod: v.optional(v.nullable(v.string())),
  automationRunHistoryShowIssueIdentifier: v.optional(v.nullable(v.boolean())),
  automationRunHistoryShowProjectIdentifier: v.optional(v.nullable(v.boolean())),
  automationRunHistoryShowInitiativeIdentifier: v.optional(v.nullable(v.boolean())),
  automationRunHistoryShowDuration: v.optional(v.nullable(v.boolean())),
  automationRunHistoryShowChangeCount: v.optional(v.nullable(v.boolean())),
  automationRunHistoryGroupNoChanges: v.optional(v.nullable(v.boolean())),
  releasePipelineGrouping: v.optional(v.nullable(v.string())),
  releasePipelinesViewOrdering: v.optional(v.nullable(v.string())),
  releasePipelineFieldType: v.optional(v.nullable(v.boolean())),
  releasePipelineFieldTeams: v.optional(v.nullable(v.boolean())),
  releasePipelineFieldReleases: v.optional(v.nullable(v.boolean())),
  releasePipelineFieldLatestRelease: v.optional(v.nullable(v.boolean())),
  scheduledPipelineReleasesViewOrdering: v.optional(v.nullable(v.string())),
  scheduledPipelineReleasesViewGrouping: v.optional(v.nullable(v.string())),
  scheduledPipelineReleaseFieldVersion: v.optional(v.nullable(v.boolean())),
  scheduledPipelineReleaseFieldReleaseDate: v.optional(v.nullable(v.boolean())),
  scheduledPipelineReleaseFieldCompletion: v.optional(v.nullable(v.boolean())),
  scheduledPipelineReleaseFieldDescription: v.optional(v.nullable(v.boolean())),
  scheduledPipelineReleaseFieldReleaseNote: v.optional(v.nullable(v.boolean())),
  continuousPipelineReleasesViewGrouping: v.optional(v.nullable(v.string())),
  continuousPipelineReleaseFieldVersion: v.optional(v.nullable(v.boolean())),
  continuousPipelineReleaseFieldReleaseDate: v.optional(v.nullable(v.boolean())),
  continuousPipelineReleaseFieldReleaseNote: v.optional(v.nullable(v.boolean())),
  searchViewOrdering: v.optional(v.nullable(v.string())),
  searchResultType: v.optional(v.nullable(v.string())),
  documentFieldParent: v.optional(v.nullable(v.boolean())),
  documentFieldCreator: v.optional(v.nullable(v.boolean())),
  documentFieldOwner: v.optional(v.nullable(v.boolean())),
  documentFieldDateCreated: v.optional(v.nullable(v.boolean())),
  documentFieldDateUpdated: v.optional(v.nullable(v.boolean())),
  inboxViewOrdering: v.optional(v.nullable(v.string())),
  inboxViewGrouping: v.optional(v.nullable(v.string())),
  triageViewOrdering: v.optional(v.nullable(v.string())),
  focusViewGrouping: v.optional(v.nullable(v.string())),
  focusViewOrdering: v.optional(v.nullable(v.string())),
  focusViewOrderingDirection: v.optional(v.nullable(v.string())),
  reviewGrouping: v.optional(v.nullable(v.string())),
  reviewViewOrdering: v.optional(v.nullable(v.string())),
  showCompletedReviews: v.optional(v.nullable(v.string())),
  showDraftReviews: v.optional(v.nullable(v.boolean())),
  reviewFieldAvatar: v.optional(v.nullable(v.boolean())),
  reviewFieldReviewers: v.optional(v.nullable(v.boolean())),
  reviewFieldPreviewLinks: v.optional(v.nullable(v.boolean())),
  reviewFieldRepository: v.optional(v.nullable(v.boolean())),
  reviewFieldIdentifier: v.optional(v.nullable(v.boolean())),
  reviewFieldOpenedAt: v.optional(v.nullable(v.boolean())),
  reviewFieldGithubTeam: v.optional(v.nullable(v.boolean())),
  reviewFieldStatusDetails: v.optional(v.nullable(v.boolean())),
  reviewFieldQuickToReview: v.optional(v.nullable(v.boolean())),
  reviewFieldSla: v.optional(v.nullable(v.boolean())),
  reviewFieldLabels: v.optional(v.nullable(v.boolean())),
  reviewFieldRisk: v.optional(v.nullable(v.boolean())),
  showTeamReviews: v.optional(v.nullable(v.boolean())),
  reviewFieldChecks: v.optional(v.nullable(v.boolean())),
  showCompletedAgentSessions: v.optional(v.nullable(v.string())),
})

export const ViewType: v.GenericSchema<unknown, T.ViewType> = v.picklist([
  "inbox",
  "inboxPriority",
  "inboxOther",
  "myIssues",
  "myIssuesCreatedByMe",
  "myIssuesSubscribedTo",
  "myIssuesActivity",
  "myIssuesSharedWithMe",
  "userProfile",
  "userProfileCreatedByUser",
  "userProfileDiffs",
  "userProfileProjects",
  "board",
  "completedCycle",
  "cycle",
  "upcomingCycle",
  "release",
  "releaseOverviewIssues",
  "continuousPipelineReleases",
  "scheduledPipelineReleases",
  "project",
  "projectDocuments",
  "label",
  "triage",
  "activeIssues",
  "backlog",
  "subIssues",
  "subDocuments",
  "allIssues",
  "dashboards",
  "customView",
  "customViews",
  "initiative",
  "initiativeOverview",
  "initiativeOverviewSubInitiatives",
  "initiatives",
  "initiativesAll",
  "initiativesPlanned",
  "initiativesProposed",
  "initiativesCompleted",
  "initiativesCanceled",
  "projects",
  "projectsAll",
  "projectsBacklog",
  "projectsClosed",
  "projectLabel",
  "initiativeLabel",
  "search",
  "splitSearch",
  "teams",
  "archive",
  "quickView",
  "issueIdentifiers",
  "customers",
  "customer",
  "embeddedCustomerNeeds",
  "projectCustomerNeeds",
  "reviews",
  "myReviews",
  "createdReviews",
  "agents",
  "focus",
  "feedAll",
  "feedCreated",
  "feedFollowing",
  "feedPopular",
  "workspaceMembers",
  "myDocuments",
  "sharedDocuments",
  "recentDocuments",
  "allDocuments",
  "teamDocuments",
  "workspaceDocuments",
  "releasePipelines",
  "automations",
  "automationRunHistory",
  "roadmapAll",
  "roadmap",
  "roadmaps",
  "roadmapClosed",
  "roadmapBacklog",
])

export const Webhook: v.GenericSchema<unknown, T.Webhook> = v.looseObject({
  id: v.optional(v.string()),
  createdAt: v.optional(v.string()),
  updatedAt: v.optional(v.string()),
  archivedAt: v.optional(v.nullable(v.string())),
  label: v.optional(v.nullable(v.string())),
  url: v.optional(v.nullable(v.string())),
  enabled: v.optional(v.boolean()),
  team: v.optional(v.nullable(v.lazy(() => Team))),
  allPublicTeams: v.optional(v.boolean()),
  creator: v.optional(v.nullable(v.lazy(() => User))),
  secret: v.optional(v.nullable(v.string())),
  resourceTypes: v.optional(v.array(v.string())),
  failures: v.optional(v.array(v.lazy(() => WebhookFailureEvent))),
})

export const WebhookConnection: v.GenericSchema<unknown, T.WebhookConnection> = v.looseObject({
  edges: v.optional(v.array(v.lazy(() => WebhookEdge))),
  nodes: v.optional(v.array(v.lazy(() => Webhook))),
  pageInfo: v.optional(v.lazy(() => PageInfo)),
})

export const WebhookCreateInput: v.GenericSchema<unknown, T.WebhookCreateInput> = v.looseObject({
  label: v.optional(v.nullable(v.string())),
  id: v.optional(v.nullable(v.string())),
  enabled: v.optional(v.nullable(v.boolean())),
  secret: v.optional(v.nullable(v.string())),
  url: v.string(),
  resourceTypes: v.array(v.string()),
  teamId: v.optional(v.nullable(v.string())),
  allPublicTeams: v.optional(v.nullable(v.boolean())),
})

export const WebhookEdge: v.GenericSchema<unknown, T.WebhookEdge> = v.looseObject({
  node: v.optional(v.lazy(() => Webhook)),
  cursor: v.optional(v.string()),
})

export const WebhookFailureEvent: v.GenericSchema<unknown, T.WebhookFailureEvent> = v.looseObject({
  id: v.optional(v.string()),
  createdAt: v.optional(v.string()),
  webhook: v.optional(v.lazy(() => Webhook)),
  url: v.optional(v.string()),
  httpStatus: v.optional(v.nullable(number())),
  responseOrError: v.optional(v.nullable(v.string())),
  executionId: v.optional(v.string()),
})

export const WebhookPayload: v.GenericSchema<unknown, T.WebhookPayload> = v.looseObject({
  lastSyncId: v.optional(number()),
  webhook: v.optional(v.lazy(() => Webhook)),
  success: v.optional(v.boolean()),
})

export const WebhookResourceType: v.GenericSchema<unknown, T.WebhookResourceType> = v.picklist([
  "AgentSessionEvent",
  "Comment",
  "CustomerNeed",
  "Customer",
  "Cycle",
  "Document",
  "Reaction",
  "AppUserNotification",
  "InitiativeUpdate",
  "Initiative",
  "IssueLabel",
  "IssueSLA",
  "Attachment",
  "Issue",
  "OAuthAuthorization",
  "PermissionChange",
  "ProjectLabel",
  "ProjectUpdate",
  "Project",
  "ReleaseNote",
  "Release",
  "User",
])

export const WebhookRotateSecretPayload: v.GenericSchema<unknown, T.WebhookRotateSecretPayload> = v.looseObject({
  lastSyncId: v.optional(number()),
  success: v.optional(v.boolean()),
  secret: v.optional(v.string()),
})

export const WebhookUpdateInput: v.GenericSchema<unknown, T.WebhookUpdateInput> = v.looseObject({
  label: v.optional(v.nullable(v.string())),
  secret: v.optional(v.nullable(v.string())),
  enabled: v.optional(v.nullable(v.boolean())),
  url: v.optional(v.nullable(v.string())),
  resourceTypes: v.optional(v.nullable(v.array(v.string()))),
})

export const WelcomeMessage: v.GenericSchema<unknown, T.WelcomeMessage> = v.looseObject({
  id: v.optional(v.string()),
  createdAt: v.optional(v.string()),
  updatedAt: v.optional(v.string()),
  archivedAt: v.optional(v.nullable(v.string())),
  title: v.optional(v.nullable(v.string())),
  enabled: v.optional(v.boolean()),
  updatedBy: v.optional(v.nullable(v.lazy(() => User))),
})

export const WelcomeMessageNotification: v.GenericSchema<unknown, T.WelcomeMessageNotification> = v.looseObject({
  id: v.optional(v.string()),
  createdAt: v.optional(v.string()),
  updatedAt: v.optional(v.string()),
  archivedAt: v.optional(v.nullable(v.string())),
  type: v.optional(v.string()),
  actor: v.optional(v.nullable(v.lazy(() => User))),
  externalUserActor: v.optional(v.nullable(v.lazy(() => ExternalUser))),
  user: v.optional(v.lazy(() => User)),
  readAt: v.optional(v.nullable(v.string())),
  emailedAt: v.optional(v.nullable(v.string())),
  snoozedUntilAt: v.optional(v.nullable(v.string())),
  unsnoozedAt: v.optional(v.nullable(v.string())),
  category: v.optional(v.lazy(() => NotificationCategory)),
  botActor: v.optional(v.nullable(v.lazy(() => ActorBot))),
  welcomeMessageId: v.optional(v.string()),
})

export const WorkflowActivationMode: v.GenericSchema<unknown, T.WorkflowActivationMode> = v.picklist([
  "conditionsStartedMatching",
  "anyUpdate",
  "watchedPropertyChanged",
  "collectionChanged",
])

export const WorkflowCronJobDefinition: v.GenericSchema<unknown, T.WorkflowCronJobDefinition> = v.looseObject({
  id: v.optional(v.string()),
  createdAt: v.optional(v.string()),
  updatedAt: v.optional(v.string()),
  archivedAt: v.optional(v.nullable(v.string())),
  name: v.optional(v.string()),
  description: v.optional(v.nullable(v.string())),
  enabled: v.optional(v.boolean()),
  team: v.optional(v.nullable(v.lazy(() => Team))),
  creator: v.optional(v.lazy(() => User)),
  schedule: v.optional(v.unknown()),
  activities: v.optional(v.unknown()),
  sortOrder: v.optional(v.string()),
})

export const WorkflowDefinition: v.GenericSchema<unknown, T.WorkflowDefinition> = v.looseObject({
  id: v.optional(v.string()),
  createdAt: v.optional(v.string()),
  updatedAt: v.optional(v.string()),
  archivedAt: v.optional(v.nullable(v.string())),
  name: v.optional(v.string()),
  groupName: v.optional(v.nullable(v.string())),
  description: v.optional(v.nullable(v.string())),
  icon: v.optional(v.nullable(v.string())),
  color: v.optional(v.nullable(v.string())),
  type: v.optional(v.lazy(() => WorkflowType)),
  trigger: v.optional(v.lazy(() => WorkflowTrigger)),
  triggerType: v.optional(v.lazy(() => WorkflowTriggerType)),
  activationMode: v.optional(v.nullable(v.lazy(() => WorkflowActivationMode))),
  intelligence: v.optional(v.nullable(v.lazy(() => WorkflowIntelligence))),
  conditions: v.optional(v.nullable(v.unknown())),
  schedule: v.optional(v.nullable(v.unknown())),
  enabled: v.optional(v.boolean()),
  runOnce: v.optional(v.boolean()),
  applyToSubTeams: v.optional(v.boolean()),
  postResultsToEntity: v.optional(v.boolean()),
  team: v.optional(v.nullable(v.lazy(() => Team))),
  creator: v.optional(v.lazy(() => User)),
  activities: v.optional(v.unknown()),
  sortOrder: v.optional(v.string()),
  lastExecutedAt: v.optional(v.nullable(v.string())),
  lastUpdatedBy: v.optional(v.nullable(v.lazy(() => User))),
  slugId: v.optional(v.string()),
  label: v.optional(v.nullable(v.lazy(() => IssueLabel))),
  cycle: v.optional(v.nullable(v.lazy(() => Cycle))),
  user: v.optional(v.nullable(v.lazy(() => User))),
  project: v.optional(v.nullable(v.lazy(() => Project))),
  initiative: v.optional(v.nullable(v.lazy(() => Initiative))),
  customView: v.optional(v.nullable(v.lazy(() => CustomView))),
  contextViewType: v.optional(v.nullable(v.lazy(() => ContextViewType))),
  userContextViewType: v.optional(v.nullable(v.lazy(() => UserContextViewType))),
  stats: v.optional(v.nullable(v.unknown())),
  trashed: v.optional(v.nullable(v.boolean())),
  owner: v.optional(v.nullable(v.lazy(() => User))),
  editAccess: v.optional(v.nullable(v.lazy(() => WorkflowDefinitionEditAccess))),
  restrictEditing: v.optional(v.boolean()),
})

export const WorkflowDefinitionConnection: v.GenericSchema<unknown, T.WorkflowDefinitionConnection> = v.looseObject({
  edges: v.optional(v.array(v.lazy(() => WorkflowDefinitionEdge))),
  nodes: v.optional(v.array(v.lazy(() => WorkflowDefinition))),
  pageInfo: v.optional(v.lazy(() => PageInfo)),
})

export const WorkflowDefinitionEdge: v.GenericSchema<unknown, T.WorkflowDefinitionEdge> = v.looseObject({
  node: v.optional(v.lazy(() => WorkflowDefinition)),
  cursor: v.optional(v.string()),
})

export const WorkflowDefinitionEditAccess: v.GenericSchema<unknown, T.WorkflowDefinitionEditAccess> = v.picklist([
  "everyone",
  "workspaceAdmins",
  "teamOwners",
  "owner",
])

export const WorkflowDefinitionIdComparator: v.GenericSchema<unknown, T.WorkflowDefinitionIdComparator> = v.looseObject(
  {
    eq: v.optional(v.nullable(v.string())),
    neq: v.optional(v.nullable(v.string())),
    in: v.optional(v.nullable(v.array(v.string()))),
    nin: v.optional(v.nullable(v.array(v.string()))),
    null: v.optional(v.nullable(v.boolean())),
  },
)

export const WorkflowDefinitionNotification: v.GenericSchema<unknown, T.WorkflowDefinitionNotification> = v.looseObject(
  {
    id: v.optional(v.string()),
    createdAt: v.optional(v.string()),
    updatedAt: v.optional(v.string()),
    archivedAt: v.optional(v.nullable(v.string())),
    type: v.optional(v.string()),
    actor: v.optional(v.nullable(v.lazy(() => User))),
    externalUserActor: v.optional(v.nullable(v.lazy(() => ExternalUser))),
    user: v.optional(v.lazy(() => User)),
    readAt: v.optional(v.nullable(v.string())),
    emailedAt: v.optional(v.nullable(v.string())),
    snoozedUntilAt: v.optional(v.nullable(v.string())),
    unsnoozedAt: v.optional(v.nullable(v.string())),
    category: v.optional(v.lazy(() => NotificationCategory)),
    botActor: v.optional(v.nullable(v.lazy(() => ActorBot))),
    workflowDefinitionId: v.optional(v.string()),
    workflowDefinition: v.optional(v.lazy(() => WorkflowDefinition)),
  },
)

export const WorkflowIntelligence: v.GenericSchema<unknown, T.WorkflowIntelligence> = v.picklist([
  "auto",
  "low",
  "medium",
  "high",
])

export const WorkflowState: v.GenericSchema<unknown, T.WorkflowState> = v.looseObject({
  id: v.optional(v.string()),
  createdAt: v.optional(v.string()),
  updatedAt: v.optional(v.string()),
  archivedAt: v.optional(v.nullable(v.string())),
  name: v.optional(v.string()),
  color: v.optional(v.string()),
  description: v.optional(v.nullable(v.string())),
  position: v.optional(number()),
  type: v.optional(v.string()),
  team: v.optional(v.lazy(() => Team)),
  inheritedFrom: v.optional(v.nullable(v.lazy(() => WorkflowState))),
  issues: v.optional(v.lazy(() => IssueConnection)),
})

export const WorkflowStateArchivePayload: v.GenericSchema<unknown, T.WorkflowStateArchivePayload> = v.looseObject({
  lastSyncId: v.optional(number()),
  success: v.optional(v.boolean()),
  entity: v.optional(v.nullable(v.lazy(() => WorkflowState))),
})

export const WorkflowStateConnection: v.GenericSchema<unknown, T.WorkflowStateConnection> = v.looseObject({
  edges: v.optional(v.array(v.lazy(() => WorkflowStateEdge))),
  nodes: v.optional(v.array(v.lazy(() => WorkflowState))),
  pageInfo: v.optional(v.lazy(() => PageInfo)),
})

export const WorkflowStateCreateInput: v.GenericSchema<unknown, T.WorkflowStateCreateInput> = v.looseObject({
  id: v.optional(v.nullable(v.string())),
  type: v.string(),
  name: v.string(),
  color: v.string(),
  description: v.optional(v.nullable(v.string())),
  position: v.optional(v.nullable(number())),
  teamId: v.string(),
})

export const WorkflowStateEdge: v.GenericSchema<unknown, T.WorkflowStateEdge> = v.looseObject({
  node: v.optional(v.lazy(() => WorkflowState)),
  cursor: v.optional(v.string()),
})

export const WorkflowStateFilter: v.GenericSchema<unknown, T.WorkflowStateFilter> = v.looseObject({
  id: v.optional(v.nullable(v.lazy(() => IDComparator))),
  createdAt: v.optional(v.nullable(v.lazy(() => DateComparator))),
  updatedAt: v.optional(v.nullable(v.lazy(() => DateComparator))),
  name: v.optional(v.nullable(v.lazy(() => StringComparator))),
  description: v.optional(v.nullable(v.lazy(() => StringComparator))),
  position: v.optional(v.nullable(v.lazy(() => NumberComparator))),
  type: v.optional(v.nullable(v.lazy(() => StringComparator))),
  team: v.optional(v.nullable(v.lazy(() => TeamFilter))),
  issues: v.optional(v.nullable(v.lazy(() => IssueCollectionFilter))),
  and: v.optional(v.nullable(v.array(v.lazy(() => WorkflowStateFilter)))),
  or: v.optional(v.nullable(v.array(v.lazy(() => WorkflowStateFilter)))),
})

export const WorkflowStatePayload: v.GenericSchema<unknown, T.WorkflowStatePayload> = v.looseObject({
  lastSyncId: v.optional(number()),
  workflowState: v.optional(v.lazy(() => WorkflowState)),
  success: v.optional(v.boolean()),
})

export const WorkflowStateSort: v.GenericSchema<unknown, T.WorkflowStateSort> = v.looseObject({
  nulls: v.optional(v.nullable(v.lazy(() => PaginationNulls))),
  order: v.optional(v.nullable(v.lazy(() => PaginationSortOrder))),
  closedIssuesOrderedByRecency: v.optional(v.nullable(v.boolean())),
  typeOnly: v.optional(v.nullable(v.boolean())),
})

export const WorkflowStateUpdateInput: v.GenericSchema<unknown, T.WorkflowStateUpdateInput> = v.looseObject({
  name: v.optional(v.nullable(v.string())),
  color: v.optional(v.nullable(v.string())),
  description: v.optional(v.nullable(v.string())),
  position: v.optional(v.nullable(number())),
})

export const WorkflowTrigger: v.GenericSchema<unknown, T.WorkflowTrigger> = v.picklist([
  "entityCreated",
  "entityUpdated",
  "entityCreatedOrUpdated",
  "entityRemoved",
  "entityUnarchived",
  "cycleStarted",
  "cycleEnded",
  "commentAdded",
  "commentResolved",
  "reviewSubmitted",
  "addedToMergeQueue",
  "removedFromMergeQueue",
  "updatePosted",
  "updateDue",
  "chatMessagePosted",
  "chatReactionAdded",
  "customerRequestAdded",
  "webhookReceived",
])

export const WorkflowTriggerType: v.GenericSchema<unknown, T.WorkflowTriggerType> = v.picklist([
  "issue",
  "project",
  "document",
  "initiative",
  "team",
  "release",
  "cycle",
  "schedule",
  "webhook",
  "chat",
  "pullRequest",
  "aiConversation",
  "agentSession",
])

export const WorkflowType: v.GenericSchema<unknown, T.WorkflowType> = v.picklist([
  "sla",
  "automation",
  "viewSubscription",
  "triage",
  "triageAutomation",
  "release",
])

export const WorkspaceAnnouncementNotification: v.GenericSchema<unknown, T.WorkspaceAnnouncementNotification> =
  v.looseObject({
    id: v.optional(v.string()),
    createdAt: v.optional(v.string()),
    updatedAt: v.optional(v.string()),
    archivedAt: v.optional(v.nullable(v.string())),
    type: v.optional(v.string()),
    actor: v.optional(v.nullable(v.lazy(() => User))),
    externalUserActor: v.optional(v.nullable(v.lazy(() => ExternalUser))),
    user: v.optional(v.lazy(() => User)),
    readAt: v.optional(v.nullable(v.string())),
    emailedAt: v.optional(v.nullable(v.string())),
    snoozedUntilAt: v.optional(v.nullable(v.string())),
    unsnoozedAt: v.optional(v.nullable(v.string())),
    category: v.optional(v.lazy(() => NotificationCategory)),
    botActor: v.optional(v.nullable(v.lazy(() => ActorBot))),
    workspaceAnnouncementId: v.optional(v.string()),
  })

export const AdministrableTeamsRequest: v.GenericSchema<unknown, T.AdministrableTeamsRequest> = v.looseObject({
  filter: v.optional(v.nullable(v.lazy(() => TeamFilter))),
  before: v.optional(v.nullable(v.string())),
  after: v.optional(v.nullable(v.string())),
  first: v.optional(v.nullable(integer())),
  last: v.optional(v.nullable(integer())),
  includeArchived: v.optional(v.nullable(v.boolean())),
  orderBy: v.optional(v.nullable(v.lazy(() => PaginationOrderBy))),
})

export const AgentActivitiesRequest: v.GenericSchema<unknown, T.AgentActivitiesRequest> = v.looseObject({
  filter: v.optional(v.nullable(v.lazy(() => AgentActivityFilter))),
  before: v.optional(v.nullable(v.string())),
  after: v.optional(v.nullable(v.string())),
  first: v.optional(v.nullable(integer())),
  last: v.optional(v.nullable(integer())),
  includeArchived: v.optional(v.nullable(v.boolean())),
  orderBy: v.optional(v.nullable(v.lazy(() => PaginationOrderBy))),
})

export const AgentActivityRequest: v.GenericSchema<unknown, T.AgentActivityRequest> = v.looseObject({
  id: v.string(),
})

export const AgentActivityCreateRequest: v.GenericSchema<unknown, T.AgentActivityCreateRequest> = v.looseObject({
  input: v.lazy(() => AgentActivityCreateInput),
})

export const AgentSessionRequest: v.GenericSchema<unknown, T.AgentSessionRequest> = v.looseObject({
  id: v.string(),
})

export const AgentSessionCreateOnCommentRequest: v.GenericSchema<unknown, T.AgentSessionCreateOnCommentRequest> =
  v.looseObject({
    input: v.lazy(() => AgentSessionCreateOnComment),
  })

export const AgentSessionCreateOnIssueRequest: v.GenericSchema<unknown, T.AgentSessionCreateOnIssueRequest> =
  v.looseObject({
    input: v.lazy(() => AgentSessionCreateOnIssue),
  })

export const AgentSessionsRequest: v.GenericSchema<unknown, T.AgentSessionsRequest> = v.looseObject({
  before: v.optional(v.nullable(v.string())),
  after: v.optional(v.nullable(v.string())),
  first: v.optional(v.nullable(integer())),
  last: v.optional(v.nullable(integer())),
  includeArchived: v.optional(v.nullable(v.boolean())),
  orderBy: v.optional(v.nullable(v.lazy(() => PaginationOrderBy))),
})

export const AgentSessionUpdateRequest: v.GenericSchema<unknown, T.AgentSessionUpdateRequest> = v.looseObject({
  input: v.lazy(() => AgentSessionUpdateInput),
  id: v.string(),
})

export const AgentSessionUpdateExternalUrlRequest: v.GenericSchema<unknown, T.AgentSessionUpdateExternalUrlRequest> =
  v.looseObject({
    input: v.lazy(() => AgentSessionUpdateExternalUrlInput),
    id: v.string(),
  })

export const AgentSkillRequest: v.GenericSchema<unknown, T.AgentSkillRequest> = v.looseObject({
  id: v.string(),
})

export const AgentSkillCreateRequest: v.GenericSchema<unknown, T.AgentSkillCreateRequest> = v.looseObject({
  input: v.lazy(() => AgentSkillCreateInput),
})

export const AgentSkillDeleteRequest: v.GenericSchema<unknown, T.AgentSkillDeleteRequest> = v.looseObject({
  id: v.string(),
})

export const AgentSkillsRequest: v.GenericSchema<unknown, T.AgentSkillsRequest> = v.looseObject({
  filter: v.optional(v.nullable(v.lazy(() => AgentSkillFilter))),
  before: v.optional(v.nullable(v.string())),
  after: v.optional(v.nullable(v.string())),
  first: v.optional(v.nullable(integer())),
  last: v.optional(v.nullable(integer())),
  includeArchived: v.optional(v.nullable(v.boolean())),
  orderBy: v.optional(v.nullable(v.lazy(() => PaginationOrderBy))),
})

export const AgentSkillUpdateRequest: v.GenericSchema<unknown, T.AgentSkillUpdateRequest> = v.looseObject({
  input: v.lazy(() => AgentSkillUpdateInput),
  id: v.string(),
})

export const AirbyteIntegrationConnectRequest: v.GenericSchema<unknown, T.AirbyteIntegrationConnectRequest> =
  v.looseObject({
    input: v.lazy(() => AirbyteConfigurationInput),
  })

export const ApplicationInfoRequest: v.GenericSchema<unknown, T.ApplicationInfoRequest> = v.looseObject({
  clientId: v.string(),
})

export const ArchivedIntegrationsResponse: v.GenericSchema<unknown, T.ArchivedIntegrationsResponse> = v.array(
  v.lazy(() => ArchivedIntegrationPayload),
)

export const AttachmentRequest: v.GenericSchema<unknown, T.AttachmentRequest> = v.looseObject({
  id: v.string(),
})

export const AttachmentCreateRequest: v.GenericSchema<unknown, T.AttachmentCreateRequest> = v.looseObject({
  input: v.lazy(() => AttachmentCreateInput),
})

export const AttachmentDeleteRequest: v.GenericSchema<unknown, T.AttachmentDeleteRequest> = v.looseObject({
  id: v.string(),
})

export const AttachmentIssueRequest: v.GenericSchema<unknown, T.AttachmentIssueRequest> = v.looseObject({
  id: v.string(),
})

export const AttachmentLinkDiscordRequest: v.GenericSchema<unknown, T.AttachmentLinkDiscordRequest> = v.looseObject({
  createAsUser: v.optional(v.nullable(v.string())),
  displayIconUrl: v.optional(v.nullable(v.string())),
  title: v.optional(v.nullable(v.string())),
  issueId: v.string(),
  id: v.optional(v.nullable(v.string())),
  channelId: v.string(),
  messageId: v.string(),
  url: v.string(),
})

export const AttachmentLinkFrontRequest: v.GenericSchema<unknown, T.AttachmentLinkFrontRequest> = v.looseObject({
  createAsUser: v.optional(v.nullable(v.string())),
  displayIconUrl: v.optional(v.nullable(v.string())),
  title: v.optional(v.nullable(v.string())),
  conversationId: v.string(),
  issueId: v.string(),
  id: v.optional(v.nullable(v.string())),
})

export const AttachmentLinkGitHubIssueRequest: v.GenericSchema<unknown, T.AttachmentLinkGitHubIssueRequest> =
  v.looseObject({
    createAsUser: v.optional(v.nullable(v.string())),
    displayIconUrl: v.optional(v.nullable(v.string())),
    title: v.optional(v.nullable(v.string())),
    issueId: v.string(),
    id: v.optional(v.nullable(v.string())),
    url: v.string(),
  })

export const AttachmentLinkGitHubPRRequest: v.GenericSchema<unknown, T.AttachmentLinkGitHubPRRequest> = v.looseObject({
  createAsUser: v.optional(v.nullable(v.string())),
  displayIconUrl: v.optional(v.nullable(v.string())),
  title: v.optional(v.nullable(v.string())),
  issueId: v.string(),
  id: v.optional(v.nullable(v.string())),
  url: v.string(),
  linkKind: v.optional(v.nullable(v.lazy(() => GitLinkKind))),
})

export const AttachmentLinkGitLabMRRequest: v.GenericSchema<unknown, T.AttachmentLinkGitLabMRRequest> = v.looseObject({
  createAsUser: v.optional(v.nullable(v.string())),
  displayIconUrl: v.optional(v.nullable(v.string())),
  title: v.optional(v.nullable(v.string())),
  issueId: v.string(),
  id: v.optional(v.nullable(v.string())),
  url: v.string(),
  projectPathWithNamespace: v.string(),
  number: number(),
})

export const AttachmentLinkIntercomRequest: v.GenericSchema<unknown, T.AttachmentLinkIntercomRequest> = v.looseObject({
  createAsUser: v.optional(v.nullable(v.string())),
  displayIconUrl: v.optional(v.nullable(v.string())),
  title: v.optional(v.nullable(v.string())),
  conversationId: v.string(),
  partId: v.optional(v.nullable(v.string())),
  id: v.optional(v.nullable(v.string())),
  issueId: v.string(),
})

export const AttachmentLinkJiraIssueRequest: v.GenericSchema<unknown, T.AttachmentLinkJiraIssueRequest> = v.looseObject(
  {
    createAsUser: v.optional(v.nullable(v.string())),
    displayIconUrl: v.optional(v.nullable(v.string())),
    title: v.optional(v.nullable(v.string())),
    issueId: v.string(),
    jiraIssueId: v.string(),
    id: v.optional(v.nullable(v.string())),
    url: v.optional(v.nullable(v.string())),
  },
)

export const AttachmentLinkSalesforceRequest: v.GenericSchema<unknown, T.AttachmentLinkSalesforceRequest> =
  v.looseObject({
    createAsUser: v.optional(v.nullable(v.string())),
    displayIconUrl: v.optional(v.nullable(v.string())),
    title: v.optional(v.nullable(v.string())),
    issueId: v.string(),
    id: v.optional(v.nullable(v.string())),
    url: v.string(),
  })

export const AttachmentLinkSlackRequest: v.GenericSchema<unknown, T.AttachmentLinkSlackRequest> = v.looseObject({
  createAsUser: v.optional(v.nullable(v.string())),
  displayIconUrl: v.optional(v.nullable(v.string())),
  title: v.optional(v.nullable(v.string())),
  issueId: v.string(),
  url: v.string(),
  id: v.optional(v.nullable(v.string())),
  syncToCommentThread: v.optional(v.nullable(v.boolean())),
})

export const AttachmentLinkURLRequest: v.GenericSchema<unknown, T.AttachmentLinkURLRequest> = v.looseObject({
  createAsUser: v.optional(v.nullable(v.string())),
  displayIconUrl: v.optional(v.nullable(v.string())),
  title: v.optional(v.nullable(v.string())),
  url: v.string(),
  issueId: v.string(),
  id: v.optional(v.nullable(v.string())),
})

export const AttachmentLinkZendeskRequest: v.GenericSchema<unknown, T.AttachmentLinkZendeskRequest> = v.looseObject({
  createAsUser: v.optional(v.nullable(v.string())),
  displayIconUrl: v.optional(v.nullable(v.string())),
  title: v.optional(v.nullable(v.string())),
  ticketId: v.string(),
  issueId: v.string(),
  id: v.optional(v.nullable(v.string())),
  url: v.optional(v.nullable(v.string())),
})

export const AttachmentsRequest: v.GenericSchema<unknown, T.AttachmentsRequest> = v.looseObject({
  filter: v.optional(v.nullable(v.lazy(() => AttachmentFilter))),
  before: v.optional(v.nullable(v.string())),
  after: v.optional(v.nullable(v.string())),
  first: v.optional(v.nullable(integer())),
  last: v.optional(v.nullable(integer())),
  includeArchived: v.optional(v.nullable(v.boolean())),
  orderBy: v.optional(v.nullable(v.lazy(() => PaginationOrderBy))),
})

export const AttachmentsForURLRequest: v.GenericSchema<unknown, T.AttachmentsForURLRequest> = v.looseObject({
  before: v.optional(v.nullable(v.string())),
  after: v.optional(v.nullable(v.string())),
  first: v.optional(v.nullable(integer())),
  last: v.optional(v.nullable(integer())),
  includeArchived: v.optional(v.nullable(v.boolean())),
  orderBy: v.optional(v.nullable(v.lazy(() => PaginationOrderBy))),
  url: v.string(),
})

export const AttachmentSourcesRequest: v.GenericSchema<unknown, T.AttachmentSourcesRequest> = v.looseObject({
  teamId: v.optional(v.nullable(v.string())),
})

export const AttachmentSyncToSlackRequest: v.GenericSchema<unknown, T.AttachmentSyncToSlackRequest> = v.looseObject({
  id: v.string(),
})

export const AttachmentUpdateRequest: v.GenericSchema<unknown, T.AttachmentUpdateRequest> = v.looseObject({
  input: v.lazy(() => AttachmentUpdateInput),
  id: v.string(),
})

export const AuditEntriesRequest: v.GenericSchema<unknown, T.AuditEntriesRequest> = v.looseObject({
  filter: v.optional(v.nullable(v.lazy(() => AuditEntryFilter))),
  before: v.optional(v.nullable(v.string())),
  after: v.optional(v.nullable(v.string())),
  first: v.optional(v.nullable(integer())),
  last: v.optional(v.nullable(integer())),
  includeArchived: v.optional(v.nullable(v.boolean())),
  orderBy: v.optional(v.nullable(v.lazy(() => PaginationOrderBy))),
})

export const AuditEntryTypesResponse: v.GenericSchema<unknown, T.AuditEntryTypesResponse> = v.array(
  v.lazy(() => AuditEntryType),
)

export const AuthenticationSessionsResponse: v.GenericSchema<unknown, T.AuthenticationSessionsResponse> = v.array(
  v.lazy(() => AuthenticationSessionResponse),
)

export const CommentRequest: v.GenericSchema<unknown, T.CommentRequest> = v.looseObject({
  id: v.optional(v.nullable(v.string())),
  hash: v.optional(v.nullable(v.string())),
})

export const CommentCreateRequest: v.GenericSchema<unknown, T.CommentCreateRequest> = v.looseObject({
  input: v.lazy(() => CommentCreateInput),
})

export const CommentDeleteRequest: v.GenericSchema<unknown, T.CommentDeleteRequest> = v.looseObject({
  id: v.string(),
})

export const CommentResolveRequest: v.GenericSchema<unknown, T.CommentResolveRequest> = v.looseObject({
  resolvingCommentId: v.optional(v.nullable(v.string())),
  id: v.string(),
})

export const CommentsRequest: v.GenericSchema<unknown, T.CommentsRequest> = v.looseObject({
  filter: v.optional(v.nullable(v.lazy(() => CommentFilter))),
  before: v.optional(v.nullable(v.string())),
  after: v.optional(v.nullable(v.string())),
  first: v.optional(v.nullable(integer())),
  last: v.optional(v.nullable(integer())),
  includeArchived: v.optional(v.nullable(v.boolean())),
  orderBy: v.optional(v.nullable(v.lazy(() => PaginationOrderBy))),
})

export const CommentUnresolveRequest: v.GenericSchema<unknown, T.CommentUnresolveRequest> = v.looseObject({
  id: v.string(),
})

export const CommentUpdateRequest: v.GenericSchema<unknown, T.CommentUpdateRequest> = v.looseObject({
  skipEditedAt: v.optional(v.nullable(v.boolean())),
  input: v.lazy(() => CommentUpdateInput),
  id: v.string(),
})

export const ContactCreateRequest: v.GenericSchema<unknown, T.ContactCreateRequest> = v.looseObject({
  input: v.lazy(() => ContactCreateInput),
})

export const CreateCsvExportReportRequest: v.GenericSchema<unknown, T.CreateCsvExportReportRequest> = v.looseObject({
  includePrivateTeamIds: v.optional(v.nullable(v.array(v.string()))),
  includeRestrictedTeamIds: v.optional(v.nullable(v.array(v.string()))),
})

export const CreateInitiativeUpdateReminderRequest: v.GenericSchema<unknown, T.CreateInitiativeUpdateReminderRequest> =
  v.looseObject({
    userId: v.optional(v.nullable(v.string())),
    initiativeId: v.string(),
  })

export const CreateProjectUpdateReminderRequest: v.GenericSchema<unknown, T.CreateProjectUpdateReminderRequest> =
  v.looseObject({
    userId: v.optional(v.nullable(v.string())),
    projectId: v.string(),
  })

export const CustomerRequest: v.GenericSchema<unknown, T.CustomerRequest> = v.looseObject({
  id: v.string(),
})

export const CustomerCreateRequest: v.GenericSchema<unknown, T.CustomerCreateRequest> = v.looseObject({
  input: v.lazy(() => CustomerCreateInput),
})

export const CustomerDeleteRequest: v.GenericSchema<unknown, T.CustomerDeleteRequest> = v.looseObject({
  id: v.string(),
})

export const CustomerMergeRequest: v.GenericSchema<unknown, T.CustomerMergeRequest> = v.looseObject({
  sourceCustomerId: v.string(),
  targetCustomerId: v.string(),
})

export const CustomerNeedRequest: v.GenericSchema<unknown, T.CustomerNeedRequest> = v.looseObject({
  id: v.optional(v.nullable(v.string())),
  hash: v.optional(v.nullable(v.string())),
})

export const CustomerNeedArchiveRequest: v.GenericSchema<unknown, T.CustomerNeedArchiveRequest> = v.looseObject({
  id: v.string(),
})

export const CustomerNeedCreateRequest: v.GenericSchema<unknown, T.CustomerNeedCreateRequest> = v.looseObject({
  input: v.lazy(() => CustomerNeedCreateInput),
})

export const CustomerNeedCreateFromAttachmentRequest: v.GenericSchema<
  unknown,
  T.CustomerNeedCreateFromAttachmentRequest
> = v.looseObject({
  input: v.lazy(() => CustomerNeedCreateFromAttachmentInput),
})

export const CustomerNeedDeleteRequest: v.GenericSchema<unknown, T.CustomerNeedDeleteRequest> = v.looseObject({
  keepAttachment: v.optional(v.nullable(v.boolean())),
  id: v.string(),
})

export const CustomerNeedsRequest: v.GenericSchema<unknown, T.CustomerNeedsRequest> = v.looseObject({
  filter: v.optional(v.nullable(v.lazy(() => CustomerNeedFilter))),
  before: v.optional(v.nullable(v.string())),
  after: v.optional(v.nullable(v.string())),
  first: v.optional(v.nullable(integer())),
  last: v.optional(v.nullable(integer())),
  includeArchived: v.optional(v.nullable(v.boolean())),
  orderBy: v.optional(v.nullable(v.lazy(() => PaginationOrderBy))),
})

export const CustomerNeedUnarchiveRequest: v.GenericSchema<unknown, T.CustomerNeedUnarchiveRequest> = v.looseObject({
  id: v.string(),
})

export const CustomerNeedUpdateRequest: v.GenericSchema<unknown, T.CustomerNeedUpdateRequest> = v.looseObject({
  clearAttachment: v.optional(v.nullable(v.boolean())),
  input: v.lazy(() => CustomerNeedUpdateInput),
  id: v.string(),
})

export const CustomersRequest: v.GenericSchema<unknown, T.CustomersRequest> = v.looseObject({
  filter: v.optional(v.nullable(v.lazy(() => CustomerFilter))),
  before: v.optional(v.nullable(v.string())),
  after: v.optional(v.nullable(v.string())),
  first: v.optional(v.nullable(integer())),
  last: v.optional(v.nullable(integer())),
  includeArchived: v.optional(v.nullable(v.boolean())),
  orderBy: v.optional(v.nullable(v.lazy(() => PaginationOrderBy))),
  sorts: v.optional(v.nullable(v.array(v.lazy(() => CustomerSortInput)))),
})

export const CustomerStatusRequest: v.GenericSchema<unknown, T.CustomerStatusRequest> = v.looseObject({
  id: v.string(),
})

export const CustomerStatusCreateRequest: v.GenericSchema<unknown, T.CustomerStatusCreateRequest> = v.looseObject({
  input: v.lazy(() => CustomerStatusCreateInput),
})

export const CustomerStatusDeleteRequest: v.GenericSchema<unknown, T.CustomerStatusDeleteRequest> = v.looseObject({
  id: v.string(),
})

export const CustomerStatusesRequest: v.GenericSchema<unknown, T.CustomerStatusesRequest> = v.looseObject({
  before: v.optional(v.nullable(v.string())),
  after: v.optional(v.nullable(v.string())),
  first: v.optional(v.nullable(integer())),
  last: v.optional(v.nullable(integer())),
  includeArchived: v.optional(v.nullable(v.boolean())),
  orderBy: v.optional(v.nullable(v.lazy(() => PaginationOrderBy))),
})

export const CustomerStatusUpdateRequest: v.GenericSchema<unknown, T.CustomerStatusUpdateRequest> = v.looseObject({
  input: v.lazy(() => CustomerStatusUpdateInput),
  id: v.string(),
})

export const CustomerTierRequest: v.GenericSchema<unknown, T.CustomerTierRequest> = v.looseObject({
  id: v.string(),
})

export const CustomerTierCreateRequest: v.GenericSchema<unknown, T.CustomerTierCreateRequest> = v.looseObject({
  input: v.lazy(() => CustomerTierCreateInput),
})

export const CustomerTierDeleteRequest: v.GenericSchema<unknown, T.CustomerTierDeleteRequest> = v.looseObject({
  id: v.string(),
})

export const CustomerTiersRequest: v.GenericSchema<unknown, T.CustomerTiersRequest> = v.looseObject({
  before: v.optional(v.nullable(v.string())),
  after: v.optional(v.nullable(v.string())),
  first: v.optional(v.nullable(integer())),
  last: v.optional(v.nullable(integer())),
  includeArchived: v.optional(v.nullable(v.boolean())),
  orderBy: v.optional(v.nullable(v.lazy(() => PaginationOrderBy))),
})

export const CustomerTierUpdateRequest: v.GenericSchema<unknown, T.CustomerTierUpdateRequest> = v.looseObject({
  input: v.lazy(() => CustomerTierUpdateInput),
  id: v.string(),
})

export const CustomerUnsyncRequest: v.GenericSchema<unknown, T.CustomerUnsyncRequest> = v.looseObject({
  id: v.string(),
})

export const CustomerUpdateRequest: v.GenericSchema<unknown, T.CustomerUpdateRequest> = v.looseObject({
  input: v.lazy(() => CustomerUpdateInput),
  id: v.string(),
})

export const CustomerUpsertRequest: v.GenericSchema<unknown, T.CustomerUpsertRequest> = v.looseObject({
  input: v.lazy(() => CustomerUpsertInput),
})

export const CustomViewRequest: v.GenericSchema<unknown, T.CustomViewRequest> = v.looseObject({
  id: v.string(),
})

export const CustomViewCreateRequest: v.GenericSchema<unknown, T.CustomViewCreateRequest> = v.looseObject({
  input: v.lazy(() => CustomViewCreateInput),
})

export const CustomViewDeleteRequest: v.GenericSchema<unknown, T.CustomViewDeleteRequest> = v.looseObject({
  id: v.string(),
})

export const CustomViewHasSubscribersRequest: v.GenericSchema<unknown, T.CustomViewHasSubscribersRequest> =
  v.looseObject({
    id: v.string(),
  })

export const CustomViewsRequest: v.GenericSchema<unknown, T.CustomViewsRequest> = v.looseObject({
  filter: v.optional(v.nullable(v.lazy(() => CustomViewFilter))),
  before: v.optional(v.nullable(v.string())),
  after: v.optional(v.nullable(v.string())),
  first: v.optional(v.nullable(integer())),
  last: v.optional(v.nullable(integer())),
  includeArchived: v.optional(v.nullable(v.boolean())),
  orderBy: v.optional(v.nullable(v.lazy(() => PaginationOrderBy))),
  sort: v.optional(v.nullable(v.array(v.lazy(() => CustomViewSortInput)))),
})

export const CustomViewUpdateRequest: v.GenericSchema<unknown, T.CustomViewUpdateRequest> = v.looseObject({
  input: v.lazy(() => CustomViewUpdateInput),
  id: v.string(),
})

export const CycleRequest: v.GenericSchema<unknown, T.CycleRequest> = v.looseObject({
  id: v.string(),
})

export const CycleArchiveRequest: v.GenericSchema<unknown, T.CycleArchiveRequest> = v.looseObject({
  id: v.string(),
})

export const CycleCreateRequest: v.GenericSchema<unknown, T.CycleCreateRequest> = v.looseObject({
  input: v.lazy(() => CycleCreateInput),
})

export const CyclesRequest: v.GenericSchema<unknown, T.CyclesRequest> = v.looseObject({
  filter: v.optional(v.nullable(v.lazy(() => CycleFilter))),
  before: v.optional(v.nullable(v.string())),
  after: v.optional(v.nullable(v.string())),
  first: v.optional(v.nullable(integer())),
  last: v.optional(v.nullable(integer())),
  includeArchived: v.optional(v.nullable(v.boolean())),
  orderBy: v.optional(v.nullable(v.lazy(() => PaginationOrderBy))),
})

export const CycleShiftAllRequest: v.GenericSchema<unknown, T.CycleShiftAllRequest> = v.looseObject({
  input: v.lazy(() => CycleShiftAllInput),
})

export const CycleStartUpcomingCycleTodayRequest: v.GenericSchema<unknown, T.CycleStartUpcomingCycleTodayRequest> =
  v.looseObject({
    id: v.string(),
  })

export const CycleUpdateRequest: v.GenericSchema<unknown, T.CycleUpdateRequest> = v.looseObject({
  input: v.lazy(() => CycleUpdateInput),
  id: v.string(),
})

export const DependencyPackageMetadataRequest: v.GenericSchema<unknown, T.DependencyPackageMetadataRequest> =
  v.looseObject({
    packages: v.array(v.lazy(() => DependencyPackageInput)),
  })

export const DependencyPackageMetadataResponse: v.GenericSchema<unknown, T.DependencyPackageMetadataResponse> = v.array(
  v.lazy(() => DependencyPackageMetadataResult),
)

export const DocumentRequest: v.GenericSchema<unknown, T.DocumentRequest> = v.looseObject({
  id: v.string(),
})

export const DocumentContentHistoryRequest: v.GenericSchema<unknown, T.DocumentContentHistoryRequest> = v.looseObject({
  id: v.string(),
})

export const DocumentCreateRequest: v.GenericSchema<unknown, T.DocumentCreateRequest> = v.looseObject({
  input: v.lazy(() => DocumentCreateInput),
})

export const DocumentDeleteRequest: v.GenericSchema<unknown, T.DocumentDeleteRequest> = v.looseObject({
  ifParentDocumentId: v.optional(v.nullable(v.string())),
  id: v.string(),
})

export const DocumentsRequest: v.GenericSchema<unknown, T.DocumentsRequest> = v.looseObject({
  filter: v.optional(v.nullable(v.lazy(() => DocumentFilter))),
  before: v.optional(v.nullable(v.string())),
  after: v.optional(v.nullable(v.string())),
  first: v.optional(v.nullable(integer())),
  last: v.optional(v.nullable(integer())),
  includeArchived: v.optional(v.nullable(v.boolean())),
  orderBy: v.optional(v.nullable(v.lazy(() => PaginationOrderBy))),
  sort: v.optional(v.nullable(v.array(v.lazy(() => DocumentSortInput)))),
})

export const DocumentUnarchiveRequest: v.GenericSchema<unknown, T.DocumentUnarchiveRequest> = v.looseObject({
  id: v.string(),
})

export const DocumentUpdateRequest: v.GenericSchema<unknown, T.DocumentUpdateRequest> = v.looseObject({
  input: v.lazy(() => DocumentUpdateInput),
  id: v.string(),
})

export const DocumentUpdateWorkspaceAccessRequest: v.GenericSchema<unknown, T.DocumentUpdateWorkspaceAccessRequest> =
  v.looseObject({
    previousWorkspaceAccess: v.optional(v.nullable(v.string())),
    applyToSubDocuments: v.optional(v.nullable(v.boolean())),
    workspaceAccess: v.string(),
    id: v.string(),
  })

export const EmailIntakeAddressRequest: v.GenericSchema<unknown, T.EmailIntakeAddressRequest> = v.looseObject({
  id: v.string(),
})

export const EmailIntakeAddressCreateRequest: v.GenericSchema<unknown, T.EmailIntakeAddressCreateRequest> =
  v.looseObject({
    input: v.lazy(() => EmailIntakeAddressCreateInput),
  })

export const EmailIntakeAddressDeleteRequest: v.GenericSchema<unknown, T.EmailIntakeAddressDeleteRequest> =
  v.looseObject({
    id: v.string(),
  })

export const EmailIntakeAddressesRequest: v.GenericSchema<unknown, T.EmailIntakeAddressesRequest> = v.looseObject({
  before: v.optional(v.nullable(v.string())),
  after: v.optional(v.nullable(v.string())),
  first: v.optional(v.nullable(integer())),
  last: v.optional(v.nullable(integer())),
  includeArchived: v.optional(v.nullable(v.boolean())),
  orderBy: v.optional(v.nullable(v.lazy(() => PaginationOrderBy))),
})

export const EmailIntakeAddressRefreshSesDomainStatusRequest: v.GenericSchema<
  unknown,
  T.EmailIntakeAddressRefreshSesDomainStatusRequest
> = v.looseObject({
  id: v.string(),
})

export const EmailIntakeAddressRotateRequest: v.GenericSchema<unknown, T.EmailIntakeAddressRotateRequest> =
  v.looseObject({
    id: v.string(),
  })

export const EmailIntakeAddressUpdateRequest: v.GenericSchema<unknown, T.EmailIntakeAddressUpdateRequest> =
  v.looseObject({
    input: v.lazy(() => EmailIntakeAddressUpdateInput),
    id: v.string(),
  })

export const EmailTokenUserAccountAuthRequest: v.GenericSchema<unknown, T.EmailTokenUserAccountAuthRequest> =
  v.looseObject({
    input: v.lazy(() => TokenUserAccountAuthInput),
  })

export const EmailUnsubscribeRequest: v.GenericSchema<unknown, T.EmailUnsubscribeRequest> = v.looseObject({
  input: v.lazy(() => EmailUnsubscribeInput),
})

export const EmailUserAccountAuthChallengeRequest: v.GenericSchema<unknown, T.EmailUserAccountAuthChallengeRequest> =
  v.looseObject({
    input: v.lazy(() => EmailUserAccountAuthChallengeInput),
  })

export const EmojiRequest: v.GenericSchema<unknown, T.EmojiRequest> = v.looseObject({
  id: v.string(),
})

export const EmojiCreateRequest: v.GenericSchema<unknown, T.EmojiCreateRequest> = v.looseObject({
  input: v.lazy(() => EmojiCreateInput),
})

export const EmojiDeleteRequest: v.GenericSchema<unknown, T.EmojiDeleteRequest> = v.looseObject({
  id: v.string(),
})

export const EmojisRequest: v.GenericSchema<unknown, T.EmojisRequest> = v.looseObject({
  filter: v.optional(v.nullable(v.lazy(() => EmojiFilter))),
  before: v.optional(v.nullable(v.string())),
  after: v.optional(v.nullable(v.string())),
  first: v.optional(v.nullable(integer())),
  last: v.optional(v.nullable(integer())),
  includeArchived: v.optional(v.nullable(v.boolean())),
  orderBy: v.optional(v.nullable(v.lazy(() => PaginationOrderBy))),
  sort: v.optional(v.nullable(v.array(v.lazy(() => EmojiSortInput)))),
})

export const EntityExternalLinkRequest: v.GenericSchema<unknown, T.EntityExternalLinkRequest> = v.looseObject({
  id: v.string(),
})

export const EntityExternalLinkCreateRequest: v.GenericSchema<unknown, T.EntityExternalLinkCreateRequest> =
  v.looseObject({
    input: v.lazy(() => EntityExternalLinkCreateInput),
  })

export const EntityExternalLinkDeleteRequest: v.GenericSchema<unknown, T.EntityExternalLinkDeleteRequest> =
  v.looseObject({
    id: v.string(),
  })

export const EntityExternalLinkUpdateRequest: v.GenericSchema<unknown, T.EntityExternalLinkUpdateRequest> =
  v.looseObject({
    input: v.lazy(() => EntityExternalLinkUpdateInput),
    id: v.string(),
  })

export const ExternalUserRequest: v.GenericSchema<unknown, T.ExternalUserRequest> = v.looseObject({
  id: v.string(),
})

export const ExternalUsersRequest: v.GenericSchema<unknown, T.ExternalUsersRequest> = v.looseObject({
  before: v.optional(v.nullable(v.string())),
  after: v.optional(v.nullable(v.string())),
  first: v.optional(v.nullable(integer())),
  last: v.optional(v.nullable(integer())),
  includeArchived: v.optional(v.nullable(v.boolean())),
  orderBy: v.optional(v.nullable(v.lazy(() => PaginationOrderBy))),
})

export const FavoriteRequest: v.GenericSchema<unknown, T.FavoriteRequest> = v.looseObject({
  id: v.string(),
})

export const FavoriteCreateRequest: v.GenericSchema<unknown, T.FavoriteCreateRequest> = v.looseObject({
  input: v.lazy(() => FavoriteCreateInput),
})

export const FavoriteDeleteRequest: v.GenericSchema<unknown, T.FavoriteDeleteRequest> = v.looseObject({
  id: v.string(),
})

export const FavoritesRequest: v.GenericSchema<unknown, T.FavoritesRequest> = v.looseObject({
  before: v.optional(v.nullable(v.string())),
  after: v.optional(v.nullable(v.string())),
  first: v.optional(v.nullable(integer())),
  last: v.optional(v.nullable(integer())),
  includeArchived: v.optional(v.nullable(v.boolean())),
  orderBy: v.optional(v.nullable(v.lazy(() => PaginationOrderBy))),
})

export const FavoriteUpdateRequest: v.GenericSchema<unknown, T.FavoriteUpdateRequest> = v.looseObject({
  input: v.lazy(() => FavoriteUpdateInput),
  id: v.string(),
})

export const FileUploadRequest: v.GenericSchema<unknown, T.FileUploadRequest> = v.looseObject({
  metaData: v.optional(v.nullable(v.unknown())),
  makePublic: v.optional(v.nullable(v.boolean())),
  size: integer(),
  contentType: v.string(),
  filename: v.string(),
})

export const FileUploadDangerouslyDeleteRequest: v.GenericSchema<unknown, T.FileUploadDangerouslyDeleteRequest> =
  v.looseObject({
    assetUrl: v.string(),
  })

export const GitAutomationStateCreateRequest: v.GenericSchema<unknown, T.GitAutomationStateCreateRequest> =
  v.looseObject({
    input: v.lazy(() => GitAutomationStateCreateInput),
  })

export const GitAutomationStateDeleteRequest: v.GenericSchema<unknown, T.GitAutomationStateDeleteRequest> =
  v.looseObject({
    id: v.string(),
  })

export const GitAutomationStateUpdateRequest: v.GenericSchema<unknown, T.GitAutomationStateUpdateRequest> =
  v.looseObject({
    input: v.lazy(() => GitAutomationStateUpdateInput),
    id: v.string(),
  })

export const GitAutomationTargetBranchCreateRequest: v.GenericSchema<
  unknown,
  T.GitAutomationTargetBranchCreateRequest
> = v.looseObject({
  input: v.lazy(() => GitAutomationTargetBranchCreateInput),
})

export const GitAutomationTargetBranchDeleteRequest: v.GenericSchema<
  unknown,
  T.GitAutomationTargetBranchDeleteRequest
> = v.looseObject({
  id: v.string(),
})

export const GitAutomationTargetBranchUpdateRequest: v.GenericSchema<
  unknown,
  T.GitAutomationTargetBranchUpdateRequest
> = v.looseObject({
  input: v.lazy(() => GitAutomationTargetBranchUpdateInput),
  id: v.string(),
})

export const GoogleUserAccountAuthRequest: v.GenericSchema<unknown, T.GoogleUserAccountAuthRequest> = v.looseObject({
  input: v.lazy(() => GoogleUserAccountAuthInput),
})

export const ImageUploadFromUrlRequest: v.GenericSchema<unknown, T.ImageUploadFromUrlRequest> = v.looseObject({
  url: v.string(),
})

export const ImportFileUploadRequest: v.GenericSchema<unknown, T.ImportFileUploadRequest> = v.looseObject({
  metaData: v.optional(v.nullable(v.unknown())),
  size: integer(),
  contentType: v.string(),
  filename: v.string(),
})

export const InboxNotificationsRequest: v.GenericSchema<unknown, T.InboxNotificationsRequest> = v.looseObject({
  first: v.optional(v.nullable(integer())),
  after: v.optional(v.nullable(v.string())),
  unreadOnly: v.optional(v.nullable(v.boolean())),
})

export const InboxNotificationUpdateRequest: v.GenericSchema<unknown, T.InboxNotificationUpdateRequest> = v.looseObject(
  {
    input: v.lazy(() => InboxNotificationUpdateInput),
    id: v.string(),
  },
)

export const InitiativeRequest: v.GenericSchema<unknown, T.InitiativeRequest> = v.looseObject({
  id: v.string(),
})

export const InitiativeAddLabelRequest: v.GenericSchema<unknown, T.InitiativeAddLabelRequest> = v.looseObject({
  labelId: v.string(),
  id: v.string(),
})

export const InitiativeArchiveRequest: v.GenericSchema<unknown, T.InitiativeArchiveRequest> = v.looseObject({
  id: v.string(),
})

export const InitiativeCreateRequest: v.GenericSchema<unknown, T.InitiativeCreateRequest> = v.looseObject({
  input: v.lazy(() => InitiativeCreateInput),
})

export const InitiativeDeleteRequest: v.GenericSchema<unknown, T.InitiativeDeleteRequest> = v.looseObject({
  id: v.string(),
})

export const InitiativeFilterSuggestionRequest: v.GenericSchema<unknown, T.InitiativeFilterSuggestionRequest> =
  v.looseObject({
    teamId: v.optional(v.nullable(v.string())),
    prompt: v.string(),
  })

export const InitiativeLabelRequest: v.GenericSchema<unknown, T.InitiativeLabelRequest> = v.looseObject({
  id: v.string(),
})

export const InitiativeLabelCreateRequest: v.GenericSchema<unknown, T.InitiativeLabelCreateRequest> = v.looseObject({
  input: v.lazy(() => InitiativeLabelCreateInput),
})

export const InitiativeLabelDeleteRequest: v.GenericSchema<unknown, T.InitiativeLabelDeleteRequest> = v.looseObject({
  id: v.string(),
})

export const InitiativeLabelRestoreRequest: v.GenericSchema<unknown, T.InitiativeLabelRestoreRequest> = v.looseObject({
  id: v.string(),
})

export const InitiativeLabelRetireRequest: v.GenericSchema<unknown, T.InitiativeLabelRetireRequest> = v.looseObject({
  id: v.string(),
})

export const InitiativeLabelsRequest: v.GenericSchema<unknown, T.InitiativeLabelsRequest> = v.looseObject({
  filter: v.optional(v.nullable(v.lazy(() => InitiativeLabelFilter))),
  before: v.optional(v.nullable(v.string())),
  after: v.optional(v.nullable(v.string())),
  first: v.optional(v.nullable(integer())),
  last: v.optional(v.nullable(integer())),
  includeArchived: v.optional(v.nullable(v.boolean())),
  orderBy: v.optional(v.nullable(v.lazy(() => PaginationOrderBy))),
})

export const InitiativeLabelUpdateRequest: v.GenericSchema<unknown, T.InitiativeLabelUpdateRequest> = v.looseObject({
  input: v.lazy(() => InitiativeLabelUpdateInput),
  id: v.string(),
})

export const InitiativeRelationRequest: v.GenericSchema<unknown, T.InitiativeRelationRequest> = v.looseObject({
  id: v.string(),
})

export const InitiativeRelationCreateRequest: v.GenericSchema<unknown, T.InitiativeRelationCreateRequest> =
  v.looseObject({
    input: v.lazy(() => InitiativeRelationCreateInput),
  })

export const InitiativeRelationDeleteRequest: v.GenericSchema<unknown, T.InitiativeRelationDeleteRequest> =
  v.looseObject({
    id: v.string(),
  })

export const InitiativeRelationsRequest: v.GenericSchema<unknown, T.InitiativeRelationsRequest> = v.looseObject({
  before: v.optional(v.nullable(v.string())),
  after: v.optional(v.nullable(v.string())),
  first: v.optional(v.nullable(integer())),
  last: v.optional(v.nullable(integer())),
  includeArchived: v.optional(v.nullable(v.boolean())),
  orderBy: v.optional(v.nullable(v.lazy(() => PaginationOrderBy))),
})

export const InitiativeRelationUpdateRequest: v.GenericSchema<unknown, T.InitiativeRelationUpdateRequest> =
  v.looseObject({
    input: v.lazy(() => InitiativeRelationUpdateInput),
    id: v.string(),
  })

export const InitiativeRemoveLabelRequest: v.GenericSchema<unknown, T.InitiativeRemoveLabelRequest> = v.looseObject({
  labelId: v.string(),
  id: v.string(),
})

export const InitiativesRequest: v.GenericSchema<unknown, T.InitiativesRequest> = v.looseObject({
  filter: v.optional(v.nullable(v.lazy(() => InitiativeFilter))),
  before: v.optional(v.nullable(v.string())),
  after: v.optional(v.nullable(v.string())),
  first: v.optional(v.nullable(integer())),
  last: v.optional(v.nullable(integer())),
  includeArchived: v.optional(v.nullable(v.boolean())),
  orderBy: v.optional(v.nullable(v.lazy(() => PaginationOrderBy))),
  sort: v.optional(v.nullable(v.array(v.lazy(() => InitiativeSortInput)))),
})

export const InitiativeToProjectRequest: v.GenericSchema<unknown, T.InitiativeToProjectRequest> = v.looseObject({
  id: v.string(),
})

export const InitiativeToProjectCreateRequest: v.GenericSchema<unknown, T.InitiativeToProjectCreateRequest> =
  v.looseObject({
    input: v.lazy(() => InitiativeToProjectCreateInput),
  })

export const InitiativeToProjectDeleteRequest: v.GenericSchema<unknown, T.InitiativeToProjectDeleteRequest> =
  v.looseObject({
    id: v.string(),
  })

export const InitiativeToProjectsRequest: v.GenericSchema<unknown, T.InitiativeToProjectsRequest> = v.looseObject({
  before: v.optional(v.nullable(v.string())),
  after: v.optional(v.nullable(v.string())),
  first: v.optional(v.nullable(integer())),
  last: v.optional(v.nullable(integer())),
  includeArchived: v.optional(v.nullable(v.boolean())),
  orderBy: v.optional(v.nullable(v.lazy(() => PaginationOrderBy))),
})

export const InitiativeToProjectUpdateRequest: v.GenericSchema<unknown, T.InitiativeToProjectUpdateRequest> =
  v.looseObject({
    input: v.lazy(() => InitiativeToProjectUpdateInput),
    id: v.string(),
  })

export const InitiativeUnarchiveRequest: v.GenericSchema<unknown, T.InitiativeUnarchiveRequest> = v.looseObject({
  id: v.string(),
})

export const InitiativeUpdateRequest: v.GenericSchema<unknown, T.InitiativeUpdateRequest> = v.looseObject({
  input: v.lazy(() => InitiativeUpdateInput),
  id: v.string(),
})

export const InitiativeUpdateArchiveRequest: v.GenericSchema<unknown, T.InitiativeUpdateArchiveRequest> = v.looseObject(
  {
    id: v.string(),
  },
)

export const InitiativeUpdateCreateRequest: v.GenericSchema<unknown, T.InitiativeUpdateCreateRequest> = v.looseObject({
  input: v.lazy(() => InitiativeUpdateCreateInput),
})

export const InitiativeUpdatesRequest: v.GenericSchema<unknown, T.InitiativeUpdatesRequest> = v.looseObject({
  filter: v.optional(v.nullable(v.lazy(() => InitiativeUpdateFilter))),
  before: v.optional(v.nullable(v.string())),
  after: v.optional(v.nullable(v.string())),
  first: v.optional(v.nullable(integer())),
  last: v.optional(v.nullable(integer())),
  includeArchived: v.optional(v.nullable(v.boolean())),
  orderBy: v.optional(v.nullable(v.lazy(() => PaginationOrderBy))),
})

export const InitiativeUpdateUnarchiveRequest: v.GenericSchema<unknown, T.InitiativeUpdateUnarchiveRequest> =
  v.looseObject({
    id: v.string(),
  })

export const InitiativeUpdateUpdateRequest: v.GenericSchema<unknown, T.InitiativeUpdateUpdateRequest> = v.looseObject({
  input: v.lazy(() => InitiativeUpdateUpdateInput),
  id: v.string(),
})

export const IntegrationRequest: v.GenericSchema<unknown, T.IntegrationRequest> = v.looseObject({
  id: v.string(),
})

export const IntegrationArchiveRequest: v.GenericSchema<unknown, T.IntegrationArchiveRequest> = v.looseObject({
  id: v.string(),
})

export const IntegrationAsksConnectChannelRequest: v.GenericSchema<unknown, T.IntegrationAsksConnectChannelRequest> =
  v.looseObject({
    redirectUri: v.string(),
    code: v.string(),
  })

export const IntegrationDeleteRequest: v.GenericSchema<unknown, T.IntegrationDeleteRequest> = v.looseObject({
  skipInstallationDeletion: v.optional(v.nullable(v.boolean())),
  id: v.string(),
})

export const IntegrationDiscordRequest: v.GenericSchema<unknown, T.IntegrationDiscordRequest> = v.looseObject({
  redirectUri: v.string(),
  code: v.string(),
})

export const IntegrationFigmaRequest: v.GenericSchema<unknown, T.IntegrationFigmaRequest> = v.looseObject({
  redirectUri: v.string(),
  code: v.string(),
})

export const IntegrationFrontRequest: v.GenericSchema<unknown, T.IntegrationFrontRequest> = v.looseObject({
  redirectUri: v.string(),
  code: v.string(),
})

export const IntegrationGithubConnectRequest: v.GenericSchema<unknown, T.IntegrationGithubConnectRequest> =
  v.looseObject({
    confirmReplace: v.optional(v.nullable(v.boolean())),
    githubHost: v.optional(v.nullable(v.string())),
    codeAccess: v.optional(v.nullable(v.boolean())),
    code: v.string(),
    installationId: v.string(),
  })

export const IntegrationGitHubEnterpriseServerConnectRequest: v.GenericSchema<
  unknown,
  T.IntegrationGitHubEnterpriseServerConnectRequest
> = v.looseObject({
  organizationName: v.string(),
  githubUrl: v.string(),
})

export const IntegrationGithubImportConnectRequest: v.GenericSchema<unknown, T.IntegrationGithubImportConnectRequest> =
  v.looseObject({
    code: v.string(),
    installationId: v.string(),
  })

export const IntegrationGithubImportRefreshRequest: v.GenericSchema<unknown, T.IntegrationGithubImportRefreshRequest> =
  v.looseObject({
    id: v.string(),
  })

export const IntegrationGitHubPersonalRequest: v.GenericSchema<unknown, T.IntegrationGitHubPersonalRequest> =
  v.looseObject({
    enterpriseUrl: v.optional(v.nullable(v.string())),
    codeAccess: v.optional(v.nullable(v.boolean())),
    code: v.string(),
  })

export const IntegrationGithubRemoveCodeAccessRequest: v.GenericSchema<
  unknown,
  T.IntegrationGithubRemoveCodeAccessRequest
> = v.looseObject({
  integrationId: v.string(),
})

export const IntegrationGitlabConnectRequest: v.GenericSchema<unknown, T.IntegrationGitlabConnectRequest> =
  v.looseObject({
    accessToken: v.string(),
    gitlabUrl: v.string(),
    validationProjectPath: v.optional(v.nullable(v.string())),
    readonly: v.optional(v.nullable(v.boolean())),
    expiresAt: v.optional(v.nullable(v.string())),
  })

export const IntegrationGitlabRotateRequest: v.GenericSchema<unknown, T.IntegrationGitlabRotateRequest> = v.looseObject(
  {
    integrationId: v.string(),
  },
)

export const IntegrationGitlabTestConnectionRequest: v.GenericSchema<
  unknown,
  T.IntegrationGitlabTestConnectionRequest
> = v.looseObject({
  integrationId: v.string(),
})

export const IntegrationGitlabUpdateRotationSettingsRequest: v.GenericSchema<
  unknown,
  T.IntegrationGitlabUpdateRotationSettingsRequest
> = v.looseObject({
  enabled: v.boolean(),
  integrationId: v.string(),
})

export const IntegrationGitlabUpdateTokenRequest: v.GenericSchema<unknown, T.IntegrationGitlabUpdateTokenRequest> =
  v.looseObject({
    expiresAt: v.optional(v.nullable(v.string())),
    readonly: v.optional(v.nullable(v.boolean())),
    accessToken: v.string(),
    integrationId: v.string(),
  })

export const IntegrationGongRequest: v.GenericSchema<unknown, T.IntegrationGongRequest> = v.looseObject({
  redirectUri: v.string(),
  code: v.string(),
})

export const IntegrationGoogleSheetsRequest: v.GenericSchema<unknown, T.IntegrationGoogleSheetsRequest> = v.looseObject(
  {
    code: v.string(),
  },
)

export const IntegrationHasScopesRequest: v.GenericSchema<unknown, T.IntegrationHasScopesRequest> = v.looseObject({
  scopes: v.array(v.string()),
  integrationId: v.string(),
})

export const IntegrationIntercomRequest: v.GenericSchema<unknown, T.IntegrationIntercomRequest> = v.looseObject({
  domainUrl: v.optional(v.nullable(v.string())),
  redirectUri: v.string(),
  code: v.string(),
})

export const IntegrationIntercomSettingsUpdateRequest: v.GenericSchema<
  unknown,
  T.IntegrationIntercomSettingsUpdateRequest
> = v.looseObject({
  input: v.lazy(() => IntercomSettingsInput),
})

export const IntegrationJiraPersonalRequest: v.GenericSchema<unknown, T.IntegrationJiraPersonalRequest> = v.looseObject(
  {
    workspaceIntegrationId: v.optional(v.nullable(v.string())),
    code: v.optional(v.nullable(v.string())),
    accessToken: v.optional(v.nullable(v.string())),
  },
)

export const IntegrationMicrosoftPersonalConnectRequest: v.GenericSchema<
  unknown,
  T.IntegrationMicrosoftPersonalConnectRequest
> = v.looseObject({
  redirectUri: v.string(),
  code: v.string(),
})

export const IntegrationMicrosoftTeamsRequest: v.GenericSchema<unknown, T.IntegrationMicrosoftTeamsRequest> =
  v.looseObject({
    redirectUri: v.string(),
    code: v.string(),
  })

export const IntegrationRequestRequest: v.GenericSchema<unknown, T.IntegrationRequestRequest> = v.looseObject({
  input: v.lazy(() => IntegrationRequestInput),
})

export const IntegrationsRequest: v.GenericSchema<unknown, T.IntegrationsRequest> = v.looseObject({
  before: v.optional(v.nullable(v.string())),
  after: v.optional(v.nullable(v.string())),
  first: v.optional(v.nullable(integer())),
  last: v.optional(v.nullable(integer())),
  includeArchived: v.optional(v.nullable(v.boolean())),
  orderBy: v.optional(v.nullable(v.lazy(() => PaginationOrderBy))),
})

export const IntegrationSalesforceRequest: v.GenericSchema<unknown, T.IntegrationSalesforceRequest> = v.looseObject({
  code: v.string(),
  subdomain: v.string(),
  redirectUri: v.string(),
  codeVerifier: v.string(),
})

export const IntegrationSentryConnectRequest: v.GenericSchema<unknown, T.IntegrationSentryConnectRequest> =
  v.looseObject({
    code: v.string(),
    installationId: v.string(),
  })

export const IntegrationSlackRequest: v.GenericSchema<unknown, T.IntegrationSlackRequest> = v.looseObject({
  requestedScopes: v.optional(v.nullable(v.array(v.string()))),
  shouldUseV2Auth: v.optional(v.nullable(v.boolean())),
  redirectUri: v.string(),
  code: v.string(),
})

export const IntegrationSlackAsksRequest: v.GenericSchema<unknown, T.IntegrationSlackAsksRequest> = v.looseObject({
  requestedScopes: v.optional(v.nullable(v.array(v.string()))),
  redirectUri: v.string(),
  code: v.string(),
})

export const IntegrationSlackCustomerChannelLinkRequest: v.GenericSchema<
  unknown,
  T.IntegrationSlackCustomerChannelLinkRequest
> = v.looseObject({
  redirectUri: v.string(),
  customerId: v.string(),
  code: v.string(),
})

export const IntegrationSlackCustomViewNotificationsRequest: v.GenericSchema<
  unknown,
  T.IntegrationSlackCustomViewNotificationsRequest
> = v.looseObject({
  redirectUri: v.string(),
  customViewId: v.string(),
  code: v.string(),
})

export const IntegrationSlackImportEmojisRequest: v.GenericSchema<unknown, T.IntegrationSlackImportEmojisRequest> =
  v.looseObject({
    redirectUri: v.string(),
    code: v.string(),
  })

export const IntegrationSlackOrAsksUpdateSlackTeamNameRequest: v.GenericSchema<
  unknown,
  T.IntegrationSlackOrAsksUpdateSlackTeamNameRequest
> = v.looseObject({
  integrationId: v.string(),
})

export const IntegrationSlackOrgProjectUpdatesPostRequest: v.GenericSchema<
  unknown,
  T.IntegrationSlackOrgProjectUpdatesPostRequest
> = v.looseObject({
  redirectUri: v.string(),
  code: v.string(),
})

export const IntegrationSlackPersonalRequest: v.GenericSchema<unknown, T.IntegrationSlackPersonalRequest> =
  v.looseObject({
    redirectUri: v.string(),
    code: v.string(),
  })

export const IntegrationSlackPostRequest: v.GenericSchema<unknown, T.IntegrationSlackPostRequest> = v.looseObject({
  shouldUseV2Auth: v.optional(v.nullable(v.boolean())),
  redirectUri: v.string(),
  teamId: v.string(),
  code: v.string(),
})

export const IntegrationSlackProjectPostRequest: v.GenericSchema<unknown, T.IntegrationSlackProjectPostRequest> =
  v.looseObject({
    service: v.string(),
    redirectUri: v.string(),
    projectId: v.string(),
    code: v.string(),
  })

export const IntegrationsSettingsRequest: v.GenericSchema<unknown, T.IntegrationsSettingsRequest> = v.looseObject({
  id: v.string(),
})

export const IntegrationsSettingsCreateRequest: v.GenericSchema<unknown, T.IntegrationsSettingsCreateRequest> =
  v.looseObject({
    input: v.lazy(() => IntegrationsSettingsCreateInput),
  })

export const IntegrationsSettingsUpdateRequest: v.GenericSchema<unknown, T.IntegrationsSettingsUpdateRequest> =
  v.looseObject({
    input: v.lazy(() => IntegrationsSettingsUpdateInput),
    id: v.string(),
  })

export const IntegrationTemplateRequest: v.GenericSchema<unknown, T.IntegrationTemplateRequest> = v.looseObject({
  id: v.string(),
})

export const IntegrationTemplateCreateRequest: v.GenericSchema<unknown, T.IntegrationTemplateCreateRequest> =
  v.looseObject({
    input: v.lazy(() => IntegrationTemplateCreateInput),
  })

export const IntegrationTemplateDeleteRequest: v.GenericSchema<unknown, T.IntegrationTemplateDeleteRequest> =
  v.looseObject({
    id: v.string(),
  })

export const IntegrationTemplatesRequest: v.GenericSchema<unknown, T.IntegrationTemplatesRequest> = v.looseObject({
  before: v.optional(v.nullable(v.string())),
  after: v.optional(v.nullable(v.string())),
  first: v.optional(v.nullable(integer())),
  last: v.optional(v.nullable(integer())),
  includeArchived: v.optional(v.nullable(v.boolean())),
  orderBy: v.optional(v.nullable(v.lazy(() => PaginationOrderBy))),
})

export const IntegrationZendeskRequest: v.GenericSchema<unknown, T.IntegrationZendeskRequest> = v.looseObject({
  subdomain: v.string(),
  code: v.optional(v.nullable(v.string())),
  scope: v.optional(v.nullable(v.string())),
  redirectUri: v.optional(v.nullable(v.string())),
  botUserRole: v.optional(v.nullable(v.string())),
  botUserId: v.optional(v.nullable(v.string())),
  customApiUrl: v.optional(v.nullable(v.string())),
  accessToken: v.optional(v.nullable(v.string())),
})

export const IssueRequest: v.GenericSchema<unknown, T.IssueRequest> = v.looseObject({
  id: v.string(),
})

export const IssueAddLabelRequest: v.GenericSchema<unknown, T.IssueAddLabelRequest> = v.looseObject({
  labelId: v.string(),
  id: v.string(),
})

export const IssueArchiveRequest: v.GenericSchema<unknown, T.IssueArchiveRequest> = v.looseObject({
  trash: v.optional(v.nullable(v.boolean())),
  id: v.string(),
})

export const IssueBatchCreateRequest: v.GenericSchema<unknown, T.IssueBatchCreateRequest> = v.looseObject({
  input: v.lazy(() => IssueBatchCreateInput),
})

export const IssueBatchUpdateRequest: v.GenericSchema<unknown, T.IssueBatchUpdateRequest> = v.looseObject({
  input: v.lazy(() => IssueUpdateInput),
  ids: v.array(v.string()),
})

export const IssueCreateRequest: v.GenericSchema<unknown, T.IssueCreateRequest> = v.looseObject({
  input: v.lazy(() => IssueCreateInput),
})

export const IssueDeleteRequest: v.GenericSchema<unknown, T.IssueDeleteRequest> = v.looseObject({
  permanentlyDelete: v.optional(v.nullable(v.boolean())),
  id: v.string(),
})

export const IssueExternalSyncDisableRequest: v.GenericSchema<unknown, T.IssueExternalSyncDisableRequest> =
  v.looseObject({
    attachmentId: v.string(),
  })

export const IssueFigmaFileKeySearchRequest: v.GenericSchema<unknown, T.IssueFigmaFileKeySearchRequest> = v.looseObject(
  {
    before: v.optional(v.nullable(v.string())),
    after: v.optional(v.nullable(v.string())),
    first: v.optional(v.nullable(integer())),
    last: v.optional(v.nullable(integer())),
    includeArchived: v.optional(v.nullable(v.boolean())),
    orderBy: v.optional(v.nullable(v.lazy(() => PaginationOrderBy))),
    fileKey: v.string(),
  },
)

export const IssueFilterSuggestionRequest: v.GenericSchema<unknown, T.IssueFilterSuggestionRequest> = v.looseObject({
  teamId: v.optional(v.nullable(v.string())),
  projectId: v.optional(v.nullable(v.string())),
  prompt: v.string(),
})

export const IssueImportCheckCSVRequest: v.GenericSchema<unknown, T.IssueImportCheckCSVRequest> = v.looseObject({
  csvUrl: v.string(),
  service: v.string(),
})

export const IssueImportCheckSyncRequest: v.GenericSchema<unknown, T.IssueImportCheckSyncRequest> = v.looseObject({
  issueImportId: v.string(),
})

export const IssueImportCreateAsanaRequest: v.GenericSchema<unknown, T.IssueImportCreateAsanaRequest> = v.looseObject({
  teamId: v.optional(v.nullable(v.string())),
  teamName: v.optional(v.nullable(v.string())),
  asanaToken: v.string(),
  asanaTeamName: v.string(),
  asanaProjectNames: v.optional(v.nullable(v.array(v.string()))),
  instantProcess: v.optional(v.nullable(v.boolean())),
  includeClosedIssues: v.optional(v.nullable(v.boolean())),
  id: v.optional(v.nullable(v.string())),
})

export const IssueImportCreateClubhouseRequest: v.GenericSchema<unknown, T.IssueImportCreateClubhouseRequest> =
  v.looseObject({
    teamId: v.optional(v.nullable(v.string())),
    teamName: v.optional(v.nullable(v.string())),
    clubhouseToken: v.string(),
    clubhouseGroupName: v.string(),
    instantProcess: v.optional(v.nullable(v.boolean())),
    includeClosedIssues: v.optional(v.nullable(v.boolean())),
    id: v.optional(v.nullable(v.string())),
  })

export const IssueImportCreateCSVJiraRequest: v.GenericSchema<unknown, T.IssueImportCreateCSVJiraRequest> =
  v.looseObject({
    teamId: v.optional(v.nullable(v.string())),
    teamName: v.optional(v.nullable(v.string())),
    csvUrl: v.string(),
    jiraHostname: v.optional(v.nullable(v.string())),
    jiraToken: v.optional(v.nullable(v.string())),
    jiraEmail: v.optional(v.nullable(v.string())),
  })

export const IssueImportCreateGithubRequest: v.GenericSchema<unknown, T.IssueImportCreateGithubRequest> = v.looseObject(
  {
    teamId: v.optional(v.nullable(v.string())),
    teamName: v.optional(v.nullable(v.string())),
    githubRepoIds: v.optional(v.nullable(v.array(integer()))),
    githubLabels: v.optional(v.nullable(v.array(v.string()))),
    instantProcess: v.optional(v.nullable(v.boolean())),
    includeClosedIssues: v.optional(v.nullable(v.boolean())),
  },
)

export const IssueImportCreateJiraRequest: v.GenericSchema<unknown, T.IssueImportCreateJiraRequest> = v.looseObject({
  teamId: v.optional(v.nullable(v.string())),
  teamName: v.optional(v.nullable(v.string())),
  jiraToken: v.string(),
  jiraProject: v.string(),
  jiraEmail: v.string(),
  jiraHostname: v.string(),
  jql: v.optional(v.nullable(v.string())),
  instantProcess: v.optional(v.nullable(v.boolean())),
  includeClosedIssues: v.optional(v.nullable(v.boolean())),
  id: v.optional(v.nullable(v.string())),
})

export const IssueImportDeleteRequest: v.GenericSchema<unknown, T.IssueImportDeleteRequest> = v.looseObject({
  issueImportId: v.string(),
})

export const IssueImportJqlCheckRequest: v.GenericSchema<unknown, T.IssueImportJqlCheckRequest> = v.looseObject({
  jiraHostname: v.string(),
  jiraToken: v.string(),
  jiraEmail: v.string(),
  jiraProject: v.string(),
  jql: v.string(),
})

export const IssueImportProcessRequest: v.GenericSchema<unknown, T.IssueImportProcessRequest> = v.looseObject({
  mapping: v.unknown(),
  issueImportId: v.string(),
})

export const IssueImportUpdateRequest: v.GenericSchema<unknown, T.IssueImportUpdateRequest> = v.looseObject({
  input: v.lazy(() => IssueImportUpdateInput),
  id: v.string(),
})

export const IssueLabelRequest: v.GenericSchema<unknown, T.IssueLabelRequest> = v.looseObject({
  id: v.string(),
})

export const IssueLabelCreateRequest: v.GenericSchema<unknown, T.IssueLabelCreateRequest> = v.looseObject({
  replaceTeamLabels: v.optional(v.nullable(v.boolean())),
  input: v.lazy(() => IssueLabelCreateInput),
})

export const IssueLabelDeleteRequest: v.GenericSchema<unknown, T.IssueLabelDeleteRequest> = v.looseObject({
  id: v.string(),
})

export const IssueLabelRestoreRequest: v.GenericSchema<unknown, T.IssueLabelRestoreRequest> = v.looseObject({
  id: v.string(),
})

export const IssueLabelRetireRequest: v.GenericSchema<unknown, T.IssueLabelRetireRequest> = v.looseObject({
  id: v.string(),
})

export const IssueLabelsRequest: v.GenericSchema<unknown, T.IssueLabelsRequest> = v.looseObject({
  filter: v.optional(v.nullable(v.lazy(() => IssueLabelFilter))),
  before: v.optional(v.nullable(v.string())),
  after: v.optional(v.nullable(v.string())),
  first: v.optional(v.nullable(integer())),
  last: v.optional(v.nullable(integer())),
  includeArchived: v.optional(v.nullable(v.boolean())),
  orderBy: v.optional(v.nullable(v.lazy(() => PaginationOrderBy))),
})

export const IssueLabelUpdateRequest: v.GenericSchema<unknown, T.IssueLabelUpdateRequest> = v.looseObject({
  replaceTeamLabels: v.optional(v.nullable(v.boolean())),
  input: v.lazy(() => IssueLabelUpdateInput),
  id: v.string(),
})

export const IssuePriorityValuesResponse: v.GenericSchema<unknown, T.IssuePriorityValuesResponse> = v.array(
  v.lazy(() => IssuePriorityValue),
)

export const IssueRelationRequest: v.GenericSchema<unknown, T.IssueRelationRequest> = v.looseObject({
  id: v.string(),
})

export const IssueRelationCreateRequest: v.GenericSchema<unknown, T.IssueRelationCreateRequest> = v.looseObject({
  overrideCreatedAt: v.optional(v.nullable(v.string())),
  input: v.lazy(() => IssueRelationCreateInput),
})

export const IssueRelationDeleteRequest: v.GenericSchema<unknown, T.IssueRelationDeleteRequest> = v.looseObject({
  id: v.string(),
})

export const IssueRelationsRequest: v.GenericSchema<unknown, T.IssueRelationsRequest> = v.looseObject({
  before: v.optional(v.nullable(v.string())),
  after: v.optional(v.nullable(v.string())),
  first: v.optional(v.nullable(integer())),
  last: v.optional(v.nullable(integer())),
  includeArchived: v.optional(v.nullable(v.boolean())),
  orderBy: v.optional(v.nullable(v.lazy(() => PaginationOrderBy))),
})

export const IssueRelationUpdateRequest: v.GenericSchema<unknown, T.IssueRelationUpdateRequest> = v.looseObject({
  input: v.lazy(() => IssueRelationUpdateInput),
  id: v.string(),
})

export const IssueReminderRequest: v.GenericSchema<unknown, T.IssueReminderRequest> = v.looseObject({
  reminderAt: v.string(),
  id: v.string(),
})

export const IssueRemoveLabelRequest: v.GenericSchema<unknown, T.IssueRemoveLabelRequest> = v.looseObject({
  labelId: v.string(),
  id: v.string(),
})

export const IssueRepositorySuggestionsRequest: v.GenericSchema<unknown, T.IssueRepositorySuggestionsRequest> =
  v.looseObject({
    agentSessionId: v.optional(v.nullable(v.string())),
    candidateRepositories: v.array(v.lazy(() => CandidateRepository)),
    issueId: v.string(),
  })

export const IssuesRequest: v.GenericSchema<unknown, T.IssuesRequest> = v.looseObject({
  filter: v.optional(v.nullable(v.lazy(() => IssueFilter))),
  before: v.optional(v.nullable(v.string())),
  after: v.optional(v.nullable(v.string())),
  first: v.optional(v.nullable(integer())),
  last: v.optional(v.nullable(integer())),
  includeArchived: v.optional(v.nullable(v.boolean())),
  orderBy: v.optional(v.nullable(v.lazy(() => PaginationOrderBy))),
  sort: v.optional(v.nullable(v.array(v.lazy(() => IssueSortInput)))),
})

export const IssueSearchRequest: v.GenericSchema<unknown, T.IssueSearchRequest> = v.looseObject({
  filter: v.optional(v.nullable(v.lazy(() => IssueFilter))),
  query: v.optional(v.nullable(v.string())),
  before: v.optional(v.nullable(v.string())),
  after: v.optional(v.nullable(v.string())),
  first: v.optional(v.nullable(integer())),
  last: v.optional(v.nullable(integer())),
  includeArchived: v.optional(v.nullable(v.boolean())),
  orderBy: v.optional(v.nullable(v.lazy(() => PaginationOrderBy))),
})

export const IssueShareRequest: v.GenericSchema<unknown, T.IssueShareRequest> = v.looseObject({
  userId: v.string(),
  id: v.string(),
})

export const IssueSubscribeRequest: v.GenericSchema<unknown, T.IssueSubscribeRequest> = v.looseObject({
  userEmail: v.optional(v.nullable(v.string())),
  userId: v.optional(v.nullable(v.string())),
  id: v.string(),
})

export const IssueTitleSuggestionFromCustomerRequestRequest: v.GenericSchema<
  unknown,
  T.IssueTitleSuggestionFromCustomerRequestRequest
> = v.looseObject({
  request: v.string(),
})

export const IssueToReleaseRequest: v.GenericSchema<unknown, T.IssueToReleaseRequest> = v.looseObject({
  id: v.string(),
})

export const IssueToReleaseCreateRequest: v.GenericSchema<unknown, T.IssueToReleaseCreateRequest> = v.looseObject({
  input: v.lazy(() => IssueToReleaseCreateInput),
})

export const IssueToReleaseDeleteRequest: v.GenericSchema<unknown, T.IssueToReleaseDeleteRequest> = v.looseObject({
  id: v.string(),
})

export const IssueToReleaseDeleteByIssueAndReleaseRequest: v.GenericSchema<
  unknown,
  T.IssueToReleaseDeleteByIssueAndReleaseRequest
> = v.looseObject({
  releaseId: v.string(),
  issueId: v.string(),
})

export const IssueToReleasesRequest: v.GenericSchema<unknown, T.IssueToReleasesRequest> = v.looseObject({
  before: v.optional(v.nullable(v.string())),
  after: v.optional(v.nullable(v.string())),
  first: v.optional(v.nullable(integer())),
  last: v.optional(v.nullable(integer())),
  includeArchived: v.optional(v.nullable(v.boolean())),
  orderBy: v.optional(v.nullable(v.lazy(() => PaginationOrderBy))),
})

export const IssueUnarchiveRequest: v.GenericSchema<unknown, T.IssueUnarchiveRequest> = v.looseObject({
  id: v.string(),
})

export const IssueUnshareRequest: v.GenericSchema<unknown, T.IssueUnshareRequest> = v.looseObject({
  userId: v.string(),
  id: v.string(),
})

export const IssueUnsubscribeRequest: v.GenericSchema<unknown, T.IssueUnsubscribeRequest> = v.looseObject({
  userEmail: v.optional(v.nullable(v.string())),
  userId: v.optional(v.nullable(v.string())),
  id: v.string(),
})

export const IssueUpdateRequest: v.GenericSchema<unknown, T.IssueUpdateRequest> = v.looseObject({
  input: v.lazy(() => IssueUpdateInput),
  id: v.string(),
})

export const IssueVcsBranchSearchRequest: v.GenericSchema<unknown, T.IssueVcsBranchSearchRequest> = v.looseObject({
  branchName: v.string(),
})

export const IssueVcsBranchSearchResponse: v.GenericSchema<unknown, T.IssueVcsBranchSearchResponse> = v.nullable(
  v.lazy(() => Issue),
)

export const JiraProjectRequest: v.GenericSchema<unknown, T.JiraProjectRequest> = v.looseObject({
  id: v.string(),
})

export const JiraProjectBatchMigrateRequest: v.GenericSchema<unknown, T.JiraProjectBatchMigrateRequest> = v.looseObject(
  {
    input: v.lazy(() => JiraProjectBatchMigrateInput),
  },
)

export const JiraProjectsRequest: v.GenericSchema<unknown, T.JiraProjectsRequest> = v.looseObject({
  filter: v.optional(v.nullable(v.lazy(() => JiraProjectFilter))),
  before: v.optional(v.nullable(v.string())),
  after: v.optional(v.nullable(v.string())),
  first: v.optional(v.nullable(integer())),
  last: v.optional(v.nullable(integer())),
  includeArchived: v.optional(v.nullable(v.boolean())),
  orderBy: v.optional(v.nullable(v.lazy(() => PaginationOrderBy))),
})

export const LatestReleaseByAccessKeyResponse: v.GenericSchema<unknown, T.LatestReleaseByAccessKeyResponse> =
  v.nullable(v.lazy(() => AccessKeyRelease))

export const LogoutRequest: v.GenericSchema<unknown, T.LogoutRequest> = v.looseObject({
  reason: v.optional(v.nullable(v.string())),
})

export const LogoutAllSessionsRequest: v.GenericSchema<unknown, T.LogoutAllSessionsRequest> = v.looseObject({
  reason: v.optional(v.nullable(v.string())),
})

export const LogoutOtherSessionsRequest: v.GenericSchema<unknown, T.LogoutOtherSessionsRequest> = v.looseObject({
  reason: v.optional(v.nullable(v.string())),
})

export const LogoutSessionRequest: v.GenericSchema<unknown, T.LogoutSessionRequest> = v.looseObject({
  sessionId: v.string(),
})

export const NotificationRequest: v.GenericSchema<unknown, T.NotificationRequest> = v.looseObject({
  id: v.string(),
})

export const NotificationArchiveRequest: v.GenericSchema<unknown, T.NotificationArchiveRequest> = v.looseObject({
  id: v.string(),
})

export const NotificationArchiveAllRequest: v.GenericSchema<unknown, T.NotificationArchiveAllRequest> = v.looseObject({
  input: v.lazy(() => NotificationEntityInput),
})

export const NotificationCategoryChannelSubscriptionUpdateRequest: v.GenericSchema<
  unknown,
  T.NotificationCategoryChannelSubscriptionUpdateRequest
> = v.looseObject({
  channel: v.lazy(() => NotificationChannel),
  category: v.lazy(() => NotificationCategory),
  subscribe: v.boolean(),
})

export const NotificationMarkReadAllRequest: v.GenericSchema<unknown, T.NotificationMarkReadAllRequest> = v.looseObject(
  {
    readAt: v.string(),
    input: v.lazy(() => NotificationEntityInput),
  },
)

export const NotificationMarkUnreadAllRequest: v.GenericSchema<unknown, T.NotificationMarkUnreadAllRequest> =
  v.looseObject({
    input: v.lazy(() => NotificationEntityInput),
  })

export const NotificationsRequest: v.GenericSchema<unknown, T.NotificationsRequest> = v.looseObject({
  filter: v.optional(v.nullable(v.lazy(() => NotificationFilter))),
  before: v.optional(v.nullable(v.string())),
  after: v.optional(v.nullable(v.string())),
  first: v.optional(v.nullable(integer())),
  last: v.optional(v.nullable(integer())),
  includeArchived: v.optional(v.nullable(v.boolean())),
  orderBy: v.optional(v.nullable(v.lazy(() => PaginationOrderBy))),
})

export const NotificationSnoozeAllRequest: v.GenericSchema<unknown, T.NotificationSnoozeAllRequest> = v.looseObject({
  snoozedUntilAt: v.string(),
  input: v.lazy(() => NotificationEntityInput),
})

export const NotificationSubscriptionRequest: v.GenericSchema<unknown, T.NotificationSubscriptionRequest> =
  v.looseObject({
    id: v.string(),
  })

export const NotificationSubscriptionCreateRequest: v.GenericSchema<unknown, T.NotificationSubscriptionCreateRequest> =
  v.looseObject({
    input: v.lazy(() => NotificationSubscriptionCreateInput),
  })

export const NotificationSubscriptionDeleteRequest: v.GenericSchema<unknown, T.NotificationSubscriptionDeleteRequest> =
  v.looseObject({
    id: v.string(),
  })

export const NotificationSubscriptionsRequest: v.GenericSchema<unknown, T.NotificationSubscriptionsRequest> =
  v.looseObject({
    before: v.optional(v.nullable(v.string())),
    after: v.optional(v.nullable(v.string())),
    first: v.optional(v.nullable(integer())),
    last: v.optional(v.nullable(integer())),
    includeArchived: v.optional(v.nullable(v.boolean())),
    orderBy: v.optional(v.nullable(v.lazy(() => PaginationOrderBy))),
  })

export const NotificationSubscriptionUpdateRequest: v.GenericSchema<unknown, T.NotificationSubscriptionUpdateRequest> =
  v.looseObject({
    input: v.lazy(() => NotificationSubscriptionUpdateInput),
    id: v.string(),
  })

export const NotificationUnarchiveRequest: v.GenericSchema<unknown, T.NotificationUnarchiveRequest> = v.looseObject({
  id: v.string(),
})

export const NotificationUnsnoozeAllRequest: v.GenericSchema<unknown, T.NotificationUnsnoozeAllRequest> = v.looseObject(
  {
    unsnoozedAt: v.string(),
    input: v.lazy(() => NotificationEntityInput),
  },
)

export const NotificationUpdateRequest: v.GenericSchema<unknown, T.NotificationUpdateRequest> = v.looseObject({
  input: v.lazy(() => NotificationUpdateInput),
  id: v.string(),
})

export const OauthApplicationRequest: v.GenericSchema<unknown, T.OauthApplicationRequest> = v.looseObject({
  id: v.string(),
})

export const OauthApplicationArchiveRequest: v.GenericSchema<unknown, T.OauthApplicationArchiveRequest> = v.looseObject(
  {
    id: v.string(),
  },
)

export const OauthApplicationCreateRequest: v.GenericSchema<unknown, T.OauthApplicationCreateRequest> = v.looseObject({
  input: v.lazy(() => OAuthApplicationCreateInput),
})

export const OauthApplicationRotateSecretRequest: v.GenericSchema<unknown, T.OauthApplicationRotateSecretRequest> =
  v.looseObject({
    id: v.string(),
  })

export const OauthApplicationRotateWebhookSecretRequest: v.GenericSchema<
  unknown,
  T.OauthApplicationRotateWebhookSecretRequest
> = v.looseObject({
  id: v.string(),
})

export const OauthApplicationsResponse: v.GenericSchema<unknown, T.OauthApplicationsResponse> = v.array(
  v.lazy(() => OAuthApplication),
)

export const OauthApplicationUpdateRequest: v.GenericSchema<unknown, T.OauthApplicationUpdateRequest> = v.looseObject({
  input: v.lazy(() => OAuthApplicationUpdateInput),
  id: v.string(),
})

export const OrganizationDeleteRequest: v.GenericSchema<unknown, T.OrganizationDeleteRequest> = v.looseObject({
  input: v.lazy(() => DeleteOrganizationInput),
})

export const OrganizationDomainDeleteRequest: v.GenericSchema<unknown, T.OrganizationDomainDeleteRequest> =
  v.looseObject({
    id: v.string(),
  })

export const OrganizationExistsRequest: v.GenericSchema<unknown, T.OrganizationExistsRequest> = v.looseObject({
  urlKey: v.string(),
})

export const OrganizationInviteRequest: v.GenericSchema<unknown, T.OrganizationInviteRequest> = v.looseObject({
  id: v.string(),
})

export const OrganizationInviteCreateRequest: v.GenericSchema<unknown, T.OrganizationInviteCreateRequest> =
  v.looseObject({
    input: v.lazy(() => OrganizationInviteCreateInput),
  })

export const OrganizationInviteDeleteRequest: v.GenericSchema<unknown, T.OrganizationInviteDeleteRequest> =
  v.looseObject({
    id: v.string(),
  })

export const OrganizationInviteDetailsRequest: v.GenericSchema<unknown, T.OrganizationInviteDetailsRequest> =
  v.looseObject({
    id: v.string(),
  })

export const OrganizationInvitesRequest: v.GenericSchema<unknown, T.OrganizationInvitesRequest> = v.looseObject({
  before: v.optional(v.nullable(v.string())),
  after: v.optional(v.nullable(v.string())),
  first: v.optional(v.nullable(integer())),
  last: v.optional(v.nullable(integer())),
  includeArchived: v.optional(v.nullable(v.boolean())),
  orderBy: v.optional(v.nullable(v.lazy(() => PaginationOrderBy))),
})

export const OrganizationInviteUpdateRequest: v.GenericSchema<unknown, T.OrganizationInviteUpdateRequest> =
  v.looseObject({
    input: v.lazy(() => OrganizationInviteUpdateInput),
    id: v.string(),
  })

export const OrganizationStartTrialForPlanRequest: v.GenericSchema<unknown, T.OrganizationStartTrialForPlanRequest> =
  v.looseObject({
    input: v.lazy(() => OrganizationStartTrialInput),
  })

export const OrganizationUpdateRequest: v.GenericSchema<unknown, T.OrganizationUpdateRequest> = v.looseObject({
  input: v.lazy(() => OrganizationUpdateInput),
})

export const ProjectRequest: v.GenericSchema<unknown, T.ProjectRequest> = v.looseObject({
  id: v.string(),
})

export const ProjectAddLabelRequest: v.GenericSchema<unknown, T.ProjectAddLabelRequest> = v.looseObject({
  labelId: v.string(),
  id: v.string(),
})

export const ProjectArchiveRequest: v.GenericSchema<unknown, T.ProjectArchiveRequest> = v.looseObject({
  trash: v.optional(v.nullable(v.boolean())),
  id: v.string(),
})

export const ProjectCreateRequest: v.GenericSchema<unknown, T.ProjectCreateRequest> = v.looseObject({
  aiConversationId: v.optional(v.nullable(v.string())),
  projectDraftId: v.optional(v.nullable(v.string())),
  slackChannelName: v.optional(v.nullable(v.string())),
  input: v.lazy(() => ProjectCreateInput),
})

export const ProjectDeleteRequest: v.GenericSchema<unknown, T.ProjectDeleteRequest> = v.looseObject({
  id: v.string(),
})

export const ProjectExternalSyncDisableRequest: v.GenericSchema<unknown, T.ProjectExternalSyncDisableRequest> =
  v.looseObject({
    syncSource: v.lazy(() => ExternalSyncService),
    projectId: v.string(),
  })

export const ProjectFilterSuggestionRequest: v.GenericSchema<unknown, T.ProjectFilterSuggestionRequest> = v.looseObject(
  {
    teamId: v.optional(v.nullable(v.string())),
    prompt: v.string(),
  },
)

export const ProjectLabelRequest: v.GenericSchema<unknown, T.ProjectLabelRequest> = v.looseObject({
  id: v.string(),
})

export const ProjectLabelCreateRequest: v.GenericSchema<unknown, T.ProjectLabelCreateRequest> = v.looseObject({
  replaceTeamLabels: v.optional(v.nullable(v.boolean())),
  input: v.lazy(() => ProjectLabelCreateInput),
})

export const ProjectLabelDeleteRequest: v.GenericSchema<unknown, T.ProjectLabelDeleteRequest> = v.looseObject({
  id: v.string(),
})

export const ProjectLabelRestoreRequest: v.GenericSchema<unknown, T.ProjectLabelRestoreRequest> = v.looseObject({
  id: v.string(),
})

export const ProjectLabelRetireRequest: v.GenericSchema<unknown, T.ProjectLabelRetireRequest> = v.looseObject({
  id: v.string(),
})

export const ProjectLabelsRequest: v.GenericSchema<unknown, T.ProjectLabelsRequest> = v.looseObject({
  filter: v.optional(v.nullable(v.lazy(() => ProjectLabelFilter))),
  before: v.optional(v.nullable(v.string())),
  after: v.optional(v.nullable(v.string())),
  first: v.optional(v.nullable(integer())),
  last: v.optional(v.nullable(integer())),
  includeArchived: v.optional(v.nullable(v.boolean())),
  orderBy: v.optional(v.nullable(v.lazy(() => PaginationOrderBy))),
})

export const ProjectLabelUpdateRequest: v.GenericSchema<unknown, T.ProjectLabelUpdateRequest> = v.looseObject({
  replaceTeamLabels: v.optional(v.nullable(v.boolean())),
  input: v.lazy(() => ProjectLabelUpdateInput),
  id: v.string(),
})

export const ProjectMilestoneRequest: v.GenericSchema<unknown, T.ProjectMilestoneRequest> = v.looseObject({
  id: v.string(),
})

export const ProjectMilestoneCreateRequest: v.GenericSchema<unknown, T.ProjectMilestoneCreateRequest> = v.looseObject({
  input: v.lazy(() => ProjectMilestoneCreateInput),
})

export const ProjectMilestoneDeleteRequest: v.GenericSchema<unknown, T.ProjectMilestoneDeleteRequest> = v.looseObject({
  id: v.string(),
})

export const ProjectMilestoneMoveRequest: v.GenericSchema<unknown, T.ProjectMilestoneMoveRequest> = v.looseObject({
  input: v.lazy(() => ProjectMilestoneMoveInput),
  id: v.string(),
})

export const ProjectMilestonesRequest: v.GenericSchema<unknown, T.ProjectMilestonesRequest> = v.looseObject({
  filter: v.optional(v.nullable(v.lazy(() => ProjectMilestoneFilter))),
  before: v.optional(v.nullable(v.string())),
  after: v.optional(v.nullable(v.string())),
  first: v.optional(v.nullable(integer())),
  last: v.optional(v.nullable(integer())),
  includeArchived: v.optional(v.nullable(v.boolean())),
  orderBy: v.optional(v.nullable(v.lazy(() => PaginationOrderBy))),
})

export const ProjectMilestoneUpdateRequest: v.GenericSchema<unknown, T.ProjectMilestoneUpdateRequest> = v.looseObject({
  input: v.lazy(() => ProjectMilestoneUpdateInput),
  id: v.string(),
})

export const ProjectRelationRequest: v.GenericSchema<unknown, T.ProjectRelationRequest> = v.looseObject({
  id: v.string(),
})

export const ProjectRelationCreateRequest: v.GenericSchema<unknown, T.ProjectRelationCreateRequest> = v.looseObject({
  input: v.lazy(() => ProjectRelationCreateInput),
})

export const ProjectRelationDeleteRequest: v.GenericSchema<unknown, T.ProjectRelationDeleteRequest> = v.looseObject({
  id: v.string(),
})

export const ProjectRelationsRequest: v.GenericSchema<unknown, T.ProjectRelationsRequest> = v.looseObject({
  before: v.optional(v.nullable(v.string())),
  after: v.optional(v.nullable(v.string())),
  first: v.optional(v.nullable(integer())),
  last: v.optional(v.nullable(integer())),
  includeArchived: v.optional(v.nullable(v.boolean())),
  orderBy: v.optional(v.nullable(v.lazy(() => PaginationOrderBy))),
})

export const ProjectRelationUpdateRequest: v.GenericSchema<unknown, T.ProjectRelationUpdateRequest> = v.looseObject({
  input: v.lazy(() => ProjectRelationUpdateInput),
  id: v.string(),
})

export const ProjectRemoveLabelRequest: v.GenericSchema<unknown, T.ProjectRemoveLabelRequest> = v.looseObject({
  labelId: v.string(),
  id: v.string(),
})

export const ProjectsRequest: v.GenericSchema<unknown, T.ProjectsRequest> = v.looseObject({
  filter: v.optional(v.nullable(v.lazy(() => ProjectFilter))),
  before: v.optional(v.nullable(v.string())),
  after: v.optional(v.nullable(v.string())),
  first: v.optional(v.nullable(integer())),
  last: v.optional(v.nullable(integer())),
  includeArchived: v.optional(v.nullable(v.boolean())),
  orderBy: v.optional(v.nullable(v.lazy(() => PaginationOrderBy))),
  sort: v.optional(v.nullable(v.array(v.lazy(() => ProjectSortInput)))),
})

export const ProjectStatusRequest: v.GenericSchema<unknown, T.ProjectStatusRequest> = v.looseObject({
  id: v.string(),
})

export const ProjectStatusArchiveRequest: v.GenericSchema<unknown, T.ProjectStatusArchiveRequest> = v.looseObject({
  id: v.string(),
})

export const ProjectStatusCreateRequest: v.GenericSchema<unknown, T.ProjectStatusCreateRequest> = v.looseObject({
  input: v.lazy(() => ProjectStatusCreateInput),
})

export const ProjectStatusesRequest: v.GenericSchema<unknown, T.ProjectStatusesRequest> = v.looseObject({
  before: v.optional(v.nullable(v.string())),
  after: v.optional(v.nullable(v.string())),
  first: v.optional(v.nullable(integer())),
  last: v.optional(v.nullable(integer())),
  includeArchived: v.optional(v.nullable(v.boolean())),
  orderBy: v.optional(v.nullable(v.lazy(() => PaginationOrderBy))),
})

export const ProjectStatusUnarchiveRequest: v.GenericSchema<unknown, T.ProjectStatusUnarchiveRequest> = v.looseObject({
  id: v.string(),
})

export const ProjectStatusUpdateRequest: v.GenericSchema<unknown, T.ProjectStatusUpdateRequest> = v.looseObject({
  input: v.lazy(() => ProjectStatusUpdateInput),
  id: v.string(),
})

export const ProjectUnarchiveRequest: v.GenericSchema<unknown, T.ProjectUnarchiveRequest> = v.looseObject({
  id: v.string(),
})

export const ProjectUpdateRequest: v.GenericSchema<unknown, T.ProjectUpdateRequest> = v.looseObject({
  input: v.lazy(() => ProjectUpdateInput),
  id: v.string(),
})

export const ProjectUpdateArchiveRequest: v.GenericSchema<unknown, T.ProjectUpdateArchiveRequest> = v.looseObject({
  id: v.string(),
})

export const ProjectUpdateCreateRequest: v.GenericSchema<unknown, T.ProjectUpdateCreateRequest> = v.looseObject({
  input: v.lazy(() => ProjectUpdateCreateInput),
})

export const ProjectUpdateDeleteRequest: v.GenericSchema<unknown, T.ProjectUpdateDeleteRequest> = v.looseObject({
  id: v.string(),
})

export const ProjectUpdatesRequest: v.GenericSchema<unknown, T.ProjectUpdatesRequest> = v.looseObject({
  filter: v.optional(v.nullable(v.lazy(() => ProjectUpdateFilter))),
  before: v.optional(v.nullable(v.string())),
  after: v.optional(v.nullable(v.string())),
  first: v.optional(v.nullable(integer())),
  last: v.optional(v.nullable(integer())),
  includeArchived: v.optional(v.nullable(v.boolean())),
  orderBy: v.optional(v.nullable(v.lazy(() => PaginationOrderBy))),
})

export const ProjectUpdateUnarchiveRequest: v.GenericSchema<unknown, T.ProjectUpdateUnarchiveRequest> = v.looseObject({
  id: v.string(),
})

export const ProjectUpdateUpdateRequest: v.GenericSchema<unknown, T.ProjectUpdateUpdateRequest> = v.looseObject({
  input: v.lazy(() => ProjectUpdateUpdateInput),
  id: v.string(),
})

export const PushSubscriptionCreateRequest: v.GenericSchema<unknown, T.PushSubscriptionCreateRequest> = v.looseObject({
  input: v.lazy(() => PushSubscriptionCreateInput),
})

export const PushSubscriptionDeleteRequest: v.GenericSchema<unknown, T.PushSubscriptionDeleteRequest> = v.looseObject({
  id: v.string(),
})

export const PushSubscriptionTestRequest: v.GenericSchema<unknown, T.PushSubscriptionTestRequest> = v.looseObject({
  targetMobile: v.optional(v.nullable(v.boolean())),
  sendStrategy: v.optional(v.nullable(v.lazy(() => SendStrategy))),
})

export const QuotasRequest: v.GenericSchema<unknown, T.QuotasRequest> = v.looseObject({
  filter: v.optional(v.nullable(v.lazy(() => OrganizationQuotaFilter))),
  before: v.optional(v.nullable(v.string())),
  after: v.optional(v.nullable(v.string())),
  first: v.optional(v.nullable(integer())),
  last: v.optional(v.nullable(integer())),
})

export const ReactionCreateRequest: v.GenericSchema<unknown, T.ReactionCreateRequest> = v.looseObject({
  input: v.lazy(() => ReactionCreateInput),
})

export const ReactionDeleteRequest: v.GenericSchema<unknown, T.ReactionDeleteRequest> = v.looseObject({
  id: v.string(),
})

export const RecentReleasesByAccessKeyRequest: v.GenericSchema<unknown, T.RecentReleasesByAccessKeyRequest> =
  v.looseObject({
    after: v.optional(v.nullable(v.string())),
    includeArchived: v.optional(v.nullable(v.boolean())),
    limit: v.optional(v.nullable(integer())),
  })

export const RecentReleasesByAccessKeyResponse: v.GenericSchema<unknown, T.RecentReleasesByAccessKeyResponse> = v.array(
  v.lazy(() => AccessKeyRelease),
)

export const RefreshGoogleSheetsDataRequest: v.GenericSchema<unknown, T.RefreshGoogleSheetsDataRequest> = v.looseObject(
  {
    type: v.optional(v.nullable(v.string())),
    id: v.string(),
  },
)

export const ReleaseRequest: v.GenericSchema<unknown, T.ReleaseRequest> = v.looseObject({
  id: v.string(),
})

export const ReleaseArchiveRequest: v.GenericSchema<unknown, T.ReleaseArchiveRequest> = v.looseObject({
  id: v.string(),
})

export const ReleaseCompleteRequest: v.GenericSchema<unknown, T.ReleaseCompleteRequest> = v.looseObject({
  input: v.lazy(() => ReleaseCompleteInput),
})

export const ReleaseCompleteByAccessKeyRequest: v.GenericSchema<unknown, T.ReleaseCompleteByAccessKeyRequest> =
  v.looseObject({
    input: v.lazy(() => ReleaseCompleteInputBase),
  })

export const ReleaseCreateRequest: v.GenericSchema<unknown, T.ReleaseCreateRequest> = v.looseObject({
  input: v.lazy(() => ReleaseCreateInput),
})

export const ReleaseDeleteRequest: v.GenericSchema<unknown, T.ReleaseDeleteRequest> = v.looseObject({
  id: v.string(),
})

export const ReleaseNoteRequest: v.GenericSchema<unknown, T.ReleaseNoteRequest> = v.looseObject({
  id: v.string(),
})

export const ReleaseNoteCreateRequest: v.GenericSchema<unknown, T.ReleaseNoteCreateRequest> = v.looseObject({
  input: v.lazy(() => ReleaseNoteCreateInput),
})

export const ReleaseNoteDeleteRequest: v.GenericSchema<unknown, T.ReleaseNoteDeleteRequest> = v.looseObject({
  id: v.string(),
})

export const ReleaseNotesRequest: v.GenericSchema<unknown, T.ReleaseNotesRequest> = v.looseObject({
  filter: v.optional(v.nullable(v.lazy(() => ReleaseNoteFilter))),
  before: v.optional(v.nullable(v.string())),
  after: v.optional(v.nullable(v.string())),
  first: v.optional(v.nullable(integer())),
  last: v.optional(v.nullable(integer())),
  includeArchived: v.optional(v.nullable(v.boolean())),
  orderBy: v.optional(v.nullable(v.lazy(() => PaginationOrderBy))),
})

export const ReleaseNoteUpdateRequest: v.GenericSchema<unknown, T.ReleaseNoteUpdateRequest> = v.looseObject({
  input: v.lazy(() => ReleaseNoteUpdateInput),
  id: v.string(),
})

export const ReleasePipelineRequest: v.GenericSchema<unknown, T.ReleasePipelineRequest> = v.looseObject({
  id: v.string(),
})

export const ReleasePipelineArchiveRequest: v.GenericSchema<unknown, T.ReleasePipelineArchiveRequest> = v.looseObject({
  id: v.string(),
})

export const ReleasePipelineCreateRequest: v.GenericSchema<unknown, T.ReleasePipelineCreateRequest> = v.looseObject({
  input: v.lazy(() => ReleasePipelineCreateInput),
})

export const ReleasePipelineDeleteRequest: v.GenericSchema<unknown, T.ReleasePipelineDeleteRequest> = v.looseObject({
  id: v.string(),
})

export const ReleasePipelinesRequest: v.GenericSchema<unknown, T.ReleasePipelinesRequest> = v.looseObject({
  filter: v.optional(v.nullable(v.lazy(() => ReleasePipelineFilter))),
  before: v.optional(v.nullable(v.string())),
  after: v.optional(v.nullable(v.string())),
  first: v.optional(v.nullable(integer())),
  last: v.optional(v.nullable(integer())),
  includeArchived: v.optional(v.nullable(v.boolean())),
  orderBy: v.optional(v.nullable(v.lazy(() => PaginationOrderBy))),
  sort: v.optional(v.nullable(v.array(v.lazy(() => ReleasePipelineSortInput)))),
})

export const ReleasePipelineUnarchiveRequest: v.GenericSchema<unknown, T.ReleasePipelineUnarchiveRequest> =
  v.looseObject({
    id: v.string(),
  })

export const ReleasePipelineUpdateRequest: v.GenericSchema<unknown, T.ReleasePipelineUpdateRequest> = v.looseObject({
  input: v.lazy(() => ReleasePipelineUpdateInput),
  id: v.string(),
})

export const ReleasesRequest: v.GenericSchema<unknown, T.ReleasesRequest> = v.looseObject({
  filter: v.optional(v.nullable(v.lazy(() => ReleaseFilter))),
  before: v.optional(v.nullable(v.string())),
  after: v.optional(v.nullable(v.string())),
  first: v.optional(v.nullable(integer())),
  last: v.optional(v.nullable(integer())),
  includeArchived: v.optional(v.nullable(v.boolean())),
  orderBy: v.optional(v.nullable(v.lazy(() => PaginationOrderBy))),
  sort: v.optional(v.nullable(v.array(v.lazy(() => ReleaseSortInput)))),
})

export const ReleaseSearchRequest: v.GenericSchema<unknown, T.ReleaseSearchRequest> = v.looseObject({
  filter: v.optional(v.nullable(v.lazy(() => ReleaseFilter))),
  first: v.optional(v.nullable(integer())),
  term: v.optional(v.nullable(v.string())),
})

export const ReleaseSearchResponse: v.GenericSchema<unknown, T.ReleaseSearchResponse> = v.array(v.lazy(() => Release))

export const ReleaseStageRequest: v.GenericSchema<unknown, T.ReleaseStageRequest> = v.looseObject({
  id: v.string(),
})

export const ReleaseStageArchiveRequest: v.GenericSchema<unknown, T.ReleaseStageArchiveRequest> = v.looseObject({
  id: v.string(),
})

export const ReleaseStageCreateRequest: v.GenericSchema<unknown, T.ReleaseStageCreateRequest> = v.looseObject({
  input: v.lazy(() => ReleaseStageCreateInput),
})

export const ReleaseStagesRequest: v.GenericSchema<unknown, T.ReleaseStagesRequest> = v.looseObject({
  filter: v.optional(v.nullable(v.lazy(() => ReleaseStageFilter))),
  before: v.optional(v.nullable(v.string())),
  after: v.optional(v.nullable(v.string())),
  first: v.optional(v.nullable(integer())),
  last: v.optional(v.nullable(integer())),
  includeArchived: v.optional(v.nullable(v.boolean())),
  orderBy: v.optional(v.nullable(v.lazy(() => PaginationOrderBy))),
})

export const ReleaseStageUnarchiveRequest: v.GenericSchema<unknown, T.ReleaseStageUnarchiveRequest> = v.looseObject({
  id: v.string(),
})

export const ReleaseStageUpdateRequest: v.GenericSchema<unknown, T.ReleaseStageUpdateRequest> = v.looseObject({
  input: v.lazy(() => ReleaseStageUpdateInput),
  id: v.string(),
})

export const ReleaseSyncRequest: v.GenericSchema<unknown, T.ReleaseSyncRequest> = v.looseObject({
  input: v.lazy(() => ReleaseSyncInput),
})

export const ReleaseSyncByAccessKeyRequest: v.GenericSchema<unknown, T.ReleaseSyncByAccessKeyRequest> = v.looseObject({
  input: v.lazy(() => ReleaseSyncInputBase),
})

export const ReleaseUnarchiveRequest: v.GenericSchema<unknown, T.ReleaseUnarchiveRequest> = v.looseObject({
  id: v.string(),
})

export const ReleaseUpdateRequest: v.GenericSchema<unknown, T.ReleaseUpdateRequest> = v.looseObject({
  input: v.lazy(() => ReleaseUpdateInput),
  id: v.string(),
})

export const ReleaseUpdateByPipelineRequest: v.GenericSchema<unknown, T.ReleaseUpdateByPipelineRequest> = v.looseObject(
  {
    input: v.lazy(() => ReleaseUpdateByPipelineInput),
  },
)

export const ReleaseUpdateByPipelineByAccessKeyRequest: v.GenericSchema<
  unknown,
  T.ReleaseUpdateByPipelineByAccessKeyRequest
> = v.looseObject({
  input: v.lazy(() => ReleaseUpdateByPipelineInputBase),
})

export const ResendOrganizationInviteRequest: v.GenericSchema<unknown, T.ResendOrganizationInviteRequest> =
  v.looseObject({
    id: v.string(),
  })

export const ResendOrganizationInviteByEmailRequest: v.GenericSchema<
  unknown,
  T.ResendOrganizationInviteByEmailRequest
> = v.looseObject({
  email: v.string(),
})

export const RoadmapRequest: v.GenericSchema<unknown, T.RoadmapRequest> = v.looseObject({
  id: v.string(),
})

export const RoadmapArchiveRequest: v.GenericSchema<unknown, T.RoadmapArchiveRequest> = v.looseObject({
  id: v.string(),
})

export const RoadmapCreateRequest: v.GenericSchema<unknown, T.RoadmapCreateRequest> = v.looseObject({
  input: v.lazy(() => RoadmapCreateInput),
})

export const RoadmapDeleteRequest: v.GenericSchema<unknown, T.RoadmapDeleteRequest> = v.looseObject({
  id: v.string(),
})

export const RoadmapsRequest: v.GenericSchema<unknown, T.RoadmapsRequest> = v.looseObject({
  before: v.optional(v.nullable(v.string())),
  after: v.optional(v.nullable(v.string())),
  first: v.optional(v.nullable(integer())),
  last: v.optional(v.nullable(integer())),
  includeArchived: v.optional(v.nullable(v.boolean())),
  orderBy: v.optional(v.nullable(v.lazy(() => PaginationOrderBy))),
})

export const RoadmapToProjectRequest: v.GenericSchema<unknown, T.RoadmapToProjectRequest> = v.looseObject({
  id: v.string(),
})

export const RoadmapToProjectCreateRequest: v.GenericSchema<unknown, T.RoadmapToProjectCreateRequest> = v.looseObject({
  input: v.lazy(() => RoadmapToProjectCreateInput),
})

export const RoadmapToProjectDeleteRequest: v.GenericSchema<unknown, T.RoadmapToProjectDeleteRequest> = v.looseObject({
  id: v.string(),
})

export const RoadmapToProjectsRequest: v.GenericSchema<unknown, T.RoadmapToProjectsRequest> = v.looseObject({
  before: v.optional(v.nullable(v.string())),
  after: v.optional(v.nullable(v.string())),
  first: v.optional(v.nullable(integer())),
  last: v.optional(v.nullable(integer())),
  includeArchived: v.optional(v.nullable(v.boolean())),
  orderBy: v.optional(v.nullable(v.lazy(() => PaginationOrderBy))),
})

export const RoadmapToProjectUpdateRequest: v.GenericSchema<unknown, T.RoadmapToProjectUpdateRequest> = v.looseObject({
  input: v.lazy(() => RoadmapToProjectUpdateInput),
  id: v.string(),
})

export const RoadmapUnarchiveRequest: v.GenericSchema<unknown, T.RoadmapUnarchiveRequest> = v.looseObject({
  id: v.string(),
})

export const RoadmapUpdateRequest: v.GenericSchema<unknown, T.RoadmapUpdateRequest> = v.looseObject({
  input: v.lazy(() => RoadmapUpdateInput),
  id: v.string(),
})

export const SamlTokenUserAccountAuthRequest: v.GenericSchema<unknown, T.SamlTokenUserAccountAuthRequest> =
  v.looseObject({
    input: v.lazy(() => TokenUserAccountAuthInput),
  })

export const SearchDocumentsRequest: v.GenericSchema<unknown, T.SearchDocumentsRequest> = v.looseObject({
  filter: v.optional(v.nullable(v.lazy(() => DocumentFilter))),
  before: v.optional(v.nullable(v.string())),
  after: v.optional(v.nullable(v.string())),
  first: v.optional(v.nullable(integer())),
  last: v.optional(v.nullable(integer())),
  includeArchived: v.optional(v.nullable(v.boolean())),
  orderBy: v.optional(v.nullable(v.lazy(() => PaginationOrderBy))),
  term: v.string(),
  includeComments: v.optional(v.nullable(v.boolean())),
  teamId: v.optional(v.nullable(v.string())),
})

export const SearchIssuesRequest: v.GenericSchema<unknown, T.SearchIssuesRequest> = v.looseObject({
  filter: v.optional(v.nullable(v.lazy(() => IssueFilter))),
  before: v.optional(v.nullable(v.string())),
  after: v.optional(v.nullable(v.string())),
  first: v.optional(v.nullable(integer())),
  last: v.optional(v.nullable(integer())),
  includeArchived: v.optional(v.nullable(v.boolean())),
  orderBy: v.optional(v.nullable(v.lazy(() => PaginationOrderBy))),
  term: v.string(),
  includeComments: v.optional(v.nullable(v.boolean())),
  teamId: v.optional(v.nullable(v.string())),
})

export const SearchProjectsRequest: v.GenericSchema<unknown, T.SearchProjectsRequest> = v.looseObject({
  before: v.optional(v.nullable(v.string())),
  after: v.optional(v.nullable(v.string())),
  first: v.optional(v.nullable(integer())),
  last: v.optional(v.nullable(integer())),
  includeArchived: v.optional(v.nullable(v.boolean())),
  orderBy: v.optional(v.nullable(v.lazy(() => PaginationOrderBy))),
  term: v.string(),
  includeComments: v.optional(v.nullable(v.boolean())),
  teamId: v.optional(v.nullable(v.string())),
})

export const SemanticSearchRequest: v.GenericSchema<unknown, T.SemanticSearchRequest> = v.looseObject({
  query: v.string(),
  types: v.optional(v.nullable(v.array(v.lazy(() => SemanticSearchResultType)))),
  maxResults: v.optional(v.nullable(integer())),
  includeArchived: v.optional(v.nullable(v.boolean())),
  filters: v.optional(v.nullable(v.lazy(() => SemanticSearchFilters))),
})

export const SlaConfigurationsRequest: v.GenericSchema<unknown, T.SlaConfigurationsRequest> = v.looseObject({
  teamId: v.string(),
})

export const SlaConfigurationsResponse: v.GenericSchema<unknown, T.SlaConfigurationsResponse> = v.array(
  v.lazy(() => SlaConfiguration),
)

export const SsoUrlFromEmailRequest: v.GenericSchema<unknown, T.SsoUrlFromEmailRequest> = v.looseObject({
  isDesktop: v.optional(v.nullable(v.boolean())),
  type: v.optional(v.lazy(() => IdentityProviderType)),
  email: v.string(),
})

export const TeamRequest: v.GenericSchema<unknown, T.TeamRequest> = v.looseObject({
  id: v.string(),
})

export const TeamCreateRequest: v.GenericSchema<unknown, T.TeamCreateRequest> = v.looseObject({
  copySettingsFromTeamId: v.optional(v.nullable(v.string())),
  input: v.lazy(() => TeamCreateInput),
})

export const TeamCyclesDeleteRequest: v.GenericSchema<unknown, T.TeamCyclesDeleteRequest> = v.looseObject({
  id: v.string(),
})

export const TeamDeleteRequest: v.GenericSchema<unknown, T.TeamDeleteRequest> = v.looseObject({
  id: v.string(),
})

export const TeamKeyDeleteRequest: v.GenericSchema<unknown, T.TeamKeyDeleteRequest> = v.looseObject({
  id: v.string(),
})

export const TeamMembershipRequest: v.GenericSchema<unknown, T.TeamMembershipRequest> = v.looseObject({
  id: v.string(),
})

export const TeamMembershipCreateRequest: v.GenericSchema<unknown, T.TeamMembershipCreateRequest> = v.looseObject({
  input: v.lazy(() => TeamMembershipCreateInput),
})

export const TeamMembershipDeleteRequest: v.GenericSchema<unknown, T.TeamMembershipDeleteRequest> = v.looseObject({
  alsoLeaveParentTeams: v.optional(v.nullable(v.boolean())),
  id: v.string(),
})

export const TeamMembershipsRequest: v.GenericSchema<unknown, T.TeamMembershipsRequest> = v.looseObject({
  before: v.optional(v.nullable(v.string())),
  after: v.optional(v.nullable(v.string())),
  first: v.optional(v.nullable(integer())),
  last: v.optional(v.nullable(integer())),
  includeArchived: v.optional(v.nullable(v.boolean())),
  orderBy: v.optional(v.nullable(v.lazy(() => PaginationOrderBy))),
})

export const TeamMembershipUpdateRequest: v.GenericSchema<unknown, T.TeamMembershipUpdateRequest> = v.looseObject({
  input: v.lazy(() => TeamMembershipUpdateInput),
  id: v.string(),
})

export const TeamsRequest: v.GenericSchema<unknown, T.TeamsRequest> = v.looseObject({
  filter: v.optional(v.nullable(v.lazy(() => TeamFilter))),
  before: v.optional(v.nullable(v.string())),
  after: v.optional(v.nullable(v.string())),
  first: v.optional(v.nullable(integer())),
  last: v.optional(v.nullable(integer())),
  includeArchived: v.optional(v.nullable(v.boolean())),
  orderBy: v.optional(v.nullable(v.lazy(() => PaginationOrderBy))),
})

export const TeamUnarchiveRequest: v.GenericSchema<unknown, T.TeamUnarchiveRequest> = v.looseObject({
  id: v.string(),
})

export const TeamUpdateRequest: v.GenericSchema<unknown, T.TeamUpdateRequest> = v.looseObject({
  mapping: v.optional(v.nullable(v.lazy(() => InheritanceEntityMapping))),
  input: v.lazy(() => TeamUpdateInput),
  id: v.string(),
})

export const TemplateRequest: v.GenericSchema<unknown, T.TemplateRequest> = v.looseObject({
  id: v.string(),
})

export const TemplateCreateRequest: v.GenericSchema<unknown, T.TemplateCreateRequest> = v.looseObject({
  input: v.lazy(() => TemplateCreateInput),
})

export const TemplateDeleteRequest: v.GenericSchema<unknown, T.TemplateDeleteRequest> = v.looseObject({
  id: v.string(),
})

export const TemplatesResponse: v.GenericSchema<unknown, T.TemplatesResponse> = v.array(v.lazy(() => Template))

export const TemplateSearchRequest: v.GenericSchema<unknown, T.TemplateSearchRequest> = v.looseObject({
  includeArchived: v.optional(v.nullable(v.boolean())),
  first: v.optional(v.nullable(integer())),
  filter: v.optional(v.nullable(v.lazy(() => TemplateFilter))),
})

export const TemplateSearchResponse: v.GenericSchema<unknown, T.TemplateSearchResponse> = v.array(
  v.lazy(() => Template),
)

export const TemplatesForIntegrationRequest: v.GenericSchema<unknown, T.TemplatesForIntegrationRequest> = v.looseObject(
  {
    integrationType: v.string(),
  },
)

export const TemplatesForIntegrationResponse: v.GenericSchema<unknown, T.TemplatesForIntegrationResponse> = v.array(
  v.lazy(() => Template),
)

export const TemplateUpdateRequest: v.GenericSchema<unknown, T.TemplateUpdateRequest> = v.looseObject({
  input: v.lazy(() => TemplateUpdateInput),
  id: v.string(),
})

export const TimeScheduleRequest: v.GenericSchema<unknown, T.TimeScheduleRequest> = v.looseObject({
  id: v.string(),
})

export const TimeScheduleCreateRequest: v.GenericSchema<unknown, T.TimeScheduleCreateRequest> = v.looseObject({
  input: v.lazy(() => TimeScheduleCreateInput),
})

export const TimeScheduleDeleteRequest: v.GenericSchema<unknown, T.TimeScheduleDeleteRequest> = v.looseObject({
  id: v.string(),
})

export const TimeScheduleRefreshIntegrationScheduleRequest: v.GenericSchema<
  unknown,
  T.TimeScheduleRefreshIntegrationScheduleRequest
> = v.looseObject({
  id: v.string(),
})

export const TimeSchedulesRequest: v.GenericSchema<unknown, T.TimeSchedulesRequest> = v.looseObject({
  before: v.optional(v.nullable(v.string())),
  after: v.optional(v.nullable(v.string())),
  first: v.optional(v.nullable(integer())),
  last: v.optional(v.nullable(integer())),
  includeArchived: v.optional(v.nullable(v.boolean())),
  orderBy: v.optional(v.nullable(v.lazy(() => PaginationOrderBy))),
})

export const TimeScheduleUpdateRequest: v.GenericSchema<unknown, T.TimeScheduleUpdateRequest> = v.looseObject({
  input: v.lazy(() => TimeScheduleUpdateInput),
  id: v.string(),
})

export const TimeScheduleUpsertExternalRequest: v.GenericSchema<unknown, T.TimeScheduleUpsertExternalRequest> =
  v.looseObject({
    input: v.lazy(() => TimeScheduleUpdateInput),
    externalId: v.string(),
  })

export const TrackAnonymousEventRequest: v.GenericSchema<unknown, T.TrackAnonymousEventRequest> = v.looseObject({
  input: v.lazy(() => EventTrackingInput),
})

export const TriageResponsibilitiesRequest: v.GenericSchema<unknown, T.TriageResponsibilitiesRequest> = v.looseObject({
  before: v.optional(v.nullable(v.string())),
  after: v.optional(v.nullable(v.string())),
  first: v.optional(v.nullable(integer())),
  last: v.optional(v.nullable(integer())),
  includeArchived: v.optional(v.nullable(v.boolean())),
  orderBy: v.optional(v.nullable(v.lazy(() => PaginationOrderBy))),
})

export const TriageResponsibilityRequest: v.GenericSchema<unknown, T.TriageResponsibilityRequest> = v.looseObject({
  id: v.string(),
})

export const TriageResponsibilityCreateRequest: v.GenericSchema<unknown, T.TriageResponsibilityCreateRequest> =
  v.looseObject({
    input: v.lazy(() => TriageResponsibilityCreateInput),
  })

export const TriageResponsibilityDeleteRequest: v.GenericSchema<unknown, T.TriageResponsibilityDeleteRequest> =
  v.looseObject({
    id: v.string(),
  })

export const TriageResponsibilityUpdateRequest: v.GenericSchema<unknown, T.TriageResponsibilityUpdateRequest> =
  v.looseObject({
    input: v.lazy(() => TriageResponsibilityUpdateInput),
    id: v.string(),
  })

export const UsageAlertRequest: v.GenericSchema<unknown, T.UsageAlertRequest> = v.looseObject({
  id: v.string(),
})

export const UsageAlertsRequest: v.GenericSchema<unknown, T.UsageAlertsRequest> = v.looseObject({
  filter: v.optional(v.nullable(v.lazy(() => UsageAlertFilter))),
  before: v.optional(v.nullable(v.string())),
  after: v.optional(v.nullable(v.string())),
  first: v.optional(v.nullable(integer())),
  last: v.optional(v.nullable(integer())),
  includeArchived: v.optional(v.nullable(v.boolean())),
  orderBy: v.optional(v.nullable(v.lazy(() => PaginationOrderBy))),
})

export const UserRequest: v.GenericSchema<unknown, T.UserRequest> = v.looseObject({
  id: v.string(),
})

export const UserChangeRoleRequest: v.GenericSchema<unknown, T.UserChangeRoleRequest> = v.looseObject({
  role: v.lazy(() => UserRoleType),
  id: v.string(),
})

export const UserDiscordConnectRequest: v.GenericSchema<unknown, T.UserDiscordConnectRequest> = v.looseObject({
  redirectUri: v.string(),
  code: v.string(),
})

export const UserExternalUserDisconnectRequest: v.GenericSchema<unknown, T.UserExternalUserDisconnectRequest> =
  v.looseObject({
    workspaceIntegrationId: v.optional(v.nullable(v.string())),
    service: v.string(),
  })

export const UserFlagUpdateRequest: v.GenericSchema<unknown, T.UserFlagUpdateRequest> = v.looseObject({
  operation: v.lazy(() => UserFlagUpdateOperation),
  flag: v.lazy(() => UserFlagType),
})

export const UserRevokeAllSessionsRequest: v.GenericSchema<unknown, T.UserRevokeAllSessionsRequest> = v.looseObject({
  id: v.string(),
})

export const UserRevokeSessionRequest: v.GenericSchema<unknown, T.UserRevokeSessionRequest> = v.looseObject({
  sessionId: v.string(),
  id: v.string(),
})

export const UsersRequest: v.GenericSchema<unknown, T.UsersRequest> = v.looseObject({
  filter: v.optional(v.nullable(v.lazy(() => UserFilter))),
  includeDisabled: v.optional(v.nullable(v.boolean())),
  before: v.optional(v.nullable(v.string())),
  after: v.optional(v.nullable(v.string())),
  first: v.optional(v.nullable(integer())),
  last: v.optional(v.nullable(integer())),
  includeArchived: v.optional(v.nullable(v.boolean())),
  orderBy: v.optional(v.nullable(v.lazy(() => PaginationOrderBy))),
  sort: v.optional(v.nullable(v.array(v.lazy(() => UserSortInput)))),
})

export const UserSessionsRequest: v.GenericSchema<unknown, T.UserSessionsRequest> = v.looseObject({
  id: v.string(),
})

export const UserSessionsResponse: v.GenericSchema<unknown, T.UserSessionsResponse> = v.array(
  v.lazy(() => AuthenticationSessionResponse),
)

export const UserSettingsFlagsResetRequest: v.GenericSchema<unknown, T.UserSettingsFlagsResetRequest> = v.looseObject({
  flags: v.optional(v.nullable(v.array(v.lazy(() => UserFlagType)))),
})

export const UserSettingsUpdateRequest: v.GenericSchema<unknown, T.UserSettingsUpdateRequest> = v.looseObject({
  input: v.lazy(() => UserSettingsUpdateInput),
  id: v.string(),
})

export const UserSuspendRequest: v.GenericSchema<unknown, T.UserSuspendRequest> = v.looseObject({
  forceBypassScimRestrictions: v.optional(v.nullable(v.boolean())),
  id: v.string(),
})

export const UserUnlinkFromIdentityProviderRequest: v.GenericSchema<unknown, T.UserUnlinkFromIdentityProviderRequest> =
  v.looseObject({
    id: v.string(),
  })

export const UserUnsuspendRequest: v.GenericSchema<unknown, T.UserUnsuspendRequest> = v.looseObject({
  forceBypassScimRestrictions: v.optional(v.nullable(v.boolean())),
  id: v.string(),
})

export const UserUpdateRequest: v.GenericSchema<unknown, T.UserUpdateRequest> = v.looseObject({
  input: v.lazy(() => UserUpdateInput),
  id: v.string(),
})

export const UserViewPreferencesRequest: v.GenericSchema<unknown, T.UserViewPreferencesRequest> = v.looseObject({
  viewType: v.lazy(() => ViewType),
})

export const UserViewPreferencesResponse: v.GenericSchema<unknown, T.UserViewPreferencesResponse> = v.nullable(
  v.lazy(() => ViewPreferences),
)

export const VerifyGitHubEnterpriseServerInstallationRequest: v.GenericSchema<
  unknown,
  T.VerifyGitHubEnterpriseServerInstallationRequest
> = v.looseObject({
  integrationId: v.string(),
})

export const ViewPreferencesCreateRequest: v.GenericSchema<unknown, T.ViewPreferencesCreateRequest> = v.looseObject({
  input: v.lazy(() => ViewPreferencesCreateInput),
})

export const ViewPreferencesDeleteRequest: v.GenericSchema<unknown, T.ViewPreferencesDeleteRequest> = v.looseObject({
  id: v.string(),
})

export const ViewPreferencesUpdateRequest: v.GenericSchema<unknown, T.ViewPreferencesUpdateRequest> = v.looseObject({
  input: v.lazy(() => ViewPreferencesUpdateInput),
  id: v.string(),
})

export const WebhookRequest: v.GenericSchema<unknown, T.WebhookRequest> = v.looseObject({
  id: v.string(),
})

export const WebhookCreateRequest: v.GenericSchema<unknown, T.WebhookCreateRequest> = v.looseObject({
  input: v.lazy(() => WebhookCreateInput),
})

export const WebhookDeleteRequest: v.GenericSchema<unknown, T.WebhookDeleteRequest> = v.looseObject({
  id: v.string(),
})

export const WebhookRotateSecretRequest: v.GenericSchema<unknown, T.WebhookRotateSecretRequest> = v.looseObject({
  id: v.string(),
})

export const WebhooksRequest: v.GenericSchema<unknown, T.WebhooksRequest> = v.looseObject({
  before: v.optional(v.nullable(v.string())),
  after: v.optional(v.nullable(v.string())),
  first: v.optional(v.nullable(integer())),
  last: v.optional(v.nullable(integer())),
  includeArchived: v.optional(v.nullable(v.boolean())),
  orderBy: v.optional(v.nullable(v.lazy(() => PaginationOrderBy))),
})

export const WebhookUpdateRequest: v.GenericSchema<unknown, T.WebhookUpdateRequest> = v.looseObject({
  input: v.lazy(() => WebhookUpdateInput),
  id: v.string(),
})

export const WorkflowStateRequest: v.GenericSchema<unknown, T.WorkflowStateRequest> = v.looseObject({
  id: v.string(),
})

export const WorkflowStateArchiveRequest: v.GenericSchema<unknown, T.WorkflowStateArchiveRequest> = v.looseObject({
  id: v.string(),
})

export const WorkflowStateCreateRequest: v.GenericSchema<unknown, T.WorkflowStateCreateRequest> = v.looseObject({
  input: v.lazy(() => WorkflowStateCreateInput),
})

export const WorkflowStatesRequest: v.GenericSchema<unknown, T.WorkflowStatesRequest> = v.looseObject({
  filter: v.optional(v.nullable(v.lazy(() => WorkflowStateFilter))),
  before: v.optional(v.nullable(v.string())),
  after: v.optional(v.nullable(v.string())),
  first: v.optional(v.nullable(integer())),
  last: v.optional(v.nullable(integer())),
  includeArchived: v.optional(v.nullable(v.boolean())),
  orderBy: v.optional(v.nullable(v.lazy(() => PaginationOrderBy))),
})

export const WorkflowStateUpdateRequest: v.GenericSchema<unknown, T.WorkflowStateUpdateRequest> = v.looseObject({
  input: v.lazy(() => WorkflowStateUpdateInput),
  id: v.string(),
})

export const schemas = {
  AccessKey,
  AccessKeyRelease,
  AccessKeyReleasePayload,
  AccessKeyReleasePipeline,
  AccessKeyReleaseStage,
  ActivityCollectionFilter,
  ActivityFilter,
  ActorBot,
  AgentActivity,
  AgentActivityActionContent,
  AgentActivityConnection,
  AgentActivityContent,
  AgentActivityCreateInput,
  AgentActivityEdge,
  AgentActivityElicitationContent,
  AgentActivityErrorContent,
  AgentActivityFilter,
  AgentActivityPayload,
  AgentActivityPromptContent,
  AgentActivityResponseContent,
  AgentActivitySignal,
  AgentActivityThoughtContent,
  AgentActivityType,
  AgentSession,
  AgentSessionConnection,
  AgentSessionCreateOnComment,
  AgentSessionCreateOnIssue,
  AgentSessionEdge,
  AgentSessionExternalLink,
  AgentSessionExternalUrlInput,
  AgentSessionNotification,
  AgentSessionPayload,
  AgentSessionStatus,
  AgentSessionType,
  AgentSessionUpdateExternalUrlInput,
  AgentSessionUpdateInput,
  AgentSkill,
  AgentSkillConnection,
  AgentSkillCreateInput,
  AgentSkillEdge,
  AgentSkillFilter,
  AgentSkillPayload,
  AgentSkillUpdateInput,
  AiPromptRules,
  AirbyteConfigurationInput,
  Application,
  ApproximateNeedCountSort,
  ArchivedIntegrationPayload,
  ArchivePayload,
  ArchiveResponse,
  AsksChannelConnectPayload,
  AssigneeSort,
  Attachment,
  AttachmentCollectionFilter,
  AttachmentConnection,
  AttachmentCreateInput,
  AttachmentEdge,
  AttachmentFilter,
  AttachmentPayload,
  AttachmentSourcesPayload,
  AttachmentUpdateInput,
  AuditEntry,
  AuditEntryConnection,
  AuditEntryEdge,
  AuditEntryFilter,
  AuditEntryType,
  AuthenticationSessionResponse,
  AuthenticationSessionType,
  AuthOrganization,
  AuthResolverResponse,
  AuthUser,
  BooleanComparator,
  CandidateRepository,
  CodeRepository,
  CodingSessionsDisabledReason,
  Comment,
  CommentCollectionFilter,
  CommentConnection,
  CommentCreateInput,
  CommentEdge,
  CommentFilter,
  CommentPayload,
  CommentUpdateInput,
  CompletedAtSort,
  ContactCreateInput,
  ContactPayload,
  ContentComparator,
  ContextViewType,
  CreateCsvExportReportPayload,
  CreatedAtSort,
  Customer,
  CustomerConnection,
  CustomerCountSort,
  CustomerCreatedAtSort,
  CustomerCreateInput,
  CustomerEdge,
  CustomerFilter,
  CustomerImportantCountSort,
  CustomerNeed,
  CustomerNeedArchivePayload,
  CustomerNeedCollectionFilter,
  CustomerNeedConnection,
  CustomerNeedCreateFromAttachmentInput,
  CustomerNeedCreateInput,
  CustomerNeedEdge,
  CustomerNeedFilter,
  CustomerNeedNotification,
  CustomerNeedPayload,
  CustomerNeedUpdateInput,
  CustomerNeedUpdatePayload,
  CustomerNotification,
  CustomerNotificationSubscription,
  CustomerPayload,
  CustomerRevenueSort,
  CustomerSort,
  CustomerSortInput,
  CustomerStatus,
  CustomerStatusConnection,
  CustomerStatusCreateInput,
  CustomerStatusEdge,
  CustomerStatusFilter,
  CustomerStatusPayload,
  CustomerStatusSort,
  CustomerStatusType,
  CustomerStatusUpdateInput,
  CustomerTier,
  CustomerTierConnection,
  CustomerTierCreateInput,
  CustomerTierEdge,
  CustomerTierFilter,
  CustomerTierPayload,
  CustomerTierUpdateInput,
  CustomerUpdateInput,
  CustomerUpsertInput,
  CustomView,
  CustomViewConnection,
  CustomViewCreatedAtSort,
  CustomViewCreateInput,
  CustomViewEdge,
  CustomViewFilter,
  CustomViewHasSubscribersPayload,
  CustomViewNameSort,
  CustomViewNotificationSubscription,
  CustomViewPayload,
  CustomViewSharedSort,
  CustomViewSortInput,
  CustomViewUpdatedAtSort,
  CustomViewUpdateInput,
  Cycle,
  CycleArchivePayload,
  CycleConnection,
  CycleCreateInput,
  CycleEdge,
  CycleFilter,
  CycleNotificationSubscription,
  CyclePayload,
  CyclePeriod,
  CyclePeriodComparator,
  CycleShiftAllInput,
  CycleSort,
  CycleUpdateInput,
  DateComparator,
  DateResolutionType,
  Day,
  DelegateSort,
  DeleteOrganizationInput,
  DeletePayload,
  DependencyEcosystem,
  DependencyPackageInput,
  DependencyPackageMetadataResult,
  Document,
  DocumentArchivePayload,
  DocumentConnection,
  DocumentContent,
  DocumentContentHistory,
  DocumentContentHistoryPayload,
  DocumentContentHistoryType,
  DocumentContentRevision,
  DocumentCreatedAtSort,
  DocumentCreateInput,
  DocumentCreatorSort,
  DocumentEdge,
  DocumentFilter,
  DocumentNotification,
  DocumentPayload,
  DocumentProjectSort,
  DocumentSearchPayload,
  DocumentSearchResult,
  DocumentSearchResultEdge,
  DocumentShareRole,
  DocumentSortInput,
  DocumentTitleSort,
  DocumentUpdatedAtSort,
  DocumentUpdateInput,
  Draft,
  DraftConnection,
  DraftEdge,
  DraftGenerationMetadata,
  DraftUpdateHealthType,
  DueDateSort,
  EmailIntakeAddress,
  EmailIntakeAddressConnection,
  EmailIntakeAddressCreateInput,
  EmailIntakeAddressEdge,
  EmailIntakeAddressPayload,
  EmailIntakeAddressRefreshSesDomainStatusPayload,
  EmailIntakeAddressType,
  EmailIntakeAddressUpdateInput,
  EmailUnsubscribeInput,
  EmailUnsubscribePayload,
  EmailUserAccountAuthChallengeInput,
  EmailUserAccountAuthChallengeResponse,
  Emoji,
  EmojiConnection,
  EmojiCreatedAtSort,
  EmojiCreateInput,
  EmojiEdge,
  EmojiFilter,
  EmojiPayload,
  EmojiSortInput,
  Entity,
  EntityExternalLink,
  EntityExternalLinkConnection,
  EntityExternalLinkCreateInput,
  EntityExternalLinkEdge,
  EntityExternalLinkPayload,
  EntityExternalLinkUpdateInput,
  EntityIdentifierIDComparator,
  EstimateComparator,
  EstimateSort,
  EventTrackingInput,
  EventTrackingPayload,
  ExternalEntityInfo,
  ExternalEntityInfoGithubMetadata,
  ExternalEntityInfoJiraMetadata,
  ExternalEntityInfoMetadata,
  ExternalEntitySlackMetadata,
  ExternalSyncService,
  ExternalUser,
  ExternalUserConnection,
  ExternalUserEdge,
  Facet,
  FacetPageSource,
  Favorite,
  FavoriteConnection,
  FavoriteCreateInput,
  FavoriteEdge,
  FavoritePayload,
  FavoriteUpdateInput,
  FeedItemFilter,
  FeedSummarySchedule,
  FileUploadDeletePayload,
  FrequencyResolutionType,
  FrontAttachmentPayload,
  GitAutomationState,
  GitAutomationStateConnection,
  GitAutomationStateCreateInput,
  GitAutomationStateEdge,
  GitAutomationStatePayload,
  GitAutomationStates,
  GitAutomationStateUpdateInput,
  GitAutomationTargetBranch,
  GitAutomationTargetBranchCreateInput,
  GitAutomationTargetBranchPayload,
  GitAutomationTargetBranchUpdateInput,
  GitHubCommitIntegrationPayload,
  GitHubEnterpriseServerInstallVerificationPayload,
  GitHubEnterpriseServerPayload,
  GitHubIntegrationConnectDetails,
  GitHubRemoveCodeAccessAction,
  GithubTeam,
  GitLabIntegrationCreatePayload,
  GitLabTestConnectionPayload,
  GitLinkKind,
  GoogleUserAccountAuthInput,
  IDComparator,
  IdentityProvider,
  IdentityProviderType,
  ImageUploadFromUrlPayload,
  ImportUsersOption,
  InboxNotificationUpdateInput,
  InboxNotificationUpdatePayload,
  InheritanceEntityMapping,
  Initiative,
  InitiativeArchivePayload,
  InitiativeCollectionFilter,
  InitiativeConnection,
  InitiativeCreatedAtSort,
  InitiativeCreateInput,
  InitiativeEdge,
  InitiativeFilter,
  InitiativeFilterSuggestionPayload,
  InitiativeHealthSort,
  InitiativeHealthUpdatedAtSort,
  InitiativeHistory,
  InitiativeHistoryConnection,
  InitiativeHistoryEdge,
  InitiativeLabel,
  InitiativeLabelCollectionFilter,
  InitiativeLabelConnection,
  InitiativeLabelCreateInput,
  InitiativeLabelEdge,
  InitiativeLabelFilter,
  InitiativeLabelPayload,
  InitiativeLabelUpdateInput,
  InitiativeManualSort,
  InitiativeNameSort,
  InitiativeNotification,
  InitiativeNotificationSubscription,
  InitiativeOwnerSort,
  InitiativePayload,
  InitiativePrioritySort,
  InitiativeRelation,
  InitiativeRelationConnection,
  InitiativeRelationCreateInput,
  InitiativeRelationEdge,
  InitiativeRelationPayload,
  InitiativeRelationUpdateInput,
  InitiativeSortInput,
  InitiativeStatus,
  InitiativeTab,
  InitiativeTargetDateSort,
  InitiativeToProject,
  InitiativeToProjectConnection,
  InitiativeToProjectCreateInput,
  InitiativeToProjectEdge,
  InitiativeToProjectPayload,
  InitiativeToProjectUpdateInput,
  InitiativeUpdate,
  InitiativeUpdateArchivePayload,
  InitiativeUpdateConnection,
  InitiativeUpdateCreateInput,
  InitiativeUpdatedAtSort,
  InitiativeUpdateEdge,
  InitiativeUpdateFilter,
  InitiativeUpdateHealthType,
  InitiativeUpdateInput,
  InitiativeUpdatePayload,
  InitiativeUpdateReminderPayload,
  InitiativeUpdatesCollectionFilter,
  InitiativeUpdatesFilter,
  InitiativeUpdateUpdateInput,
  InitiativeVisibility,
  Integration,
  IntegrationConnection,
  IntegrationEdge,
  IntegrationGithubRemoveCodeAccessPayload,
  IntegrationHasScopesPayload,
  IntegrationPayload,
  IntegrationRequestInput,
  IntegrationRequestPayload,
  IntegrationService,
  IntegrationSlackWorkspaceNamePayload,
  IntegrationsSettings,
  IntegrationsSettingsCreateInput,
  IntegrationsSettingsPayload,
  IntegrationsSettingsUpdateInput,
  IntegrationTemplate,
  IntegrationTemplateConnection,
  IntegrationTemplateCreateInput,
  IntegrationTemplateEdge,
  IntegrationTemplatePayload,
  IntercomSettingsInput,
  Issue,
  IssueArchivePayload,
  IssueBatchCreateInput,
  IssueBatchPayload,
  IssueCollectionFilter,
  IssueConnection,
  IssueCreateInput,
  IssueEdge,
  IssueFilter,
  IssueFilterSuggestionPayload,
  IssueHistory,
  IssueHistoryConnection,
  IssueHistoryEdge,
  IssueIDComparator,
  IssueImport,
  IssueImportCheckPayload,
  IssueImportDeletePayload,
  IssueImportJqlCheckPayload,
  IssueImportPayload,
  IssueImportSyncCheckPayload,
  IssueImportUpdateInput,
  IssueLabel,
  IssueLabelCollectionFilter,
  IssueLabelConnection,
  IssueLabelCreateInput,
  IssueLabelEdge,
  IssueLabelFilter,
  IssueLabelPayload,
  IssueLabelUpdateInput,
  IssueNotification,
  IssuePayload,
  IssuePriorityValue,
  IssueReferenceInput,
  IssueRelation,
  IssueRelationConnection,
  IssueRelationCreateInput,
  IssueRelationEdge,
  IssueRelationHistoryPayload,
  IssueRelationPayload,
  IssueRelationType,
  IssueRelationUpdateInput,
  IssueSearchPayload,
  IssueSearchResult,
  IssueSearchResultEdge,
  IssueSharedAccess,
  IssueSharedAccessDisallowedField,
  IssueSharingPolicy,
  IssueSortInput,
  IssueStateSpan,
  IssueStateSpanConnection,
  IssueStateSpanEdge,
  IssueSubscriptionFilter,
  IssueSuggestionCollectionFilter,
  IssueSuggestionFilter,
  IssueTitleSuggestionFromCustomerRequestPayload,
  IssueToRelease,
  IssueToReleaseConnection,
  IssueToReleaseCreateInput,
  IssueToReleaseEdge,
  IssueToReleasePayload,
  IssueUpdateInput,
  JiraProject,
  JiraProjectBatchMigrateInput,
  JiraProjectBatchMigratePayload,
  JiraProjectBatchMigrateProjectInput,
  JiraProjectConnection,
  JiraProjectEdge,
  JiraProjectFilter,
  JiraProjectImportStatus,
  JiraProjectMigrateImportInput,
  JiraProjectMigrateSyncInput,
  JiraProjectMigrationError,
  JiraProjectMigrationErrorCode,
  JiraProjectMigrationResult,
  JiraProjectSyncStatus,
  JiraSyncDirection,
  LabelGroupSort,
  LabelGroupType,
  LabelNotificationSubscription,
  LabelSort,
  LinkCountSort,
  LogoutResponse,
  ManualSort,
  MilestoneSort,
  Mutation,
  NameSort,
  Node,
  Notification,
  NotificationArchivePayload,
  NotificationBatchActionPayload,
  NotificationCategory,
  NotificationCategoryPreferences,
  NotificationCategoryPreferencesInput,
  NotificationChannel,
  NotificationChannelPreferences,
  NotificationConnection,
  NotificationDeliveryPreferences,
  NotificationDeliveryPreferencesChannel,
  NotificationDeliveryPreferencesChannelInput,
  NotificationDeliveryPreferencesDay,
  NotificationDeliveryPreferencesDayInput,
  NotificationDeliveryPreferencesInput,
  NotificationDeliveryPreferencesSchedule,
  NotificationDeliveryPreferencesScheduleInput,
  NotificationEdge,
  NotificationEntityInput,
  NotificationFilter,
  NotificationPayload,
  NotificationSubscription,
  NotificationSubscriptionConnection,
  NotificationSubscriptionCreateInput,
  NotificationSubscriptionEdge,
  NotificationSubscriptionPayload,
  NotificationSubscriptionType,
  NotificationSubscriptionTypeComparator,
  NotificationSubscriptionUpdateInput,
  NotificationUpdateInput,
  NullableCommentFilter,
  NullableCustomerFilter,
  NullableCycleFilter,
  NullableDateComparator,
  NullableDocumentContentFilter,
  NullableDocumentFilter,
  NullableDurationComparator,
  NullableInitiativeFilter,
  NullableInitiativeUpdateFilter,
  NullableIssueFilter,
  NullableNumberComparator,
  NullableProjectFilter,
  NullableProjectMilestoneFilter,
  NullableProjectUpdateFilter,
  NullableStringComparator,
  NullableTeamFilter,
  NullableTemplateFilter,
  NullableTimelessDateComparator,
  NullableUserFilter,
  NumberComparator,
  OAuthApplication,
  OAuthApplicationArchivePayload,
  OAuthApplicationCodingSessionTrustedSource,
  OAuthApplicationCreateInput,
  OAuthApplicationCreatePayload,
  OAuthApplicationDistribution,
  OAuthApplicationGrantType,
  OAuthApplicationPayload,
  OAuthApplicationRotateSecretPayload,
  OAuthApplicationRotateWebhookSecretPayload,
  OAuthApplicationUpdateInput,
  OauthClientApproval,
  OauthClientApprovalNotification,
  OAuthClientApprovalStatus,
  Organization,
  OrganizationAcceptedOrExpiredInviteDetailsPayload,
  OrganizationAuthSettingsInput,
  OrganizationCancelDeletePayload,
  OrganizationDeletePayload,
  OrganizationDomain,
  OrganizationDomainAuthType,
  OrganizationExistsPayload,
  OrganizationInvite,
  OrganizationInviteConnection,
  OrganizationInviteCreateInput,
  OrganizationInviteDetailsPayload,
  OrganizationInviteEdge,
  OrganizationInviteFullDetailsPayload,
  OrganizationInvitePayload,
  OrganizationInviteStatus,
  OrganizationInviteUpdateInput,
  OrganizationPayload,
  OrganizationQuota,
  OrganizationQuotaConnection,
  OrganizationQuotaEdge,
  OrganizationQuotaFilter,
  OrganizationQuotaScope,
  OrganizationSecuritySettingsInput,
  OrganizationStartTrialInput,
  OrganizationStartTrialPayload,
  OrganizationUpdateInput,
  OwnerSort,
  PageInfo,
  PaginationNulls,
  PaginationOrderBy,
  PaginationSortOrder,
  PaidSubscription,
  PartialNotificationChannelPreferencesInput,
  PipelineTab,
  PostNotification,
  PrioritySort,
  ProductAnnouncement,
  ProductAnnouncementNotification,
  Project,
  ProjectArchivePayload,
  ProjectAttachment,
  ProjectAttachmentConnection,
  ProjectAttachmentEdge,
  ProjectCollectionFilter,
  ProjectConnection,
  ProjectCreatedAtSort,
  ProjectCreateInput,
  ProjectEdge,
  ProjectFilter,
  ProjectFilterSuggestionPayload,
  ProjectHealthSort,
  ProjectHistory,
  ProjectHistoryConnection,
  ProjectHistoryEdge,
  ProjectLabel,
  ProjectLabelCollectionFilter,
  ProjectLabelConnection,
  ProjectLabelCreateInput,
  ProjectLabelEdge,
  ProjectLabelFilter,
  ProjectLabelPayload,
  ProjectLabelUpdateInput,
  ProjectLeadSort,
  ProjectManualSort,
  ProjectMilestone,
  ProjectMilestoneCollectionFilter,
  ProjectMilestoneConnection,
  ProjectMilestoneCreateInput,
  ProjectMilestoneEdge,
  ProjectMilestoneFilter,
  ProjectMilestoneMoveInput,
  ProjectMilestoneMoveIssueToTeam,
  ProjectMilestoneMoveIssueToTeamInput,
  ProjectMilestoneMovePayload,
  ProjectMilestoneMoveProjectTeams,
  ProjectMilestoneMoveProjectTeamsInput,
  ProjectMilestonePayload,
  ProjectMilestoneStatus,
  ProjectMilestoneUpdateInput,
  ProjectNameSort,
  ProjectNotification,
  ProjectNotificationSubscription,
  ProjectPayload,
  ProjectPrioritySort,
  ProjectRelation,
  ProjectRelationConnection,
  ProjectRelationCreateInput,
  ProjectRelationEdge,
  ProjectRelationPayload,
  ProjectRelationUpdateInput,
  ProjectSearchPayload,
  ProjectSearchResult,
  ProjectSearchResultEdge,
  ProjectSort,
  ProjectSortInput,
  ProjectStatus,
  ProjectStatusArchivePayload,
  ProjectStatusConnection,
  ProjectStatusCreateInput,
  ProjectStatusEdge,
  ProjectStatusFilter,
  ProjectStatusPayload,
  ProjectStatusSort,
  ProjectStatusType,
  ProjectStatusUpdateInput,
  ProjectTab,
  ProjectUpdate,
  ProjectUpdateArchivePayload,
  ProjectUpdateConnection,
  ProjectUpdateCreateInput,
  ProjectUpdatedAtSort,
  ProjectUpdateEdge,
  ProjectUpdateFilter,
  ProjectUpdateHealthType,
  ProjectUpdateInput,
  ProjectUpdatePayload,
  ProjectUpdateReminderFrequency,
  ProjectUpdateReminderPayload,
  ProjectUpdatesCollectionFilter,
  ProjectUpdatesFilter,
  ProjectUpdateUpdateInput,
  PullRequestComment,
  PullRequestFileReview,
  PullRequestNotification,
  PullRequestPendingReview,
  PullRequestReferenceInput,
  PullRequestReviewerDecision,
  PullRequestUserState,
  PushSubscription,
  PushSubscriptionCreateInput,
  PushSubscriptionPayload,
  PushSubscriptionTestPayload,
  PushSubscriptionType,
  Query,
  RateLimitPayload,
  RateLimitResultPayload,
  Reaction,
  ReactionCollectionFilter,
  ReactionCreateInput,
  ReactionFilter,
  ReactionPayload,
  RelationExistsComparator,
  Release,
  ReleaseArchivePayload,
  ReleaseChannel,
  ReleaseCollectionFilter,
  ReleaseCompleteInput,
  ReleaseCompleteInputBase,
  ReleaseConnection,
  ReleaseCreateInput,
  ReleaseDebugSinkInput,
  ReleaseDocumentInput,
  ReleaseEdge,
  ReleaseFilter,
  ReleaseHistory,
  ReleaseHistoryConnection,
  ReleaseHistoryEdge,
  ReleaseLinkInput,
  ReleaseNote,
  ReleaseNoteConnection,
  ReleaseNoteCreateInput,
  ReleaseNoteEdge,
  ReleaseNoteFilter,
  ReleaseNoteGenerationStatus,
  ReleaseNoteInput,
  ReleaseNotePayload,
  ReleaseNoteUpdateInput,
  ReleasePayload,
  ReleasePipeline,
  ReleasePipelineArchivePayload,
  ReleasePipelineCollectionFilter,
  ReleasePipelineConnection,
  ReleasePipelineCreateInput,
  ReleasePipelineEdge,
  ReleasePipelineFilter,
  ReleasePipelineNameSort,
  ReleasePipelinePayload,
  ReleasePipelineSortInput,
  ReleasePipelineType,
  ReleasePipelineTypeComparator,
  ReleasePipelineUpdateInput,
  ReleaseSort,
  ReleaseSortInput,
  ReleaseStage,
  ReleaseStageArchivePayload,
  ReleaseStageConnection,
  ReleaseStageCreateInput,
  ReleaseStageEdge,
  ReleaseStageFilter,
  ReleaseStagePayload,
  ReleaseStageSort,
  ReleaseStageType,
  ReleaseStageTypeComparator,
  ReleaseStageUpdateInput,
  ReleaseSyncInput,
  ReleaseSyncInputBase,
  ReleaseUpdateByPipelineInput,
  ReleaseUpdateByPipelineInputBase,
  ReleaseUpdateInput,
  RepositoryDataInput,
  RepositorySuggestion,
  RepositorySuggestionsPayload,
  RevenueSort,
  Roadmap,
  RoadmapArchivePayload,
  RoadmapCollectionFilter,
  RoadmapConnection,
  RoadmapCreateInput,
  RoadmapEdge,
  RoadmapFilter,
  RoadmapPayload,
  RoadmapToProject,
  RoadmapToProjectConnection,
  RoadmapToProjectCreateInput,
  RoadmapToProjectEdge,
  RoadmapToProjectPayload,
  RoadmapToProjectUpdateInput,
  RoadmapUpdateInput,
  RootIssueSort,
  SemanticSearchFilters,
  SemanticSearchPayload,
  SemanticSearchResult,
  SemanticSearchResultType,
  SendStrategy,
  SesDomainIdentity,
  SesDomainIdentityDnsRecord,
  SizeSort,
  SlackAsksTeamSettings,
  SlackChannelConnectPayload,
  SlackChannelNameMapping,
  SlaConfiguration,
  SLADayCountType,
  SLAStartMode,
  SlaStatus,
  SlaStatusComparator,
  SlaStatusSort,
  SourceMetadataComparator,
  SourceTypeComparator,
  SsoUrlFromEmailResponse,
  StartDateSort,
  StringArrayComparator,
  StringComparator,
  StringItemComparator,
  Subscription,
  SubTypeComparator,
  SuccessPayload,
  Summary,
  SummaryGenerationStatus,
  SyncedExternalThread,
  TargetDateSort,
  Team,
  TeamArchivePayload,
  TeamCollectionFilter,
  TeamConnection,
  TeamCreateInput,
  TeamEdge,
  TeamFilter,
  TeamMembership,
  TeamMembershipConnection,
  TeamMembershipCreateInput,
  TeamMembershipEdge,
  TeamMembershipPayload,
  TeamMembershipUpdateInput,
  TeamNotificationSubscription,
  TeamPayload,
  TeamPinnedResource,
  TeamResourceSection,
  TeamRoleType,
  TeamSecuritySettingsInput,
  TeamSort,
  TeamUpdateInput,
  TeamVisibility,
  TeamVisibilityComparator,
  Template,
  TemplateConnection,
  TemplateCreateInput,
  TemplateEdge,
  TemplateFilter,
  TemplatePayload,
  TemplateUpdateInput,
  TierSort,
  TimeSchedule,
  TimeScheduleConfig,
  TimeScheduleConfigInput,
  TimeScheduleConnection,
  TimeScheduleCreateInput,
  TimeScheduleEdge,
  TimeScheduleEntry,
  TimeScheduleEntryInput,
  TimeSchedulePayload,
  TimeScheduleUpdateInput,
  TimeScheduleUser,
  TimeScheduleUserInput,
  TitleSort,
  TokenUserAccountAuthInput,
  TriageResponsibility,
  TriageResponsibilityAction,
  TriageResponsibilityConnection,
  TriageResponsibilityCreateInput,
  TriageResponsibilityEdge,
  TriageResponsibilityManualSelection,
  TriageResponsibilityManualSelectionInput,
  TriageResponsibilityPayload,
  TriageResponsibilityUpdateInput,
  UpdatedAtSort,
  UploadFile,
  UploadFileHeader,
  UploadPayload,
  UsageAlert,
  UsageAlertConnection,
  UsageAlertEdge,
  UsageAlertFilter,
  UsageAlertNotification,
  UsageAlertType,
  UsageAlertTypeComparator,
  User,
  UserAdminPayload,
  UserCollectionFilter,
  UserConnection,
  UserContextViewType,
  UserDisplayNameSort,
  UserEdge,
  UserFilter,
  UserFlagType,
  UserFlagUpdateOperation,
  UserNameSort,
  UserNotificationSubscription,
  UserPayload,
  UserRoleType,
  UserSettings,
  UserSettingsCustomSidebarTheme,
  UserSettingsCustomTheme,
  UserSettingsFlagPayload,
  UserSettingsFlagsResetPayload,
  UserSettingsPayload,
  UserSettingsTheme,
  UserSettingsThemeDeviceType,
  UserSettingsThemeMode,
  UserSettingsThemePreset,
  UserSettingsUpdateInput,
  UserSortInput,
  UserUpdateInput,
  ViewPreferences,
  ViewPreferencesCreateInput,
  ViewPreferencesInitiativeLabelGroupColumn,
  ViewPreferencesPayload,
  ViewPreferencesProjectLabelGroupColumn,
  ViewPreferencesType,
  ViewPreferencesUpdateInput,
  ViewPreferencesValues,
  ViewType,
  Webhook,
  WebhookConnection,
  WebhookCreateInput,
  WebhookEdge,
  WebhookFailureEvent,
  WebhookPayload,
  WebhookResourceType,
  WebhookRotateSecretPayload,
  WebhookUpdateInput,
  WelcomeMessage,
  WelcomeMessageNotification,
  WorkflowActivationMode,
  WorkflowCronJobDefinition,
  WorkflowDefinition,
  WorkflowDefinitionConnection,
  WorkflowDefinitionEdge,
  WorkflowDefinitionEditAccess,
  WorkflowDefinitionIdComparator,
  WorkflowDefinitionNotification,
  WorkflowIntelligence,
  WorkflowState,
  WorkflowStateArchivePayload,
  WorkflowStateConnection,
  WorkflowStateCreateInput,
  WorkflowStateEdge,
  WorkflowStateFilter,
  WorkflowStatePayload,
  WorkflowStateSort,
  WorkflowStateUpdateInput,
  WorkflowTrigger,
  WorkflowTriggerType,
  WorkflowType,
  WorkspaceAnnouncementNotification,
  AdministrableTeamsRequest,
  AgentActivitiesRequest,
  AgentActivityRequest,
  AgentActivityCreateRequest,
  AgentSessionRequest,
  AgentSessionCreateOnCommentRequest,
  AgentSessionCreateOnIssueRequest,
  AgentSessionsRequest,
  AgentSessionUpdateRequest,
  AgentSessionUpdateExternalUrlRequest,
  AgentSkillRequest,
  AgentSkillCreateRequest,
  AgentSkillDeleteRequest,
  AgentSkillsRequest,
  AgentSkillUpdateRequest,
  AirbyteIntegrationConnectRequest,
  ApplicationInfoRequest,
  ArchivedIntegrationsResponse,
  AttachmentRequest,
  AttachmentCreateRequest,
  AttachmentDeleteRequest,
  AttachmentIssueRequest,
  AttachmentLinkDiscordRequest,
  AttachmentLinkFrontRequest,
  AttachmentLinkGitHubIssueRequest,
  AttachmentLinkGitHubPRRequest,
  AttachmentLinkGitLabMRRequest,
  AttachmentLinkIntercomRequest,
  AttachmentLinkJiraIssueRequest,
  AttachmentLinkSalesforceRequest,
  AttachmentLinkSlackRequest,
  AttachmentLinkURLRequest,
  AttachmentLinkZendeskRequest,
  AttachmentsRequest,
  AttachmentsForURLRequest,
  AttachmentSourcesRequest,
  AttachmentSyncToSlackRequest,
  AttachmentUpdateRequest,
  AuditEntriesRequest,
  AuditEntryTypesResponse,
  AuthenticationSessionsResponse,
  CommentRequest,
  CommentCreateRequest,
  CommentDeleteRequest,
  CommentResolveRequest,
  CommentsRequest,
  CommentUnresolveRequest,
  CommentUpdateRequest,
  ContactCreateRequest,
  CreateCsvExportReportRequest,
  CreateInitiativeUpdateReminderRequest,
  CreateProjectUpdateReminderRequest,
  CustomerRequest,
  CustomerCreateRequest,
  CustomerDeleteRequest,
  CustomerMergeRequest,
  CustomerNeedRequest,
  CustomerNeedArchiveRequest,
  CustomerNeedCreateRequest,
  CustomerNeedCreateFromAttachmentRequest,
  CustomerNeedDeleteRequest,
  CustomerNeedsRequest,
  CustomerNeedUnarchiveRequest,
  CustomerNeedUpdateRequest,
  CustomersRequest,
  CustomerStatusRequest,
  CustomerStatusCreateRequest,
  CustomerStatusDeleteRequest,
  CustomerStatusesRequest,
  CustomerStatusUpdateRequest,
  CustomerTierRequest,
  CustomerTierCreateRequest,
  CustomerTierDeleteRequest,
  CustomerTiersRequest,
  CustomerTierUpdateRequest,
  CustomerUnsyncRequest,
  CustomerUpdateRequest,
  CustomerUpsertRequest,
  CustomViewRequest,
  CustomViewCreateRequest,
  CustomViewDeleteRequest,
  CustomViewHasSubscribersRequest,
  CustomViewsRequest,
  CustomViewUpdateRequest,
  CycleRequest,
  CycleArchiveRequest,
  CycleCreateRequest,
  CyclesRequest,
  CycleShiftAllRequest,
  CycleStartUpcomingCycleTodayRequest,
  CycleUpdateRequest,
  DependencyPackageMetadataRequest,
  DependencyPackageMetadataResponse,
  DocumentRequest,
  DocumentContentHistoryRequest,
  DocumentCreateRequest,
  DocumentDeleteRequest,
  DocumentsRequest,
  DocumentUnarchiveRequest,
  DocumentUpdateRequest,
  DocumentUpdateWorkspaceAccessRequest,
  EmailIntakeAddressRequest,
  EmailIntakeAddressCreateRequest,
  EmailIntakeAddressDeleteRequest,
  EmailIntakeAddressesRequest,
  EmailIntakeAddressRefreshSesDomainStatusRequest,
  EmailIntakeAddressRotateRequest,
  EmailIntakeAddressUpdateRequest,
  EmailTokenUserAccountAuthRequest,
  EmailUnsubscribeRequest,
  EmailUserAccountAuthChallengeRequest,
  EmojiRequest,
  EmojiCreateRequest,
  EmojiDeleteRequest,
  EmojisRequest,
  EntityExternalLinkRequest,
  EntityExternalLinkCreateRequest,
  EntityExternalLinkDeleteRequest,
  EntityExternalLinkUpdateRequest,
  ExternalUserRequest,
  ExternalUsersRequest,
  FavoriteRequest,
  FavoriteCreateRequest,
  FavoriteDeleteRequest,
  FavoritesRequest,
  FavoriteUpdateRequest,
  FileUploadRequest,
  FileUploadDangerouslyDeleteRequest,
  GitAutomationStateCreateRequest,
  GitAutomationStateDeleteRequest,
  GitAutomationStateUpdateRequest,
  GitAutomationTargetBranchCreateRequest,
  GitAutomationTargetBranchDeleteRequest,
  GitAutomationTargetBranchUpdateRequest,
  GoogleUserAccountAuthRequest,
  ImageUploadFromUrlRequest,
  ImportFileUploadRequest,
  InboxNotificationsRequest,
  InboxNotificationUpdateRequest,
  InitiativeRequest,
  InitiativeAddLabelRequest,
  InitiativeArchiveRequest,
  InitiativeCreateRequest,
  InitiativeDeleteRequest,
  InitiativeFilterSuggestionRequest,
  InitiativeLabelRequest,
  InitiativeLabelCreateRequest,
  InitiativeLabelDeleteRequest,
  InitiativeLabelRestoreRequest,
  InitiativeLabelRetireRequest,
  InitiativeLabelsRequest,
  InitiativeLabelUpdateRequest,
  InitiativeRelationRequest,
  InitiativeRelationCreateRequest,
  InitiativeRelationDeleteRequest,
  InitiativeRelationsRequest,
  InitiativeRelationUpdateRequest,
  InitiativeRemoveLabelRequest,
  InitiativesRequest,
  InitiativeToProjectRequest,
  InitiativeToProjectCreateRequest,
  InitiativeToProjectDeleteRequest,
  InitiativeToProjectsRequest,
  InitiativeToProjectUpdateRequest,
  InitiativeUnarchiveRequest,
  InitiativeUpdateRequest,
  InitiativeUpdateArchiveRequest,
  InitiativeUpdateCreateRequest,
  InitiativeUpdatesRequest,
  InitiativeUpdateUnarchiveRequest,
  InitiativeUpdateUpdateRequest,
  IntegrationRequest,
  IntegrationArchiveRequest,
  IntegrationAsksConnectChannelRequest,
  IntegrationDeleteRequest,
  IntegrationDiscordRequest,
  IntegrationFigmaRequest,
  IntegrationFrontRequest,
  IntegrationGithubConnectRequest,
  IntegrationGitHubEnterpriseServerConnectRequest,
  IntegrationGithubImportConnectRequest,
  IntegrationGithubImportRefreshRequest,
  IntegrationGitHubPersonalRequest,
  IntegrationGithubRemoveCodeAccessRequest,
  IntegrationGitlabConnectRequest,
  IntegrationGitlabRotateRequest,
  IntegrationGitlabTestConnectionRequest,
  IntegrationGitlabUpdateRotationSettingsRequest,
  IntegrationGitlabUpdateTokenRequest,
  IntegrationGongRequest,
  IntegrationGoogleSheetsRequest,
  IntegrationHasScopesRequest,
  IntegrationIntercomRequest,
  IntegrationIntercomSettingsUpdateRequest,
  IntegrationJiraPersonalRequest,
  IntegrationMicrosoftPersonalConnectRequest,
  IntegrationMicrosoftTeamsRequest,
  IntegrationRequestRequest,
  IntegrationsRequest,
  IntegrationSalesforceRequest,
  IntegrationSentryConnectRequest,
  IntegrationSlackRequest,
  IntegrationSlackAsksRequest,
  IntegrationSlackCustomerChannelLinkRequest,
  IntegrationSlackCustomViewNotificationsRequest,
  IntegrationSlackImportEmojisRequest,
  IntegrationSlackOrAsksUpdateSlackTeamNameRequest,
  IntegrationSlackOrgProjectUpdatesPostRequest,
  IntegrationSlackPersonalRequest,
  IntegrationSlackPostRequest,
  IntegrationSlackProjectPostRequest,
  IntegrationsSettingsRequest,
  IntegrationsSettingsCreateRequest,
  IntegrationsSettingsUpdateRequest,
  IntegrationTemplateRequest,
  IntegrationTemplateCreateRequest,
  IntegrationTemplateDeleteRequest,
  IntegrationTemplatesRequest,
  IntegrationZendeskRequest,
  IssueRequest,
  IssueAddLabelRequest,
  IssueArchiveRequest,
  IssueBatchCreateRequest,
  IssueBatchUpdateRequest,
  IssueCreateRequest,
  IssueDeleteRequest,
  IssueExternalSyncDisableRequest,
  IssueFigmaFileKeySearchRequest,
  IssueFilterSuggestionRequest,
  IssueImportCheckCSVRequest,
  IssueImportCheckSyncRequest,
  IssueImportCreateAsanaRequest,
  IssueImportCreateClubhouseRequest,
  IssueImportCreateCSVJiraRequest,
  IssueImportCreateGithubRequest,
  IssueImportCreateJiraRequest,
  IssueImportDeleteRequest,
  IssueImportJqlCheckRequest,
  IssueImportProcessRequest,
  IssueImportUpdateRequest,
  IssueLabelRequest,
  IssueLabelCreateRequest,
  IssueLabelDeleteRequest,
  IssueLabelRestoreRequest,
  IssueLabelRetireRequest,
  IssueLabelsRequest,
  IssueLabelUpdateRequest,
  IssuePriorityValuesResponse,
  IssueRelationRequest,
  IssueRelationCreateRequest,
  IssueRelationDeleteRequest,
  IssueRelationsRequest,
  IssueRelationUpdateRequest,
  IssueReminderRequest,
  IssueRemoveLabelRequest,
  IssueRepositorySuggestionsRequest,
  IssuesRequest,
  IssueSearchRequest,
  IssueShareRequest,
  IssueSubscribeRequest,
  IssueTitleSuggestionFromCustomerRequestRequest,
  IssueToReleaseRequest,
  IssueToReleaseCreateRequest,
  IssueToReleaseDeleteRequest,
  IssueToReleaseDeleteByIssueAndReleaseRequest,
  IssueToReleasesRequest,
  IssueUnarchiveRequest,
  IssueUnshareRequest,
  IssueUnsubscribeRequest,
  IssueUpdateRequest,
  IssueVcsBranchSearchRequest,
  IssueVcsBranchSearchResponse,
  JiraProjectRequest,
  JiraProjectBatchMigrateRequest,
  JiraProjectsRequest,
  LatestReleaseByAccessKeyResponse,
  LogoutRequest,
  LogoutAllSessionsRequest,
  LogoutOtherSessionsRequest,
  LogoutSessionRequest,
  NotificationRequest,
  NotificationArchiveRequest,
  NotificationArchiveAllRequest,
  NotificationCategoryChannelSubscriptionUpdateRequest,
  NotificationMarkReadAllRequest,
  NotificationMarkUnreadAllRequest,
  NotificationsRequest,
  NotificationSnoozeAllRequest,
  NotificationSubscriptionRequest,
  NotificationSubscriptionCreateRequest,
  NotificationSubscriptionDeleteRequest,
  NotificationSubscriptionsRequest,
  NotificationSubscriptionUpdateRequest,
  NotificationUnarchiveRequest,
  NotificationUnsnoozeAllRequest,
  NotificationUpdateRequest,
  OauthApplicationRequest,
  OauthApplicationArchiveRequest,
  OauthApplicationCreateRequest,
  OauthApplicationRotateSecretRequest,
  OauthApplicationRotateWebhookSecretRequest,
  OauthApplicationsResponse,
  OauthApplicationUpdateRequest,
  OrganizationDeleteRequest,
  OrganizationDomainDeleteRequest,
  OrganizationExistsRequest,
  OrganizationInviteRequest,
  OrganizationInviteCreateRequest,
  OrganizationInviteDeleteRequest,
  OrganizationInviteDetailsRequest,
  OrganizationInvitesRequest,
  OrganizationInviteUpdateRequest,
  OrganizationStartTrialForPlanRequest,
  OrganizationUpdateRequest,
  ProjectRequest,
  ProjectAddLabelRequest,
  ProjectArchiveRequest,
  ProjectCreateRequest,
  ProjectDeleteRequest,
  ProjectExternalSyncDisableRequest,
  ProjectFilterSuggestionRequest,
  ProjectLabelRequest,
  ProjectLabelCreateRequest,
  ProjectLabelDeleteRequest,
  ProjectLabelRestoreRequest,
  ProjectLabelRetireRequest,
  ProjectLabelsRequest,
  ProjectLabelUpdateRequest,
  ProjectMilestoneRequest,
  ProjectMilestoneCreateRequest,
  ProjectMilestoneDeleteRequest,
  ProjectMilestoneMoveRequest,
  ProjectMilestonesRequest,
  ProjectMilestoneUpdateRequest,
  ProjectRelationRequest,
  ProjectRelationCreateRequest,
  ProjectRelationDeleteRequest,
  ProjectRelationsRequest,
  ProjectRelationUpdateRequest,
  ProjectRemoveLabelRequest,
  ProjectsRequest,
  ProjectStatusRequest,
  ProjectStatusArchiveRequest,
  ProjectStatusCreateRequest,
  ProjectStatusesRequest,
  ProjectStatusUnarchiveRequest,
  ProjectStatusUpdateRequest,
  ProjectUnarchiveRequest,
  ProjectUpdateRequest,
  ProjectUpdateArchiveRequest,
  ProjectUpdateCreateRequest,
  ProjectUpdateDeleteRequest,
  ProjectUpdatesRequest,
  ProjectUpdateUnarchiveRequest,
  ProjectUpdateUpdateRequest,
  PushSubscriptionCreateRequest,
  PushSubscriptionDeleteRequest,
  PushSubscriptionTestRequest,
  QuotasRequest,
  ReactionCreateRequest,
  ReactionDeleteRequest,
  RecentReleasesByAccessKeyRequest,
  RecentReleasesByAccessKeyResponse,
  RefreshGoogleSheetsDataRequest,
  ReleaseRequest,
  ReleaseArchiveRequest,
  ReleaseCompleteRequest,
  ReleaseCompleteByAccessKeyRequest,
  ReleaseCreateRequest,
  ReleaseDeleteRequest,
  ReleaseNoteRequest,
  ReleaseNoteCreateRequest,
  ReleaseNoteDeleteRequest,
  ReleaseNotesRequest,
  ReleaseNoteUpdateRequest,
  ReleasePipelineRequest,
  ReleasePipelineArchiveRequest,
  ReleasePipelineCreateRequest,
  ReleasePipelineDeleteRequest,
  ReleasePipelinesRequest,
  ReleasePipelineUnarchiveRequest,
  ReleasePipelineUpdateRequest,
  ReleasesRequest,
  ReleaseSearchRequest,
  ReleaseSearchResponse,
  ReleaseStageRequest,
  ReleaseStageArchiveRequest,
  ReleaseStageCreateRequest,
  ReleaseStagesRequest,
  ReleaseStageUnarchiveRequest,
  ReleaseStageUpdateRequest,
  ReleaseSyncRequest,
  ReleaseSyncByAccessKeyRequest,
  ReleaseUnarchiveRequest,
  ReleaseUpdateRequest,
  ReleaseUpdateByPipelineRequest,
  ReleaseUpdateByPipelineByAccessKeyRequest,
  ResendOrganizationInviteRequest,
  ResendOrganizationInviteByEmailRequest,
  RoadmapRequest,
  RoadmapArchiveRequest,
  RoadmapCreateRequest,
  RoadmapDeleteRequest,
  RoadmapsRequest,
  RoadmapToProjectRequest,
  RoadmapToProjectCreateRequest,
  RoadmapToProjectDeleteRequest,
  RoadmapToProjectsRequest,
  RoadmapToProjectUpdateRequest,
  RoadmapUnarchiveRequest,
  RoadmapUpdateRequest,
  SamlTokenUserAccountAuthRequest,
  SearchDocumentsRequest,
  SearchIssuesRequest,
  SearchProjectsRequest,
  SemanticSearchRequest,
  SlaConfigurationsRequest,
  SlaConfigurationsResponse,
  SsoUrlFromEmailRequest,
  TeamRequest,
  TeamCreateRequest,
  TeamCyclesDeleteRequest,
  TeamDeleteRequest,
  TeamKeyDeleteRequest,
  TeamMembershipRequest,
  TeamMembershipCreateRequest,
  TeamMembershipDeleteRequest,
  TeamMembershipsRequest,
  TeamMembershipUpdateRequest,
  TeamsRequest,
  TeamUnarchiveRequest,
  TeamUpdateRequest,
  TemplateRequest,
  TemplateCreateRequest,
  TemplateDeleteRequest,
  TemplatesResponse,
  TemplateSearchRequest,
  TemplateSearchResponse,
  TemplatesForIntegrationRequest,
  TemplatesForIntegrationResponse,
  TemplateUpdateRequest,
  TimeScheduleRequest,
  TimeScheduleCreateRequest,
  TimeScheduleDeleteRequest,
  TimeScheduleRefreshIntegrationScheduleRequest,
  TimeSchedulesRequest,
  TimeScheduleUpdateRequest,
  TimeScheduleUpsertExternalRequest,
  TrackAnonymousEventRequest,
  TriageResponsibilitiesRequest,
  TriageResponsibilityRequest,
  TriageResponsibilityCreateRequest,
  TriageResponsibilityDeleteRequest,
  TriageResponsibilityUpdateRequest,
  UsageAlertRequest,
  UsageAlertsRequest,
  UserRequest,
  UserChangeRoleRequest,
  UserDiscordConnectRequest,
  UserExternalUserDisconnectRequest,
  UserFlagUpdateRequest,
  UserRevokeAllSessionsRequest,
  UserRevokeSessionRequest,
  UsersRequest,
  UserSessionsRequest,
  UserSessionsResponse,
  UserSettingsFlagsResetRequest,
  UserSettingsUpdateRequest,
  UserSuspendRequest,
  UserUnlinkFromIdentityProviderRequest,
  UserUnsuspendRequest,
  UserUpdateRequest,
  UserViewPreferencesRequest,
  UserViewPreferencesResponse,
  VerifyGitHubEnterpriseServerInstallationRequest,
  ViewPreferencesCreateRequest,
  ViewPreferencesDeleteRequest,
  ViewPreferencesUpdateRequest,
  WebhookRequest,
  WebhookCreateRequest,
  WebhookDeleteRequest,
  WebhookRotateSecretRequest,
  WebhooksRequest,
  WebhookUpdateRequest,
  WorkflowStateRequest,
  WorkflowStateArchiveRequest,
  WorkflowStateCreateRequest,
  WorkflowStatesRequest,
  WorkflowStateUpdateRequest,
} as const
