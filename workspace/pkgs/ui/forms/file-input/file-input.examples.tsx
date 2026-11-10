import { createSignal, For, Show } from "solid-js";
import { Field } from "../field/field";
import { FileInput } from "./file-input";
import { useFileInputState } from "./file-input.context";
import type { FileInputRootProps } from "./file-input.types";
import { FileInputSelectedPhotos, FileInputUploadPrompt } from "./file-input.upload.examples";

export function FileInputExample(props: FileInputRootProps) {
  return (
    <FileInput.Root {...props}>
      <FileInput.Control>
        <Show
          when={props.variant === "boxed"}
          fallback={
            <>
              <FileInput.Trigger aria-label="Choose attachment">
                <FileInput.Indicator /> <FileInputActionText />
              </FileInput.Trigger>
              <FileInput.ValueText />
            </>
          }
        >
          <FileInput.Dropzone aria-label="Choose attachment" class="nui-focus-ring">
            <FileInputUploadPrompt />
            <FileInput.ValueText placeholder="" />
          </FileInput.Dropzone>
        </Show>
      </FileInput.Control>
    </FileInput.Root>
  );
}

function FileInputActionText() {
  const state = useFileInputState();
  const labels = {
    idle: "Choose file",
    valid: "Choose file",
    invalid: "Try again",
    loading: "Processing…",
    readonly: "Read only",
    disabled: "Unavailable",
  };
  return <>{labels[state()]}</>;
}

export function FileInputPresentationsExample() {
  return (
    <div class="text-fields-demo-stack">
      <For each={["button", "boxed", "compact"] as const}>
        {(variant) => (
          <Field.Root>
            <Field.Label>{variant}</Field.Label>
            <FileInputExample variant={variant} />
            <Field.Description>
              Choose a local file. Upload starts only when your application sends it.
            </Field.Description>
          </Field.Root>
        )}
      </For>
    </div>
  );
}

export function FileInputMultipleExample() {
  const [message, setMessage] = createSignal("");
  return (
    <Field.Root>
      <Field.Label>Product photos</Field.Label>
      <FileInput.Root
        multiple
        maxFiles={3}
        maxFileSize={2_000_000}
        accept={{ "image/png": [".png"], "image/jpeg": [".jpg", ".jpeg"] }}
        onFileAccept={() => setMessage("")}
        onFileReject={(details) =>
          setMessage(
            details.files
              .map(({ file, errors }) => `${file.name}: ${errors.join(", ")}`)
              .join("; "),
          )
        }
      >
        <FileInput.Dropzone aria-label="Choose product photos" class="nui-focus-ring">
          <FileInputUploadPrompt photos />
        </FileInput.Dropzone>
        <FileInputSelectedPhotos />
        <FileInput.ClearTrigger class="nui-focus-ring">Clear all</FileInput.ClearTrigger>
      </FileInput.Root>
      <Show when={message()}>
        <Field.Description>
          <span role="alert">{message()}</span>
        </Field.Description>
      </Show>
    </Field.Root>
  );
}

export function FileInputControlledExample() {
  const [files, setFiles] = createSignal<File[]>([]);
  return (
    <div class="text-fields-demo-stack">
      <FileInputExample
        variant="compact"
        acceptedFiles={files()}
        onFileChange={(details) => setFiles(details.acceptedFiles)}
      />
      <p class="text-fields-demo-status">
        Application-owned selection:{" "}
        {files()
          .map((file) => file.name)
          .join(", ") || "empty"}
      </p>
      <button type="button" class="nui-focus-ring" onClick={() => setFiles([])}>
        Clear controlled selection
      </button>
    </div>
  );
}
