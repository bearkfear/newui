import { Dialog, type DialogRootProps } from "../dialog/dialog";
import { SheetContent, SheetPositioner, SheetSurface } from "./sheet.content";

export type SheetRootProps = DialogRootProps;
export const SheetRoot = Dialog.Root;

/**
 * Edge-attached modal panel sharing Dialog state, focus handling, and dismissal.
 * Choose `side` and `size` on Content; Body scrolls independently so Header/Footer can remain visible.
 * Do not wrap Content in another Portal or Positioner.
 */
export const Sheet = {
  Root: SheetRoot,
  Trigger: Dialog.Trigger,
  Content: SheetContent,
  Header: Dialog.Header,
  Title: Dialog.Title,
  Description: Dialog.Description,
  Body: Dialog.Body,
  Footer: Dialog.Footer,
  CloseTrigger: Dialog.CloseTrigger,
  Portal: Dialog.Portal,
  Backdrop: Dialog.Backdrop,
  Positioner: SheetPositioner,
  Surface: SheetSurface,
  Context: Dialog.Context,
};
