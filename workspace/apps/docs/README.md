# Documentation application

The documentation site is a SolidStart application with server-side rendering. Pages are ordinary Solid components in `src/routes`; interactive examples use the newui components directly.

The app stylesheet uses Tailwind CSS 4 with the newui preset. Utilities written by the docs app stay unprefixed; the selected newui component styles retain the library's `nui:` prefix and are compiled through the PostCSS integration.

## Commands

Run these from `workspace/`:
- `bun run docs`: start the site at `http://localhost:5173`.
- `bun run build:docs`: build the client and server bundles.
- `bun run --cwd apps/docs typecheck`: check the docs app types.

The Portuguese pages use the root paths; English pages live under `/en/`.
