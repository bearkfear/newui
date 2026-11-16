import type { JSX } from "solid-js";
import { mergeProps, splitProps } from "solid-js";
import type { VariantProps } from "tailwind-variants/lite";
import {
  VerticalMenuBranch,
  VerticalMenuBranchContent,
  VerticalMenuBranchTrigger,
} from "./vertical-menu.branch";
import { VerticalMenuStyles } from "./vertical-menu.context";
import {
  VerticalMenuGroup,
  VerticalMenuIcon,
  VerticalMenuItem,
  VerticalMenuLabel,
  VerticalMenuLink,
  VerticalMenuList,
  VerticalMenuSubList,
} from "./vertical-menu.parts";
import { verticalMenuRecipe } from "./vertical-menu.recipe";

export type VerticalMenuRootProps = JSX.HTMLAttributes<HTMLElement> &
  VariantProps<typeof verticalMenuRecipe>;

export function VerticalMenuRoot(props: VerticalMenuRootProps) {
  const [local, rest] = splitProps(mergeProps({ "aria-label": "Sidebar navigation" }, props), [
    "variant",
    "density",
    "class",
    "children",
  ]);
  const styles = () => verticalMenuRecipe({ variant: local.variant, density: local.density });
  return (
    <VerticalMenuStyles.Provider value={styles}>
      <nav {...rest} class={styles().root({ class: local.class })}>
        {local.children}
      </nav>
    </VerticalMenuStyles.Provider>
  );
}

/**
 * Grouped page navigation built from native links, with optional Ark Collapsible branches.
 * Use `current` on the active link; Root does not manage routes or application selection state.
 */
export const VerticalMenu = {
  Root: VerticalMenuRoot,
  Group: VerticalMenuGroup,
  Label: VerticalMenuLabel,
  List: VerticalMenuList,
  Item: VerticalMenuItem,
  Link: VerticalMenuLink,
  SubList: VerticalMenuSubList,
  Icon: VerticalMenuIcon,
  Branch: VerticalMenuBranch,
  BranchTrigger: VerticalMenuBranchTrigger,
  BranchContent: VerticalMenuBranchContent,
};
