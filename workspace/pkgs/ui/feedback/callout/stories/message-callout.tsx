import { createSignal, Show } from "solid-js";
import { Button } from "../../../actions/button/button";
import { Callout } from "../callout";
import type { CalloutExampleProps } from "./callout-example";

export function MessageCallout(props: CalloutExampleProps & { onDismiss?: () => void }) {
  const [reviewed, setReviewed] = createSignal(false);
  return (
    <Callout.Root variant="message" tone={props.tone}>
      <Show when={props.showTitle ?? true}>
        <Callout.Header>
          <Show when={props.showIcon ?? true}>
            <Callout.Icon />
          </Show>
          <Callout.Content>
            <Callout.Title>{props.title ?? "Workspace update"}</Callout.Title>
          </Callout.Content>
          <Show when={props.onDismiss}>
            <Callout.CloseButton onClick={() => props.onDismiss?.()} />
          </Show>
        </Callout.Header>
      </Show>
      <Callout.Body>
        <Callout.Description>
          {props.description ??
            "Share project updates and important milestones with everyone in your workspace."}
        </Callout.Description>
        <Callout.Actions>
          <Button
            size="sm"
            variant="outline"
            tone="neutral"
            aria-pressed={reviewed()}
            onClick={() => setReviewed(!reviewed())}
          >
            {reviewed() ? "Project reviewed" : "Review project"}
          </Button>
        </Callout.Actions>
      </Callout.Body>
    </Callout.Root>
  );
}
