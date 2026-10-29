# Actions

[Workspace](../../../README.md)

## Intent

Enable command execution and selection of actions available in context.

## Planned inventory

- Toggle and Toggle Group.
- Menubar.
- Command.

## Ideas and boundaries

Use `Button iconOnly` with an accessible name for icon actions, including close actions. Standalone IconButton and CloseButton components are not planned. Existing component-specific parts, such as Callout.CloseButton and overlay close triggers, retain their contracts.

Command menus belong to this area. Groups of page links belong to [Navigation](../navigation/README.md), even when they look similar. Toolbar still needs behavioral evaluation; the simple action bar belongs to [Compositions](../compositions/README.md).

Define semantics, sizes, states, and Ark mappings. Toggle represents an action state; controls used to fill form values belong to [Forms](../forms/README.md).

## Implemented

- [Button](button/README.md) and [ButtonGroup](button-group/README.md): native actions, shared variants, sizes, loading states, and icon-only buttons; validated by the user.

- [Dropdown Menu](dropdown-menu/README.md): button-triggered Ark actions, grouped labels, optional icons, submenus, separators, unboxed disabled and destructive items, controlled examples, and themed portals; validated by the user.
- [Context Menu](context-menu/README.md): Ark right-click/long-press actions with a separate ordinary dropdown alternative and the same visual foundation; validated by the user.

Both follow the [shared menu contract](menu/README.md). No new automated tests were added.
