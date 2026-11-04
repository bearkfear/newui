# Source stylesheet graph

[Package entries](../getting-started/package-entries.md) · [Style distribution](../../../../conventions/style-distribution.md)

## Entries and ownership

The complete stylesheet remains `newui/styles.css`. This directory contains private source aggregators. The optional [consumer integration](../getting-started/tailwind.md) exposes area selections and a shared-token preset through `newui/tailwind/*.css`, compiled by `newui/postcss` before the application's Tailwind pass.
- `foundations.css` imports `foundations/base.css`: official Radix palettes, semantic tokens, theme selection, metrics, and inline utility mappings.
- Actions, Content, Layout, Navigation, Overlays, Feedback, Forms, Data, and Compositions each have an area stylesheet.
- `charts.css` is separate from `data.css`, matching the JavaScript boundary.
- `index.css` composes the full catalog, including Charts.
- Colocated `*.styles.css` files import foundations, specific component/support dependencies, custom CSS, and explicit recipe sources. Shared styles remain with their owning area.

The compilation root `foundations/styles.css` imports Tailwind once with `prefix(nui) source(none)`, then the full graph. Component and area entries do not import Tailwind or Preflight. Light/dark behavior and runtime token overrides remain in shared foundations.

## Dependency examples

```text
Forms → Field, Input, Textarea, InputGroup
InputGroup → text controls, Button, Loading
Sidebar → Resizable, Sheet, Button, VerticalMenu
Counter → Badge
Toast → Callout, Loading, Button
Charts → Button, Empty → Heading, Text
```

Forms includes the action styles needed by InputGroup without importing action menus. Sidebar includes VerticalMenu's styling contract for compact navigation. Popover imports Dialog styles because its close trigger reuses the dialog recipe. Shared data captions, tones, and accessibility rules are separated from BarList and DeltaBar geometry.

Recipes register their own literal source files. Recipe dependencies such as disclosure, badge appearance, navigation links, progress tones, and Panel headers are included explicitly. Catalog-only pagination recipes are registered by Storybook's `library.css`, not by the library.

## Compilation and deduplication

Both the library build and Storybook run `scripts/style-imports.ts` before Tailwind. It expands plain relative CSS imports inside the library once per compilation, detects cycles, resolves recipe sources against their original files, and publishes dependency messages for watch mode. External Tailwind imports remain the compiler's responsibility.

The normalizer is necessary because repeated CSS imports can otherwise emit repeated custom rules. Selecting Actions and Forms in one compilation shares their Button and foundation nodes. Independently compiling both areas and concatenating the results does not provide the same guarantee. The public consumer plugin preserves normalization while compiling prefixed library utilities separately from application utilities, without adding another reset.

Tailwind generates utilities from registered class strings, not JavaScript imports or runtime variant selections. An area includes the recipes and variants of that area and its dependencies. See [Tailwind source detection](https://tailwindcss.com/docs/detecting-classes-in-source-files).

## Review and measurements

Run `bun run --cwd pkgs/ui measure:styles` from `workspace/`. It prints raw/gzip sizes, contributing modules, and repeated complete rule counts without assertions, thresholds, or generated files. With the current build:

| Selection             | Raw CSS bytes | Gzip bytes |
| --------------------- | ------------: | ---------: |
| Foundations and reset |         17678 |       4414 |
| Button                |         32785 |       6645 |
| Actions               |         38886 |       7735 |
| Forms                 |         44125 |       8527 |
| Actions + Forms       |         49879 |       9660 |
| Data without Charts   |         34344 |       7489 |
| Full catalog          |        120765 |      20410 |

All reported selections emit zero repeated complete rules. Source order can change rule grouping and compression while retaining the same dependencies. Open **Getting started / Modular styles** for isolated Actions, Forms, combined, dark, and mobile previews. Parent Storybook CSS cannot style the preview document. No automated tests were added.
