# Style distribution

## Rule

Build newui's Tailwind styles into CSS distributed with the npm package. Consumers import the components and `newui/styles.css` once; they do not need Tailwind to compile library styles.

Use the Tailwind prefix `nui`, producing utilities such as `nui:bg-primary`. Use `--nui-*` names for public design tokens.

Include global Tailwind Preflight in the distributed stylesheet. Its reset intentionally affects the consuming page; the utility prefix does not scope Preflight or guarantee complete CSS isolation.

Use variants and CSS tokens as the primary customization contracts. Consumer classes are additive; do not promise automatic conflict resolution for arbitrary utility overrides.

Maintain one compiled CSS distribution initially. Validate the packed package in a separate consumer before publishing.

## Rationale

A single CSS import keeps installation independent of the consumer's styling tools. Prefixing utilities reduces class collisions, and tokens allow customization without recompiling the library.
