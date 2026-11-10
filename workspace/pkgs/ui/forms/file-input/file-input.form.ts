import type { UseFileUploadContext } from "@ark-ui/solid/file-upload";
import { createEffect, onCleanup, onMount } from "solid-js";
import { bindTextControlReset } from "../text-control.reset";
import { bindFileInputFieldset } from "./file-input.fieldset";

export function createFileInputFormBinding(
  api: UseFileUploadContext,
  reset: () => void,
  onFieldsetDisabledChange: (disabled: boolean) => void,
) {
  let input: HTMLInputElement | undefined;
  let disposed = false;
  const sync = () => {
    if (!input || disposed) return;
    const transfer = new DataTransfer();
    for (const file of api().acceptedFiles) transfer.items.add(file);
    input.files = transfer.files;
  };
  createEffect(() => {
    api().acceptedFiles;
    sync();
  });
  onMount(() => {
    if (!input) return;
    bindFileInputFieldset(input, onFieldsetDisabledChange);
    sync();
    bindTextControlReset(
      input,
      () => {
        reset();
        api().clearRejectedFiles();
        sync();
      },
      () => disposed,
    );
    onCleanup(() => {
      disposed = true;
    });
  });
  return {
    sync,
    register: (element: HTMLInputElement) => {
      input = element;
    },
  };
}

export function focusInvalidFileInput(event: Event & { currentTarget: HTMLInputElement }) {
  event.preventDefault();
  const input = event.currentTarget;
  const controls = Array.from(input.form?.elements ?? [input]);
  const firstInvalid = controls.find((control) => control.matches(":invalid:not(fieldset)"));
  if (firstInvalid !== input) return;
  // Native validation may still focus another invalid control after this event.
  queueMicrotask(() => {
    const root = input.parentElement;
    const trigger = root?.querySelector<HTMLElement>(
      '[data-part="trigger"]:not(:disabled):not([aria-disabled="true"])',
    );
    const dropzone = root?.querySelector<HTMLElement>(
      '[data-part="dropzone"][tabindex]:not([tabindex="-1"]):not([aria-disabled="true"])',
    );
    (trigger ?? dropzone)?.focus();
  });
}
