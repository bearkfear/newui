import { AlertCircle, Check, Mail } from "lucide-solid";
import { For, type JSX } from "solid-js";
import { Button } from "../../actions/button/button";
import { Field } from "../field/field";
import { Input } from "../input/input";
import { InputGroup } from "../input-group/input-group";
import type { TextControlSize, TextControlTone } from "../text-control.context";
import { Textarea } from "../textarea/textarea";

export const textSizes: TextControlSize[] = ["sm", "md", "lg"];
export const textTones: TextControlTone[] = [
  "neutral",
  "primary",
  "info",
  "success",
  "warning",
  "danger",
];

export function TextSizes() {
  return (
    <div class="text-fields-demo-stack">
      <For each={textSizes}>
        {(size) => (
          <Field.Root size={size}>
            <Field.Label>{size.toUpperCase()} · Matching field and action heights</Field.Label>
            <InputGroup.Root attached>
              <InputGroup.Icon>
                <Mail />
              </InputGroup.Icon>
              <Input type="email" placeholder="you@example.com" />
              <InputGroup.Action>
                <Button>Invite</Button>
              </InputGroup.Action>
            </InputGroup.Root>
          </Field.Root>
        )}
      </For>
    </div>
  );
}

export function TextTones(props: { renderControl?: () => JSX.Element } = {}) {
  return (
    <div class="text-fields-demo-grid">
      <For each={textTones}>
        {(tone) => (
          <Field.Root tone={tone}>
            <Field.Label>{tone}</Field.Label>
            {props.renderControl?.() ?? <Input defaultValue="A semantic tone" />}
            <Field.Description>
              Appearance does not imply that validation has run.
            </Field.Description>
          </Field.Root>
        )}
      </For>
    </div>
  );
}

export function ValidationStates() {
  return (
    <div class="text-fields-demo-stack">
      <Field.Root>
        <Field.Label>Neutral · not checked</Field.Label>
        <Input placeholder="you@example.com" />
      </Field.Root>
      <Field.Root valid>
        <Field.Label>Valid · checked successfully</Field.Label>
        <InputGroup.Root>
          <Input defaultValue="hello@forma.studio" />
          <InputGroup.Icon placement="end">
            <Check />
          </InputGroup.Icon>
        </InputGroup.Root>
        <Field.Description>Used for account notifications.</Field.Description>
        <Field.SuccessText>Email confirmed.</Field.SuccessText>
      </Field.Root>
      <Field.Root invalid>
        <Field.Label>Invalid · needs attention</Field.Label>
        <InputGroup.Root>
          <Input defaultValue="hello@" />
          <InputGroup.Icon placement="end">
            <AlertCircle />
          </InputGroup.Icon>
        </InputGroup.Root>
        <Field.Description>Use your work email.</Field.Description>
        <Field.ErrorText>Enter a complete email address.</Field.ErrorText>
      </Field.Root>
      <Field.Root invalid valid>
        <Field.Label>Conflicting flags · error takes priority</Field.Label>
        <Input defaultValue="hello@" />
        <Field.ErrorText>Review this address.</Field.ErrorText>
        <Field.SuccessText>This message stays hidden.</Field.SuccessText>
      </Field.Root>
    </div>
  );
}

export function ReadonlyAndDisabled() {
  return (
    <div class="text-fields-demo-stack">
      <Field.Root readOnly>
        <Field.Label>Readonly</Field.Label>
        <Input defaultValue="FORMA-2026" />
        <Field.Description>Focusable, selectable, and included in form data.</Field.Description>
      </Field.Root>
      <Field.Root disabled invalid>
        <Field.Label>Disabled</Field.Label>
        <InputGroup.Root attached>
          <InputGroup.Icon>
            <Mail />
          </InputGroup.Icon>
          <Input defaultValue="hello@forma.studio" />
          <InputGroup.Action>
            <Button>Invite</Button>
          </InputGroup.Action>
        </InputGroup.Root>
        <Field.Description>
          The field and its newui action inherit disabled behavior.
        </Field.Description>
      </Field.Root>
    </div>
  );
}

export function TextareaExamples() {
  return (
    <div class="text-fields-demo-stack">
      <Field.Root>
        <Field.Label>Project overview</Field.Label>
        <Textarea name="overview" rows={3} placeholder="What are we working toward?" />
        <Field.Description>Resize vertically using the browser handle.</Field.Description>
      </Field.Root>
      <Field.Root>
        <Field.Label>Growing notes</Field.Label>
        <Textarea name="notes" rows={2} autoresize placeholder="Keep writing to grow the field…" />
        <Field.Description>
          Ark owns automatic resizing. This option is configured on mount.
        </Field.Description>
      </Field.Root>
      <Field.Root invalid>
        <Field.Label>Fixed size</Field.Label>
        <Textarea name="summary" rows={3} resize="none" defaultValue="Too short." />
        <Field.ErrorText>Add a little more detail before sharing.</Field.ErrorText>
      </Field.Root>
    </div>
  );
}
