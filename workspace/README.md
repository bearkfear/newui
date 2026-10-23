# newui workspace

This directory contains the development environment, applications, library package, and project planning. Run `bun install` here to install all workspace dependencies.

## Structure

- [UI package](pkgs/ui/README.md): components, recipes, foundations, utilities, documentation, and colocated stories.
- [Storybook application](apps/storybook/README.md): the initial component development catalog.
- [Philosophy](philosophy.md): purpose and organizational principles.
- [Architecture](architecture.md): technical choices and implementation layers.
- [Roadmap](roadmap.md): implementation sequence and checklists.
- [References](references/README.md): external foundations and temporary study material.
- [Project conventions](../conventions/): current development agreements.

## Commands

Run these commands from `workspace/`:

- `bun run dev` or `bun run storybook`: start Storybook at `http://localhost:6006`.
- `bun run typecheck`: check the UI package and Storybook application.
- `bun run build`: build the UI package in `pkgs/ui/dist/`.
- `bun run test:storybook`: run browser checks for the catalog, interactions, and accessibility.
- `bun run build:storybook`: generate the static catalog in `apps/storybook/storybook-static/`.

`package.json` coordinates the Bun workspaces; `tsconfig.base.json` shares compiler settings. Each application and package owns its manifest, configuration, and build output. No tooling is placed at the repository root.

## Planning

The library has an initial Button and Storybook examples. Other inventory entries remain planned or under evaluation. Open decisions live with their subject, and documentation grows alongside implementation. The future public website is still to be defined.
