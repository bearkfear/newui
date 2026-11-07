# Tooltip

Short supporting text on hover or keyboard focus, using Ark UI Solid Tooltip for state, delays, accessible descriptions, Escape/click/scroll dismissal, positioning, collision handling, and presence. newui supplies the visual surface, optional arrow, and theme-preserving portal shared with Dialog.

## API

- `Root`: Ark Tooltip props, including controlled `open` / `onOpenChange`, `defaultOpen`, `disabled`, `openDelay` (400ms), and `closeDelay` (150ms). Defaults to lazy mounting and exit unmounting. Keep Root mounted while changing state.
- Position through Root `positioning`. Defaults are `placement: "top"`, `gutter: 8`, and `strategy: "fixed"`, with Ark's collision handling. Supplied positioning options merge with these defaults.
- `interactive` defaults to true so moving the pointer from the trigger onto the text keeps it visible. This enables hover persistence; it does not make a tooltip an appropriate container for buttons or links.
- `Trigger`: Ark button, with native props, refs, events, and render-function `asChild` for Button composition. Event cancellation is preserved. Give icon buttons their own accessible name; tooltip text supplies a description, not a replacement label.
- `Content`: includes Portal, Positioner, Surface, and an arrow by default. `showArrow={false}` removes the arrow. Optional `mount` selects the portal destination. Other props go to the Ark content element.
- `Portal`, `Positioner`, `Surface`, `Arrow`, `ArrowTip`: individual parts for custom composition. Arrow includes ArrowTip unless children are supplied. Do not wrap Content in another Portal or Positioner.
- `Context`: Ark Tooltip context for application integration.

Public types: `TooltipRootProps`, `TooltipTriggerProps`, `TooltipContentProps`, `TooltipPortalProps`, `TooltipPositionerProps`, `TooltipSurfaceProps`, and `TooltipArrowProps`.

## Example

```tsx
<Tooltip.Root>
  <Tooltip.Trigger
    asChild={(props) => (
      <Button {...props()} tone="neutral" variant="outline" iconOnly aria-label="Archive project">
        <ArchiveIcon />
      </Button>
    )}
  />
  <Tooltip.Content>Move this project to your archive.</Tooltip.Content>
</Tooltip.Root>;
```

## Visual contract

The compact, inverse neutral surface uses Radix Slate 12 for its background and Slate 1 for text in both themes. It wraps long text within 20rem or the viewport width minus 2rem. Public tokens: `--nui-tooltip-background`, `--nui-tooltip-foreground`, `--nui-tooltip-shadow`, and `--nui-z-tooltip` (1100, above the default modal layer). The arrow follows the background token. Set overrides on a surrounding scope; the portal copies inherited tokens, typography, color scheme, and the workshop's reduced-motion preference. CSS also respects system reduced motion.

## Usage and review

Keep content brief and noninteractive. Use Popover for controls or deliberate click/tap disclosure. Ark ignores touch hover events; essential information must remain available through visible content or another touch-friendly interaction. A native disabled button cannot receive focus: do not rely on its tooltip to explain a required action. Root `disabled` disables the hint, independently of the trigger's native disabled state.

Storybook: Overlays / Tooltip includes controls for placement and delays, optional arrow, four preferred placements, disabled hints, controlled state, use within Dialog, nested light/dark themes, long text, small mobile viewport, and reduced motion. Check hover/focus opening, pointer movement onto the text, Escape dismissal, trigger clicks, edge repositioning, and theme inheritance. The Mobile story previews layout; it does not introduce a tap-to-open gesture.

## References

- [Ark UI Tooltip](https://ark-ui.com/docs/components/tooltip).
