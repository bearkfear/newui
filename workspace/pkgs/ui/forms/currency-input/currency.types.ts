import type { NumberFormatOptions, NumberValueDetails } from "../number-input/number.types";

export type CurrencyFormatOptions = NumberFormatOptions & {
  /** ISO 4217 currency code. Independent of the display locale. */
  currency: string;
  currencyDisplay?: "symbol" | "narrowSymbol" | "code" | "none";
};

export type CurrencyEntryMode = "decimal" | "minor-unit";
export type CurrencyValueDetails = NumberValueDetails;

export type CurrencyInputOptions = CurrencyFormatOptions & {
  /** Decimal entry by default. Minor-unit entry shifts digits by the fixed fractional scale. */
  entryMode?: CurrencyEntryMode;
};
