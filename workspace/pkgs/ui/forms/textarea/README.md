# Textarea

Textarea styles Ark Field.Textarea, including its native textarea and maintained autoresize behavior. It shares Field's states, accessible associations, and visual tokens. There is no Input subtype or alternate TextField export.

## Contract

Textarea accepts native textarea attributes, styles, events, and refs, including name, form, rows, cols, maxlength, autocomplete, and required. Rows defaults to four. Shared size, tone, valid, invalid, loading, disabled, and readOnly options behave like Input. There is no pill-shaped rounded option for multiline text.

`value` with native `onInput` supports controlled editing. `defaultValue` initializes the native default once and is restored by a native reset for uncontrolled editing. Controlled values require application-owned reset state. Neither model formats, trims, masks, or transforms user input.

`resize="vertical" | "horizontal" | "both" | "none"` defaults to vertical. Native styles can set width and height constraints. `autoresize` delegates measurement and updates to Ark's installed implementation, which configures it on mount and disables manual resizing. Remount when changing this configuration; do not combine autoresize with an expected manual resize handle.

Native editing, selection, composition events, and form participation are preserved. Standalone Textarea requires an accessible name. Within Field, place control IDs on Field.Root and let Ark associate label, description, and error; success descriptions are appended by newui.

## Review

Forms / Textarea includes editable controls, manual vertical resize, Ark autoresize, fixed-size invalid state, sizes, standalone naming, and mobile. The profile form also includes a character counter. All stories follow the theme toolbar. Implementation awaits user validation; no automated tests were added.
