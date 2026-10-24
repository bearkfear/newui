import { createSignal, createUniqueId } from "solid-js";
import { Button } from "../../../actions/button/button";
import { Text } from "../../text/text";
import type { CardRootProps } from "../card";
import { Card } from "../card";

export function HeaderActionsCard(props: CardRootProps) {
  const [following, setFollowing] = createSignal(false);
  const titleId = createUniqueId();
  return (
    <Card.Root as="article" aria-labelledby={titleId} {...props}>
      <Card.Header>
        <Card.Title id={titleId}>Design updates</Card.Title>
        <Card.Description>Notes from the design team.</Card.Description>
        <Card.Actions>
          <Button
            size="sm"
            variant="outline"
            aria-pressed={following()}
            onClick={() => setFollowing((value) => !value)}
          >
            {following() ? "Following" : "Follow"}
          </Button>
        </Card.Actions>
      </Card.Header>
      <Card.Content>
        <Text size="6">A new set of components is ready for review in the workshop.</Text>
      </Card.Content>
    </Card.Root>
  );
}
