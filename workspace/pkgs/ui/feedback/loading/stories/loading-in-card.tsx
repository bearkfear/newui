import { Card } from "../../../content/card/card";
import { Loading } from "../loading";

export function LoadingInCard() {
  return (
    <Card.Root style={{ "max-width": "28rem" }}>
      <Card.Header>
        <Card.Title>Project activity</Card.Title>
        <Card.Description>The latest updates from your team.</Card.Description>
      </Card.Header>
      <Card.Content>
        <Loading showLabel label="Fetching recent activity…" />
      </Card.Content>
    </Card.Root>
  );
}
