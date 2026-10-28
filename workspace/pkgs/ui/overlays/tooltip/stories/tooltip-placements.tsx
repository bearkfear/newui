import { For } from "solid-js";
import { Button } from "../../../actions/button/button";
import { Tooltip } from "../tooltip";

export function TooltipPlacements() {
  return (
    <div style={{ display: "flex", "flex-wrap": "wrap", gap: "32px", padding: "64px 24px" }}>
      <For each={["top", "right", "bottom", "left"] as const}>
        {(placement) => (
          <Tooltip.Root positioning={{ placement }}>
            <Tooltip.Trigger
              asChild={(props) => (
                <Button {...props()} tone="neutral" variant="outline">
                  {placement}
                </Button>
              )}
            />
            <Tooltip.Content>Preferred placement: {placement}. Adjusts near edges.</Tooltip.Content>
          </Tooltip.Root>
        )}
      </For>
    </div>
  );
}
