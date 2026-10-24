# Bulma

[References](README.md)

## Role in the project

Reference for layout, content, navigation, and composition needs that complement the initial catalog. This does not imply porting Bulma's Sass, mixins, or palette system.

## Accepted directions

| Destination                                       | Ideas                                                         |
| ------------------------------------------------- | ------------------------------------------------------------- |
| [Layout](../pkgs/ui/layout/README.md)             | Container, Section, Stack, AutoGrid, and responsive patterns. |
| [Content](../pkgs/ui/content/README.md)           | Heading, Text, Prose, Image/Figure, and Box/Surface.          |
| [Actions](../pkgs/ui/actions/README.md)           | CloseButton as an IconButton variant.                         |
| [Forms](../pkgs/ui/forms/README.md)               | Field, InputGroup, field groups, and File Upload.             |
| [Navigation](../pkgs/ui/navigation/README.md)     | Navbar and the static vertical menu.                          |
| [Compositions](../pkgs/ui/compositions/README.md) | Hero, Footer, Media Object, Panel, and the action bar.        |

Icon standardization belongs to [Foundations](../pkgs/ui/foundations/README.md). Proposed formats and priorities are in the [detailed comparison](#bulma-differences-from-solid-ui). The first additions (Container, Section, Heading, Text, and Prose) are implemented and await user validation; Hero, Footer, Media Object, Panel, and the action bar are also implemented with Storybook examples and await user validation; Navbar and VerticalMenu are also implemented with Ark-powered behavior and await user validation; the other additions remain planned.

## Material and provenance

Temporary material: `_local/bulma/`, ignored by Git. No Bulma source code has been incorporated. The first primitives are original implementations using the accepted needs as design references.

The comparison was recorded on 2026-10-23. Links are in the [sources](sources.md). Record origins and dates for future consultations in new notes.

## Bulma: differences from Solid UI

This compares the official catalogs; it does not claim that a feature is impossible with Solid UI.
“No dedicated equivalent” means there was no separate entry in the catalog consulted.
The user accepted these additions. The recommendations define each resource's initial format; the first five primitives are implemented and await user validation.

| Bulma                             | Solid UI coverage                                           | Accepted direction                                                                                            |
| --------------------------------- | ----------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| Container                         | No dedicated equivalent                                     | Prioritize standardized maximum width and responsive margins.                                                 |
| Section                           | No dedicated equivalent                                     | Prioritize consistent spacing between sections.                                                               |
| Hero                              | No dedicated equivalent                                     | Implement as a composed block after the basic elements.                                                       |
| Footer                            | No dedicated equivalent                                     | Implement as a composition and page example.                                                                  |
| Level                             | Flex covers part of the structure                           | Create an action bar composition; evaluate a Toolbar with its own behavior separately.                        |
| Media Object                      | Avatar, Flex, and Card cover parts                          | Create a composition for image, content, and actions.                                                         |
| Content                           | No dedicated equivalent                                     | Prioritize Prose for editorial HTML and Markdown/CMS content.                                                 |
| Title / Subtitle                  | No dedicated equivalent                                     | Prioritize Heading and Text; subtitles can be a variant/composition.                                          |
| File                              | No dedicated equivalent                                     | Implement File Upload with Ark behavior and our own visual design.                                            |
| Navbar                            | Navigation Menu and Sidebar cover parts                     | Implement horizontal navigation that adapts to small screens.                                                 |
| Vertical menu                     | Sidebar and Navigation Menu cover parts                     | Implement link groups with headings and nested items; distinguish static navigation from an ARIA action menu. |
| Panel                             | Card, Tabs, and fields cover parts                          | Implement a composed block for filters, search, and compact lists.                                            |
| Field / Control and groups        | Text Field covers part of the problem                       | Standardize Field, Input Group, and horizontal form compositions.                                             |
| Image                             | Aspect Ratio and Avatar cover parts                         | Include an Image/Figure recipe/composition with framing and captions.                                         |
| Box                               | Card and utilities cover much of it                         | Cover generic surfaces with a recipe/variant; reuse Card where appropriate.                                   |
| Block                             | Spacing through Tailwind/Flex                               | Include Stack as a composition for consistent spacing.                                                        |
| Delete                            | Reusable close button                                       | Include CloseButton as an IconButton variant with an accessible name.                                         |
| Icon                              | Icons and utilities cover the purpose                       | Standardize size and alignment; do not create an icon library.                                                |
| Columns / Smart Grid / Fixed Grid | Flex and Grid cover parts; Tailwind provides the mechanisms | Provide responsive patterns and examples; include an AutoGrid recipe for automatic item distribution.         |
| CSS helpers                       | Tailwind covers most                                        | Use existing utilities and our own tokens.                                                                    |

### Overlaps that do not automatically justify new components

- Notification/Message are close to Alert/Callout; compare usage and composition.
- Tag largely corresponds to Badge.
- Modal corresponds to Dialog.
- Breadcrumb, Button, Card, Dropdown, Pagination, Progress, Table, and Tabs already have Solid UI references.
- Input, Select, Checkbox, and Radio already have references; distinguish native selection from a custom Select.
- Textarea already appears as `TextFieldTextArea` in Solid UI documentation, although it has no separate menu entry.
- Themes are implemented; Skeleton was excluded by user decision. Neither is a gap unique to Bulma.
- Media proportions use CSS aspect-ratio; no AspectRatio component will be added.
- Flex and Grid components are out of scope; applications use CSS directly for these layouts.
- Bulma's Sass mixins and palette generation will not be ported: the chosen stack uses Tailwind and Radix Colors.

### Priorities for accepted additions

1. **First:** Container, Section, Heading, Text, and Prose.
2. **Alongside forms:** the Field contract, Input Group, and File Upload.
3. **After primitives:** Navbar and the vertical menu.
4. **Initially as blocks or recipes:** Hero, Footer, Media Object, Panel, and the action bar.
5. **As recipes, variants, or lightweight compositions:** Box/Surface, Image/Figure, CloseButton, Stack, icon standardization, and AutoGrid.
