import { createSignal, For, Show } from "solid-js";
import { Button } from "../../../actions/button/button";
import { Badge } from "../../badge/badge";
import { Heading } from "../../heading/heading";
import { Text } from "../../text/text";
import { Timeline, type TimelineItemProps, type TimelineRootProps } from "../timeline";
import { EventIcon } from "./timeline-example";

const stages = [
  { title: "Order confirmed", description: "We received your order and payment." },
  { title: "Preparing shipment", description: "Your items are being packed for delivery." },
  {
    title: "Out for delivery",
    description: "Your shipment is on its way to the delivery address.",
  },
  { title: "Delivered", description: "The shipment has arrived at its destination." },
];
type StepStatus = NonNullable<TimelineItemProps["status"]>;
const labels = { complete: "Completed", current: "Current step", pending: "Pending", default: "" };

export function DeliveryTimeline(props: { orientation?: TimelineRootProps["orientation"] }) {
  const [current, setCurrent] = createSignal(1);
  const status = (index: number): StepStatus =>
    index < current() ? "complete" : index === current() ? "current" : "pending";
  return (
    <div
      style={{
        display: "grid",
        gap: "1.25rem",
        "max-width": props.orientation === "horizontal" ? "64rem" : "38rem",
        "min-width": "0",
      }}
    >
      <Heading as="h2" size="5">
        Shipment progress
      </Heading>
      <Timeline.Root aria-label="Shipment progress" orientation={props.orientation}>
        <For each={stages}>
          {(stage, index) => (
            <Timeline.Item status={status(index())}>
              <Timeline.Indicator>
                <Show when={status(index()) === "complete"}>
                  <EventIcon />
                </Show>
              </Timeline.Indicator>
              <Timeline.Content>
                <Timeline.Title>{stage.title}</Timeline.Title>
                <Timeline.Description>{stage.description}</Timeline.Description>
                <div style={{ "margin-top": "0.375rem" }}>
                  <Badge
                    tone={
                      status(index()) === "current"
                        ? "primary"
                        : status(index()) === "complete"
                          ? "success"
                          : "neutral"
                    }
                  >
                    {labels[status(index())]}
                  </Badge>
                </div>
              </Timeline.Content>
            </Timeline.Item>
          )}
        </For>
      </Timeline.Root>
      <div style={{ display: "flex", "flex-wrap": "wrap", gap: "0.5rem" }}>
        <Button
          onClick={() => setCurrent((step) => Math.min(step + 1, stages.length))}
          disabled={current() === stages.length}
        >
          Advance shipment
        </Button>
        <Button variant="outline" onClick={() => setCurrent(0)}>
          Reset
        </Button>
      </div>
      <Text role="status" aria-atomic="true" size="7" tone="muted">
        {current() === stages.length
          ? "Shipment complete."
          : `Current step: ${stages[current()]?.title}.`}
      </Text>
    </div>
  );
}
