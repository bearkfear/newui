# Foundations

[Workspace](../../../README.md)

## Intent

Define the visual language and shared rules for all areas.

## Initial scope

- Radix colors, semantic aliases, and light and dark themes.
- Typography: families, scale, weights, and line heights.
- Spacing, dimensions, radii, borders, and shadows.
- Motion and reduced motion preferences.
- Visible focus, contrast, and disabled states.
- Conventions for icon size, alignment, and accessible names.

[Iconography](iconography.md) uses Lucide for Solid for interface icons, with named imports, inherited colors, contextual sizes, and accessible control labels. Foundations / Iconography provides reviewable examples.

## Direction and questions

Use Tailwind and tailwind-variants to express styles and variants. Radix color scales, semantic state tokens, theme scopes, and component-specific tokens are implemented. Shared typography, dimension, motion, and customization contracts still need consolidation. A custom icon artwork library is not planned.

Heading and Text belong to [Content](../content/README.md); they apply the typographic rules defined here. The [style distribution convention](../../../../conventions/style-distribution.md) defines compiled CSS, Preflight, and the `nui` prefix. Official Radix Colors scales now back semantic tokens, interaction states, and automatic light/dark themes.

Compact component headers share `--nui-header-gap` (0.125rem) for the vertical gap between title and description. Card, Panel, Dialog, Alert Dialog, Sheet, and Popover use this token independently of their outer padding.

## Open decisions

- Final variant and size conventions.
- Contracts for customizing individual component parts.

## Themes

[Theme contract](themes.md) records the implemented automatic system preference, explicit light/dark selection, and nested scopes; application persistence remains separate. The Storybook theme switch already exercises the initial light and dark appearances.
