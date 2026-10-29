import { tv } from "tailwind-variants/lite";

export const emptyRecipe = tv({
  slots: {
    root: "nui:flex nui:w-full nui:min-w-0 nui:flex-col nui:items-center nui:justify-center nui:gap-4 nui:text-center nui:text-foreground",
    icon: "nui:flex nui:size-12 nui:shrink-0 nui:items-center nui:justify-center nui:rounded-xl nui:border nui:border-border nui:bg-surface nui:text-muted-foreground nui:[&>svg]:size-6",
    content: "nui:grid nui:w-full nui:max-w-sm nui:gap-y-[var(--nui-header-gap)] nui:wrap-anywhere",
    actions:
      "nui:flex nui:max-w-full nui:flex-wrap nui:items-center nui:justify-center nui:gap-2 nui:[&>*]:max-w-full",
  },
  variants: {
    layout: {
      compact: { root: "nui:p-6" },
      section: { root: "nui:min-h-64 nui:p-8" },
      page: { root: "nui:min-h-dvh nui:p-8" },
    },
  },
  defaultVariants: { layout: "section" },
});
