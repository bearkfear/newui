import { tv } from "tailwind-variants/lite";

export const proseRecipe = tv({
  base: "nui-prose nui-focus-links nui:max-w-prose nui:min-w-0 nui:leading-relaxed nui:text-foreground nui:wrap-break-word",
  variants: { size: { sm: "nui:text-sm", md: "nui:text-base", lg: "nui:text-lg" } },
  defaultVariants: { size: "md" },
});
