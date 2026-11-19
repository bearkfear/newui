# Actions and overlays

Use named imports from the indicated entry. For composite components, part names below belong to the named export, for example `Dialog.Trigger`.

## Actions from `@egcs/newui/actions`

- [Button](https://newui.egcs.com.br/en/components/button/) renders a native button by default. Set `type="submit"` for form submission and give `iconOnly` buttons an accessible name. Use `loading` for pending actions.
- [ButtonGroup](https://newui.egcs.com.br/en/components/button-group/) wraps related buttons and shares visual options. Give a group an accessible name when it identifies a set of controls. Use `Tabs` when the controls switch content panels.
- [DropdownMenu](https://newui.egcs.com.br/en/components/dropdown-menu/) exposes contextual commands behind a button. Compose `Root`, `Trigger`, `Content`, and `Item`. Give items stable values and run commands with `onSelect`.
- [ContextMenu](https://newui.egcs.com.br/en/components/context-menu/) exposes contextual commands on a target. Compose `Root`, `Trigger`, `Content`, and `Item`. Keep essential actions available from a visible control as well.
- [Menubar](https://newui.egcs.com.br/en/components/menubar/) organizes desktop-style application commands. Under one labeled `Root`, put a `Trigger` and `Content` inside each `Menu` with a unique `value`. Use `NavigationMenu` for website links.

## Overlays from `@egcs/newui/overlays`

- [AlertDialog](https://newui.egcs.com.br/en/components/alert-dialog/) confirms a consequential action. Use `Title`, `Description`, `CancelTrigger`, and `ActionTrigger` inside `Content`. See [action patterns](action-patterns.md) for async handling.
- [Dialog](https://newui.egcs.com.br/en/components/dialog/) presents a modal task or details. Compose `Root`, `Trigger`, and `Content` with a `Title` and a clear way to dismiss. Use `Body` for scrollable details and `Footer` for actions.
- [Sheet](https://newui.egcs.com.br/en/components/sheet/) presents a dialog from a screen edge. Set `side` on `Content` and include a `Title` and a way to dismiss.
- [Popover](https://newui.egcs.com.br/en/components/popover/) opens anchored interactive content by deliberate interaction. Compose `Root`, `Trigger`, and `Content`; use `CloseTrigger` when the panel needs an explicit close action.
- [HoverCard](https://newui.egcs.com.br/en/components/hover-card/) previews supplemental content around a link or trigger. Compose `Root`, `Trigger`, and `Content`. Keep essential information available through the underlying link or visible content.
- [Tooltip](https://newui.egcs.com.br/en/components/tooltip/) adds brief supplemental text on hover or focus. Compose `Root`, `Trigger`, and `Content`. Give the trigger its own accessible name and use a `Popover` for controls.
