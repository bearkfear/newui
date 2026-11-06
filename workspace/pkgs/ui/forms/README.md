# Forms

[Workspace](../../../README.md)

## Intent

Enable entering, selecting, and editing values with consistent labels, help text, errors, and states.

The first text-family delivery implements Field, Input, Textarea, and InputGroup with Ark behavior and Bulma-inspired Radix styling. It awaits user validation in Storybook. The remaining controls and form-library integration are still planned.

## Planned inventory

- Field, including Label, Content, Description, ErrorText, SuccessText, and RequiredIndicator (implemented; awaiting validation).
- Input, Textarea, and InputGroup (implemented; awaiting validation).
- Checkbox, Radio Group, and Switch.
- Number Field, OTP Field, and Slider.
- Select, Combobox, and Date Picker.
- File Upload.
- Field groups and horizontal form examples.
- Complete form and settings compositions, moved from stage 6 to accompany their controls.

## Agreed decisions

Field is the shared structure. Input is the single-line control and Textarea is the multiline control. InputGroup combines adornments, prefixes, suffixes, and actions. Do not use TextField as the public name for this structure.

Input and Textarea must work independently or within Field, with an accessible name in both cases. Detailed decisions are in the [field contract](field.md).

## Ideas and questions

Field and InputGroup standardize text-field composition. Field groups and File Upload remain planned. The implementation uses Ark Field and native text controls without a new dependency; newui owns visual variants and explicit valid/success feedback.

Ark owns label/description/error associations; newui appends success descriptions. Native attributes, refs, editing, FormData, value/defaultValue, and resets are preserved. See the [Field](field/README.md), [Input](input/README.md), [Textarea](textarea/README.md), and [Input Group](input-group/README.md) contracts. Form-library integration and the distinction between native selection and a custom Select remain separate decisions. Complete application examples belong to [Compositions](../compositions/README.md).

Forms / Field / Overview covers the family, with interactive profile editing, password reveal/clear/search actions, sizes, tones, addons, loading, readonly/disabled states, explicit validation, horizontal layout, and mobile. Native Submission And Reset demonstrates browser form behavior. No new automated tests were added.

## Planned extensions

[Input masking](input-masking.md) will be opt-in and developed alongside the input editing contract. Shared display [formatting](../utilities/formatting.md) lives in Utilities. Neither feature is implemented yet.
