# When something goes wrong

Get your agent answering about your issues again, most often in one step. Find what you see in the table, do what its
row says, then run the command again. Most failures come from the Linear key, a missing profile name or the profile's
permissions.

`linear doctor` shows what is set up without connecting, and `linear work session status --check` asks Linear whose
key it is. Start there when you do not know what is wrong.

| What you see | What to do |
| --- | --- |
| `linear` is not found | Open a new terminal, and check that npm's global folder is on `PATH`. |
| "name a profile" | Put the profile first, as in `linear work issues list`, or set `WCLINEAR_PROFILE`. |
| "work is not signed in" | Run `linear work session start` and paste your Linear key. |
| `authentication_error` (exit code 4) after it worked before | The key was revoked in Linear. Make a new one in Linear's **Settings → Account → Security & access**, then run `linear work session start` again. |
| A write is refused by Linear, but not by `linear` | The key has only **Read** access, or is limited to other teams. Make a key with **Write** access for the team. |
| `permission_error` (exit code 5) | The profile's permissions or `WCLINEAR_READ_ONLY` stop it, and the message names the key. See [permissions](permissions.md). |
| Giving an issue to a colleague is refused | `issues.assign-others` is `deny` until you allow it. See [permissions](permissions.md). |
| An issue is missing or out of date | Run `linear work sync`. A sync that stopped early says so, and the next one goes on. |
| An issue deleted in Linear is still listed | The daily check for deleted issues has not run yet. The `sync` answer says when it next will. |
| The warning `source.deletions-unchecked` | The key cannot read the workspace's audit log, so documents moved to the trash stay. `linear work sync --rescan` removes them. |
| No Linear documents | Choose the projects first: `linear work folders add linear:all`, then `linear work sync`. |
| `rate_limited` (exit code 8) | Linear asked to slow down. Wait a minute and run the command again. |
| The settings file does not read | `doctor` lists every problem in the file under `config.issues`. Run the `config unset` each one gives, or fix the file by hand. |
| `doctor` lists `files.problems` | Other users of the computer can read `config.json` or enter its folder. Run each `chmod` that `doctor` prints after "to make it private:". `doctor` never changes a file mode itself. |

Still stuck? Ask on [Discord](https://discord.gg/DebENqbRrJ), or open an issue in
[the repository](https://github.com/WireCatLabs/linear-cli/issues). `linear doctor reports create` writes a problem
report you can attach, and `linear doctor reports show` shows what it holds first. Never paste a key, a password or
private content into a support request.
