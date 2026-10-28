import { tv } from "tailwind-variants/lite";

export const tooltipRecipe = tv({
  slots: {
    positioner:
      "nui-tooltip-positioner nui:[--arrow-size:8px] nui:[--arrow-background:var(--nui-tooltip-background)]",
    content:
      "nui-tooltip-content nui:w-max nui:max-w-[min(20rem,calc(100vw-2rem))] nui:rounded-md nui:bg-[var(--nui-tooltip-background)] nui:px-3 nui:py-2 nui:text-sm nui:leading-snug nui:font-normal nui:text-[var(--nui-tooltip-foreground)] nui:wrap-anywhere nui:shadow-[var(--nui-tooltip-shadow)]",
  },
});
