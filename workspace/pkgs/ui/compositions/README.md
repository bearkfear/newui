# Compositions

[Workspace](../../../README.md)

## Intent

Bring together component combinations that address complete interface scenarios. This area includes blocks, recipes, and examples; not every entry needs to become a public component.

## Inventory

| Composition           | Intent                                                 |
| --------------------- | ------------------------------------------------------ |
| Hero                  | Present the main content or opening of a page.         |
| Footer                | Organize the closing content and links of a page.      |
| Media Object          | Combine image, content, and actions.                   |
| Panel                 | Bring together filters, search, and compact lists.     |
| Action bar            | Arrange actions and information in a responsive row.   |
| Complete forms        | Demonstrate field grouping, help text, and validation. |
| Settings and listings | Exercise components in pages with real needs.          |

## Ideas and boundaries

Hero, Footer, Media Object, Panel, and ActionBar are implemented as compound compositions with recipes, native semantics, and existing typography/layout primitives. They await user validation. The action bar groups related actions; a potential Toolbar with its own behavior requires separate evaluation.

Each composition should explain which pieces it uses, how it responds to different widths, and what consumers can replace. Navbar's primary area is [Navigation](../navigation/README.md); Image/Figure and Box/Surface belong to [Content](../content/README.md).

Example pages will help validate the library. Website technology and design remain for later.

## Implemented compositions

- [Hero](hero/README.md): stacked or split opening section with optional media and actions.
- [Footer](footer/README.md): brand, responsive navigation groups, and metadata.
- [Media Object](media-object/README.md): thumbnail, content, and responsive actions.
- [Panel](panel/README.md): header, filters, list, content, and footer actions.
- [Action Bar](action-bar/README.md): contextual information and wrapping actions.

The public exports are `Hero`, `Footer`, `MediaObject`, `Panel`, and `ActionBar`, each with a `Root` and named parts. All use the existing Radix tokens and automatic themes. Application state remains outside the compositions.

Storybook's Compositions / Overview combines all five into a responsive workspace. Individual stories include editable variants, mobile and RTL views, local interaction examples, and native semantics. No new automated tests were added.
