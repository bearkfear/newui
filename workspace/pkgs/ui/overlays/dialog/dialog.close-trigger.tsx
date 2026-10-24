import { Dialog as ArkDialog } from "@ark-ui/solid/dialog";
import { createUniqueId, splitProps } from "solid-js";
import { dialogRecipe } from "./dialog.recipe";

const styles = dialogRecipe();

function CloseIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="m4 4 8 8m0-8-8 8" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" />
    </svg>
  );
}

export function DialogCloseTrigger(props: ArkDialog.CloseTriggerProps) {
  const closeId = createUniqueId();
  const [local, rest] = splitProps(props, ["class", "children", "aria-label"]);
  return (
    <ArkDialog.CloseTrigger
      {...rest}
      id={props.id ?? closeId}
      class={props.asChild ? local.class : styles.close({ class: local.class })}
      aria-label={
        local["aria-label"] ??
        (!props.asChild && local.children == null ? "Close dialog" : undefined)
      }
    >
      {local.children ?? <CloseIcon />}
    </ArkDialog.CloseTrigger>
  );
}
