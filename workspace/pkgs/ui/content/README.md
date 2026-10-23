# Content

[Workspace](../../../README.md)

## Intent

Present text, identity, and information, including their organization and disclosure within the page.

## Initial implementation

Heading, Text, and Prose are implemented with recipes, semantic tokens, and colocated Storybook examples. They await user validation before new automated tests are written.

## Inventory

- Heading, Text, and Prose.
- Card, Badge, Avatar, and Separator.
- Accordion and Collapsible.
- Timeline and Carousel.
- Image/Figure as a recipe or composition with framing and captions.
- Box/Surface as a recipe or variant, reusing Card where appropriate.

## Ideas and boundaries

Heading, Text, and Prose cover interface typography and editorial content. Image/Figure and Box/Surface are also accepted additions; their public names and final formats remain under evaluation.

Accordion and Collapsible belong here because they organize content presentation. Timeline presents a sequence; visualizations for comparing values belong to [Data](../data/README.md). Carousel is initially classified as Content, with behavior and composition still to be defined.

Typographic scales belong to [Foundations](../foundations/README.md). Interactive behavior mappings to Ark must be checked before implementation.
