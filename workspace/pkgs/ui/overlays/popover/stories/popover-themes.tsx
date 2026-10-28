import { For } from "solid-js";
import { PopoverExample } from "./popover-example";

export function PopoverThemes() {
  return (
    <div
      style={{
        display: "grid",
        "grid-template-columns": "repeat(auto-fit, minmax(min(100%, 20rem), 1fr))",
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
            }}
          >
            <PopoverExample />
          </section>
        )}
      </For>
    </div>
  );
}
