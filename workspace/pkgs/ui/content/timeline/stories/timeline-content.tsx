import { createSignal } from "solid-js";
import { Button } from "../../../actions/button/button";
import { Empty } from "../../../feedback/empty/empty";
import { Badge } from "../../badge/badge";
import { Card } from "../../card/card";
import { Heading } from "../../heading/heading";
import { Text } from "../../text/text";
import { Timeline, type TimelineRootProps } from "../timeline";
import { EventIcon } from "./timeline-example";

export function RichTimeline() {
  const [message, setMessage] = createSignal("");
  return (
    <Card.Root style={{ "max-width": "40rem" }}>
      <Card.Header>
        <Card.Title>Release history</Card.Title>
        <Card.Description>Milestones and deployment details.</Card.Description>
      </Card.Header>
      <Card.Content>
        <Timeline.Root aria-label="Release history">
          <Timeline.Item status="complete">
            <Timeline.Indicator>
              <EventIcon />
            </Timeline.Indicator>
            <Timeline.Content>
              <Timeline.Title>Deployment completed</Timeline.Title>
              <Timeline.Time dateTime="2026-10-28T10:30:00-03:00">
                October 28, 2026 · 10:30
              </Timeline.Time>
              <Timeline.Description>Version 1.2 is running in production.</Timeline.Description>
              <div
                style={{
                  display: "grid",
                  gap: "0.75rem",
                  "margin-top": "0.75rem",
                  "justify-items": "start",
                }}
              >
                <Badge tone="success">Production</Badge>
                <Card.Root variant="soft">
                  <Card.Content>
                    <Text size="6">
                      Improved table presentation, empty states, and release documentation.
                    </Text>
                  </Card.Content>
                </Card.Root>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => setMessage("Deployment v1.2 · All services healthy.")}
                >
                  View deployment
                </Button>
              </div>
            </Timeline.Content>
          </Timeline.Item>
          <Timeline.Item>
            <Timeline.Indicator />
            <Timeline.Content>
              <Timeline.Title>Release prepared</Timeline.Title>
              <Timeline.Time dateTime="2026-10-27">October 27, 2026</Timeline.Time>
              <Timeline.Description>
                Changes were reviewed and release notes were prepared.
              </Timeline.Description>
            </Timeline.Content>
          </Timeline.Item>
        </Timeline.Root>
        <Text
          role="status"
          aria-atomic="true"
          size="7"
          tone="muted"
          style={{ "margin-top": "1rem" }}
        >
          {message()}
        </Text>
      </Card.Content>
    </Card.Root>
  );
}

export function SingleEvent(props: { orientation?: TimelineRootProps["orientation"] }) {
  return (
    <div style={{ "max-width": "38rem" }}>
      <Heading as="h2" size="5" style={{ "margin-bottom": "1.25rem" }}>
        Workspace history
      </Heading>
      <Timeline.Root aria-label="Workspace history" orientation={props.orientation}>
        <Timeline.Item>
          <Timeline.Indicator />
          <Timeline.Content>
            <Timeline.Title>Workspace created</Timeline.Title>
            <Timeline.Description>A single event has no trailing connector.</Timeline.Description>
            <Timeline.Time dateTime="2026-10-28">October 28, 2026</Timeline.Time>
          </Timeline.Content>
        </Timeline.Item>
      </Timeline.Root>
    </div>
  );
}

export function EmptyHistory() {
  return (
    <Card.Root style={{ "max-width": "38rem" }}>
      <Card.Header>
        <Card.Title>Project history</Card.Title>
      </Card.Header>
      <Empty.Root>
        <Empty.Icon />
        <Empty.Content>
          <Empty.Title as="h3">No activity yet</Empty.Title>
          <Empty.Description>
            New project events will appear here in chronological order.
          </Empty.Description>
        </Empty.Content>
      </Empty.Root>
    </Card.Root>
  );
}
