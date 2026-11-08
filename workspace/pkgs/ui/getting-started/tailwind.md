# Tailwind consumer integration

[Package entries](package-entries.md) · [Runtime customization](theme-customization.md)

Use this optional mode with Tailwind 4.3.3+ and PostCSS 8.5+. Official releases use the npm `latest` tag and prereleases use `next`; local consumers can also install the generated tarball. Applications using only the compiled `@egcs/newui/styles.css` do not need these build dependencies.

## Configure

Install `@egcs/newui` and `solid-js`, plus `tailwindcss`, `@tailwindcss/postcss`, and `postcss` as development dependencies. Configure `postcss.config.mjs` in this order:

```js
import newui from "@egcs/newui/postcss";
import tailwind from "@tailwindcss/postcss";

export default { plugins: [newui(), tailwind()] };
```

In the application's entry stylesheet:

```css
@import "tailwindcss";
@import "@egcs/newui/tailwind/preset.css";
@import "@egcs/newui/tailwind/actions.css";
@import "@egcs/newui/tailwind/forms.css";
```

Import that stylesheet once from the application entry. Continue importing components from `@egcs/newui/actions`, `@egcs/newui/forms`, or other JavaScript entries. Use this mode instead of importing the complete `@egcs/newui/styles.css`; the application owns Preflight.

## Select styles and adopt tokens

CSS entries are available for Actions, Forms, Content, Layout, Navigation, Overlays, Feedback, Data, Charts, and Compositions, named `@egcs/newui/tailwind/<area>.css`. Foundations are included by area dependencies. `@egcs/newui/tailwind/foundations.css` also works on its own for tokens and themes.

The optional `preset.css` maps application utilities to the newui tokens. Omit it to preserve your application's Tailwind theme while styling library components independently. The selected library areas still compile with their own theme mappings and `nui:` prefix. Import the preset even without components to use just the shared application theme.

| Shared contract                      | Application utilities                                                                                                        |
| ------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------- |
| Semantic colors and six status tones | `bg-surface`, `text-foreground`, `border-border`, `bg-primary-soft`, `text-primary-text`, `text-on-primary`                  |
| Numeric spacing and sizing           | `p-4`, `gap-2`, `m-6`, numeric `w-*` and `h-*`                                                                               |
| Radius scale                         | `rounded-xs` through `rounded-4xl`                                                                                           |
| Typography                           | `font-sans`, `font-mono`, `text-xs` through `text-5xl`, normal/medium/semibold weights, named line heights, `tracking-tight` |
| Contextual elevation                 | `shadow-elevated`, `shadow-overlay`, `shadow-popover`, `shadow-tooltip`, `shadow-hover-card`, `shadow-toast`                 |
| Motion and focus                     | default transition duration/easing, `ease-ui`, `motion-reduce:*`, `focus-visible:focus-ring`                                 |

Existing Tailwind palettes, breakpoints, and unrelated utilities remain available. Public CSS variables are the shared customization contract; preset-backed utilities read them where used. Explicit arbitrary values and fixed pill radii keep their own meaning.

## Compilation and scope

The PostCSS plugin compiles the selected library graph separately, without Preflight or scanning application files, and inserts it before application overrides. The following Tailwind pass compiles application utilities normally. This preserves both `nui:px-4` and `px-4`, deduplicates shared library dependencies, and keeps a single application reset. Public CSS files select areas; they are not standalone browser stylesheets.

Use plain imports in the entry stylesheet. Vite's CSS import pipeline is supported; for a direct PostCSS pipeline, keep selection imports at the root rather than inside another imported application file. Do not layer, prefix, or condition these selection imports. This implementation supports the documented PostCSS pipeline; Tailwind 3, CLI-only compilation, and the native Tailwind Vite plugin are not validated.

## Storybook examples

Run `bun run dev` from `workspace/` and open **Getting started / Tailwind preset** in Storybook. The example compiles selected library areas and application utilities in an isolated document, with interactive palette, spacing, radius, and appearance controls.
