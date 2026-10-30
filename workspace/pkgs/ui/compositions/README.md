# Compositions

[Workspace](../../../README.md)

## Intent

Bring together component combinations that address complete interface scenarios. This area includes blocks, recipes, and examples; not every entry needs to become a public component.

## Inventory

| Composition       | Intent                                                       |
| ----------------- | ------------------------------------------------------------ |
| Hero              | Present the main content or opening of a page.               |
| Footer            | Organize the closing content and links of a page.            |
| Media Object      | Combine image, content, and actions.                         |
| Panel             | Bring together filters, search, and compact lists.           |
| Action bar        | Arrange actions and information in a responsive row.         |
| Complete forms    | Planned with Forms in stage 7.                               |
| Settings          | Planned with Forms in stage 7.                               |
| Application pages | Analytics, Orders, Project, Service Status, and Help Center. |

## Ideas and boundaries

Hero, Footer, Media Object, Panel, and ActionBar are implemented as compound compositions with recipes, native semantics, and existing typography/layout primitives. They have been validated by the user. The action bar groups related actions; a potential Toolbar with its own behavior requires separate evaluation.

Each composition should explain which pieces it uses, how it responds to different widths, and what consumers can replace. Navbar's primary area is [Navigation](../navigation/README.md). Image/Figure, Box/Surface, Stack, and AutoGrid additions are excluded by user decision.

The final stage 6 collection adds [five complete application pages](pages/README.md), combining the expanded catalog with responsive navigation and local actions. These examples await user validation. Complete form and settings examples will accompany Forms in stage 7. Website technology and design remain for later.

## Implemented compositions

- [Hero](hero/README.md): stacked or split opening section with optional media and actions.
- [Footer](footer/README.md): brand, responsive navigation groups, and metadata.
- [Media Object](media-object/README.md): thumbnail, content, and responsive actions.
- [Panel](panel/README.md): header, filters, list, content, and footer actions.
- [Action Bar](action-bar/README.md): contextual information and wrapping actions.

The public exports are `Hero`, `Footer`, `MediaObject`, `Panel`, and `ActionBar`, each with a `Root` and named parts. All use the existing Radix tokens and automatic themes. Application state remains outside the compositions.

Storybook's Compositions / Overview combines all five into a responsive workspace. Individual stories include editable variants, mobile views, local interaction examples, and native semantics. No new automated tests were added.

Compositions / Pages includes Analytics, Orders, Project, Service Status, and Help Center, each with desktop/mobile stories and a shared navigable Sidebar. The examples add no public library API or form controls, respect the theme toolbar, and cover chart data alternatives, empty lists, record details, confirmations, and local exports. See the [page guide](pages/README.md) for the component map and review flows.
