# Progress Circle

Circular presentation of the same Ark UI Solid Progress state used by Progress. Ark supplies SVG geometry, circumference/offset calculation, bounds, formatting, and progressbar semantics; newui adds the ring, centered value, task label, and theme-aware styling.

## API

ProgressCircle uses the same props as [Progress](../progress/README.md): value/defaultValue, min/max, label, aria-label/aria-labelledby, showValue, size, tone, native root attributes, and the supported Ark options. There are no children or layout-direction controls.
- Sizes: sm 48px with 4px stroke; md (default) 80px with 6px stroke; lg 112px with 8px stroke.
- `label` appears below the ring; without it, an accessible hidden task label remains.
- The formatted value appears inside the ring unless showValue is false or value is null. Keep custom formatted value text brief, especially at the smallest size; put longer task descriptions in the label.
- `value={null}` shows an indeterminate arc and omits a numeric current value rather than inventing a percentage.

```tsx
<ProgressCircle value={65} label="Workspace sync" />
<ProgressCircle value={100} tone="success" label="Upload complete" />
<ProgressCircle value={null} label="Preparing upload…" />
```

## Visual and accessibility contracts

The SVG carries Ark's progressbar role and the task name; the HTML value is a visual complement with live announcements disabled. Numeric updates do not move focus. The track shares `--nui-progress-track` with the bar, and tones share the same Radix fill/text mapping. Size sets Ark's --size and --thickness geometry variables; the public customization API remains the size and tone variants plus native root style/class.

Known values transition the arc length. Indeterminate work rotates a partial arc; system/workshop reduced motion stops rotation and removes value transitions while keeping the partial arc visible. No additional animation dependency is installed.

Storybook: Feedback / Progress Circle includes sizes, tones, zero/partial/complete/unknown states, value visibility, custom range, the shared simulated upload, light/dark comparison, mobile, and reduced motion. The user approved the implementation and examples. No automated tests were added.

## References

- [Ark UI Circular Progress](https://ark-ui.com/docs/components/progress-circular).
