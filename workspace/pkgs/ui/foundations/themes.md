# Themes

[Foundations](README.md)

## Intent

Provide consistent light and dark appearances through shared semantic tokens. Use the names `light` and `dark` in APIs and documentation.

## Current implementation

The initial [tokens](tokens.css) define light values on `:root` and dark overrides under `[data-nui-theme="dark"]`. The Storybook toolbar selects light or dark for the preview container. Components use the same recipes in both modes; CSS variables supply the theme values.

The current colors are provisional. Radix scale integration and a complete theme contract are still planned.

## Planned direction and open questions

- Define the full semantic token set and its Radix light/dark mappings.
- Decide how application consumers select a theme: document-level attribute, scoped container, or an optional helper.
- Evaluate a `system` preference that follows the user's operating system.
- Define optional persistence, server rendering, and hydration behavior without a theme flash.
- Define nested theme scopes, especially a light container inside a dark ancestor; the current sample does not guarantee this behavior.

Theme state and persistence are not implemented as a provider or hook yet. Keep application-specific theme choices separate from the token definitions.
