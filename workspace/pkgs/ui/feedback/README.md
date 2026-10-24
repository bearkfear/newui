# Feedback

[Workspace](../../../README.md)

## Intent

Communicate an operation's state, result, loading status, and progress.

## Planned inventory

- Alert and Callout.
- Toast.
- Progress and Progress Circle.

Skeleton is out of scope by user decision.

## Ideas and questions

Evaluate usage differences between Alert and Callout before maintaining two APIs. Choose one toast solution by comparing the Toast and Sonner references. Compare notification and message use cases before adding components.

Define message semantics, accessible announcements where applicable, duration, and loading behavior. Alert Dialog belongs to [Overlays](../overlays/README.md), as it requires its own interaction contract.
