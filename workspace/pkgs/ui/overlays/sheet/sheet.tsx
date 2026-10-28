import { Dialog, type DialogRootProps } from "../dialog/dialog";
import { SheetContent, SheetPositioner, SheetSurface } from "./sheet.content";

export type SheetRootProps = DialogRootProps;
export const SheetRoot = Dialog.Root;

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
