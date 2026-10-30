import { Eye, EyeOff } from "lucide-solid";
import { createSignal, For } from "solid-js";
import { Avatar, Badge, Button, Card, MediaObject, Tabs, Timeline } from "../../index";
import { type Notify, PageHeading } from "./page-parts";
import { ProjectDelivery, ProjectTasks } from "./project-delivery";

export function ProjectPage(props: { notify: Notify }) {
  const [watching, setWatching] = createSignal(false);
  const toggleWatching = () => {
    setWatching(!watching());
    props.notify(watching() ? "You're following this project" : "Project notifications paused");
  };
  return (
    <div class="example-page">
      <PageHeading
        eyebrow="PROJECT / WEBSITE REDESIGN"
        title="A more thoughtful first impression."
        description="A fresh home for the product, built together."
        actions={
          <Button
            variant="outline"
            size="sm"
            aria-pressed={watching()}
            startIcon={watching() ? <EyeOff /> : <Eye />}
            onClick={toggleWatching}
          >
            {watching() ? "Following" : "Follow project"}
          </Button>
        }
      />
      <div class="example-actions">
        <Badge tone="primary">In progress</Badge>
        <Badge variant="outline">Launch · November 12</Badge>
        <span class="example-muted">Updated October 29</span>
      </div>
      <Tabs.Root defaultValue="overview">
        <Tabs.List aria-label="Project sections">
          <Tabs.Trigger value="overview">Overview</Tabs.Trigger>
          <Tabs.Trigger value="activity">Activity</Tabs.Trigger>
          <Tabs.Trigger value="delivery">Delivery</Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content value="overview">
          <div class="example-columns">
            <ProjectTasks />
            <ProjectBrief />
          </div>
        </Tabs.Content>
        <Tabs.Content value="activity">
          <Card.Root>
            <Card.Header>
              <Card.Title>Good work happens together</Card.Title>
              <Card.Description>The latest from the team.</Card.Description>
            </Card.Header>
            <Card.Content>
              <ProjectActivity />
            </Card.Content>
          </Card.Root>
        </Tabs.Content>
        <Tabs.Content value="delivery">
          <ProjectDelivery />
        </Tabs.Content>
      </Tabs.Root>
    </div>
  );
}

function ProjectBrief() {
  return (
    <Card.Root>
      <Card.Header>
        <Card.Title>The brief</Card.Title>
      </Card.Header>
      <Card.Content>
        <div class="example-stack">
          <p class="example-muted">
            Help people understand the product in a few clear moments. Less searching, more finding
            their way.
          </p>
          <dl class="example-details">
            <div>
              <dt>Team</dt>
              <dd>Design & Product</dd>
            </div>
            <div>
              <dt>Milestone</dt>
              <dd>Final design review</dd>
            </div>
            <div>
              <dt>Delivery</dt>
              <dd>November 12, 2026</dd>
            </div>
          </dl>
          <MediaObject.Root size="sm">
            <MediaObject.Media>
              <Avatar.Root>
                <Avatar.Fallback>ML</Avatar.Fallback>
              </Avatar.Root>
            </MediaObject.Media>
            <MediaObject.Content>
              <MediaObject.Title as="h3">Morgan Lee</MediaObject.Title>
              <MediaObject.Description>Project lead</MediaObject.Description>
            </MediaObject.Content>
          </MediaObject.Root>
        </div>
      </Card.Content>
    </Card.Root>
  );
}

const activity = [
  {
    title: "Morgan shared the final navigation",
    detail: "Three focused paths, shaped by the latest interviews.",
    date: "2026-10-29",
    time: "Today · 10:42",
  },
  {
    title: "Jamie completed the research summary",
    detail: "Six interviews, one shared understanding of what matters.",
    date: "2026-10-28",
    time: "Yesterday · 16:20",
  },
  {
    title: "Alex opened the accessibility review",
    detail: "Keyboard flows, contrast, and useful names for every control.",
    date: "2026-10-27",
    time: "October 27 · 09:15",
  },
];

function ProjectActivity() {
  return (
    <Timeline.Root aria-label="Project activity">
      <For each={activity}>
        {(event) => (
          <Timeline.Item status="complete">
            <Timeline.Indicator />
            <Timeline.Content>
              <Timeline.Title>{event.title}</Timeline.Title>
              <Timeline.Description>{event.detail}</Timeline.Description>
              <Timeline.Time dateTime={event.date}>{event.time}</Timeline.Time>
            </Timeline.Content>
          </Timeline.Item>
        )}
      </For>
    </Timeline.Root>
  );
}
