import type { NumberParseResult } from "../number-input/number.types";
import { formatNumber, parseLocalizedNumber } from "../number-input/number-format";
import { type CurrencyConfiguration, currencyConfiguration } from "./currency.configuration";
import type { CurrencyFormatOptions } from "./currency.types";

export function decorateCurrency(text: string, config: CurrencyConfiguration) {
  if (!text) return "";
  const negative = text.startsWith("-");
  const affix = negative ? config.negative : config.positive;
  return affix.prefix + (negative ? text.slice(1) : text) + affix.suffix;
}

/** Formats an exact major-unit decimal string as currency without floating-point conversion. */
export function formatCurrency(value: string, options: CurrencyFormatOptions): string {
  const config = currencyConfiguration(options);
  return decorateCurrency(formatNumber(value, config.numberOptions), config);
}

function affixPattern(text: string) {
  return text.replace(/[.*+?^${}()|[\]\\]/g, "\\$&").replace(/\s+/g, "[\\s]*");
}

export function parseCurrencyText(text: string, config: CurrencyConfiguration): NumberParseResult {
  if (text.length > 512) return { status: "invalid", reason: "precision" };
  const source = text.trim();
  const plain = parseLocalizedNumber(source, config.number);
  if (plain.status !== "invalid" || plain.reason !== "syntax") return plain;
  for (const negative of [false, true]) {
    const affix = negative ? config.negative : config.positive;
    if (!affix.prefix && !affix.suffix) continue;
    const pattern = new RegExp(`^${affixPattern(affix.prefix)}(.+?)${affixPattern(affix.suffix)}$`);
    const match = source.match(pattern);
    if (!match?.[1] || match[1].startsWith("-")) continue;
    return parseLocalizedNumber(`${negative ? "-" : ""}${match[1]}`, config.number);
  }
  return { status: "invalid", reason: "syntax" };
}

/** Parses configured currency decoration or localized amounts without guessing separators. */
export function parseCurrency(text: string, options: CurrencyFormatOptions): NumberParseResult {
  return parseCurrencyText(text, currencyConfiguration(options));
}
