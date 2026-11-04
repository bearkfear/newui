# Context Menu

Actions opened by right-click or touch long-press. Use a separate Dropdown Menu with the same actions as a discoverable click/keyboard alternative.

```tsx
import { ContextMenu, DropdownMenu } from "@egcs/newui";
import "@egcs/newui/styles.css";

function Actions() {
  return (
    <>
      <ContextMenu.Item value="open">Open</ContextMenu.Item>
      <ContextMenu.SubRoot>
        <ContextMenu.SubTrigger>Share</ContextMenu.SubTrigger>
        <ContextMenu.Content>
          <ContextMenu.Item value="copy-link">Copy link</ContextMenu.Item>
        </ContextMenu.Content>
      </ContextMenu.SubRoot>
      <ContextMenu.Item value="archive" disabled>
        Archive
      </ContextMenu.Item>
    </>
  );
}

export function DocumentActions() {
  return (
    <>
      <ContextMenu.Root>
        <ContextMenu.Trigger
          asChild={(props) => <div {...props()}>Right-click or press and hold this document.</div>}
        />
        <ContextMenu.Content>
          <Actions />
        </ContextMenu.Content>
      </ContextMenu.Root>
      <DropdownMenu.Root>
        <DropdownMenu.Trigger>Document actions</DropdownMenu.Trigger>
        <DropdownMenu.Content>
          <Actions />
        </DropdownMenu.Content>
      </DropdownMenu.Root>
    </>
  );
}
```

Root, Content, Item, Group, GroupLabel, Separator, SubRoot, and SubTrigger share the Dropdown Menu foundation. Trigger maps to Ark Menu.ContextTrigger. Submenus use Ark's nested roots, keyboard navigation, pointer intent, and viewport positioning. Icons are optional through Item/SubTrigger's `icon` prop; icon-free and mixed rows align automatically.

For custom targets use the function-form `asChild` and preserve supplied props. The default ContextTrigger is a button, but the context behavior does not assign a primary-click action. The ordinary alternative is a separate DropdownMenu root sharing the action component: Ark does not position a regular Trigger when a ContextTrigger is present in the same root. Keyboard users can use the ordinary trigger; native context-menu keys depend on the browser.

Use `defaultOpen`, or controlled `open` / `onOpenChange`, as provided by Ark. Pointer positioning, touch cancellation, dismissal, themed portals, and shared states are described in the [menu contract](../menu/README.md). The user validated the regular, icon-free, dark/mobile, and nested action examples. Test work requires separate authorization. No new automated tests were added.
