## ADDED Requirements

### Requirement: Ralphy MUST document the mapping from superpowers skills to Ralphy workflow stages

#### Scenario: A new contributor opens AGENTS.md and wants to know how superpowers relates to Ralphy

GIVEN the project uses OpenSpec + Ralph loop
WHEN the contributor reads AGENTS.md
THEN they see a section that maps each superpowers skill to a Ralphy command or phase

### Requirement: /ralphy-implement MUST encourage test-driven-development and requesting-code-review without breaking existing flow

#### Scenario: An agent runs /ralphy-implement

GIVEN the current /ralphy-implement command exists
WHEN the agent follows the updated command
THEN it is instructed to write failing tests before product code and to self-review before marking a task complete

### Requirement: /ralphy-validate MUST include lint review as part of requesting-code-review

#### Scenario: An agent runs /ralphy-validate

GIVEN the project has a user-supplied lint config or a default config for its language/framework
WHEN the agent follows /ralphy-validate
THEN it runs the configured linter, reports issues by severity, and blocks completion on critical lint errors until they are fixed or explicitly accepted by the user

#### Scenario: A project has no user lint config

GIVEN no project-level lint config is present
WHEN the agent follows /ralphy-validate
THEN it selects a default lint config appropriate to the detected language/framework (e.g. ESLint/Prettier for TypeScript/JavaScript, Ruff for Python, etc.) and runs it

### Requirement: The project MUST provide Kimi Code plugin scaffolding

#### Scenario: A Kimi Code user clones the repository

GIVEN the user has Kimi Code CLI installed
WHEN they install the plugin from the repo root
THEN the Ralphy commands are registered as Kimi slash commands and a session-start skill is loaded

#### Scenario: A user runs `ralphy-spec init --tools kimi`

GIVEN a project has been initialized with `ralphy-spec init --tools kimi`
WHEN the installation completes
THEN a `.kimi-plugin/` directory is created with `plugin.json`, command docs, and a session-start skill

### Requirement: The project MUST provide Trae CN project-level commands

#### Scenario: A Trae CN user opens the project in Trae IDE

GIVEN the project is opened in Trae CN
WHEN the agent reads `.trae/commands/`
THEN it discovers `/ralphy-plan`, `/ralphy-implement`, `/ralphy-validate`, `/ralphy-archive` slash commands

#### Scenario: A user runs `ralphy-spec init --tools trae`

GIVEN a project has been initialized with `ralphy-spec init --tools trae`
WHEN the installation completes
THEN a `.trae/commands/` directory is created with the four Ralphy slash commands

### Requirement: The project MUST provide Codex prompt scaffolding

#### Scenario: A Codex user opens the project in Codex CLI or app

GIVEN the project contains `.codex/prompts/`
WHEN the agent loads the prompts
THEN it discovers the four Ralphy workflow prompts

#### Scenario: A user runs `ralphy-spec init --tools codex`

GIVEN a project has been initialized with `ralphy-spec init --tools codex`
WHEN the installation completes
THEN a `.codex/prompts/` directory is created with the four Ralphy prompts

### Requirement: The `ralphy-spec init` command MUST support Kimi, Trae, and Codex as installable tools

#### Scenario: A user runs `ralphy-spec init --tools kimi,trae,codex`

GIVEN the user passes a comma-separated list of tools
WHEN the command executes
THEN all three tool directories are installed alongside any other selected tools

#### Scenario: A user runs `ralphy-spec init` without `--tools` in a project that already has a `.kimi-plugin` directory

GIVEN the project already contains a `.kimi-plugin` directory
WHEN `init` runs without explicit tools
THEN `kimi` is included in the detected default tools

## MODIFIED Requirements

### Requirement: AGENTS.md MUST remain the single source of truth for Ralphy behavior while referencing superpowers

#### Scenario: A user asks an agent to implement a change

GIVEN the agent loads AGENTS.md
WHEN it reaches the superpowers section
THEN it continues to follow Ralphy's OpenSpec tasks as the authoritative source, using superpowers skills only as constraints or inspiration

## REMOVED Requirements

None.
