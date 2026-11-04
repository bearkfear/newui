# Breadcrumb

A simple hierarchy of native links, inspired by [Solid UI](https://www.solid-ui.com/docs/components/breadcrumb). Compose Root, List, Item, Link, and Page. Each Item supplies a decorative chevron; the first separator is hidden. Long labels wrap naturally, including unbroken words on mobile.

```tsx
import { Breadcrumb } from "@egcs/newui";
import "@egcs/newui/styles.css";

<Breadcrumb.Root>
  <Breadcrumb.List>
    <Breadcrumb.Item>
      <Breadcrumb.Link href="/workspace">Workspace</Breadcrumb.Link>
    </Breadcrumb.Item>
    <Breadcrumb.Item>
      <Breadcrumb.Page>Projects</Breadcrumb.Page>
    </Breadcrumb.Item>
  </Breadcrumb.List>
</Breadcrumb.Root>;
```

## Semantics and behavior

Root is a nav named “Breadcrumb” by default; override `aria-label` or use `aria-labelledby`. List is an ol with explicit list semantics preserved when CSS removes markers. Item is an li. Link requires href and remains a native anchor with browser navigation, modifier-click, and keyboard behavior. Page is a non-focusable span with `aria-current="page"`. SVG separators are hidden from assistive technology.

Ark UI Solid has no Breadcrumb primitive in the installed catalog. This composition needs no interactive state machine: native navigation follows the [WAI-ARIA breadcrumb pattern](https://www.w3.org/WAI/ARIA/apg/patterns/breadcrumb/). No alternate primitive is needed for static links and lists. Application routers own destination changes.

Keep ancestors in hierarchical order and place one Page at the end. The same composition supports a single current item. There are no automatic menus, collapsing branches, size variants, or configurable separators. Parts forward native attributes, refs, events, and additive classes. Styles use shared Radix tokens and visible focus indicators.

## Review

The user validated Breadcrumb. Storybook includes default, dark/mobile, long labels, unbroken words, a single current item, and local navigation examples. Static examples link to actual Storybook destinations; the Navigation story keeps application state locally. The source snippet uses application paths. No new automated tests were added; test work requires separate authorization.
