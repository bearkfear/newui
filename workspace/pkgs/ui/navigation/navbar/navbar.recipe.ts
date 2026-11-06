import { tv } from "tailwind-variants/lite";

export const navbarRecipe = tv({
  slots: {
    root: "nui-navbar nui:relative nui:z-20 nui:border-b nui:border-border nui:text-foreground",
    frame:
      "nui:grid nui:min-w-0 nui:grid-cols-[minmax(0,1fr)_auto] nui:items-center nui:gap-x-6 nui:md:grid-cols-[auto_minmax(0,1fr)]",
    brand:
      "nui:my-4 nui:min-w-0 nui:rounded-sm nui:text-xl nui:font-semibold nui:text-foreground nui:no-underline nui-focus-ring nui:[--nui-focus-rest-offset:4px]",
    toggle:
      "nui:my-3 nui:inline-flex nui:min-h-10 nui:items-center nui:justify-center nui:gap-2 nui:rounded-md nui:border nui:border-[var(--nui-control-border)] nui:px-3 nui:py-2 nui:text-sm nui:font-medium nui:cursor-pointer nui:hover:bg-[var(--nui-neutral-soft-hover)] nui:hover:border-[var(--nui-control-border-hover)] nui-focus-ring nui:disabled:cursor-not-allowed nui:disabled:text-[var(--nui-disabled-foreground)] nui:md:hidden",
    content:
      "nui:col-span-2 nui:flex nui:min-w-0 nui:flex-col nui:gap-4 nui:pb-4 nui:md:col-span-1 nui:md:flex-row nui:md:items-center nui:md:justify-between nui:md:pb-0",
    actions: "nui:flex nui:min-w-0 nui:flex-wrap nui:items-center nui:gap-2 nui:md:ms-auto",
  },
  variants: {
    tone: { default: { root: "nui:bg-background" }, subtle: { root: "nui:bg-surface" } },
  },
  defaultVariants: { tone: "default" },
});
