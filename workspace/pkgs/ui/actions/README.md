# Actions

[Workspace](../../../README.md)

## Intent

Enable command execution and selection of actions available in context.

## Planned inventory

- Button and ButtonGroup (implemented); IconButton remains planned.
- CloseButton as an IconButton variant with an accessible name.
- Toggle and Toggle Group.
- Menubar.
- Command.

## Ideas and boundaries

CloseButton provides a compact, accessible close action. Its initial format is a variant; this does not require a separate public export.

Command menus belong to this area. Groups of page links belong to [Navigation](../navigation/README.md), even when they look similar. Toolbar still needs behavioral evaluation; the simple action bar belongs to [Compositions](../compositions/README.md).

Define semantics, sizes, states, and Ark mappings. Toggle represents an action state; controls used to fill form values belong to [Forms](../forms/README.md).

## Implemented action menus

- [Dropdown Menu](dropdown-menu/README.md): button-triggered Ark actions, grouped labels, optional icons, submenus, separators, unboxed disabled and destructive items, controlled examples, and themed portals; validated by the user.
- [Context Menu](context-menu/README.md): Ark right-click/long-press actions with a separate ordinary dropdown alternative and the same visual foundation; validated by the user.

Both follow the [shared menu contract](menu/README.md). No new automated tests were added.
