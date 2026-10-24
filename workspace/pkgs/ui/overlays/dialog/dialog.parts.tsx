import { Dialog as ArkDialog } from "@ark-ui/solid/dialog";
import type { JSX } from "solid-js";
import { Show, splitProps } from "solid-js";
import { useDialogOptions } from "./dialog.context";
import { dialogRecipe } from "./dialog.recipe";

type PartProps = JSX.HTMLAttributes<HTMLDivElement>;
const styles = dialogRecipe();

export function DialogBackdrop(props: ArkDialog.BackdropProps) {
  const options = useDialogOptions();
  const [local, rest] = splitProps(props, ["class"]);
  return (
    <Show when={options().modal}>
      <ArkDialog.Backdrop {...rest} class={styles.backdrop({ class: local.class })} />
    </Show>
  );
}
export function DialogPositioner(props: ArkDialog.PositionerProps) {
  const [local, rest] = splitProps(props, ["class"]);
  return <ArkDialog.Positioner {...rest} class={styles.positioner({ class: local.class })} />;
}
export function DialogHeader(props: PartProps) {
  const [local, rest] = splitProps(props, ["class"]);
  return <div {...rest} data-nui-dialog-header="" class={styles.header({ class: local.class })} />;
}
export function DialogTitle(props: ArkDialog.TitleProps) {
  const [local, rest] = splitProps(props, ["class"]);
  return <ArkDialog.Title {...rest} class={styles.title({ class: local.class })} />;
}
export function DialogDescription(props: ArkDialog.DescriptionProps) {
  const [local, rest] = splitProps(props, ["class"]);
  return <ArkDialog.Description {...rest} class={styles.description({ class: local.class })} />;
}
export function DialogBody(props: PartProps) {
  const [local, rest] = splitProps(props, ["class"]);
  return <div {...rest} data-nui-dialog-body="" class={styles.body({ class: local.class })} />;
}
export function DialogFooter(props: PartProps) {
  const [local, rest] = splitProps(props, ["class"]);
  return <div {...rest} data-nui-dialog-footer="" class={styles.footer({ class: local.class })} />;
}
