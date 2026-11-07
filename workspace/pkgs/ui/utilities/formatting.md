# Formatting

[Utilities](README.md)

## Intent

Format values for display consistently across components and consuming applications. Initial candidates include numbers, currencies, dates, and percentages.

## Proposed direction

Use platform internationalization APIs where suitable. Make locale, currency, time zone, and formatting options explicit where relevant. Avoid hidden application-wide settings and keep formatting independent of Solid rendering.

Formatting for display, parsing user input, and validating values are separate contracts. A formatted string should not silently replace the canonical value stored by a form.

## Open questions

- Initial supported formats and public API names.
- Locale and time zone defaults, including consistent server/client behavior.
- Handling of empty, invalid, and partial values.
- Whether any needs require an external dependency.

General internationalized formatting remains planned. Pattern-based text formatting is available through the Forms [maskText and unmaskText helpers](../forms/masked-input/text-helpers.md), which share MaskedInput's token configuration without depending on a component or DOM element.
