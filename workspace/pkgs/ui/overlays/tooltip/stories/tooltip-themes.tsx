import { For } from "solid-js";
import { Button } from "../../../actions/button/button";
import { Text } from "../../../content/text/text";
import { Tooltip } from "../tooltip";

export function TooltipThemes() {
  return (
    <div
      style={{
        display: "grid",
        "grid-template-columns": "repeat(auto-fit, minmax(min(100%, 18rem), 1fr))",
        gap: "24px",
      }}
    >
      <For each={["light", "dark"] as const}>
        {(theme) => (
          <section
            data-nui-theme={theme}
            style={{
              background: "var(--nui-background)",
              color: "var(--nui-foreground)",
              padding: "48px 24px",
              border: "1px solid var(--nui-border)",
              "border-radius": "12px",
              display: "grid",
              gap: "16px",
              "justify-items": "start",
            }}
          >
            <Text style={{ "font-weight": 600 }}>
              {theme === "light" ? "Light scope" : "Dark scope"}
            </Text>
            <Tooltip.Root>
              <Tooltip.Trigger
                asChild={(props) => (
                  <Button {...props()} tone="neutral" variant="outline">
                    Hover or focus
                  </Button>
                )}
              />
              <Tooltip.Content>The portal follows this section’s theme.</Tooltip.Content>
            </Tooltip.Root>
          </section>
        )}
      </For>
    </div>
  );
}
