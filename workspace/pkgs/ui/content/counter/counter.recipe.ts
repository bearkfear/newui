import { tv } from "tailwind-variants/lite";
import { badgeAppearanceVariants } from "../badge/badge.recipe";

export const counterLabelClass = "nui:sr-only";
export const counterAnchorRecipe = tv({
  base: "nui:relative nui:inline-flex nui:shrink-0 nui:align-middle",
});

const overlay =
  "nui:absolute nui:z-10 nui:pointer-events-none nui:shadow-[0_0_0_2px_var(--nui-counter-ring,var(--nui-background))]";

export const counterRecipe = tv({
  base: "nui-badge nui-counter nui:inline-flex nui:shrink-0 nui:items-center nui:justify-center nui:rounded-full nui:border nui:font-semibold nui:leading-none nui:tabular-nums nui:align-middle nui:whitespace-nowrap",
  variants: {
    ...badgeAppearanceVariants,
    placement: {
      inline: "",
      "top-end": `${overlay} nui:top-0 nui:end-0 nui:translate-x-1/2 nui:-translate-y-1/2`,
      "top-start": `${overlay} nui:top-0 nui:start-0 nui:-translate-x-1/2 nui:-translate-y-1/2`,
      "bottom-end": `${overlay} nui:bottom-0 nui:end-0 nui:translate-x-1/2 nui:translate-y-1/2`,
      "bottom-start": `${overlay} nui:bottom-0 nui:start-0 nui:-translate-x-1/2 nui:translate-y-1/2`,
    },
    size: {
      sm: "nui:h-4 nui:min-w-4 nui:px-0.5 nui:text-[0.625rem]",
      md: "nui:h-5 nui:min-w-5 nui:px-1 nui:text-xs",
      lg: "nui:h-6 nui:min-w-6 nui:px-1.5 nui:text-sm",
    },
  },
  defaultVariants: { variant: "solid", tone: "danger", size: "md", placement: "inline" },
});
