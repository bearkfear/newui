import { Dialog as ArkDialog } from "@ark-ui/solid/dialog";
import { splitProps } from "solid-js";
import type { VariantProps } from "tailwind-variants/lite";
import { Dialog } from "../dialog/dialog";
import { sheetRecipe } from "./sheet.recipe";

export type SheetSurfaceProps = ArkDialog.ContentProps & VariantProps<typeof sheetRecipe>;
export type SheetContentProps = SheetSurfaceProps & { mount?: HTMLElement };
export type SheetPositionerProps = ArkDialog.PositionerProps &
  Pick<VariantProps<typeof sheetRecipe>, "side">;

export function SheetSurface(props: SheetSurfaceProps) {
  const [local, rest] = splitProps(props, ["side", "size", "class"]);
  return (
    <ArkDialog.Content
      {...rest}
      data-side={local.side ?? "right"}
      class={sheetRecipe({ side: local.side, size: local.size }).content({ class: local.class })}
    />
  );
}

export function SheetPositioner(props: SheetPositionerProps) {
  const [local, rest] = splitProps(props, ["side", "class"]);
  return (
    <ArkDialog.Positioner
      {...rest}
      class={sheetRecipe({ side: local.side }).positioner({ class: local.class })}
    />
  );
}

export function SheetContent(props: SheetContentProps) {
  const [local, rest] = splitProps(props, ["mount"]);
  return (
    <Dialog.Portal {...(local.mount ? { mount: local.mount } : {})}>
      <Dialog.Backdrop />
      <SheetPositioner side={props.side}>
        <SheetSurface {...rest} />
      </SheetPositioner>
    </Dialog.Portal>
  );
}
