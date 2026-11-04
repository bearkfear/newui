# Pagination

Ark UI Solid Pagination owns page state, ranges, ellipses, accessible labels, current-page associations, and boundary disabling. newui supplies styles and composition. Pages are one-based; `count` is the total number of records, not pages. Use positive page sizes.

```tsx
import { Pagination } from "@egcs/newui";
import "@egcs/newui/styles.css";

<Pagination.Root count={200} defaultPage={10} defaultPageSize={10}>
  <Pagination.PrevTrigger />
  <Pagination.Items />
  <Pagination.NextTrigger />
</Pagination.Root>;
```

## Composition

The public composition has four parts: Root, PrevTrigger, Items, and NextTrigger. The [Solid UI reference](https://www.solid-ui.com/docs/components/pagination) guides the centered row, ghost controls, and outlined current page. Root supports `size="sm" | "md" | "lg"`, default md. Colors use shared Radix tokens.

Root renders a named nav; controls render native buttons. Tab moves between enabled controls and Enter/Space activates them. Ark supplies `aria-current="page"`, accessible labels, and boundary disabling. Use `translations` for accessible labels, native attributes for additional descriptions, and trigger children for custom visible labels. Give multiple paginators distinct names. Avoid overriding boundary `disabled` with false.

Items generates page buttons and decorative ellipses. Below 640px it automatically shows a page summary, while trigger labels hide and SVG chevrons remain visible. Zero records shows “No pages” with disabled navigation. Parts forward attributes, events, refs, and additive classes. Items uses one persistent wrapper and owns its content.

## State and records

Use `defaultPage` / `defaultPageSize` for initial state, or `page` / `pageSize` with `onPageChange` / `onPageSizeChange` for controlled state. Changing initial values after mount does not control state.

Consumers own data loading, record slicing, status announcements, and page-size controls. Reset or clamp a controlled page when filtering records or changing page size. The Controlled Records story uses a labeled native select and a status summary; this is not a new Select component.

Pagination uses buttons for local page changes. Consumers can update application routing in `onPageChange`; generated URL links are outside this API.

Compositions / Pages / Orders demonstrates a compact table footer: visible record range on the left, icon-only previous/next triggers on the right, and automatic page-summary presentation based on the panel's available width. Its layout uses application-owned container queries; the default standalone Pagination presentation remains unchanged. The footer omits navigation when one page contains all matching records.

## Review

The user validated the simplified implementation, record-list footer, and Panel integration. Storybook covers ellipses, page boundaries, one-page and empty results, sizes, dark/mobile layouts, and a controlled record list with page-size selection. The Panel record-list demo reuses this footer, adapting its zero-based page state at the integration boundary. The shared footer labels its navigation and handles empty totals. No new automated tests were added; test work requires separate authorization.
