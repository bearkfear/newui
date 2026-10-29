import { NavigationMenu as Ark } from "@ark-ui/solid/navigation-menu";
import { mergeProps, splitProps } from "solid-js";
import { NavigationMenuCloseContext } from "./navigation-menu.context";
import {
  NavigationMenuContent,
  NavigationMenuDescription,
  NavigationMenuGroup,
  NavigationMenuItem,
  NavigationMenuLabel,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "./navigation-menu.parts";
import { navigationMenuRecipe } from "./navigation-menu.recipe";
import {
  NavigationSubmenu,
  NavigationSubmenuContent,
  NavigationSubmenuTrigger,
} from "./navigation-menu.submenu";
import { useNavigationMenuBehavior } from "./use-navigation-menu";

export type NavigationMenuRootProps = Ark.RootProps & { onNavigate?: () => void };
const styles = navigationMenuRecipe();

export function NavigationMenuRoot(props: NavigationMenuRootProps) {
  const [local, rest] = splitProps(props, ["class", "children", "onNavigate"]);
  const behavior = useNavigationMenuBehavior(
    mergeProps(
      {
        "aria-label": "Main navigation",
        disableHoverTrigger: true,
        disablePointerLeaveClose: true,
      },
      rest,
    ),
  );
  return (
    <Ark.RootProvider
      {...behavior.rest}
      value={behavior.api}
      class={styles.root({ class: local.class })}
    >
      <Ark.Context>
        {(api) => (
          <NavigationMenuCloseContext.Provider
            value={() => {
              api().setValue("");
              local.onNavigate?.();
            }}
          >
            {local.children}
          </NavigationMenuCloseContext.Provider>
        )}
      </Ark.Context>
    </Ark.RootProvider>
  );
}

export const NavigationMenu = {
  Root: NavigationMenuRoot,
  List: NavigationMenuList,
  Item: NavigationMenuItem,
  Link: NavigationMenuLink,
  Trigger: NavigationMenuTrigger,
  Content: NavigationMenuContent,
  Group: NavigationMenuGroup,
  Label: NavigationMenuLabel,
  Description: NavigationMenuDescription,
  Submenu: NavigationSubmenu,
  SubmenuTrigger: NavigationSubmenuTrigger,
  SubmenuContent: NavigationSubmenuContent,
  Context: Ark.Context,
};
