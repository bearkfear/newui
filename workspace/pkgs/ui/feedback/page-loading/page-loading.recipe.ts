import { tv } from "tailwind-variants/lite";

export const pageLoadingRecipe = tv({
  slots: {
    root: "nui:flex nui:w-full nui:min-w-0 nui:flex-col nui:items-center nui:justify-center nui:gap-5 nui:p-8 nui:text-center nui:text-foreground",
    message: "nui:grid nui:w-full nui:max-w-sm nui:gap-y-[var(--nui-header-gap)] nui:wrap-anywhere",
    label: "nui:m-0 nui:text-base nui:leading-snug nui:font-semibold",
    description: "nui:m-0 nui:text-sm nui:leading-relaxed nui:text-muted-foreground",
  },
  variants: {
    layout: {
      page: { root: "nui:min-h-dvh" },
      section: { root: "nui:min-h-64" },
    },
  },
  defaultVariants: { layout: "page" },
});
