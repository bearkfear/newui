# Switch

[Forms](../README.md) · [Buefy design reference](https://buefy.org/documentation/switch)

Switch wraps `@ark-ui/solid/switch`. Ark owns binary selection, label associations, native input events, focus, and keyboard behavior. newui adds Buefy-inspired track variants, shared Field options, native switch semantics, and cancelable form resets. Styling uses newui's Radix tokens; no Buefy source is included.

```tsx
<Field.Root>
  <Switch.Root name="notifications" defaultChecked>
    <Switch.Control />
    <Switch.Label>Enable notifications</Switch.Label>
  </Switch.Root>
  <Field.Description>Receive updates about your workspace.</Field.Description>
</Field.Root>;
```

## API and appearance

Root accepts `checked`, `defaultChecked`, and `onCheckedChange(details)` with boolean `details.checked`. Controlled state and controlled resets belong to the application. Map application-specific on/off values in the callback; the switch state stays boolean.
- `size="sm" | "md" | "lg"` controls track, thumb, and label sizing.
- `tone` uses the shared neutral, primary, info, success, warning, and danger options for the checked state.
- `passiveTone` uses the same options for the unchecked state, defaulting to a neutral track.
- `variant="solid" | "outline"` selects filled or outlined tracks; solid is the default.
- `rounded` defaults to true; false gives the track and thumb smaller corners.
- `labelPosition="start" | "end"` places the label before or after the control; end is the default.

Root renders a label and automatically includes Ark HiddenInput with `role="switch"`. Root forwards its label ref, events, native attributes, and additive class. Do not add another input or nest interactive elements or labels inside Root. Use Switch.Label as the visible label, including inside Field, rather than also rendering Field.Label. A label should describe the setting consistently across both states.

Control includes Thumb by default. For custom icons, place Switch.Thumb inside Control and provide decorative children. Switch.Context exposes Ark's state. Icon-only controls need `aria-label` or `aria-labelledby` on Root; these naming attributes are forwarded to the native input.

## Field and native forms

Size, tone, valid, invalid, disabled, and readOnly inherit shared Field options. Invalid overrides valid; parent disabled/readonly/invalid states cannot be cleared locally. Field.Description, ErrorText, and SuccessText remain associated with the input. Track geometry is configured on Switch.Root independently of text-field rounding.

`name`, `value`, `form`, and `required` retain native checkbox form semantics. Checked, enabled switches are submitted; unchecked and disabled switches are omitted. Readonly switches remain focusable, expose `aria-readonly`, block editing, and submit checked values. Native required validation requires a checked switch.

Uncontrolled form resets restore the initial defaultChecked value. Canceled resets preserve selection. The shared choice reset adapter also synchronizes native checked properties for controlled values. Native disabled fieldsets retain browser behavior and receive neutral disabled styling, including dynamically disabled fieldsets and the first-legend exception.

Space toggles a focused input; Tab moves between controls. Checked state changes move the thumb from left to right. Shared focus contours, reduced motion, forced colors, automatic themes, and nested theme scopes remain supported.

## Storybook

Forms / Switch includes default, checked, controlled custom-value mapping, sizes, tones, variants/icons, Field states, a settings panel, native submission/reset/canceled reset, dark, and mobile examples.
