# newui Storybook

[Workspace](../../README.md)

This application is the initial development catalog for the [UI package](../../pkgs/ui/README.md). Its local dependency is declared as `newui: workspace:*`.

Configuration lives in `.storybook/`. Stories remain beside library code in `pkgs/ui/`, organized under the library's functional categories. The preview processes the library source stylesheet with Tailwind and provides a light/dark theme toolbar.

From `workspace/`, run `bun run dev` to start the catalog at `http://localhost:6006`. The server stays running until stopped with Ctrl+C. Run `bun run build:storybook` to generate this application's `storybook-static/` output.

The catalog starts with an introduction, provisional color tokens, and Button examples. Storybook is the development environment; the public website remains undecided.

## Node compatibility

Storybook 10.6.1 registers an asynchronous TypeScript loader that emits `DEP0205` on Node 26. The workspace carries a [versioned compatibility patch](../../patches/storybook@10.6.1.patch): it uses `registerHooks()` with synchronous file reads and TypeScript transforms where that API is available, retaining the original loader for older Node versions.

The patch is declared in `workspace/package.json` under `patchedDependencies`, so Bun applies it during installation. No warning filters or global Node settings are used. Remove the patch when upgrading to a Storybook release whose loader no longer needs it.

Validation on Node 26.5: the static Storybook build passes with deprecation tracing enabled and without `DEP0205`. The synchronous loader also handles TypeScript enums, relative JavaScript-to-TypeScript import resolution, and delegation to native modules. The patch reapplies cleanly to the original 10.6.1 files.

References: [upstream issue](https://github.com/storybookjs/storybook/issues/35336), [Node synchronous hooks](https://nodejs.org/api/module.html#moduleregisterhooksoptions), and [Bun dependency patches](https://bun.com/docs/pm/cli/patch).
