import { Splitter as ArkSplitter } from "@ark-ui/solid/splitter";
import { GripVertical } from "lucide-solid";
import { Show, splitProps } from "solid-js";
import { resizableRecipe } from "./resizable.recipe";

export type ResizableHandleProps = ArkSplitter.ResizeTriggerProps & {
  withHandle?: boolean | undefined;
};
const styles = resizableRecipe();

export function ResizableHandle(props: ResizableHandleProps) {
  const [local, rest] = splitProps(props, [
    "class",
    "children",
    "withHandle",
    "asChild",
    "disabled",
  ]);
  const content = () =>
    local.children ?? (
      <Show when={local.withHandle}>
        <span aria-hidden="true" class={styles.grip()}>
          <GripVertical size={12} />
        </span>
      </Show>
    );
  return (
    <ArkSplitter.ResizeTrigger
      {...rest}
      disabled={local.disabled}
      aria-disabled={local.disabled || undefined}
      class={styles.handle({ class: local.class })}
      asChild={
        local.asChild ??
        ((triggerProps) => (
          <button {...triggerProps()} type="button" disabled={local.disabled}>
            {content()}
          </button>
        ))
      }
    >
      {content()}
    </ArkSplitter.ResizeTrigger>
  );
}
