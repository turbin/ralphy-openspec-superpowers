---
name: "ralphy"
description: "Ralphy-OpenSpec workflow bootstrap. Load at session start to understand OpenSpec change folders, Ralph loop, and harness conventions."
---

# Ralphy-OpenSpec Skill

This project uses:
- **OpenSpec** for spec-driven development (`openspec/specs/` + `openspec/changes/`)
- **Ralph loop** for iterative execution
- Optional **superpowers** skills as constraints (see `AGENTS.md` mapping)

## Rules

- Treat `openspec/specs/` as the source of truth.
- Treat `openspec/changes/<change-name>/` as the proposed/active change.
- Only mark tasks complete when verification (tests) passes.
- Keep changes small, deterministic, and test-backed.

## Slash commands

- `/ralphy-plan` — create OpenSpec change proposal, tasks, and spec deltas
- `/ralphy-implement` — execute tasks, prefer TDD, review before marking complete
- `/ralphy-validate` — map acceptance criteria to tests and run `npm test`
- `/ralphy-archive` — move completed change to `openspec/archive/`
