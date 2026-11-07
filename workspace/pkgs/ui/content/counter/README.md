# Counter

[Content](../README.md)

A numeric notification indicator: a circle for single digits, expanding to a pill for longer counts. Counter reuses Badge's appearance recipes and Radix colors, with dimensions and numeric formatting suited to counts. It is a native span; no Ark interaction primitive is needed for static text.

```tsx
<Counter value={5} label="5 unread notifications" />
<Counter value={128} max={99} tone="neutral" variant="soft" />
<Counter value={0} showZero />
```

- `value` is required. Negative and non-finite values become zero; fractional values round down.
- `max` defaults to 99. Larger values display `99+`; the hidden accessible text preserves the actual count. Invalid maximums fall back to 99; negative maximums become zero.
- Zero is hidden by default. Set `showZero` to display it.
- `label` supplies contextual accessible text instead of the full numeric count. Keep it synchronized with `value` and localize it in the application.
- `variant`: solid (default), soft, outline. `tone`: danger (default), neutral, primary, info, success, warning.
- `size`: sm (16px), md (20px, default), lg (24px).
- Attributes, events, style, ref, and additive classes are forwarded. Counter has no tab stop or live-region behavior. Add a separate application-owned status region only when updates should be announced.

## Composition

Place a Counter after the text inside a Tabs.Trigger or Button. When the parent's accessible label already includes the full count, hide Counter with `aria-hidden="true"` to avoid repeating it. Decorative icons should also be hidden, and icon-only controls need accessible names. Avoid placing nested buttons or links inside tab triggers.

Badge remains the component for textual labels such as “New”.

## Overlay

Wrap the target and Counter in `CounterAnchor` and choose a corner with `placement`. The anchor is a non-interactive inline-flex div; the button keeps its own focus and events. Keep Counter as a sibling of the target so overflow inside Button or Avatar does not clip it.

```tsx
<CounterAnchor>
  <Button aria-label={`${unread()} unread notifications`}>Notifications</Button>
  <Counter value={unread()} placement="top-end" aria-hidden="true" />
</CounterAnchor>;
```

`placement` defaults to `inline` (normal document flow). Overlay values: `top-end`, `top-start`, `bottom-end`, `bottom-start`. Overlays sit halfway beyond the corner, do not intercept pointer events, and have a 2px separating ring. Set `--nui-counter-ring` to the surrounding surface color when it differs from `--nui-background`. Allow enough space around the anchor; an ancestor with clipped overflow can still cut off an overlay.

For a button, include the count in its accessible name and hide the sibling Counter from assistive technology. For static content, supply a contextual Counter label. CounterAnchor accepts native div attributes, styles, refs, and additive classes.

Storybook includes value lengths, all tones and variants, sizes, zero, custom maximum, interactive notifications, dark theme, and mobile. Tabs has additional examples of icons, counters, and mixed content in every appearance.

Overlay stories cover text/icon buttons, Avatar, a content tile, all four corners, `99+`, alternate surfaces, interactive clearing/incrementing, dark theme, and mobile.
