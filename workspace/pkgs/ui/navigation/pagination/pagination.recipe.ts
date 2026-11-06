import { tv } from "tailwind-variants/lite";

export const paginationRecipe = tv({
  slots: {
    root: "nui:flex nui:w-full nui:min-w-0 nui:flex-wrap nui:items-center nui:justify-center nui:gap-x-1 nui:gap-y-2 nui:text-foreground",
    control:
      "nui:inline-flex nui:shrink-0 nui:items-center nui:justify-center nui:gap-2 nui:h-[var(--nui-page-size)] nui:min-w-[var(--nui-page-size)] nui:rounded-md nui:border nui:border-transparent nui:bg-transparent nui:px-2 nui:leading-none nui:text-[length:var(--nui-page-font)] nui:font-medium nui:tabular-nums nui:cursor-pointer nui:motion-reduce:transition-none nui-focus-ring nui:enabled:hover:bg-[var(--nui-neutral-soft)] nui:enabled:active:bg-[var(--nui-neutral-soft-active)] nui:enabled:data-selected:bg-background nui:enabled:data-selected:text-foreground nui:enabled:data-selected:border-[var(--nui-control-border)] nui:disabled:cursor-not-allowed nui:disabled:border-[var(--nui-neutral-6)] nui:disabled:bg-[var(--nui-neutral-3)] nui:disabled:text-[var(--nui-neutral-8)]",
    items: "nui:inline-flex nui:min-w-0 nui:items-center",
    pages:
      "nui-pagination-pages nui:max-sm:hidden nui:inline-flex nui:min-w-0 nui:flex-wrap nui:items-center nui:gap-1",
    label: "nui:max-sm:hidden",
    ellipsis:
      "nui:inline-flex nui:h-[var(--nui-page-size)] nui:min-w-6 nui:items-center nui:justify-center nui:text-muted-foreground",
    compactSummary:
      "nui-pagination-summary nui:hidden nui:max-sm:inline-flex nui:px-2 nui:text-[length:var(--nui-page-font)] nui:tabular-nums",
  },
  variants: {
    size: {
      sm: {
        root: "nui:[--nui-page-size:var(--nui-control-height-sm)] nui:[--nui-page-font:var(--nui-font-size-sm)]",
      },
      md: {
        root: "nui:[--nui-page-size:var(--nui-control-height-md)] nui:[--nui-page-font:var(--nui-font-size-sm)]",
      },
      lg: {
        root: "nui:[--nui-page-size:var(--nui-control-height-lg)] nui:[--nui-page-font:var(--nui-font-size-base)]",
      },
    },
  },
  defaultVariants: { size: "md" },
});
