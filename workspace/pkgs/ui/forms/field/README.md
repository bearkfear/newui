# Field

Field uses `@ark-ui/solid/field` 5.39.3 for native control IDs, label targets, required/disabled/readonly states, helper/error associations, and conditional error text. newui adds shared appearance options, explicit success feedback, loading, and horizontal layout. No validation engine or additional dependency is introduced.

```tsx
<Field.Root id="account-email" required invalid={Boolean(error())} valid={checked() && !error()}>
  <Field.Label>
    Email
    <Field.RequiredIndicator />
  </Field.Label>
  <Input name="email" type="email" autocomplete="email" />
  <Field.Description>Used for account notifications.</Field.Description>
  <Field.ErrorText>{error()}</Field.ErrorText>
  <Field.SuccessText>Email confirmed.</Field.SuccessText>
</Field.Root>;
```

## Contract

Root forwards Ark Root/native div props, events, style, and refs. `id` identifies the control, following Ark's contract; Ark generates the root and message IDs. Set custom control IDs on Root rather than overriding Input's ID independently. Use one primary Input or Textarea per Field. Independently labeled controls require separate Fields.

Root accepts `size="sm" | "md" | "lg"`, `tone="neutral" | "primary" | "info" | "success" | "warning" | "danger"`, `rounded`, `valid`, `loading`, and `orientation="vertical" | "horizontal"`. Size, tone, rounded, valid, and loading pass through newui context. Ark owns required/disabled/readonly/invalid propagation. Invalid always overrides valid. Disabled controls use neutral disabled tokens even when validation flags are set.

A tone changes appearance only. `valid={true}` means the application explicitly checked the field; `invalid={false}` remains neutral. ErrorText uses Ark's conditional rendering and polite announcement. SuccessText renders only for valid fields and registers its own unique ID, appended to the control's descriptions without replacing consumer `aria-describedby`. Only one built-in message is shown at a time: error, success, then normal Description. Description remains the fallback when no validation message is rendered. Ark updates the helper/error associations as parts mount or unmount; hidden messages are removed from the DOM and accessible description. Use at most one of each message part per Field.

Loading exposes busy state and does not disable editing. For a visible indicator, compose InputGroup.Loading. RequiredIndicator is decorative; the control retains native required semantics. Its optional `fallback` can display an optional label. Text and icons never replace a visible label or error explanation.

For horizontal layout, put the control and messages in Field.Content after Field.Label. Labels align to the shared control height, and the layout stacks below 640px. CSS remains responsible for surrounding multi-field layouts. All part classes are additive.

The application owns values, validation rules/timing, async requests, submit prevention, and resets for controlled values. The Profile story demonstrates blur/submit validation, revalidation after touch, first-invalid-field focus, simulated saving, and reset. Native Submission And Reset demonstrates platform validation and FormData without a form library.

## Storybook examples

Forms / Field includes the full text-family overview, neutral/valid/invalid/conflicting flags, profile editing, native submission/reset, horizontal layout, and mobile stories. Every story follows the theme toolbar.
