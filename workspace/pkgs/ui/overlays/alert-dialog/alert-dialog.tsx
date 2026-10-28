import { Dialog as ArkDialog } from "@ark-ui/solid/dialog";
import { mergeProps, splitProps } from "solid-js";
import { Dialog, type DialogRootProps } from "../dialog/dialog";
import type { DialogContentProps } from "../dialog/dialog.content";
import { AlertDialogActionTrigger, AlertDialogCancelTrigger } from "./alert-dialog.triggers";

export type AlertDialogRootProps = Omit<
  DialogRootProps,
  "role" | "modal" | "trapFocus" | "preventScroll" | "closeOnInteractOutside"
>;
export type AlertDialogContentProps = Omit<DialogContentProps, "variant">;

export function AlertDialogRoot(props: AlertDialogRootProps) {
  return (
    <Dialog.Root
      {...props}
      role="alertdialog"
      modal
      trapFocus
      preventScroll
      closeOnInteractOutside={false}
    />
  );
}

export function AlertDialogContent(props: AlertDialogContentProps) {
  const [local, rest] = splitProps(mergeProps({ size: "sm" as const }, props), ["size"]);
  return <Dialog.Content {...rest} size={local.size} variant="card" />;
}

export const AlertDialog = {
  Root: AlertDialogRoot,
  Trigger: ArkDialog.Trigger,
  Content: AlertDialogContent,
  Header: Dialog.Header,
  Title: Dialog.Title,
  Description: Dialog.Description,
  Body: Dialog.Body,
  Footer: Dialog.Footer,
  CancelTrigger: AlertDialogCancelTrigger,
  ActionTrigger: AlertDialogActionTrigger,
  Context: ArkDialog.Context,
};
