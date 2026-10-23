import { tv } from "tailwind-variants/lite";

export const containerRecipe = tv({
  base: "nui:mx-auto nui:w-full nui:min-w-0 nui:px-4 nui:sm:px-6 nui:lg:px-8",
  variants: {
    size: {
      sm: "nui:max-w-3xl",
      md: "nui:max-w-5xl",
      lg: "nui:max-w-7xl",
      full: "nui:max-w-none",
    },
  },
  defaultVariants: { size: "lg" },
});
