import { tv } from "tailwind-variants/lite";

export const timelineRecipe = tv({
  slots: {
    root: "nui-timeline nui:m-0 nui:w-full nui:min-w-0 nui:list-none nui:p-0 nui:text-foreground",
    item: "nui:relative nui:min-w-0 nui:items-start nui:gap-x-3",
    indicator:
      "nui:relative nui:col-start-1 nui:row-start-1 nui:z-1 nui:flex nui:size-6 nui:shrink-0 nui:items-center nui:justify-center nui:rounded-full nui:border nui:border-[var(--nui-timeline-marker-border)] nui:bg-[var(--nui-timeline-marker-bg)] nui:text-[var(--nui-timeline-marker-fg)] nui:[&>svg]:size-3.5",
    dot: "nui:size-1.5 nui:rounded-full nui:bg-current",
    content:
      "nui:col-start-2 nui:row-start-1 nui:grid nui:min-h-6 nui:min-w-0 nui:gap-y-[var(--nui-header-gap)] nui:wrap-anywhere",
    time: "nui:text-xs nui:leading-relaxed nui:text-muted-foreground",
  },
  variants: {
    density: {
      comfortable: { root: "nui:[--nui-timeline-gap:1.5rem]" },
      compact: { root: "nui:[--nui-timeline-gap:1rem]" },
    },
    orientation: {
      vertical: {},
      horizontal: {
        root: "nui:overflow-x-auto nui:overscroll-x-contain nui:pb-2 nui:focus-visible:outline-[length:var(--nui-focus-width)] nui:focus-visible:outline-offset-[var(--nui-focus-offset)] nui:focus-visible:outline-focus-ring",
      },
    },
  },
  defaultVariants: { density: "comfortable", orientation: "vertical" },
});

export const timelineItemRecipe = tv({
  variants: {
    status: {
      default:
        "nui:[--nui-timeline-marker-bg:var(--nui-surface)] nui:[--nui-timeline-marker-border:var(--nui-border)] nui:[--nui-timeline-marker-fg:var(--nui-muted-foreground)]",
      complete:
        "nui:[--nui-timeline-marker-bg:var(--nui-success-soft)] nui:[--nui-timeline-marker-border:var(--nui-success-border)] nui:[--nui-timeline-marker-fg:var(--nui-success-text)]",
      current:
        "nui:[--nui-timeline-marker-bg:var(--nui-primary-soft)] nui:[--nui-timeline-marker-border:var(--nui-primary-focus)] nui:[--nui-timeline-marker-fg:var(--nui-primary-text)]",
      pending:
        "nui:[--nui-timeline-marker-bg:var(--nui-surface)] nui:[--nui-timeline-marker-border:var(--nui-border)] nui:[--nui-timeline-marker-fg:var(--nui-neutral-8)]",
    },
  },
  defaultVariants: { status: "default" },
});
