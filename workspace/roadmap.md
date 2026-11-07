# Implementation stages

[Workspace](README.md)

## Validated deliveries

The user accepted the implemented actions and menus, layout/content primitives, compound compositions, navigation including Steps and Sidebar, overlays, feedback, native Table, Unovis charts, Radix color system, Storybook styling, and code-quality tooling with pre-commit checks. These deliveries are complete. New automated tests still require separate explicit authorization.

Remaining unchecked items below describe future work. Flex, Grid, Skeleton, AspectRatio, Image/Figure, Box/Surface, Stack, and AutoGrid additions are out of scope. Media uses native HTML and existing compositions; no dedicated image or video wrapper is planned. Applications use CSS directly for layout and media proportions. Forms are deferred until the other implementation stages are complete. Icon actions use Button iconOnly with an accessible name; no separate IconButton or CloseButton component is planned.

## Proposed implementation order

The stage order below is a proposal. The retained Bulma additions are distributed across their corresponding stages; the remaining layout/content recipes were excluded by user decision.
The catalog starts early and grows with each component.

### 0. Define minimum contracts

- [x] Define the project name (newui) and initial consumption format (installable package).
- [x] Define the implementation project structure: a workspace coordinator, `apps/storybook/`, and one `pkgs/ui/` library package with source and contracts together.
- [x] Choose an installable package for the first distribution. A CLI has not been approved.
- [ ] Audit selected Solid UI implementations and map dependencies and Ark equivalents.
- [x] Document conventions for imports, composition, variants, sizes, class overrides, and DOM references in the Foundations component contracts.
- [ ] Check licenses and preserve notices from reused code.

### 1. Visual foundation and minimum catalog

- [x] Set up SolidJS, strict TypeScript, Tailwind, tailwind-variants, and the first Ark-powered navigation components.
- [x] Integrate official Radix scales, semantic interaction state tokens, automatic system themes, and nested light/dark scopes.
- [x] Replace handwritten interface icons with Lucide for Solid and provide a Foundations / Iconography review page.
- [x] Obtain user approval of the Lucide migration and iconography examples.
- [x] Define typography, dimensions, visible focus, disabled states, and reduced motion with shared metrics, compiled style integration, and reviewable Foundations examples.
- [x] Obtain user approval of the consolidated foundations and customization examples, including corrected Storybook typography style precedence.
- [x] Create the initial Storybook catalog with area navigation, component demos, property controls, and light/dark theme switching.
- [x] Implement Button and ButtonGroup with validated variants and examples.
- [x] Obtain user validation of solid Button press feedback using the approved Radix Themes filter exception, preserving hover colors and introducing no positional motion.
- [x] Implement Card with optional parts, visual variants, media, and footer compositions.
- [x] Obtain user validation of Card in Storybook, including the softened, neumorphism-inspired elevated surface.
- [x] Implement the first Ark-powered Dialog with Bulma-inspired modal-card presentation and responsive examples.
- [x] Obtain user validation of Dialog; the user also manually verified the examples. The text field family remains deferred to Forms.
- [x] Validate the initial Button/Card/Dialog sample before replicating the architecture across the catalog.

### 2. Basic elements and organization

- [x] Implement Badge with variants and groups, native Separator, and Ark-powered Avatar.
- [x] Obtain user validation of Badge, Separator, and Avatar in Storybook.
- [x] Document CSS aspect-ratio with responsive examples instead of adding a component.
- [x] Implement Container, Section, Text, Heading, and Prose, inspired by the gaps identified through Bulma.
- [x] Obtain user validation of Container, Section, Text, Heading, and Prose in Storybook.

### 3. Overlays and feedback

- [x] Implement Dialog with compact header/footer, right-aligned actions, body scrolling, free media content, and theme-preserving portals.
- [x] Implement Alert Dialog on the validated Dialog foundation.
- [x] Obtain user approval of the Alert Dialog implementation and Storybook examples.
- [x] Implement Tooltip with Ark hover/focus behavior, positioning, an optional arrow, and theme-preserving portals.
- [x] Obtain user validation of Tooltip in Storybook.
- [x] Implement Popover with Ark click/tap behavior, focus and dismissal, positioning, and theme-preserving portals.
- [x] Obtain user validation of Popover in Storybook.
- [x] Implement Hover Card with Ark hover/focus previews, delays, positioning, and theme-preserving portals.
- [x] Obtain user validation of Hover Card in Storybook.
- [x] Implement Sheet as an edge-attached presentation of Dialog, with four sides and responsive examples.
- [x] Obtain user validation of Sheet in Storybook, including the shared compact header spacing.
- [ ] Evaluate a gesture-enabled Drawer separately if drag-to-dismiss or snap points are needed.
- [x] Implement Callout as one API for static guidance and inline alerts, with explicit announcement roles, tones, variants, and optional actions/dismissal.
- [x] Obtain user validation of Callout and inline alert examples in Storybook, including tone-based title and description colors.
- [x] Expand Callout with a Bulma-inspired Message presentation using separated header/body parts.
- [x] Obtain user validation of the Message presentation in Storybook.
- [x] Implement Loading and PageLoading with status messages, page/section layouts, and reduced-motion support.
- [x] Obtain user validation of Loading and PageLoading in Storybook.
- [x] Implement Empty with optional icon, title, description, actions, compact/section/page layouts, Radix tokens, and Card/Table/loading-flow Storybook examples.
- [x] Obtain user validation of Empty and its Table integration, including the adjusted icon size.
- [x] Compare Toast and Sonner references and implement one Ark-powered Toast system with Callout visuals, queuing, actions, and themed portals.
- [x] Obtain user validation of Toast in Storybook.
- [x] Implement Progress and Progress Circle with Ark state, numeric/indeterminate values, tones, sizes, and reduced-motion support.
- [x] Obtain user validation of Progress and Progress Circle in Storybook.

### 4. Navigation and interaction

- [x] Implement Accordion and Collapsible with Ark behavior, shared styling, native disabled states, and disclosure animations.
- [x] Obtain user validation of Accordion and Collapsible in Storybook, including the revised content spacing.
- [x] Implement Ark Tabs with Bulma-inspired variants and segmented styling.
- [x] Obtain user validation of Tabs and solid Panel headers in Storybook.
- [x] Add rich Tabs examples with icons, counts, and labels, plus a reusable Counter.
- [x] Add CounterAnchor and corner overlays for buttons, avatars, and content, with reviewable examples.
- [x] Document complete Counter overlay composition and add compact record-list Panel examples.
- [x] Obtain user validation of Counter, overlays, rich Tabs, and compact Panel record lists; remove Panel tabs integration.
- [x] Implement compact Panel.Bar composition following the Preview / Code / Blame reference, with natural-width tabs, metadata, and trailing actions in one wrapping header.
- [x] Obtain user validation of File Header Tabs, including dark/mobile layouts, content switching, file actions, and the complete source example.
- [x] Implement simple native Breadcrumb with ancestor links, automatic decorative separators, current-page semantics, and dark/mobile examples.
- [x] Obtain user validation of Breadcrumb.
- [x] Obtain user validation of the Panel Pagination integration and aligned inline editing controls, including responsive wrapping.
- [x] Implement simple Pagination with Ark behavior, Solid UI-inspired ghost controls, numbered pages and ellipses, previous/next controls, automatic mobile summaries, three sizes, and native boundary disabled states. Keep one appearance and four public composition parts.
- [x] Provide Storybook examples for page-size selection and total/page summaries; obtain user validation of the simplified Pagination and record-list footer.
- [x] Replace the temporary Panel record-list footer controls with the validated Pagination composition, adapting zero-based Panel pages and preserving deletion/undo behavior.
- [x] Implement simple Ark-powered Dropdown Menu and Context Menu with shared styling, groups, separators, optional icons, nested submenus, unboxed disabled/destructive states, theme-preserving portals, and a separate ordinary dropdown alternative for context actions.
- [x] Obtain user validation of Dropdown Menu and Context Menu, including keyboard/submenu navigation, icon-free layouts, selection, dismissal/focus, dark/mobile collision handling, controlled state, and removal of outer menu focus rings.
- [x] Implement Menubar with Ark multi-trigger Menu and shared action-menu parts; extract standalone Navigation Menu as Navbar's shared foundation, with grouped panels and cascading page-link disclosures using Ark Popover.
- [x] Obtain user validation of Menubar, Navigation Menu, and the revised Navbar appearance and cascading/mobile examples, including dropdown spacing, open chevrons, and stable hover switching.
- [x] Implement Sidebar with optional Resizable integration, constrained desktop widths, compact icon navigation, controlled collapse, mobile Sheet, and reviewable application examples.
- [x] Obtain user validation of Sidebar and its fixed/resizable, compact, dark, and mobile Storybook examples, including the single divider, account spacing, consistent compact blocks, and layout state preservation when creating projects.
- [x] Implement Resizable using Ark Splitter with horizontal/vertical panels, optional grips, controlled sizes, collapse/expand, and nested/mobile/theme Storybook examples.
- [x] Obtain user validation of Resizable and its Storybook examples.
- [x] Implement Ark-powered Steps with horizontal/vertical layouts, associated content, next/back navigation, completion, controlled state, and linear validation examples using Radix tokens.
- [x] Obtain user validation of Steps, including full-width horizontal distribution and plain content with optional Card composition.
- [x] Implement Navbar and VerticalMenu with responsive navigation, Ark-powered submenus/disclosures, grouped links, and optional nested branches.
- [x] Obtain user validation of Navbar and VerticalMenu in Storybook.

Command and Carousel are deferred by user decision. Revisit them only when a concrete future need arises; they are not prerequisites for subsequent stages.

Each behavior needs an explicit mapping to Ark. If no suitable equivalent exists, record the gap before choosing another implementation.

### 5. Data and visualizations

- [x] Implement native Table with Solid UI/Bulma-inspired presentation, Radix tokens, composable borders/stripes/density/hover, and responsive Storybook examples, without Kobalte or additional dependencies.
- [x] Obtain user validation of Table, including square bordered corners without scroll-container clipping.
- [x] Implement native Timeline with vertical/horizontal layouts, chronological lists, dates, custom indicators, Radix status colors, and responsive progress/history Storybook examples.
- [x] Obtain user validation of Timeline, including horizontal and vertical layouts.
- [x] Select Unovis for Charts and implement LineChart, BarChart, and DonutChart with semantic themes, responsive rendering, legends, value tables, and reviewable Storybook examples.
- [x] Obtain user validation of LineChart, BarChart, and DonutChart and their Storybook examples, including compact data disclosures, header spacing, consistent closed/open card alignment, independent mixed states, and grouped-bar spacing.
- [x] Implement native Bar List, Delta Bar, and Badge Delta with Radix tokens, visible numeric alternatives, configurable business direction, and reactive/responsive Storybook examples, without additional dependencies.
- [x] Obtain user validation of Bar List, Delta Bar, and Badge Delta and their Storybook examples, including toolbar theme selection, solid bars, semantic badge colors, and compact responsive metric grouping.

Data Table is deferred by user decision until a concrete need for sorting, filtering, pagination, or selection arises. The existing native Table remains the current presentation component. Data Table is not a prerequisite for subsequent stages.

Data Table and Charts require their own dependency evaluation; do not assume Ark provides data tables or chart rendering. The user selected Unovis; the initial integration uses its official Solid adapter through the optional `@egcs/newui/charts` entry.

### 6. Layouts and larger blocks

Image/Figure, Box/Surface, Stack, and AutoGrid are excluded; no additional media wrappers are planned. The user requested a final collection of complete pages using the expanded catalog. Form and settings examples move to stage 7 alongside their controls.
- [x] Implement Hero, Footer, Media Object, Panel, and ActionBar as compound compositions with responsive Storybook examples.
- [x] Obtain user validation of Hero, Footer, Media Object, Panel, and ActionBar in Storybook.
- [x] Provide responsive compositions through Compositions / Overview and the existing Panel, Sidebar, and Table examples.
- [x] Create Analytics, Orders, Project, Service Status, and Help Center pages with shared responsive navigation, local actions, CSV exports, and mobile stories under Compositions / Pages.
- [ ] Obtain user validation of the complete page collection, including compact Sidebar icon alignment and viewport-height scrolling.

### 7. Forms (last implementation stage)

- [x] Implement Field, Input, Textarea, and InputGroup using Ark Field, native text editing, Radix/Bulma-inspired sizes and tones, icons/addons/actions, explicit valid/invalid feedback, loading, readonly/disabled states, and reviewable Storybook examples.
- [x] Implement opt-in MaskedInput with an internal IMask adapter, configurable tokens, raw controlled values, native submission/reset, and Storybook examples informed by upstream issues.
- [x] Obtain user approval of MaskedInput and its review examples, text helpers, configurable tokens, configuration limits, and editing/history corrections. New automated tests still require explicit authorization; browser-specific coverage remains documented separately.
- [x] Obtain separate test authorization and add mask regression coverage for helpers, backend configuration limits, native clipboard/editing/forms, and history; provide a DOM-independent masking entry verified during packing.
- [ ] Obtain user validation of the text-field family, native submission/reset, accessible associations, and responsive examples.
- [ ] Checkbox, Radio Group, Switch, Toggle, and Toggle Group.
- [ ] Number Field, OTP Field, and Slider.
- [ ] Select and Combobox.
- [ ] Date Picker.
- [ ] Implement field groups and File Upload; InputGroup is included in the text-field delivery above.
- [ ] Create complete form and settings examples with the implemented controls.

The Field contract must associate the label, description, and error with the control. Validation and form library integration require their own decision.

### 8. Preparation for external use

- [x] Define dependency layers and map current cross-area imports; remove type-only cycles in button options and Sidebar contracts. See the [dependency map](dependencies.md); this delivery was validated by the user.
- [x] Add public entry points by catalog area while retaining the main entry, existing types, and separate charts entry; provide Package consumption stories. This delivery was validated by the user.
- [x] Measure built-package main/area consumers under Solid and browser fallback conditions, preserve internal module boundaries to eliminate unused sibling initialization, and inspect shared Button/context bindings. See the [consumer bundle report](pkgs/ui/getting-started/bundle-sizes.md); this delivery was validated by the user. Clean packed-consumer validation remains below.
- [x] Modularize component CSS and explicit recipe sources with area aggregators, shared import normalization, source CSS measurements, and isolated Modular styles previews. The complete compiled stylesheet remains public; the following integration exposes area selections. This delivery was validated by the user.
- [x] Add optional consumer Tailwind compilation, public CSS area selections, a PostCSS integration, and an optional shared-token preset alongside the complete stylesheet; document reset ownership and provide isolated preset stories. This delivery was validated by the user. The standalone consumer was later removed at the user's request; its interactive example now lives with the Storybook stories.
- [x] Document runtime palette, spacing, radius, typography, focus, and theme customization, preserving automatic light/dark behavior. Application storage and user-defined palette generation remain consumer responsibilities.
- [ ] Adopt a compatible stable Ark release using Zag focus-visible 1.46.0 or later, remove the workspace focus patch, and validate focus behavior without workspace overrides/patches. The user accepted this known issue for the initial alpha; it is not a publication blocker.
- [ ] Review exports, types, and style installation in consuming applications.
- [ ] Verify server rendering and hydration when included in the chosen support scope.
- [ ] Verify keyboard interaction, focus, accessible names, and opening/closing behavior in interactive components.
- [ ] Review themes, contrast, states, responsiveness, and reduced motion.
- [ ] Document installation, customization, composition, and complete examples.
- [x] Select `@egcs/newui`, public access, MIT, and `0.1.0-alpha.0` on `next`; prepare package metadata, consumer README, and known limitations. The npm package is published under the `egcs` organization.
- [x] Implement and run GitHub CI for Biome/types, library and Storybook builds, and packed export validation. Verify the public repository's main ruleset, selected actions, and SHA requirements.
- [x] Implement a main-only OIDC workflow that publishes new package versions automatically, with manual retry, and document the interactive first-package bootstrap. The GitHub trusted publisher is registered on npm; `0.1.0-alpha.1` exercises the automated publication path.
- [x] Publish the initial alpha after metadata, clean package-consumer builds, and release validation, accepting the documented incomplete Forms and focus-visible issue.

Distribution remains one npm package. The complete stylesheet and optional Tailwind area/preset integration are implemented; component-level public CSS entries remain deferred. The initial alpha is published with incomplete Forms and the known unpatched focus-visible issue, documented in its README/changelog. The focus fix and broader validation remain follow-up work. Clean package-consumer builds verified the compiled stylesheet and scoped modular Tailwind integration without workspace patches or overrides.
