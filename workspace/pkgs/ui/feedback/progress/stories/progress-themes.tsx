import { For } from "solid-js";
import { ProgressCircle } from "../../progress-circle/progress-circle";
import { Progress } from "../progress";

export function ProgressThemes() {
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
              gap: "24px",
              "justify-items": "start",
            }}
          >
            <Progress value={65} label="Project assets" />
            <Progress value={100} tone="success" label="Documentation complete" />
            <ProgressCircle value={65} label="Workspace sync" />
          </section>
        )}
      </For>
    </div>
  );
}
