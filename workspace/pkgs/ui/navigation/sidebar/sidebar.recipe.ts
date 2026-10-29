import { tv } from "tailwind-variants/lite";

export const sidebarRecipe = tv({
  slots: {
    root: "nui-sidebar-root nui:w-full nui:min-h-0 nui:min-w-0 nui:bg-background nui:text-foreground",
    panel: "nui-sidebar-panel",
    surface:
      "nui-sidebar-surface nui:flex nui:h-full nui:min-h-0 nui:min-w-0 nui:flex-col nui:overflow-hidden nui:bg-surface nui:text-foreground",
    header: "nui:flex nui:shrink-0 nui:items-center nui:gap-2 nui:p-3",
    body: "nui:min-h-0 nui:flex-1 nui:overflow-y-auto nui:overscroll-contain nui:px-2 nui:py-3",
    footer: "nui:shrink-0 nui:border-t nui:border-border nui:p-3",
    main: "nui:flex nui:h-full nui:min-h-0 nui:min-w-0 nui:flex-col nui:overflow-auto",
    label: "nui-sidebar-label nui:min-w-0 nui:truncate",
    expanded: "nui-sidebar-expanded nui:min-w-0",
  },
});
