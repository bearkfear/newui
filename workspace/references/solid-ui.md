# Solid UI

[References](README.md)

## Role in the project

Initial reference for the catalog, styling, and reusable code. The library will have its own organizational and API decisions. There is no commitment to follow every shadcn/ui update.

## What to study

- Inventory and anatomy of selected components.
- Visual recipes, variants, sizes, and examples.
- Dependencies and behaviors that will need Ark equivalents.
- DOM references, events, reactivity, portals, and state attributes.

## Existing directions

The text field family will be organized as Field, Input, and Textarea according to the [approved contract](../pkgs/ui/forms/field.md). The proposed catalog organization is in the [workspace](../README.md).

## Material and provenance

Temporary material: `_local/solid-ui/`, ignored by Git. Implementation and license audits are still pending; no code has been incorporated.

Links consulted during planning are in [Sources](sources.md). New observations should record the source page or file and consultation date.

## Pagination

Reviewed the [official Pagination example](https://www.solid-ui.com/docs/components/pagination) on 2026-10-28. It places Previous, page numbers, ellipses, and Next in one centered row, with ghost controls and an outlined current page. newui follows this visual direction with its own Ark wrappers, Radix tokens, and compact mobile summary. The native page-size selector remains a demo composition. No upstream implementation code was copied.

## Breadcrumb

Reviewed the [official Breadcrumb example](https://www.solid-ui.com/docs/components/breadcrumb) on 2026-10-28. newui follows its restrained link hierarchy using native nav/ol/li/a elements and a current-page span. Separators are automatic, decorative SVG chevrons; no collapse menu or additional dependency is introduced. No upstream implementation code was copied.

## Action menus

Reviewed the official [Dropdown Menu](https://www.solid-ui.com/docs/components/dropdown-menu) and [Context Menu](https://www.solid-ui.com/docs/components/context-menu) examples on 2026-10-28. newui follows their compact action-menu presentation with one Ark-powered foundation, optional group labels, separators, and destructive styling. Context examples pair a separate Dropdown Menu with the same action list for click/keyboard access. The user requested nested submenus, optional icons, and unboxed disabled action styling. No upstream implementation code was copied.

## Table

Reviewed [Solid UI Table](https://www.solid-ui.com/docs/components/table) and [Bulma Table](https://bulma.io/documentation/elements/table/) on 2026-10-28. Solid UI inspires the restrained invoice presentation and caption; Bulma inspires combinable borders, stripes, compact spacing, hover, highlighted rows, and a separate scroll container. newui uses original native HTML wrappers and Radix tokens, without copied source, extra dependencies, or Kobalte. See the [Table contract](../pkgs/ui/data/table/README.md).
