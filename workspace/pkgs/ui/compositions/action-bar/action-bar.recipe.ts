import { tv } from "tailwind-variants/lite";

export const actionBarRecipe = tv({
  slots: {
    root: "nui:flex nui:min-w-0 nui:flex-col nui:items-stretch nui:gap-4 nui:sm:flex-row nui:sm:items-center nui:sm:justify-between",
    content: "nui:grid nui:min-w-0 nui:flex-1 nui:gap-1",
    actions:
      "nui:flex nui:min-w-0 nui:flex-wrap nui:items-center nui:gap-2 nui:sm:ms-auto nui:sm:justify-end",
  },
  variants: {
    variant: {
      plain: { root: "" },
      surface: { root: "nui:rounded-lg nui:border nui:border-border nui:bg-surface nui:p-4" },
    },
  },
  defaultVariants: { variant: "plain" },
});
