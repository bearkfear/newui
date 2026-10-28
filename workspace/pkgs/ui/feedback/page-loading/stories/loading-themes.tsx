import { For } from "solid-js";
import { PageLoading } from "../page-loading";

export function LoadingThemes() {
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
            }}
          >
            <PageLoading
              layout="section"
              label="Loading workspace…"
              description="Preparing your projects and recent updates."
            />
          </section>
        )}
      </For>
    </div>
  );
}
