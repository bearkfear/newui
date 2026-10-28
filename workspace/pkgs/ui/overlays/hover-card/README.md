# Hover Card

Rich supplementary previews using Ark UI Solid HoverCard. Ark owns hover/focus opening, delays, pointer movement between trigger and content, outside/Escape dismissal, positioning, and presence. newui supplies a compact neutral card, a bordered arrow, and the shared theme-preserving portal.

## API

- `Root`: Ark props, including controlled `open` / `onOpenChange`, `defaultOpen`, `disabled`, `openDelay` (600ms), `closeDelay` (300ms), and outside-interaction callbacks. Defaults to lazy mounting and exit unmounting. Keep Root mounted while changing state.
- Root `positioning` merges with `placement: "bottom-start"`, `gutter: 8`, `strategy: "fixed"`, and `overflowPadding: 16`. Ark handles collisions near viewport edges.
- `Trigger`: Ark trigger with link-like styling, native events/refs, and render-function `asChild`. Compose a native anchor with a meaningful destination for link previews. Classes are additive. Root `disabled` disables the preview, not link navigation.
- `Content`: includes Portal, Positioner, Surface, an optional arrow, and a padded scrollable Body. `showArrow={false}` removes the arrow; optional `mount` selects the portal destination. Other props go to the Ark content element.
- `Portal`, `Positioner`, `Surface`, `Body`, `Arrow`, `ArrowTip`: advanced composition parts. Surface has no automatic padding; use Body for the standard spacing and scrolling. Arrow includes ArrowTip by default. Do not wrap Content in another Portal, Positioner, or Body.
- `Context`: Ark HoverCard context for application integration.

Public types: `HoverCardRootProps`, `HoverCardTriggerProps`, `HoverCardContentProps`, `HoverCardPortalProps`, `HoverCardPositionerProps`, `HoverCardSurfaceProps`, `HoverCardBodyProps`, and `HoverCardArrowProps`.

## Example

```tsx
<HoverCard.Root>
  <HoverCard.Trigger
    asChild={(props) => (
      <a {...props()} href="https://github.com/solidjs">
        SolidJS
      </a>
    )}
  />
  <HoverCard.Content>
    <Heading as="h3" size="6">
      SolidJS
    </Heading>
    <Text>Reactive tools for building user interfaces.</Text>
  </HoverCard.Content>
</HoverCard.Root>;
```

## Visual and behavior contracts

The uniform surface uses Radix background, border, and text tokens, following the approved Popover card shape and shadow. The arrow shares that background and has matching outward border edges in every placement. Public tokens: `--nui-hover-card-width` (20rem), `--nui-hover-card-shadow` (defaults to the Popover shadow), and `--nui-z-hover-card` (1050). Width is limited to the viewport minus 2rem; Body scrolls within the available height. Set token overrides on a surrounding scope for portal inheritance. System and workshop reduced motion disable animations.

The preview does not trap or move focus into its content and does not replace a link's accessible name or destination. Ark opens on focus as well as hover and ignores touch hover events. Keep essential information at the destination or visible in the page. Use Popover for deliberate click/tap disclosure, required controls, or interactive tasks; Hover Card is for optional previews. The default examples use native links that open their destinations in a new tab.

## Review

Storybook: Overlays / Hover Card includes an organization preview composed from Avatar, Heading, Text, and Badge; configurable placement/delays; optional arrow; disabled preview; controlled state; use within Dialog; light/dark previews; small mobile viewport; and reduced motion. Check hover/focus opening, pointer travel onto the card, delayed closing, Escape, native link navigation, viewport edges, and arrow integration in both themes. Both Themes starts open for visual review. Mobile previews layout and preserves native link navigation without adding a tap-to-open gesture.

The user approved the implementation and Storybook examples. No automated tests were added.

## References

- [Ark UI Hover Card](https://ark-ui.com/docs/components/hover-card).
