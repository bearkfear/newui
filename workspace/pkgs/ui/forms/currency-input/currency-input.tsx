import { Show, useContext } from "solid-js";
import { InputGroup } from "../input-group/input-group";
import { renderDecimalInput } from "../number-input/decimal-input";
import { InputGroupContext, useTextControl } from "../text-control.context";
import { createCurrencyInput } from "./create-currency-input";
import { currencyInputBehavior } from "./currency-input.behavior";
import type { CurrencyInputProps } from "./currency-input.types";

export type { CurrencyInputProps } from "./currency-input.types";

/**
 * A currency-aware numeric input that stores exact major-unit decimal strings and formats them for
 * an independent locale/currency pair. `entryMode="minor-unit"` changes typed-digit behavior, not
 * the meaning of initial or pasted values. It creates its own InputGroup unless one is inherited.
 */
export function CurrencyInput(props: CurrencyInputProps) {
  const state = createCurrencyInput(props);
  const control = useTextControl(props);
  const inheritedGroup = useContext(InputGroupContext);
  if (inheritedGroup) return <CurrencyInputContent state={state} />;
  return (
    <InputGroup.Root
      size={control.size()}
      tone={control.tone()}
      rounded={control.rounded()}
      invalid={control.invalid()}
      valid={control.valid()}
      disabled={control.disabled()}
      readOnly={control.readOnly()}
      loading={control.loading()}
    >
      <CurrencyInputContent state={state} />
    </InputGroup.Root>
  );
}

function CurrencyInputContent(props: { state: ReturnType<typeof createCurrencyInput> }) {
  const state = props.state;
  const control = useTextControl(state.props);
  return (
    <>
      <Show when={state.configuration().positive.prefix.trim()}>
        {(prefix) => <InputGroup.Addon>{prefix()}</InputGroup.Addon>}
      </Show>
      {renderDecimalInput(state.props, currencyInputBehavior(state.configuration))}
      <Show when={state.configuration().positive.suffix.trim()}>
        {(suffix) => <InputGroup.Addon placement="end">{suffix()}</InputGroup.Addon>}
      </Show>
      <input
        type="hidden"
        name={state.name()}
        form={state.props.form}
        disabled={control.disabled()}
        value={state.submitted()}
      />
    </>
  );
}
