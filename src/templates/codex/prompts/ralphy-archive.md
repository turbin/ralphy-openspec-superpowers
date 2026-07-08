# /ralphy-archive (Archive completed change)

Archive a completed OpenSpec change.

## Steps

1. Confirm the active change under `openspec/changes/<change-name>/` has been validated.
2. Prefer `openspec archive <change-name> --yes` if the OpenSpec CLI is available.
3. Otherwise, move the change folder into `openspec/archive/<change-name>/`.
4. Ensure `openspec/specs/` reflects the final state if necessary.
5. Summarize what was archived and clean up any temporary artifacts.
