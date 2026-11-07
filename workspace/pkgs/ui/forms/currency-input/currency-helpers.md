# Currency helpers

[CurrencyInput](README.md) · [Number helpers](../number-input/number-helpers.md)

Import formatCurrency, parseCurrency, validateCurrencyFormatOptions and CurrencyFormatOptions from @egcs/newui/numbers, @egcs/newui/forms or the main entry. The numbers entry stays independent of components, Solid, IMask, styles and the DOM and supports Node.

```ts
import { formatCurrency, parseCurrency } from "@egcs/newui/numbers";

const options = { locale: "pt-BR", currency: "BRL" };
formatCurrency("1234.56", options); // "R$\u00a01.234,56"
parseCurrency("R$ 1.234,56", options); // { status: "valid", value: "1234.56" }
parseCurrency("-R$ 1.234,56", options); // { status: "valid", value: "-1234.56" }
parseCurrency("1.234,56", options); // { status: "valid", value: "1234.56" }
parseCurrency("", options); // { status: "empty", value: "" }
parseCurrency("US$ 1.234,56", options); // { status: "invalid", reason: "syntax" }
```

Formatting receives canonical major-unit strings, preserves significant decimal digits, pads the configured minimum and places the currency/sign through Intl metadata. Empty stays empty. Invalid canonical syntax throws TypeError; precision, sign and range violations throw RangeError. These helpers never round, calculate exchange rates or convert monetary values to JavaScript number.

Parsing accepts the configured currency decoration or no decoration. Whitespace in the currency gap may be regular or nonbreaking; numeric grouping must match the configured locale. Only the configured symbol/code is recognized; a shared symbol such as $ does not identify which currency an amount belongs to. The caller supplies that currency.

parseCurrency returns the same empty/valid/invalid union as parseNumber, with syntax, precision, negative or range reasons. Returned values are normalized decimal strings. Zero is valid and distinct from empty or invalid. Partial editing states, accounting parentheses, exponent notation, other numbering systems and automatic currency/locale detection are outside the contract.

validateCurrencyFormatOptions checks unknown configuration and throws TypeError or RangeError. It validates formatting options; component entryMode is validated separately by CurrencyInput. Currency code validation checks the three-letter syntax accepted by Intl; it does not maintain a list of legal tender.
