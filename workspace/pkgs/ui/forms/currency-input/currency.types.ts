import type { NumberFormatOptions, NumberValueDetails } from "../number-input/number.types";

/**
 * Formatting options for currency helpers and CurrencyInput. `currency` is an ISO 4217 code;
 * `locale` independently selects number separators and placement conventions.
 */
export type CurrencyFormatOptions = NumberFormatOptions & {
  /** ISO 4217 currency code. Independent of the display locale. */
  currency: string;
  currencyDisplay?: "symbol" | "narrowSymbol" | "code" | "none";
};

/**
 * Editing strategy for newly typed digits. `minor-unit` shifts each digit by the currency's fixed
 * fractional scale; initial and pasted values still represent complete major-unit amounts.
 */
export type CurrencyEntryMode = "decimal" | "minor-unit";
/** Value details emitted by CurrencyInput, using the shared canonical decimal contract. */
export type CurrencyValueDetails = NumberValueDetails;

export type CurrencyInputOptions = CurrencyFormatOptions & {
  /** Decimal entry by default; `minor-unit` shifts typed digits by currency precision. */
  entryMode?: CurrencyEntryMode;
};
