# Documentation application

The documentation site is a SolidStart application with server-side rendering. Files in `src/routes` mirror public URLs and delegate rendering to page components. Translated interface and page copy lives in `src/i18n/<locale>`, reusable interface pieces live in `src/components`, and the shared application shell lives in `src/layout`.

The `src/i18n` directory contains translated interface messages and generated locale utilities. `src/lib` contains framework independent helpers such as locale and path resolution. Keep page-specific sections under their owning page in `src/pages`.

The app stylesheet uses Tailwind CSS 4 with the newui preset. Utilities written by the docs app stay unprefixed; the selected newui component styles retain the library's `nui:` prefix and are compiled through the PostCSS integration.

## Commands

Run these from `workspace/`:
- `bun run docs`: start the site at `http://localhost:5173`.
- `bun run build:docs`: build the client and server bundles.
- `bun run --cwd apps/docs typecheck`: check the docs app types.

The Portuguese pages use the root paths; English pages live under `/en/`. Keep route files thin: they choose the locale and render the matching page.

## Search metadata

Each public page has localized metadata in `src/i18n/page-metadata.ts`. Add a corresponding entry when adding a public route so its canonical links, language alternates and sitemap entries use the same paths.

Set `VITE_DOCS_SITE_URL` to the public HTTPS origin at build time. The site uses this origin in canonical links, sharing metadata, structured data and `/sitemap.xml`. Local development uses the incoming request origin when the variable is unset. The `/robots.txt` endpoint advertises the sitemap for crawlers.
