# Number helpers

[NumberInput](README.md) · [Formatting](../../utilities/formatting.md)

Import formatNumber, parseNumber, validateNumberFormatOptions, numberFormatLimits and their types from @egcs/newui/numbers. This entry has no component, Solid, IMask, style or DOM dependencies and supports Node. The same exports are available from the main and forms entries.

The same entry exports [formatCurrency, parseCurrency and currency configuration](../currency-input/currency-helpers.md).

```ts
import { formatNumber, parseNumber } from "@egcs/newui/numbers";

const options = { locale: "pt-BR", maximumFractionDigits: 4 };
formatNumber("12345678901234567890.1234", options);
// "12.345.678.901.234.567.890,1234"
parseNumber("1.234,56", options);
// { status: "valid", value: "1234.56" }
parseNumber("", options); // { status: "empty", value: "" }
parseNumber("invalid", options); // { status: "invalid", reason: "syntax" }
```

Canonical values are normalized: leading integer zeros, trailing fractional zeros and the sign on zero are removed. The configured minimum fraction digits restores display padding. No helper rounds, truncates significant fractional digits or coerces invalid text to zero.

formatNumber accepts an empty or canonical decimal string and returns displayed text. Invalid syntax throws TypeError; sign, precision and range violations throw RangeError. parseNumber accepts localized text, trims surrounding whitespace and returns a discriminated result. Invalid reasons are syntax, precision, negative and range. Partial editor states such as "-" and "12," are invalid helper inputs; NumberInput handles them separately while editing.

Grouping must match the locale when present; ungrouped digits are accepted. A dot in canonical values always means a decimal separator. In localized parser input it follows the locale, so pt-BR text "1.234" means canonical "1234". Currency symbols, exponent notation, accounting parentheses and automatic locale detection are outside this increment.

validateNumberFormatOptions accepts unknown backend configuration and throws TypeError or RangeError for invalid options. See NumberInput for defaults and supported locales/limits. Helpers bound source length before parsing and preserve decimal strings independently of JavaScript number precision.
