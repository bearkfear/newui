# Data

[Workspace](../../../README.md)

## Intent

Enable browsing, comparing, and interpreting structured information.

## Planned inventory

- Table (implemented and validated) and Data Table (planned).
- Charts.
- Bar List and Delta Bar.
- Badge Delta.

## Direction and questions

Table and Data Table need distinct contracts according to their uses. Evaluate dedicated dependencies for data tables and chart rendering; Ark is not an assumed solution for these needs.

Define the initial scope of sorting, filtering, pagination, and selection before finalizing Data Table. Determine textual alternatives and responsive presentation for visualizations.

Generic Badge and Timeline belong to [Content](../content/README.md). Badge Delta belongs here because it communicates value changes. Complete listing pages belong to [Compositions](../compositions/README.md).

## Open decisions

- Dependencies for charts and data table behavior; evaluate them separately from Ark.

## Implemented

- [Table](table/README.md): native table parts, caption, row/column headers, totals, alignment, composable borders/stripes/density/hover states, presentational row highlighting, and an optional keyboard-focusable scroll container. Uses Radix semantic tokens without an interaction primitive or additional dependency. The user validated the implementation and Storybook examples, including the corrected bordered corners.
