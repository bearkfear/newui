# Overlays

[Workspace](../../../README.md)

## Intent

Present content over the interface with appropriate opening, closing, focus, and positioning behavior.

## Initial implementation

[Dialog](dialog/README.md) is implemented as an Ark-powered modal with Bulma-inspired compact header/footer surfaces, a scrollable body, right-aligned actions, and a free-content variant. The user validated and manually verified the Storybook examples; AlertDialog remains planned.

## Planned inventory

- Dialog and Alert Dialog.
- Popover, Tooltip, and Hover Card.
- Drawer and Sheet.

## Direction and questions

Dialog supplies the first overlay composition and preserves theme tokens through its portal. Evaluate whether Drawer and Sheet are presentations of the same implementation before maintaining separate APIs.

Check portals, title and description associations, keyboard interaction, focus, and controlled and uncontrolled states. Map each behavior to Ark.

Select remains in [Forms](../forms/README.md) and command menus in [Actions](../actions/README.md): using an overlay is a technical relationship, not their primary purpose.
