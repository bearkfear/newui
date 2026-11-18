# Color Picker

ColorPicker composes Ark UI Solid ColorPicker with newui Field, visual tokens, and the theme-preserving overlay portal. Ark manages color values, keyboard and pointer interaction, positioning, dismissal, and form reset. No additional dependency is required.

```tsx
import { ColorPicker, Field, parseColor } from "@egcs/newui/forms";

<Field.Root>
  <Field.Label>Accent color</Field.Label>
  <ColorPicker.Root name="accent" defaultValue={parseColor("#0090ff")}>
    <ColorPicker.Trigger />
    <ColorPicker.Content alpha />
  </ColorPicker.Root>
</Field.Root>;
```

Values are Ark Color objects; use `parseColor` and `onValueChange` for controlled state. A hidden input submits Ark's current serialized color under `name`. The hexadecimal input commits on blur or Enter. `alpha` adds an opacity slider; callers should supply an opaque initial color when opacity is not offered. Set `hexLabel`, `hueLabel`, and `alphaLabel` for localized controls. Add `SwatchGroup` and `SwatchTrigger` inside Content for suggested colors. Use Field.Label or ColorPicker.Label to name the trigger. Controlled values and resets remain application-owned.

Storybook covers default, controlled, transparency, states, form submission/reset, dialog, dark and mobile presentations. See [Ark Color Picker](https://ark-ui.com/docs/components/color-picker).
