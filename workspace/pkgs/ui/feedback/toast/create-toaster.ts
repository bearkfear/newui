import type { Toast as ArkToast, CreateToasterProps } from "@ark-ui/solid/toast";
import { createToaster as createArkToaster } from "@ark-ui/solid/toast";

export type CreateToasterOptions = Omit<CreateToasterProps, "placement" | "overlap"> & {
  placement?: CreateToasterProps["placement"];
};
export type ToastOptions = ArkToast.Options;

export function createToaster(options: CreateToasterOptions = {}) {
  return createArkToaster({
    max: 3,
    duration: 5000,
    gap: 12,
    removeDelay: 180,
    pauseOnPageIdle: true,
    ...options,
    placement: options.placement ?? "bottom-end",
    overlap: false,
  });
}

export type ToasterStore = ReturnType<typeof createToaster>;
