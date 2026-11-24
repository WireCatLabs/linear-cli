#!/usr/bin/env bash
# The release's live check against the real service (WC-TEST-18, WC-REL-17). The owner runs bin/live, which prints
# the `# Needs:` lines below, passes the token on stdin and records the pass. Every folder is a temporary one and the
# keyring is out of reach, so nothing touches the owner's store, keyring or settings.
#   scripts/live.sh < token-file
# Needs: a Linear personal API key the owner chose for this check (keyring service linear), read access is enough
# Needs: a workspace with at least one team and one issue the key can read
# Needs: write access and the workspace's audit log (an admin's key): the check makes a project with one document, trashes the document and the project
set -euo pipefail
root=$(cd -- "$(dirname -- "$0")/.." && pwd)
work=$(mktemp -d)
trap 'rm -rf "$work"' EXIT

export WCLINEAR_CONFIG_DIR="$work/config" WCLINEAR_STATE_DIR="$work/state" WCLINEAR_CACHE_DIR="$work/cache"
export MESSAGING_STORE="$work/wirecat.db"
export DBUS_SESSION_BUS_ADDRESS="disabled:"
unset WCLINEAR_TOKEN
cli=(node "$root/dist/bin/linear.js")

pnpm --dir "$root" -s build >/dev/null
# Set after the build, which needs the owner's pnpm store: a CLI that moves its folders on start must not see the
# owner's home.
export HOME="$work/home" XDG_CONFIG_HOME="$work/xdg/config" XDG_DATA_HOME="$work/xdg/data"
export XDG_STATE_HOME="$work/xdg/state" XDG_CACHE_HOME="$work/xdg/cache"
mkdir -p "$HOME"

"${cli[@]}" --wcat-describe | node -e '
  const answer = JSON.parse(require("fs").readFileSync(0, "utf8"))
  if (answer.wcat_describe !== 2 || !/^[0-9a-f]{64}$/.test(answer.manifest_sha256)) throw new Error("not format 2")'

# The check's own profile allows the raw writes and the delete key, so the trash steps run without a question; the file
# is in $work.
mkdir -p "$WCLINEAR_CONFIG_DIR"
printf '%s\n' '{"profiles":{"live":{"permissions":{"api":"allow","linear.delete":"allow"}}}}' >"$WCLINEAR_CONFIG_DIR/config.json"

"${cli[@]}" live session start --credential-storage file --json >/dev/null
started=$(date -u +%Y-%m-%dT%H:%M:%SZ)
name="WireCat live check $(date -u +%Y%m%dT%H%M%SZ)"
project=""
# A check that fails half way still leaves its project in the trash, never in the workspace: found by its name when
# the create's answer gave no id.
cleanup() {
  if [ -z "$project" ]; then
    "${cli[@]}" live api projects --filter "{\"name\":{\"eq\":\"$name\"}}" --json >"$work/leftover.json" 2>/dev/null || true
    project=$(node -e '
      try {
        const answer = JSON.parse(require("fs").readFileSync(process.argv[1], "utf8"))
        process.stdout.write(String((answer.items ?? answer.item?.nodes ?? [])[0]?.id ?? ""))
      } catch {}' "$work/leftover.json")
  fi
  [ -z "$project" ] || "${cli[@]}" live api project-delete --id "$project" --yes --json >/dev/null 2>&1 || true
  "${cli[@]}" live session end --json >/dev/null 2>&1 || true
  rm -rf "$work"
}
trap cleanup EXIT

"${cli[@]}" live sync --max-pages 40 --json >"$work/sync.json"
# The second run sends what changed since the first: the changes calls with their updatedAt filter.
"${cli[@]}" live sync --max-pages 40 --json >"$work/changes.json"
"${cli[@]}" live teams list --json >"$work/teams.json"
"${cli[@]}" live issues list --limit 1 --json >"$work/issues.json"
# Totals only: the record is public, the workspace's data is not.
node -e '
  const read = (name) => JSON.parse(require("fs").readFileSync(`${process.argv[1]}/${name}.json`, "utf8"))
  const check = (name) => {
    const sync = read(name).item ?? {}
    if (sync.provider !== "linear") throw new Error(`${name}: not a linear sync: ${JSON.stringify(sync).slice(0, 200)}`)
    const failed = (sync.synced ?? []).filter((one) => one.error !== undefined)
    if (failed.length) throw new Error(`${name}: kinds failed: ${failed.map((one) => `${one.kind} ${one.error}`).join("; ")}`)
    return sync
  }
  const full = check("sync")
  if (full.state !== "complete") throw new Error(`the first sync stopped (${full.state}): raise --max-pages or use a smaller workspace`)
  for (const kind of ["team", "issue"])
    if (!full.synced.some((one) => one.kind === kind && one.saved > 0)) throw new Error(`no ${kind} saved`)
  const changes = check("changes")
  if (!changes.synced.some((one) => one.round === "changes")) throw new Error("the second sync read no changes round")
  if (!(read("teams").items ?? []).length || !(read("issues").items ?? []).length) throw new Error("teams or issues list empty")
  process.stdout.write(`synced: ${full.synced.map((one) => `${one.kind} ${one.saved}`).join(", ")}; changes round: ${changes.synced.length} kinds\n`)
' "$work"
"${cli[@]}" live doctor --json >/dev/null

# A document trashed in Linear keeps its updatedAt, so only the audit log names it to the next sync.
field() { node -e '
  const answer = JSON.parse(require("fs").readFileSync(process.argv[1], "utf8"))
  const value = process.argv[2].split(".").reduce((one, key) => one?.[key], answer)
  // Names only, never values: the record is public.
  const shape = (one) => (one && typeof one === "object" ? Object.keys(one).join(",") : typeof one)
  if (value === undefined)
    throw new Error(`${process.argv[1]} has no ${process.argv[2]}: keys ${shape(answer)}; item ${shape(answer.item ?? answer.items?.[0])}`)
  process.stdout.write(String(value))' "$work/$1.json" "$2"; }
team=$(field teams items.0.external_id)
"${cli[@]}" live api project-create --input "{\"name\":\"$name\",\"teamIds\":[\"$team\"]}" \
  --json >"$work/project.json"
project=$(field project item.result.project.id)
"${cli[@]}" live api document-create --input "{\"title\":\"Live check\",\"content\":\"trashed by the live check\",\"projectId\":\"$project\"}" \
  --json >"$work/document.json"
document=$(field document item.result.document.id)
"${cli[@]}" live folders add "$project" --json >/dev/null
"${cli[@]}" live sync --max-pages 40 --json >"$work/saved.json"
"${cli[@]}" live api document-delete --id "$document" --yes --json >/dev/null
"${cli[@]}" live sync --max-pages 40 --json >"$work/trashed.json"
"${cli[@]}" live documents list --json >"$work/left.json"
# The document is new, so the documents listing names it too: the audit log is read on its own to show the sync's
# feed would find it after the listing's window has passed.
"${cli[@]}" live api audit-entries --filter "{\"type\":{\"eq\":\"documentDeleted\"},\"createdAt\":{\"gte\":\"$started\"}}" \
  --first 50 --json >"$work/audit.json"
node -e '
  const read = (name) => JSON.parse(require("fs").readFileSync(`${process.argv[1]}/${name}.json`, "utf8"))
  const saved = read("saved").item?.documents ?? {}
  if (!(saved.saved >= 1)) throw new Error(`the document was not saved: ${JSON.stringify(saved).slice(0, 300)}`)
  const trashed = read("trashed").item?.documents ?? {}
  if ((trashed.warnings ?? []).length) throw new Error(`the sync warned: ${JSON.stringify(trashed.warnings)}`)
  if (trashed.removed !== 1) throw new Error(`the trashed document was not removed: ${JSON.stringify(trashed).slice(0, 300)}`)
  if ((read("left").items ?? []).some((one) => one.id === process.argv[2])) throw new Error("documents list still shows it")
  const audit = read("audit")
  const entries = audit.items ?? audit.item?.nodes ?? []
  if (!entries.some((one) => one.metadata?.entityId === process.argv[2]))
    throw new Error("the audit log has no documentDeleted entry with the document at metadata.entityId")
  process.stdout.write("trashed document left the copy on a plain sync\n")
' "$work" "$document"
"${cli[@]}" live api project-delete --id "$project" --yes --json >/dev/null
project=""

"${cli[@]}" live session end --json >/dev/null
echo "live check passed: describe format 2, sign-in, full and changes sync, teams and issues from the copy, doctor," \
  "a trashed document removed by a plain sync, sign-out"
