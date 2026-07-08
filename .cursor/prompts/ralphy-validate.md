# /ralphy-validate (Validate against acceptance criteria)

You are an AI coding assistant validating an OpenSpec change against its acceptance criteria.

## Goal

Prove that the implementation matches the requirements/scenarios, tests pass, and code quality gates (lint) are satisfied.

## Steps

1. Identify the active change folder under `openspec/changes/`.
2. Extract acceptance criteria from:
   - spec scenarios in `openspec/changes/<change-name>/specs/**`
   - test plan notes in `tasks.md`
3. Map each scenario/acceptance criterion to a test or deterministic command.
4. Run tests and/or deterministic verification commands.
5. Run lint review:
   - Detect the project's lint configuration (e.g. `eslint.config.*`, `.eslintrc*`, `biome.json`, `ruff.toml`, `pyproject.toml` lint section, etc.).
   - If a user-supplied lint config exists, run the corresponding linter.
   - If no config exists, select a default linter appropriate to the detected language/framework (e.g. ESLint for TypeScript/JavaScript, Ruff for Python, Biome for Rust/JS, etc.) and run it with a minimal, reasonable default config.
   - Report lint issues by severity (error / warning / info).
   - Critical lint errors must be fixed or explicitly accepted by the user before marking the change validated.
6. If failures occur, fix them and re-run until green.

## Output

Report:
- What passed
- What failed (with next actions)
- Lint summary (config used, errors, warnings, suggestions)
- Any missing tests needed to satisfy acceptance criteria
