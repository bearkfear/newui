import { Archive } from "lucide-solid";
import { createSignal } from "solid-js";
import { Button } from "../../../actions/button/button";
import { Text } from "../../../content/text/text";
import { Tooltip, type TooltipRootProps } from "../tooltip";

export interface TooltipExampleProps {
  placement?: NonNullable<TooltipRootProps["positioning"]>["placement"];
  openDelay?: number;
  closeDelay?: number;
  disabled?: boolean;
  showArrow?: boolean;
  content?: string;
}

export function ArchiveIcon() {
  return <Archive size={20} aria-hidden="true" />;
}

export function TooltipExample(props: TooltipExampleProps) {
  const [archived, setArchived] = createSignal(false);
  return (
    <div style={{ display: "grid", gap: "16px", "justify-items": "start", padding: "48px 0" }}>
      <Tooltip.Root
        positioning={{ placement: props.placement }}
        openDelay={props.openDelay}
        closeDelay={props.closeDelay}
        disabled={props.disabled}
      >
        <Tooltip.Trigger
          asChild={(triggerProps) => (
            <Button
              {...triggerProps()}
              tone="neutral"
              variant="outline"
              iconOnly
              aria-label="Archive project"
              onClick={() => setArchived(true)}
            >
              <ArchiveIcon />
            </Button>
          )}
        />
        <Tooltip.Content showArrow={props.showArrow ?? true}>
          {props.content ?? "Move this project to your archive."}
        </Tooltip.Content>
      </Tooltip.Root>
      <Text size="7" tone="muted">
        Hover or use Tab to focus the button. Press Escape to dismiss.
      </Text>
      <Text role="status" size="7" tone="muted">
        {archived() ? "Project archived (demo)." : "The project is still active."}
      </Text>
    </div>
  );
}
