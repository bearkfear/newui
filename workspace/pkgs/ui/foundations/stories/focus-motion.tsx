import { Mail } from "lucide-solid";
import { For } from "solid-js";
import { Button } from "../../actions/button/button";
import { Prose } from "../../content/prose/prose";
import { Field } from "../../forms/field/field";
import { Input } from "../../forms/input/input";
import { InputGroup } from "../../forms/input-group/input-group";
import { Textarea } from "../../forms/textarea/textarea";
import { Tabs } from "../../navigation/tabs/tabs";

export function FocusMotion() {
  return (
    <main class="nui-catalog nui-catalog-stack">
      <h1>Shared focus motion</h1>
      <p>
        Use Tab and Shift+Tab to compare controls. Focus converges inward in 120ms; leaving focus
        fades the contour in 80ms without moving it. Switch themes and reduced motion in the
        toolbar.
      </p>
      <section class="nui-catalog-section">
        <h2>Buttons</h2>
        <div style={{ display: "flex", "flex-wrap": "wrap", gap: "16px" }}>
          <For each={["solid", "outline", "soft", "ghost", "link"] as const}>
            {(variant) => <Button variant={variant}>{variant}</Button>}
          </For>
          <Button tone="danger">Danger</Button>
          <Button disabled>Disabled</Button>
        </div>
      </section>
      <section class="nui-catalog-section nui-catalog-stack">
        <h2>Text controls and decorative icons</h2>
        <Field.Root valid>
          <Field.Label>Email</Field.Label>
          <InputGroup.Root>
            <Input type="email" defaultValue="hello@forma.studio" />
            <InputGroup.Icon placement="end">
              <Mail />
            </InputGroup.Icon>
          </InputGroup.Root>
          <Field.SuccessText>Email confirmed.</Field.SuccessText>
        </Field.Root>
        <Textarea aria-label="Notes" placeholder="Write a note" />
      </section>
      <section class="nui-catalog-section">
        <h2>Inset focus and text links</h2>
        <Tabs.Root defaultValue="overview">
          <Tabs.List>
            <Tabs.Trigger value="overview">Overview</Tabs.Trigger>
            <Tabs.Trigger value="details">Details</Tabs.Trigger>
          </Tabs.List>
          <Tabs.Content value="overview">The focus contour stays inside the tab.</Tabs.Content>
          <Tabs.Content value="details">Arrow keys move between tabs.</Tabs.Content>
        </Tabs.Root>
        <Prose>
          <p>
            <a href="#focus-review">Review link focus</a>
          </p>
        </Prose>
        <p id="focus-review">Compare the contour around text with the button and input above.</p>
      </section>
    </main>
  );
}
