import { tv } from "tailwind-variants/lite";

export const panelRecipe = tv({
  slots: {
    root: "nui:min-w-0 nui:overflow-hidden nui:rounded-xl nui:border nui:border-border nui:text-foreground",
    bar: "nui:flex nui:min-w-0 nui:flex-wrap nui:items-center nui:justify-between nui:gap-2 nui:bg-surface nui:px-3 nui:py-2 nui:[--nui-tabs-track:var(--nui-background)] nui:[--nui-tabs-selected-bg:var(--nui-neutral-soft-active)] nui:[--nui-tabs-selected-fg:var(--nui-foreground)]",
    barGroup:
      "nui:flex nui:min-w-0 nui:flex-auto nui:flex-wrap nui:items-center nui:gap-x-3 nui:gap-y-2",
    barActions: "nui:ml-auto nui:flex nui:shrink-0 nui:items-center nui:gap-1",
    toolbar: "nui:border-t nui:border-border nui:px-5 nui:py-4",
    body: "nui:border-t nui:border-border nui:p-5",
    list: "nui:m-0 nui:list-none nui:p-0",
    item: "nui:border-t nui:border-border",
    row: "nui:flex nui:min-w-0 nui:items-center nui:justify-between nui:gap-4 nui:px-4 nui:py-3",
    itemContent: "nui:grid nui:min-w-0 nui:flex-1 nui:gap-y-[var(--nui-header-gap)]",
    itemTitle:
      "nui:m-0 nui:text-sm nui:leading-snug nui:font-semibold nui:text-foreground nui:wrap-anywhere",
    itemDescription:
      "nui:m-0 nui:text-sm nui:leading-snug nui:text-muted-foreground nui:wrap-anywhere",
    itemActions: "nui:flex nui:shrink-0 nui:items-center nui:gap-2",
    link: "nui:flex nui:min-w-0 nui:flex-wrap nui:items-center nui:justify-between nui:gap-3 nui:px-5 nui:py-4 nui:text-[var(--nui-primary-text)] nui:no-underline nui:hover:bg-[var(--nui-neutral-soft)] nui:active:bg-[var(--nui-neutral-soft-active)] nui:aria-[current=page]:bg-[var(--nui-primary-soft-active)] nui-focus-ring nui:[--nui-focus-rest-offset:calc(-1*var(--nui-focus-offset))]",
    footer:
      "nui:flex nui:flex-wrap nui:items-center nui:justify-between nui:gap-3 nui:border-t nui:border-border nui:px-5 nui:py-4",
  },
  variants: {
    tone: { default: { root: "nui:bg-background" }, subtle: { root: "nui:bg-surface" } },
  },
  defaultVariants: { tone: "default" },
});
