import { createSignal } from "solid-js";
import { Button } from "../../actions";
import { Card } from "../../content";
import { Field, Input, InputGroup } from "../../forms";
import { Button as RootButton } from "../../index";

export function PackageProfile() {
  const [name, setName] = createSignal("Alex Morgan");
  const [savedName, setSavedName] = createSignal<string>();
  return (
    <main class="nui-package-example">
      <form
        onSubmit={(event) => {
          event.preventDefault();
          setSavedName(name());
        }}
      >
        <Card.Root>
          <Card.Header>
            <Card.Title>Profile</Card.Title>
            <Card.Description>Update your display name.</Card.Description>
          </Card.Header>
          <Card.Content>
            <Field.Root required>
              <Field.Label>
                Display name
                <Field.RequiredIndicator />
              </Field.Label>
              <Input
                name="displayName"
                autocomplete="name"
                value={name()}
                onInput={(event) => setName(event.currentTarget.value)}
              />
              <Field.Description>Shown to other members.</Field.Description>
            </Field.Root>
          </Card.Content>
          <Card.Footer>
            <Button type="submit">Save profile</Button>
            <span role="status">{savedName() ? `Saved profile for ${savedName()}.` : ""}</span>
          </Card.Footer>
        </Card.Root>
      </form>
    </main>
  );
}

export function SharedButtonDefaults() {
  const [disabled, setDisabled] = createSignal(false);
  return (
    <main class="nui-package-example">
      <Card.Root>
        <Card.Header>
          <Card.Title>Project actions</Card.Title>
          <Card.Description>Choose whether the project controls are available.</Card.Description>
        </Card.Header>
        <Card.Content>
          <div class="nui-package-example-controls">
            <label>
              <input
                type="checkbox"
                checked={disabled()}
                onChange={(event) => setDisabled(event.currentTarget.checked)}
              />
              Disable controls
            </label>
            <InputGroup.Root size="sm" disabled={disabled()}>
              <Input aria-label="Project name" value="newui" />
              <InputGroup.Action>
                <Button variant="ghost">Area import</Button>
                <RootButton variant="ghost">Main import</RootButton>
              </InputGroup.Action>
            </InputGroup.Root>
          </div>
        </Card.Content>
      </Card.Root>
    </main>
  );
}
