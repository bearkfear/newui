# Feedback

[UI package](../README.md)

Communicate an operation's state, result, loading status, and progress.

## Components

- [Loading](loading/README.md): indeterminate spinner with optional visible text and a native status message.
- [PageLoading](page-loading/README.md): page or section placeholders using the shared loading indicator.
- [Callout](callout/README.md): contextual guidance and inline alerts with semantic tones, soft/outline variants, optional icons and actions, and application-owned dismissal. Its [Message presentation](callout/message.md) adds a solid header and soft body.
- [Toast](toast/README.md): Ark-powered temporary notifications with a store, queue, timers, actions, dismissal, and themed portals.
- [Progress](progress/README.md) and [ProgressCircle](progress-circle/README.md): numeric or indeterminate progress with Ark value formatting, bounds, and accessible semantics.
- [Empty](empty/README.md): optional decorative icon, title, description, and actions for empty tables, sections, or pages.
- [TopProgress](top-progress/README.md): fixed page-loading bar with a shareable controller, manual values, automatic advancement, and overlapping promise tracking.

## Composition

All components use shared Radix tokens, themes, and reduced-motion preferences. Applications own requests, errors, completion, and announcement timing. Callout live roles are explicit rather than inferred from color; Empty adds no automatic announcements.

Use [AlertDialog](../overlays/alert-dialog/README.md) for critical confirmations requiring an interrupting interaction. Keep essential information in page content even when using a temporary notification.
