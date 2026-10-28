import { createSignal } from "solid-js";
import { Text } from "../../../content/text/text";
import { DropdownMenu } from "../../dropdown-menu/dropdown-menu";
import { DocumentActions } from "../../menu/stories/document-actions";
import { ContextMenu } from "../context-menu";

export function ContextMenuExample(props: { icons?: boolean }) {
  const [action, setAction] = createSignal("None");
  return (
    <div style={{ display: "grid", gap: "1rem", "max-width": "28rem" }}>
      <ContextMenu.Root>
        <ContextMenu.Trigger
          asChild={(triggerProps) => (
            <button
              {...triggerProps()}
              type="button"
              aria-label="Project document context area"
              style={{
                padding: "2rem",
                border: "1px dashed var(--nui-control-border)",
                "border-radius": "0.75rem",
                background: "var(--nui-surface)",
                color: "var(--nui-foreground)",
                "text-align": "center",
                "min-width": "0",
                "font-size": "0.875rem",
              }}
            >
              Project notes.md
              <span
                style={{
                  display: "block",
                  "margin-top": "0.5rem",
                  color: "var(--nui-muted-foreground)",
                  "font-size": "0.75rem",
                }}
              >
                Right-click or press and hold for actions
              </span>
            </button>
          )}
        />
        <ContextMenu.Content>
          <DocumentActions onAction={setAction} icons={props.icons ?? true} />
        </ContextMenu.Content>
      </ContextMenu.Root>
      <div>
        <DropdownMenu.Root>
          <DropdownMenu.Trigger>Document actions</DropdownMenu.Trigger>
          <DropdownMenu.Content>
            <DocumentActions onAction={setAction} icons={props.icons ?? true} />
          </DropdownMenu.Content>
        </DropdownMenu.Root>
      </div>
      <Text size="7" tone="muted" role="status">
        Last action: {action()}
      </Text>
    </div>
  );
}
