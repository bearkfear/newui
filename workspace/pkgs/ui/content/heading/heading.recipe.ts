import { tv } from "tailwind-variants/lite";

export const headingRecipe = tv({
  base: "nui:m-0 nui:font-semibold nui:tracking-tight nui:text-foreground nui:text-balance nui:wrap-break-word",
  variants: {
    size: {
      "1": "nui:text-5xl nui:leading-tight",
      "2": "nui:text-[length:var(--nui-font-size-display-md)] nui:leading-tight",
      "3": "nui:text-[length:var(--nui-font-size-display-sm)] nui:leading-tight",
      "4": "nui:text-2xl nui:leading-tight",
      "5": "nui:text-xl nui:leading-snug",
      "6": "nui:text-base nui:leading-snug",
    },
  },
  defaultVariants: { size: "3" },
});
