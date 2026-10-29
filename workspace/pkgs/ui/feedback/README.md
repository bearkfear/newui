# Feedback

[Workspace](../../../README.md)

## Intent

Communicate an operation's state, result, loading status, and progress.

## Initial implementation

[Loading](loading/README.md) provides an indeterminate spinner with optional visible text and a native status message. [Page Loading](page-loading/README.md) composes the same indicator into page or section placeholders. Both respect themes and reduced motion; Storybook includes a loading-to-content flow. The user approved both implementations and their examples.

[Callout](callout/README.md) implements one native composition for contextual guidance and inline alerts, with six Radix tones, soft/outline variants, optional icons, actions, and application-owned dismissal. Live roles are explicit rather than inferred from color. The user approved the implementation and Storybook examples, including tone-based title and description colors.

[Toast](toast/README.md) uses Ark for the store, queue, timers, actions, and dismissal, with the approved Callout visual language and shared theme-scope handling. Sonner was evaluated as a reference; only the Ark implementation is exposed. The user approved the implementation and Storybook examples.

[Progress](progress/README.md) and [Progress Circle](progress-circle/README.md) use Ark for numeric/indeterminate progress state, value formatting, bounds, and accessible semantics. Both include sizes, tones, and reduced-motion support. The user approved both implementations and their Storybook examples.

Skeleton is out of scope by user decision.

[Empty](empty/README.md) provides a native empty-state composition with optional decorative icon, title, description, and actions. Compact, section, and page layouts cover tables through complete pages. It uses Radix tokens and introduces no interaction dependency or automatic announcements. The user approved the implementation and Storybook examples, including Card/Table integration, the loading-to-empty-to-content flow, and the adjusted icon size.

## Ideas and questions

Callout also has a separated [Message presentation](callout/message.md) inspired by Bulma, with a solid header and soft body. The user approved this presentation and its Storybook examples.

Callout covers informational and alert uses through one API and native announcement roles. Toast uses one Ark-powered system after comparing the Toast and Sonner references. Compare notification and message use cases before adding components.

Define message semantics, accessible announcements where applicable, duration, and loading behavior. Alert Dialog belongs to [Overlays](../overlays/README.md), as it requires its own interaction contract.
