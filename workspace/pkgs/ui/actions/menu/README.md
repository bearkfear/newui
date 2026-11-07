# Action menu foundation

Dropdown Menu and Context Menu share Ark UI Solid Menu, one visual recipe, and the existing theme-preserving OverlayPortal. The wrappers supply presentation and composition; Ark owns opening, positioning, active items, typeahead, selection, disabled items, dismissal, and focus behavior.

## Shared parts

Content includes its portal and positioner, accepts Ark Content props plus optional `mount`, and forwards class, style, events, and refs to the menu surface. Root accepts Ark props, defaults to lazy mounting and keeps content mounted but hidden after its first opening to preserve Ark focus restoration, and uses fixed bottom-start positioning with viewport padding. Override `positioning` when needed.

Item requires a unique `value`. Use `valueText` when icons or extra text affect typeahead, `disabled` for unavailable actions, and `destructive` for the red text/highlight treatment. Item forwards Ark's `onSelect` and `closeOnSelect`. Disabled items retain Ark's `aria-disabled` behavior and are skipped during keyboard navigation; they use neutral step-8 text with no boxed fill or border, as requested during user review. Native menu triggers also use an unboxed disabled treatment; the existing Button component keeps its own disabled styling. This is specific to action menus.

Group and GroupLabel map to Ark ItemGroup and ItemGroupLabel, with automatic accessible associations. Place the label inside its group. Separator uses Ark Separator. SubRoot and SubTrigger compose Ark nested menus. Place SubRoot inside the parent Content, with its own SubTrigger and Content. Ark owns pointer intent, Arrow Right/Left navigation, and closing the menu tree after selection. Floating UI may overlap the parent on narrow screens to keep submenus inside the viewport. There are no style variants, sizes, checkbox/radio items, or global shortcut handlers.

Item and SubTrigger accept optional `icon` content. The wrapper hides decorative icons from assistive technology and aligns mixed icon/text rows automatically. If no item supplies an icon, the icon column disappears. Triggers accept ordinary children; an indicator icon is optional.

## Keyboard and dismissal

The ordinary Trigger opens with Enter, Space, Arrow Down, or Arrow Up. Arrow keys, Home/End, and typeahead navigate enabled items. Enter selects and Escape dismisses. Ordinary button triggers regain focus through Ark; pointer context-menu focus follows Ark and browser behavior. Tab behavior and outside interaction also remain with Ark. Keep Ark's cancellable event handlers and controlled `open` / `onOpenChange` intact.

Menu surfaces do not draw an outer focus ring. Ark keeps DOM focus on the content and identifies the active item with `aria-activedescendant`; the highlighted row supplies the visual navigation state. Opening buttons retain their visible focus outline.

ContextTrigger handles native context-menu events and touch long-press. Provide a separate DropdownMenu as an ordinary click/keyboard alternative sharing the same action-list component. Ark skips ordinary trigger positioning when a ContextTrigger is present, so the two opening modes use separate roots rather than a nonfunctional mixed root. A context target's native click remains available to the application; the trigger itself does not assign a primary-click action.

## Boundaries

Use these components for actions. Page-link navigation belongs to Breadcrumb, Navbar, or VerticalMenu. Destructive appearance does not add a confirmation step; the application decides whether an action needs AlertDialog. Selection callbacks own application behavior. Demo callbacks update a status message.

The design follows [Solid UI Dropdown Menu](https://www.solid-ui.com/docs/components/dropdown-menu) and [Context Menu](https://www.solid-ui.com/docs/components/context-menu), using newui tokens and Ark rather than copying upstream implementation code. Menus are static surfaces with no new animation behavior.

## Storybook examples

Storybook includes default/open, controlled, disabled trigger, dark/mobile dropdowns, and context examples with a separate ordinary dropdown alternative, submenus, and icon-free variants.
