# Proposal: Integrate Superpowers Pilot (Kimi Code + Trae CN support)

## Summary

Run a minimal, safe pilot that layers [obra/superpowers](https://github.com/obra/superpowers) methodology onto the existing Ralphy-OpenSpec workflow without replacing OpenSpec artifacts. The pilot also extends harness support to **Kimi Code** and **Trae CN**.

## Motivation

- `superpowers` provides proven skills for brainstorming, TDD, code-review and worktree-based branching.
- Ralphy already has OpenSpec change folders and Ralph-loop execution; we can map superpowers stages to those artifacts.
- Cursor, Claude Code and OpenCode are already mentioned in the project; users increasingly ask for Kimi Code and Trae CN support.

## Scope

1. **Methodology mapping**: document how each superpowers skill maps to Ralphy's `/ralphy-plan`, `/ralphy-implement`, `/ralphy-validate`, `/ralphy-archive`.
2. **Pilot integration**: update `/ralphy-implement` to optionally enforce `test-driven-development` and `requesting-code-review` per task.
3. **Harness support**: add Kimi Code plugin scaffolding and Trae CN project-level commands/skills.
4. **No product code changes**: this change does not rewrite the engine; it only adds documentation, templates and command files.

## Non-goals

- Full replacement of the Ralphy engine by superpowers.
- Implementing every superpowers skill (only TDD + code-review + worktree for pilot).
- Shipping a Kimi Code marketplace plugin (only repo-level scaffolding).
- Auto-installing Trae CN global skills (only project-level `.trae` directory).

## Risks / Mitigations

- **Two workflow systems could conflict**: keep superpowers as "inspiration / optional constraints" referenced from Ralphy commands, not as a parallel entry point.
- **Kimi/Trae versions move fast**: pin to documented manifest versions and keep templates minimal.
- **Maintenance burden**: only add the minimum files needed; future skills can extend them.

## Success Criteria

- `AGENTS.md` clearly maps superpowers skills to Ralphy stages.
- `.claude/commands/ralphy-implement.md` references TDD + code-review.
- `.kimi-plugin/` contains a valid `plugin.json` and skill manifest for Ralphy commands.
- `.trae/commands/` contains project-level slash commands for Ralphy plan/implement/validate/archive.
- `npm test` still passes.
