import { FileUpload as ArkFileUpload } from "@ark-ui/solid/file-upload";
import { createSignal, splitProps, untrack } from "solid-js";
import { useTextControl } from "../text-control.context";
import { textControlRecipe } from "../text-control.recipe";
import { FileInputVisualContext } from "./file-input.context";
import { FileInputNative } from "./file-input.native";
import type { FileInputRootProps } from "./file-input.types";

export function FileInputRoot(props: FileInputRootProps) {
  const [local, rest] = splitProps(props, [
    "size",
    "tone",
    "rounded",
    "valid",
    "invalid",
    "loading",
    "disabled",
    "readOnly",
    "variant",
    "multiple",
    "maxFiles",
    "acceptedFiles",
    "defaultAcceptedFiles",
    "onFileChange",
    "children",
    "class",
  ]);
  const visual = useTextControl(local);
  const [fieldsetDisabled, setFieldsetDisabled] = createSignal(false);
  const control = { ...visual, disabled: () => visual.disabled() || fieldsetDisabled() };
  const initial = untrack(() => [...(local.defaultAcceptedFiles ?? [])]);
  const [files, setFiles] = createSignal(initial);
  return (
    <FileInputVisualContext.Provider value={control}>
      <ArkFileUpload.Root
        {...rest}
        disabled={control.disabled()}
        readOnly={control.readOnly()}
        invalid={control.invalid()}
        maxFiles={local.maxFiles ?? (local.multiple ? Number.POSITIVE_INFINITY : 1)}
        acceptedFiles={local.acceptedFiles ?? files()}
        onFileChange={(details) => {
          if (local.acceptedFiles === undefined) setFiles(details.acceptedFiles);
          local.onFileChange?.(details);
        }}
        data-variant={local.variant ?? "button"}
        data-valid={control.valid() ? "" : undefined}
        data-invalid={control.invalid() ? "" : undefined}
        data-loading={control.loading() ? "" : undefined}
        class={textControlRecipe({
          size: control.size(),
          tone: control.tone(),
          rounded: control.rounded(),
          class: ["nui-file-input", local.class].filter(Boolean).join(" "),
        })}
      >
        {local.children}
        <FileInputNative
          onFieldsetDisabledChange={setFieldsetDisabled}
          reset={() => {
            if (local.acceptedFiles === undefined) setFiles([...initial]);
          }}
        />
      </ArkFileUpload.Root>
    </FileInputVisualContext.Provider>
  );
}
