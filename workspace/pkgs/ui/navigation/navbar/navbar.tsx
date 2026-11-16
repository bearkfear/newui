import { Collapsible } from "@ark-ui/solid/collapsible";
import type { NavigationMenu as ArkNavigationMenu } from "@ark-ui/solid/navigation-menu";
import { createMediaQuery } from "@solid-primitives/media";
import { mergeProps, splitProps } from "solid-js";
import type { VariantProps } from "tailwind-variants/lite";
import type { ContainerProps } from "../../layout/container/container";
import { Container } from "../../layout/container/container";
import { NavigationMenu } from "../navigation-menu/navigation-menu";
import {
  NavbarItem,
  NavbarLink,
  NavbarList,
  NavbarMenuContent,
  NavbarMenuTrigger,
} from "./navbar.menu";
import { NavbarActions, NavbarBrand, NavbarContent, NavbarToggle } from "./navbar.parts";
import { navbarRecipe } from "./navbar.recipe";
import type { NavbarDisclosureProps } from "./use-navbar-disclosure";
import { useNavbarDisclosure } from "./use-navbar-disclosure";

export type NavbarRootProps = Omit<ArkNavigationMenu.RootProps, "orientation" | "asChild"> &
  NavbarDisclosureProps &
  VariantProps<typeof navbarRecipe> & { width?: ContainerProps["size"] };

export function NavbarRoot(props: NavbarRootProps) {
  const [local, rest] = splitProps(mergeProps({ "aria-label": "Main navigation" }, props), [
    "open",
    "defaultOpen",
    "onOpenChange",
    "tone",
    "width",
    "class",
    "children",
  ]);
  const disclosure = useNavbarDisclosure(local);
  const horizontalLayout = createMediaQuery("(min-width: 48rem)", true);
  const styles = () => navbarRecipe({ tone: local.tone });
  return (
    <Collapsible.RootProvider value={disclosure.api} onKeyDown={disclosure.onKeyDown}>
      <NavigationMenu.Root
        {...rest}
        onNavigate={disclosure.close}
        orientation={horizontalLayout() ? "horizontal" : "vertical"}
        class={styles().root({ class: local.class })}
      >
        <Container size={local.width} class={styles().frame()}>
          {local.children}
        </Container>
      </NavigationMenu.Root>
    </Collapsible.RootProvider>
  );
}

/**
 * Website navigation combining brand, page links, dropdowns, actions, and a mobile disclosure.
 * Use links for destinations and buttons only for disclosure/actions; use NavigationMenu alone when
 * the application already owns its header and mobile toggle.
 */
export const Navbar = {
  Root: NavbarRoot,
  Brand: NavbarBrand,
  Toggle: NavbarToggle,
  Content: NavbarContent,
  List: NavbarList,
  Item: NavbarItem,
  Link: NavbarLink,
  MenuTrigger: NavbarMenuTrigger,
  MenuContent: NavbarMenuContent,
  MenuGroup: NavigationMenu.Group,
  MenuLabel: NavigationMenu.Label,
  MenuDescription: NavigationMenu.Description,
  Submenu: NavigationMenu.Submenu,
  SubmenuTrigger: NavigationMenu.SubmenuTrigger,
  SubmenuContent: NavigationMenu.SubmenuContent,
  Actions: NavbarActions,
};
