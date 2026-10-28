import { For } from "solid-js";
import { Loading } from "../loading";

export function LoadingSizes() {
  return (
    <div style={{ display: "flex", "align-items": "center", "flex-wrap": "wrap", gap: "32px" }}>
      <For each={["sm", "md", "lg"] as const}>
        {(size) => <Loading size={size} showLabel label={`${size.toUpperCase()} loading`} />}
      </For>
    </div>
  );
}
