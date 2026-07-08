# Ralphy-OpenSpec Agent Instructions (OpenCode)

You are an AI coding assistant operating in a repository that uses:
- **OpenSpec** for spec-driven development (`openspec/specs/` + `openspec/changes/`)
- **Ralph loop** for iterative execution (the same prompt may be repeated)

## Golden rules
- Treat `openspec/specs/` as the source of truth (current behavior).
- Treat `openspec/changes/<change-name>/` as the proposed/active change.
- Only mark tasks complete when verification (tests) passes.
- Keep changes small, deterministic, and test-backed.

## Workflow

### 1) Plan (PRD -> OpenSpec)
When asked to plan or create specs:
1. Read `openspec/project.md` and relevant files in `openspec/specs/`.
2. Create a new change folder under `openspec/changes/<change-name>/` with:
   - `proposal.md` (why/what/scope/non-goals/risks)
   - `tasks.md` (checklist with test plan notes)
   - `specs/**/spec.md` (deltas: ADDED/MODIFIED/REMOVED)
3. Ensure requirements use MUST/SHALL and each requirement has at least one scenario.

### 2) Implement (Tasks -> Code)
When asked to implement:
1. Identify the active change folder under `openspec/changes/`.
2. Implement tasks in order from `tasks.md`.
3. Run tests frequently and fix failures.
4. Update the checkbox status in `tasks.md` only when verified.

### 3) Validate (Acceptance criteria)
When asked to validate:
1. Map scenarios/acceptance criteria to tests/commands.
2. Run the project test command (commonly `npm test`).
3. Report which requirements are proven and what gaps remain.

### 4) Archive
When asked to archive:
- Prefer `openspec archive <change-name> --yes` if OpenSpec CLI is available.
- Otherwise, move the change into `openspec/archive/` and ensure `openspec/specs/` reflects the final state.

## Ralph loop completion promise
If you are being run in a loop, only output this exact text when ALL tasks are complete and tests are green:

<promise>TASK_COMPLETE</promise>

## Superpowers integration (optional pilot)

This project can optionally leverage skills from [obra/superpowers](https://github.com/obra/superpowers). They are **not** the source of truth; Ralphy's OpenSpec tasks are. Use them as constraints or inspiration during the corresponding phase.

| Superpowers skill | Ralphy phase / command | How to use it |
|-------------------|------------------------|---------------|
| `brainstorming` | Plan (`/ralphy-plan`) | Before creating an OpenSpec change, ask clarifying questions and explore alternatives; then still write `proposal.md` + `specs/` + `tasks.md`. |
| `using-git-worktrees` | Implement prep | When the change is large or risky, create an isolated worktree branch before running tasks. |
| `writing-plans` | Plan (`/ralphy-plan`) | Break spec deltas into 2-5 minute tasks, but write the output into `openspec/changes/<change>/tasks.md`. |
| `subagent-driven-development` | Implement (`/ralphy-implement`) | Dispatch one fresh subagent per task; run spec-compliance review, then code-quality review. |
| `executing-plans` | Implement (`/ralphy-implement`) | Alternative to subagents: run tasks in batches with human checkpoints. |
| `test-driven-development` | Implement (`/ralphy-implement`) | For each task: write a failing test, watch it fail, write the minimal code, watch it pass, then refactor. |
| `requesting-code-review` | Validate (`/ralphy-validate`) | Between tasks and before marking complete, review against the plan and block on critical issues. |
| `finishing-a-development-branch` | Archive (`/ralphy-archive`) | Verify tests, then choose merge / PR / keep / discard and clean up the worktree. |

### Harness-specific notes

- **Claude Code**: use the `.claude/commands/` slash commands already in this repo.
- **Cursor**: use the `.cursor/prompts/` templates already in this repo.
- **OpenCode**: this `AGENTS.md` file is the primary instruction; skills live in `.opencode/skills/` if present.
- **Kimi Code**: install the repo-level plugin from `.kimi-plugin/` with `kimi plugin install <repo-path>`. It registers Ralphy slash commands and a session-start skill.
- **Trae CN**: project-level commands are in `.trae/commands/` and are automatically discovered by Trae CN IDE when the project is open.
- **Trae International**: use `.trae/commands/` for project-level commands and `.trae/rules/` for project rules if desired.
- **Codex**: use the `.codex/prompts/` prompt files. In the Codex app or CLI, the agent loads these prompts automatically.

## graphify

This project has a knowledge graph at graphify-out/ with god nodes, community structure, and cross-file relationships.

When the user types `/graphify`, use the installed graphify skill or instructions before doing anything else.

Rules:
- For codebase questions, first run `graphify query "<question>"` when graphify-out/graph.json exists. Use `graphify path "<A>" "<B>"` for relationships and `graphify explain "<concept>"` for focused concepts. These return a scoped subgraph, usually much smaller than GRAPH_REPORT.md or raw grep output.
- Dirty graphify-out/ files are expected after hooks or incremental updates; dirty graph files are not a reason to skip graphify. Only skip graphify if the task is about stale or incorrect graph output, or the user explicitly says not to use it.
- If graphify-out/wiki/index.md exists, use it for broad navigation instead of raw source browsing.
- Read graphify-out/GRAPH_REPORT.md only for broad architecture review or when query/path/explain do not surface enough context.
- After modifying code, run `graphify update .` to keep the graph current (AST-only, no API cost).
