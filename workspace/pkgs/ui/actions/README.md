# Actions

[Workspace](../../../README.md)

## Intent

Enable command execution and selection of actions available in context.

## Planned inventory

- Button and IconButton.
- CloseButton as an IconButton variant with an accessible name.
- Toggle and Toggle Group.
- Dropdown Menu, Context Menu, and Menubar.
- Command.

## Ideas and boundaries

CloseButton addresses the need identified through Bulma's Delete. Its initial format is a variant; this does not require a separate public export.

Command menus belong to this area. Groups of page links belong to [Navigation](../navigation/README.md), even when they look similar. Toolbar still needs behavioral evaluation; the simple action bar belongs to [Compositions](../compositions/README.md).

Define semantics, sizes, states, and Ark mappings. Toggle represents an action state; controls used to fill form values belong to [Forms](../forms/README.md).
