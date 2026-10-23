# Form fields

[Workspace](../../../README.md)

## Text fields: accepted naming and composition

In Solid UI, Text Field is the family grouping the field and its parts. `TextFieldInput` is the single-line control and `TextFieldTextArea` is the multiline control. Text Field is not a synonym for textarea.

API direction approved by the user:

- `Field`: shared structure for the field's label, description, error, and states.
- `Input`: single-line control based on `<input>`.
- `Textarea`: multiline control based on `<textarea>`.
- `InputGroup`: composition for adornments, icons, prefixes, suffixes, and actions.

Compose `Field.Root`, `Field.Label`, `Field.Description`, and `Field.ErrorText` around `Input` or `Textarea`. Do not use `TextField` as the public name for this structure. Ark integration and accessible control associations will be defined during implementation.

Input and Textarea must work independently, with an accessible name supplied by the consumer, or within Field. Define how parts receive IDs and accessibility attributes before finalizing the API. Avoid making Textarea an Input subtype or exporting equivalent public components with confusing names.
