import { Show } from "solid-js";
import { Callout, type CalloutRootProps } from "../callout";

export type CalloutExampleProps = Pick<CalloutRootProps, "tone" | "variant"> & {
  showIcon?: boolean;
  showTitle?: boolean;
  title?: string;
  description?: string;
};

export function CalloutExample(props: CalloutExampleProps) {
  return (
    <Callout.Root tone={props.tone} variant={props.variant}>
      <Show when={props.showIcon ?? true}>
        <Callout.Icon />
      </Show>
      <Callout.Content>
        <Show when={props.showTitle ?? true}>
          <Callout.Title>{props.title ?? "Keep your team up to date"}</Callout.Title>
        </Show>
        <Callout.Description>
          {props.description ??
            "Share project updates and important milestones with everyone in your workspace."}
        </Callout.Description>
      </Callout.Content>
    </Callout.Root>
  );
}
