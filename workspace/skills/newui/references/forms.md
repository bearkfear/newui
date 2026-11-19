# Forms and input controls

Import these components and their UI helpers from `@egcs/newui/forms`. Use `Field` where the application needs a visible label, hint, or validation message. Connect controlled values using each control's event shape.

## Text and values

- [Field](https://newui.egcs.com.br/en/components/field/) connects `Root`, `Label`, the control, `Description`, and `ErrorText`. Set `required` or `invalid` on `Root` and derive validation from application state.
- [Input](https://newui.egcs.com.br/en/components/input/) supplies a native single-line input for text, email, password, search, telephone, and URL. Use `value` and native `onInput` for controlled text or `defaultValue` for uncontrolled editing.
- [Textarea](https://newui.egcs.com.br/en/components/textarea/) supplies multiline native text input. Use `rows` for its starting height and `autoresize` when it should grow with content.
- [InputGroup](https://newui.egcs.com.br/en/components/input-group/) adds an `Icon`, `Addon`, or `Action` around one input inside `Root`. Keep the accessible label on an enclosing `Field`.
- [MaskedInput](https://newui.egcs.com.br/en/components/masked-input/) formats text to a pattern. Store `onValueChange`'s `rawValue` for controlled input. Its `complete` flag indicates mask completion, so validate the resulting value separately.
- [NumberInput](https://newui.egcs.com.br/en/components/number-input/) edits localized numeric text. Keep `value` as a canonical decimal string such as `"1234.56"`, preserve `""` for empty, and check `onValueChange`'s `status` for validation.
- [CurrencyInput](https://newui.egcs.com.br/en/components/currency-input/) formats editable amounts with `locale` and `currency`. Values remain canonical strings in major units even in `entryMode="minor-unit"`.
- [RichTextEditor](https://newui.egcs.com.br/en/components/rich-text-editor/) edits schema-backed documents. Compose `Root`, `Content`, and optional `Toolbar` or `CharacterCount`. Feed `onValueChange`'s `details.value` back to controlled `value`. Use `@egcs/newui/rich-text` for document helpers outside the editor.

## Choices and files

- [Select](https://newui.egcs.com.br/en/components/select/) chooses from a `createListCollection` collection. Compose `Root`, `Trigger`, `ValueText`, `Content`, and `Item`. Selection uses an array of item values even in single-select mode.
- [Checkbox](https://newui.egcs.com.br/en/components/checkbox/) represents a checkable option. Compose `Root`, `Control`, and `Label`; controlled state comes from `onCheckedChange`'s `checked`, which can also be indeterminate.
- [CheckboxGroup](https://newui.egcs.com.br/en/components/checkbox-group/) collects multiple independent choices under one group label. Put a `Checkbox.Root` with a distinct `value` under the group `Root` for each choice.
- [RadioGroup](https://newui.egcs.com.br/en/components/radio-group/) picks one visible option. Compose `Root` and `Label` with `Item`, `ItemControl`, and `ItemText` for each option. Use `name` for form submission.
- [Switch](https://newui.egcs.com.br/en/components/switch/) toggles an on/off setting. Compose `Root`, `Control`, and `Label`. Use `checked` with `onCheckedChange` for controlled settings.
- [ColorPicker](https://newui.egcs.com.br/en/components/color-picker/) selects a color with `Root`, `Trigger`, and `Content`. Initialize a color with `parseColor` and enable `Content`'s `alpha` option when opacity is editable.
- [FileInput](https://newui.egcs.com.br/en/components/file-input/) selects local files. Choose `button`, `compact`, or `boxed` presentation and configure `accept`. Handle the actual upload and its progress in the app.

## Dates and locale

- [DateInput](https://newui.egcs.com.br/en/components/date-input/) supports keyboard editing of segmented calendar dates. Compose `Root` with `Control` and use `parseDate` for ISO dates.
- [DatePicker](https://newui.egcs.com.br/en/components/date-picker/) adds a calendar to a single calendar date. Use `Root`, `Control` with `Input` and `Trigger`, and `Content`. The selected value is an array of calendar dates.
- [DateRangePicker](https://newui.egcs.com.br/en/components/date-range-picker/) reuses the date picker parts for a start and end. Use `Input` for each endpoint with the appropriate index and preserve partial selection while the user is editing.
- [LocaleProvider](https://newui.egcs.com.br/en/components/locale-provider/) sets the locale for a subtree of date controls. Set `locale` for the intended audience and use ISO `CalendarDate` values for application state.
