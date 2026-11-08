# CheckboxGroup

[Forms](../README.md) · [Checkbox](../checkbox/README.md)

CheckboxGroup styles Ark UI Solid Checkbox.Group and composes Checkbox.Root items. Ark owns selection, group membership, and optional selection limits. newui adds shared options, unique item IDs within Field, accessible group naming, and native form resets.

```tsx
<CheckboxGroup.Root name="channels" defaultValue={["email"]}>
  <CheckboxGroup.Label>Notifications</CheckboxGroup.Label>
  <Checkbox.Root value="email">
    <Checkbox.Control />
    <Checkbox.Label>Email</Checkbox.Label>
  </Checkbox.Root>
  <Checkbox.Root value="sms">
    <Checkbox.Control />
    <Checkbox.Label>SMS</Checkbox.Label>
  </Checkbox.Root>
</CheckboxGroup.Root>;
```

Use unique string values on items. Root takes `value: string[]`, `defaultValue: string[]`, and `onValueChange(value: string[])`. Unlike Ark's Solid group primitive, newui accepts the current value directly, consistent with Select. Readonly and disabled groups preserve selection; items can also be disabled individually. `maxSelectedValues` disables unselected items at the limit while selected items remain removable.

`orientation="vertical" | "horizontal"` controls layout; horizontal groups wrap. Each checkbox remains its own Tab stop; Space toggles it. Shared `size`, `tone`, `valid`, `invalid`, `disabled`, and `readOnly` options propagate to items. Field states and success/error descriptions propagate too.

For Field composition, render `Field.Label asChild={(props) => <span {...props()} />}` before Root and omit CheckboxGroup.Label. This names the group without a native label targeting a div. Field.Description, ErrorText, and SuccessText remain outside Root. Use one group per Field. Standalone groups use CheckboxGroup.Label or an explicit accessible name.

Group-level required/minimum selection is application validation, not native `required` on every checkbox. Field required state does not make every member mandatory. An item with its own explicit `required` uses native checkbox validation.

Root's `name` produces repeated FormData entries for selected items. Disabled items are omitted; readonly selected items are submitted. Root forwards its div ref and native props. Use an item's `form` attribute for external form association. A group should belong to a single form.

Uncontrolled resets restore defaultValue, including a canceled-reset guard. Controlled resets remain application-owned. Select-all is composed with a separate controlled Checkbox; the group does not infer aggregation rules.

## Storybook

Forms / CheckboxGroup includes select-all with indeterminate state, controlled validation, disabled/readonly states, selection limits, horizontal layout, native submission/reset, dark, and mobile examples.
