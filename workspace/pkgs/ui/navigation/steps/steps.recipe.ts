import { tv } from "tailwind-variants/lite";

export const stepsRecipe = tv({
  slots: {
    root: "nui-steps nui:grid nui:w-full nui:min-w-0 nui:gap-6 nui:text-foreground",
    list: "nui-steps-list nui:min-w-0 nui:overflow-x-auto nui:overscroll-x-contain nui:pb-2",
    item: "nui-steps-item nui:relative nui:min-w-0",
    trigger:
      "nui-steps-trigger nui:relative nui:min-w-0 nui:max-w-full nui:rounded-md nui:text-start nui:cursor-pointer nui:outline-none nui:focus-visible:outline-2 nui:focus-visible:outline-offset-2 nui:focus-visible:outline-focus-ring nui:disabled:cursor-not-allowed nui:disabled:text-[var(--nui-neutral-8)]",
    indicator:
      "nui:relative nui:z-1 nui:flex nui:size-8 nui:shrink-0 nui:items-center nui:justify-center nui:rounded-full nui:border nui:border-border nui:bg-surface nui:text-sm nui:font-medium nui:tabular-nums nui:text-muted-foreground nui:data-current:border-[var(--nui-primary-focus)] nui:data-current:bg-[var(--nui-primary-soft)] nui:data-current:text-[var(--nui-primary-text)] nui:data-complete:border-[var(--nui-success-border)] nui:data-complete:bg-[var(--nui-success-soft)] nui:data-complete:text-[var(--nui-success-text)] nui:[&>svg]:size-4",
    label: "nui:grid nui:min-w-0 nui:gap-y-[var(--nui-header-gap)] nui:wrap-anywhere",
    title: "nui:text-sm nui:font-medium nui:leading-snug",
    description: "nui:text-sm nui:leading-relaxed nui:text-muted-foreground",
    separator:
      "nui-steps-separator nui:absolute nui:bg-border nui:data-complete:bg-[var(--nui-success-border)]",
    content:
      "nui-steps-content nui:min-w-0 nui:wrap-anywhere nui:focus-visible:outline-2 nui:focus-visible:outline-offset-2 nui:focus-visible:outline-focus-ring",
    actions: "nui-steps-actions nui:flex nui:min-w-0 nui:flex-wrap nui:items-center nui:gap-2",
  },
});
