---
name: "ralphy-opencode"
description: "Ralphy-OpenSpec bootstrap for OpenCode. Use when starting a session to load project conventions and slash command mappings."
---

# Ralphy-OpenSpec for OpenCode

This project uses:
- **OpenSpec** (`openspec/specs/` + `openspec/changes/`)
- **Ralph loop** (iterative execution)
- Optional **superpowers** skills as constraints (see AGENTS.md mapping)

## Slash commands

- `/ralphy-plan` — read `openspec/project.md`, create `openspec/changes/<change>/proposal.md`, `tasks.md`, and `specs/**/spec.md`
- `/ralphy-implement` — execute tasks from the active change with TDD + review
- `/ralphy-validate` — map acceptance criteria to tests and run `npm test`
- `/ralphy-archive` — move completed change to `openspec/archive/`

## Rules

- Treat `openspec/specs/` as source of truth.
- Treat `openspec/changes/<change-name>/` as the active change.
- Only mark tasks complete when verification passes.
- Keep changes small, deterministic, and test-backed.
