import { NavigationMenu as Ark, useNavigationMenuContext } from "@ark-ui/solid/navigation-menu";
import { type JSX, splitProps, useContext } from "solid-js";
import { NavigationChevron } from "../navigation-icons";
import {
  NavigationMenuItemContext,
  NavigationMenuVisibilityContext,
  useNavigationMenuClose,
} from "./navigation-menu.context";
import { navigationMenuRecipe } from "./navigation-menu.recipe";

const styles = navigationMenuRecipe();
export type NavigationMenuContentProps = Ark.ContentProps & {
  layout?: "simple" | "wide";
  align?: "start" | "end";
};

export function NavigationMenuList(props: Ark.ListProps) {
  const [local, rest] = splitProps(props, ["class"]);
  return <Ark.List {...rest} class={styles.list({ class: local.class })} />;
}
export function NavigationMenuItem(props: Ark.ItemProps) {
  const [local, rest] = splitProps(props, ["class"]);
  return (
    <NavigationMenuItemContext.Provider value={() => props.value}>
      <Ark.Item {...rest} class={styles.item({ class: local.class })} />
    </NavigationMenuItemContext.Provider>
  );
}
export function NavigationMenuLink(props: Ark.LinkProps) {
  const [local, rest] = splitProps(props, ["class", "onSelect"]);
  const close = useNavigationMenuClose();
  return (
    <Ark.Link
      {...rest}
      class={styles.link({ class: local.class })}
      onSelect={(event) => {
        local.onSelect?.(event);
        if (!event.defaultPrevented && rest.closeOnClick !== false) close();
      }}
    />
  );
}
export function NavigationMenuTrigger(props: Ark.TriggerProps) {
  const [local, rest] = splitProps(props, ["class", "children"]);
  return (
    <Ark.Trigger {...rest} class={styles.trigger({ class: local.class })}>
      {local.children}
      <NavigationChevron />
    </Ark.Trigger>
  );
}
export function NavigationMenuContent(props: NavigationMenuContentProps) {
  const [local, rest] = splitProps(props, ["class", "layout", "align", "children"]);
  const api = useNavigationMenuContext();
  const item = useContext(NavigationMenuItemContext);
  return (
    <Ark.Content
      {...rest}
      data-layout={local.layout ?? "simple"}
      data-align={local.align ?? "start"}
      class={styles.content({ class: local.class })}
    >
      <NavigationMenuVisibilityContext.Provider
        value={() => api().value === (props.value ?? item?.())}
      >
        {local.children}
      </NavigationMenuVisibilityContext.Provider>
    </Ark.Content>
  );
}
export function NavigationMenuGroup(props: JSX.HTMLAttributes<HTMLDivElement>) {
  const [local, rest] = splitProps(props, ["class"]);
  return <div {...rest} class={styles.group({ class: local.class })} />;
}
export function NavigationMenuLabel(props: JSX.HTMLAttributes<HTMLDivElement>) {
  const [local, rest] = splitProps(props, ["class"]);
  return <div {...rest} class={styles.label({ class: local.class })} />;
}
export function NavigationMenuDescription(props: JSX.HTMLAttributes<HTMLSpanElement>) {
  const [local, rest] = splitProps(props, ["class"]);
  return <span {...rest} class={styles.description({ class: local.class })} />;
}
