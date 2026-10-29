import { type JSX, splitProps } from "solid-js";
import { Resizable } from "../../layout/resizable/resizable";
import { sidebarRecipe } from "./sidebar.recipe";

export type SidebarPartProps = JSX.HTMLAttributes<HTMLDivElement>;
export type SidebarLabelProps = JSX.HTMLAttributes<HTMLSpanElement>;
export type SidebarMainProps = JSX.HTMLAttributes<HTMLElement>;
const styles = sidebarRecipe();

export function SidebarHeader(props: SidebarPartProps) {
  const [local, rest] = splitProps(props, ["class"]);
  return <div {...rest} class={styles.header({ class: local.class })} />;
}
export function SidebarBody(props: SidebarPartProps) {
  const [local, rest] = splitProps(props, ["class"]);
  return <div {...rest} class={styles.body({ class: local.class })} />;
}
export function SidebarFooter(props: SidebarPartProps) {
  const [local, rest] = splitProps(props, ["class"]);
  return <div {...rest} class={styles.footer({ class: local.class })} />;
}
export function SidebarLabel(props: SidebarLabelProps) {
  const [local, rest] = splitProps(props, ["class"]);
  return <span {...rest} class={styles.label({ class: local.class })} />;
}
export function SidebarExpanded(props: SidebarPartProps) {
  const [local, rest] = splitProps(props, ["class"]);
  return <div {...rest} class={styles.expanded({ class: local.class })} />;
}
export function SidebarMain(props: SidebarMainProps) {
  const [local, rest] = splitProps(props, ["class", "children"]);
  return (
    <Resizable.Panel id="main">
      <main {...rest} class={styles.main({ class: local.class })}>
        {local.children}
      </main>
    </Resizable.Panel>
  );
}
