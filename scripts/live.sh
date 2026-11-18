#!/usr/bin/env bash
# The release's live check against the real service (WC-TEST-18, WC-REL-17). The owner runs bin/live, which prints
# the `# Needs:` lines below, passes the token on stdin and records the pass. Every folder is a temporary one and the
# keyring is out of reach, so nothing touches the owner's store, keyring or settings.
#   scripts/live.sh < token-file
# Needs: a Linear personal API key the owner chose for this check (keyring service linear), read access is enough
# Needs: a workspace with at least one team and one issue the key can read
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

"${cli[@]}" live session start --credential-storage file --json >/dev/null
trap '"${cli[@]}" live session end --json >/dev/null 2>&1 || true; rm -rf "$work"' EXIT

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

"${cli[@]}" live session end --json >/dev/null
echo "live check passed: describe format 2, sign-in, full and changes sync, teams and issues from the copy, doctor, sign-out"
