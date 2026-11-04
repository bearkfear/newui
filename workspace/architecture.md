# Architecture

[Workspace](README.md)

## Purpose and agreed decisions

- Create newui, our own library of components, layouts, and compositions for SolidJS.
- Use Solid UI as the initial reference for the catalog, styles, and reusable code, while developing our own visual identity.
- Distribute the library initially as an installable package.
- Use `workspace/` as the development root, `apps/storybook/` for the catalog, and `pkgs/ui/` for the library, with tooling owned by each application or package; see [repository structure](../conventions/repository-structure.md).
- Use Ark UI for interactive component behavior. Do not use Kobalte, including as a fallback for missing Ark equivalents. Evaluate other maintained primitives when needed.
- Use Tailwind CSS for styles and tailwind-variants for recipes, slots, and variants.
- Adopt Radix Colors as the color system, with light and dark themes and semantic aliases.
- Use Lucide for Solid (`lucide-solid`) for interface icons, with named imports and the shared [iconography contract](pkgs/ui/foundations/iconography.md).
- Provide compound components such as `Accordion.Root`, `Accordion.Item`, `Accordion.ItemTrigger`, and `Accordion.ItemContent`.
- Use Storybook with SolidJS/Vite as the initial component development catalog; keep the future public website undecided.
- Incorporate the suggested Bulma additions accepted by the user: layouts, typography, navigation, files, and compositions. Each resource's format (component, variant, recipe, or example) follows the planning recommendations.
- Do not use Park UI/Panda CSS as the base. The user did not like Park's visual design.

Solid UI is a starting reference, with no obligation to follow every shadcn/ui update. The library will have its own API and design decisions.

## Proposed architectural direction

The [dependency map](dependencies.md) defines module layers, current cross-area reuse, and distribution boundaries. Follow the [dependency layer convention](../conventions/dependency-layers.md): catalog areas are not dependency layers, implementations import specific owning modules, and both runtime and type dependencies remain acyclic.
1. **Tokens:** Radix colors and semantic aliases; spacing, typography, radii, shadows, and motion.
2. **Recipes:** Tailwind classes organized with `tv()`, component variants, and slots.
3. **Components:** Solid wrappers around Ark and custom components for elements without complex behavior.
4. **Layouts:** organizational primitives and larger interface compositions.
5. **Catalog:** examples, documentation, and verification scenarios.

Preserve Ark's anatomy where appropriate. Create a Solid context layer to share variants between parts when needed: tailwind-variants slots organize classes but do not propagate properties between components.

Use complete class names that Tailwind can detect in recipes. Distribute compiled CSS with global Preflight and `nui`-prefixed utilities; see [style distribution](../conventions/style-distribution.md). Consumers do not compile the library's Tailwind classes.

Migrate by behavior and anatomy rather than replacing import names. Check DOM references, events, reactive properties, controlled and uncontrolled states, portals, and state attributes.

## Open decisions

- Dependencies for behaviors without a suitable Ark equivalent. Record each gap in its owning area before choosing an implementation.

Dependency compatibility and package consumption are tracked in [Getting started](pkgs/ui/getting-started/README.md); chart and table dependencies are tracked in [Data](pkgs/ui/data/README.md).

The optional [Tailwind integration](pkgs/ui/getting-started/tailwind.md) compiles selected prefixed library styles before the application's unprefixed Tailwind pass. Its preset shares public tokens with application utilities. The [consumer playground](apps/tailwind-playground/README.md) demonstrates runtime customization through public package entries.
