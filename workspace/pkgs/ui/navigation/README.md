# Navigation

[Workspace](../../../README.md)

## Intent

Guide paths between pages, sections, and sets of content.

## Planned inventory

- Breadcrumb and Pagination.
- Tabs and Navigation Menu.
- Sidebar.
- Navbar that adapts to small screens.
- Static vertical menu with groups, headings, and nested items.

## Ideas and boundaries

Navbar and VerticalMenu are implemented and await user validation. Navbar uses Ark Navigation Menu for submenus and Ark Collapsible for responsive disclosure. VerticalMenu uses native navigation semantics and Ark Collapsible for optional branches.

A group of navigation links must not automatically receive ARIA action menu behavior. Dropdown Menu, Context Menu, and Menubar belong to [Actions](../actions/README.md).

Define active states, hierarchy, small-screen behavior, and routing integration without assuming website tooling now.

## Implemented navigation

- [Navbar](navbar/README.md): responsive navigation, brand, mobile toggle, links, submenus, and actions.
- [Vertical Menu](vertical-menu/README.md): grouped links, current-page state, static nesting, and optional controlled/uncontrolled branches.

Both use Radix tokens and the existing automatic themes. Navigation / Overview combines them with shared local page state. No new automated tests were added.
