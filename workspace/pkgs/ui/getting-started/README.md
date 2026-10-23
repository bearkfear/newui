# Getting started

[Workspace](../../../README.md)

## Intent

Introduce newui and guide someone to their first use. This area may become the entry point for the future website.

## Local development

From the repository root, run `cd workspace`. Then run `bun install` and `bun run dev`. Storybook starts at `http://localhost:6006` and stays running until stopped with Ctrl+C. `bun run storybook` starts the same environment directly.

Stories live next to their implementation as `*.stories.tsx` files inside `workspace/pkgs/ui/`. Storybook configuration lives in `workspace/apps/storybook/.storybook/`. Applications and packages own their manifests and configuration, while `workspace/package.json` coordinates shared commands. The sidebar follows our areas: Getting started, Foundations, Layout, Content, Actions, Forms, Navigation, Overlays, Feedback, Data, and Compositions. Areas appear as stories are added.

The initial catalog includes an introduction, color tokens, and Button examples with editable properties, a reactive counter, and scoped token overrides. The theme toolbar switches between light and dark. This setup uses Storybook's core features without extra addons.

Storybook processes the source stylesheet with the same Tailwind PostCSS plugin used by the library build, so style changes are available during development without first building the npm package.

Run `bun run typecheck` to check the source, stories, and configuration. Run `bun run build:storybook` to generate the static catalog in `workspace/apps/storybook/storybook-static/`. Run `bun run build` to generate the library in `workspace/pkgs/ui/dist/`. Stories and catalog configuration are excluded from the library distribution.

## Distribution

The initial distribution will be an installable package with compiled CSS, global Preflight, and `nui`-prefixed utilities. Consumers import components and `newui/styles.css`; Tailwind is a development dependency of the library. The library package manifest in `workspace/pkgs/ui/` is currently named `newui`, with publishing disabled. Registry name availability and publishing details remain unverified. See [style distribution](../../../../conventions/style-distribution.md).

## Planned consumer documentation

- What the library is, its goals, and the problems it aims to solve.
- Package installation and the stylesheet import.
- A first example using components, themes, and composition.
- How to customize variants and classes and find catalog resources.

## State and open questions

An initial Button is available, with provisional colors and component contracts. Define these details before publishing installation instructions:

- Dependency compatibility beyond the initial component, including Ark integration.
- Standard registry installation and lockfile generation; registry access is restricted in the development sandbox.
- Final installation steps, package exports, and publishing metadata.

See [philosophy](../../../philosophy.md), [architecture](../../../architecture.md), and the [roadmap](../../../roadmap.md).

## Catalog and documentation

Use Storybook with the community SolidJS/Vite integration as the initial component development catalog. The public website's technology and design remain open.

Each component should grow alongside examples covering variants, sizes, relevant states, themes, composition, responsiveness, and code. Include keyboard and focus scenarios for interactive components. Target future tests at behavior and integration; avoid tests that only repeat class lists.

Integration reference: [Storybook for SolidJS](https://storybook.js.org/addons/storybook-solidjs-vite).
