import { Menu as ArkMenu } from "@ark-ui/solid/menu";
import { splitProps } from "solid-js";
import { menuRecipe } from "./menu.recipe";

const styles = menuRecipe();

export function MenuTrigger(props: ArkMenu.TriggerProps) {
  const [local, rest] = splitProps(props, ["class"]);
  return <ArkMenu.Trigger {...rest} class={styles.trigger({ class: local.class })} />;
}
