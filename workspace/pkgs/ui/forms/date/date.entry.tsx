import { Show } from "solid-js";
import { useDateContext } from "./date.context";
import { DateSegments } from "./date.segments";
import type { DateEntryProps } from "./date.types";

/** A complete segmented entry; ref points to the accessible segment group. */
export function DateEntry(props: DateEntryProps) {
  const date = useDateContext();
  return (
    <Show when={date.state.revision() + 1} keyed>
      {(_revision) => <DateSegments {...props} />}
    </Show>
  );
}
