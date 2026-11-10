import { createSignal } from "solid-js";
import { Button } from "../../actions/button/button";
import { Switch } from "../switch/switch";
import { FileInput } from "./file-input";

export function FileInputDisabledFieldsetExample() {
  const [disabled, setDisabled] = createSignal(true);
  const [changes, setChanges] = createSignal(0);
  return (
    <div class="text-fields-demo-stack">
      <Switch.Root checked={disabled()} onCheckedChange={(details) => setDisabled(details.checked)}>
        <Switch.Control />
        <Switch.Label>Disable attachment fieldset</Switch.Label>
      </Switch.Root>
      <fieldset disabled={disabled()}>
        <legend>Attachments</legend>
        <FileInput.Root multiple onFileChange={() => setChanges((value) => value + 1)}>
          <FileInput.Dropzone disableClick class="nui-focus-ring">
            <p>Drop files here or browse.</p>
            <FileInput.Control>
              <FileInput.Trigger>Choose attachments</FileInput.Trigger>
              <FileInput.ValueText />
            </FileInput.Control>
          </FileInput.Dropzone>
          <FileInput.ClearTrigger class="nui-focus-ring">Clear files</FileInput.ClearTrigger>
        </FileInput.Root>
      </fieldset>
      <p class="text-fields-demo-status" role="status">
        Selection changes: {changes()}. While disabled, dropping files must preserve the selection
        and this count. Enable the fieldset to select or clear files.
      </p>
    </div>
  );
}

export function FileInputRequiredDropzoneExample() {
  const [result, setResult] = createSignal("Submit without a file to focus the dropzone.");
  return (
    <form
      class="text-fields-demo-form"
      onSubmit={(event) => {
        event.preventDefault();
        const file = new FormData(event.currentTarget).get("attachment");
        setResult(file instanceof File ? `Ready to submit: ${file.name}` : "No file selected.");
      }}
    >
      <FileInput.Root required name="attachment">
        <FileInput.Dropzone aria-label="Required attachment" class="nui-focus-ring">
          <p>Required attachment: drop a file or press Enter or Space to browse.</p>
          <FileInput.ValueText />
        </FileInput.Dropzone>
      </FileInput.Root>
      <div class="text-fields-demo-row">
        <Button type="submit">Submit</Button>
        <Button type="reset" variant="outline">
          Reset
        </Button>
      </div>
      <p class="text-fields-demo-status" role="status">
        {result()}
      </p>
    </form>
  );
}
