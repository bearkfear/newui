import { useToastContext } from "@ark-ui/solid/toast";
import type { Accessor } from "solid-js";
import { Show } from "solid-js";
import { CalloutActions } from "../callout/callout.parts";
import { LoadingIndicator } from "../loading/loading.indicator";
import type { ToastOptions } from "./create-toaster";
import { Toast } from "./toast";

interface ToastNotificationProps {
  toast: Accessor<ToastOptions>;
  variant: "soft" | "outline";
  showIcon: boolean;
}

export function ToastNotification(props: ToastNotificationProps) {
  const api = useToastContext();
  return (
    <Toast.Root variant={props.variant}>
      <Show when={props.showIcon}>
        <Show when={api().type === "loading"} fallback={<Toast.Icon />}>
          <Toast.Icon>
            <LoadingIndicator size="sm" tone="neutral" />
          </Toast.Icon>
        </Show>
      </Show>
      <Toast.Content>
        <Show when={props.toast().title}>
          <Toast.Title>{props.toast().title}</Toast.Title>
        </Show>
        <Show when={props.toast().description}>
          <Toast.Description>{props.toast().description}</Toast.Description>
        </Show>
        <Show when={props.toast().action}>
          {(action) => (
            <CalloutActions>
              <Toast.ActionTrigger>{action().label}</Toast.ActionTrigger>
            </CalloutActions>
          )}
        </Show>
      </Toast.Content>
      <Show when={api().closable}>
        <Toast.CloseTrigger />
      </Show>
    </Toast.Root>
  );
}
