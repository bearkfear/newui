import { Dialog as ArkDialog } from "@ark-ui/solid/dialog";
import { mergeProps } from "solid-js";
import { DialogCloseTrigger } from "./dialog.close-trigger";
import { DialogContent, DialogSurface } from "./dialog.content";
import { DialogOptions } from "./dialog.context";
import {
  DialogBackdrop,
  DialogBody,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogPositioner,
  DialogTitle,
} from "./dialog.parts";
import { DialogPortal } from "./dialog.portal";

export type DialogRootProps = ArkDialog.RootProps;

export function DialogRoot(props: DialogRootProps) {
  return (
    <DialogOptions.Provider value={() => ({ modal: props.modal ?? true })}>
      <ArkDialog.Root {...mergeProps({ lazyMount: true, unmountOnExit: true }, props)} />
    </DialogOptions.Provider>
  );
}

export const Dialog = {
  Root: DialogRoot,
  Trigger: ArkDialog.Trigger,
  Content: DialogContent,
  Header: DialogHeader,
  Title: DialogTitle,
  Description: DialogDescription,
  Body: DialogBody,
  Footer: DialogFooter,
  CloseTrigger: DialogCloseTrigger,
  Portal: DialogPortal,
  Backdrop: DialogBackdrop,
  Positioner: DialogPositioner,
  Surface: DialogSurface,
  Context: ArkDialog.Context,
};
