# Utilities

[UI package](../README.md)

## Intent

Provide supporting functions that can be reused by several components or by consuming applications. Keep them within the UI package initially, with explicit exports when implemented.

## Planned scope

- [Formatting](formatting.md): locale-aware presentation of numbers, currencies, dates, and other values.
- Parsing and normalization where a specific component contract requires them.

These functions are not implemented yet. Avoid creating a generic helpers collection without a defined use. Keep utilities independent of component rendering when possible.

[Input masking](../forms/input-masking.md) belongs to Forms because it interacts with editing, selection, and composition events. It may reuse formatting utilities, but display formatting alone does not define input behavior.
