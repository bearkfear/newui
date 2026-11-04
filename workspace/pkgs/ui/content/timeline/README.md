# Timeline

A vertical or horizontal sequence for event history or progress presentation, inspired by [Solid UI Timeline](https://www.solid-ui.com/docs/components/timeline). Original native HTML implementation with newui's Radix tokens; no copied source, new dependencies, or Kobalte.

```tsx
import { Timeline } from "@egcs/newui";
import "@egcs/newui/styles.css";

<Timeline.Root aria-label="Shipment progress">
  <Timeline.Item status="complete">
    <Timeline.Indicator />
    <Timeline.Content>
      <Timeline.Title>Order confirmed · Completed</Timeline.Title>
      <Timeline.Description>We received your order and payment.</Timeline.Description>
      <Timeline.Time dateTime="2026-10-28T09:00:00-03:00">October 28, 09:00</Timeline.Time>
    </Timeline.Content>
  </Timeline.Item>
  <Timeline.Item status="current">
    <Timeline.Indicator />
    <Timeline.Content>
      <Timeline.Title>Preparing shipment · Current step</Timeline.Title>
      <Timeline.Description>Your items are being packed.</Timeline.Description>
    </Timeline.Content>
  </Timeline.Item>
</Timeline.Root>;
```

## Contract

Root is an ordered list. Item is a list item; Indicator and Content occupy its marker and content columns. Root accepts `density="comfortable"` (default) or `"compact"` to control space between events. Content wraps freely, and connectors track the actual item height. The last item, including a single-item list, has no trailing connector or bottom spacing. Keep Item as a direct child of Root; Solid For/Show do not add DOM wrappers.

Root accepts `orientation="vertical"` (default) or `"horizontal"`. Horizontal places the markers above their content in equal columns with a 14rem minimum width and automatically connects consecutive items. It preserves horizontal presentation on mobile and scrolls within the list when needed. Root becomes keyboard-focusable with a visible focus ring for native scrolling; its default accessible name is Timeline, which callers can override. Attributes and refs still target the ol. Changing orientation is reactive and does not remount or reorder items.

Item supports `status="default" | "complete" | "current" | "pending"`. Default is a neutral historical event; complete uses success tokens, current uses primary tokens, and pending has a neutral decorative marker. Current supplies `aria-current="step"`, which callers may override for a different use. Applications determine statuses and should mark at most one current step. Status changes are reactive; Timeline does not calculate progress, advance steps, reorder, or sort events.

Indicator defaults to a dot; children replace the dot with a custom icon. It and the CSS connector are decorative and convey no accessible status by themselves. Keep controls outside Indicator, and communicate meaningful statuses with text, a Badge, or another accessible label. Omit Indicator to leave the marker position empty; Content retains its alignment. The native list remains readable without CSS.

Title reuses Heading with h3 and size 6 defaults; set `as` to match surrounding headings. Description reuses muted Text. Time renders native time and forwards `dateTime`; provide a machine-readable date/time and application-localized visible text. Content accepts rich content, cards, links, or native buttons. Native attributes, refs, events, styles, and additive classes are preserved on each part; Title and Description retain their typography props.

## Behavior mapping

This component presents a sequence rather than an interactive stepper. Native ol/li/time and ordinary controls cover its semantics; no Ark interaction primitive or custom focus/keyboard state machine is needed. Applications own actions and asynchronous announcements. Root has no automatic live role, focus changes, animation, or disabled steps. A pending step is informational rather than a disabled control.

Radix-backed neutral step 6 draws the connectors and borders. Markers use neutral/success/primary soft surfaces and semantic supporting text; status is also expressed in demo text. Existing automatic, explicit, and nested themes apply without a separate palette. Both orientations retain their reading order on small screens. For no events, compose [Empty](../../feedback/empty/README.md) rather than rendering placeholder list items.

## Review

Content / Timeline includes both orientations, event dates, compact/titles-only layouts, custom icons, a reactive shipment progression with textual statuses, rich Card content and actions, one event in each orientation, Empty integration, long wrapping content, dark/nested themes, and mobile examples. The user approved the implementation and Storybook examples, including horizontal and vertical layouts. No new automated tests were created or expanded.
