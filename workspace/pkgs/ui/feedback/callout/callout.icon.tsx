import type { JSX } from "solid-js";
import { Match, Switch, splitProps } from "solid-js";
import { type CalloutTone, useCalloutOptions } from "./callout.context";
import { calloutRecipe } from "./callout.recipe";

export type CalloutIconProps = JSX.HTMLAttributes<HTMLSpanElement>;
const styles = calloutRecipe();

function CalloutSymbol(props: { tone: CalloutTone }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="1.8"
      stroke-linecap="round"
      stroke-linejoin="round"
      aria-hidden="true"
    >
      <Switch
        fallback={
          <>
            <circle cx="12" cy="12" r="9" />
            <path d="M12 11v5m0-9v.01" />
          </>
        }
      >
        <Match when={props.tone === "success"}>
          <circle cx="12" cy="12" r="9" />
          <path d="m8 12 3 3 5-6" />
        </Match>
        <Match when={props.tone === "warning"}>
          <path d="m12 3 10 18H2L12 3Zm0 6v5m0 3v.01" />
        </Match>
        <Match when={props.tone === "danger"}>
          <circle cx="12" cy="12" r="9" />
          <path d="m9 9 6 6m0-6-6 6" />
        </Match>
      </Switch>
    </svg>
  );
}

export function CalloutIcon(props: CalloutIconProps) {
  const options = useCalloutOptions();
  const [local, rest] = splitProps(props, ["class", "children"]);
  return (
    <span {...rest} aria-hidden="true" class={styles.icon({ class: local.class })}>
      {local.children ?? <CalloutSymbol tone={options().tone} />}
    </span>
  );
}
