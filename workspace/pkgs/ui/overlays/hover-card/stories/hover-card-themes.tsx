import { For } from "solid-js";
import { HoverCard } from "../hover-card";
import type { HoverCardExampleProps } from "./hover-card-example";
import { ProfilePreview } from "./profile-preview";

export function HoverCardThemes(props: HoverCardExampleProps) {
  return (
    <div
      style={{
        display: "grid",
        "grid-template-columns": "repeat(auto-fit, minmax(min(100%, 24rem), 1fr))",
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
              padding: "32px 24px",
              "min-height": "28rem",
              border: "1px solid var(--nui-border)",
              "border-radius": "12px",
            }}
          >
            <HoverCard.Root
              defaultOpen
              positioning={{ placement: props.placement }}
              onInteractOutside={(event) => event.preventDefault()}
            >
              <HoverCard.Trigger
                asChild={(triggerProps) => (
                  <a
                    {...triggerProps()}
                    href="https://github.com/solidjs"
                    target="_blank"
                    rel="noreferrer"
                  >
                    SolidJS · {theme} theme
                  </a>
                )}
              />
              <HoverCard.Content showArrow={props.showArrow ?? true}>
                <ProfilePreview />
              </HoverCard.Content>
            </HoverCard.Root>
          </section>
        )}
      </For>
    </div>
  );
}
