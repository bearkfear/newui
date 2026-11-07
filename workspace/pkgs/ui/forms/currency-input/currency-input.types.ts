import type { NumberInputProps } from "../number-input/number-input.types";
import type { CurrencyInputOptions, CurrencyValueDetails } from "./currency.types";

export type CurrencyInputProps = Omit<NumberInputProps, "onValueChange"> &
  CurrencyInputOptions & {
    onValueChange?: (details: CurrencyValueDetails) => void;
  };
