# Container

Centers content in a full-width div with responsive inline gutters (1rem, 1.5rem from sm, 2rem from lg). Maximum widths include gutters: sm = 48rem, md = 64rem, lg = 80rem (default), full = unlimited.

```tsx
import { Container } from "newui";
import "newui/styles.css";

<Container size="md">Page content</Container>;
```

Native attributes, events, and DOM refs are forwarded. `class` adds classes without guaranteeing utility conflict resolution. Colors use public `--nui-*` tokens and follow `data-nui-theme="dark"` on an ancestor.

Review the colocated Storybook stories, including mobile examples. This initial API awaits user validation; no new automated tests have been added.
