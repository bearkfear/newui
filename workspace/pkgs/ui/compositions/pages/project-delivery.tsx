import { Check, Circle } from "lucide-solid";
import { createSignal, For } from "solid-js";
import { Button, Callout, Card, Progress, Steps } from "../../index";

const tasks = [
  { id: "research", title: "Synthesize customer interviews", owner: "Jamie · Research" },
  { id: "navigation", title: "Review the new navigation", owner: "Morgan · Design" },
  { id: "accessibility", title: "Complete accessibility review", owner: "Alex · Engineering" },
  { id: "handoff", title: "Prepare the release handoff", owner: "Sam · Product" },
];

export function ProjectTasks() {
  const [completed, setCompleted] = createSignal(["research", "navigation"]);
  const toggle = (id: string) =>
    setCompleted((current) =>
      current.includes(id) ? current.filter((item) => item !== id) : [...current, id],
    );
  return (
    <Card.Root>
      <Card.Header>
        <Card.Title>The next small steps</Card.Title>
        <Card.Description>A focused list for the week ahead.</Card.Description>
      </Card.Header>
      <Card.Content>
        <div class="example-stack">
          <Progress
            label={`${completed().length} of ${tasks.length} tasks complete`}
            value={(completed().length / tasks.length) * 100}
            size="sm"
          />
          <ul class="example-list">
            <For each={tasks}>
              {(task) => (
                <li
                  class="example-task"
                  data-complete={completed().includes(task.id) ? "" : undefined}
                >
                  <Button
                    iconOnly
                    size="sm"
                    tone={completed().includes(task.id) ? "success" : "neutral"}
                    variant="soft"
                    aria-pressed={completed().includes(task.id)}
                    aria-label={`Complete: ${task.title}`}
                    onClick={() => toggle(task.id)}
                  >
                    {completed().includes(task.id) ? <Check /> : <Circle />}
                  </Button>
                  <div>
                    <p>{task.title}</p>
                    <small>{task.owner}</small>
                  </div>
                </li>
              )}
            </For>
          </ul>
        </div>
      </Card.Content>
    </Card.Root>
  );
}

const releaseStages = [
  {
    title: "Review",
    description:
      "Bring the final designs, content, and decisions together. Make sure every open question has an owner.",
  },
  {
    title: "Prepare",
    description:
      "Confirm the support notes, rollback plan, and release checklist. Your team is nearly there.",
  },
  {
    title: "Publish",
    description:
      "Everything is ready. Complete this step to mark the release as shipped in this local workspace.",
  },
];

export function ProjectDelivery() {
  return (
    <Card.Root>
      <Card.Header>
        <Card.Title>A clear path to launch</Card.Title>
        <Card.Description>Move through the release checklist at your own pace.</Card.Description>
      </Card.Header>
      <Card.Content>
        <Steps.Root count={3} defaultStep={0} linear>
          <Steps.List aria-label="Release checklist">
            <For each={releaseStages}>
              {(stage, index) => (
                <Steps.Item index={index()}>
                  <Steps.Trigger>
                    <Steps.Indicator />
                    <Steps.Label>
                      <Steps.Title>{stage.title}</Steps.Title>
                    </Steps.Label>
                  </Steps.Trigger>
                  <Steps.Separator />
                </Steps.Item>
              )}
            </For>
          </Steps.List>
          <For each={releaseStages}>
            {(stage, index) => (
              <Steps.Content index={index()}>
                <div class="example-stack">
                  <h3 class="example-section-title">{stage.title}</h3>
                  <p class="example-muted">{stage.description}</p>
                </div>
              </Steps.Content>
            )}
          </For>
          <Steps.CompletedContent>
            <Callout.Root tone="success" role="status">
              <Callout.Icon />
              <Callout.Content>
                <Callout.Title>Ready for its next chapter.</Callout.Title>
                <Callout.Description>The release has been marked as shipped.</Callout.Description>
              </Callout.Content>
            </Callout.Root>
          </Steps.CompletedContent>
          <Steps.Actions>
            <Steps.PrevTrigger>Back</Steps.PrevTrigger>
            <Steps.NextTrigger>Complete step</Steps.NextTrigger>
          </Steps.Actions>
        </Steps.Root>
      </Card.Content>
    </Card.Root>
  );
}
