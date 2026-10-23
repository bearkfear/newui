# Panel

A compact section for search, filters, lists, free-form content, and related actions.

```tsx
import { Panel } from "newui";

<Panel.Root aria-labelledby="projects-title">
  <Panel.Header>
    <Panel.Title id="projects-title">Projects</Panel.Title>
    <Panel.Description>Work in progress.</Panel.Description>
  </Panel.Header>
  <Panel.Toolbar>{/* Application search and filters */}</Panel.Toolbar>
  <Panel.List>
    <Panel.Item>
      <Panel.Link href="/projects/design">Design system</Panel.Link>
    </Panel.Item>
  </Panel.List>
  <Panel.Footer>One project</Panel.Footer>
</Panel.Root>;
```

Root options: `tone` default or subtle. Root renders section; name it with a matching title ID or `aria-label`. Title defaults to h2, size 5, and Description to muted Text size 6. All parts are optional; Body accepts free-form content, while List and Item provide native ul/li semantics.

Toolbar accepts application controls. Link requires href and renders an anchor with hover, active, focus, and `aria-current="page"` styles. Item is a non-interactive li; put a native control or Link inside it. Lists have no action-menu or custom keyboard behavior. Footer wraps actions and supporting information on narrow screens.

Filtering, current destinations, empty states, loading, and application state belong to the consumer. Storybook demonstrates search, an active-only filter, current-link state, and reset with local Solid signals. Its native search input is not a new public Input component.

Root and parts forward native attributes, events, styles, refs, and additive classes. Surface and interaction colors follow existing Radix semantic tokens.

Import `newui/styles.css` once. Review Compositions / Panel and Overview before authorizing new tests.
