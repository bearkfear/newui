import { Popover as ArkPopover } from "@ark-ui/solid/popover";
import { X } from "lucide-solid";
import { createUniqueId, splitProps } from "solid-js";
import { dialogRecipe } from "../dialog/dialog.recipe";

export type PopoverCloseTriggerProps = ArkPopover.CloseTriggerProps;
const styles = dialogRecipe();

function CloseIcon() {
  return <X size={16} aria-hidden="true" />;
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
