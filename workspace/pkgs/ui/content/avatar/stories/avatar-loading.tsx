import { createSignal } from "solid-js";
import { Button } from "../../../actions/button/button";
import { Text } from "../../text/text";
import { Avatar } from "../avatar";

export function AvatarLoading() {
  const [broken, setBroken] = createSignal(false);
  const [status, setStatus] = createSignal("loading");
  return (
    <div style={{ display: "grid", "justify-items": "start", gap: "16px" }}>
      <Avatar.Root
        size="xl"
        role="img"
        aria-label="newui workspace"
        onStatusChange={(details) => setStatus(details.status)}
      >
        <Avatar.Image src={broken() ? "data:image/png;base64,broken" : "/favicon.svg"} alt="" />
        <Avatar.Fallback>NU</Avatar.Fallback>
      </Avatar.Root>
      <Text size="7" tone="muted" role="status">
        Image status: {status()}
      </Text>
      <Button size="sm" variant="outline" onClick={() => setBroken((value) => !value)}>
        {broken() ? "Restore image" : "Simulate image error"}
      </Button>
    </div>
  );
}
