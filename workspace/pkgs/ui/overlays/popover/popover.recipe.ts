import { tv } from "tailwind-variants/lite";

export const popoverRecipe = tv({
  slots: {
    positioner:
      "nui-popover-positioner nui:w-[min(var(--nui-popover-width),calc(100vw-2rem))] nui:[--arrow-size:8px] nui:[--arrow-background:var(--nui-background)]",
    content:
      "nui-popover-content nui:flex nui:max-h-[min(var(--available-height,100dvh),calc(100dvh-2rem))] nui:w-full nui:min-w-0 nui:max-w-[calc(100vw-2rem)] nui:flex-col nui:rounded-xl nui:border nui:border-border nui:bg-background nui:text-foreground nui:wrap-anywhere nui:shadow-[var(--nui-popover-shadow)] nui:outline-none",
    header:
      "nui:grid nui:shrink-0 nui:grid-cols-1 nui:items-start nui:gap-x-3 nui:gap-y-1 nui:rounded-t-xl nui:border-b nui:border-border nui:bg-surface nui:p-4 nui:has-[[data-part=close-trigger]]:grid-cols-[minmax(0,1fr)_auto] nui:[&>[data-part=close-trigger]]:col-start-2 nui:[&>[data-part=close-trigger]]:row-start-1 nui:[&>[data-part=close-trigger]]:row-span-2",
    title:
      "nui:col-start-1 nui:m-0 nui:text-base nui:leading-snug nui:font-semibold nui:tracking-tight",
    description:
      "nui:col-start-1 nui:m-0 nui:text-sm nui:leading-relaxed nui:text-muted-foreground",
    body: "nui:grid nui:min-h-0 nui:gap-3 nui:overflow-y-auto nui:overscroll-contain nui:p-4 nui:text-sm nui:leading-relaxed",
    footer:
      "nui:flex nui:shrink-0 nui:flex-wrap nui:items-center nui:justify-end nui:gap-2 nui:rounded-b-xl nui:border-t nui:border-border nui:bg-surface nui:px-4 nui:py-3",
  },
});
