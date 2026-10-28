import { createSignal, onCleanup } from "solid-js";
import { Button } from "../../../actions/button/button";
import { Text } from "../../../content/text/text";
import { createToaster } from "../create-toaster";
import { Toaster } from "../toaster";

export function AsyncToast() {
  const toaster = createToaster();
  const [pending, setPending] = createSignal(false);
  let timer: ReturnType<typeof setTimeout> | undefined;
  onCleanup(() => {
    clearTimeout(timer);
    toaster.remove();
  });
  const save = (succeeds: boolean) => {
    if (pending()) return;
    setPending(true);
    const id = toaster.create({
      type: "loading",
      title: "Saving project…",
      description: "Syncing your changes with the workspace.",
    });
    timer = setTimeout(() => {
      setPending(false);
      if (!toaster.isVisible(id)) return;
      toaster.update(
        id,
        succeeds
          ? {
              type: "success",
              title: "Changes saved",
              description: "Your project is up to date.",
              duration: 5000,
            }
          : {
              type: "error",
              title: "Changes could not be saved",
              description: "Your draft is still available. Please try again.",
              duration: Infinity,
            },
      );
    }, 1500);
  };
  return (
    <div style={{ display: "grid", gap: "24px" }}>
      <div style={{ display: "flex", "flex-wrap": "wrap", gap: "12px" }}>
        <Button disabled={pending()} onClick={() => save(true)}>
          Save successfully
        </Button>
        <Button tone="danger" variant="outline" disabled={pending()} onClick={() => save(false)}>
          Simulate save error
        </Button>
      </div>
      <Text size="7" tone="muted">
        A single loading notification updates in place. Errors stay until dismissed. This demo makes
        no external requests.
      </Text>
      <Toaster toaster={toaster} />
    </div>
  );
}
