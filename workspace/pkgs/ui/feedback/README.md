# Feedback

[Workspace](../../../README.md)

## Intent

Communicate an operation's state, result, loading status, and progress.

## Planned inventory

- Alert and Callout.
- Toast.
- Progress and Progress Circle.
- Skeleton.

## Ideas and questions

Evaluate usage differences between Alert and Callout before maintaining two APIs. Choose one toast solution by comparing the Toast and Sonner references. Bulma's Notification and Message are usage references to compare, with no automatic approval of new components.

Define message semantics, accessible announcements where applicable, duration, and loading behavior. Alert Dialog belongs to [Overlays](../overlays/README.md), as it requires its own interaction contract.
