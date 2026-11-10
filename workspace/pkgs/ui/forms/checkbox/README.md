# Checkbox

[Forms](../README.md)

Checkbox wraps Ark UI Solid Checkbox. Ark owns selection, label associations, native input behavior, focus, and disabled fieldsets. newui supplies appearance, Field feedback, and cancelable form resets.

```tsx
<Field.Root required>
  <Checkbox.Root name="terms" value="accepted">
    <Checkbox.Control />
    <Checkbox.Label>Accept the terms</Checkbox.Label>
  </Checkbox.Root>
  <Field.Description>Required to create an account.</Field.Description>
  <Field.ErrorText>Please accept the terms.</Field.ErrorText>
</Field.Root>;
```

Root renders a label and automatically includes Ark HiddenInput. Do not add another input or nest links, buttons, or labels inside Root. Label renders the associated text; with Field, use Checkbox.Label as the visible label instead of also rendering Field.Label.

Use `checked` with `onCheckedChange`, or `defaultChecked` for uncontrolled selection. Values are `true`, `false`, or `"indeterminate"`; callbacks receive Ark details with `checked`. An indeterminate checkbox submits no value until checked. Select-all aggregation belongs to the application; see the CheckboxGroup story.

Control includes check and minus indicators. Its children can replace those defaults; Checkbox.Indicator exposes Ark's indicator for custom composition. Checkbox.Context exposes Ark's context.

Root accepts `size="sm" | "md" | "lg"`, semantic `tone`, `valid`, `invalid`, `disabled`, and `readOnly`, inheriting Field/group options. Invalid overrides valid. Parent disabled, readonly, and invalid states cannot be cleared locally. Disabled appearance takes precedence over validation. Native input refs are internal; Root forwards its label ref, events, attributes, and additive class.

`name`, `value`, `form`, and `required` retain native checkbox semantics. Unchecked and disabled controls are omitted from FormData. Readonly controls retain their values and remain focusable. Native required validation applies to standalone checkboxes. Uncontrolled resets restore initial selection; canceled resets preserve selection. Controlled resets remain application-owned.

Space toggles a focused input. The visible control reflects keyboard focus. Themes, sizes, validation, reduced motion, and forced colors use shared foundations.

## Storybook

Forms / Checkbox includes default, controlled, indeterminate, disabled/readonly/validation states, sizes/tones, native submission/reset, dark, and mobile examples.

FlowAlignment compares normal, grid and flex flow with multiline labels, inline text, font families and sizes, and real checked/unchecked/indeterminate transitions. Root aligns to the top of its line box so changes to indicator content do not move following content.
