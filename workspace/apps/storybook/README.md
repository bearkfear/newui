# newui Storybook

[Workspace](../../README.md)

The component workshop for [newui](../../pkgs/ui/README.md), powered by SolidJS, Storybook 10, Vite, and Tailwind 4. Stories stay beside the library source; workshop presentation stays in this app. The library tsconfig includes colocated stories so editors apply Solid JSX types (`class`, not React `className`). `pkgs/ui/tsconfig.build.json` excludes stories specifically from distributed declarations.

## Run and validate

Run from `workspace/`:

```sh
bun install
bun run storybook
bun run typecheck
bun run build:storybook
bun run test:storybook
```

Storybook opens at `http://localhost:6006`. The static output is `apps/storybook/storybook-static/`. Before the first browser test, install Chromium from this directory with `bunx playwright install chromium`.

The Playwright suite starts a development server automatically, reusing port 6006 locally when it is already available. It discovers every story from the index, waits for Storybook's render/play/addon result, and checks WCAG A/AA rules in light and dark themes with axe. It also checks documentation, editable controls, manager/preview theme switching, and a 320px introduction. Screenshots and failure traces are written to ignored `test-results/`; `bun run test:ui` here opens the interactive runner. Automated checks complement manual keyboard and assistive technology reviews.

## Workshop features

- Local newui wordmarks and favicon, themed navigation, and a responsive introduction.
- System, light, and dark preview themes; the manager follows the same selection. Manager, documentation, controls, and previews share Radix Slate/Blue roles and follow the toolbar selection, including live system preference changes.
- Comfortable/compact/flush canvas padding, and reduced-motion simulation. Canvas padding does not modify component density. The reduced-motion override covers descendants of the preview wrapper; body-level portal content needs its own integration when introduced.
- Mobile (320px and 390px), tablet (768px), and desktop (1440px) viewports, plus Storybook's built-in zoom, measure, outlines, and grid tools. Independent background switching is disabled so component surfaces remain consistent with the selected theme.
- Autodocs, props descriptions and categories, source/code panels, controls, callback spies, and accessibility/vision tools. Storybook Links is available for future programmatic navigation.
- Button state/variant matrix, reactive counter, keyboard and disabled interaction assertions, custom tokens and mobile examples.
- Color swatches show resolved public token values and update with the active theme. Workshop-only surface variables are not public library tokens.

## Extending the catalog

Add `*.stories.tsx` next to a component in `pkgs/ui/`. Set `component`, `tags: ["autodocs"]`, explicit variant controls, default args, and descriptions. Use `fn()` from `storybook/test` for callback spies. Add new `play` functions or tests only after user validation and explicit authorization, following the project validation convention. JSX decorators must use the Solid adapter's `createJSXDecorator` to preserve reactive args/globals without duplicate mounts.

Navigation follows the library's functional categories. Empty categories are not fabricated. Use the Workshop guide story for the workflow. Colors use official Radix scales; the public website remains a separate decision.

Configuration lives in `.storybook/`: `main.ts` owns addons/build integration, `theme.ts` owns manager/docs branding, `manager.ts` synchronizes the manager theme, `docs-container.ts` synchronizes the React-based documentation container, and `preview.tsx`/`preview.css` own the component canvas. Static branding lives in `public/`; it uses relative URLs for subdirectory hosting. Typography uses local system stacks without external font requests.

References: [Storybook theming](https://storybook.js.org/docs/configure/user-interface/theming), [viewports](https://storybook.js.org/docs/essentials/viewport), and [accessibility](https://storybook.js.org/docs/writing-tests/accessibility-testing).

## Node compatibility

Storybook 10.6.1 registers an asynchronous TypeScript loader that emits `DEP0205` on Node 26. The workspace carries a [versioned compatibility patch](../../patches/storybook@10.6.1.patch): it uses `registerHooks()` with synchronous file reads and TypeScript transforms where that API is available, retaining the original loader for older Node versions.

The patch is declared in `workspace/package.json` under `patchedDependencies`, so Bun applies it during installation. No warning filters or global Node settings are used. Remove the patch when upgrading to a Storybook release whose loader no longer needs it.

Validation on Node 26.5: the static Storybook build passes with deprecation tracing enabled and without `DEP0205`. The synchronous loader also handles TypeScript enums, relative JavaScript-to-TypeScript import resolution, and delegation to native modules. The patch reapplies cleanly to the original 10.6.1 files.

References: [upstream issue](https://github.com/storybookjs/storybook/issues/35336), [Node synchronous hooks](https://nodejs.org/api/module.html#moduleregisterhooksoptions), and [Bun dependency patches](https://bun.com/docs/pm/cli/patch).
