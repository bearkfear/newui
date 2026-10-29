import { tv } from "tailwind-variants/lite";

export const toastRecipe = tv({
  slots: {
    group: "nui-toast-group nui:outline-none",
    root: "nui-toast-root nui:shadow-[var(--nui-toast-shadow)] nui:focus-visible:outline-[length:var(--nui-focus-width)] nui:focus-visible:outline-offset-[var(--nui-focus-offset)] nui:focus-visible:outline-focus-ring",
  },
});
