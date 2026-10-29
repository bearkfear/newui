# Implementation stages

[Workspace](README.md)

## Validated deliveries

The user accepted the implemented actions and menus, layout/content primitives, compound compositions, navigation including Steps, overlays, feedback, native Table, Radix color system, Storybook styling, and code-quality tooling with pre-commit checks. These deliveries are complete. New automated tests still require separate explicit authorization.

Remaining unchecked items below describe future work. Flex, Grid, Skeleton, and AspectRatio components are out of scope. Applications use CSS directly for layout and media proportions. Forms are deferred until the other implementation stages are complete. Icon actions use Button iconOnly with an accessible name; no separate IconButton or CloseButton component is planned.

## Proposed implementation order

The stage order below is a proposal. The user accepted the Bulma additions; their implementation will be distributed across the corresponding stages.
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
- [ ] Menubar and Navigation Menu.
- [ ] Command, Sidebar, Resizable, and Carousel.
- [x] Implement Ark-powered Steps with horizontal/vertical layouts, associated content, next/back navigation, completion, controlled state, and linear validation examples using Radix tokens.
- [x] Obtain user validation of Steps, including full-width horizontal distribution and plain content with optional Card composition.
- [x] Implement Navbar and VerticalMenu with responsive navigation, Ark-powered submenus/disclosures, grouped links, and optional nested branches.
- [x] Obtain user validation of Navbar and VerticalMenu in Storybook.

Each behavior needs an explicit mapping to Ark. If no suitable equivalent exists, record the gap before choosing another implementation.

### 5. Data and visualizations

- [x] Implement native Table with Solid UI/Bulma-inspired presentation, Radix tokens, composable borders/stripes/density/hover, and responsive Storybook examples, without Kobalte or additional dependencies.
- [x] Obtain user validation of Table, including square bordered corners without scroll-container clipping.
- [ ] Data Table.
- [x] Implement native Timeline with vertical/horizontal layouts, chronological lists, dates, custom indicators, Radix status colors, and responsive progress/history Storybook examples.
- [x] Obtain user validation of Timeline, including horizontal and vertical layouts.
- [ ] Charts, Bar List, Delta Bar, and Badge Delta.

Data Table and Charts require their own dependency evaluation; do not assume Ark provides data tables or chart rendering.

### 6. Layouts and larger blocks

- [ ] Implement the Bulma additions according to the [comparison](references/bulma.md#bulma-differences-from-solid-ui), reusing existing primitives.
- [ ] Create complete form, settings, and listing examples.
- [x] Implement Hero, Footer, Media Object, Panel, and ActionBar as compound compositions with responsive Storybook examples.
- [x] Obtain user validation of Hero, Footer, Media Object, Panel, and ActionBar in Storybook.
- [ ] Create responsive compositions with stabilized components.

### 7. Forms (last implementation stage)

- [ ] Consolidate Label, Input, and Textarea within the Field contract.
- [ ] Checkbox, Radio Group, Switch, Toggle, and Toggle Group.
- [ ] Number Field, OTP Field, and Slider.
- [ ] Select and Combobox.
- [ ] Date Picker.
- [ ] Implement Input Group, field groups, and File Upload.

The Field contract must associate the label, description, and error with the control. Validation and form library integration require their own decision.

### 8. Preparation for external use

- [ ] Adopt a compatible stable Ark release using Zag focus-visible 1.46.0 or later, remove the workspace focus patch, and validate the packed library in a clean consumer without workspace overrides/patches.
- [ ] Review exports, types, and style installation in consuming applications.
- [ ] Verify server rendering and hydration when included in the chosen support scope.
- [ ] Verify keyboard interaction, focus, accessible names, and opening/closing behavior in interactive components.
- [ ] Review themes, contrast, states, responsiveness, and reduced motion.
- [ ] Document installation, customization, composition, and complete examples.
- [ ] Publish only after defining the distribution format.
