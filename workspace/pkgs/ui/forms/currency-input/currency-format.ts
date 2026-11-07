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

/** Format exact major-unit decimal strings; never convert monetary values to number. */
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

/** Accept the configured currency decoration or a plain localized amount. No currency conversion. */
export function parseCurrency(text: string, options: CurrencyFormatOptions): NumberParseResult {
  return parseCurrencyText(text, currencyConfiguration(options));
}
