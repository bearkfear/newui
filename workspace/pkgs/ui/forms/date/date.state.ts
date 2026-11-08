import { createSignal, onCleanup, untrack } from "solid-js";
import { bindTextControlReset } from "../text-control.reset";
import type { DateOptions, DateSelection } from "./date.types";
import { checkedSelection } from "./date.value";

export function createDateState(props: DateOptions, range: boolean) {
  const initial = untrack(() => [...checkedSelection(props.defaultValue ?? [], range)]);
  const [internal, setInternal] = createSignal<DateSelection>(initial);
  const [revision, setRevision] = createSignal(0);
  const value = () => checkedSelection(props.value ?? internal(), range);
  const change = (next: DateSelection) => {
    const dates = checkedSelection(next, range);
    if (props.value === undefined) setInternal(dates);
    props.onValueChange?.({
      value: dates,
      valueAsString: dates.map((date) => date?.toString() ?? ""),
    });
  };
  return {
    value,
    change,
    revision,
    clear: () => {
      change([]);
      setRevision((current) => current + 1);
    },
    register: (input: HTMLInputElement) => {
      let disposed = false;
      bindTextControlReset(
        input,
        () => {
          if (props.value === undefined) setInternal([...initial]);
          // Recreate segment editing state even when the committed selection did not change.
          setRevision((current) => current + 1);
        },
        () => disposed,
      );
      onCleanup(() => {
        disposed = true;
      });
    },
  };
}
