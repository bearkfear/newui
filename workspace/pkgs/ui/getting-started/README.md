# Getting started

[UI package](../README.md) ·

[Workspace](../../../README.md)

Start with the [package guide](../README.md) for installation, a first form, stylesheet setup, and known limitations.

## Usage guides

- [Package entries](package-entries.md): main and area imports, public types, and shared build modules.
- [Tailwind integration](tailwind.md): area selections, PostCSS setup, and the optional shared-token preset.
- [Runtime customization](theme-customization.md): palettes, geometry, themes, and token ownership.
- [Consumer bundle measurements](bundle-sizes.md): JavaScript entry comparisons and the full-stylesheet cost.
- [Source stylesheet graph](../styles/README.md): style dependencies, area composition, and deduplication.

Import components and `@egcs/newui/styles.css` for the complete compiled stylesheet. Tailwind applications can instead select areas through the PostCSS integration. These are alternative stylesheet setups; see the guides for examples.

## Explore Storybook

From the repository root:

```sh
cd workspace
bun install
bun run dev
```

Open `http://localhost:6006`. The catalog groups examples by purpose: Foundations, Layout, Content, Actions, Forms, Navigation, Overlays, Feedback, Data, and Compositions.

Use Controls to edit props, Actions to inspect callbacks, and Documentation for API descriptions and source examples. The toolbar controls system/light/dark themes, viewports, canvas spacing, and reduced motion. Interactive examples demonstrate state and composition without requiring a backend.

**Getting started / Package consumption**, **Modular styles**, and **Tailwind preset** demonstrate the public distribution options. Component stories cover variants, themes, responsive behavior, and relevant states.

## Contribute examples

Stories live next to components as `*.stories.tsx` files. Storybook configuration and presentation live in `apps/storybook/`; neither is published in the library package.

Read the [project conventions](../../../../conventions/) before changing source. See the [Storybook guide](../../../apps/storybook/README.md) for catalog configuration and the [workspace guide](../../../README.md) for checks and builds.
