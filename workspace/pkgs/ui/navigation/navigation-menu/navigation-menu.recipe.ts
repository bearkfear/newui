import { tv } from "tailwind-variants/lite";

const focus =
  "nui:focus-visible:outline-[length:var(--nui-focus-width)] nui:focus-visible:outline-offset-[var(--nui-focus-offset)] nui:focus-visible:outline-focus-ring";
const entry = `nui:flex nui:min-w-0 nui:items-center nui:gap-2 nui:border-0 nui:bg-transparent nui:py-3 nui:text-sm nui:font-medium nui:text-muted-foreground nui:no-underline nui:wrap-anywhere nui:cursor-pointer nui:hover:text-foreground nui:aria-[current=page]:text-[var(--nui-primary-text)] ${focus}`;

export const navigationMenuRecipe = tv({
  slots: {
    root: "nui-navigation-menu nui:relative nui:min-w-0 nui:text-foreground",
    list: "nui-navigation-menu-list nui:flex nui:min-w-0 nui:gap-6",
    item: "nui:relative nui:min-w-0",
    link: `nui-navigation-menu-link ${entry}`,
    trigger: `nui-navigation-menu-trigger ${entry} nui:justify-between nui:data-[state=open]:text-foreground nui:disabled:cursor-not-allowed nui:disabled:text-[var(--nui-disabled-foreground)] nui:[&>svg]:shrink-0`,
    content:
      "nui-navigation-menu-content nui:grid nui:gap-1 nui:rounded-lg nui:border nui:border-border nui:bg-background nui:p-2 nui:text-foreground nui:shadow-[var(--nui-popover-shadow)]",
    subTrigger: `nui-navigation-menu-subtrigger ${entry} nui:w-full nui:justify-between nui:rounded-sm nui:px-3 nui:py-2 nui:hover:bg-[var(--nui-neutral-soft)] nui:data-[state=open]:bg-[var(--nui-neutral-soft)] nui:disabled:cursor-not-allowed nui:disabled:text-[var(--nui-disabled-foreground)]`,
    group: "nui:grid nui:min-w-0 nui:content-start nui:gap-1",
    label: "nui:px-3 nui:pb-1 nui:pt-2 nui:text-xs nui:font-semibold nui:text-muted-foreground",
    description:
      "nui:block nui:text-xs nui:font-normal nui:leading-relaxed nui:text-muted-foreground",
  },
});
