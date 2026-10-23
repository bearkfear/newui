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

## Direction and questions

Use Tailwind and tailwind-variants to express styles and variants. Token structure, values, and customization contracts still need to be defined. A custom icon artwork library is not planned.

Heading and Text belong to [Content](../content/README.md); they apply the typographic rules defined here. The [style distribution convention](../../../../conventions/style-distribution.md) defines compiled CSS, Preflight, and the `nui` prefix. Official Radix Colors scales now back semantic tokens, interaction states, and automatic light/dark themes.

## Open decisions

- Final variant and size conventions.
- Contracts for customizing individual component parts.

## Themes

[Theme contract](themes.md) records the implemented automatic system preference, explicit light/dark selection, and nested scopes; application persistence remains separate. The Storybook theme switch already exercises the initial light and dark appearances.
