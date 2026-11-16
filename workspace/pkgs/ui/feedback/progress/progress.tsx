import { Progress as ArkProgress, useProgressContext } from "@ark-ui/solid/progress";
import { mergeProps, Show, splitProps } from "solid-js";
import type { VariantProps } from "tailwind-variants/lite";
import { progressRecipe } from "./progress.recipe";

/** `value={null}` means indeterminate; the component does not estimate or advance task progress. */
export type ProgressProps = Omit<ArkProgress.RootProps, "children" | "orientation" | "asChild"> &
  VariantProps<typeof progressRecipe> & { label?: string; showValue?: boolean };

function ProgressContent(props: {
  label: string | undefined;
  showValue: boolean;
  size: ProgressProps["size"];
  accessibleLabel: string | undefined;
  labelledBy: string | undefined;
}) {
  const api = useProgressContext();
  const styles = () => progressRecipe({ size: props.size });
  const visibleValue = () => props.showValue && !api().indeterminate;
  return (
    <>
      <div
        class={styles().header({
          class: !props.label && !visibleValue() ? styles().hidden() : undefined,
        })}
      >
        <ArkProgress.Label
          class={styles().label({ class: !props.label ? styles().hidden() : undefined })}
        >
          {props.label || props.accessibleLabel || "Progress"}
        </ArkProgress.Label>
        <Show when={visibleValue()}>
          <ArkProgress.ValueText aria-live="off" class={styles().value()} />
        </Show>
      </div>
      <ArkProgress.Track
        aria-labelledby={props.labelledBy ?? api().getLabelProps().id}
        aria-valuetext={api().valueAsString}
        class={styles().track()}
      >
        <ArkProgress.Range class={styles().range()} />
      </ArkProgress.Track>
    </>
  );
}

/**
 * Horizontal accessible progress bar. Supply `value` for known progress or `null` for unknown
 * progress; min/max set its scale. Updates are not announced individually, so announce important
 * milestones separately when needed. Completion does not change tone automatically.
 */
export function Progress(props: ProgressProps) {
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
      class={progressRecipe({ size: local.size, tone: local.tone }).root({ class: local.class })}
    >
      <ProgressContent
        label={local.label}
        showValue={local.showValue}
        size={local.size}
        accessibleLabel={local["aria-label"]}
        labelledBy={local["aria-labelledby"]}
      />
    </ArkProgress.Root>
  );
}
