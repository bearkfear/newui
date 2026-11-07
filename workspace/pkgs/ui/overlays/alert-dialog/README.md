# Alert Dialog

Critical confirmations built on the validated Dialog foundation. Ark UI Solid Dialog with `role="alertdialog"` owns focus trapping/restoration, accessible associations, keyboard behavior, modal isolation, scroll locking, and presence. The existing Dialog portal preserves theme tokens and reduced motion.

## API

- `Root`: controlled or uncontrolled Ark Dialog state with lazy mounting and exit unmounting. Always modal with focus trapping, scroll locking, and outside dismissal disabled. Escape cancels by default; use `closeOnEscape={false}` for an explicit button choice. Keep Root mounted while changing open state.
- `Trigger`: Ark Dialog Trigger, including render-function `asChild` for Button composition.
- `Content`: the shared Dialog card, defaulting to size `sm`; also supports `md`, `lg`, and a portal `mount` destination. Includes portal, backdrop, and positioner.
- `Header`, `Title`, `Description`, `Body`, `Footer`: shared Dialog parts. Always supply a Title and a concise Description explaining the consequence. Body is optional and scrolls when needed.
- `CancelTrigger`: Ark CloseTrigger, styled as a neutral outline button with a default Cancel label. Ark focuses this button initially. Render exactly one, leave its generated ID intact, and place it before ActionTrigger. For a custom ID or different safe focus target, supply Root `initialFocusEl`.
- `ActionTrigger`: Ark CloseTrigger with a distinct ID, styled as a danger button with a default Confirm label. Give it a specific action label. A successful synchronous click closes the dialog; `event.preventDefault()` keeps it open and preserves Ark event cancellation.
- Both action parts support native events, disabled, refs, and `asChild`. Use `asChild` with Button to change tone, variant, or show loading. ActionTrigger does not execute application work by itself.
- `Context`: Ark Dialog context for application integration.

Public types: `AlertDialogRootProps`, `AlertDialogContentProps`, and `AlertDialogTriggerProps`.

## Example

```tsx
<AlertDialog.Root>
  <AlertDialog.Trigger asChild={(props) => <Button {...props()}>Delete project</Button>} />
  <AlertDialog.Content>
    <AlertDialog.Header>
      <AlertDialog.Title>Delete this project?</AlertDialog.Title>
      <AlertDialog.Description>
        This permanently removes the project and all shared updates.
      </AlertDialog.Description>
    </AlertDialog.Header>
    <AlertDialog.Footer>
      <AlertDialog.CancelTrigger />
      <AlertDialog.ActionTrigger onClick={deleteProject}>Delete project</AlertDialog.ActionTrigger>
    </AlertDialog.Footer>
  </AlertDialog.Content>
</AlertDialog.Root>;
```

Use the example's direct action only for synchronous work. For async work, control Root open state, prevent the action click's default closing, and close after success. Keep errors visible and allow retry. Disable action/cancel controls and prevent Escape while pending when the operation cannot be interrupted. Pending state, requests, and errors belong to the application; the component does not infer them from promises.

## Storybook examples

Storybook: Overlays / Alert Dialog includes destructive confirmation, medium sizing, explicit choice, controlled async failure/retry, publishing with a primary action, mobile, dark theme, and reduced motion. Check initial Cancel focus, Tab containment, Escape cancellation, outside clicks staying open, and focus restoration. AsyncConfirmation simulates failure on the first attempt and success on retry without external requests.

## References

- [Ark UI Dialog and Alert Dialog behavior](https://ark-ui.com/docs/components/dialog#alert-dialog).
- [Shared Dialog contracts](../dialog/README.md).
