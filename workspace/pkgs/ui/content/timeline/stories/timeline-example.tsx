import { For, Show } from "solid-js";
import { Heading } from "../../heading/heading";
import { Timeline, type TimelineRootProps } from "../timeline";

const activity = [
  {
    title: "Version 1.2 published",
    description: "The latest component updates are available to the team.",
    time: "Today, 10:30",
    dateTime: "2026-10-28T10:30:00-03:00",
  },
  {
    title: "Review completed",
    description: "Alex approved the visual changes and documentation.",
    time: "Today, 09:15",
    dateTime: "2026-10-28T09:15:00-03:00",
  },
  {
    title: "Changes submitted",
    description: "Sam shared the first implementation for review.",
    time: "Yesterday, 16:40",
    dateTime: "2026-10-27T16:40:00-03:00",
  },
];

export interface TimelineExampleProps {
  density?: TimelineRootProps["density"];
  orientation?: TimelineRootProps["orientation"];
  showTime?: boolean;
  showDescription?: boolean;
  customIndicators?: boolean;
}

export function EventIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="1.75"
      stroke-linecap="round"
      stroke-linejoin="round"
      aria-hidden="true"
    >
      <path d="m5 12 4 4L19 6" />
    </svg>
  );
}

export function TimelineExample(props: TimelineExampleProps) {
  return (
    <div
      style={{
        "max-width": props.orientation === "horizontal" ? "60rem" : "38rem",
        "min-width": "0",
      }}
    >
      <Heading as="h2" size="5" style={{ "margin-bottom": "1.25rem" }}>
        Project activity
      </Heading>
      <Timeline.Root
        aria-label="Project activity, newest first"
        density={props.density}
        orientation={props.orientation}
      >
        <For each={activity}>
          {(event) => (
            <Timeline.Item>
              <Timeline.Indicator>
                <Show when={props.customIndicators}>
                  <EventIcon />
                </Show>
              </Timeline.Indicator>
              <Timeline.Content>
                <Timeline.Title>{event.title}</Timeline.Title>
                <Show when={props.showDescription !== false}>
                  <Timeline.Description>{event.description}</Timeline.Description>
                </Show>
                <Show when={props.showTime !== false}>
                  <Timeline.Time dateTime={event.dateTime}>{event.time}</Timeline.Time>
                </Show>
              </Timeline.Content>
            </Timeline.Item>
          )}
        </For>
      </Timeline.Root>
    </div>
  );
}
