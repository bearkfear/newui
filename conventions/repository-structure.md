# Repository structure

## Rule

Keep the development environment inside `workspace/`. Use `workspace/apps/` for applications and `workspace/pkgs/` for packages. Do not place tooling configuration at the repository root.

Keep components, recipes, contracts, utilities, and colocated stories in `workspace/pkgs/ui/`. Start with this single library package; extract others only when actual reuse justifies them.

Each application and package owns its manifest, configuration, and generated output. Storybook lives in `workspace/apps/storybook/`, including its `.storybook/` configuration. The library owns its build script and `dist/` output.

Use `workspace/package.json` to coordinate installation and commands, and `workspace/tsconfig.base.json` for shared compiler settings. Use an explicit package file list so planning, stories, and tooling are not published.

Run shared commands from `workspace/`. Keep project conventions in the root `conventions/` directory, with the root README and Git metadata at the repository level.

## Rationale

Applications and distributable code have separate responsibilities while sharing one development environment. Documentation stays near its implementation, and the repository root remains free of tool configuration.
