import { createSignal, createUniqueId } from "solid-js";
import { Button } from "../../../actions/button/button";
import { Text } from "../../text/text";
import type { CardRootProps } from "../card";
import { Card } from "../card";

export function CardExample(props: CardRootProps) {
  const [saved, setSaved] = createSignal(false);
  const titleId = createUniqueId();
  return (
    <Card.Root as="article" aria-labelledby={titleId} {...props}>
      <Card.Header>
        <Card.Title id={titleId}>Workspace settings</Card.Title>
        <Card.Description>Keep your team up to date.</Card.Description>
      </Card.Header>
      <Card.Content>
        <Text size="6">
          Share project updates and important milestones with everyone in your workspace.
        </Text>
      </Card.Content>
      <Card.Footer>
        <Button onClick={() => setSaved(true)}>Save preferences</Button>
        <Button variant="ghost" tone="neutral" disabled={!saved()} onClick={() => setSaved(false)}>
          Reset
        </Button>
        <Text as="span" size="7" tone="muted" role="status" style={{ width: "100%" }}>
          {saved() ? "Preferences saved." : "No changes saved."}
        </Text>
      </Card.Footer>
    </Card.Root>
  );
}
