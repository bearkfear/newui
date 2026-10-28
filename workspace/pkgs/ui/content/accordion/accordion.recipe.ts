import { tv } from "tailwind-variants/lite";

export const accordionRecipe = tv({
  slots: {
    root: "nui:w-full nui:min-w-0 nui:overflow-hidden nui:rounded-xl nui:border nui:border-border",
    item: "nui:min-w-0 nui:border-b nui:border-border nui:last:border-b-0",
    heading: "nui:m-0",
  },
  variants: {
    variant: { outline: { root: "nui:bg-background" }, soft: { root: "nui:bg-surface" } },
  },
  defaultVariants: { variant: "outline" },
});
