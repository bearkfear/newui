import { tv } from "tailwind-variants/lite";

export const hoverCardRecipe = tv({
  slots: {
    trigger:
      "nui:rounded-sm nui:font-medium nui:text-[var(--nui-primary-text)] nui:underline nui:decoration-[var(--nui-primary-border)] nui:underline-offset-4 nui:hover:decoration-current nui:focus-visible:outline-2 nui:focus-visible:outline-offset-4 nui:focus-visible:outline-focus-ring",
    positioner:
      "nui-hover-card-positioner nui:w-[min(var(--nui-hover-card-width),calc(100vw-2rem))] nui:[--arrow-size:8px] nui:[--arrow-background:var(--nui-background)]",
    content:
      "nui-hover-card-content nui:flex nui:max-h-[min(var(--available-height,100dvh),calc(100dvh-2rem))] nui:w-full nui:min-w-0 nui:max-w-[calc(100vw-2rem)] nui:flex-col nui:rounded-xl nui:border nui:border-border nui:bg-background nui:text-foreground nui:wrap-anywhere nui:shadow-[var(--nui-hover-card-shadow)] nui:outline-none",
    body: "nui:grid nui:min-h-0 nui:gap-3 nui:overflow-y-auto nui:overscroll-contain nui:p-5 nui:text-sm nui:leading-relaxed",
  },
});
