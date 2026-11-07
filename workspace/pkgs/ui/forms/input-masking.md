# Input masking

[Forms](README.md) · [MaskedInput contract](masked-input/README.md) · [Upstream issue review](masked-input/upstream-issues.md)

## Direction

MaskedInput composes Input with an internal Solid adapter, createInputMask. IMask 7.6.1 owns editing, selection, composition handling, and history. Ark Field.Input owns native field associations. The installed Ark UI Solid 5.39.3 has no general pattern-mask primitive.

The plain Input retains its native editing contract. Masking is opt-in and does not validate documents, dates, or business rules. Display-only formatting belongs to [Utilities](../utilities/formatting.md).

## Reference study

vue-the-mask is behavioral inspiration, not a dependency or source-code port. Its [formatter](https://github.com/vuejs-tips/vue-the-mask/blob/master/src/maskit.js) skips incompatible characters, inserts literals progressively, and accepts formatted text without displaying empty token slots.

Its [tokens](https://github.com/vuejs-tips/vue-the-mask/blob/master/src/tokens.js) define digits, ASCII letters, alphanumeric characters, case conversion, and escapes. We preserve familiar pattern symbols while allowing per-input overrides and reusable token maps.

Its [dynamic selector](https://github.com/vuejs-tips/vue-the-mask/blob/master/src/dynamic-mask.js) chooses by formatted length and mutates the supplied array. Our adapter copies pattern arrays and delegates content-based selection to IMask, including alternative token prefixes.

Its [component](https://github.com/vuejs-tips/vue-the-mask/blob/master/src/component.vue) separates display and model values. Our value/defaultValue own raw strings, while native submission explicitly chooses formatted or raw output.

Its [directive](https://github.com/vuejs-tips/vue-the-mask/blob/master/src/directive.js) replaces oninput, dispatches a synthetic input event, and restores a collapsed selection with a character-search heuristic. We use IMask listeners and preserve consumer handlers without redispatching input events.

## Review

Forms / Masked Input provides custom tokens, Unicode letters, escaped literals, controlled phone editing, alternative prefixes, reactive configuration, native validity/events, native submission/reset, states, dark theme, and mobile examples.

Review typing, paste, invalid characters, overflow, repeated digits, selection replacement, deletion beside punctuation, clear/reload, undo/redo, and switching phone lengths. Review composition, autofill, and mobile behavior on actual browsers; upstream features and issue reports do not establish browser parity.

The user approved MaskedInput, its helpers, configuration, and review examples and separately authorized regression tests. [Automated coverage](masked-input/test-coverage.md) now complements the exploratory reviews. Approval does not imply unrecorded browser-specific verification.
