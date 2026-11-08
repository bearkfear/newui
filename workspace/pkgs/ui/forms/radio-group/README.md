# RadioGroup

[Forms](../README.md)

RadioGroup wraps Ark UI Solid RadioGroup. Ark owns exclusive selection, keyboard navigation, focus, label IDs, and native inputs. newui adds shared appearance, Field associations, readonly submission, and cancelable native resets.

```tsx
<RadioGroup.Root name="plan" defaultValue="personal">
  <RadioGroup.Label>Workspace plan</RadioGroup.Label>
  <RadioGroup.Item value="personal">
    <RadioGroup.ItemControl />
    <RadioGroup.ItemText>Personal</RadioGroup.ItemText>
  </RadioGroup.Item>
  <RadioGroup.Item value="team">
    <RadioGroup.ItemControl />
    <RadioGroup.ItemText>Team</RadioGroup.ItemText>
  </RadioGroup.Item>
</RadioGroup.Root>;
```

Root takes a string or null `value`, `defaultValue`, and Ark's `onValueChange(details)` callback with `details.value`. Null clears controlled selection. Item values must be unique. Item automatically includes Ark ItemHiddenInput; do not add another input. Item renders a label, so do not nest interactive elements or labels within it. ItemControl includes the selected dot and accepts custom children. Context and ItemContext expose Ark state.

Root accepts `size="sm" | "md" | "lg"`, semantic `tone`, `valid`, `invalid`, `disabled`, and `readOnly`, inheriting Field options. Invalid overrides valid; disabled appearance takes priority. Items accept local disabled/invalid flags. Root forwards its div ref and native props; Item forwards its label ref and native props.

Use `orientation="vertical" | "horizontal"` for layout and Ark navigation. Horizontal layout wraps. Tab enters/leaves the group; arrow keys move selection, skipping disabled options. Readonly groups remain focusable and block selection changes.

For Field composition, use `Field.Label asChild={(props) => <span {...props()} />}` and omit RadioGroup.Label. Root and item inputs inherit descriptions and feedback associations. Required, disabled, readonly, and invalid Field states propagate. Use one group per Field.

`name`, `form`, and `required` use native radio semantics. Only the selected enabled input is submitted. A required group needs a selected item. newui keeps readonly inputs enabled for native submission and focus while Ark prevents changes. Native disabled fieldsets remain effective.

Uncontrolled form resets restore the initial selection; canceled resets preserve it. Controlled values and controlled resets remain application-owned. The internal reset adapter also synchronizes input checked properties when the value did not change.

## Storybook

Forms / RadioGroup includes controlled selection/clearing, unavailable items, Field feedback, disabled/readonly states, horizontal layout, sizes/tones, native submission/reset, dark, and mobile examples.
