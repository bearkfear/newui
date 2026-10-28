import { tv } from "tailwind-variants/lite";

export const breadcrumbRecipe = tv({
  slots: {
    root: "nui:min-w-0 nui:text-sm nui:leading-relaxed",
    list: "nui:m-0 nui:flex nui:min-w-0 nui:list-none nui:flex-wrap nui:items-center nui:gap-x-2 nui:gap-y-1 nui:p-0",
    item: "nui-breadcrumb-item nui:inline-flex nui:min-w-0 nui:max-w-full nui:items-center nui:gap-2",
    separator: "nui-breadcrumb-separator nui:shrink-0 nui:text-muted-foreground",
    link: "nui:min-w-0 nui:rounded-sm nui:text-muted-foreground nui:no-underline nui:wrap-anywhere nui:transition-colors nui:hover:text-foreground nui:hover:underline nui:underline-offset-4 nui:focus-visible:outline-2 nui:focus-visible:outline-offset-2 nui:focus-visible:outline-focus-ring nui:motion-reduce:transition-none",
    page: "nui:min-w-0 nui:font-medium nui:text-foreground nui:wrap-anywhere",
  },
});
