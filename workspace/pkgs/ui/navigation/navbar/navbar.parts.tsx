import { Collapsible } from "@ark-ui/solid/collapsible";
import type { JSX } from "solid-js";
import { mergeProps, Show, splitProps } from "solid-js";
import { NavigationToggleIcon } from "../navigation-icons";
import { navbarRecipe } from "./navbar.recipe";

const styles = navbarRecipe();

export function NavbarBrand(props: JSX.AnchorHTMLAttributes<HTMLAnchorElement>) {
  const [local, rest] = splitProps(props, ["class"]);
  return <a {...rest} class={styles.brand({ class: local.class })} />;
}
export function NavbarToggle(props: Collapsible.TriggerProps) {
  const [local, rest] = splitProps(mergeProps({ "aria-label": "Toggle navigation" }, props), [
    "class",
    "children",
  ]);
  return (
    <Collapsible.Trigger {...rest} class={styles.toggle({ class: local.class })}>
      <Show
        when={local.children}
        fallback={
          <>
            <NavigationToggleIcon />
            <span>Menu</span>
          </>
        }
      >
        {local.children}
      </Show>
    </Collapsible.Trigger>
  );
}
export function NavbarContent(props: Collapsible.ContentProps) {
  const [local, rest] = splitProps(props, ["class"]);
  return <Collapsible.Content {...rest} class={styles.content({ class: local.class })} />;
}
export function NavbarActions(props: JSX.HTMLAttributes<HTMLDivElement>) {
  const [local, rest] = splitProps(props, ["class"]);
  return <div {...rest} class={styles.actions({ class: local.class })} />;
}
