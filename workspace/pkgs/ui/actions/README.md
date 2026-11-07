# Actions

[UI package](../README.md)

Execute commands and select actions available in context.

## Components

- [Button](button/README.md): native actions, shared variants, sizes, loading states, and icon-only buttons.
- [ButtonGroup](button-group/README.md): grouped actions with shared appearance options.
- [Dropdown Menu](dropdown-menu/README.md): button-triggered actions, groups, optional icons, submenus, separators, and destructive items.
- [Context Menu](context-menu/README.md): right-click/long-press actions, with a separate ordinary dropdown alternative for click and keyboard access.
- [Menubar](menubar/README.md): persistent command menus with multiple triggers and nested submenus.

Menus use Ark behavior and the [shared menu contract](menu/README.md), including controlled state and themed portals.

## Composition

Use `Button iconOnly` with an accessible name for icon actions, including close actions. Component-specific parts such as Callout.CloseButton and overlay close triggers retain their own contracts.

Groups of page links belong to [Navigation](../navigation/README.md). Controls that edit form values belong to [Forms](../forms/README.md). Use [ActionBar](../compositions/action-bar/README.md) for responsive rows of related actions and information.
