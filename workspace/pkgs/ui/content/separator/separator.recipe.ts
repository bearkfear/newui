import { tv } from "tailwind-variants/lite";

export const separatorRecipe = tv({
  base: "nui:m-0 nui:shrink-0 nui:border-0 nui:bg-border",
  variants: {
    orientation: {
      horizontal: "nui:h-px nui:w-full",
      vertical: "nui:h-auto nui:min-h-4 nui:w-px nui:self-stretch",
    },
  },
  defaultVariants: { orientation: "horizontal" },
});
