# Input masking

[Forms](README.md)

## Intent

Support optional editing masks for inputs, such as phone numbers or identifiers, without forcing masking onto every Input.

## Proposed direction

Keep the mask behavior separate from the base Input. Evaluate an adapter, directive, or composition when implementing the first real use case. Preserve the consumer's ability to use a plain native input.

Define raw and displayed values explicitly. Account for cursor position, selection, paste, deletion, composition events, controlled values, and accessibility. A mask does not replace validation.

## Open questions

- Initial mask types and whether patterns are locale-specific.
- Raw/display value and event contracts.
- Integration with Field and form libraries.
- Whether to implement the behavior or adopt a dependency.

Reusable display formatting belongs to [Utilities](../utilities/formatting.md). Masking is planned; no behavior or public API has been implemented yet.
