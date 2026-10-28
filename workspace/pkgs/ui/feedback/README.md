# Feedback

[Workspace](../../../README.md)

## Intent

Communicate an operation's state, result, loading status, and progress.

## Initial implementation

[Loading](loading/README.md) provides an indeterminate spinner with optional visible text and a native status message. [Page Loading](page-loading/README.md) composes the same indicator into page or section placeholders. Both respect themes and reduced motion; Storybook includes a loading-to-content flow. The user approved both implementations and their examples.

## Planned inventory

- Alert and Callout.
- Toast.
- Progress and Progress Circle.

Skeleton is out of scope by user decision.

## Ideas and questions

Evaluate usage differences between Alert and Callout before maintaining two APIs. Choose one toast solution by comparing the Toast and Sonner references. Compare notification and message use cases before adding components.

Define message semantics, accessible announcements where applicable, duration, and loading behavior. Alert Dialog belongs to [Overlays](../overlays/README.md), as it requires its own interaction contract.
