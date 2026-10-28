import { createSignal } from "solid-js";
import { Button } from "../../../actions/button/button";
import { Text } from "../../../content/text/text";
import { Popover, type PopoverRootProps } from "../popover";
import { NotificationContent, type NotificationMode } from "./notification-content";

export interface PopoverExampleProps {
  placement?: NonNullable<PopoverRootProps["positioning"]>["placement"];
  modal?: boolean;
  closeOnEscape?: boolean;
  closeOnInteractOutside?: boolean;
  showArrow?: boolean;
}

export function PopoverExample(props: PopoverExampleProps) {
  const [mode, setMode] = createSignal<NotificationMode>("All updates");
  return (
    <div style={{ display: "grid", gap: "16px", "justify-items": "start", padding: "24px 0" }}>
      <Popover.Root
        positioning={{ placement: props.placement }}
        modal={props.modal}
        closeOnEscape={props.closeOnEscape}
        closeOnInteractOutside={props.closeOnInteractOutside}
      >
        <Popover.Trigger
          asChild={(triggerProps) => (
            <Button {...triggerProps()} tone="neutral" variant="outline">
              Notification preferences
            </Button>
          )}
        />
        <NotificationContent
          mode={mode()}
          onModeChange={setMode}
          showArrow={props.showArrow ?? true}
        />
      </Popover.Root>
      <Text role="status" size="7" tone="muted">
        Receiving: {mode().toLowerCase()}.
      </Text>
      <Button variant="ghost" tone="neutral" size="sm">
        Another focusable action
      </Button>
    </div>
  );
}
