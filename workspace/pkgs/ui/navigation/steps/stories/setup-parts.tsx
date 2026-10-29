import { For, type JSX, Show } from "solid-js";
import { Button } from "../../../actions/button/button";
import { Card } from "../../../content/card/card";
import { Heading } from "../../../content/heading/heading";
import { Text } from "../../../content/text/text";
import { Steps } from "../steps";

export const setupStages = [
  {
    title: "Workspace",
    description: "Review workspace details",
    content:
      "Your workspace brings projects, teammates, and updates together. Review the overview, then continue to configuration.",
  },
  {
    title: "Configuration",
    description: "Choose how to get started",
    content:
      "Your workspace uses shared team defaults for notifications and project visibility. You can adjust these settings later.",
  },
  {
    title: "Review",
    description: "Confirm and finish",
    content:
      "Review the workspace configuration. Finish setup to make the workspace available to your team, or go back to make changes.",
  },
];

export function SetupList(props: { descriptions?: boolean }) {
  return (
    <Steps.List aria-label="Workspace setup">
      <For each={setupStages}>
        {(stage, index) => (
          <Steps.Item index={index()}>
            <Steps.Trigger>
              <Steps.Indicator />
              <Steps.Label>
                <Steps.Title>{stage.title}</Steps.Title>
                <Show when={props.descriptions !== false}>
                  <Steps.Description>{stage.description}</Steps.Description>
                </Show>
              </Steps.Label>
            </Steps.Trigger>
            <Steps.Separator />
          </Steps.Item>
        )}
      </For>
    </Steps.List>
  );
}

function SetupSurface(props: { enabled?: boolean; children: JSX.Element }) {
  return (
    <Show when={props.enabled} fallback={props.children}>
      <Card.Root>
        <Card.Content>{props.children}</Card.Content>
      </Card.Root>
    </Show>
  );
}

export function SetupContent(props: { surface?: boolean }) {
  return (
    <>
      <For each={setupStages}>
        {(stage, index) => (
          <Steps.Content index={index()}>
            <SetupSurface enabled={props.surface ?? false}>
              <Heading as="h2" size="5">
                {stage.title}
              </Heading>
              <Text style={{ "margin-top": "0.5rem" }}>{stage.content}</Text>
            </SetupSurface>
          </Steps.Content>
        )}
      </For>
      <SetupCompleted surface={props.surface ?? false} />
    </>
  );
}

export function SetupCompleted(props: { surface?: boolean }) {
  return (
    <Steps.CompletedContent>
      <SetupSurface enabled={props.surface ?? false}>
        <Heading as="h2" size="5">
          Setup complete
        </Heading>
        <Text style={{ "margin-top": "0.5rem" }}>
          Your workspace is ready. You can return to the previous step or start again.
        </Text>
      </SetupSurface>
    </Steps.CompletedContent>
  );
}

export function SetupControls() {
  return (
    <Steps.Context>
      {(steps) => (
        <Steps.Actions>
          <Steps.PrevTrigger>Back</Steps.PrevTrigger>
          <Steps.NextTrigger>
            {steps().isCompleted
              ? "Finished"
              : steps().value === setupStages.length - 1
                ? "Finish setup"
                : "Next"}
          </Steps.NextTrigger>
          <Button variant="ghost" onClick={() => steps().resetStep()}>
            Start again
          </Button>
          <Text
            role="status"
            aria-atomic="true"
            size="7"
            tone="muted"
            style={{ "flex-basis": "100%" }}
          >
            {steps().isCompleted
              ? "All steps completed."
              : `Step ${steps().value + 1} of ${setupStages.length}: ${setupStages[steps().value]?.title}.`}
          </Text>
        </Steps.Actions>
      )}
    </Steps.Context>
  );
}
