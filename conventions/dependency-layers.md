# Dependency layers

## Rule

Keep the library's local module dependencies acyclic, including type-only imports. Apply this rule to distributable implementation modules; stories, application examples, and build tooling consume the library but are not its implementation layers.

Separate catalog areas from dependency layers. Actions, Forms, Content, Navigation, Overlays, Feedback, Data, and Layout may contain both independent and composed components. An area name does not authorize importing the whole area.

Use these responsibilities:

- Visual foundations own palettes, semantic tokens, themes, and shared metrics. They do not import components or component styles.
- Support modules own recipes, contracts, contexts, and specific rendering helpers. They may depend on other support modules and external primitives, but not on the components they support.
- Components may depend on foundations, support modules, and other components when the resulting module graph is acyclic.
- Interface compositions may depend on components and support modules. Components and support modules must not import interface compositions.
- Public entry points re-export implementations. Implementations must not import the package root, public area aggregators, or the package's own published name.

Import the smallest owning module through extensionless relative paths; see [source imports](source-imports.md). Reuse its implementation rather than copying it. A module may stay in its owning area even when another area consumes it; do not create a generic shared package merely to move a dependency.

Define shared types and defaults in a lower-level contract, recipe, or context when importing them from a component would create a cycle. Re-export public types from their existing entry points to preserve consumer APIs.

Treat CSS dependencies separately from JavaScript imports. Foundations must remain reusable without importing the component catalog. Stylesheet entry points may aggregate foundations, component CSS, and recipe sources; they are distribution roots, not visual foundations.

Record cross-area dependencies and shared support responsibilities in the [dependency map](../workspace/dependencies.md). Review new edges for cycles, reverse composition dependencies, and unnecessarily broad imports before adding them.

Keep third-party dependencies explicit in their owning modules. External primitives and recipe utilities are allowed; foundations being independent means independent of newui components, not independent of development tools or upstream color data.

## Rationale

A directed module graph permits reuse without making catalog areas depend on each other wholesale. Shared module identities prepare the source for modular entry points, while actual bundle deduplication and tree shaking remain build and consumer validation responsibilities.

## Examples

InputGroup may import the button options context and Loading directly. It does not need to import every action or feedback component. Sidebar may compose Resizable and Sheet without those components depending on Sidebar.

`foundations/styles.css` is the complete compilation entry despite its location. It imports the area graph through `styles/index.css`. The independent visual foundation layer is `foundations/base.css` and its token/metric dependencies; see [style distribution](style-distribution.md).
