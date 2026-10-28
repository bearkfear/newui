import type { Accessor } from "solid-js";
import { createSignal, onCleanup } from "solid-js";
import { Button } from "../../../actions/button/button";
import { Text } from "../../../content/text/text";
import { createToaster, type ToastOptions } from "../create-toaster";
import { Toast } from "../toast";
import { Toaster } from "../toaster";

function CustomToastLayout(props: { toast: Accessor<ToastOptions> }) {
  return (
    <Toast.Root tone="primary" variant="outline">
      <Toast.Content>
        <Toast.Title>{props.toast().title}</Toast.Title>
        <Toast.Description>{props.toast().description}</Toast.Description>
        <div style={{ "margin-top": "12px" }}>
          <Toast.ActionTrigger
            asChild={(actionProps) => (
              <Button {...actionProps()} size="sm" variant="soft">
                Review update
              </Button>
            )}
          />
        </div>
      </Toast.Content>
      <Toast.CloseTrigger aria-label="Dismiss project update" />
    </Toast.Root>
  );
}

export function CustomToast() {
  const toaster = createToaster();
  const [reviewed, setReviewed] = createSignal(false);
  onCleanup(() => toaster.remove());
  return (
    <div style={{ display: "grid", gap: "16px", "justify-items": "start" }}>
      <Button
        onClick={() =>
          toaster.create({
            title: "A new milestone is ready for review",
            description:
              "Your team has shared a detailed project update. Review the proposed navigation and confirm that the next milestone is ready to publish.",
            duration: Infinity,
            action: { label: "Review update", onClick: () => setReviewed(true) },
          })
        }
      >
        Show custom notification
      </Button>
      <Text role="status" tone="muted" size="7">
        {reviewed() ? "Update reviewed (demo)." : "No update reviewed yet."}
      </Text>
      <Toaster toaster={toaster}>{(toast) => <CustomToastLayout toast={toast} />}</Toaster>
    </div>
  );
}
