import { For } from "solid-js";
import { Dynamic } from "solid-js/web";
import { ProgressCircle } from "../../progress-circle/progress-circle";
import { Progress } from "../progress";

export function ProgressTones(props: { circle?: boolean }) {
  return (
    <div style={{ display: "flex", "flex-wrap": "wrap", gap: "24px", "align-items": "start" }}>
      <For each={["neutral", "primary", "info", "success", "warning", "danger"] as const}>
        {(tone) => (
          <div style={{ width: props.circle ? "auto" : "min(100%, 20rem)" }}>
            <Dynamic
              component={props.circle ? ProgressCircle : Progress}
              value={65}
              tone={tone}
              label={`${tone} progress`}
            />
          </div>
        )}
      </For>
    </div>
  );
}

export function ProgressSizes(props: { circle?: boolean }) {
  return (
    <div style={{ display: "flex", "flex-wrap": "wrap", "align-items": "center", gap: "32px" }}>
      <For each={["sm", "md", "lg"] as const}>
        {(size) => (
          <div style={{ width: props.circle ? "auto" : "min(100%, 20rem)" }}>
            <Dynamic
              component={props.circle ? ProgressCircle : Progress}
              value={45}
              size={size}
              label={`${size.toUpperCase()} progress`}
            />
          </div>
        )}
      </For>
    </div>
  );
}

export function ProgressStates(props: { circle?: boolean }) {
  return (
    <div style={{ display: "flex", "flex-wrap": "wrap", gap: "32px", "align-items": "start" }}>
      <For each={[0, 45, 100, null]}>
        {(value) => (
          <div style={{ width: props.circle ? "auto" : "min(100%, 20rem)" }}>
            <Dynamic
              component={props.circle ? ProgressCircle : Progress}
              value={value}
              label={value === null ? "Preparing upload…" : `Upload at ${value}%`}
              tone={value === 100 ? "success" : "primary"}
            />
          </div>
        )}
      </For>
    </div>
  );
}
