# Text

Renders p by default; `as` also accepts span or div. Use `size` (1–7) for appearance, with `"6"` (1rem) as the default. Tones: default and muted. Text has no default margin. Compose muted text with Heading for subtitles; use span for inline content.

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
| `"7"` | 0.75rem   | 12px           |

```tsx
import { Text } from "@egcs/newui";
import "@egcs/newui/styles.css";

<Text size="5" tone="muted">
  Everything you need in one place.
</Text>;
```

Native attributes, events, and DOM refs are forwarded. `class` adds classes without guaranteeing utility conflict resolution. Colors use public `--nui-*` tokens and follow `data-nui-theme="dark"` on an ancestor.

Review All Sizes and the colocated mobile examples in Storybook.
