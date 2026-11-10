# FileInput

[Forms](../README.md) · [Field contract](../field.md)

Local file selection backed by Ark UI Solid FileUpload. The `button` presentation offers a simple picker; `boxed` provides a full-width upload surface. `compact` matches Input, Select and Button heights: sm 32px, md 40px and lg 48px. The application owns network uploads, progress, server validation and retries.

```tsx
import { Field, FileInput } from "@egcs/newui/forms";

<Field.Root required>
  <Field.Label>
    Attachment <Field.RequiredIndicator />
  </Field.Label>
  <FileInput.Root name="attachment" variant="compact" accept={{ "application/pdf": [".pdf"] }}>
    <FileInput.Control>
      <FileInput.Trigger>Choose file</FileInput.Trigger>
      <FileInput.ValueText placeholder="No attachment" />
    </FileInput.Control>
  </FileInput.Root>
  <Field.Description>Select a PDF document.</Field.Description>
</Field.Root>;
```

## Parts and options

Root owns one native file input; do not add another HiddenInput. Control, Trigger and ValueText form the standard control. ValueText truncates long names and accepts `placeholder` and `formatValue(files)`. Root supports text-control size, tone, rounded and Field state options. Compact fits in a container with `min-width: 0`; surrounding CSS owns responsive layout.

Indicator follows the inherited state: upload at rest, a lock for readonly, an unavailable symbol for disabled, an alert for invalid, a check for valid and the shared animated spinner for loading. Place it inside Trigger or a Dropzone icon container. Error and success tint the control surfaces and text; disabled uses neutral disabled tokens. Loading remains a visual/busy state and does not disable selection. Trigger and Dropzone both inherit Field descriptions, validation feedback and `aria-busy`.

Label, Dropzone, Context, ClearTrigger, ItemGroup, Item, ItemName, ItemSizeText, ItemDeleteTrigger, ItemPreview and ItemPreviewImage expose Ark composition. Use Dropzone with `disableClick` when nesting Trigger to avoid two picker activation targets. Give standalone triggers an accessible name. Field labels and descriptions are associated automatically. ItemDeleteTrigger has Ark's file-specific accessible name.

For boxed uploads, place a Dropzone inside Control and compose an icon, a short action and format/size guidance inside it. The entire surface handles clicks, keyboard activation and drops; no nested button is needed. ValueText with `placeholder=""` shows the selected filename without empty-state clutter. Dropzones share the centered surface styling, and selected items use bordered rows with compact removal actions.

`acceptedFiles` controls selection; `defaultAcceptedFiles` initializes uncontrolled selection. `onFileChange` receives accepted and rejected files; `onFileAccept` and `onFileReject` expose Ark notifications. Context exposes accepted/rejected files, clear/delete/set operations and picker activation. Controlled callers must update their value after a change; resets preserve application-owned values.

`multiple` enables unlimited selection unless `maxFiles` is set. Explicit `maxFiles` takes precedence and values above 1 enable the native multiple picker. Single selection replaces the previous file; multiple selection appends according to Ark's duplicate and limit handling. `accept`, `minFileSize`, `maxFileSize` and `validate` use Ark's contracts. Accept is a picker hint and local validation, not a server security boundary. Use `onFileReject` to show application-specific feedback.

## Native forms and state

Named inputs submit real File objects through FormData. Disabled inputs and disabled fieldsets are omitted. Native fieldset disabling also blocks picker activation, drops and removal, including reactive changes; descendants of its first legend retain the native exemption. Readonly blocks picker activation, drops and removal while preserving submission. Field required/invalid/disabled/readonly states are inherited; required uses native constraint validation. An invalid native input focuses the enabled visible trigger, falling back to a keyboard-accessible Dropzone when no enabled trigger exists.

The small native adapter keeps the FileList aligned with accepted selection after rejected input, controlled updates, clear and delete. Opening then canceling the picker preserves selection. An uncanceled form reset restores uncontrolled initial files after native reset propagation; canceled resets preserve selection. Restoring defaults does not emit a selection callback; clearing rejection feedback may emit Ark callbacks. Controlled values remain unchanged. Files cannot be restored across page reloads without the application providing File objects.

## Review examples

Storybook Forms / FileInput includes presentations, inline sizes alongside Input/Select/Button, Field states, multiple images with type/count/size limits and removal, controlled selection, native submission/reset cancellation, long names, dark theme and mobile. DisabledFieldset demonstrates reactive fieldset disabling and a selection-change counter. RequiredDropzone demonstrates required validation focus without a Trigger. Examples contain no interaction tests. Browser review should include picker cancellation, rejected files, required focus and actual FormData values.
