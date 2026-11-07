# Bar List

`BarList` is a native figure with a visible caption and unordered list. Decorative CSS bars repeat the values shown as text. No Ark equivalent, interaction primitive, Unovis rendering, or new dependency is required.

```tsx
import { BarList } from "@egcs/newui";
import "@egcs/newui/styles.css";

<BarList
  title="Sessions by channel"
  description="This month"
  data={[
    { name: "Direct", sessions: 4250 },
    { name: "Search", sessions: 3180 },
  ]}
  label={(item) => item.name}
  value={(item) => item.sessions}
/>;
```

## Contract

`title`, `data`, `label(datum)`, and `value(datum)` are required. Input order is preserved; applications own sorting. Values must be nonnegative finite numbers. Invalid and negative records are excluded; zero records remain visible. Empty valid data renders Empty with an optional `emptyMessage`.

The largest valid value defines full width. Optional positive finite `maxValue` establishes a shared scale when larger than the data maximum. All-zero data produces empty bars with visible zero values. No percentage or total is inferred from row values.

`valueFormat` defaults to grouped English numbers with up to two decimals. `tone` accepts primary (default), neutral, success, warning, danger, or info, either directly or through an accessor. Bars use Radix solid colors on neutral tracks, below the labels and values. Text retains the normal foreground color.

Native figure attributes, events, styles, and refs target the outer figure. `class` is additive. Labels and values wrap on narrow screens. Bars have no animation or tab stops. Use external links or actions alongside this presentation when navigation is needed.

## Storybook examples

Data / Bar List includes default, reactive dashboard, shared-scale/tone, empty, fractional/zero/invalid, long-label, and mobile examples. Every example follows the Storybook theme selector without a fixed theme override.
