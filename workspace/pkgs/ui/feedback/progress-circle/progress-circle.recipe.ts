import { tv } from "tailwind-variants/lite";
import { progressTones } from "../progress/progress.recipe";

export const progressCircleRecipe = tv({
  slots: {
    root: "nui:inline-flex nui:min-w-0 nui:flex-col nui:items-center nui:gap-2",
    visual: "nui:relative nui:grid nui:shrink-0 nui:place-items-center",
    circle: "nui-progress-circle nui:col-start-1 nui:row-start-1",
    track: "nui:stroke-[var(--nui-progress-track)]",
    range:
      "nui-progress-circle-range nui:stroke-[var(--nui-progress-color)] nui:[stroke-linecap:round]",
    value:
      "nui:pointer-events-none nui:col-start-1 nui:row-start-1 nui:max-w-[calc(var(--size)-var(--thickness)*3)] nui:text-center nui:text-xs nui:leading-tight nui:font-medium nui:tabular-nums nui:text-[var(--nui-progress-text)] nui:wrap-anywhere",
    label:
      "nui:max-w-[20ch] nui:text-center nui:text-sm nui:leading-snug nui:font-medium nui:text-[var(--nui-progress-strong)] nui:wrap-anywhere",
    hidden: "nui:sr-only",
  },
  variants: {
    size: {
      sm: { root: "nui:[--size:48px] nui:[--thickness:4px]" },
      md: { root: "nui:[--size:80px] nui:[--thickness:6px]" },
      lg: { root: "nui:[--size:112px] nui:[--thickness:8px]", value: "nui:text-base" },
    },
    tone: progressTones,
  },
  defaultVariants: { size: "md", tone: "primary" },
});
