# MaskedInput

[Forms](../README.md) · [Design study](../input-masking.md) · [Upstream issues](upstream-issues.md)

MaskedInput reuses Input and its styles, Field associations, InputGroup integration, native attributes/events, DOM refs, and inherited states. Import MaskedInput and its types from `@egcs/newui` or `@egcs/newui/forms`.

## Values and events

`value` and `defaultValue` are raw strings, without mask literals. Use value with onValueChange for controlled editing, or defaultValue for uncontrolled editing. The DOM displays formatted text. Use text (default) or tel; configure inputmode and autocomplete explicitly.

`onValueChange` receives `{ rawValue, formattedValue, complete }` when accepted editing changes mask details, configuration changes the normalized value, or uncontrolled reset changes it. Initialization and external controlled updates do not emit it. Controlled forms own reset state; edits rejected by the parent are restored after the event.

Native onInput and other handlers are forwarded. No synthetic input event is dispatched. Composition can produce native events before the mask commits composed text; use onValueChange for accepted values. Completeness describes the selected pattern, not validity.

## Patterns and extensibility

`mask` accepts a nonempty pattern or readonly list. Lists are copied and sorted by pattern length. IMask simulates candidates; the adapter chooses the most accepted editable characters, breaking ties by shorter patterns and then supplied order. Pasted literals do not increase the score. This is not semantic country/document detection. Non-token characters are literals. `!` escapes the next character.

The selected pattern bounds accepted characters: ###.###.###-## holds 11 raw digits and 14 displayed characters. Excess input is discarded; alternative patterns allow their respective capacities. Do not infer an HTML maxlength automatically: native truncation can remove valid characters before mixed or formatted clipboard text reaches the mask.

[Configuration limits](configuration.md) independently cap definitions at 256 UTF-16 code units per pattern, 16 alternatives, and 64 custom tokens. validateTextMaskOptions checks unknown backend data before rendering; invalid definitions throw rather than being truncated.

Default tokens: `#` digits, `X` ASCII alphanumeric, `S` ASCII letters, `A` uppercase ASCII letters, and `a` lowercase ASCII letters. `tokens` merges overrides with defaults. Null disables a token, making it literal. Global/sticky regex flags are stripped to prevent stateful matching.

```tsx
const tokens = {
  "&": { pattern: /[0-9]/ },
  L: { pattern: /\p{L}/u, transform: (character: string) => character.toUpperCase() },
  "#": null,
} satisfies InputMaskTokens;

<MaskedInput mask="&&&.&&&.&&&-&&" tokens={tokens} inputmode="numeric" />;
<MaskedInput mask="# LL-&&&" tokens={tokens} />;
```

Keys must be one UTF-16 code unit other than `!`. Each token accepts one character; regexes should describe it. Transforms run before matching and must return one UTF-16 code unit; empty or expanding results are rejected. Full grapheme/emoji tokens are outside this contract.

Share token maps through application modules or domain wrappers. createInputMask remains internal until another reuse case establishes its public contract; IMask-specific configuration is not part of the component API.

Changing mask/tokens reprocesses the current raw value with a fresh model, preserving the DOM element and ref. Invalid/excess characters are discarded; shortening then lengthening does not recover truncated data. Changing defaultValue after initialization has no effect.

## Native forms

`submitValue="formatted"` is the default: the visible named input submits displayed text. `submitValue="raw"` removes its name and supplies exactly one named hidden input with raw text. Form association and inherited disabled state apply to the hidden input; readonly values remain submittable.

Uncontrolled native reset restores the initial raw default using the current mask. Canceled resets preserve values. Controlled reset uses the current application value. Mask synchronization runs in the next task after reset propagation and its native default action; inspect FormData after synchronization completes.

Accepted reset, configuration changes, and external controlled replacements start a new undo history. Normal accepted controlled edits preserve undo/redo; canceled reset preserves history. Readonly/disabled controls cannot invoke IMask undo/redo. Paste And History provides long clipboard samples, a readonly toggle, and an oversized initial value for review.

Native required validates nonempty visible text; validate completeness/business rules explicitly. Do not mutate input.value directly: update controlled value or use native editing. Native maxlength counts displayed characters, including literals; the mask already limits editable positions.

## Storybook examples

The [Chromium inspection](upstream-issues.md#chromium-inspection) records real clipboard paste, initial/default values, external controlled updates, selection replacement, and native submission/reset. Other browser-specific scenarios remain pending.

[Text helpers](text-helpers.md) documents maskText and unmaskText, including the DOM-independent @egcs/newui/masking entry for Node and display-only usage.

[Paste and editing review](paste-review.md) records oversized clipboard input, selection replacement, dynamic phone masks, and the history correction found during exploration.

The [automated coverage](test-coverage.md) covers helpers, configuration, clipboard editing, native forms, and the history corrections. See that guide for browser coverage and limitations.
