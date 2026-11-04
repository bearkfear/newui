# Sidebar

An application sidebar that composes the existing Resizable (Ark Splitter), Sheet (Ark Dialog), and native VerticalMenu navigation. No new dependency or custom pointer/keyboard state machine is introduced. Ark Splitter owns desktop resizing and collapse/expand, including the compact icon rail. Ark Dialog owns mobile focus containment/restoration, dismissal, scroll locking, and accessible associations. Optional navigation branches retain Ark Collapsible behavior.

```tsx
import { Sidebar, VerticalMenu } from "@egcs/newui";
import "@egcs/newui/styles.css";

<Sidebar.Root resizable style={{ height: "40rem" }}>
  <Sidebar.Panel aria-label="Workspace sidebar">
    <Sidebar.Header>
      <Sidebar.Label>Acme Studio</Sidebar.Label>
    </Sidebar.Header>
    <Sidebar.Body>
      <VerticalMenu.Root aria-label="Workspace navigation">
        <VerticalMenu.List>
          <VerticalMenu.Item>
            <VerticalMenu.Link href="/projects" current>
              <VerticalMenu.Icon>{/* Decorative project icon */}</VerticalMenu.Icon>
              <Sidebar.Label>Projects</Sidebar.Label>
            </VerticalMenu.Link>
          </VerticalMenu.Item>
        </VerticalMenu.List>
      </VerticalMenu.Root>
    </Sidebar.Body>
    <Sidebar.Footer>
      <Sidebar.Label>Account</Sidebar.Label>
    </Sidebar.Footer>
  </Sidebar.Panel>
  <Sidebar.Main>
    <header>
      <Sidebar.Toggle />
    </header>
    {/* Page content */}
  </Sidebar.Main>
</Sidebar.Root>;
```

## Contract

Root renders the existing horizontal Resizable root and owns a persistent Sheet root. Put exactly one Panel and one Main inside, in that order; Panel supplies the optional resize handle automatically. Root accepts native div attributes, style, ref, and additive classes. Native `onResize` is excluded because resizing belongs to Splitter; `onResizeEnd` forwards its details. Give Root a usable height. Root's ref targets the desktop/mobile layout div, not the portaled mobile content.

Desktop dimensions are pixels: `defaultWidth` 256, `minWidth` 216, `maxWidth` 360, and `compactWidth` 64. `resizable` defaults to false: width is fixed, with a collapse toggle still available. With `resizable`, the existing named Resizable handle allows dragging, arrow-key resizing, Shift for larger steps, Home/End, and Enter to collapse/expand. It is the only separator; fixed-width mode supplies a panel border instead. Use feasible dimensions with `compactWidth < minWidth <= defaultWidth <= maxWidth`; the content panel retains at least 25% of the layout width. Default width and collapsed state are initial values; remount to reset them. Root retains the latest Ark sizes as controlled layout state so content or height changes preserve the compact rail and any manually resized width.

`defaultCollapsed`, or controlled `collapsed` with `onCollapsedChange(boolean)`, sets the desktop icon rail. Ark remembers the expanded size when toggling. Mobile uses a separate `defaultMobileOpen`, or controlled `mobileOpen` with `onMobileOpenChange(boolean)`. Below 48rem the desktop panel and resize handle disappear and Toggle becomes a Sheet trigger. Desktop navigation does not overlay the content; mobile opens from the left and dismisses via its named close button, Escape, or outside interaction. Switching to desktop closes the mobile Sheet. State belongs to each Root; no global keyboard shortcut, cookie, or storage behavior is installed.

Panel renders an aside inside the desktop Splitter panel or mobile Sheet. Its native attributes, ref, and classes target the aside in either presentation. Its children remount when crossing the mobile breakpoint; keep application state outside Panel when it must persist. Mobile content has a default accessible name, overridable through Panel's `aria-label`; an automatic close control remains visible. Main renders a positioned main landmark inside the content panel and scrolls independently, containing positioned descendants and preventing scroll chaining to the outer page. Header, Body, and Footer render divs; Body fills the available space and scrolls while Header/Footer remain visible.

Label renders a span that becomes visually hidden in compact mode while retaining the accessible name. Expanded renders a div hidden in compact mode, for group headings, subnavigation, or secondary controls. Keep an icon and a Label on each compact link or button; wrap elements that do not fit the rail in Expanded or provide an alternate compact action through Context. VerticalMenu links center their icons automatically in the compact rail; this shared styling does not depend on Tooltip or a story-specific rule. Layout does not infer routes. The example uses the existing Tooltip for compact link labels, native links for navigation, and DropdownMenu for account actions.

Toggle is the existing Button with accessible name/state and cancellation-aware click handling. It toggles Ark Splitter on desktop and is an Ark Dialog trigger on mobile. Native disabled behavior, custom content, Button variants, DOM refs, and event handlers remain available. Context exposes reactive `desktop`, `collapsed`, `mobileOpen`, `setMobileOpen`, `toggle`, and the existing Splitter accessor `api`; routing integrations may close the mobile Sheet after navigation. `toggle` controls desktop collapse only. Use normal links and application route state, not an ARIA action menu, for page navigation.

Styles use existing Radix semantic tokens, automatic/nested themes, compiled CSS, and existing focus metrics. Mobile uses Sheet's reduced-motion handling; desktop widths do not animate. This is a sidebar layout composition, not a new resize or dialog primitive.

## Review

Navigation / Sidebar includes an application example with grouped links, expandable collections, current-page state, project creation, account actions, fixed/resizable widths, a compact rail, controlled collapse, dark theme, and closed/open mobile sheets. The user approved the implementation and examples, including the single divider, account hover spacing in both modes, matching compact brand/navigation blocks, and preserved collapsed state and resized width after project creation. No automated tests were created or expanded.
