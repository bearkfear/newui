import { tv } from "tailwind-variants/lite";

export const dialogRecipe = tv({
  slots: {
    backdrop: "nui-dialog-backdrop nui:fixed nui:inset-0 nui:bg-[var(--nui-overlay-backdrop)]",
    positioner:
      "nui-dialog-positioner nui:fixed nui:inset-0 nui:flex nui:items-center nui:justify-center nui:p-4 nui:sm:p-6",
    content:
      "nui-dialog-content nui:relative nui:flex nui:max-h-[calc(100dvh-2rem)] nui:min-h-0 nui:w-full nui:min-w-0 nui:flex-col nui:text-foreground nui:wrap-anywhere nui:outline-none nui:sm:max-h-[calc(100dvh-3rem)]",
    header:
      "nui:grid nui:shrink-0 nui:grid-cols-1 nui:items-start nui:gap-x-5 nui:gap-y-1 nui:border-b nui:border-border nui:bg-surface nui:px-5 nui:py-3 nui:sm:px-6 nui:has-[[data-part=close-trigger]]:grid-cols-[minmax(0,1fr)_auto] nui:[&>[data-part=close-trigger]]:col-start-2 nui:[&>[data-part=close-trigger]]:row-start-1 nui:[&>[data-part=close-trigger]]:row-span-2",
    title:
      "nui:col-start-1 nui:m-0 nui:text-xl nui:leading-snug nui:font-semibold nui:tracking-tight nui:text-foreground",
    description:
      "nui:col-start-1 nui:m-0 nui:text-sm nui:leading-relaxed nui:text-muted-foreground",
    body: "nui:grid nui:min-h-0 nui:gap-4 nui:overflow-y-auto nui:overscroll-contain nui:p-5 nui:text-base nui:leading-relaxed nui:sm:p-6",
    footer:
      "nui:flex nui:shrink-0 nui:flex-wrap nui:items-center nui:justify-end nui:gap-2 nui:border-t nui:border-border nui:bg-surface nui:px-5 nui:py-3 nui:sm:px-6",
    close:
      "nui:inline-flex nui:size-8 nui:shrink-0 nui:cursor-pointer nui:items-center nui:justify-center nui:rounded-full nui:border-0 nui:bg-[var(--nui-neutral-soft)] nui:text-[var(--nui-neutral-text)] nui:enabled:hover:bg-[var(--nui-neutral-soft-hover)] nui:enabled:active:bg-[var(--nui-neutral-soft-active)] nui:focus-visible:outline-2 nui:focus-visible:outline-offset-2 nui:focus-visible:outline-focus-ring nui:disabled:cursor-not-allowed nui:disabled:bg-[var(--nui-disabled-background)] nui:disabled:text-[var(--nui-disabled-foreground)]",
  },
  variants: {
    size: {
      sm: { content: "nui:max-w-md" },
      md: { content: "nui:max-w-[40rem]" },
      lg: { content: "nui:max-w-4xl" },
    },
    variant: {
      card: {
        content:
          "nui:overflow-hidden nui:rounded-xl nui:border nui:border-border nui:bg-background nui:shadow-[var(--nui-overlay-shadow)]",
      },
      free: { content: "nui:bg-transparent" },
    },
  },
  defaultVariants: { size: "md", variant: "card" },
});
