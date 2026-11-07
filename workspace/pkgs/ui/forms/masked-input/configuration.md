# Mask configuration limits

[MaskedInput](README.md) · [Text helpers](text-helpers.md)

Mask definitions can originate in backend settings or user configuration. MaskedInput, maskText, and unmaskText share runtime validation before copying pattern lists, compiling tokens, or creating an IMask model.

The exported, frozen textMaskLimits object defines these bounds:
- maxPatternLength: 256 UTF-16 code units per pattern, including literals and escape characters.
- maxPatterns: 16 alternatives, each subject to the pattern-length bound.
- maxCustomTokens: 64 explicitly supplied token entries, including null overrides; default tokens are additional.

Exceeding a bound throws RangeError. Malformed configuration throws TypeError: patterns must be nonempty strings, alternatives must be a nonempty array of strings, escapes must be complete, and tokens must follow the token contract. Definitions are rejected, never silently shortened.

These are library-wide limits rather than user-supplied overrides. Applications may impose stricter limits on their settings forms. They are independent of the number of characters accepted by a particular field and of native HTML maxlength.

## Backend data

Use validateTextMaskOptions on unknown data before updating rendered state. It asserts the TextMaskOptions type and throws on invalid configuration. This lets the application retain its last valid configuration and report an error rather than rendering a failing component.

```ts
import { validateTextMaskOptions } from "@egcs/newui/masking";

const candidate: unknown = await response.json();

try {
  validateTextMaskOptions(candidate);
  setOptions(candidate);
} catch (error) {
  setConfigurationError(error instanceof Error ? error.message : "Invalid configuration.");
}
```

For JSON settings, send a mask string or a list inside the configuration object, such as { "mask": "###.###.###-##" }. RegExp objects and transform functions are JavaScript configuration; this API does not execute function bodies or regex strings received from JSON. Applications may pair backend patterns with a locally defined token map.

## Review

Forms / Masked Input / Configuration Limits accepts editable JSON and includes patterns at and above the length limit, arrays at and above the alternative limit, malformed types, empty patterns, and incomplete escapes. Invalid configuration displays its error before mounting a preview; valid configuration feeds the component and both helpers. Authorized [regression tests](test-coverage.md) cover boundaries and malformed backend settings.
