import { Ban, CircleAlert, CircleCheck, LockKeyhole, Upload } from "lucide-solid";
import { type JSX, Match, Switch } from "solid-js";
import { LoadingIndicator } from "../../feedback/loading/loading.indicator";
import { useFileInputState } from "./file-input.context";

export type FileInputIndicatorProps = Omit<JSX.HTMLAttributes<HTMLSpanElement>, "children">;

export function FileInputIndicator(props: FileInputIndicatorProps) {
  const state = useFileInputState();
  return (
    <span {...props} data-part="indicator" aria-hidden="true">
      <Switch fallback={<Upload size={18} strokeWidth={1.75} />}>
        <Match when={state() === "disabled"}>
          <Ban size={18} strokeWidth={1.75} />
        </Match>
        <Match when={state() === "readonly"}>
          <LockKeyhole size={18} strokeWidth={1.75} />
        </Match>
        <Match when={state() === "loading"}>
          <LoadingIndicator size="sm" />
        </Match>
        <Match when={state() === "invalid"}>
          <CircleAlert size={18} strokeWidth={1.75} />
        </Match>
        <Match when={state() === "valid"}>
          <CircleCheck size={18} strokeWidth={1.75} />
        </Match>
      </Switch>
    </span>
  );
}
