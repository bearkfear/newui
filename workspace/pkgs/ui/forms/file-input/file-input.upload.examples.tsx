import { FileImage, X } from "lucide-solid";
import { For, Show } from "solid-js";
import { FileInput } from "./file-input";
import { useFileInputState } from "./file-input.context";

const stateCopy = {
  idle: { title: "", hint: "Select a file from your device" },
  disabled: {
    title: "File selection unavailable",
    hint: "Attachments are disabled for this field",
  },
  readonly: {
    title: "Read-only attachment",
    hint: "This attachment cannot be changed",
  },
  loading: { title: "Processing your file…", hint: "Your attachment is being prepared" },
  invalid: { title: "Choose another file", hint: "Check the file requirements and try again" },
  valid: { title: "Attachment ready", hint: "Choose another file or drop one here to replace it" },
};

export function FileInputUploadPrompt(props: { photos?: boolean }) {
  const state = useFileInputState();
  return (
    <>
      <span class="file-input-demo-upload-icon">
        <FileInput.Indicator />
      </span>
      <span class="file-input-demo-upload-copy">
        <span class="file-input-demo-upload-title">
          <Show when={state() === "idle"} fallback={stateCopy[state()].title}>
            <span class="file-input-demo-upload-action">
              {props.photos ? "Choose photos" : "Choose a file"}
            </span>{" "}
            or drag and drop
          </Show>
        </span>
        <span class="file-input-demo-upload-hint">
          {props.photos && state() === "idle"
            ? "PNG or JPG · Up to 3 photos · 2 MB each"
            : stateCopy[state()].hint}
        </span>
      </span>
    </>
  );
}

export function FileInputSelectedPhotos() {
  return (
    <FileInput.Context>
      {(api) => (
        <FileInput.ItemGroup>
          <For each={api().acceptedFiles}>
            {(file) => (
              <FileInput.Item file={file}>
                <FileImage size={20} strokeWidth={1.5} aria-hidden="true" />
                <div class="file-input-demo-file-details">
                  <FileInput.ItemName />
                  <FileInput.ItemSizeText />
                </div>
                <FileInput.ItemDeleteTrigger class="nui-focus-ring">
                  <X size={16} aria-hidden="true" />
                </FileInput.ItemDeleteTrigger>
              </FileInput.Item>
            )}
          </For>
        </FileInput.ItemGroup>
      )}
    </FileInput.Context>
  );
}
