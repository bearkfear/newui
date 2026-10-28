# Sheet

An edge-attached presentation of the existing Dialog. Ark UI Solid Dialog continues to own focus trapping/restoration, accessible associations, outside/Escape dismissal, scroll locking, presence, and nested-layer behavior. The shared Dialog portal preserves themes and typography. The composition takes inspiration from Solid UI Sheet, while the header/body/footer follow our approved Bulma-inspired Dialog styling.

## API

- `Root`: the existing Dialog Root and all its Ark props, including controlled `open` / `onOpenChange`, `defaultOpen`, `initialFocusEl`, `finalFocusEl`, `modal`, and dismissal callbacks. Defaults to modal behavior, lazy mounting, and exit unmounting. Keep Root mounted while changing state.
- `Trigger`: existing Dialog Trigger with native props, refs, and render-function `asChild` for Button composition.
- `Content`: includes Portal, Backdrop, Positioner, and Surface. `side` is `right` (default), `left`, `top`, or `bottom`. Optional `mount` selects the portal destination. Other props go to Ark content.
- `size`: `sm` (24rem), `md` (default, 28rem), or `lg` (40rem). Left/right panels fill the viewport height and use that maximum width; top/bottom panels fill the viewport width and use that maximum height. Width never exceeds the viewport; horizontal panels leave at least 2rem of vertical space outside.
- `Header`, `Title`, `Description`, `Body`, `Footer`, `CloseTrigger`: existing Dialog parts. Provide a Title or Content `aria-label`. Body fills remaining space and scrolls independently, keeping the header and footer visible. The default CloseTrigger is a named icon; compose a text action with `asChild`. Native events, refs, and cancellation are preserved.
- `Portal`, `Backdrop`, `Positioner`, `Surface`: advanced composition parts. Supply matching `side` values to Positioner and Surface. Do not wrap Content in another Portal or Positioner.
- `Context`: existing Ark Dialog context.

Public types: `SheetRootProps`, `SheetContentProps`, `SheetSurfaceProps`, `SheetPositionerProps`, and `SheetPortalProps`.

## Example

```tsx
<Sheet.Root>
  <Sheet.Trigger asChild={(props) => <Button {...props()}>View project</Button>} />
  <Sheet.Content side="right">
    <Sheet.Header>
      <Sheet.Title>Website redesign</Sheet.Title>
      <Sheet.Description>Project details and team activity.</Sheet.Description>
      <Sheet.CloseTrigger />
    </Sheet.Header>
    <Sheet.Body>
      <Text>The next milestone is ready for review.</Text>
    </Sheet.Body>
    <Sheet.Footer>
      <Sheet.CloseTrigger asChild={(props) => <Button {...props()}>Done</Button>} />
    </Sheet.Footer>
  </Sheet.Content>
</Sheet.Root>;
```

## Behavior and scope

The panel slides from the selected edge; the backdrop uses the existing Dialog fade. Theme tokens, nested layers, and system/workshop reduced motion follow the existing overlay contract. Header/footer spacing accounts for top/bottom safe-area insets. Consumers can override `--nui-sheet-size` locally through the existing class/style contracts; it controls the relevant maximum dimension. Other visual tokens are shared with Dialog.

The application chooses responsive sides; the Responsive story uses the maintained media-query primitive to select right from 48rem and bottom below it, keeping one Root mounted and application state intact. Sheet does not automatically switch presentation. Nonmodal mode omits the backdrop and lets pointer events reach the page outside the panel.

This delivery adds no dragging, swipe-to-dismiss, snap points, or decorative drag handle. A gesture-enabled Drawer remains a separate future evaluation. Forms remain deferred; examples use existing content and action primitives. Keep application state outside lazy content when it must survive closing.

## Review

Storybook: Overlays / Sheet includes all four sides, three sizes, controlled state, nonmodal mode, dismissal options, long content, responsive side selection, a nested Dialog, dark theme, mobile right/bottom layouts, and reduced motion. Review sliding direction, focus containment/restoration, Escape/outside closing, body scrolling with a fixed footer, nesting, and viewport fit.

The user approved the implementation and Storybook examples, including the shared compact header spacing. No automated tests were added.

## References

- [Solid UI Sheet](https://www.solid-ui.com/docs/components/sheet).
- [Ark UI Dialog](https://ark-ui.com/docs/components/dialog).
- [Shared Dialog contracts](../dialog/README.md).
