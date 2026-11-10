import { useFileUploadContext } from "@ark-ui/solid/file-upload";
import { useFileInputVisual } from "./file-input.context";
import { createFileInputFormBinding, focusInvalidFileInput } from "./file-input.form";

export function FileInputNative(props: {
  reset: () => void;
  onFieldsetDisabledChange: (disabled: boolean) => void;
}) {
  const api = useFileUploadContext();
  const visual = useFileInputVisual();
  const form = createFileInputFormBinding(api, props.reset, props.onFieldsetDisabledChange);
  return (
    <input
      {...api().getHiddenInputProps()}
      ref={form.register}
      disabled={visual.disabled()}
      aria-describedby={visual.describedBy(undefined)}
      aria-invalid={visual.invalid() || undefined}
      onClick={(event) => {
        event.stopPropagation();
        // Keep the current FileList when the picker is canceled.
        if (visual.readOnly()) event.preventDefault();
      }}
      onInput={(event) => {
        if (visual.readOnly() || visual.disabled()) {
          form.sync();
          return;
        }
        const handler = api().getHiddenInputProps().onInput;
        if (typeof handler === "function") handler(event);
        // Rejections may leave Ark's accepted value unchanged, so always restore it.
        queueMicrotask(form.sync);
      }}
      onCancel={form.sync}
      onInvalid={focusInvalidFileInput}
    />
  );
}
