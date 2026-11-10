import { useFieldContext } from "@ark-ui/solid/field";
import { FileUpload as ArkFileUpload, useFileUploadContext } from "@ark-ui/solid/file-upload";
import { type JSX, splitProps } from "solid-js";
import { useFileInputVisual } from "./file-input.context";

export type FileInputControlProps = JSX.HTMLAttributes<HTMLDivElement>;
export type FileInputTriggerProps = ArkFileUpload.TriggerProps;
export type FileInputDropzoneProps = ArkFileUpload.DropzoneProps;
export type FileInputValueTextProps = JSX.HTMLAttributes<HTMLSpanElement> & {
  placeholder?: string;
  formatValue?: (files: File[]) => string;
};

export function FileInputControl(props: FileInputControlProps) {
  return <div {...props} data-part="control" />;
}

export function FileInputTrigger(props: FileInputTriggerProps) {
  const [local, rest] = splitProps(props, [
    "class",
    "aria-describedby",
    "aria-labelledby",
    "aria-busy",
  ]);
  const visual = useFileInputVisual();
  const field = useFieldContext();
  return (
    <ArkFileUpload.Trigger
      {...rest}
      aria-describedby={visual.describedBy(local["aria-describedby"])}
      aria-labelledby={local["aria-labelledby"] ?? field?.().ids.label}
      aria-invalid={visual.invalid() || undefined}
      aria-busy={visual.loading() || local["aria-busy"]}
      class={["nui-focus-ring", local.class].filter(Boolean).join(" ")}
    />
  );
}

export function FileInputDropzone(props: FileInputDropzoneProps) {
  const [local, rest] = splitProps(props, ["aria-describedby", "aria-labelledby", "aria-busy"]);
  const visual = useFileInputVisual();
  const field = useFieldContext();
  return (
    <ArkFileUpload.Dropzone
      {...rest}
      aria-describedby={visual.describedBy(local["aria-describedby"])}
      aria-labelledby={local["aria-labelledby"] ?? field?.().ids.label}
      aria-invalid={visual.invalid() || undefined}
      aria-busy={visual.loading() || local["aria-busy"]}
    />
  );
}

export function FileInputValueText(props: FileInputValueTextProps) {
  const [local, rest] = splitProps(props, ["placeholder", "formatValue", "children"]);
  const api = useFileUploadContext();
  const text = () => {
    const files = api().acceptedFiles;
    if (!files.length) return local.placeholder ?? "No file selected";
    return (
      local.formatValue?.(files) ??
      (files.length === 1 ? files[0]?.name : `${files.length} files selected`)
    );
  };
  return (
    <span {...rest} data-part="value-text" role="status" title={text()}>
      {text()}
    </span>
  );
}
