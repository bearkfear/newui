# Form fields

[Workspace](../../../README.md)

## Text fields: accepted naming and composition

In Solid UI, Text Field is the family grouping the field and its parts. `TextFieldInput` is the single-line control and `TextFieldTextArea` is the multiline control. Text Field is not a synonym for textarea.

API direction approved by the user:
- `Field`: shared structure for the field's label, description, error, and states.
- `Input`: single-line control based on `<input>`.
- `Textarea`: multiline control based on `<textarea>`.
- `InputGroup`: composition for adornments, icons, prefixes, suffixes, and actions.

Compose `Field.Root`, `Field.Label`, `Field.Description`, `Field.ErrorText`, and optional `Field.SuccessText` around `Input` or `Textarea`. Do not use `TextField` as the public name for this structure. The first text-family implementation uses Ark Field with newui styles and explicit success feedback; it awaits user validation.

Input and Textarea work independently with a consumer-supplied accessible name, or within Field. Ark owns label, helper/error IDs, and native states; newui appends success descriptions without replacing those associations. Avoid making Textarea an Input subtype or exporting equivalent public components with confusing names.

Implementation contracts: [Field](field/README.md), [Input](input/README.md), [Textarea](textarea/README.md), and [Input Group](input-group/README.md). Validation rules/timing, form-library selection, and masking remain outside this delivery. No new automated tests were added.
