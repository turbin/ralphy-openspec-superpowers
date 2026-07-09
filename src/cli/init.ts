import type { Command } from "commander";
import inquirer from "inquirer";
import type { InitOptions, ToolId } from "../types";
import { detectExistingTools } from "../utils/detector";
import { ensureOpenSpecScaffold, installToolTemplates } from "../utils/installer";
import { resolveProjectDir } from "../utils/paths";
import { ensureRalphyFolders, getRalphyRoot } from "../core/folders";

function parseToolsArg(arg?: string): ToolId[] | undefined {
  if (!arg) return undefined;
  const parts = arg
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);

  const allowed: ToolId[] = ["cursor", "claude-code", "opencode", "kimi", "trae", "codex"];
  const tools: ToolId[] = [];
  for (const p of parts) {
    if ((allowed as string[]).includes(p)) tools.push(p as ToolId);
  }
  return tools.length ? tools : undefined;
}

async function promptForTools(defaultTools: ToolId[]): Promise<ToolId[]> {
  const { tools } = await inquirer.prompt<{ tools: ToolId[] }>([
    {
      type: "checkbox",
      name: "tools",
      message: "Which AI tools do you want to configure?",
      choices: [
        { name: "Cursor", value: "cursor" satisfies ToolId },
        { name: "Claude Code", value: "claude-code" satisfies ToolId },
        { name: "OpenCode", value: "opencode" satisfies ToolId },
        { name: "Kimi Code", value: "kimi" satisfies ToolId },
        { name: "Trae", value: "trae" satisfies ToolId },
        { name: "Codex", value: "codex" satisfies ToolId },
      ],
      default: defaultTools,
    },
  ]);
  return tools;
}

export function registerInitCommand(program: Command): void {
  program
    .command("init")
    .description("Initialize Ralph + OpenSpec workflow files in a project")
    .option("--dir <path>", "Target project directory (default: current directory)")
    .option(
      "--tools <list>",
      "Comma-separated list: cursor,claude-code,opencode,kimi,trae,codex"
    )
    .option("--force", "Overwrite existing files", false)
    .action(async (opts: { dir?: string; tools?: string; force: boolean }) => {
      const options: InitOptions = {
        dir: resolveProjectDir(opts.dir),
        tools: parseToolsArg(opts.tools),
        force: opts.force,
      };

      const detected = await detectExistingTools(options.dir);
      const defaultTools =
        options.tools ??
        (detected.length
          ? detected
          : (["cursor", "claude-code", "opencode", "kimi", "trae", "codex"] as ToolId[]));
      const tools = options.tools ?? (await promptForTools(defaultTools));

      await ensureOpenSpecScaffold(options.dir);
      const hints = await installToolTemplates(options.dir, tools, { force: options.force });
      await ensureRalphyFolders(options.dir);

      process.stdout.write(
        `Initialized Ralph-OpenSpec in ${options.dir}\nConfigured tools: ${tools.join(
          ", "
        )}\n`
      );
      process.stdout.write(
        `\nNext steps for each tool:\n${hints.map((h) => `- ${h}`).join("\n")}\n\n`
      );
      process.stdout.write(
        `Artifact folder created: ${getRalphyRoot(options.dir)}\n` +
          `\n.gitignore suggestions:\n` +
          `- Commit: ${getRalphyRoot(options.dir)}/STATUS.md, ${getRalphyRoot(options.dir)}/TASKS.md, ${getRalphyRoot(options.dir)}/BUDGET.md\n` +
          `- Ignore: ${getRalphyRoot(options.dir)}/state.db, ${getRalphyRoot(options.dir)}/runs/, ${getRalphyRoot(options.dir)}/logs/, ${getRalphyRoot(options.dir)}/worktrees/\n`
      );
    });
}

