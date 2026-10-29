# Content

[Workspace](../../../README.md)

## Intent

Present text, identity, and information, including their organization and disclosure within the page.

## Initial implementation

Heading, Text, and Prose are implemented with recipes, semantic tokens, and colocated Storybook examples. They have been validated by the user. New automated tests require separate explicit authorization.

[Card](card/README.md) is implemented with optional media, header actions, content, and simple/divided footers. Its Storybook examples await user validation.

[Badge](badge/README.md), [Separator](separator/README.md), and [Avatar](avatar/README.md) are implemented with reviewable examples. Badge uses native labels and controls; Avatar uses Ark UI for image state. They have been validated by the user.

[Accordion](accordion/README.md) and [Collapsible](collapsible/README.md) are implemented with Ark-powered disclosure, controlled/uncontrolled examples, optional indicators, and reduced-motion support. The user approved both implementations and their Storybook examples, including the revised content spacing.

## Inventory

- Heading, Text, and Prose.
- Card, Badge, Avatar, and Separator.
- [Counter](counter/README.md) for numeric notifications and unread counts; validated by the user.
- Accordion and Collapsible.
- [Timeline](timeline/README.md): vertical/horizontal native chronological lists, dates, decorative connectors, optional custom markers, and progress statuses; implementation and Storybook examples are validated by the user.
- Carousel.
- Image/Figure as a recipe or composition with framing and captions.
- Box/Surface as a recipe or variant, reusing Card where appropriate.

## Ideas and boundaries

Heading, Text, and Prose cover interface typography and editorial content. Image/Figure and Box/Surface are also accepted additions; their public names and final formats remain under evaluation.

Accordion and Collapsible belong here because they organize content presentation. Timeline presents a sequence; visualizations for comparing values belong to [Data](../data/README.md). Carousel is initially classified as Content, with behavior and composition still to be defined.

Typographic scales belong to [Foundations](../foundations/README.md). Interactive behavior mappings to Ark must be checked before implementation.
