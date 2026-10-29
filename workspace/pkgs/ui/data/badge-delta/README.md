# Badge Delta

`BadgeDelta` composes the existing Badge with Lucide direction icons and shared delta formatting. It is a native, noninteractive span; no Ark interaction or new dependency is needed.

```tsx
import { BadgeDelta } from "newui";
import "newui/styles.css";

<p>
  Operating costs <BadgeDelta value={-8.2} isPositiveGood={false} /> vs. last month
</p>;
```

## Contract

Required `value` is signed percentage change: `12.5` means +12.5%, not 0.125. Applications calculate changes and supply nearby metric/comparison context. Optional `valueFormat` replaces the default grouped English percentage text with an explicit nonzero sign and up to one decimal.

Positive values point up, negative values point down, and zero uses a dash. Color describes business impact: success for positive and danger for negative unless `isPositiveGood={false}` reverses this mapping. Zero is neutral. Nonfinite values show Unavailable with a neutral dash. Direction is also provided as screen-reader text, so color is not the sole cue.

Existing Badge `variant` (soft, solid, outline), `size` (sm, md, lg), and `rounded` options are preserved. Tone is derived from the value and business direction. Native span attributes, events, styles, refs, and additive `class` target the Badge span; children are generated from the value. Icons are decorative.

## Review

Data / Badge Delta includes editable controls, variants/sizes, favorable decreases, zero, unavailable, rounded, and mobile examples. Every example follows the Storybook theme selector without a fixed theme override. The Data / Bar List dashboard supplies metric and comparison context. The user approved the implementation and examples, including the theme, color, and dashboard spacing adjustments. No automated tests were created or expanded.
