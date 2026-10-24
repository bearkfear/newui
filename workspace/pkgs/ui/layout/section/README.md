# Section

Renders a native section with vertical padding: sm = 1.5rem / 2rem, md = 2.5rem / 4rem (default), lg = 4rem / 6rem. The second value applies from the md breakpoint. Compose with Container for horizontal gutters. Use aria-labelledby to associate a meaningful region with its visible heading.

```tsx
import { Section, Container, Heading } from "newui";
import "newui/styles.css";

<Section aria-labelledby="overview-title">
  <Container>
    <Heading id="overview-title">Overview</Heading>
  </Container>
</Section>;
```

Native attributes, events, and DOM refs are forwarded. `class` adds classes without guaranteeing utility conflict resolution. Colors use public `--nui-*` tokens and follow `data-nui-theme="dark"` on an ancestor.

Review the colocated Storybook stories, including mobile examples. This API has been validated by the user; no new automated tests have been added.
