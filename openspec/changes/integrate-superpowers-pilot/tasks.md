- [x] 1. Research superpowers workflow and Kimi/Trae harness docs (external)
- [x] 2. Create branch `integrate-superpowers-pilot` and OpenSpec change folder
- [x] 3. Update `AGENTS.md` with superpowers-to-Ralphy mapping + Kimi/Trae notes
- [x] 4. Update `.claude/commands/ralphy-implement.md` to reference TDD + code-review
- [x] 5. Create `.kimi-plugin/` scaffolding (`plugin.json`, `SKILL.md`, command files)
- [x] 6. Create `.trae/commands/` project-level slash commands
- [x] 7. Run `npm test` and fix any failures
- [x] 8. Update this checklist and run final verification
- [x] 9. Adjust lint review to `/ralphy-validate` stage with user-config + default fallback

## Test plan (verified)

- [x] `npm test` passes: 7 files, 10 tests passed.
- [x] `plugin.json` is valid JSON.
- [x] `.trae/commands/` contains `ralphy-plan.md`, `ralphy-implement.md`, `ralphy-validate.md`, `ralphy-archive.md`.
- [x] `AGENTS.md` contains the new superpowers mapping section.
- [x] `.gitignore` excludes `graphify-out/`.
- [x] `/ralphy-validate` instructions in `.claude/commands/`, `.trae/commands/`, `.kimi-plugin/docs/`, and `.cursor/prompts/` include lint review steps.
- [x] `docs/lint-guide.md` documents user-configured lint and default lint by language/framework.
