import { createSignal, For, Show } from "solid-js";
import { Button } from "../../../actions/button/button";
import { Badge } from "../../../content/badge/badge";
import { Counter } from "../../../content/counter/counter";
import { Heading } from "../../../content/heading/heading";
import { Text } from "../../../content/text/text";
import { Tabs } from "../tabs";
import { TabIcon, type TabIconName } from "./tab-icon";
import type { TabsExampleProps } from "./tabs-example";

type RichTabsProps = TabsExampleProps & { icons?: boolean; counts?: boolean; iconOnly?: boolean };
const sections: { value: TabIconName; label: string }[] = [
  { value: "inbox", label: "Inbox" },
  { value: "bell", label: "Notifications" },
  { value: "archive", label: "Archive" },
];

export function RichTabs(props: RichTabsProps) {
  const [unread, setUnread] = createSignal(5);
  return (
    <Tabs.Root
      variant={props.variant}
      tone={props.tone}
      size={props.size}
      align={props.align}
      fullWidth={props.fullWidth}
      activationMode={props.activationMode}
      defaultValue="inbox"
    >
      <Tabs.List aria-label="Message folders">
        <For each={sections}>
          {(section) => (
            <RichTrigger
              section={section}
              options={props}
              count={section.value === "inbox" ? 128 : unread()}
            />
          )}
        </For>
        <RichTrigger
          section={{ value: "calendar", label: "Scheduled" }}
          options={props}
          count={3}
          disabled
        />
      </Tabs.List>
      <Tabs.Content value="inbox">
        <Text tone="muted">128 messages are waiting in your inbox.</Text>
      </Tabs.Content>
      <Tabs.Content value="bell">
        <NotificationActions
          unread={unread()}
          onReceive={() => setUnread((value) => value + 1)}
          onRead={() => setUnread(0)}
        />
      </Tabs.Content>
      <Tabs.Content value="archive">
        <Text tone="muted">Your saved conversations appear here.</Text>
      </Tabs.Content>
      <Tabs.Content value="calendar">Scheduling is unavailable.</Tabs.Content>
    </Tabs.Root>
  );
}

function NotificationActions(props: { unread: number; onReceive: () => void; onRead: () => void }) {
  return (
    <div style={{ display: "grid", gap: "0.75rem" }}>
      <Heading as="h3" size="6">
        Your notifications
      </Heading>
      <Text tone="muted" role="status">
        {props.unread} unread notifications. The counter disappears at zero.
      </Text>
      <div style={{ display: "flex", "flex-wrap": "wrap", gap: "0.5rem" }}>
        <Button size="sm" onClick={props.onReceive}>
          Receive notification
        </Button>
        <Button size="sm" variant="soft" onClick={props.onRead} disabled={props.unread === 0}>
          Mark all as read
        </Button>
      </div>
    </div>
  );
}

function RichTrigger(props: {
  section: { value: TabIconName; label: string };
  options: RichTabsProps;
  count: number;
  disabled?: boolean;
}) {
  const hasCount = () => props.options.counts && props.section.value !== "archive";
  const name = () =>
    hasCount() ? `${props.section.label}, ${props.count} unread` : props.section.label;
  return (
    <Tabs.Trigger
      value={props.section.value}
      disabled={props.disabled}
      aria-label={props.options.iconOnly ? name() : undefined}
    >
      <Show when={props.options.icons || props.options.iconOnly}>
        <TabIcon name={props.section.value} />
      </Show>
      <Show when={!props.options.iconOnly}>
        <span>{props.section.label}</span>
      </Show>
      <Show when={hasCount()}>
        <Counter
          value={props.count}
          tone={props.section.value === "inbox" ? "neutral" : "danger"}
          variant={props.section.value === "inbox" ? "soft" : "solid"}
          size="sm"
          label={`${props.count} unread`}
        />
      </Show>
      <Show when={!props.options.iconOnly && props.section.value === "archive"}>
        <Badge size="sm" tone="info" rounded>
          New
        </Badge>
      </Show>
    </Tabs.Trigger>
  );
}
