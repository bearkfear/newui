import { Progress as ArkProgress, useProgressContext } from "@ark-ui/solid/progress";
import { mergeProps, Show, splitProps } from "solid-js";
import type { ProgressProps } from "../progress/progress";
import { progressCircleRecipe } from "./progress-circle.recipe";

export type ProgressCircleProps = ProgressProps;

function ProgressCircleContent(props: {
  label: string | undefined;
  showValue: boolean;
  size: ProgressProps["size"];
  accessibleLabel: string | undefined;
  labelledBy: string | undefined;
}) {
  const api = useProgressContext();
  const styles = () => progressCircleRecipe({ size: props.size });
  return (
    <>
      <div class={styles().visual()}>
        <ArkProgress.Circle
          aria-labelledby={props.labelledBy ?? api().getLabelProps().id}
          aria-valuetext={api().valueAsString}
          class={styles().circle()}
        >
          <ArkProgress.CircleTrack class={styles().track()} />
          <ArkProgress.CircleRange class={styles().range()} />
        </ArkProgress.Circle>
        <Show when={props.showValue && !api().indeterminate}>
          <ArkProgress.ValueText aria-live="off" class={styles().value()} />
        </Show>
      </div>
      <ArkProgress.Label
        class={styles().label({ class: !props.label ? styles().hidden() : undefined })}
      >
        {props.label || props.accessibleLabel || "Progress"}
      </ArkProgress.Label>
    </>
  );
}

export function ProgressCircle(props: ProgressCircleProps) {
  const [local, rest] = splitProps(mergeProps({ defaultValue: 0, showValue: true }, props), [
    "size",
    "tone",
    "class",
    "label",
    "showValue",
    "aria-label",
    "aria-labelledby",
  ]);
  return (
    <ArkProgress.Root
      {...rest}
      orientation="horizontal"
      class={progressCircleRecipe({ size: local.size, tone: local.tone }).root({
        class: local.class,
      })}
    >
      <ProgressCircleContent
        label={local.label}
        showValue={local.showValue}
        size={local.size}
        accessibleLabel={local["aria-label"]}
        labelledBy={local["aria-labelledby"]}
      />
    </ArkProgress.Root>
  );
}
