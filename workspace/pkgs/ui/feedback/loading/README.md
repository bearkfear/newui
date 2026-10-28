# Loading

A reusable indeterminate spinner with a native status message. Use it for a small pending operation; use PageLoading for a larger placeholder and Button `loading` for a pending action.

## API

- `size`: `sm` (16px), `md` (default, 24px), or `lg` (40px).
- `tone`: `primary` (default) or `neutral`, using the existing Radix semantic tokens.
- `label`: meaningful status text, defaulting to `Loading…`. Keep it nonempty and localize it in the application.
- `showLabel`: false by default; the label remains available to assistive technology. Set true to show it beside the spinner.
- Root is a span with `role="status"` and explicit `aria-atomic="true"`. Native attributes, refs, events, styles, and additive classes are forwarded. The SVG indicator is decorative.

```tsx
<Loading />
<Loading size="sm" tone="neutral" showLabel label="Fetching project activity…" />
```

## Behavior and mapping

Ark Progress was evaluated for this area. Loading communicates an unknown-duration status rather than a numeric progress value and uses native status semantics; it needs no interaction state machine or focus management. Progress and Progress Circle remain separate planned components.

CSS rotates the indicator; system reduced motion and the workshop's `data-motion="reduced"` setting stop rotation while retaining the indicator and message. `--nui-loading-track` controls the track color and defaults to Radix Slate 6. Size and tone are recipe variants. Import `newui/styles.css` once.

The application owns pending state, requests, errors, and completion announcements. Do not place the only status announcement inside a region that remains `aria-busy="true"`, since announcements can be deferred. For reliable live updates, keep the status region mounted before changing its message. The PageLoading Loading To Content story shows a persistent external status region and a decorative visual placeholder.

## Review

Storybook: Feedback / Loading includes sizes, visible and hidden labels, both tones, use inside Card, long labels, dark theme, and reduced motion.

The user approved the implementation and Storybook examples. No automated tests were added.

## References

- [W3C status messages](https://www.w3.org/WAI/WCAG22/Techniques/aria/ARIA22).
