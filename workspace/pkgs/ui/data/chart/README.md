# Charts

LineChart, BarChart, and DonutChart use the official Unovis Solid adapter, pinned with its core to 1.7.1. Unovis owns SVG rendering, sizing, axes, chart data updates, and hover positioning. Ark has no chart-rendering equivalent; Ark Collapsible controls the compact value-table disclosure. No new interaction state machine is introduced.

```tsx
import { LineChart } from "newui/charts";
import "newui/styles.css";

const data = [
  { month: "Jan", subscriptions: 4200, services: 2100 },
  { month: "Feb", subscriptions: 5100, services: 2400 },
];
<LineChart
  title="Monthly revenue"
  description="Subscriptions and services · USD"
  data={data}
  label={(datum) => datum.month}
  series={[
    { label: "Subscriptions", value: (datum) => datum.subscriptions, tone: "primary" },
    { label: "Services", value: (datum) => datum.services, tone: "success" },
  ]}
/>;
```

## Contract

Import the named components from the dedicated `newui/charts` entry. They are not re-exported by `newui`; consumers of the main entry do not pull Unovis into their JavaScript. The Unovis packages remain normal package dependencies. Our shared stylesheet supplies the theme mappings, while Unovis injects its own component rules at runtime. No external font is loaded.

Every chart requires a visible `title`, `data`, and `label(datum)` for categories. Optional `description` supplies context and units. Native figure attributes, events, styles, and refs target the outer figure; title/description generate accessible caption associations. Plot height defaults to 260 pixels and is configurable through `height`. Width follows the containing element; use CSS for surrounding layout.

LineChart and BarChart accept generic records and a `series` array. Each series has a unique visible `label`, a numeric `value(datum)` accessor, and optional `tone`: primary, success, warning, danger, info, or neutral. Records are evenly spaced along the category axis in array order; this initial contract does not expose a time scale. Values must be finite numbers; negative values are supported and zero stays within the Y domain. A one-record line chart displays point markers. Grouped bars use a small gap between series and a larger gap between categories.

DonutChart accepts `value(datum)`, optional `tone(datum)`, and optional `valueLabel`. It shows a total in the center. Negative and nonfinite records are excluded from slices and the value table; zero-value records remain in the table when the total is positive. An empty dataset or nonpositive total displays Empty instead of a diagram. Use stable tones when categories may be reordered.

`valueFormat` formats values in hover details, tables, Y axes, and the donut total; it defaults to grouped English numbers. XY charts also accept `axisFormat` for compact axis labels while keeping full values in tooltips and tables. Color defaults cycle through the five `--nui-chart-1` through `--nui-chart-5` tokens; explicit tones use the existing semantic solid tokens. Override palette tokens on the chart's native `style` or through CSS. Axis/grid/text colors use existing Radix semantic tokens, including system themes and nested light/dark scopes, without global body theme classes.

Each chart is a figure with a caption, visible legend, and keyboard-accessible View data disclosure containing a native Table. The decorative SVG is hidden from screen readers; the table supplies the data alternative. XY hover details list the category and all series, using DOM text nodes rather than interpolated HTML. The donut's legend and table supply category names and values. Tooltips stay inside the plot boundary; value tables scroll horizontally on narrow screens. Chart geometry and tooltip transitions are not animated, including for reduced-motion users.

The initial chart entry is intended for client rendering. Server rendering/hydration has not been validated for the DOM-compiled upstream Solid adapter; it remains a separate distribution task. The main library entry retains its existing support scope. Both upstream packages use Apache-2.0 licensing and retain their own license files as external dependencies.

## Review and size

Data / Charts includes a dashboard with reactive data, line/grouped bars/donut, empty and zero-total states, one-point lines, negative values, Resizable, dark, mobile, and nested themes. The user approved the implementation and examples, including compact data controls, tighter header spacing, matching card heights when both are closed or open, independent mixed states, and grouped-bar spacing. No automated tests were created or expanded.

See [bundle measurements](bundle-size.md) for the reproducible build-size inspection. There are no runtime performance guarantees based solely on tree shaking.

References: [Unovis Solid quick start](https://unovis.dev/docs/quick-start/), [theming](https://unovis.dev/docs/guides/theming/), [XY container](https://unovis.dev/docs/containers/XY_Container/).
