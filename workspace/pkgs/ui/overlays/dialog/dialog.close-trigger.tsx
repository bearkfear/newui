import { Dialog as ArkDialog } from "@ark-ui/solid/dialog";
import { X } from "lucide-solid";
import { createUniqueId, splitProps } from "solid-js";
import { dialogRecipe } from "./dialog.recipe";

const styles = dialogRecipe();

function CloseIcon() {
  return <X size={16} aria-hidden="true" />;
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
