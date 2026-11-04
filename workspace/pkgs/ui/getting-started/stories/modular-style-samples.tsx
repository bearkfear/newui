import { createSignal, Show } from "solid-js";
import { Button, ButtonGroup, DropdownMenu } from "../../actions";
import { Field, Input, InputGroup } from "../../forms";

export type StylePreviewMode = "actions" | "forms" | "combined";

export function ModularStyleSamples(props: { mode: StylePreviewMode }) {
  return (
    <main style={{ display: "grid", gap: "2rem", padding: "1.25rem" }}>
      <Show when={props.mode !== "forms"}>
        <ActionStyleSample />
      </Show>
      <Show when={props.mode !== "actions"}>
        <FormStyleSample />
      </Show>
    </main>
  );
}

function ActionStyleSample() {
  const [message, setMessage] = createSignal("Choose an action.");
  return (
    <section style={{ display: "grid", gap: "1rem" }}>
      <h2 style={{ "font-size": "1.25rem", "font-weight": "600" }}>Project actions</h2>
      <ButtonGroup attached>
        <Button onClick={() => setMessage("Project saved.")}>Save</Button>
        <Button variant="outline" onClick={() => setMessage("Preview opened.")}>
          Preview
        </Button>
      </ButtonGroup>
      <DropdownMenu.Root
        onSelect={(details) =>
          setMessage(details.value === "archive" ? "Project archived." : "Project duplicated.")
        }
      >
        <DropdownMenu.Trigger>More actions</DropdownMenu.Trigger>
        <DropdownMenu.Content>
          <DropdownMenu.Item value="duplicate">Duplicate</DropdownMenu.Item>
          <DropdownMenu.Item value="archive">Archive</DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Root>
      <p role="status">{message()}</p>
    </section>
  );
}

function FormStyleSample() {
  const [checking, setChecking] = createSignal(false);
  return (
    <section style={{ display: "grid", gap: "1rem" }}>
      <h2 style={{ "font-size": "1.25rem", "font-weight": "600" }}>Project settings</h2>
      <Field.Root required loading={checking()}>
        <Field.Label>
          Project name
          <Field.RequiredIndicator />
        </Field.Label>
        <InputGroup.Root size="sm">
          <Input name="project" value="newui" />
          <Show when={checking()}>
            <InputGroup.Loading />
          </Show>
          <InputGroup.Action>
            <Button variant="ghost" onClick={() => setChecking(!checking())}>
              {checking() ? "Stop" : "Check"}
            </Button>
          </InputGroup.Action>
        </InputGroup.Root>
        <Field.Description>Check the name before saving.</Field.Description>
      </Field.Root>
      <p role="status">{checking() ? "Checking project name…" : "Ready to edit."}</p>
    </section>
  );
}
