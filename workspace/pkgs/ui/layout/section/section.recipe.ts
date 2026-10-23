import { tv } from "tailwind-variants/lite";

export const sectionRecipe = tv({
  variants: {
    spacing: {
      sm: "nui:py-6 nui:md:py-8",
      md: "nui:py-10 nui:md:py-16",
      lg: "nui:py-16 nui:md:py-24",
    },
  },
  defaultVariants: { spacing: "md" },
});
