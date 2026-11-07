# Progress

A horizontal progress bar powered by Ark UI Solid Progress. Ark owns value state, bounds, percent calculation, formatting, data attributes, and progressbar semantics. newui composes the label, formatted value, track, and range into one component.

## API

- `value`: controlled numeric value, or null for indeterminate work. Uncontrolled `defaultValue` defaults to 0. Values come from the application; the component does not simulate task progress.
- `min` / `max`: default 0 / 100, forwarded to Ark. Percentages are calculated relative to this range.
- `label`: optional visible task label. Without it, the label is visually hidden and uses `aria-label` or the fallback `Progress`. Supply a meaningful task name; an external `aria-labelledby` can name the actual track instead.
- `showValue`: true by default. Shows Ark's formatted value for known progress; indeterminate values never show a percentage.
- `size`: sm (4px), md (default, 8px), or lg (12px) track thickness.
- `tone`: neutral, primary (default), info, success, warning, or danger. Completion does not automatically change tone.
- Ark options such as `onValueChange`, `locale`, `formatOptions`, `translations`, and `ids` remain available. Native root attributes, refs, events, styles, and additive classes are forwarded. Children, asChild, and orientation are excluded because this component owns its composition and horizontal layout.

```tsx
<Progress value={45} label="Uploading project assets" />
<Progress value={null} label="Preparing upload…" />
<Progress value={6} max={10} label="Files uploaded" />
<Progress value={45} aria-label="Workspace sync" showValue={false} />
```

## Visual and accessibility contracts

The actual track has the progressbar role, named through Ark's label ID or an external aria-labelledby. Ark supplies min/max/current value; indeterminate work omits aria-valuenow. The wrapper adds formatted aria-valuetext. Visible value text uses aria-live off to avoid announcing every update; applications can announce important stages and completion through a separate persistent status region. Labels and values use steps 12 and 11 of the selected tone. Fill uses step 9 for colored tones and neutral text for neutral; `--nui-progress-track` defaults to Radix Slate 3.

CSS transitions known-value changes and moves a partial range for indeterminate work. System/workshop reduced motion removes transitions and holds a static partial range rather than implying completion. Keep essential task context in text. Use Loading for a simple pending status and PageLoading for a page placeholder; these progress components support numeric work as well as unknown duration.

Storybook: Feedback / Progress includes sizes, tones, zero/partial/complete/unknown states, hidden labels, value visibility, custom bounds/formatting, simulated upload controls, light/dark comparison, mobile, and reduced motion. Only the demo owns its timer.

## References

- [Ark UI Linear Progress](https://ark-ui.com/docs/components/progress-linear).
- [Progress Circle](../progress-circle/README.md).
