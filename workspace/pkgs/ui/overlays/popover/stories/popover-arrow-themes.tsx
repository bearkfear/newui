import { For } from "solid-js";
import { Button } from "../../../actions/button/button";
import { Text } from "../../../content/text/text";
import { Popover } from "../popover";
import type { PopoverExampleProps } from "./popover-example";

export function PopoverArrowThemes(props: PopoverExampleProps) {
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
              border: "1px solid var(--nui-border)",
              "border-radius": "12px",
              padding: "32px 24px",
              "min-height": "30rem",
            }}
          >
            <Popover.Root
              defaultOpen
              autoFocus={false}
              closeOnInteractOutside={false}
              positioning={{ placement: props.placement }}
            >
              <Popover.Trigger
                asChild={(triggerProps) => (
                  <Button {...triggerProps()} variant="outline" tone="neutral">
                    {theme === "light" ? "Light theme" : "Dark theme"}
                  </Button>
                )}
              />
              <Popover.Content>
                <Popover.Header>
                  <Popover.Title>Project notifications</Popover.Title>
                  <Popover.Description>
                    The arrow follows the adjoining surface.
                  </Popover.Description>
                </Popover.Header>
                <Popover.Body>
                  <Text size="6">
                    Use the placement control to compare the arrow’s edges in both themes.
                  </Text>
                </Popover.Body>
                <Popover.Footer>
                  <Popover.CloseTrigger
                    asChild={(closeProps) => (
                      <Button {...closeProps()} size="sm">
                        Done
                      </Button>
                    )}
                  />
                </Popover.Footer>
              </Popover.Content>
            </Popover.Root>
          </section>
        )}
      </For>
    </div>
  );
}
