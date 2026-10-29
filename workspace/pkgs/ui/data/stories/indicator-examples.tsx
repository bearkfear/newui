import { createSignal, For } from "solid-js";
import { Button } from "../../actions/button/button";
import { Card } from "../../content/card/card";
import { BadgeDelta } from "../badge-delta/badge-delta";
import { BarList } from "../bar-list/bar-list";
import { DeltaBar } from "../delta-bar/delta-bar";
import "./indicators-demo.css";

export const channels = [
  { name: "Direct", sessions: 4250 },
  { name: "Organic search", sessions: 3180 },
  { name: "Referrals", sessions: 1740 },
  { name: "Social", sessions: 920 },
  { name: "Email", sessions: 480 },
];

export function IndicatorOverview() {
  const [updated, setUpdated] = createSignal(false);
  return (
    <div class="indicators-demo">
      <header class="indicators-demo-header">
        <div>
          <h2>Acquisition overview</h2>
          <p>This month compared with last month</p>
        </div>
        <Button variant="outline" size="sm" onClick={() => setUpdated(!updated())}>
          {updated() ? "Restore data" : "Update data"}
        </Button>
      </header>
      <div class="indicators-demo-grid">
        <AudienceCard updated={updated()} />
        <MonthlyChangesCard updated={updated()} />
      </div>
      <Card.Root>
        <Card.Header>
          <Card.Title>Key metrics</Card.Title>
        </Card.Header>
        <Card.Content>
          <div class="indicators-demo-metrics">
            <Metric
              label="Revenue"
              value={updated() ? "$38,200" : "$42,800"}
              delta={updated() ? -4.3 : 12.5}
            />
            <Metric label="Operating costs" value="$8,340" delta={-8.2} isPositiveGood={false} />
            <Metric label="Active projects" value="24" delta={0} />
          </div>
        </Card.Content>
      </Card.Root>
    </div>
  );
}

function Metric(props: { label: string; value: string; delta: number; isPositiveGood?: boolean }) {
  return (
    <div class="indicators-demo-metric">
      <h3>{props.label}</h3>
      <p>{props.value}</p>
      <div>
        <BadgeDelta value={props.delta} isPositiveGood={props.isPositiveGood ?? true} />
        <span class="indicators-demo-comparison">vs. last month</span>
      </div>
    </div>
  );
}

export function DeltaStates() {
  return (
    <div class="indicators-demo-stack">
      <For each={[75, -45, 0, 180, -140, Number.NaN]}>
        {(value) => (
          <DeltaBar
            label={Number.isFinite(value) ? `Change: ${value}%` : "No comparison available"}
            description="Fixed scale: −100% to +100%; the label preserves the full value."
            value={value}
          />
        )}
      </For>
    </div>
  );
}

export function BadgeDeltaMatrix() {
  return (
    <div class="indicators-demo-stack">
      <For each={["soft", "solid", "outline"] as const}>
        {(variant) => (
          <div class="indicators-demo-row">
            <For each={["sm", "md", "lg"] as const}>
              {(size) => (
                <For each={[12.5, -8.2, 0]}>
                  {(value) => <BadgeDelta value={value} variant={variant} size={size} />}
                </For>
              )}
            </For>
          </div>
        )}
      </For>
    </div>
  );
}

function AudienceCard(props: { updated: boolean }) {
  return (
    <Card.Root>
      <Card.Header>
        <Card.Title>Audience</Card.Title>
        <Card.Description>Sessions by source</Card.Description>
      </Card.Header>
      <Card.Content>
        <BarList
          title="Acquisition channels"
          data={channels.map((item) => ({
            ...item,
            sessions: item.sessions * (props.updated && item.name === "Social" ? 4 : 1),
          }))}
          label={(item) => item.name}
          value={(item) => item.sessions}
        />
      </Card.Content>
    </Card.Root>
  );
}

function MonthlyChangesCard(props: { updated: boolean }) {
  return (
    <Card.Root>
      <Card.Header>
        <Card.Title>Monthly changes</Card.Title>
        <Card.Description>Direction and business impact</Card.Description>
      </Card.Header>
      <Card.Content>
        <div class="indicators-demo-stack">
          <DeltaBar
            label="New subscribers"
            value={props.updated ? -18 : 38.4}
            description="Relative change in subscriptions"
          />
          <DeltaBar
            label="Acquisition cost"
            value={props.updated ? 24 : -22.6}
            isPositiveGood={false}
            description="Lower acquisition costs are favorable"
          />
          <DeltaBar label="Retention" value={0} description="No change from the previous month" />
        </div>
      </Card.Content>
    </Card.Root>
  );
}
