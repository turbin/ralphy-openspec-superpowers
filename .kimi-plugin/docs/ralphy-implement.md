# /ralphy-implement (Implement OpenSpec tasks)

You are implementing an OpenSpec change located under `openspec/changes/<change-name>/`.

## Goal

Complete all tasks in `tasks.md` and satisfy the acceptance criteria from the spec scenarios.

## Ralph loop compatibility

If this command is being executed in an iterative loop:
- Make progress each iteration
- Run tests frequently
- Only declare success when verification passes

## Steps

1. Identify the active change folder under `openspec/changes/`.
2. Read the change artifacts:
   - `proposal.md`
   - `tasks.md`
   - spec deltas under `specs/`
3. Implement tasks in order:
   - For each task, prefer test-driven-development (RED → GREEN → REFACTOR):
     - Write or update the failing test first
     - Run tests and confirm failure
     - Write the minimal code to make tests pass
     - Run tests and confirm pass
     - Refactor if needed
   - Add/update tests
   - Run tests
   - Request a quick code-review against the task and spec before marking complete
   - Mark tasks complete ONLY when verified

## Completion promise

Only output this exact text when ALL tasks are complete and tests pass:

<promise>TASK_COMPLETE</promise>
