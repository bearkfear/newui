import { For } from "solid-js";
import { Button } from "../../actions/button/button";
import { Field } from "../field/field";
import { Input } from "../input/input";
import { createListCollection, Select } from "../select";
import { FileInputExample } from "./file-input.examples";

export function FileInputInlineExample() {
  const collection = createListCollection({ items: ["Design", "Support"] });
  return (
    <div class="text-fields-demo-stack">
      <For each={["sm", "md", "lg"] as const}>
        {(size) => (
          <div class="file-input-demo-inline">
            <Field.Root size={size}>
              <Field.Label>Subject ({size})</Field.Label>
              <Input placeholder="Subject" />
            </Field.Root>
            <Field.Root size={size}>
              <Field.Label>Team</Field.Label>
              <Select.Root collection={collection} defaultValue={["Design"]}>
                <Select.Control>
                  <Select.Trigger>
                    <Select.ValueText />
                    <Select.Indicator />
                  </Select.Trigger>
                </Select.Control>
                <Select.Content>
                  <For each={collection.items}>
                    {(item) => (
                      <Select.Item item={item}>
                        <Select.ItemText>{item}</Select.ItemText>
                        <Select.ItemIndicator />
                      </Select.Item>
                    )}
                  </For>
                </Select.Content>
              </Select.Root>
            </Field.Root>
            <Field.Root size={size}>
              <Field.Label>Attachment</Field.Label>
              <FileInputExample size={size} variant="compact" />
            </Field.Root>
            <Button size={size}>Send</Button>
          </div>
        )}
      </For>
    </div>
  );
}

export function FileInputLongNameExample() {
  const file = new File(
    ["Document"],
    "a-very-long-attachment-name-that-must-stay-within-a-narrow-inline-form-control-without-overflow.txt",
    { type: "text/plain" },
  );
  return (
    <div class="file-input-demo-narrow">
      <Field.Root>
        <Field.Label>Long file name</Field.Label>
        <FileInputExample variant="compact" defaultAcceptedFiles={[file]} />
        <Field.Description>
          The filename truncates; its full value remains in the title.
        </Field.Description>
      </Field.Root>
    </div>
  );
}
