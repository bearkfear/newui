import { For } from "solid-js";
import { Text } from "../../../content/text/text";
import { CalloutExample, type CalloutExampleProps } from "./callout-example";

export function CalloutThemes(props: CalloutExampleProps) {
  return (
    <div
      style={{
        display: "grid",
        "grid-template-columns": "repeat(auto-fit, minmax(min(100%, 22rem), 1fr))",
        gap: "24px",
      }}
    >
      <For each={["light", "dark"] as const}>
        {(theme) => (
          <section
            data-nui-theme={theme}
            aria-label={`${theme} theme`}
            style={{
              background: "var(--nui-background)",
              color: "var(--nui-foreground)",
              border: "1px solid var(--nui-border)",
              "border-radius": "12px",
              padding: "24px",
              display: "grid",
              "align-content": "start",
              gap: "16px",
            }}
          >
            <Text size="7" tone="muted">
              {theme === "light" ? "Light theme" : "Dark theme"}
            </Text>
            <CalloutExample {...props} />
            <CalloutExample
              tone="warning"
              variant={props.variant}
              title="Review sharing settings"
              description="This project is visible to all workspace members."
            />
          </section>
        )}
      </For>
    </div>
  );
}
