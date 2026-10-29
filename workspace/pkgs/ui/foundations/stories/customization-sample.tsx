import { Plus } from "lucide-solid";
import type { JSX } from "solid-js";
import { Button } from "../../actions/button/button";
import { Card } from "../../content/card/card";
import { Text } from "../../content/text/text";
import { Dialog } from "../../overlays/dialog/dialog";

export const customMetrics: JSX.CSSProperties = {
  "--nui-space-unit": "0.3rem",
  "--nui-radius-md": "0.75rem",
  "--nui-radius-xl": "1.5rem",
  "--nui-font-size-base": "1.125rem",
  "--nui-control-height-md": "3rem",
  "--nui-header-gap": "0.5rem",
  "--nui-focus-width": "3px",
  "--nui-focus-offset": "4px",
};

function ScopedDialog() {
  return (
    <Dialog.Root>
      <Dialog.Trigger
        asChild={(triggerProps) => (
          <Button {...triggerProps()} variant="outline">
            Open dialog
          </Button>
        )}
      />
      <Dialog.Content size="sm">
        <Dialog.Header>
          <Dialog.Title>Inherited through the portal</Dialog.Title>
          <Dialog.Description>Theme, typography, header gap, and focus metrics.</Dialog.Description>
          <Dialog.CloseTrigger />
        </Dialog.Header>
        <Dialog.Body>
          <Text>
            The same public tokens apply to content mounted outside the original container.
          </Text>
        </Dialog.Body>
        <Dialog.Footer>
          <Dialog.CloseTrigger asChild={(closeProps) => <Button {...closeProps()}>Done</Button>} />
        </Dialog.Footer>
      </Dialog.Content>
    </Dialog.Root>
  );
}

export function CustomizationSample(props: { customized: boolean; theme: "light" | "dark" }) {
  return (
    <section
      data-nui-theme={props.theme}
      style={{
        ...(props.customized ? customMetrics : {}),
        display: "grid",
        gap: "24px",
        padding: "24px",
        "min-width": "0",
        background: "var(--nui-background)",
        color: "var(--nui-foreground)",
        border: "1px solid var(--nui-border)",
        "border-radius": "var(--nui-radius-xl)",
      }}
    >
      <h2>
        {props.customized ? "Customized" : "Default"} · {props.theme}
      </h2>
      <Card.Root>
        <Card.Header>
          <Card.Title>Project workspace</Card.Title>
          <Card.Description>Metrics inherit within this scope.</Card.Description>
        </Card.Header>
        <Card.Content>
          <Text>Body text, corners, and controls follow their public tokens.</Text>
        </Card.Content>
        <Card.Footer>
          <Button startIcon={<Plus aria-hidden="true" />}>Create</Button>
        </Card.Footer>
      </Card.Root>
      <ScopedDialog />
    </section>
  );
}
