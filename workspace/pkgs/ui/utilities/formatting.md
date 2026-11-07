# Formatting

[Utilities](README.md)

## Locale-aware display

Use [formatNumber and parseNumber](../forms/number-input/number-helpers.md), plus [formatCurrency and parseCurrency](../forms/currency-input/currency-helpers.md), from `@egcs/newui/numbers` for exact decimal strings with configurable locale, currency, grouping and precision. They share the input components' decimal contract without UI or DOM dependencies. Date helpers are not implemented; applications can use platform internationalization APIs with explicit locale and time zone options.

Keep formatting independent of rendering and use consistent server/client settings. Handle empty or invalid values explicitly. Display formatting, parsing input, and validating business rules have separate responsibilities; preserve canonical values in application state.

## Pattern-based text

Use [maskText and unmaskText](../forms/masked-input/text-helpers.md) from `@egcs/newui/masking` for pattern-based string formatting. They share MaskedInput's configurable tokens without requiring a component or DOM element.

Use [MaskedInput](../forms/masked-input/README.md) when editing, selection, and form participation are also needed. Masks filter and format characters; they do not validate documents, dates, or business rules.
