# Forms

[UI package](../README.md)

Enter and edit values with consistent labels, help text, errors, and states.

## Components

- [Field](field/README.md): Label, Content, Description, ErrorText, SuccessText, and RequiredIndicator.
- [Checkbox](checkbox/README.md): native form selection with checked, unchecked, and indeterminate states.
- [CheckboxGroup](checkbox-group/README.md): multiple choices, shared values, and selection limits.
- [RadioGroup](radio-group/README.md): exclusive selection with keyboard navigation and Field feedback.
- [Input](input/README.md): single-line native text controls.
- [Textarea](textarea/README.md): multiline native text controls with optional Ark autoresize.
- [Select](select/README.md): Ark-backed single/multiple selection, typed collections, and native forms.
- [InputGroup](input-group/README.md): icons, addons, prefixes, suffixes, and attached actions.
- [MaskedInput](masked-input/README.md): opt-in pattern masking, configurable tokens, raw values, and native form submission.
- [NumberInput](number-input/README.md): exact decimal strings, locale grouping, configurable precision, and independent number helpers.
- [CurrencyInput](currency-input/README.md): configurable currencies, decimal/minor-unit entry, currency addons, and independent currency helpers.
- [RichTextEditor](rich-text-editor/README.md): schema-backed structured writing, JSON values, HTML/text representations, and server-compatible helpers.

The remaining Forms catalog is unfinished. These components do not include a form validation engine or form-library integration.

## Behavior and composition

Field uses Ark to associate controls, labels, descriptions, and errors; newui adds explicit success feedback and visual variants. Input and Textarea also work independently with an accessible name. See the [field contract](field.md).

Native attributes, refs, events, editing, FormData, default values, and resets are preserved. Applications own controlled values, validation rules, async requests, and submission. Use CSS for surrounding form layouts and [Compositions](../compositions/README.md) for complete application examples.

[Input masking](input-masking.md) documents the IMask adapter and text helpers. The DOM-independent `@egcs/newui/masking` entry supports formatting and validation in Node and browsers.

[Rich text editing](rich-text-editor/README.md) uses canonical JSON and exposes the DOM-independent `@egcs/newui/rich-text` entry for legacy HTML conversion, normalized HTML rendering, plain-text extraction, emptiness checks, and schema validation.

## Storybook examples

Forms / Field / Overview demonstrates profile editing, password reveal, clear/search actions, sizes, tones, addons, loading, readonly/disabled states, explicit validation, horizontal layout, and mobile. Native Submission And Reset demonstrates browser form behavior.
