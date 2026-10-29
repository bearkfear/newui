import { tv } from "tailwind-variants/lite";

export const menuRecipe = tv({
  slots: {
    trigger:
      "nui:inline-flex nui:min-h-8 nui:items-center nui:justify-center nui:gap-2 nui:rounded-md nui:px-3 nui:py-1.5 nui:text-sm nui:font-medium nui:leading-snug nui:text-foreground nui:cursor-pointer nui:outline-none nui:transition-colors nui:enabled:hover:bg-[var(--nui-neutral-soft)] nui:enabled:data-[state=open]:bg-[var(--nui-neutral-soft)] nui:focus-visible:outline-[length:var(--nui-focus-width)] nui:focus-visible:outline-offset-[var(--nui-focus-offset)] nui:focus-visible:outline-focus-ring nui:disabled:cursor-not-allowed nui:disabled:text-[var(--nui-neutral-8)] nui:motion-reduce:transition-none",
    positioner: "nui:z-[calc(var(--nui-z-popover)+var(--layer-index,0))]",
    content:
      "nui-menu-content nui:w-56 nui:max-w-[calc(100vw-2rem)] nui:max-h-[min(var(--available-height,100dvh),calc(100dvh-2rem))] nui:overflow-y-auto nui:overscroll-contain nui:rounded-lg nui:border nui:border-border nui:bg-background nui:p-1 nui:text-sm nui:text-foreground nui:shadow-[var(--nui-popover-shadow)] nui:outline-none",
    item: "nui:flex nui:min-h-8 nui:min-w-0 nui:items-center nui:gap-2 nui:rounded-md nui:border nui:border-transparent nui:px-2 nui:py-1.5 nui:leading-snug nui:wrap-anywhere nui:cursor-default nui:select-none nui:outline-none nui:data-highlighted:bg-[var(--nui-neutral-soft)] nui:data-highlighted:text-foreground nui:data-[destructive]:text-[var(--nui-danger-text)] nui:data-[destructive]:data-highlighted:bg-[var(--nui-danger-soft)] nui:data-[destructive]:data-highlighted:text-[var(--nui-danger-text)] nui:data-disabled:cursor-not-allowed nui:data-disabled:text-[var(--nui-neutral-8)]",
    separator: "nui:my-1 nui:border-0 nui:border-t nui:border-border",
    groupLabel:
      "nui:px-2 nui:py-1.5 nui:text-xs nui:font-medium nui:leading-relaxed nui:text-muted-foreground",
    icon: "nui-menu-icon nui:inline-flex nui:size-4 nui:shrink-0 nui:items-center nui:justify-center",
    label: "nui:min-w-0 nui:flex-1",
  },
});
