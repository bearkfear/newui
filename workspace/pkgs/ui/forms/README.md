# Forms

[Workspace](../../../README.md)

## Intent

Enable entering, selecting, and editing values with consistent labels, help text, errors, and states.

## Planned inventory

- Field, including Label, Description, and ErrorText.
- Input, Textarea, and InputGroup.
- Checkbox, Radio Group, and Switch.
- Number Field, OTP Field, and Slider.
- Select, Combobox, and Date Picker.
- File Upload.
- Field groups and horizontal form examples.

## Agreed decisions

Field is the shared structure. Input is the single-line control and Textarea is the multiline control. InputGroup combines adornments, prefixes, suffixes, and actions. Do not use TextField as the public name for this structure.

Input and Textarea must work independently or within Field, with an accessible name in both cases. Detailed decisions are in the [field contract](field.md).

## Ideas and questions

The Field contract, InputGroup, field groups, and File Upload incorporate needs identified through Bulma. These additions were accepted and have not been implemented yet.

Define ID, description, and error associations, controlled and uncontrolled states, and validation integration. Distinguish native selection from a custom Select. Complete examples belong to [Compositions](../compositions/README.md).

## Planned extensions

[Input masking](input-masking.md) will be opt-in and developed alongside the input editing contract. Shared display [formatting](../utilities/formatting.md) lives in Utilities. Neither feature is implemented yet.
