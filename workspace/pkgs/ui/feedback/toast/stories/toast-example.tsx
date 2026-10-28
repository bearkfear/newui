import { createMemo, Show } from "solid-js";
import { ToastDemo, type ToastDemoProps } from "./toast-demo";

export type ToastExampleProps = Partial<ToastDemoProps>;

export function ToastExample(props: ToastExampleProps) {
  const settings = createMemo(() => ({
    placement: props.placement ?? "bottom-end",
    duration: props.duration ?? 5000,
    max: props.max ?? 3,
    variant: props.variant ?? "soft",
    showIcon: props.showIcon ?? true,
    preview: props.preview ?? false,
  }));
  return (
    <Show when={settings()} keyed>
      {(options) => <ToastDemo {...options} />}
    </Show>
  );
}
