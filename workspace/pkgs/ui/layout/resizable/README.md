# Resizable

Resizable panels using Ark UI Solid Splitter. Root, Panel, Handle, and Context map to Ark Root, Panel, ResizeTrigger, and Context. Ark owns pointer capture, touch dragging, keyboard resizing, constraints, collapse/expand, state, IDs, and separator associations. No new dependency or custom interaction state machine.

```tsx
import { Resizable } from "@egcs/newui";
import "@egcs/newui/styles.css";

<Resizable.Root
  panels={[
    { id: "navigation", minSize: 20 },
    { id: "content", minSize: 25 },
  ]}
  defaultSize={[35, 65]}
  style={{ height: "20rem", width: "100%" }}
>
  <Resizable.Panel id="navigation">Navigation</Resizable.Panel>
  <Resizable.Handle id="navigation:content" aria-label="Resize navigation and content" withHandle />
  <Resizable.Panel id="content">Content</Resizable.Panel>
</Resizable.Root>;
```

## Contract

Root defaults to horizontal (side-by-side panels); vertical stacks panels. Provide `panels` in DOM order with matching Panel IDs. A Handle between two panels uses `beforeId:afterId`. All dimensions belong to the application: give Root a usable width and height, especially for vertical or nested layouts. Panel adds minimum-width/height resets without content padding, borders, backgrounds, or scrolling; place an overflow container inside for independent scrolling.

Numeric `defaultSize`, controlled `size`, `minSize`, `maxSize`, and `collapsedSize` values represent percentages. Ark also accepts pixel strings such as `"240px"`. Use `size` with `onResize` for controlled layouts; `onResizeEnd` reports the final sizes. Keep total sizes and constraints feasible. `panels` supports `collapsible`, `collapsedSize`, and `resizeBehavior`. Context exposes Ark's accessor with `getSizes`, `setSizes`, `resetSizes`, `collapsePanel`, `expandPanel`, and panel-state queries. Persistence belongs to the application.

Handle uses Ark's separator-role button with an optional decorative grip (`withHandle`). Supply an accessible name for each divider. Arrow keys resize along the layout axis, Shift increases the step, Home/End reach the available constraints, and Enter toggles a collapsible adjacent panel. These commands and native event cancellation remain with Ark. `keyboardResizeBy` is forwarded to Root. The default button explicitly receives native `disabled` because the installed Ark primitive consumes that prop for its state without forwarding it to the DOM. Handle also forwards `aria-disabled`. When overriding `asChild`, preserve supplied props, refs, and native disabled behavior on your element.

All parts preserve Ark props, DOM refs, styles, event handlers, and additive classes. Custom Handle children replace the grip. Keep them decorative; do not nest interactive controls inside the separator. `--nui-resizable-handle-size` defaults to `0.5rem`; coarse pointers get at least `1.5rem`. The divider stays visible without a grip, uses semantic Radix tokens for interaction/focus states, and adds no animation. Nest independent Roots to combine orientations.

## Review

Layout / Resizable includes horizontal/vertical, grip-free, disabled, nested editor/terminal, controlled sizes/reset, collapsible navigation, dark, and mobile examples. The user approved the implementation and Storybook examples. No automated tests were created or expanded.
