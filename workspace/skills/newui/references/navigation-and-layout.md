# Navigation, layout, and compositions

Use named imports from the entry listed for each area.

## Navigation from `@egcs/newui/navigation`

- [Breadcrumb](https://newui.egcs.com.br/en/components/breadcrumb/) shows page hierarchy. Put ancestor `Link` items and a `Page` for the current location inside `Root` and `List`.
- [Navbar](https://newui.egcs.com.br/en/components/navbar/) provides responsive site navigation. Use `Root`, `Brand`, `Toggle`, and `Content`, with `List` for links and optional `Actions`.
- [NavigationMenu](https://newui.egcs.com.br/en/components/navigation-menu/) organizes site links and disclosures within a custom header or page. Use `List` and `Item` under `Root`; put `Link` on direct destinations and use `Trigger` and `Content` for groups of destinations.
- [Pagination](https://newui.egcs.com.br/en/components/pagination/) shows page controls. Pass the total record `count` and page size to `Root`. Compose `PrevTrigger`, `Items`, and `NextTrigger`. Page numbers start at 1.
- [Sidebar](https://newui.egcs.com.br/en/components/sidebar/) provides responsive application navigation. Compose `Panel` and `Main` under `Root` and use `Toggle` for the sidebar. Place `VerticalMenu` in `Body` for links. Enable `resizable` when the desktop panel should resize.
- [Steps](https://newui.egcs.com.br/en/components/steps/) guides a user through an interactive workflow. Give `Root` a `count` and pair each `Item` and `Content` by zero-based `index`. Use `PrevTrigger`, `NextTrigger`, and `CompletedContent` as needed.
- [Tabs](https://newui.egcs.com.br/en/components/tabs/) switches between peer panels. Match each `Trigger` value with a `Content` value under one `Root` and label `List`. Use `activationMode="manual"` when moving focus should leave the panel unchanged until activation.
- [VerticalMenu](https://newui.egcs.com.br/en/components/vertical-menu/) organizes vertical page links. Use `Group`, `List`, `Item`, and `Link`; flag the active destination with `current` and use `Branch` for expandable groups.

## Layout from `@egcs/newui/layout`

- [Container](https://newui.egcs.com.br/en/components/container/) centers page content and supplies responsive side gutters. Set `size` for a maximum width or use `size="full"` for fluid width.
- [Section](https://newui.egcs.com.br/en/components/section/) supplies vertical spacing for a document section. Nest a `Container` for side gutters and use `aria-labelledby` when the section needs a name.
- [Resizable](https://newui.egcs.com.br/en/components/resizable/) provides a keyboard-accessible splitter. Declare panels and constraints on `Root` and render matching `Panel` parts with a `Handle` between adjacent panels.

## Compositions from `@egcs/newui/compositions`

- [ActionBar](https://newui.egcs.com.br/en/components/action-bar/) groups a page or section heading with controls. Put `Title` and optional `Description` in `Content` and buttons in `Actions`.
- [Footer](https://newui.egcs.com.br/en/components/footer/) groups footer identity, links, and metadata. Compose `Root`, `Content`, `Brand`, `Links`, `Group`, and optional `Meta`.
- [Hero](https://newui.egcs.com.br/en/components/hero/) introduces a page. Combine `Content`, `Title`, `Description`, and `Actions` with optional `Media`.
- [MediaObject](https://newui.egcs.com.br/en/components/media-object/) pairs compact media with text and optional actions. Use `Media` beside `Content` under `Root`.
- [Panel](https://newui.egcs.com.br/en/components/panel/) groups related data or settings in a shared surface. Build a heading with `Header` and `Title`, then use `Body` for free content or `List` and `Item` for repeated rows.
