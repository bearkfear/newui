# Delta Bar

`DeltaBar` displays signed percentage change around a fixed zero midpoint. It uses a native figure, caption, text, and decorative CSS geometry. This is a data comparison, with no progressbar semantics or Ark interaction requirement.

```tsx
import { DeltaBar } from "newui";
import "newui/styles.css";

<DeltaBar
  label="Acquisition cost"
  description="Compared with last month; lower is better"
  value={-22.6}
  isPositiveGood={false}
/>;
```

## Contract

Required `label` and numeric `value` describe percentage change: `12.5` means +12.5%, not 0.125. Applications calculate the change and handle missing/zero baselines. Optional `description` provides context and units. `valueFormat` changes text formatting only; it does not change the percentage scale.

Zero sits at the center of a fixed −100% to +100% scale. Negative fills extend left; positive fills extend right. Geometry clamps to the scale, while text preserves the full value. Values above 100% are legitimate growth figures. The default text uses grouped English numbers, one decimal at most, an explicit nonzero sign, and a percent suffix.

Positive values use success and negative values danger by default. `isPositiveGood={false}` reverses business impact colors without reversing direction. Zero and nonfinite values are neutral; nonfinite values show Unavailable with no fill. A screen-reader direction label accompanies the text. CSS geometry is decorative and never animated.

Native figure attributes, events, styles, refs, and additive `class` target the outer figure. The visible caption labels the figure. Comparison labels and values wrap at narrow widths. Radix semantic tokens support automatic and nested themes.

## Review

Data / Delta Bar includes controls, favorable decreases, zero, unavailable, values beyond the visual bounds, custom formatting, and mobile examples. Every example follows the Storybook theme selector without a fixed theme override. A reactive dashboard is available under Data / Bar List. The user approved the implementation and examples, including the theme, color, and dashboard spacing adjustments. No automated tests were created or expanded.
