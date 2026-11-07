import { numberConfiguration } from "../number-input/number.configuration";
import type { NumberFormatOptions } from "../number-input/number.types";
import type { CurrencyFormatOptions, CurrencyInputOptions } from "./currency.types";

const numericParts = new Set(["integer", "group", "decimal", "fraction"]);

function copyNumberOption<Key extends keyof NumberFormatOptions>(
  target: NumberFormatOptions,
  source: NumberFormatOptions,
  key: Key,
) {
  const value = source[key];
  if (value !== undefined) target[key] = value;
}

function numberOptionsForCurrency(
  options: CurrencyFormatOptions,
  minimumFractionDigits: number,
  maximumFractionDigits: number,
) {
  const result: NumberFormatOptions = { minimumFractionDigits, maximumFractionDigits };
  for (const key of [
    "locale",
    "useGrouping",
    "maximumIntegerDigits",
    "allowNegative",
    "min",
    "max",
  ] as const) {
    copyNumberOption(result, options, key);
  }
  return result;
}

function affixes(parts: Intl.NumberFormatPart[]) {
  const start = parts.findIndex((part) => numericParts.has(part.type));
  let end = parts.length - 1;
  while (end >= start && !numericParts.has(parts[end]?.type ?? "")) end -= 1;
  return {
    prefix: parts
      .slice(0, start)
      .map((part) => part.value)
      .join(""),
    suffix: parts
      .slice(end + 1)
      .map((part) => part.value)
      .join(""),
  };
}

export function currencyConfiguration(options: CurrencyFormatOptions) {
  if (typeof options.currency !== "string" || !/^[A-Za-z]{3}$/.test(options.currency)) {
    throw new TypeError("Currency must be a three-letter ISO 4217 code.");
  }
  const currency = options.currency.toUpperCase();
  const display = options.currencyDisplay ?? "symbol";
  if (!["symbol", "narrowSymbol", "code", "none"].includes(display)) {
    throw new TypeError("Invalid currency display option.");
  }
  const formatter = new Intl.NumberFormat(options.locale ?? "en-US", {
    style: "currency",
    currency,
    numberingSystem: "latn",
    currencyDisplay: display === "none" ? "symbol" : display,
  });
  const defaults = formatter.resolvedOptions();
  const maximumFractionDigits =
    options.maximumFractionDigits ??
    Math.max(options.minimumFractionDigits ?? 0, defaults.maximumFractionDigits ?? 2);
  const minimumFractionDigits =
    options.minimumFractionDigits ??
    Math.min(defaults.minimumFractionDigits ?? 2, maximumFractionDigits);
  const numberOptions = numberOptionsForCurrency(
    options,
    minimumFractionDigits,
    maximumFractionDigits,
  );
  const number = numberConfiguration(numberOptions);
  const positive =
    display === "none" ? { prefix: "", suffix: "" } : affixes(formatter.formatToParts(1));
  const negative =
    display === "none" ? { prefix: "-", suffix: "" } : affixes(formatter.formatToParts(-1));
  return { currency, numberOptions, number, positive, negative };
}

export function currencyInputConfiguration(options: CurrencyInputOptions) {
  const config = currencyConfiguration(options);
  const entryMode = options.entryMode ?? "decimal";
  if (entryMode !== "decimal" && entryMode !== "minor-unit") {
    throw new TypeError("Currency entryMode must be decimal or minor-unit.");
  }
  if (
    entryMode === "minor-unit" &&
    config.number.minimumFractionDigits !== config.number.maximumFractionDigits
  ) {
    throw new RangeError("Minor-unit entry requires equal minimum and maximum fraction digits.");
  }
  return { ...config, entryMode };
}

export function validateCurrencyFormatOptions(
  options: unknown,
): asserts options is CurrencyFormatOptions {
  if (
    typeof options !== "object" ||
    options === null ||
    !("currency" in options) ||
    Array.isArray(options)
  ) {
    throw new TypeError("Currency configuration must be an object with a currency code.");
  }
  currencyConfiguration(options as CurrencyFormatOptions);
}

export type CurrencyConfiguration = ReturnType<typeof currencyConfiguration>;
