import { createSignal, onCleanup } from "solid-js";
import { Button } from "../../../actions/button/button";
import { Text } from "../../../content/text/text";
import { createToaster } from "../create-toaster";
import { Toaster } from "../toaster";

export function ScopedToast() {
  const [theme, setTheme] = createSignal<"light" | "dark">("dark");
  const toaster = createToaster();
  onCleanup(() => toaster.remove());
  return (
    <section
      data-nui-theme={theme()}
      style={{
        background: "var(--nui-background)",
        color: "var(--nui-foreground)",
        padding: "32px",
        border: "1px solid var(--nui-border)",
        "border-radius": "12px",
        display: "grid",
        gap: "16px",
        "justify-items": "start",
      }}
    >
      <Text>This section is explicitly {theme()}.</Text>
      <div style={{ display: "flex", "flex-wrap": "wrap", gap: "12px" }}>
        <Button
          onClick={() =>
            toaster.create({
              type: "warning",
              title: "Review sharing settings",
              description: "The toast follows this section’s theme, including while open.",
              duration: Infinity,
            })
          }
        >
          Show themed toast
        </Button>
        <Button
          variant="outline"
          tone="neutral"
          onClick={() => setTheme(theme() === "light" ? "dark" : "light")}
        >
          Switch section theme
        </Button>
      </div>
      <Toaster toaster={toaster} />
    </section>
  );
}
