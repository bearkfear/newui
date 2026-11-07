# Overlays

[UI package](../README.md)

Present content above the interface with appropriate opening, closing, focus, and positioning behavior.

## Components

- [Dialog](dialog/README.md): modal content with a compact header/footer, scrollable body, right-aligned actions, and a free-content variant.
- [AlertDialog](alert-dialog/README.md): critical confirmations, initial Cancel focus, blocked outside dismissal, and dedicated cancel/action triggers.
- [Tooltip](tooltip/README.md): brief hover/focus hints with delays, collision-aware positioning, and an optional arrow.
- [Popover](popover/README.md): click/tap disclosure with interactive content, focus and dismissal behavior, and optional header/body/footer parts.
- [HoverCard](hover-card/README.md): optional previews on hover/focus with delays and an optional arrow.
- [Sheet](sheet/README.md): Dialog presented from any viewport edge, sharing its header/body/footer and portal.

## Behavior and composition

Ark owns interaction, accessible associations, focus, controlled/uncontrolled state, and dismissal. Shared portals preserve inherited theme tokens and motion preferences.

Use Popover for deliberate interactive disclosure and Tooltip for short non-interactive hints. Sheet supports edge-attached presentation without drag gestures or snap points. Select controls belong to [Forms](../forms/README.md) and command menus to [Actions](../actions/README.md).

Storybook demonstrates controlled state, nested themes and layers, positioning, responsive layouts, scrolling, and reduced motion. Alert Dialog includes async failure/retry with application-owned state.
