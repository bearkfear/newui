import type { NumberInputProps } from "../number-input/number-input.types";
import type { CurrencyInputOptions, CurrencyValueDetails } from "./currency.types";

/**
 * CurrencyInput stores exact major-unit decimal strings. `currency` chooses the ISO currency and
 * `locale` controls formatting independently; `entryMode` changes typed digits only, not initial or
 * pasted amounts. Change details use the same raw/formatted/status shape as NumberInput.
 */
export type CurrencyInputProps = Omit<NumberInputProps, "onValueChange"> &
  CurrencyInputOptions & {
    onValueChange?: (details: CurrencyValueDetails) => void;
  };
