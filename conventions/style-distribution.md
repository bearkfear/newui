# Style distribution

## Rule

Build newui's Tailwind styles into CSS distributed with the npm package. Consumers import the components and `newui/styles.css` once; they do not need Tailwind to compile library styles.

Use the Tailwind prefix `nui`, producing utilities such as `nui:bg-primary`. Use `--nui-*` names for public design tokens.

Include global Tailwind Preflight in the distributed stylesheet. Its reset intentionally affects the consuming page; the utility prefix does not scope Preflight or guarantee complete CSS isolation.

Use variants and CSS tokens as the primary customization contracts. Consumer classes are additive; do not promise automatic conflict resolution for arbitrary utility overrides.

Maintain one complete compiled CSS distribution and an optional Tailwind consumer integration. Validate the packed package in a separate consumer before publishing.

Organize source styles as colocated `*.styles.css` component/support entries and area aggregators in `workspace/pkgs/ui/styles/`. Each component entry imports foundations, specific style dependencies, custom CSS, and explicit recipe `@source` files. Do not scan whole areas or catalog examples from the library stylesheet.

Keep the Tailwind engine and Preflight in compilation roots. Source component and area entries must not import Tailwind or add a reset. `foundations/base.css` owns the shared tokens and theme mappings; `foundations/styles.css` remains the complete stylesheet compilation entry.

Use the shared library import normalizer before Tailwind in the library build and Storybook. Resolve internal literal CSS imports once per compilation, reject cycles, retain original source bases, and report dependencies for watch mode. Tailwind imports alone do not guarantee deduplication of custom CSS.

Keep the raw component graph private. Export documented area selections through `newui/tailwind/<area>.css`, the optional application theme through `newui/tailwind/preset.css`, and the required consumer plugin through `newui/postcss`. Run that plugin before `@tailwindcss/postcss` to compile selected `nui:` utilities independently of the application's unprefixed utilities. The application owns Preflight in this mode; use it instead of the complete stylesheet.

Keep compiler peers optional for consumers of the complete stylesheet. Share the same theme mappings between components and the preset. Map named spacing, radius, typography, semantic colors, contextual elevation, motion, and focus utilities to public tokens; do not replace unrelated application theme values or promise automatic resolution of conflicting classes.

Independently compiled area stylesheets each contain shared foundations and utilities; concatenating them does not remove duplicates. Compose selected areas before compiling them together. Public selection descriptors use the compiler-owned `@newui` directive; Biome permits that directive by name while retaining unknown-at-rule checks.

## Rationale

A single CSS import keeps installation independent of the consumer's styling tools. Prefixing utilities reduces class collisions, and tokens allow customization without recompiling the library.

The source dependency graph prepares granular style consumption without changing the current public stylesheet contract. One compilation of that graph permits shared dependencies to be emitted once.
