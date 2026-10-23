# Prose

Styles native editorial HTML within a div with a maximum reading width of 65ch. Sizes: sm, md (default), lg. Supports headings, paragraphs, nested lists, links, quotes, code, tables, figures, captions, and dividers. Tables and code blocks scroll horizontally when necessary. Logical spacing follows reading direction. Markdown rendering and HTML sanitization belong to the consuming application. Keep interactive UI components outside Prose because its descendant selectors apply to native elements throughout the content.

```tsx
import { Prose } from "newui";
import "newui/styles.css";

<Prose>
  <h2>Getting started</h2>
  <p>Write with semantic HTML or use your application’s Markdown renderer.</p>
</Prose>
```

Native attributes, events, and DOM refs are forwarded. `class` adds classes without guaranteeing utility conflict resolution. Colors use public `--nui-*` tokens and follow `data-nui-theme="dark"` on an ancestor.

Review the colocated Storybook stories, including mobile and right-to-left examples. This initial API awaits user validation; no new automated tests have been added.
