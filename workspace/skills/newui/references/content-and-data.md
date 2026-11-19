# Content, feedback, and data

Use named imports from the entry listed for each area.

## Content from `@egcs/newui/content`

- [Accordion](https://newui.egcs.com.br/en/components/accordion/) groups related disclosures. Give each `Item` a stable value and place `ItemTrigger` inside `ItemHeading`. Use `multiple` on `Root` to allow several open items.
- [Avatar](https://newui.egcs.com.br/en/components/avatar/) represents a person or entity with `Root`, `Image`, and `Fallback`. Provide initials or another fallback for unavailable images.
- [Badge](https://newui.egcs.com.br/en/components/badge/) displays a compact label or status. Pair a semantic `tone` with meaningful text. Choose `as="a"` with `href` for a badge that navigates.
- [BadgeGroup](https://newui.egcs.com.br/en/components/badge-group/) lays out related badges. Use `attached` to join matching-size parts.
- [Card](https://newui.egcs.com.br/en/components/card/) groups related content in a surface. Compose `Root` with `Header`, `Title`, `Description`, `Content`, and optional `Media` or `Footer` as needed. Set the title's heading level for the page hierarchy.
- [CodeHighlight](https://newui.egcs.com.br/en/components/code-highlight/) presents formatted source code. Pass `language` and `code` and enable `copyable` for copy actions.
- [Collapsible](https://newui.egcs.com.br/en/components/collapsible/) reveals one independent section. Use `Root`, `Trigger`, `Content`, and optional `Indicator`; use `Accordion` for a coordinated group.
- [Counter](https://newui.egcs.com.br/en/components/counter/) displays a count. Pass `value`, provide a contextual `label`, and use `showZero` when zero matters. `max` caps the visible number.
- [CounterAnchor](https://newui.egcs.com.br/en/components/counter-anchor/) positions a counter on an existing element. Keep the underlying control accessible and label meaningful counts.
- [Heading](https://newui.egcs.com.br/en/components/heading/) styles a heading. Choose `as` for semantic hierarchy and `size` for visual scale independently.
- [Prose](https://newui.egcs.com.br/en/components/prose/) sets reading width and typography for editorial HTML. Render and sanitize Markdown or HTML in the application before supplying content.
- [Separator](https://newui.egcs.com.br/en/components/separator/) divides content. Use `decorative` for purely visual separators and set `orientation` when a vertical separator is needed.
- [Text](https://newui.egcs.com.br/en/components/text/) styles body, supporting, and inline text. Choose the semantic element with `as` and adjust `size` or `tone` to suit the text's role.
- [Timeline](https://newui.egcs.com.br/en/components/timeline/) presents an event sequence. Compose `Root` and `Item` with `Content`, `Title`, and optional `Indicator` and `Time`. Use `Steps` for interactive workflows.

## Feedback from `@egcs/newui/feedback`

- [Callout](https://newui.egcs.com.br/en/components/callout/) displays inline guidance or status. Use `Root`, `Title`, and `Description`. Set announcement semantics as needed. The application owns dismissal via `CloseButton`.
- [Empty](https://newui.egcs.com.br/en/components/empty/) explains the absence of content. Compose `Root` with `Title`, `Description`, and optional `Actions` for the next step.
- [Loading](https://newui.egcs.com.br/en/components/loading/) communicates a small indeterminate task. Supply a meaningful `label` and set `showLabel` to display the text alongside the spinner.
- [PageLoading](https://newui.egcs.com.br/en/components/page-loading/) shows an in-flow placeholder for a page or section. Use `layout="section"` within an existing page shell and provide a task-specific `label`.
- [Progress](https://newui.egcs.com.br/en/components/progress/) displays horizontal progress. Pass a numeric `value` for known progress or `null` for indeterminate work.
- [ProgressCircle](https://newui.egcs.com.br/en/components/progress-circle/) displays circular progress. Pass `value` and `label` to communicate the task and its status.
- [Toaster](https://newui.egcs.com.br/en/components/toaster/) renders an app-owned `createToaster()` store. Mount one `Toaster` per store and call `toaster.create()` to show notifications.
- [Toast](https://newui.egcs.com.br/en/components/toast/) customizes notification layout. Use `Root`, `Title`, and other parts inside the `Toaster` render callback.
- [TopProgress](https://newui.egcs.com.br/en/components/top-progress/) supplies a fixed page transition bar. Pass a `createTopProgress()` controller and call `start()` followed by `done()` or `fail()` from the application.

## Data from `@egcs/newui/data`

- [BadgeDelta](https://newui.egcs.com.br/en/components/badge-delta/) displays signed change in a compact badge. Set `isPositiveGood={false}` for metrics where lower is better.
- [BarList](https://newui.egcs.com.br/en/components/bar-list/) shows a list of values as bars. Pass `title`, `data`, `label(datum)`, and `value(datum)`. Sort the records first when the list should show a ranking.
- [DeltaBar](https://newui.egcs.com.br/en/components/delta-bar/) shows signed percentage change around a fixed midpoint. Pass a clear `label`, `value`, and comparison context.
- [Table](https://newui.egcs.com.br/en/components/table/) renders a native table. Compose `Root` with `Caption`, `Header`, `Body`, `Row`, `Head`, and `Cell`; use `Container` for overflow. The app owns sorting, selection, and pagination.

## Charts from `@egcs/newui/charts`

Each chart takes a visible `title`, `data`, and `label(datum)`, and provides a keyboard-accessible data table.
- [LineChart](https://newui.egcs.com.br/en/components/line-chart/) shows trends across ordered categories. Supply a `series` array with a visible `label` and numeric `value(datum)` for each series. The category axis follows array order with even spacing.
- [BarChart](https://newui.egcs.com.br/en/components/bar-chart/) compares categories. Supply a `series` array with a visible `label` and numeric `value(datum)` for each series. Multiple series display grouped bars.
- [DonutChart](https://newui.egcs.com.br/en/components/donut-chart/) shows shares of a total. Supply a `value(datum)` accessor and use stable per-category tones when users can reorder records.
