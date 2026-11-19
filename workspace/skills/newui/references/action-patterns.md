# Action patterns

## Row actions

Pass callbacks for the current row. Keep the button's name specific to the row when a table contains multiple menus.

```tsx
import { Button, DropdownMenu } from "@egcs/newui/actions";

export function RowActions(props: { name: string; onEdit: () => void; onArchive: () => void }) {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger
        asChild={(trigger) => (
          <Button {...trigger()} aria-label={`Actions for ${props.name}`}>
            Actions
          </Button>
        )}
      />
      <DropdownMenu.Content>
        <DropdownMenu.Item value="edit" onSelect={() => props.onEdit()}>
          Edit
        </DropdownMenu.Item>
        <DropdownMenu.Item value="archive" onSelect={() => props.onArchive()}>
          Archive
        </DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
}
```

## Icon action with a tooltip

An accessible name identifies the action. Use tooltip text to add a short description.

```tsx
import { Button } from "@egcs/newui/actions";
import { Tooltip } from "@egcs/newui/overlays";
import type { JSX } from "solid-js";

export function ExportButton(props: { icon: JSX.Element; onExport: () => void }) {
  return (
    <Tooltip.Root>
      <Tooltip.Trigger
        asChild={(trigger) => (
          <Button
            {...trigger()}
            iconOnly
            aria-label="Export report"
            onClick={() => props.onExport()}
          >
            <span aria-hidden="true">{props.icon}</span>
          </Button>
        )}
      />
      <Tooltip.Content>Download a CSV of the current report.</Tooltip.Content>
    </Tooltip.Root>
  );
}
```

## Destructive confirmation

Use the [AlertDialog example](https://newui.egcs.com.br/en/components/alert-dialog/) with a title, a description of the consequence, and a specific action label. Put one `CancelTrigger` before `ActionTrigger` so the safe action receives initial focus. For asynchronous confirmation, control `open`, call `event.preventDefault()` before awaiting the action, and close after success. Surface failures in the dialog so the user can retry.
