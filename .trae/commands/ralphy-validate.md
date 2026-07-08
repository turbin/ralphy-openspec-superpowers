# /ralphy-validate (Acceptance criteria)

Validate that the active OpenSpec change meets its acceptance criteria.

## Steps

1. Identify the active change folder under `openspec/changes/`.
2. Read `tasks.md` and spec deltas under `specs/`.
3. Map each scenario/acceptance criterion to a test or deterministic command.
4. Run the project test command (commonly `npm test`).
5. Run lint review:
   - Detect the project's lint configuration (e.g. `eslint.config.*`, `.eslintrc*`, `biome.json`, `ruff.toml`, `pyproject.toml` lint section, etc.).
   - If a user-supplied lint config exists, run the corresponding linter.
   - If no config exists, select a default linter appropriate to the detected language/framework (e.g. ESLint for TypeScript/JavaScript, Ruff for Python, Biome for Rust/JS, etc.) and run it with a minimal, reasonable default config.
   - Report lint issues by severity (error / warning / info).
   - Critical lint errors must be fixed or explicitly accepted by the user before marking the change validated.
6. Report which requirements are proven and what gaps remain.
7. Update `tasks.md` checkboxes only when verification passes.

## Output

- Summary of proven requirements
- Lint summary (config used, errors, warnings, suggestions)
- List of gaps, if any
- Recommendation: proceed to `/ralphy-archive` or fix remaining gaps
