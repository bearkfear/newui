import { createSignal } from "solid-js";
import { Field } from "../field/field";
import { RichTextEditor } from "./rich-text-editor";

export function RichTextImageExample(props: { upload?: boolean; sample?: boolean }) {
  const [status, setStatus] = createSignal(
    "Paste an image and select it to edit its description, resize it, or remove it.",
  );
  return (
    <Field.Root>
      <Field.Label>{props.upload ? "Image upload" : "Embedded image"}</Field.Label>
      <RichTextEditor.Root
        defaultValue={
          props.sample
            ? {
                type: "doc",
                content: [
                  {
                    type: "paragraph",
                    content: [
                      { type: "text", text: "Select the image below to explore its controls." },
                    ],
                  },
                  {
                    type: "image",
                    attrs: {
                      src: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='300' viewBox='0 0 600 300'%3E%3Crect width='600' height='300' fill='%23d9e9e3'/%3E%3Ccircle cx='390' cy='90' r='42' fill='%23eebc72'/%3E%3Cpath d='M0 300 160 100 300 270 410 160 600 300' fill='%23538272'/%3E%3C/svg%3E",
                      alt: "Illustration of green mountains",
                      width: 480,
                    },
                  },
                ],
              }
            : { type: "doc", content: [{ type: "paragraph" }] }
        }
        imagePaste={
          props.upload
            ? async (file) => {
                setStatus(`Simulating upload of ${file.name || "clipboard image"}…`);
                await new Promise((resolve) => setTimeout(resolve, 500));
                setStatus("Upload simulated; a sample URL was inserted.");
                return "https://placehold.co/600x300/png";
              }
            : "embedded"
        }
        onImagePasteError={() => setStatus("The image could not be added.")}
      >
        <RichTextEditor.Toolbar />
        <RichTextEditor.Content />
      </RichTextEditor.Root>
      <Field.Description>
        {props.upload
          ? "This example simulates an upload and returns a sample URL."
          : "The image is stored as a data URL in the document."}
      </Field.Description>
      <p role="status">{status()}</p>
    </Field.Root>
  );
}
