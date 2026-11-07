# Architecture

[Workspace](README.md)

## Stack

newui is a SolidJS component library distributed as one npm package, `@egcs/newui`.
- SolidJS owns component rendering and reactive composition.
- Ark UI Solid supplies interactive behavior, keyboard navigation, focus management, and accessible associations where suitable primitives exist.
- Native HTML supplies links, text controls, lists, and presentational tables.
- Tailwind CSS and tailwind-variants express styles, slots, and variants.
- Radix Colors supplies light/dark scales mapped to public semantic tokens.
- Lucide for Solid supplies interface icons; see [iconography](pkgs/ui/foundations/iconography.md).
- Unovis supplies chart rendering; see [Charts](pkgs/ui/data/chart/README.md).
- IMask supplies opt-in pattern masking and decimal editing; see [MaskedInput](pkgs/ui/forms/masked-input/README.md), [NumberInput](pkgs/ui/forms/number-input/README.md) and [CurrencyInput](pkgs/ui/forms/currency-input/README.md).
- Storybook with SolidJS/Vite provides interactive documentation and component examples.

## Repository and module layers

Development lives in `workspace/`, with the catalog in `apps/storybook/` and the library in `pkgs/ui/`. Each owns its configuration and generated output; see [repository structure](../conventions/repository-structure.md).

The [dependency map](dependencies.md) documents module ownership and cross-area reuse. Catalog areas group components by use; they are not dependency layers. Implementations import specific owning modules, with acyclic runtime and type dependencies.
1. **Foundations:** palettes, semantic tokens, shared metrics, themes, and utility mappings.
2. **Support modules:** recipes, contexts, contracts, and rendering helpers.
3. **Components:** native elements and Solid wrappers around interactive primitives.
4. **Compositions:** combinations of components for larger interface structures.
5. **Catalog:** examples and documentation consuming the library.

Compound components expose named parts such as `Accordion.Root` and `Accordion.Item`. Solid context shares variants between parts; recipe slots define classes without propagating properties.

Preserve primitive refs, events, reactive properties, controlled/uncontrolled state, portals, and state attributes. Record primitive mappings and behavior gaps in the owning area's documentation; see [interactive behavior](../conventions/interactive-behavior.md).

## Distribution and customization

Public main and area entries share implementations. The DOM-independent `@egcs/newui/masking` and `@egcs/newui/numbers` entries support text and decimal/currency helpers in Node and browsers. Component entries remain client entries; see [package entries](pkgs/ui/getting-started/package-entries.md).

The complete stylesheet ships compiled CSS with global Preflight and `nui`-prefixed utilities. Consumers can use it without Tailwind. The optional [Tailwind integration](pkgs/ui/getting-started/tailwind.md) compiles selected library areas alongside application styles and offers a shared-token preset.

Public `--nui-*` tokens and variants control appearance. System, explicit, and nested themes share the same mappings; see [runtime customization](pkgs/ui/getting-started/theme-customization.md).
