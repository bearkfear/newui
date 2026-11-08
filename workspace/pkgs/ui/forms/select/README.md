# Select

[Forms](../README.md)

Select styles Ark UI Solid Select from the installed `@ark-ui/solid` dependency. Ark owns keyboard
navigation, typeahead, selection, positioning, dismissal, focus restoration, and option semantics.
The field follows Bulma and the existing newui Inputs; the floating list follows Solid UI.

```tsx
const countries = createListCollection({
  items: [
    { label: "Brazil", value: "br" },
    { label: "Chile", value: "cl" },
  ],
});

<Field.Root required>
  <Field.Label>Country</Field.Label>
  <Select.Root collection={countries} name="country" defaultValue={["br"]}>
    <Select.Trigger>
      <Select.ValueText placeholder="Choose a country…" />
      <Select.Indicator />
    </Select.Trigger>
    <Select.Content>
      <For each={countries.items}>
        {(item) => (
          <Select.Item item={item}>
            <Select.ItemText>{item.label}</Select.ItemText>
            <Select.ItemIndicator />
          </Select.Item>
        )}
      </For>
    </Select.Content>
  </Select.Root>
  <Field.Description>Choose your destination.</Field.Description>
</Field.Root>;
```

## Contract

Import `Select` and `createListCollection` from the main or Forms entry. Collections accept strings
or objects, including custom `itemToValue`, `itemToString`, and `isItemDisabled` mappings. Values
must uniquely identify options. `value` and `defaultValue` use string arrays in both modes;
`onValueChange` receives Ark's details, including selected values and items. `defaultValue` initializes
once. Controlled values and controlled resets remain application-owned.

Enable `multiple` for several selections; use `closeOnSelect={false}` to keep the list open between
choices. ValueText displays selected labels. Put optional ClearTrigger beside Trigger within Control;
never nest buttons. Group and GroupLabel associate automatically. ItemText supplies the option label;
keep decorative icons hidden from assistive technology. Use Field.Label or standalone Select.Label.

Root inherits Field's size, tone, rounded, valid, invalid, loading, disabled, and readonly options.
Parent disabled, readonly, and invalid states cannot be cleared locally. Trigger includes helper,
error, success, and consumer description IDs. Loading shows a spinner through Indicator and exposes
busy state without disabling selection. Disabled controls are excluded from submission; readonly
controls remain focusable and retain their value.

Root includes Ark HiddenSelect for `name`, `form`, `required`, autofill, and FormData. Multiple values
produce repeated entries under the same name. A small adapter defers uncontrolled resets until the
native event finishes, preserving canceled resets and synchronizing native option selection.
Native required validation forwards focus from the auxiliary select to Trigger.

Content includes the theme-preserving portal and positioner, with optional `mount`. It opens at
bottom-start, matches the trigger width, flips when space is limited, and scrolls within the viewport.
Root accepts Ark positioning and open-state props. Enter/Space/arrows open and navigate; typing
letters uses typeahead; Escape dismisses and restores focus. Search input belongs to Combobox.

## Storybook examples

Forms / Select includes open, controlled, multiple/clear, groups, scrollable, inherited states,
sizes/rounded, tones, native submission/canceled reset, Dialog, dark, and mobile examples.
