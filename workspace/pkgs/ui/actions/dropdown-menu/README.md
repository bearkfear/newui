# Dropdown Menu

A compact button-triggered action menu, styled consistently with Context Menu.

```tsx
import { DropdownMenu } from "newui";
import "newui/styles.css";

<DropdownMenu.Root>
  <DropdownMenu.Trigger>Actions</DropdownMenu.Trigger>
  <DropdownMenu.Content>
    <DropdownMenu.Item value="open" onSelect={() => console.log("Open")}>
      Open
    </DropdownMenu.Item>
    <DropdownMenu.Item value="archive" disabled>
      Archive
    </DropdownMenu.Item>
    <DropdownMenu.Separator />
    <DropdownMenu.Item value="delete" destructive>
      Delete
    </DropdownMenu.Item>
  </DropdownMenu.Content>
</DropdownMenu.Root>;
```

Root, Trigger, Content, Item, Group, GroupLabel, Separator, SubRoot, and SubTrigger form the public API. Trigger styles Ark Menu.Trigger as a native button with restrained hover/open feedback and unboxed disabled text. Item and SubTrigger accept optional icons; no icon column is shown when none are supplied. Use Solid Ark's function-form `asChild` when composing Button or another native control, forwarding all provided props.

Content includes the portal and positioning. Use `defaultOpen` for initial state, or `open` and `onOpenChange` for controlled state. Initial controls in Storybook apply when the example mounts. Root/item callbacks own actions; no application state is imposed.

Compose SubRoot inside Content, then place SubTrigger and another Content inside it. Ark supplies right/left arrow navigation, pointer intent, and selection across levels. See the SubRoot example in Storybook source.

See the [shared menu contract](../menu/README.md) for keyboard behavior, native/ARIA states, theme preservation, styling, and boundaries. The user validated the implementation and Storybook examples. No new tests were added; test work requires separate authorization.
