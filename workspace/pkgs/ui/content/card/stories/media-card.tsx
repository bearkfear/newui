import { createSignal, createUniqueId } from "solid-js";
import { Button } from "../../../actions/button/button";
import { Text } from "../../text/text";
import type { CardRootProps } from "../card";
import { Card } from "../card";

export function MediaCard(props: CardRootProps) {
  const [saved, setSaved] = createSignal(false);
  const titleId = createUniqueId();
  return (
    <Card.Root as="article" aria-labelledby={titleId} {...props}>
      <Card.Media data-nui-theme="light">
        <img
          src="/brand-light.svg"
          alt="newui brand wordmark"
          style={{
            "aspect-ratio": "16 / 9",
            "object-fit": "contain",
            padding: "40px",
            background: "var(--nui-primary-soft)",
          }}
        />
      </Card.Media>
      <Card.Header>
        <Card.Title id={titleId}>Brand assets</Card.Title>
        <Card.Description>Everything your next project needs.</Card.Description>
      </Card.Header>
      <Card.Content>
        <Text size="6">Explore the visual identity, components, and guidelines for your team.</Text>
      </Card.Content>
      <Card.Footer variant="divided">
        <Card.FooterItem>
          <Button
            variant="ghost"
            aria-pressed={saved()}
            onClick={() => setSaved((value) => !value)}
          >
            {saved() ? "Saved" : "Save"}
          </Button>
        </Card.FooterItem>
        <Card.FooterItem>
          <Button variant="ghost" tone="neutral" disabled>
            Share
          </Button>
        </Card.FooterItem>
      </Card.Footer>
    </Card.Root>
  );
}
