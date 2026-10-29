# Data

[Workspace](../../../README.md)

## Intent

Enable browsing, comparing, and interpreting structured information.

## Planned inventory

- Table (implemented and validated).
- Charts (implemented and validated).
- Bar List, Delta Bar, and Badge Delta (implemented and validated).

## Direction and questions

Data Table is deferred until a concrete need arises. The existing Table covers presentation; sorting, filtering, pagination, and selection remain outside its contract. Evaluate dedicated dependencies if Data Table is revisited and for chart rendering; Ark is not an assumed solution for these needs.

Define the initial scope of sorting, filtering, pagination, and selection before finalizing Data Table. Determine textual alternatives and responsive presentation for visualizations.

Generic Badge and Timeline belong to [Content](../content/README.md). Badge Delta belongs here because it communicates value changes. Complete listing pages belong to [Compositions](../compositions/README.md).

## Open decisions

- Unovis is selected for charts; the user approved the initial implementation and examples. Data Table dependencies remain deferred.

## Implemented

- [Table](table/README.md): native table parts, caption, row/column headers, totals, alignment, composable borders/stripes/density/hover states, presentational row highlighting, and an optional keyboard-focusable scroll container. Uses Radix semantic tokens without an interaction primitive or additional dependency. The user validated the implementation and Storybook examples, including the corrected bordered corners.

- [Charts](chart/README.md): LineChart, grouped BarChart, and DonutChart powered by Unovis 1.7.1, with Radix tokens, native figure captions/legends, Ark Collapsible value tables, responsive examples, and an optional `newui/charts` JavaScript entry; validated by the user, including compact disclosures, consistent layout across open/closed states, and grouped-bar spacing. No automated tests were added.

- [Bar List](bar-list/README.md): native lists with decorative proportional bars, visible values, shared scales, semantic tones, and empty states.
- [Delta Bar](delta-bar/README.md): signed percentage changes around zero, with full numeric labels and configurable business direction.
- [Badge Delta](badge-delta/README.md): Badge composition with direction icons, signed values, and business impact colors. All three export from `newui`, use existing dependencies, and were validated by the user in Storybook.
