import { Toast as ArkToast, useToastContext } from "@ark-ui/solid/toast";
import { X } from "lucide-solid";
import { splitProps } from "solid-js";
import { buttonRecipe } from "../../actions/button/button.recipe";
import { CalloutOptions, type CalloutTone } from "../callout/callout.context";
import { CalloutIcon } from "../callout/callout.icon";
import { CalloutContent } from "../callout/callout.parts";
import { calloutRecipe } from "../callout/callout.recipe";
import { toastRecipe } from "./toast.recipe";

export type ToastRootProps = ArkToast.RootProps & {
  tone?: CalloutTone;
  variant?: "soft" | "outline";
};
const styles = calloutRecipe();

function toastTone(type: string): CalloutTone {
  if (type === "error") return "danger";
  if (type === "success" || type === "warning" || type === "info") return type;
  return "neutral";
}

export function ToastRoot(props: ToastRootProps) {
  const api = useToastContext();
  const [local, rest] = splitProps(props, ["tone", "variant", "class"]);
  const tone = () => local.tone ?? toastTone(api().type);
  return (
    <CalloutOptions.Provider value={() => ({ tone: tone() })}>
      <ArkToast.Root
        {...rest}
        class={calloutRecipe({ tone: tone(), variant: local.variant }).root({
          class: toastRecipe().root({ class: local.class }),
        })}
      />
    </CalloutOptions.Provider>
  );
}
export function ToastTitle(props: ArkToast.TitleProps) {
  const [local, rest] = splitProps(props, ["class"]);
  return <ArkToast.Title {...rest} class={styles.title({ class: local.class })} />;
}
export function ToastDescription(props: ArkToast.DescriptionProps) {
  const [local, rest] = splitProps(props, ["class"]);
  return <ArkToast.Description {...rest} class={styles.description({ class: local.class })} />;
}
export function ToastActionTrigger(props: ArkToast.ActionTriggerProps) {
  const [local, rest] = splitProps(props, ["class"]);
  return (
    <ArkToast.ActionTrigger
      {...rest}
      class={
        props.asChild
          ? local.class
          : buttonRecipe({ size: "sm", tone: "neutral", variant: "outline", class: local.class })
      }
    />
  );
}
export function ToastCloseTrigger(props: ArkToast.CloseTriggerProps) {
  const [local, rest] = splitProps(props, ["class", "children"]);
  return (
    <ArkToast.CloseTrigger
      {...rest}
      class={props.asChild ? local.class : styles.close({ class: local.class })}
    >
      {local.children ?? <X size={16} aria-hidden="true" />}
    </ArkToast.CloseTrigger>
  );
}

export const Toast = {
  Root: ToastRoot,
  Icon: CalloutIcon,
  Content: CalloutContent,
  Title: ToastTitle,
  Description: ToastDescription,
  ActionTrigger: ToastActionTrigger,
  CloseTrigger: ToastCloseTrigger,
  Context: ArkToast.Context,
};
