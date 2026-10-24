import { For } from "solid-js";
import { Text } from "../../text/text";
import { Badge, BadgeGroup } from "../badge";

const tones = ["neutral", "primary", "info", "success", "warning", "danger"] as const;

export function BadgeMatrix() {
  return (
    <div style={{ display: "grid", gap: "20px", "max-width": "32rem" }}>
      <For each={tones}>
        {(tone) => (
          <div style={{ display: "grid", gap: "8px" }}>
            <Text size="7" tone="muted">
              {tone}
            </Text>
            <BadgeGroup>
              <Badge tone={tone} variant="solid">
                Solid
              </Badge>
              <Badge tone={tone} variant="soft">
                Soft
              </Badge>
              <Badge tone={tone} variant="outline">
                Outline
              </Badge>
            </BadgeGroup>
          </div>
        )}
      </For>
    </div>
  );
}
