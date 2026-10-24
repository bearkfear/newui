# Heading

Renders h2 by default. Use `as` (h1–h6) for the document hierarchy and `size` (1–6) independently for appearance. Default size is `"3"` (2rem). Headings have no default margin; the parent owns layout spacing.

## Size scale

Size 1 is the largest. Sizes use rem units and remain consistent across viewports; choose the semantic element independently.

| Size  | Font size | At a 16px root |
| ----- | --------- | -------------- |
| `"1"` | 3rem      | 48px           |
| `"2"` | 2.5rem    | 40px           |
| `"3"` | 2rem      | 32px           |
| `"4"` | 1.5rem    | 24px           |
| `"5"` | 1.25rem   | 20px           |
| `"6"` | 1rem      | 16px           |

```tsx
import { Heading } from "newui";
import "newui/styles.css";

<Heading as="h1" size="1">
  Your workspace
</Heading>;
```

Native attributes, events, and DOM refs are forwarded. `class` adds classes without guaranteeing utility conflict resolution. Colors use public `--nui-*` tokens and follow `data-nui-theme="dark"` on an ancestor.

Review All Sizes and the colocated mobile examples in Storybook. This scale awaits user validation; no new automated tests have been added.
