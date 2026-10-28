import { Collapsible, type CollapsibleRootProps } from "../collapsible";

export type CollapsibleExampleProps = Pick<
  CollapsibleRootProps,
  "variant" | "disabled" | "defaultOpen"
>;

export function CollapsibleExample(props: CollapsibleExampleProps) {
  return (
    <Collapsible.Root {...props}>
      <Collapsible.Trigger>
        Project activity
        <Collapsible.Indicator />
      </Collapsible.Trigger>
      <Collapsible.Content>
        <p>The design team reviewed the navigation and shared feedback on the next milestone.</p>
        <p>Watch the project to receive updates as new milestones are published.</p>
      </Collapsible.Content>
    </Collapsible.Root>
  );
}
