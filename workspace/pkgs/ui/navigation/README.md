# Navigation

[Workspace](../../../README.md)

## Intent

Guide paths between pages, sections, and sets of content.

## Ideas and boundaries

Navbar uses Ark Navigation Menu for submenus and Ark Collapsible for responsive disclosure. VerticalMenu uses native navigation semantics and Ark Collapsible for optional branches.

A group of navigation links must not automatically receive ARIA action menu behavior. Dropdown Menu, Context Menu, and Menubar belong to [Actions](../actions/README.md).

Define active states, hierarchy, small-screen behavior, and application-owned routing integration.

Pagination uses Ark behavior, a simple Previous / numbers / Next composition, automatic mobile summaries, and three sizes.

## Implemented navigation

- [Sidebar](sidebar/README.md): fixed or resizable application sidebar with an Ark Splitter compact rail, VerticalMenu composition, and mobile Sheet.

- [Navbar](navbar/README.md): responsive navigation, brand, mobile toggle, links, submenus, and actions.
- [Navigation Menu](navigation-menu/README.md): shared standalone page navigation, grouped panels, and cascading disclosures; also powers Navbar.
- [Steps](steps/README.md): Ark step state, associated content, next/back/reset, linear validation, and horizontal/vertical layouts with Radix markers.
- [Vertical Menu](vertical-menu/README.md): grouped links, current-page state, static nesting, and optional controlled/uncontrolled branches.
- [Tabs](tabs/README.md): Ark content tabs with five appearances, semantic tones, and rich trigger content.
- [Pagination](pagination/README.md): Ark page ranges, boundary controls, numbered pages, ellipses, compact/mobile layouts, and controlled record examples.
- [Breadcrumb](breadcrumb/README.md): native ancestor links, decorative separators, current-page semantics, and wrapping labels.

The implemented navigation components use Radix tokens and the existing automatic themes. Navigation / Overview combines Navbar and VerticalMenu with shared local page state.
