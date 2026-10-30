import { Activity, CheckCheck } from "lucide-solid";
import { createSignal, For } from "solid-js";
import { Accordion, Badge, Button, Callout, Card, Timeline } from "../../index";
import { MetricCard, PageHeading } from "./page-parts";

export function StatusPage() {
  const [incident, setIncident] = createSignal(false);
  const [updated, setUpdated] = createSignal(false);
  return (
    <div class="example-page">
      <PageHeading
        eyebrow="A LITTLE PEACE OF MIND"
        title="Built to be here for you."
        description="A snapshot of the services your team relies on."
        actions={
          <Button
            variant="outline"
            size="sm"
            onClick={() => {
              setIncident(!incident());
              setUpdated(true);
            }}
          >
            {incident() ? "Resolve incident" : "Simulate incident"}
          </Button>
        }
      />
      <StatusSummary incident={incident()} />
      <StatusMetrics incident={incident()} />
      <div class="example-columns">
        <ServiceHealth incident={incident()} />
        <IncidentHistory incident={incident()} updated={updated()} />
      </div>
      <Callout.Root tone="info">
        <Callout.Icon />
        <Callout.Content>
          <Callout.Title>Scheduled maintenance</Callout.Title>
          <Callout.Description>
            November 3, 02:00–02:30 UTC. Background reports may be delayed; your workspace will stay
            available.
          </Callout.Description>
        </Callout.Content>
      </Callout.Root>
    </div>
  );
}

function ServiceHealth(props: { incident: boolean }) {
  return (
    <Card.Root>
      <Card.Header>
        <Card.Title>Your services, at a glance</Card.Title>
        <Card.Description>30 daily snapshots · most recent on the right</Card.Description>
      </Card.Header>
      <Card.Content>
        <ul class="example-list">
          <For each={["Application", "API", "File storage", "Notifications"]}>
            {(service) => (
              <li>
                <div class="example-row">
                  <h3 class="example-section-title">{service}</h3>
                  <Badge
                    tone={props.incident && service === "File storage" ? "warning" : "success"}
                  >
                    {props.incident && service === "File storage" ? "Degraded" : "Operational"}
                  </Badge>
                </div>
                <div class="example-health-bars" aria-hidden="true">
                  <For each={Array.from({ length: 30 }, (_, index) => index)}>
                    {(index) => (
                      <span
                        data-interrupted={
                          props.incident && service === "File storage" && index === 29
                            ? ""
                            : undefined
                        }
                      />
                    )}
                  </For>
                </div>
                <span class="example-sr-only">
                  {props.incident && service === "File storage"
                    ? "29 operational days; degraded service today."
                    : "Operational throughout the last 30 days."}
                </span>
              </li>
            )}
          </For>
        </ul>
      </Card.Content>
    </Card.Root>
  );
}

function IncidentHistory(props: { incident: boolean; updated: boolean }) {
  return (
    <Card.Root>
      <Card.Header>
        <Card.Title>Keeping you in the loop</Card.Title>
        <Card.Description>Incident notes · October 29, 2026</Card.Description>
      </Card.Header>
      <Card.Content>
        <div class="example-stack">
          <Timeline.Root aria-label="Latest incident updates" density="compact">
            <Timeline.Item status={props.incident ? "current" : "complete"}>
              <Timeline.Indicator />
              <Timeline.Content>
                <Timeline.Title>
                  {props.incident
                    ? "Investigating upload latency"
                    : props.updated
                      ? "File uploads recovered"
                      : "No active incidents"}
                </Timeline.Title>
                <Timeline.Description>
                  {props.incident
                    ? "The team is checking the storage queue. An update will follow as soon as we know more."
                    : "All monitored services are operating normally."}
                </Timeline.Description>
              </Timeline.Content>
            </Timeline.Item>
            <Timeline.Item status="complete">
              <Timeline.Indicator />
              <Timeline.Content>
                <Timeline.Title>Earlier today · Routine checks complete</Timeline.Title>
                <Timeline.Description>
                  Application, API, storage, and notifications verified.
                </Timeline.Description>
              </Timeline.Content>
            </Timeline.Item>
          </Timeline.Root>
          <Accordion.Root>
            <Accordion.Item value="previous">
              <Accordion.ItemHeading>
                <Accordion.ItemTrigger>
                  Previous incident · October 21
                  <Accordion.ItemIndicator />
                </Accordion.ItemTrigger>
              </Accordion.ItemHeading>
              <Accordion.ItemContent>
                <p class="example-muted">
                  Delayed notification delivery was resolved at 14:20 UTC. Queued messages were
                  delivered, and no messages were lost.
                </p>
              </Accordion.ItemContent>
            </Accordion.Item>
          </Accordion.Root>
        </div>
      </Card.Content>
    </Card.Root>
  );
}

function StatusSummary(props: { incident: boolean }) {
  return (
    <section
      class="example-status-summary"
      data-incident={props.incident ? "" : undefined}
      aria-live="polite"
    >
      <div class="example-actions">
        {props.incident ? <Activity aria-hidden="true" /> : <CheckCheck aria-hidden="true" />}
        <h2>
          {props.incident ? "We're investigating slower file uploads" : "All systems operational"}
        </h2>
      </div>
      <p>
        {props.incident
          ? "Uploads may take longer than usual. Your existing files remain available."
          : "Everything is running smoothly. Get back to the good work."}
      </p>
    </section>
  );
}

function StatusMetrics(props: { incident: boolean }) {
  return (
    <div class="example-metrics">
      <MetricCard
        label="Uptime, last 30 days"
        value={props.incident ? "99.95%" : "99.99%"}
        delta={0.01}
        description="vs. previous period"
      />
      <MetricCard
        label="Median response"
        value="142 ms"
        delta={-8.3}
        isPositiveGood={false}
        description="vs. previous period"
      />
      <MetricCard
        label="Open incidents"
        value={props.incident ? "1" : "0"}
        delta={0}
        description="reported by the team"
      />
    </div>
  );
}
