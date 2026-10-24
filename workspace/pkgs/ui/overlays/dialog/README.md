# Dialog

A modal card inspired by Bulma's visual structure, with Ark UI Solid behavior. The header and footer use compact padding and a subtle Radix surface; the scrollable body stays separate. Footer actions align to the right and wrap when needed.

## API

- `Root`: Ark Dialog props, including open/defaultOpen, onOpenChange, initialFocusEl, finalFocusEl, closeOnEscape, and closeOnInteractOutside. Defaults to modal behavior with lazyMount and unmountOnExit enabled. Keep Root mounted when changing open state.
- `Trigger`: Ark Trigger. Use Solid's render-function asChild to compose the existing Button.
- `Content`: includes Portal, Backdrop, Positioner, and Surface. Options: size sm (28rem), md (default, 40rem), lg (56rem); variant card (default) or free. Optional mount selects a portal destination.
- `Header`: compact title/description layout with an optional CloseTrigger at the right.
- `Title`: Ark h2, used as the dialog's accessible name. Provide Root aria-label if no title is rendered.
- `Description`: optional short description associated by Ark. Put long or structured content in Body instead.
- `Body`: scrollable content region with consistent padding and gaps.
- `Footer`: compact, wrapping action row aligned right. Place the primary action last.
- `CloseTrigger`: a named icon button by default; use asChild for a Cancel or Done button. Instances receive unique IDs; native props, events, refs, and event cancellation are preserved through Ark.

Use Content for the common composition. Advanced layouts can instead compose Portal, Backdrop, Positioner, and Surface. Do not wrap Content in another Portal or Positioner. Context exposes Ark's dialog API for application integration.

Public types: DialogRootProps, DialogContentProps, DialogSurfaceProps, and DialogPortalProps. Other behavioral part props come from the corresponding Ark Dialog parts.

## Example

```tsx
<Dialog.Root>
  <Dialog.Trigger asChild={(props) => <Button {...props()}>Open details</Button>} />
  <Dialog.Content>
    <Dialog.Header>
      <Dialog.Title>Project details</Dialog.Title>
      <Dialog.Description>Review the latest milestone.</Dialog.Description>
      <Dialog.CloseTrigger />
    </Dialog.Header>
    <Dialog.Body>
      <Text>The first milestone is ready for review.</Text>
    </Dialog.Body>
    <Dialog.Footer>
      <Dialog.CloseTrigger asChild={(props) => <Button {...props()}>Done</Button>} />
    </Dialog.Footer>
  </Dialog.Content>
</Dialog.Root>;
```

## Behavior and scope

Ark owns focus trapping/restoration, modal isolation, scroll locking, Escape, outside interaction, presence, accessible associations, and nested-layer metadata. Use Root callbacks to prevent a close attempt when appropriate. An action does not close the dialog unless it uses CloseTrigger or updates controlled open state. Async work and errors remain application-owned.

The portal follows Ark presence so closed lazy content does not create an empty modal layer. It copies inherited --nui-* tokens, color-scheme, and typography from its origin, and observes ancestor theme/class/style changes. Root unmountOnExit removes content after exit; keep application state outside the content when it must survive closing. The portal also carries the workshop's reduced-motion setting, while CSS respects the system preference independently.

Use variant free for media or custom content without card chrome; provide an accessible title or label and a visible way to close. Dialog does not add forms or an AlertDialog API. Critical-confirmation behavior remains a separate planned step.

Review Overlays / Dialog for sizes, long-content scrolling, media, controlled state, dismissal options, nested layers, custom composition, mobile, and reduced motion. The user validated the implementation and manually verified the examples; no automated tests were added.

## References

- [Bulma Modal](https://bulma.io/documentation/components/modal/).
- [Solid UI Dialog](https://www.solid-ui.com/docs/components/dialog).
- [Ark UI Dialog](https://ark-ui.com/docs/components/dialog).
