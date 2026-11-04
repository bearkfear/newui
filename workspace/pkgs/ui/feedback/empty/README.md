# Empty

A reusable empty state for a page, section, list, panel, or table. The application decides when results are empty; Empty presents the message and optional next actions. Uses native HTML and existing Radix-backed tokens, without new dependencies or Kobalte.

```tsx
import { Button, Empty } from "@egcs/newui";
import "@egcs/newui/styles.css";

<Empty.Root>
  <Empty.Icon />
  <Empty.Content>
    <Empty.Title>No projects yet</Empty.Title>
    <Empty.Description>Create your first project to get started.</Empty.Description>
  </Empty.Content>
  <Empty.Actions>
    <Button onClick={createProject}>Create project</Button>
  </Empty.Actions>
</Empty.Root>;
```

## Contract

- Root renders a div. `layout` is `section` (default, at least 16rem), `compact` (content height with smaller padding), or `page` (at least the viewport height). It stays in normal flow and adds no surface, border, or overlay of its own.
- Icon is optional. It renders a decorative framed inbox icon by default; supply children for a different icon. The entire part is hidden from assistive technology, so it must not contain controls or the only explanation of the state.
- Content groups the title and description with the shared compact message gap and a readable maximum width. Title reuses Heading, defaulting to h2 and size 6; set `as` for the surrounding heading hierarchy. Description reuses Text with muted text.
- Actions wraps existing buttons or links on narrow screens. It does not create actions, handle routing, or move focus. All parts forward their element's native attributes, refs, styles, and additive classes; Title and Description also preserve their typography props.

Empty is static by default: no status/alert role, animation, generated announcements, state machine, or data request. Native HTML is sufficient, so no Ark interaction primitive is needed. Loading and PageLoading remain responsible for pending presentation; Callout can communicate failures. Do not infer an empty result while a request is still pending.

Applications own result state and action behavior. For asynchronous updates, keep a status region mounted outside a busy results region and update it when results arrive. Do not duplicate an announcement by giving both the external message and Empty live roles. The Loading To Empty example demonstrates loading, an empty result, and creating the first item without moving focus programmatically.

## Composition

Use Root directly inside a Card or Panel. In a table, place it inside one Cell spanning the visible columns; Root must not be a direct child of table, tbody, or tr. The Table Empty story uses `layout="compact"`. Smaller or inline gaps may use plain Text rather than a complete empty-state composition.

No-results copy should explain how to recover, such as clearing filters. First-use copy can offer creation; a passive empty activity feed may need no action. Icon, description, and actions are optional, and applications own localization. No generic page text is injected by Root.

## Review

Feedback / Empty includes default, optional parts, compact/page layouts, Card and Table integration, custom search icon and recovery actions, a loading-to-empty-to-content flow, long text, dark/nested themes, and mobile examples. The user approved the implementation and examples, including the adjusted icon size and Table integration. No automated tests were created or expanded.
