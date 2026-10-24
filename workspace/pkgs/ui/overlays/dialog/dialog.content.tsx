import { Dialog as ArkDialog } from "@ark-ui/solid/dialog";
import { splitProps } from "solid-js";
import type { VariantProps } from "tailwind-variants/lite";
import { DialogBackdrop, DialogPositioner } from "./dialog.parts";
import { DialogPortal } from "./dialog.portal";
import { dialogRecipe } from "./dialog.recipe";

export type DialogSurfaceProps = ArkDialog.ContentProps & VariantProps<typeof dialogRecipe>;
export type DialogContentProps = DialogSurfaceProps & { mount?: HTMLElement };

export function DialogSurface(props: DialogSurfaceProps) {
  const [local, rest] = splitProps(props, ["size", "variant", "class"]);
  return (
    <ArkDialog.Content
      {...rest}
      class={dialogRecipe({ size: local.size, variant: local.variant }).content({
        class: local.class,
      })}
    />
  );
}

export function DialogContent(props: DialogContentProps) {
  const [local, rest] = splitProps(props, ["mount"]);
  return (
    <DialogPortal {...(local.mount ? { mount: local.mount } : {})}>
      <DialogBackdrop />
      <DialogPositioner>
        <DialogSurface {...rest} />
      </DialogPositioner>
    </DialogPortal>
  );
}
