# newui workspace

This directory contains the development environment, applications, library package, and contributor documentation. Run `bun install` here to install all workspace dependencies.

## Structure

- [UI package](pkgs/ui/README.md): components, recipes, foundations, utilities, documentation, and colocated stories.
- [Storybook application](apps/storybook/README.md): the interactive component catalog.
- [Philosophy](philosophy.md): purpose and organizational principles.
- [Architecture](architecture.md): technical choices and implementation layers.
- [Dependency map](dependencies.md): module layers, cross-area reuse, and distribution boundaries.
- [Continuous integration](ci.md): checks and package artifacts.
- [Publishing](publishing.md): release preparation and automated OIDC publishing.
- [References](references/README.md): design inspirations and attribution.
- [Project conventions](../conventions/): current development agreements.

## Commands

Run these commands from `workspace/`:
- `bun run dev` or `bun run storybook`: start Storybook at `http://localhost:6006`.
- `bun run check`: run Biome linting, formatting verification, and strict TypeScript checks.
- `bun run check:fix`: apply safe Biome fixes and organize imports.
- `bun run lint` / `bun run lint:fix`: lint without/with safe fixes.
- `bun run format` / `bun run format:check`: write/check formatting.
- `bun run typecheck`: check the UI package, stories, Storybook, existing tests, and build scripts.
- `bun run hooks:install`: install the pre-commit hook; `bun install` also runs this through `prepare`.
- `bun run build`: build the UI package in `pkgs/ui/dist/`.
- `bun run pack`: package the existing build and verify every public export target in `artifacts/newui-preview.tgz`.
- `bun run test:storybook`: run browser checks for the catalog, interactions, and accessibility.
- `bun run build:storybook`: generate the static catalog in `apps/storybook/storybook-static/`.

`package.json` coordinates the Bun workspaces; `tsconfig.base.json` shares compiler settings. Each application and package owns its manifest, configuration, and build output. GitHub's required workflow entry point lives in `.github/workflows/`; its commands and scripts live here.

## Quality checks

Biome enforces 250 lines per supported source file, 60 lines per function body, and cognitive complexity at most 15. Generated color values, build output, dependencies, patches, and local references are excluded. TypeScript uses strict mode, exact optional properties, checked indexed access, and unused-code checks. Build scripts have their own tooling type environment.

The pre-commit hook runs `bun run check` against the workspace without changing files. Format or fix issues before retrying a failed commit. See [code quality](../conventions/code-quality.md) for conventions and the distinction between implementation checks and new test creation.
