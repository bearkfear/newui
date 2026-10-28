import { createSignal } from "solid-js";
import { Text } from "../../../content/text/text";
import { DocumentActions } from "../../menu/stories/document-actions";
import { MenuIcon } from "../../menu/stories/menu-icon";
import { DropdownMenu } from "../dropdown-menu";

export function DropdownMenuExample(props: {
  defaultOpen?: boolean;
  disabled?: boolean;
  icons?: boolean;
}) {
  const [action, setAction] = createSignal("None");
  return (
    <div style={{ display: "grid", gap: "1rem", "justify-items": "start" }}>
      <DropdownMenu.Root defaultOpen={props.defaultOpen}>
        <DropdownMenu.Trigger disabled={props.disabled}>
          Document actions
          {props.icons !== false && <MenuIcon name="chevron" />}
        </DropdownMenu.Trigger>
        <DropdownMenu.Content>
          <DocumentActions onAction={setAction} icons={props.icons ?? true} />
        </DropdownMenu.Content>
      </DropdownMenu.Root>
      <Text size="7" tone="muted" role="status">
        Last action: {action()}
      </Text>
    </div>
  );
}

export function ControlledDropdownMenu() {
  const [open, setOpen] = createSignal(false);
  const [action, setAction] = createSignal("None");
  return (
    <div style={{ display: "grid", gap: "1rem", "justify-items": "start" }}>
      <DropdownMenu.Root open={open()} onOpenChange={(details) => setOpen(details.open)}>
        <DropdownMenu.Trigger>Controlled actions</DropdownMenu.Trigger>
        <DropdownMenu.Content>
          <DocumentActions onAction={setAction} />
        </DropdownMenu.Content>
      </DropdownMenu.Root>
      <Text size="7" tone="muted" role="status">
        Menu {open() ? "open" : "closed"} · Last action: {action()}
      </Text>
    </div>
  );
}
