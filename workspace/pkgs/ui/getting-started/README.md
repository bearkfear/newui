# Getting started

[Workspace](../../../README.md)

## Intent

Introduce newui and guide someone to their first use. This area may become the entry point for the future website.

## Local development

From the repository root, run `cd workspace`. Then run `bun install` and `bun run dev`. Storybook starts at `http://localhost:6006` and stays running until stopped with Ctrl+C. `bun run storybook` starts the same environment directly.

Stories live next to their implementation as `*.stories.tsx` files inside `workspace/pkgs/ui/`. Storybook configuration lives in `workspace/apps/storybook/.storybook/`. Applications and packages own their manifests and configuration, while `workspace/package.json` coordinates shared commands. The sidebar follows our areas: Getting started, Foundations, Layout, Content, Actions, Forms, Navigation, Overlays, Feedback, Data, and Compositions. Areas appear as stories are added.

The catalog includes foundations, layout, content, actions, navigation, overlays, feedback, native Table, and compound compositions. Colocated stories demonstrate public properties, states, themes, responsiveness, and composition. The theme toolbar switches between light and dark; component documentation links to related examples.

Storybook processes the source stylesheet with the same Tailwind PostCSS plugin used by the library build, so style changes are available during development without first building the npm package.

Run `bun run typecheck` to check the source, stories, and configuration. Run `bun run build:storybook` to generate the static catalog in `workspace/apps/storybook/storybook-static/`. Run `bun run build` to generate the library in `workspace/pkgs/ui/dist/`. Stories and catalog configuration are excluded from the library distribution.

## Distribution

The experimental distribution is `@egcs/newui`, with compiled CSS, global Preflight, and `nui`-prefixed utilities. Consumers import components and `@egcs/newui/styles.css`; Tailwind is optional for consuming applications. The package also exposes modular CSS selections and a shared-token preset for Tailwind applications. See [style distribution](../../../../conventions/style-distribution.md) and the [publishing guide](../../../publishing.md).

[Package entries](package-entries.md) documents the implemented main and area imports, public types, shared build chunks, and current CSS contract. Review the examples in **Getting started / Package consumption**.

[Consumer bundle measurements](bundle-sizes.md) records reproducible main/area comparisons, dependency elimination, shared Button bindings, and the separate full-stylesheet cost. Run `bun run --cwd pkgs/ui measure:bundles` after building.

[Source stylesheet graph](../styles/README.md) records internal component/area composition and deduplication. Review **Getting started / Modular styles** in isolated documents, and run `bun run --cwd pkgs/ui measure:styles` for CSS measurements.

[Tailwind integration](tailwind.md) documents public area selections, PostCSS setup, and the optional shared-token preset. [Runtime customization](theme-customization.md) covers palettes, geometry, appearance, and token ownership. Review **Getting started / Tailwind preset** in Storybook for the isolated interactive example.

## Planned consumer documentation

- What the library is, its goals, and the problems it aims to solve.
- Package installation and the stylesheet import.
- A first example using components, themes, and composition.
- How to customize variants and classes and find catalog resources.

## State and open questions

The implemented catalog has been validated incrementally by the user; see the [roadmap](../../../roadmap.md) for individual deliveries. Radix Colors, automatic system themes, and Ark-powered interactive behavior are established. Forms remain deferred. Resolve these details before publishing installation instructions:
- Replace the workspace Zag focus-visible patch through a compatible Ark upgrade and validate the packed package in a clean consumer without workspace patches.
- Standard registry installation and lockfile generation; registry access is restricted in the development sandbox.
- Final installation steps, package exports, and publishing metadata.

See [philosophy](../../../philosophy.md), [architecture](../../../architecture.md), and the [roadmap](../../../roadmap.md).

## Catalog and documentation

Use Storybook with the community SolidJS/Vite integration as the initial component development catalog. The public website's technology and design remain open.

Each component should grow alongside examples covering variants, sizes, relevant states, themes, composition, responsiveness, and code. Include keyboard and focus scenarios for interactive components. Target future tests at behavior and integration; avoid tests that only repeat class lists. Create or expand tests only after user validation and explicit authorization, following [implementation validation](../../../../conventions/implementation-validation.md).

Integration reference: [Storybook for SolidJS](https://storybook.js.org/addons/storybook-solidjs-vite).
