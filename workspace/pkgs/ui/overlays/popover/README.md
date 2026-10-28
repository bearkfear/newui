# Popover

Click or tap disclosure for interactive content, using Ark UI Solid Popover. Ark owns open state, focus, tab order across the portal, Escape/outside dismissal, accessible title/description associations, positioning, collision handling, and presence. The shared overlay portal preserves theme tokens, typography, and reduced motion.

## API

- `Root`: Ark props, including controlled `open` / `onOpenChange`, `defaultOpen`, `autoFocus`, `initialFocusEl`, `finalFocusEl`, `restoreFocus`, `modal`, and dismissal callbacks. Defaults to nonmodal behavior with lazy mounting and exit unmounting. Keep Root mounted while changing state.
- Root `positioning` merges with `placement: "bottom-start"`, `gutter: 8`, `strategy: "fixed"`, and `overflowPadding: 16`. Use `sameWidth` to match the trigger or Anchor width.
- `Trigger`: Ark button with native props, events, refs, and render-function `asChild` for Button composition. `Anchor` optionally positions relative to another element.
- `Content`: includes Portal, Positioner, Surface, and an arrow by default. `showArrow={false}` removes the arrow; optional `mount` selects the portal destination. Other props go to Ark content. Supply a Title or Content `aria-label` for an accessible name.
- `Header`, `Title`, `Description`, `Body`, `Footer`: optional composition parts. Header and footer use compact surface styling; Body scrolls while they stay visible. Description should be short; put longer structured content in Body.
- `CloseTrigger`: named icon button by default. Supports children or `asChild` for Done/Cancel actions, unique IDs, native events, disabled, and refs. A click closes unless canceled with `event.preventDefault()`. Custom text supplies the accessible name unless `aria-label` is specified.
- `Portal`, `Positioner`, `Surface`, `Arrow`, `ArrowTip`: advanced parts for custom composition. Arrow includes ArrowTip by default. Do not wrap Content in another Portal or Positioner. Use Root `portalled={false}` when composing an inline Surface without Portal.
- `Context`: Ark context for application integration.

Public types: `PopoverRootProps`, `PopoverTriggerProps`, `PopoverContentProps`, `PopoverCloseTriggerProps`, `PopoverPortalProps`, `PopoverPositionerProps`, `PopoverSurfaceProps`, and `PopoverArrowProps`.

## Example

```tsx
<Popover.Root>
  <Popover.Trigger asChild={(props) => <Button {...props()}>Project details</Button>} />
  <Popover.Content>
    <Popover.Header>
      <Popover.Title>Website redesign</Popover.Title>
      <Popover.Description>The next milestone is ready.</Popover.Description>
      <Popover.CloseTrigger />
    </Popover.Header>
    <Popover.Body>
      <Text>Share feedback before publishing the update.</Text>
    </Popover.Body>
    <Popover.Footer>
      <Popover.CloseTrigger asChild={(props) => <Button {...props()}>Done</Button>} />
    </Popover.Footer>
  </Popover.Content>
</Popover.Root>;
```

## Visual and behavior contracts

The card follows Dialog's header/body/footer visual language, using Radix background, surface, border, and text tokens. Public tokens: `--nui-popover-width` (20rem), `--nui-popover-shadow`, and `--nui-z-popover` (1050, above the default modal layer and below Tooltip). Width is limited to the viewport minus 2rem. Content height follows available positioning space and the viewport; Body scrolls. Override tokens on a surrounding scope so the portal can inherit them. System and workshop reduced motion disable animations.

By default the rest of the page stays interactive. Ark moves focus into the content and manages return focus and dismissal. `modal={true}` adds focus trapping, outside isolation, and scroll locking without adding a backdrop. Prefer Dialog for larger modal tasks and Alert Dialog for critical confirmation. Buttons and links in the body do not automatically close the popover; compose CloseTrigger or update controlled state when needed. Keep application state outside lazy content when it must survive closing.

## Review

Storybook: Overlays / Popover includes interactive notification preferences, optional arrow, placements, modal and dismissal options, controlled state, separate anchor with matching width, use within Dialog, nested light/dark themes, long content, small mobile viewport, and reduced motion. Check click/tap opening, Tab navigation, Escape/outside dismissal, focus restoration, clipping near viewport edges, scrolling, and theme inheritance.

The arrow uses the card's border color and follows the header/footer surface when adjoining those edges. Storybook's Arrow In Both Themes opens light and dark examples side by side for placement review.

The user approved the implementation and Storybook examples, including the revised arrow. No automated tests were added.

## References

- [Ark UI Popover](https://ark-ui.com/docs/components/popover).
