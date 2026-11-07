import { createMemo, createSignal, mergeProps, splitProps, untrack } from "solid-js";
import { normalizeDecimal } from "../number-input/decimal";
import { formatDecimal } from "../number-input/number-format";
import { currencyInputConfiguration } from "./currency.configuration";
import type { CurrencyValueDetails } from "./currency.types";
import { decorateCurrency } from "./currency-format";
import type { CurrencyInputProps } from "./currency-input.types";

export function createCurrencyInput(props: CurrencyInputProps) {
  const [local, rest] = splitProps(props, [
    "currency",
    "currencyDisplay",
    "entryMode",
    "name",
    "submitValue",
    "onValueChange",
  ]);
  const configuration = createMemo(() => currencyInputConfiguration(props));
  const [raw, setRaw] = createSignal(
    untrack(() => normalizeDecimal(props.value ?? props.defaultValue ?? "") ?? ""),
  );
  const effective = mergeProps(rest, {
    get minimumFractionDigits() {
      return configuration().number.minimumFractionDigits;
    },
    get maximumFractionDigits() {
      return configuration().number.maximumFractionDigits;
    },
    get inputmode() {
      return (
        props.inputmode ??
        (local.entryMode === "minor-unit" || configuration().number.maximumFractionDigits === 0
          ? "numeric"
          : "decimal")
      );
    },
    onValueChange: (details: CurrencyValueDetails) => {
      setRaw(details.rawValue);
      local.onValueChange?.({
        ...details,
        formattedValue: decorateCurrency(details.formattedValue, configuration()),
      });
    },
  });
  const currentRaw = () => normalizeDecimal(props.value ?? raw()) ?? "";
  const submitted = createMemo(() => {
    const value = currentRaw();
    if (!value || local.submitValue === "raw") return value;
    return decorateCurrency(formatDecimal(value, configuration().number), configuration());
  });
  return { configuration, props: effective, name: () => local.name, submitted };
}
