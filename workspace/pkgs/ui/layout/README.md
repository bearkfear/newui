# Layout

[Workspace](../../../README.md)

## Intent

Organize space, alignment, flow, and sizing independently of a specific page's content.

## Implemented inventory

| Resource  | Intent and initial format                         |
| --------- | ------------------------------------------------- |
| Container | Standardize maximum width and responsive margins. |
| Section   | Standardize spacing between sections.             |
| Resizable | Validated resizable panels using Ark Splitter.    |

## Ideas and references

Flex and Grid components are out of scope. Applications use native CSS flexbox and grid for these layouts. Media proportions use CSS aspect-ratio, demonstrated in Storybook under Layout / Media proportions; no AspectRatio component is planned.

Container and Section standardize page widths and section spacing and are implemented and validated by the user. Stack and AutoGrid additions are excluded by user decision; applications use CSS directly for spacing and item distribution. Existing responsive examples complete this area.

Define which primitives need their own component and which work better as a recipe or composition. Hero and Footer belong to [Compositions](../compositions/README.md), as they combine structure and content.

[Resizable](resizable/README.md) provides horizontal/vertical panels, optional grips, controlled sizes, and collapsible/nested compositions. The user approved the implementation and Storybook examples.

Source comparisons are recorded in [References](../../../references/README.md).
