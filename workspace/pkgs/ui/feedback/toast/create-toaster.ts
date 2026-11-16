import type { Toast as ArkToast, CreateToasterProps } from "@ark-ui/solid/toast";
import { createToaster as createArkToaster } from "@ark-ui/solid/toast";

/**
 * Store configuration. Defaults are three visible notifications, 5s duration, 12px gap,
 * bottom-end placement, no overlap, and pause while the page is idle.
 */
export type CreateToasterOptions = Omit<CreateToasterProps, "placement" | "overlap"> & {
  placement?: CreateToasterProps["placement"];
};
/** Per-notification content, duration, and action options accepted by the toaster store. */
export type ToastOptions = ArkToast.Options;

/**
 * Create one store for application notification producers and a Toaster renderer.
 * `createToaster()` is a factory; it does not install a module-level global singleton.
 */
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
