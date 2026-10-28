import { tv } from "tailwind-variants/lite";

export const sheetRecipe = tv({
  slots: {
    positioner: "nui-sheet-positioner nui:pointer-events-none nui:fixed nui:inset-0 nui:flex",
    content:
      "nui-sheet-content nui:pointer-events-auto nui:relative nui:flex nui:min-h-0 nui:min-w-0 nui:flex-col nui:overflow-hidden nui:border-border nui:bg-background nui:text-foreground nui:wrap-anywhere nui:shadow-[var(--nui-overlay-shadow)] nui:outline-none",
  },
  variants: {
    side: {
      right: {
        positioner: "nui:items-stretch nui:justify-end",
        content: "nui:h-dvh nui:w-full nui:max-w-[var(--nui-sheet-size)] nui:border-l",
      },
      left: {
        positioner: "nui:items-stretch nui:justify-start",
        content: "nui:h-dvh nui:w-full nui:max-w-[var(--nui-sheet-size)] nui:border-r",
      },
      top: {
        positioner: "nui:items-start nui:justify-center",
        content:
          "nui:max-h-[min(var(--nui-sheet-size),calc(100dvh-2rem))] nui:w-full nui:rounded-b-xl nui:border-b",
      },
      bottom: {
        positioner: "nui:items-end nui:justify-center",
        content:
          "nui:max-h-[min(var(--nui-sheet-size),calc(100dvh-2rem))] nui:w-full nui:rounded-t-xl nui:border-t",
      },
    },
    size: {
      sm: { content: "nui:[--nui-sheet-size:24rem]" },
      md: { content: "nui:[--nui-sheet-size:28rem]" },
      lg: { content: "nui:[--nui-sheet-size:40rem]" },
    },
  },
  defaultVariants: { side: "right", size: "md" },
});
