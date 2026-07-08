import fs from "node:fs/promises";
import path from "node:path";
import type { ToolId } from "../types";

async function exists(p: string): Promise<boolean> {
  try {
    await fs.access(p);
    return true;
  } catch {
    return false;
  }
}

export async function detectExistingTools(projectDir: string): Promise<ToolId[]> {
  const found = new Set<ToolId>();

  if (await exists(path.join(projectDir, ".cursor"))) found.add("cursor");
  if (await exists(path.join(projectDir, ".claude"))) found.add("claude-code");
  if (await exists(path.join(projectDir, "AGENTS.md"))) found.add("opencode");
  if (await exists(path.join(projectDir, ".kimi-plugin"))) found.add("kimi");
  if (await exists(path.join(projectDir, ".trae"))) found.add("trae");
  if (await exists(path.join(projectDir, ".codex"))) found.add("codex");

  return [...found];
}

