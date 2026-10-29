import { tv } from "tailwind-variants/lite";

export const resizableRecipe = tv({
  slots: {
    root: "nui:min-h-0 nui:min-w-0 nui:text-foreground",
    panel: "nui:min-h-0 nui:min-w-0",
    handle:
      "nui-resizable-handle nui:relative nui:flex nui:shrink-0 nui:items-center nui:justify-center nui:border-0 nui:bg-transparent nui:p-0 nui:focus-visible:z-10 nui:focus-visible:outline-[length:var(--nui-focus-width)] nui:focus-visible:-outline-offset-[var(--nui-focus-offset)] nui:focus-visible:outline-focus-ring",
    grip: "nui-resizable-grip nui:pointer-events-none nui:relative nui:z-1 nui:flex nui:shrink-0 nui:items-center nui:justify-center nui:rounded-sm nui:border nui:border-[var(--nui-control-border)] nui:bg-surface nui:text-muted-foreground",
  },
});
