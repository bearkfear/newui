import { For } from "solid-js";
import { Accordion, type AccordionRootProps } from "../accordion";

export type AccordionExampleProps = Pick<
  AccordionRootProps,
  "variant" | "multiple" | "collapsible" | "disabled"
>;
const questions = [
  {
    value: "sharing",
    title: "Who can see this project?",
    body: "Workspace members can view shared projects. Review project permissions before publishing an update.",
  },
  {
    value: "notifications",
    title: "How do project notifications work?",
    body: "Watch a project to receive updates about its milestones. You can change this preference at any time.",
  },
  {
    value: "archive",
    title: "Can I restore an archived project?",
    body: "Archived projects can be restored by their owners.",
    disabled: true,
  },
] as const;

export function AccordionExample(props: AccordionExampleProps) {
  return (
    <Accordion.Root {...props} defaultValue={["sharing"]}>
      <For each={questions}>
        {(question) => (
          <Accordion.Item
            value={question.value}
            disabled={"disabled" in question ? question.disabled : undefined}
          >
            <Accordion.ItemHeading>
              <Accordion.ItemTrigger>
                {question.title}
                <Accordion.ItemIndicator />
              </Accordion.ItemTrigger>
            </Accordion.ItemHeading>
            <Accordion.ItemContent>
              <p>{question.body}</p>
            </Accordion.ItemContent>
          </Accordion.Item>
        )}
      </For>
    </Accordion.Root>
  );
}
