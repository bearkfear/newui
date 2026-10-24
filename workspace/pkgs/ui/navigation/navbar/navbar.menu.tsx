import { NavigationMenu as ArkNavigationMenu } from "@ark-ui/solid/navigation-menu";
import { splitProps } from "solid-js";
import { NavigationChevron } from "../navigation-icons";
import { useNavbarClose } from "./navbar.context";
import { navbarRecipe } from "./navbar.recipe";

const styles = navbarRecipe();

export function NavbarList(props: ArkNavigationMenu.ListProps) {
  const [local, rest] = splitProps(props, ["class"]);
  return <ArkNavigationMenu.List {...rest} class={styles.list({ class: local.class })} />;
}
export function NavbarItem(props: ArkNavigationMenu.ItemProps) {
  const [local, rest] = splitProps(props, ["class"]);
  return <ArkNavigationMenu.Item {...rest} class={styles.item({ class: local.class })} />;
}
export function NavbarLink(props: ArkNavigationMenu.LinkProps) {
  const [local, rest] = splitProps(props, ["class", "onSelect"]);
  const close = useNavbarClose();
  return (
    <ArkNavigationMenu.Link
      {...rest}
      class={styles.link({ class: local.class })}
      onSelect={(event) => {
        local.onSelect?.(event);
        if (!event.defaultPrevented) close();
      }}
    />
  );
}
export function NavbarMenuTrigger(props: ArkNavigationMenu.TriggerProps) {
  const [local, rest] = splitProps(props, ["class", "children"]);
  return (
    <ArkNavigationMenu.Trigger {...rest} class={styles.trigger({ class: local.class })}>
      {local.children}
      <NavigationChevron />
    </ArkNavigationMenu.Trigger>
  );
}
export function NavbarMenuContent(props: ArkNavigationMenu.ContentProps) {
  const [local, rest] = splitProps(props, ["class"]);
  return <ArkNavigationMenu.Content {...rest} class={styles.menuContent({ class: local.class })} />;
}
