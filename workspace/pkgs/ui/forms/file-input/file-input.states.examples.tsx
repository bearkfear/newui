import { CircleAlert, CircleCheck } from "lucide-solid";
import { For } from "solid-js";
import { Field } from "../field/field";
import type { TextControlOptions } from "../text-control.context";
import { FileInputExample } from "./file-input.examples";
import type { FileInputRootProps } from "./file-input.types";

type StateExample = TextControlOptions & {
  label: string;
  description: string;
  required?: boolean;
  hasFile?: boolean;
};
const states: StateExample[] = [
  { label: "Required", required: true, description: "Choose an attachment to continue." },
  { label: "Disabled", disabled: true, description: "Attachments are currently unavailable." },
  {
    label: "Read only",
    readOnly: true,
    hasFile: true,
    description: "The saved attachment cannot be changed.",
  },
  {
    label: "Error",
    invalid: true,
    description: "File exceeds the 2 MB limit. Choose a smaller file.",
  },
  { label: "Accepted", valid: true, hasFile: true, description: "Your attachment is ready." },
  { label: "Loading", loading: true, hasFile: true, description: "Preparing your attachment…" },
];

export function FileInputStatesExample() {
  const file = new File(["Saved attachment"], "project-brief.pdf", { type: "application/pdf" });
  return (
    <div class="file-input-demo-state-sections">
      <For each={["button", "compact", "boxed"] as const}>
        {(variant) => (
          <section class="file-input-demo-state-section" aria-label={`${variant} states`}>
            <h3>{variant}</h3>
            <div class="file-input-demo-state-grid">
              <For each={states}>
                {(state) => <FileInputStateCase state={state} variant={variant} file={file} />}
              </For>
            </div>
          </section>
        )}
      </For>
    </div>
  );
}

function FileInputStateCase(props: {
  state: StateExample;
  variant: NonNullable<FileInputRootProps["variant"]>;
  file: File;
}) {
  return (
    <Field.Root
      disabled={props.state.disabled ?? false}
      readOnly={props.state.readOnly ?? false}
      invalid={props.state.invalid ?? false}
      valid={props.state.valid ?? false}
      loading={props.state.loading ?? false}
      required={props.state.required ?? false}
    >
      <Field.Label>
        {props.state.label} <Field.RequiredIndicator />
      </Field.Label>
      <FileInputExample
        variant={props.variant}
        defaultAcceptedFiles={props.state.hasFile ? [props.file] : []}
      />
      <Field.Description>{props.state.description}</Field.Description>
      <Field.ErrorText>
        <CircleAlert size={14} aria-hidden="true" /> {props.state.description}
      </Field.ErrorText>
      <Field.SuccessText>
        <CircleCheck size={14} aria-hidden="true" /> {props.state.description}
      </Field.SuccessText>
    </Field.Root>
  );
}
