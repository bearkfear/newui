import { createSignal } from "solid-js";
import { Button } from "../../../actions/button/button";
import { Heading } from "../../../content/heading/heading";
import { Text } from "../../../content/text/text";
import { Tabs, type TabsRootProps } from "../tabs";

export const tabVariants = ["underline", "boxed", "toggle", "rounded", "segmented"] as const;
export const tabTones = ["neutral", "primary", "info", "success", "warning", "danger"] as const;
export type TabsExampleProps = Pick<
  TabsRootProps,
  "variant" | "tone" | "size" | "align" | "fullWidth" | "activationMode"
>;

export function TabsExample(props: TabsExampleProps) {
  return (
    <Tabs.Root {...props} defaultValue="overview">
      <Tabs.List aria-label="Project sections">
        <Tabs.Trigger value="overview">Overview</Tabs.Trigger>
        <Tabs.Trigger value="activity">Activity</Tabs.Trigger>
        <Tabs.Trigger value="files">Files</Tabs.Trigger>
        <Tabs.Trigger value="billing" disabled>
          Billing
        </Tabs.Trigger>
      </Tabs.List>
      <Tabs.Content value="overview">
        <Heading as="h3" size="6">
          A place for your next idea
        </Heading>
        <Text tone="muted">Keep your project details and team updates together.</Text>
      </Tabs.Content>
      <Tabs.Content value="activity">
        <ActivityContent />
      </Tabs.Content>
      <Tabs.Content value="files">
        <Text tone="muted">Your project has three shared files.</Text>
      </Tabs.Content>
      <Tabs.Content value="billing">Billing is unavailable.</Tabs.Content>
    </Tabs.Root>
  );
}

function ActivityContent() {
  const [reviews, setReviews] = createSignal(0);
  return (
    <div style={{ display: "grid", gap: "0.75rem", "justify-items": "start" }}>
      <Text tone="muted">Review count stays when switching tabs: {reviews()}.</Text>
      <Button size="sm" onClick={() => setReviews((count) => count + 1)}>
        Review update
      </Button>
    </div>
  );
}

export function ControlledTabs() {
  const [value, setValue] = createSignal("overview");
  return (
    <div style={{ display: "grid", gap: "1rem" }}>
      <Text tone="muted">Current section: {value()}</Text>
      <Tabs.Root
        variant="segmented"
        value={value()}
        onValueChange={(details) => setValue(details.value)}
      >
        <Tabs.List aria-label="Controlled sections">
          <Tabs.Trigger value="overview">Overview</Tabs.Trigger>
          <Tabs.Trigger value="activity">Activity</Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content value="overview">
          <Button size="sm" onClick={() => setValue("activity")}>
            See activity
          </Button>
        </Tabs.Content>
        <Tabs.Content value="activity">
          <ActivityContent />
        </Tabs.Content>
      </Tabs.Root>
    </div>
  );
}
