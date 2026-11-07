# Panel

## Headers

`Panel.Header` accepts `variant="plain"` (default), `"soft"` (neutral surface), or `"solid"` and a `tone`: `neutral` (default), `primary`, `info`, `success`, `warning`, or `danger`. `density="compact"` reduces header padding. The existing Root `tone="default" | "subtle"` still controls the body surface independently.

Solid headers use the shared Radix solid/contrast mappings and scope title, description, and focus colors to their surface. Body colors stay independent.

See Storybook's Solid Header Tones and Solid Headers Dark examples.

A compact section for search, filters, lists, free-form content, and related actions.

```tsx
import { Panel } from "@egcs/newui";

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

Import `@egcs/newui/styles.css` once. Review Compositions / Panel and Overview.

## Record lists

Compose `Item > Row` with `ItemContent` and `ItemActions` for compact records with actions aligned on the right. ItemContent holds ItemTitle and ItemDescription. Rows wrap long text while keeping actions available; they are not links and do not receive hover/selection behavior. Give icon buttons contextual accessible names.

Record List reproduces a subdued summary header, divided records, and a footer using the validated Ark-powered Pagination with a labeled native page-size select. Its rename, removal, undo, and zero-based pagination state belong to the demo; the integration adapts page numbers to Pagination's one-based API. The footer shares the compact record composition from the Pagination stories, including range summaries and empty totals. It does not introduce a public Select component.

## Compact file header

`Panel.Bar` is a compact wrapping header with `BarGroup` for tabs and metadata, and `BarActions` for trailing controls. It does not add an ARIA toolbar role or keyboard behavior. Compose existing Ark-powered Tabs around the whole Panel, with a small neutral segmented List in BarGroup and Content in Body. Bar supplies scoped tab colors for the file-view appearance; standalone Tabs keep their styling.

File Header Tabs demonstrates Preview, Code, and Blame views. Raw selects Code, Copy copies the demo document with status feedback, and Download saves it.
