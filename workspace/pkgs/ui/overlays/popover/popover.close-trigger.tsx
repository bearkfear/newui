import { Popover as ArkPopover } from "@ark-ui/solid/popover";
import { createUniqueId, splitProps } from "solid-js";
import { dialogRecipe } from "../dialog/dialog.recipe";

export type PopoverCloseTriggerProps = ArkPopover.CloseTriggerProps;
const styles = dialogRecipe();

function CloseIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="m4 4 8 8m0-8-8 8" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" />
    </svg>
  );
}

export function PopoverCloseTrigger(props: PopoverCloseTriggerProps) {
  const closeId = createUniqueId();
  const [local, rest] = splitProps(props, ["class", "children", "aria-label"]);
  return (
    <ArkPopover.CloseTrigger
      {...rest}
      id={props.id ?? closeId}
      class={props.asChild ? local.class : styles.close({ class: local.class })}
      aria-label={
        local["aria-label"] ?? (!props.asChild && local.children == null ? "Close popover" : "")
      }
    >
      {local.children ?? <CloseIcon />}
    </ArkPopover.CloseTrigger>
  );
}
