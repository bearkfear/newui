# newui

A SolidJS UI library with its own visual identity, using Solid UI as an initial reference and Ark UI for suitable interactive behaviors. The initial distribution will be an installable package.

## Development

Run the development commands from `workspace/`:

```sh
cd workspace
bun install
bun run dev
```

Storybook starts at `http://localhost:6006`. The server stays running until stopped with Ctrl+C. Applications live in `workspace/apps/` and library packages in `workspace/pkgs/`. Configuration, dependencies, and generated output stay inside `workspace/`.

Components, recipes, documentation, and stories live together in `workspace/pkgs/ui/`. Storybook loads source styles through Tailwind and provides a branded workshop with system/light/dark themes, automatic component documentation, accessibility checks, responsive viewports, and interactive examples. The catalog includes an introduction, workshop guide, color tokens, Button, and layout and typography primitives, plus button variants and groups.

- `bun run storybook`: start the component catalog.
- `bun run typecheck`: check library code, Storybook configuration, and stories.
- `bun run build`: generate the library modules, declarations, and compiled CSS in `workspace/pkgs/ui/dist/`.
- `bun run test:storybook`: validate stories, interactions, controls, themes, and accessibility in Chromium.
- `bun run build:storybook`: generate the static catalog in `workspace/apps/storybook/storybook-static/`.

Button, Container, Section, Heading, Text, and Prose are implemented. The layout and typography additions await user validation; colors and interaction states now use official Radix scales with automatic system themes. The library is not published. The future public website is a separate decision.

- [Workspace](workspace/README.md): philosophy, resource areas, architecture, roadmap, and references.
- [Getting started](workspace/pkgs/ui/getting-started/README.md): development and distribution details.
- [Conventions](conventions): current development rules, one convention per file.

External study material belongs in `workspace/references/_local/`, whose contents are ignored by Git except for its `.gitignore`.
