import { Avatar } from "../../../content/avatar/avatar";
import { Badge } from "../../../content/badge/badge";
import { Heading } from "../../../content/heading/heading";
import { Text } from "../../../content/text/text";

export function ProfilePreview() {
  return (
    <>
      <div style={{ display: "flex", "align-items": "center", gap: "12px" }}>
        <Avatar.Root size="lg" aria-hidden="true">
          <Avatar.Fallback>S</Avatar.Fallback>
        </Avatar.Root>
        <div style={{ "min-width": 0 }}>
          <Heading as="h3" size="6">
            SolidJS
          </Heading>
          <Text size="7" tone="muted">
            @solidjs
          </Text>
        </div>
      </div>
      <Text size="6">Reactive tools for building user interfaces.</Text>
      <div style={{ display: "flex", "flex-wrap": "wrap", gap: "8px" }}>
        <Badge tone="neutral" variant="soft">
          Open source
        </Badge>
        <Badge tone="primary" variant="soft">
          UI development
        </Badge>
      </div>
      <Text size="7" tone="muted">
        Follow the link to explore the organization on GitHub.
      </Text>
    </>
  );
}
