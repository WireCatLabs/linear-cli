import { join } from "node:path"
import { type ApiModel, adaptGraphql, readGraphql } from "@wirecat/cli-base/codegen"

const URL = "https://api.linear.app/graphql"

/** The schema as committed; readGraphql refuses one whose hash no longer matches provenance.json. */
export const specModel = async (root: string): Promise<{ model: ApiModel; notes: string[] }> => {
  const dir = join(root, "spec/linear")
  const model = adaptGraphql(readGraphql(dir), {
    url: URL,
    sourceUrl: URL,
    // As each scalar's description in the schema says it travels.
    scalars: {
      DateTime: { type: "string" },
      DateTimeOrDuration: { type: "string" },
      Duration: { type: "union", of: [{ type: "string" }, { type: "number" }] },
      JSON: { type: "unknown" },
      JSONObject: { type: "unknown" },
      TimelessDate: { type: "string" },
      TimelessDateOrDuration: { type: "string" },
      UUID: { type: "string" },
    },
    // Each name is also a mutation, and both would get one id. Kept: the mutation, which changes a project or an
    // initiative; left out: the query, which reads one status post of it.
    exclude: {
      "query.projectUpdate": "a mutation of the same name takes its id; the query reads one project status post",
      "query.initiativeUpdate": "a mutation of the same name takes its id; the query reads one initiative status post",
    },
  })
  return { model, notes: [] }
}
