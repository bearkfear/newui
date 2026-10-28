import { tv } from "tailwind-variants/lite";

export const collapsibleRecipe = tv({
  base: "nui:w-full nui:min-w-0 nui:overflow-hidden nui:rounded-xl nui:border nui:border-border",
  variants: { variant: { outline: "nui:bg-background", soft: "nui:bg-surface" } },
  defaultVariants: { variant: "outline" },
});
