<div align="center">

# newui

**A considered foundation for SolidJS interfaces.**

Composable components, a shared visual language, and room to make it yours.

[Explore the library](workspace/pkgs/ui/README.md) · [Our philosophy](workspace/philosophy.md) · [Contribute](#contributing)

</div>

## From a single button to a complete page

newui is a UI library for SolidJS, bringing everyday controls, layout primitives, and page compositions into one cohesive system. It gives typography, spacing, color, and interaction a shared language so the pieces feel at home together.

The experimental package is available as [@egcs/newui](https://www.npmjs.com/package/@egcs/newui). APIs may change, Forms is incomplete, and the known focus-visible issue remains documented in the [package changelog](workspace/pkgs/ui/CHANGELOG.md).

```sh
bun add @egcs/newui@next solid-js
```

See the [package guide](workspace/pkgs/ui/README.md) for component imports, compiled CSS, Tailwind integration, and runtime customization.

## Built with care

- **Composition first.** Small, focused pieces work together across controls, content, navigation, and complete page layouts.
- **Thoughtful interaction.** Native semantics and suitable Ark UI primitives support keyboard navigation, focus management, and accessible behavior.
- **A consistent palette.** Radix Colors power semantic tokens, with system, light, and dark themes and support for nested theme scopes.
- **Your visual language.** Component variants and public `--nui-*` tokens provide the customization foundation.
- **Styles included.** The library build ships compiled CSS, so consuming applications do not need Tailwind. The stylesheet includes a page-wide reset.

## Explore the collection

The current collection includes buttons and button groups; containers and sections; typography, avatars, badges, cards, and separators; responsive navigation; dialogs; and compositions such as Hero, Footer, Panel, MediaObject, and ActionBar.

Storybook brings these pieces together with interactive examples, theme switching, responsive viewports, and accessibility checks. Browse the [library guide](workspace/pkgs/ui/README.md) for installation and usage.

## Get started locally

With Bun installed, run these commands from your checkout:

```sh
cd workspace
bun install
bun run dev
```

Open [Storybook at localhost:6006](http://localhost:6006) to explore the library and try the examples.

All development commands run from `workspace/`:

| Command | Purpose |
| --- | --- |
| `bun run check` | Check formatting, linting, and TypeScript types |
| `bun run build` | Build the library and its compiled stylesheet |
| `bun run build:storybook` | Build the static component catalog |

See the [workspace guide](workspace/README.md) for the full command list and [getting started](workspace/pkgs/ui/getting-started/README.md) for distribution details.

## Contributing

Contributions can start with a small observation: an unclear example, a missing state, an awkward keyboard interaction, or a composition that could be easier to use. Bug reports, documentation improvements, and concrete usage examples all help shape the library.

Before changing code, read the [project conventions](conventions/) and [philosophy](workspace/philosophy.md). Keep implementation in `workspace/`, place component examples alongside their source, and include Storybook stories for UI changes. Follow the [implementation validation process](conventions/implementation-validation.md): make the change reviewable first, then add or expand automated tests after validation and explicit approval.

Development, documentation, and pull requests use English to give contributors a shared language. Start with the [architecture](workspace/architecture.md) to understand the technical choices, or explore `workspace/pkgs/ui/` to find a component you would like to improve.
