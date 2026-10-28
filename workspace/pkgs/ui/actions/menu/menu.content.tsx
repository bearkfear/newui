import { Menu as ArkMenu } from "@ark-ui/solid/menu";
import { splitProps } from "solid-js";
import { OverlayPortal } from "../../overlays/overlay.portal";
import { menuRecipe } from "./menu.recipe";

export type MenuContentProps = ArkMenu.ContentProps & { mount?: HTMLElement };
const styles = menuRecipe();

export function MenuContent(props: MenuContentProps) {
  const [local, rest] = splitProps(props, ["mount", "class", "children"]);
  return (
    <OverlayPortal {...(local.mount ? { mount: local.mount } : {})}>
      <ArkMenu.Positioner class={styles.positioner()}>
        <ArkMenu.Content {...rest} class={styles.content({ class: local.class })}>
          {local.children}
        </ArkMenu.Content>
      </ArkMenu.Positioner>
    </OverlayPortal>
  );
}
