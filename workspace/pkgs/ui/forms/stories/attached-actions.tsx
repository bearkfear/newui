import { For } from "solid-js";
import { Button } from "../../actions/button/button";
import { Field } from "../field/field";
import { Input } from "../input/input";
import { InputGroup } from "../input-group/input-group";
import { textSizes } from "./text-field-matrices";

export function AttachedActions() {
  return (
    <div class="text-fields-demo-stack">
      <For each={textSizes}>
        {(size) => (
          <div class="text-fields-demo-grid">
            <Field.Root size={size}>
              <Field.Label>{size.toUpperCase()} · Trailing action</Field.Label>
              <InputGroup.Root attached>
                <Input placeholder="Search projects" />
                <InputGroup.Action>
                  <Button>Search</Button>
                </InputGroup.Action>
              </InputGroup.Root>
            </Field.Root>
            <Field.Root size={size} rounded>
              <Field.Label>{size.toUpperCase()} · Rounded leading action</Field.Label>
              <InputGroup.Root attached>
                <InputGroup.Action placement="start">
                  <Button>Browse</Button>
                </InputGroup.Action>
                <Input placeholder="Project name" />
              </InputGroup.Root>
            </Field.Root>
          </div>
        )}
      </For>
    </div>
  );
}
