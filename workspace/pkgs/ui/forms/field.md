# Form fields

[Forms](README.md)

## Text controls and composition

- `Field`: shared structure for labels, descriptions, errors, and states.
- `Input`: single-line control based on `<input>`.
- `Textarea`: multiline control based on `<textarea>`.
- `InputGroup`: composition for adornments, icons, prefixes, suffixes, and actions.

Compose `Field.Root`, `Field.Label`, `Field.Description`, `Field.ErrorText`, and optional `Field.SuccessText` around Input or Textarea. The family uses Ark Field with newui styles and explicit success feedback.

Input and Textarea also work independently with an accessible name. Ark owns label, helper/error IDs, and native states; newui appends success descriptions without replacing those associations.

See the [Field](field/README.md), [Input](input/README.md), [Textarea](textarea/README.md), and [InputGroup](input-group/README.md) contracts. Applications own validation rules, timing, and form-library integration. Use [MaskedInput](masked-input/README.md) for opt-in pattern masking.
