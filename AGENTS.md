# Agent instructions

Read and follow the project conventions in `conventions/` before making changes.
Keep tooling and implementation inside `workspace/`.

Implement the requested code first and provide reviewable Storybook examples where relevant.
Do not create or expand automated tests before the user explicitly states that the component or requested implementation is approved. Do not infer approval from discussion, adjustment requests, silence, or passing checks.
At implementation handoff, tests may be suggested; wait for explicit user approval before writing them.
Existing tests, type checks, and builds may be run without adding new tests.
See [implementation validation](conventions/implementation-validation.md).

Use `agent-browser` for browser-based review when it is available.
Build the documentation site with components and patterns from the UI kit. When
creating or updating interfaces in the docs project, use NewUI components and
compositions as much as possible; avoid custom implementations whenever a
NewUI component or pattern can serve the need.
When work reveals UI kit defects or useful improvements, report them to the user
and ask whether to record them for follow-up or fix them in the library.
Use kebab-case for filenames whenever the framework or tooling does not require
a different naming convention.
