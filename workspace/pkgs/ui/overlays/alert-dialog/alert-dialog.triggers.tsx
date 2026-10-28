import { Dialog as ArkDialog } from "@ark-ui/solid/dialog";
import { createUniqueId, splitProps } from "solid-js";
import { buttonRecipe } from "../../actions/button/button.recipe";

export type AlertDialogTriggerProps = ArkDialog.CloseTriggerProps;

export function AlertDialogCancelTrigger(props: AlertDialogTriggerProps) {
  const [local, rest] = splitProps(props, ["class", "children"]);
  return (
    <ArkDialog.CloseTrigger
      {...rest}
      class={
        props.asChild
          ? local.class
          : buttonRecipe({ tone: "neutral", variant: "outline", class: local.class })
      }
    >
      {local.children ?? "Cancel"}
    </ArkDialog.CloseTrigger>
  );
}

export function AlertDialogActionTrigger(props: AlertDialogTriggerProps) {
  const actionId = createUniqueId();
  const [local, rest] = splitProps(props, ["class", "children"]);
  return (
    <ArkDialog.CloseTrigger
      {...rest}
      id={props.id ?? actionId}
      class={props.asChild ? local.class : buttonRecipe({ tone: "danger", class: local.class })}
    >
      {local.children ?? "Confirm"}
    </ArkDialog.CloseTrigger>
  );
}
