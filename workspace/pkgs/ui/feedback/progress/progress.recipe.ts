import { tv } from "tailwind-variants/lite";

export const progressTones = {
  neutral: {
    root: "nui:[--nui-progress-color:var(--nui-neutral-text)] nui:[--nui-progress-text:var(--nui-neutral-text)] nui:[--nui-progress-strong:var(--nui-neutral-text-strong)]",
  },
  primary: {
    root: "nui:[--nui-progress-color:var(--nui-primary)] nui:[--nui-progress-text:var(--nui-primary-text)] nui:[--nui-progress-strong:var(--nui-primary-text-strong)]",
  },
  info: {
    root: "nui:[--nui-progress-color:var(--nui-info)] nui:[--nui-progress-text:var(--nui-info-text)] nui:[--nui-progress-strong:var(--nui-info-text-strong)]",
  },
  success: {
    root: "nui:[--nui-progress-color:var(--nui-success)] nui:[--nui-progress-text:var(--nui-success-text)] nui:[--nui-progress-strong:var(--nui-success-text-strong)]",
  },
  warning: {
    root: "nui:[--nui-progress-color:var(--nui-warning)] nui:[--nui-progress-text:var(--nui-warning-text)] nui:[--nui-progress-strong:var(--nui-warning-text-strong)]",
  },
  danger: {
    root: "nui:[--nui-progress-color:var(--nui-danger)] nui:[--nui-progress-text:var(--nui-danger-text)] nui:[--nui-progress-strong:var(--nui-danger-text-strong)]",
  },
};

export const progressRecipe = tv({
  slots: {
    root: "nui:grid nui:w-full nui:min-w-0 nui:gap-2",
    header: "nui:flex nui:min-w-0 nui:items-center nui:justify-between nui:gap-3",
    label:
      "nui:min-w-0 nui:text-sm nui:leading-snug nui:font-medium nui:text-[var(--nui-progress-strong)] nui:wrap-anywhere",
    value:
      "nui:min-w-0 nui:max-w-[50%] nui:shrink-0 nui:text-right nui:text-xs nui:tabular-nums nui:text-[var(--nui-progress-text)] nui:wrap-anywhere",
    hidden: "nui:sr-only",
    track:
      "nui:relative nui:w-full nui:overflow-hidden nui:rounded-full nui:bg-[var(--nui-progress-track)]",
    range: "nui-progress-range nui:h-full nui:rounded-[inherit] nui:bg-[var(--nui-progress-color)]",
  },
  variants: {
    size: { sm: { track: "nui:h-1" }, md: { track: "nui:h-2" }, lg: { track: "nui:h-3" } },
    tone: progressTones,
  },
  defaultVariants: { size: "md", tone: "primary" },
});
