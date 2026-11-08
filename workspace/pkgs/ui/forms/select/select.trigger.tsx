import { Select as ArkSelect } from "@ark-ui/solid/select";
import { ChevronDown, X } from "lucide-solid";
import { Show, splitProps } from "solid-js";
import { LoadingIndicator } from "../../feedback/loading/loading.indicator";
import { textControlRecipe } from "../text-control.recipe";
import { useSelectVisual } from "./select.context";

export type SelectTriggerProps = ArkSelect.TriggerProps;

export function SelectTrigger(props: SelectTriggerProps) {
  const [local, rest] = splitProps(props, ["class", "aria-describedby", "aria-busy"]);
  const control = useSelectVisual();
  return (
    <ArkSelect.Trigger
      {...rest}
      aria-describedby={control.describedBy(local["aria-describedby"])}
      aria-busy={control.loading() || local["aria-busy"]}
      aria-readonly={control.readOnly() || undefined}
      data-valid={control.valid() ? "" : undefined}
      data-loading={control.loading() ? "" : undefined}
      class={textControlRecipe({
        size: control.size(),
        tone: control.tone(),
        rounded: control.rounded(),
        class: ["nui-select-trigger", local.class].filter(Boolean).join(" "),
      })}
    />
  );
}

export function SelectIndicator(props: ArkSelect.IndicatorProps) {
  const [local, rest] = splitProps(props, ["class", "children"]);
  const control = useSelectVisual();
  return (
    <ArkSelect.Indicator
      {...rest}
      aria-hidden="true"
      class={partClass("nui-select-indicator", local.class)}
    >
      <Show when={control.loading()} fallback={local.children ?? <ChevronDown size={16} />}>
        <LoadingIndicator size="sm" />
      </Show>
    </ArkSelect.Indicator>
  );
}

export function SelectClearTrigger(props: ArkSelect.ClearTriggerProps) {
  const [local, rest] = splitProps(props, ["class", "children"]);
  const control = useSelectVisual();
  return (
    <ArkSelect.ClearTrigger
      aria-label="Clear selection"
      {...rest}
      disabled={control.disabled() || control.readOnly() || props.disabled}
      class={partClass("nui-select-clear nui-focus-ring", local.class)}
    >
      <Show when={local.children} fallback={<X size={14} aria-hidden="true" />}>
        {local.children}
      </Show>
    </ArkSelect.ClearTrigger>
  );
}

function partClass(base: string, extra: string | undefined) {
  return [base, extra].filter(Boolean).join(" ");
}
