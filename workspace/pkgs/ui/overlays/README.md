# Overlays

[Workspace](../../../README.md)

## Intent

Present content over the interface with appropriate opening, closing, focus, and positioning behavior.

## Initial implementation

[Dialog](dialog/README.md) is implemented as an Ark-powered modal with Bulma-inspired compact header/footer surfaces, a scrollable body, right-aligned actions, and a free-content variant. The user validated and manually verified its Storybook examples.

[Alert Dialog](alert-dialog/README.md) reuses that foundation for critical confirmations, with Ark's alertdialog role, initial Cancel focus, blocked outside dismissal, and dedicated cancel/action triggers. Storybook includes controlled async failure/retry. The user approved the implementation and examples.

[Tooltip](tooltip/README.md) is implemented with Ark-powered hover/focus behavior, delays, collision-aware positioning, an optional arrow, and the shared theme-preserving portal. Storybook includes controlled state, nested themes, and use inside Dialog. The user approved the implementation and examples.

[Popover](popover/README.md) is implemented with Ark-powered click/tap disclosure, interactive content, focus and dismissal behavior, an optional arrow, and compact header/body/footer styling. Storybook includes controlled state, modal mode, anchored positioning, and use inside Dialog. The user approved the implementation and examples, including the revised arrow.

[Hover Card](hover-card/README.md) is implemented with Ark-powered previews on hover/focus, delays, an optional bordered arrow, and the shared theme-preserving portal. Storybook includes native link previews, controlled state, use inside Dialog, and light/dark comparison. The user approved the implementation and examples.

[Sheet](sheet/README.md) presents the existing Ark-powered Dialog from any viewport edge, sharing its header/body/footer and portal. Storybook includes responsive side selection, scrolling, nonmodal mode, and nested Dialog. The user approved the implementation and examples, including the shared compact header spacing.

## Future evaluation

- Drawer with drag gestures and snap points.

## Direction and questions

Sheet reuses Dialog for edge-attached presentation. A draggable Drawer requires an additional behavior evaluation; it is not part of the initial Sheet delivery.

Check portals, title and description associations, keyboard interaction, focus, and controlled and uncontrolled states. Map each behavior to Ark.

Select remains in [Forms](../forms/README.md) and command menus in [Actions](../actions/README.md): using an overlay is a technical relationship, not their primary purpose.
