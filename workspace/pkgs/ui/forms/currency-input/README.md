# CurrencyInput

[Forms](../README.md) · [NumberInput](../number-input/README.md) · [Currency helpers](currency-helpers.md)

CurrencyInput shares NumberInput's exact decimal strings, Field associations, native attributes/events, refs, inherited states, alignment, editing history and sign toggle. It adds independent currency/locale configuration and decimal or automatic minor-unit entry. Currency changes never perform exchange-rate conversion.

```tsx
<CurrencyInput locale="pt-BR" currency="BRL" defaultValue="1234.56" />;
<CurrencyInput locale="pt-BR" currency="BRL" entryMode="minor-unit" />;
```

## Values and modes

value/defaultValue and rawValue always describe major units: "1234.56" means one thousand two hundred thirty-four and fifty-six hundredths in either mode. Empty stays distinct from zero. Controlled forms echo rawValue through value; initial/external updates do not emit editing callbacks.

entryMode="decimal" is the default: typing 1234 means 1234 major units, with fractional zeros completed on blur. entryMode="minor-unit" shifts typed digits by the configured fixed fractional scale: 1234 becomes 12.34 for BRL or 1.234 for KWD. Decimal separators are fixed decoration in this mode. Both initial and pasted values are complete major-unit amounts, so pasting 1234 produces 1234.00 for BRL. This differs intentionally from entering four individual digits in automatic mode.

IMask retains responsibility for selection, native composition, deletion and history. MinorUnitMask specializes its integer editing with a fixed visible radix and exact string scaling. Ark's floating-point numeric path remains unsuitable for this precision contract; Ark Field.Input owns field associations. No spinbutton role or stepper behavior is added.

The - key toggles the entire sign anywhere in the amount while preserving selection, as in NumberInput. An optional composed ± action serves mobile keyboards without that key. Disabled, readonly and allowNegative=false prevent sign changes. Backspacing a zero in automatic mode can clear the amount completely.

## Configuration and composition

currency is required and accepts a three-letter currency code, normalized to uppercase. locale defaults explicitly to en-US. Fractional defaults come from Intl currency metadata (BRL/USD/EUR: 2, JPY: 0, KWD: 3); minimumFractionDigits and maximumFractionDigits override them. Automatic entry requires equal minimum and maximum counts. There is no rounding or silent truncation of external values.

NumberInput's grouping, Latin-digit locale support, precision limits, min/max, textAlign and states apply. A reactive change incompatible with the current precision throws instead of discarding money. Changing locale, currency or entry mode preserves the canonical amount and input element and starts a new editing history.

currencyDisplay accepts symbol (default), narrowSymbol, code or none. The currency decoration is a fixed InputGroup addon, placed before/after the amount according to the locale. The minus sign remains with the editable number. formattedValue and formatted submission use the locale's complete currency placement, including its negative sign and spacing.

A standalone CurrencyInput creates an InputGroup. Inside an existing InputGroup it contributes its addon and input directly, allowing icons, custom prefix/suffix text and buttons without nested shells. Use currencyDisplay="none" when supplying your own currency decoration. Styling is inherited from NumberInput and InputGroup.

## Paste and forms

Paste accepts plain localized numbers or the configured currency symbol/code and placement. It rejects other symbols, malformed grouping and excess precision. Full amounts preserve their major-unit meaning in either mode; replacing part of an existing value inserts an amount fragment within the remaining capacity. Separators are never guessed. A symbol shared by several currencies cannot identify a currency; configuration determines its meaning.

submitValue="formatted" is the default; submitValue="raw" submits the canonical major-unit string. One named hidden input owns submission, including external form association and inherited disabled state. The visible input remains the Field-associated editing/validation control. Currency-formatted submission includes the symbol even though it is visually a separate addon.

Native required, incomplete/out-of-range validation, controlled/uncontrolled reset and reset cancellation follow NumberInput. Out-of-range amounts remain editable and fail native validity; they are not clamped. Readonly values remain submittable. Use onValueChange for accepted currency details. Native handlers are forwarded and cancellation is respected; normalized currency pastes and sign toggles do not dispatch synthetic input events.

## Storybook review

Open Forms / Currency Input: Default, Locales And Currencies, Entry Modes, Controlled, Composition, Precision And States, Native Submission And Reset, Helpers, Automatic Cents, Dark and Mobile. Review typing, real clipboard paste, selection replacement, empty/zero, sign toggling, undo/redo, initial/external values and configuration changes.

Exploratory Chromium review covers automatic digit progression, backspace, selection-preserving sign toggles, undo, real clipboard amounts, rejected symbols/precision, reactive mode/locale/currency, large precise values, native submission/reset and composition without nested groups. No automated tests were added. Actual iPhone keyboards, IME and other browsers remain review items.
