# newui UI package

[Workspace](../../README.md)

The publishable library lives here. Components, recipes, contracts, examples, and stories stay together in their owning area. Only selected build artifacts are included in the npm package.

## Areas

- [Getting started](getting-started/README.md): development and future consumer documentation.
- [Foundations](foundations/README.md): tokens, themes, typography, and shared visual rules.
- [Layout](layout/README.md): space, alignment, and sizing.
- [Content](content/README.md): text, identity, and information presentation.
- [Actions](actions/README.md): command execution.
- [Forms](forms/README.md): input, selection, editing, and optional masking.
- [Navigation](navigation/README.md): paths between pages and sections.
- [Overlays](overlays/README.md): content presented over the interface.
- [Feedback](feedback/README.md): states, results, and progress.
- [Data](data/README.md): structured information and visualizations.
- [Compositions](compositions/README.md): combinations for complete interface scenarios.
- [Utilities](utilities/README.md): reusable formatting and other supporting functions.

Button, Container, Section, Heading, Text, and Prose are implemented with colocated stories. Hero, Footer, MediaObject, Panel, and ActionBar are also implemented with a composed workspace example. The latest compositions await user validation; the remaining inventory is planned or under evaluation. Public APIs for future utilities have not been defined. Keep utilities in this package initially; extract a separate package only when actual reuse justifies it.

Run the coordinating commands from `workspace/`. This package owns its build script and TypeScript configuration and generates its distribution in `dist/`. The private flag stays enabled until publication is ready.
