# Utilities

[UI package](../README.md)

Supporting functions for consuming applications, independent of component rendering.

## Text masking

Import `maskText`, `unmaskText`, `validateTextMaskOptions`, and `textMaskLimits` from `@egcs/newui/masking`. This entry has no component or DOM dependency and runs in Node and browsers.

See [text helpers](../forms/masked-input/text-helpers.md) and [configuration](../forms/masked-input/configuration.md) for patterns, tokens, transforms, and limits.

[MaskedInput](../forms/masked-input/README.md) belongs to Forms because it also handles editing, selection, and composition events. General locale-aware [formatting](formatting.md) is not implemented.
