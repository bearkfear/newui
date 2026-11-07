# Menubar

Persistent application commands such as File / Edit / View. Use [Navigation Menu](../../navigation/navigation-menu/README.md) or Navbar for page links. Menubar shares the existing Dropdown Menu visuals, item parts, themed portal, and Ark Menu behavior. No Kobalte or new dependency.

```tsx
import { Menubar } from "@egcs/newui";
import "@egcs/newui/styles.css";

<Menubar.Root aria-label="Document commands">
  <Menubar.Menu value="file">
    <Menubar.Trigger>File</Menubar.Trigger>
    <Menubar.Content>
      <Menubar.Item value="new" onSelect={createDocument}>
        New document
      </Menubar.Item>
      <Menubar.SubRoot>
        <Menubar.SubTrigger>Open recent</Menubar.SubTrigger>
        <Menubar.SubContent>
          <Menubar.Item value="proposal" onSelect={openProposal}>
            Proposal
          </Menubar.Item>
        </Menubar.SubContent>
      </Menubar.SubRoot>
      <Menubar.Separator />
      <Menubar.Item value="print" disabled>
        Print
      </Menubar.Item>
    </Menubar.Content>
  </Menubar.Menu>
  <Menubar.Menu value="edit">
    <Menubar.Trigger>Edit</Menubar.Trigger>
    <Menubar.Content>
      <Menubar.Item value="undo" onSelect={undo}>
        Undo
      </Menubar.Item>
    </Menubar.Content>
  </Menubar.Menu>
</Menubar.Root>;
```

## Composition and state

Root requires an accessible `aria-label`. Each Menu needs a unique, stable `value` and contains one Trigger and one Content. Menu provides composition context; all top-level triggers share a single Ark Menu machine, so only one panel opens at a time. Content declares each panel; Root hosts one shared surface, portal, and positioner, preserving DOM focus when hover switches between menus. Item values should be unique across the bar. Use SubRoot/SubTrigger/SubContent for cascades; repeat inside SubContent for additional levels. Do not use top-level Content inside SubRoot.

Item supports `disabled`, `destructive`, optional `icon`, `onSelect`, and `closeOnSelect`. Group/GroupLabel and Separator reuse the existing menu parts. Preserve supplied props and refs when using Ark's render-function `asChild`. Shortcut text does not register application hotkeys; applications own commands, confirmations, persistence, and announcements.

Root accepts Ark Menu `defaultOpen` or controlled `open`/`onOpenChange`, plus `defaultTriggerValue` or controlled `triggerValue`/`onTriggerValueChange` for the selected top-level Menu. Set a trigger value when opening the bar programmatically or initially. Root `class`/`style` apply to the bar. Other Root props go to Ark Menu, including positioning. Trigger and Content forward their native props and refs. Context exposes Ark's accessor for application integration.

## Keyboard and Ark mapping

Tab enters at one enabled trigger. Left/Right move across enabled triggers with wrapping; Home/End reach the first/last. Enter, Space, Up, or Down opens through Ark. When a menu is open, Left/Right switch top-level menus; Right enters a highlighted submenu first. Nested menus retain Ark's arrow navigation, typeahead, selection, Escape dismissal, and focus restoration. Hovering another enabled trigger switches menus only while the bar is open. Tab dismissal follows Ark; no global Alt activation is added.

The installed Ark version has no Menubar primitive. Its Navigation Menu was evaluated but owns website-link semantics, not command-menu interaction. Ark Menu's maintained multi-trigger API supplies the shared machine; the adapter adds only the menubar role, roving trigger tab stop, and horizontal coordination. Existing Ark nested Menu handles cascades. The adapter does not replace menu selection, positioning, focus within menus, or dismissal.

The bar stays horizontal on small screens; keep top-level labels short. Floating panels and submenus use the shared menu's viewport constraints, so cascades may overlap their parent on narrow screens. Automatic/nested themes and disabled/destructive styling follow the shared [menu contract](../menu/README.md).

## Storybook examples

Storybook: Actions / Menubar includes File/Edit/View, disabled triggers/items, grouped commands, destructive actions, controlled opening, cascades, dark themes, and mobile.
