import { createSignal, For } from "solid-js";
import { Text } from "../../../content/text/text";
import { ButtonGroup } from "../../button-group/button-group";
import { Button } from "../button";

export function ButtonPressExample() {
  const [count, setCount] = createSignal(0);
  return (
    <div style={{ display: "grid", gap: "1rem", "justify-items": "start" }}>
      <Text size="6">
        Press and hold a button, or focus it and hold Space. Solid buttons gain a distinct pressed
        color without moving.
      </Text>
      <div style={{ display: "flex", "flex-wrap": "wrap", gap: "0.75rem" }}>
        <For each={["solid", "outline", "soft", "ghost", "link"] as const}>
          {(variant) => (
            <Button variant={variant} onClick={() => setCount((value) => value + 1)}>
              {variant}
            </Button>
          )}
        </For>
      </div>
      <div style={{ display: "flex", "flex-wrap": "wrap", gap: "0.75rem" }}>
        <For each={["primary", "neutral", "info", "success", "warning", "danger"] as const}>
          {(tone) => (
            <Button tone={tone} onClick={() => setCount((value) => value + 1)}>
              {tone}
            </Button>
          )}
        </For>
      </div>
      <ButtonGroup aria-label="Grouped press feedback" variant="outline">
        <Button onClick={() => setCount((value) => value + 1)}>First</Button>
        <Button onClick={() => setCount((value) => value + 1)}>Second</Button>
      </ButtonGroup>
      <ButtonGroup aria-label="Grouped solid press feedback">
        <Button onClick={() => setCount((value) => value + 1)}>First</Button>
        <Button onClick={() => setCount((value) => value + 1)}>Second</Button>
      </ButtonGroup>
      <div style={{ display: "flex", "flex-wrap": "wrap", gap: "0.75rem" }}>
        <Button disabled>Disabled</Button>
        <Button loading>Saving</Button>
        <Button data-state="open">Open trigger</Button>
      </div>
      <Text role="status" aria-atomic="true" size="7" tone="muted">
        Actions completed: {count()}
      </Text>
    </div>
  );
}

export function ButtonPressThemes() {
  return (
    <div style={{ display: "grid", gap: "1rem" }}>
      <For each={["light", "dark", "system"] as const}>
        {(theme) => (
          <section
            data-nui-theme={theme}
            aria-label={`${theme} theme`}
            style={{
              background: "var(--nui-background)",
              color: "var(--nui-foreground)",
              padding: "1rem",
              "border-radius": "0.75rem",
            }}
          >
            <Text style={{ "margin-bottom": "1rem" }}>{theme} theme</Text>
            <ButtonPressExample />
          </section>
        )}
      </For>
    </div>
  );
}
