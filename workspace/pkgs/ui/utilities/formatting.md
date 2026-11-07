# Formatting

[Utilities](README.md)

## Locale-aware display

newui does not export general number, currency, or date formatters. Applications can use platform internationalization APIs such as `Intl.NumberFormat` and `Intl.DateTimeFormat`, with explicit locale, currency, and time zone options.

Keep formatting independent of rendering and use consistent server/client settings. Handle empty or invalid values explicitly. Display formatting, parsing input, and validating business rules have separate responsibilities; preserve canonical values in application state.

## Pattern-based text

Use [maskText and unmaskText](../forms/masked-input/text-helpers.md) from `@egcs/newui/masking` for pattern-based string formatting. They share MaskedInput's configurable tokens without requiring a component or DOM element.

Use [MaskedInput](../forms/masked-input/README.md) when editing, selection, and form participation are also needed. Masks filter and format characters; they do not validate documents, dates, or business rules.
