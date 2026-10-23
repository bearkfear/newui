# Action Bar

Arranges contextual information and actions with responsive spacing.

```tsx
import { ActionBar, Button } from "newui";

<ActionBar.Root variant="surface">
  <ActionBar.Content>
    <ActionBar.Title>3 items selected</ActionBar.Title>
    <ActionBar.Description>Choose an action for these items.</ActionBar.Description>
  </ActionBar.Content>
  <ActionBar.Actions>
    <Button>Archive</Button>
  </ActionBar.Actions>
</ActionBar.Root>;
```

Root options: `variant` plain (default) or surface. Content and actions stack on narrow screens; from 640px they share a row, with actions aligned to the logical end. Actions wrap when necessary, including with RTL content.

Title defaults to h2, size 6; Description defaults to muted Text size 7. Typography props remain customizable. Root, Content, and Actions render divs and forward native attributes, events, styles, and refs.

This is a layout composition. It supplies no ARIA toolbar, arrow-key navigation, sticky positioning, or selection state. Put native buttons or ButtonGroup inside Actions and let the application own behavior. Choose an appropriate heading level or omit Title when unnecessary.

Import `newui/styles.css` once. Review Compositions / Action bar and Overview before authorizing new tests. The bulk-action example uses local state and introduces no server mutation.
