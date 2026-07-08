# Lint Configuration Guide for Ralphy-OpenSpec

This document describes how `/ralphy-validate` discovers and runs lint tooling.

## User-configured lint (preferred)

If the project already contains a lint configuration, `/ralphy-validate` uses it directly.

| Language / Framework | Common config files |
|----------------------|---------------------|
| TypeScript / JavaScript | `eslint.config.*`, `.eslintrc*`, `.prettierrc*`, `package.json` eslint/prettier section |
| Python | `pyproject.toml` (ruff/black section), `ruff.toml`, `.flake8`, `.pylintrc` |
| Rust | `rustfmt.toml`, `clippy.toml`, `biome.json` |
| Go | `.golangci.yml`, `go.mod` |
| Ruby | `.rubocop.yml` |
| Java / Kotlin | `checkstyle.xml`, `ktlint` config |

## Default lint (fallback)

If no user config is found, `/ralphy-validate` selects a minimal default linter based on the detected language/framework:

| Detected language/framework | Default linter | Default command |
|-----------------------------|----------------|-----------------|
| TypeScript / JavaScript / Node.js | ESLint + Prettier | `npx eslint .` (and `npx prettier --check .` if prettier is installed) |
| Python | Ruff | `ruff check .` |
| Rust | Clippy + rustfmt | `cargo clippy` and `cargo fmt --check` |
| Go | golangci-lint | `golangci-lint run` |
| Ruby | RuboCop | `rubocop` |
| Java / Kotlin | ktlint / Checkstyle (if available) | `ktlint` or `mvn checkstyle:check` |

## Severity handling

- **Error**: must be fixed or explicitly accepted by the user before validation passes.
- **Warning**: should be fixed; can be deferred with user approval.
- **Info / Suggestion**: advisory only; report but do not block validation.

## Disabling lint in validate

If the user explicitly says to skip lint, record the decision in the validation output and proceed with tests only. Do not silently skip lint.
