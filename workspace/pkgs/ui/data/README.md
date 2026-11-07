# Data

[UI package](../README.md)

Browse, compare, and interpret structured information.

## Components

- [Table](table/README.md): native table parts, captions, headers, totals, alignment, borders, stripes, density, hover states, and an optional focusable scroll container.
- [Charts](chart/README.md): LineChart, grouped BarChart, and DonutChart using Unovis, Radix tokens, visible captions and legends, and Ark Collapsible value tables. Also available through `@egcs/newui/charts`.
- [BarList](bar-list/README.md): native lists with proportional bars, visible values, shared scales, and empty states.
- [DeltaBar](delta-bar/README.md): signed percentage changes around zero, with numeric labels and configurable business direction.
- [BadgeDelta](badge-delta/README.md): Badge composition with direction icons, signed values, and business impact colors.

## Composition

Table is presentational. Applications own sorting, filtering, selection, and pagination; see [application pages](../compositions/pages/README.md) for examples.

Charts include textual data alternatives and responsive examples. Generic Badge and Timeline belong to [Content](../content/README.md); BadgeDelta communicates numeric changes.
