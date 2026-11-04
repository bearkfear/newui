# Button

[Actions](../README.md)

A native button with a safe default `type="button"`. Colors and states follow the official Radix scales through semantic tokens; see [Themes](../../foundations/themes.md).

## API

- `variant`: solid (default), outline, soft, ghost, link. The link appearance still performs an action; use an anchor for navigation.
- `tone`: primary (default), neutral, info, success, warning, danger.
- `size`: xs (24px), sm (32px), md (40px, default), lg (48px).
- `responsive`: use one smaller size below 640px; xs stays unchanged.
- `rounded`: pill corners. `fullWidth`: fill the available width.
- `startIcon` / `endIcon`: decorative JSX icon slots with size and alignment applied to direct SVG children.
- `iconOnly`: square button; supply `aria-label` and an icon with the `nui-button-icon` class.
- `loading`: disable activation, expose `aria-busy`, and overlay a spinner while preserving label width and the accessible name. Applications own async state and announcements of results.
- Native attributes, `disabled` (neutral background/border/text without opacity), `aria-pressed`, events, and refs are forwarded.

Use `Button iconOnly` for icon actions, including close buttons, with an accessible name such as `aria-label="Close"`. No standalone IconButton or CloseButton API is planned. Existing component-specific close parts retain their contracts. Compose overlay close actions with the owning component's close trigger to preserve dismissal behavior.

```tsx
import { Button, ButtonGroup } from "@egcs/newui";
import "@egcs/newui/styles.css";

<Button tone="success" loading={saving()}>Save changes</Button>
<ButtonGroup variant="outline" aria-label="Document actions">
  <Button>Duplicate</Button>
  <Button tone="danger">Delete</Button>
</ButtonGroup>
```

ButtonGroup shares size, variant, tone, and disabled state. Explicit button variants override group defaults; a disabled group disables all its buttons. Native Tab navigation is preserved.

Enabled solid buttons use the [Radix Themes pressed treatment](https://github.com/radix-ui/themes/blob/main/packages/radix-ui-themes/src/components/_internal/base-button.css): the existing hover background plus `brightness(0.92) saturate(1.1)` in light themes or `brightness(1.08)` in dark themes. The public `--nui-button-solid-active-filter` token follows system, explicit, and nested themes. This is an approved exception to the no-filter color convention, scoped to native `:active` and excluding disabled/loading buttons and open triggers (`data-state="open"`). It does not move content, change hover colors, or persist on `aria-pressed` alone. Other variants retain their existing state colors. The effect has no motion and remains available with reduced motion. Review Press Feedback, Dark, Themes, and Reduced Motion in Storybook; the user approved this implementation and its Storybook examples.

Run `bun run dev` from `workspace/` and open Actions / Button and Actions / Button group. The examples have been validated by the user; no new automated tests were added. Existing interaction examples remain in place.

Recipes use tailwind-variants' lightweight entry without class merging. Use variants, scoped public `--nui-*` tokens, or `style` to customize. `class` is additive and does not promise utility conflict resolution. Ark is not required for native button behavior.
