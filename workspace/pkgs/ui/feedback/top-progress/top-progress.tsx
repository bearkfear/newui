import { Progress as ArkProgress } from "@ark-ui/solid/progress";
import { mergeProps, onCleanup, Show, splitProps } from "solid-js";
import { Portal } from "solid-js/web";
import { createPortalScope } from "../../overlays/portal-scope";
import type { TopProgressController } from "./top-progress.contract";

export type TopProgressProps = Omit<
  ArkProgress.RootProps,
  | "children"
  | "asChild"
  | "value"
  | "defaultValue"
  | "min"
  | "max"
  | "orientation"
  | "onValueChange"
> & {
  controller: TopProgressController;
  label?: string;
  glow?: boolean;
};

function TopProgressBar(props: TopProgressProps) {
  const [local, rest] = splitProps(mergeProps({ label: "Loading page", glow: true }, props), [
    "controller",
    "label",
    "glow",
    "class",
  ]);
  const state = () => local.controller.state();
  return (
    <ArkProgress.Root
      {...rest}
      min={0}
      max={100}
      orientation="horizontal"
      value={state().determinate ? state().value : null}
      class={`nui-top-progress ${local.class ?? ""}`}
      data-phase={state().phase}
      data-determinate={state().determinate ? "" : undefined}
      data-error={state().error ? "" : undefined}
      data-glow={local.glow ? "" : undefined}
    >
      <ArkProgress.Label class="nui-top-progress-label">{local.label}</ArkProgress.Label>
      <ArkProgress.Track class="nui-top-progress-track">
        <ArkProgress.Range
          class="nui-top-progress-range"
          style={{ width: "100%", "--nui-top-progress-scale": state().value / 100 }}
        />
      </ArkProgress.Track>
    </ArkProgress.Root>
  );
}

export function TopProgress(props: TopProgressProps) {
  let origin: HTMLSpanElement | undefined;
  const { scope, ready } = createPortalScope(() => origin);
  const state = () => props.controller.state();
  const visible = () => !["idle", "pending"].includes(state().phase);
  onCleanup(() => props.controller.reset());
  return (
    <>
      <span hidden aria-hidden="true" ref={origin} />
      <Show when={ready() && origin?.ownerDocument.body} keyed>
        {(mount) => (
          <Portal mount={mount}>
            <div data-nui-overlay-root="" data-motion={scope().motion} style={scope().style}>
              <Show when={visible()}>
                <TopProgressBar {...props} />
              </Show>
            </div>
          </Portal>
        )}
      </Show>
    </>
  );
}
