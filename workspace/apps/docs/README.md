# Documentation application

The first SolidBase site for `@egcs/newui`. Its custom theme uses newui components and tokens; component examples import the library directly. The documentation theme does not use Kobalte components.

The app stylesheet uses Tailwind CSS 4 with the newui preset. Utilities written by the docs app stay unprefixed; the selected newui component styles retain the library's `nui:` prefix and are compiled through the PostCSS integration.

## Commands

Run these from `workspace/`:
- `bun run docs`: start the site at `http://localhost:5173`.
- `bun run build:docs`: build the client and server bundles.
- `bun run --cwd apps/docs typecheck`: check the docs app types.

SolidBase uses SolidJS 1.9 and SolidStart 2 in this app. The current page is English while language routing is deferred.
