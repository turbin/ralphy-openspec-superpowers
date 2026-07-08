export type ToolId = "cursor" | "claude-code" | "opencode" | "kimi" | "trae" | "codex";

export type InitOptions = {
  dir: string;
  tools?: ToolId[];
  force: boolean;
};

export type ValidationIssue = {
  level: "error" | "warning";
  message: string;
  path?: string;
};

