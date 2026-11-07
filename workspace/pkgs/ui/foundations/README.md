# Foundations

[Workspace](../../../README.md)

## Intent

Define the visual language and shared rules for all areas.

## Contracts

- Radix colors, semantic aliases, and light and dark themes.
- Typography: families, scale, weights, and line heights.
- Spacing, dimensions, radii, borders, and shadows.
- Motion and reduced motion preferences.
- Visible focus, contrast, and disabled states.
- Conventions for icon size, alignment, and accessible names.

- [Typography](typography.md): font stacks, rem scale, weights, line heights, and Heading/Text mappings.
- [Dimensions and surfaces](dimensions.md): spacing unit, control heights, radii, and contextual elevation.
- [Interaction states](interaction-states.md): focus, disabled/loading/selected states, and reduced motion.
- [Component contracts](component-contracts.md): imports, composition, variants, classes, styles, refs, and primitive behavior.

[Iconography](iconography.md) uses Lucide for Solid for interface icons, with named imports, inherited colors, contextual sizes, and accessible control labels. Foundations / Iconography provides reviewable examples.

## Implementation

Use Tailwind and tailwind-variants to express styles and variants. Radix color scales and semantic state tokens live in tokens.css; metrics.css owns shared non-color metrics and the compiled utility bridge. Defaults preserve existing typography and geometry. Component-specific tokens retain their owning contracts. A custom icon artwork library is not planned.

Heading and Text belong to [Content](../content/README.md); they apply the typographic rules defined here. The [style distribution convention](../../../../conventions/style-distribution.md) defines compiled CSS, Preflight, and the `nui` prefix. Official Radix Colors scales now back semantic tokens, interaction states, and automatic light/dark themes.

Compact component headers share `--nui-header-gap` (0.125rem) for the vertical gap between title and description. Card, Panel, Dialog, Alert Dialog, Sheet, and Popover use this token independently of their outer padding.

## Storybook examples

Foundations / Typography, Dimensions, Interaction states, and Customization demonstrate the consolidated contracts. Review keyboard focus, narrow widths, light/dark scopes, reduced motion, native refs, and local overrides including portals.

## Themes

[Theme contract](themes.md) records the implemented automatic system preference, explicit light/dark selection, and nested scopes; application persistence remains separate. The Storybook theme switch already exercises the initial light and dark appearances.
