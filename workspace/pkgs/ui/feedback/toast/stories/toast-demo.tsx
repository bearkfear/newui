import { createSignal, onCleanup, onMount } from "solid-js";
import { Text } from "../../../content/text/text";
import { type CreateToasterOptions, createToaster } from "../create-toaster";
import { Toaster } from "../toaster";
import { ToastControls } from "./toast-controls";

export interface ToastDemoProps {
  placement: NonNullable<CreateToasterOptions["placement"]>;
  duration: number;
  max: number;
  variant: "soft" | "outline";
  showIcon: boolean;
  preview: boolean;
}

export function ToastDemo(props: ToastDemoProps) {
  const toaster = createToaster({
    placement: props.placement,
    duration: props.duration,
    max: props.max,
  });
  const [result, setResult] = createSignal("No action taken.");
  onCleanup(() => toaster.remove());
  onMount(() => {
    if (props.preview)
      toaster.create({
        type: "success",
        title: "Changes saved",
        description: "Your project preferences are up to date.",
        duration: Infinity,
      });
  });
  return (
    <div style={{ display: "grid", gap: "24px", "max-width": "52rem" }}>
      <ToastControls toaster={toaster} onUndo={() => setResult("Project restored (demo).")} />
      <Text size="7" tone="muted">
        Hover or focus a notification to pause its timer. Alt + T focuses the notification region.
        Escape dismisses the focused toast.
      </Text>
      <Text role="status" aria-atomic="true" tone="muted" size="7">
        {result()}
      </Text>
      <Toaster toaster={toaster} variant={props.variant} showIcon={props.showIcon} />
    </div>
  );
}
