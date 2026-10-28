import { Menu as ArkMenu } from "@ark-ui/solid/menu";
import { type JSX, splitProps } from "solid-js";
import { menuRecipe } from "./menu.recipe";

export type MenuItemProps = ArkMenu.ItemProps & { destructive?: boolean; icon?: JSX.Element };
export type MenuSubTriggerProps = ArkMenu.TriggerItemProps & { icon?: JSX.Element };
export type MenuGroupProps = ArkMenu.ItemGroupProps;
export type MenuGroupLabelProps = ArkMenu.ItemGroupLabelProps;
export type MenuSeparatorProps = ArkMenu.SeparatorProps;
const styles = menuRecipe();

export function MenuItem(props: MenuItemProps) {
  const [local, rest] = splitProps(props, ["class", "destructive", "icon", "children"]);
  return (
    <ArkMenu.Item
      {...rest}
      data-destructive={local.destructive && !rest.disabled ? "" : undefined}
      class={styles.item({ class: local.class })}
    >
      <span
        aria-hidden="true"
        data-nui-menu-icon={local.icon ? "" : undefined}
        class={styles.icon()}
      >
        {local.icon}
      </span>
      <span class={styles.label()}>{local.children}</span>
    </ArkMenu.Item>
  );
}

export function MenuSubTrigger(props: MenuSubTriggerProps) {
  const [local, rest] = splitProps(props, ["class", "icon", "children"]);
  return (
    <ArkMenu.TriggerItem {...rest} class={styles.item({ class: local.class })}>
      <span
        aria-hidden="true"
        data-nui-menu-icon={local.icon ? "" : undefined}
        class={styles.icon()}
      >
        {local.icon}
      </span>
      <span class={styles.label()}>{local.children}</span>
      <svg
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="1.75"
        stroke-linecap="round"
        stroke-linejoin="round"
        aria-hidden="true"
      >
        <path d="m9 6 6 6-6 6" />
      </svg>
    </ArkMenu.TriggerItem>
  );
}

export function MenuGroup(props: MenuGroupProps) {
  return <ArkMenu.ItemGroup {...props} />;
}

export function MenuGroupLabel(props: MenuGroupLabelProps) {
  const [local, rest] = splitProps(props, ["class"]);
  return <ArkMenu.ItemGroupLabel {...rest} class={styles.groupLabel({ class: local.class })} />;
}

export function MenuSeparator(props: MenuSeparatorProps) {
  const [local, rest] = splitProps(props, ["class"]);
  return <ArkMenu.Separator {...rest} class={styles.separator({ class: local.class })} />;
}
