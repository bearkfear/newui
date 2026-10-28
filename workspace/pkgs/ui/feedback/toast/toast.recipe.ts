import { tv } from "tailwind-variants/lite";

export const toastRecipe = tv({
  slots: {
    group: "nui-toast-group nui:outline-none",
    root: "nui-toast-root nui:shadow-[var(--nui-toast-shadow)] nui:focus-visible:outline-2 nui:focus-visible:outline-offset-2 nui:focus-visible:outline-focus-ring",
  },
});
