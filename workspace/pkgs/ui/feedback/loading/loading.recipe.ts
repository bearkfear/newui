import { tv } from "tailwind-variants/lite";

export const loadingRecipe = tv({
  slots: {
    root: "nui:inline-flex nui:min-w-0 nui:items-center nui:gap-2 nui:align-middle nui:text-sm nui:leading-snug nui:text-foreground",
    indicator: "nui-loading-indicator nui:block nui:shrink-0",
    label: "nui:min-w-0 nui:wrap-anywhere",
  },
  variants: {
    size: {
      sm: { indicator: "nui:size-4" },
      md: { indicator: "nui:size-6" },
      lg: { indicator: "nui:size-10" },
    },
    tone: {
      primary: { indicator: "nui:text-[var(--nui-primary)]" },
      neutral: { indicator: "nui:text-muted-foreground" },
    },
    showLabel: { false: { label: "nui:sr-only" }, true: {} },
  },
  defaultVariants: { size: "md", tone: "primary", showLabel: false },
});
