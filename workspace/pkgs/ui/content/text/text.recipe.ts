import { tv } from "tailwind-variants/lite";

export const textRecipe = tv({
  base: "nui:m-0 nui:wrap-break-word",
  variants: {
    size: {
      "1": "nui:text-5xl nui:leading-tight",
      "2": "nui:text-[2.5rem] nui:leading-tight",
      "3": "nui:text-[2rem] nui:leading-tight",
      "4": "nui:text-2xl nui:leading-tight",
      "5": "nui:text-xl nui:leading-relaxed",
      "6": "nui:text-base nui:leading-relaxed",
      "7": "nui:text-xs nui:leading-relaxed",
    },
    tone: { default: "nui:text-foreground", muted: "nui:text-muted-foreground" },
  },
  defaultVariants: { size: "6", tone: "default" },
});
