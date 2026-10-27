import { For } from "solid-js";
import { Text } from "../../text/text";
import { CardExample } from "./card-example";

export function ElevatedThemes() {
  return (
    <div style={{ display: "grid", gap: "24px" }}>
      <For each={["light", "dark"] as const}>
        {(theme) => (
          <section
            data-nui-theme={theme}
            style={{
              background: "var(--nui-background)",
              color: "var(--nui-foreground)",
              padding: "32px",
              "border-radius": "16px",
            }}
          >
            <Text style={{ "margin-bottom": "24px" }}>
              {theme === "light" ? "Light theme" : "Dark theme"}
            </Text>
            <div
              style={{
                display: "grid",
                "grid-template-columns": "repeat(auto-fit, minmax(min(100%, 20rem), 1fr))",
                gap: "40px",
              }}
            >
              <For each={["soft", "elevated"] as const}>
                {(variant) => (
                  <div>
                    <Text style={{ "margin-bottom": "16px" }}>
                      {variant === "soft" ? "Soft" : "Elevated"}
                    </Text>
                    <CardExample variant={variant} />
                  </div>
                )}
              </For>
            </div>
          </section>
        )}
      </For>
    </div>
  );
}
