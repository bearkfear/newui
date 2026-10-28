import type { ToasterProps as ArkToasterProps } from "@ark-ui/solid/toast";
import { Toaster as ArkToaster } from "@ark-ui/solid/toast";
import { splitProps } from "solid-js";
import { toastRecipe } from "./toast.recipe";
import { ToastNotification } from "./toast-notification";
import { ToastPortal } from "./toast-portal";

export type ToasterProps = Omit<ArkToasterProps, "children"> & {
  children?: ArkToasterProps["children"];
  variant?: "soft" | "outline";
  showIcon?: boolean;
  mount?: HTMLElement;
};

export function Toaster(props: ToasterProps) {
  const [local, rest] = splitProps(props, ["children", "variant", "showIcon", "mount", "class"]);
  return (
    <ToastPortal {...(local.mount ? { mount: local.mount } : {})}>
      <ArkToaster {...rest} class={toastRecipe().group({ class: local.class })}>
        {(toast) =>
          local.children ? (
            local.children(toast)
          ) : (
            <ToastNotification
              toast={toast}
              variant={local.variant ?? "soft"}
              showIcon={local.showIcon ?? true}
            />
          )
        }
      </ArkToaster>
    </ToastPortal>
  );
}
