# NumberInput

[Forms](../README.md) · [Number helpers](number-helpers.md)

NumberInput composes Input, preserving Field and InputGroup associations, native attributes/events, refs and inherited states. Right alignment and tabular digits are defaults; textAlign accepts left, center or right. [CurrencyInput](../currency-input/README.md) reuses the decimal editor for currency and automatic minor-unit entry.

## Values and editing

value/defaultValue accept canonical decimal strings such as "1234.56", with a dot and no grouping. Empty is ""; it differs from zero. Values are normalized without floating-point conversion. onValueChange receives rawValue, formattedValue, status and an optional reason. Initialization and external controlled updates do not emit changes. Keep controlled values synchronized with rawValue.

status is empty, incomplete, valid or invalid. A lone minus is incomplete with empty rawValue; a trailing decimal separator is incomplete with the preceding numeric rawValue. Controlled echoes preserve these editing states. Bounds violations retain the canonical rawValue and report reason: range.

IMask owns selection, composition, undo/redo and deletion. A small MaskedNumber specialization uses string values, locale grouping and minimum fractional padding; its numeric comparison path is disabled. Ark NumberInput was evaluated in installed Zag 1.45.0: its valueAsNumber, formatting and bounds use floating-point numbers, so it does not meet this string precision contract. Ark Field.Input still owns field associations; this is a text editor, not a spinbutton.

Pressing - anywhere toggles the whole number's sign, preserving the selection relative to the digits. An empty field becomes a pending minus. Keyboard and insertText beforeinput paths support cancellation through consumer handlers. Readonly, disabled and allowNegative=false prevent sign changes. Native onInput is forwarded for native edits; sign toggles publish onValueChange without dispatching synthetic input events.

## Configuration

- locale defaults explicitly to en-US. Latin digits are used; locales requiring direction literals or a different minus sign are rejected in this first version. Grouping follows Intl, including Indian grouping.
- useGrouping defaults to true. Paste accepts ungrouped numbers or correctly grouped text in that locale. Separators are never guessed. Invalid or oversized clipboard values are rejected as a whole; a valid clipboard fragment can still be constrained by the remaining editing capacity.
- minimumFractionDigits defaults to 0; maximumFractionDigits defaults to max(6, minimumFractionDigits). Set both to 2 for two displayed places, or maximum to 0 for integers. Zeros complete on blur/initialization; no automatic rounding occurs.
- maximumIntegerDigits defaults to 30. Supported configuration limits are 128 integer digits and 100 fractional digits. Keyboard input beyond the configured capacity is rejected.
- allowNegative defaults to true. min/max are optional canonical strings, compared exactly. Out-of-range values remain editable, appear invalid and fail native form validation; they are not clamped or rewritten.

Changing locale/grouping preserves the canonical value and the DOM element. Configuration changes and external replacements clear editing history. An external value incompatible with sign/precision constraints throws; incompatible configuration changes also throw rather than silently truncate. Changing defaultValue after initialization has no effect.

## Forms and composition

submitValue="formatted" is the default, matching MaskedInput. submitValue="raw" supplies a single named hidden input with the canonical value; form association and disabled state apply. Native required handles empty fields. Incomplete and out-of-range values set native custom validity. Applications can customize the browser validation message through native invalid handling.

Native uncontrolled reset restores the initial raw default under the current configuration after the reset default action. Canceled resets preserve editing. Controlled forms own their reset state. Do not mutate input.value directly; use controlled updates or native editing.

InputGroup supports existing prefix/suffix addons, icons and actions. Controlled And Composition demonstrates a composed ± button for keyboards without a minus key; it is enabled after a nonzero value is entered. This increment does not add an automatic sign button to every input.

## Review

Open Forms / Number Input: Default, Locales, Decimal Places, Controlled And Composition, Native Submission And Reset, Helpers, States, Dark and Mobile. Review typing/paste, selection replacement, sign toggling in the middle, undo/redo, initial/external values, blur padding and empty versus zero.

Implementation checks include lint/types, library build and exploratory Chromium editing, clipboard, grouping, precision, forms and reset. No new automated tests were added. Actual iPhone keyboard, composition and cross-browser behavior still require review before claiming parity.
