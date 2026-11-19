---

name: newui
description: Build and edit SolidJS or SolidStart interfaces using the NewUI design system (@egcs/newui). Use when a project already uses NewUI or the user requests it for a SolidJS UI, including component selection, composition, styling, and theming.
---

# NewUI

## Start in the consuming project

1. Check the project manifest and lockfile for `@egcs/newui` and its installed version. Follow the app's existing imports and stylesheet setup. If an example differs from the installed version, use the installed package's public declarations to check the specific component or prop.
2. For a new setup, add `@egcs/newui` using the project's package manager and make sure `solid-js` meets the package's peer requirement. Import `@egcs/newui/styles.css` once in the app entry. It includes a global reset and works without Tailwind. If the app already uses [NewUI's Tailwind integration](https://newui.egcs.com.br/en/getting-started/tailwind/), keep that setup and add the relevant style area when needed.
3. Use named exports from `@egcs/newui` or a documented area entry such as `@egcs/newui/forms`. Import charts from `@egcs/newui/charts`. Use public entries and compose the documented parts, such as `Dialog.Root`, `Dialog.Trigger`, and `Dialog.Content`.

Once the styles are loaded, a NewUI component is regular Solid JSX. For example, this button can submit an existing form:

```tsx
import { Button } from "@egcs/newui/actions";

export function SaveButton() {
  return <Button type="submit">Save changes</Button>;
}
```

## Choose by intent

| Need                                            | Component and example                                                       | Public area |
| ----------------------------------------------- | --------------------------------------------------------------------------- | ----------- |
| Actions for a table row or card                 | [DropdownMenu](https://newui.egcs.com.br/en/components/dropdown-menu/)      | `actions`   |
| Confirm a destructive action                    | [AlertDialog](https://newui.egcs.com.br/en/components/alert-dialog/)        | `overlays`  |
| Open a form or details in a modal               | [Dialog](https://newui.egcs.com.br/en/components/dialog/)                   | `overlays`  |
| Explain an icon on hover or focus               | [Tooltip](https://newui.egcs.com.br/en/components/tooltip/)                 | `overlays`  |
| Show controls on click or tap                   | [Popover](https://newui.egcs.com.br/en/components/popover/)                 | `overlays`  |
| Associate a label, hint, or error with an input | [Field](https://newui.egcs.com.br/en/components/field/) with a form control | `forms`     |
| Render tabular data                             | [Table](https://newui.egcs.com.br/en/components/table/)                     | `data`      |

Area imports use `@egcs/newui/<area>`. For other needs, start at the [component catalog](https://newui.egcs.com.br/en/components/) and open the relevant component page for its anatomy, import, and examples.

## Find the component API

Read the matching local reference for imports, core parts, and behavior before opening the official example for a specific prop or variant.
- [Actions, menus, and overlays](references/actions-and-overlays.md)
- [Forms and input controls](references/forms.md)
- [Navigation, layout, and page compositions](references/navigation-and-layout.md)
- [Content, feedback, data, and charts](references/content-and-data.md)

## Compose and style

- Where a trigger supports `asChild`, use Solid's render callback and spread the provided props with `<Button {...trigger()}>`. Give icon-only buttons `iconOnly` and an accessible name, including when they have a tooltip.
- Keep Ark-backed keyboard and focus behavior by using the documented trigger and content parts. Overlay contents such as `Dialog.Content`, `DropdownMenu.Content`, and `Tooltip.Content` handle their own portal and positioning.
- Prefer component variants and semantic tones for visual choices. Use public `--nui-*` tokens and `data-nui-theme` for [theme customization](https://newui.egcs.com.br/en/getting-started/themes-and-tokens/). Match the application's existing layout utilities.
- For a copyable row menu, icon tooltip, or destructive confirmation guidance, see [action patterns](references/action-patterns.md).
