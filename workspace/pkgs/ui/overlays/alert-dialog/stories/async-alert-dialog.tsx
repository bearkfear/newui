import { createSignal, onCleanup } from "solid-js";
import { Button } from "../../../actions/button/button";
import { Text } from "../../../content/text/text";
import { AlertDialog } from "../alert-dialog";
import { AsyncAlertDialogContent } from "./async-alert-dialog-content";

export function AsyncAlertDialog() {
  const [open, setOpen] = createSignal(false);
  const [pending, setPending] = createSignal(false);
  const [error, setError] = createSignal(false);
  const [deleted, setDeleted] = createSignal(false);
  let timer: ReturnType<typeof setTimeout> | undefined;
  onCleanup(() => clearTimeout(timer));
  const confirm = () => {
    if (pending()) return;
    const retry = error();
    setError(false);
    setPending(true);
    timer = setTimeout(() => {
      setPending(false);
      setError(!retry);
      if (retry) {
        setDeleted(true);
        setOpen(false);
      }
    }, 1200);
  };
  return (
    <div style={{ display: "grid", gap: "16px", "justify-items": "start" }}>
      <AlertDialog.Root
        open={open()}
        onOpenChange={(details) => {
          if (pending()) return;
          setOpen(details.open);
          if (details.open) setError(false);
        }}
        onEscapeKeyDown={(event) => {
          if (pending()) event.preventDefault();
        }}
      >
        <AlertDialog.Trigger
          asChild={(props) => (
            <Button {...props()} tone="danger">
              Delete with confirmation
            </Button>
          )}
        />
        <AsyncAlertDialogContent pending={pending()} error={error()} onConfirm={confirm} />
      </AlertDialog.Root>
      <Text role="status" tone="muted" size="7">
        {deleted() ? "Project deleted (demo)." : "Demo: the first attempt fails; retry succeeds."}
      </Text>
    </div>
  );
}
