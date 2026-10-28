# Implementation stages

[Workspace](README.md)

## Validated deliveries

The user accepted the implemented Button and ButtonGroup variants, layout/content primitives, compound compositions, Navbar, VerticalMenu, Radix color system, Storybook styling, and code-quality tooling with pre-commit checks. These deliveries are complete. New automated tests still require separate explicit authorization.

Remaining unchecked items below describe future work. Flex, Grid, Skeleton, and AspectRatio components are out of scope. Applications use CSS directly for layout and media proportions. Forms are deferred until the other implementation stages are complete.

## Proposed implementation order

The stage order below is a proposal. The user accepted the Bulma additions; their implementation will be distributed across the corresponding stages.
The catalog starts early and grows with each component.

### 0. Define minimum contracts

- [x] Define the project name (newui) and initial consumption format (installable package).
- [x] Define the implementation project structure: a workspace coordinator, `apps/storybook/`, and one `pkgs/ui/` library package with source and contracts together.
- [x] Choose an installable package for the first distribution. A CLI has not been approved.
- [ ] Audit selected Solid UI implementations and map dependencies and Ark equivalents.
- [ ] Define conventions for imports, composition, variants, sizes, class overrides, and DOM references.
- [ ] Check licenses and preserve notices from reused code.

### 1. Visual foundation and minimum catalog

- [x] Set up SolidJS, strict TypeScript, Tailwind, tailwind-variants, and the first Ark-powered navigation components.
- [x] Integrate official Radix scales, semantic interaction state tokens, automatic system themes, and nested light/dark scopes.
- [ ] Define typography, dimensions, visible focus, disabled states, and reduced motion.
- [x] Create the initial Storybook catalog with area navigation, component demos, property controls, and light/dark theme switching.
- [x] Implement Button and ButtonGroup with validated variants and examples.
- [x] Implement Card with optional parts, visual variants, media, and footer compositions.
- [x] Obtain user validation of Card in Storybook, including the softened, neumorphism-inspired elevated surface.
- [x] Implement the first Ark-powered Dialog with Bulma-inspired modal-card presentation and responsive examples.
- [x] Obtain user validation of Dialog; the user also manually verified the examples. The text field family remains deferred to Forms.
- [ ] Validate this sample before replicating the architecture across the catalog.

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
- [ ] Drawer and Sheet: evaluate whether they are presentations of the same implementation.
- [ ] Alert and Callout: evaluate usage differences before maintaining separate APIs.
- [ ] Toast: choose one solution; compare the Toast and Sonner references without automatically duplicating them.
- [ ] Progress and Progress Circle.

### 4. Navigation and interaction

- [ ] Accordion, Collapsible, and Tabs.
- [ ] Breadcrumb and Pagination.
- [ ] Dropdown Menu and Context Menu.
- [ ] Menubar and Navigation Menu.
- [ ] Command, Sidebar, Resizable, and Carousel.
- [x] Implement Navbar and VerticalMenu with responsive navigation, Ark-powered submenus/disclosures, grouped links, and optional nested branches.
- [x] Obtain user validation of Navbar and VerticalMenu in Storybook.

Each behavior needs an explicit mapping to Ark. If no suitable equivalent exists, record the gap before choosing another implementation.

### 5. Data and visualizations

- [ ] Table and Data Table.
- [ ] Timeline.
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

- [ ] Review exports, types, and style installation in consuming applications.
- [ ] Verify server rendering and hydration when included in the chosen support scope.
- [ ] Verify keyboard interaction, focus, accessible names, and opening/closing behavior in interactive components.
- [ ] Review themes, contrast, states, responsiveness, and reduced motion.
- [ ] Document installation, customization, composition, and complete examples.
- [ ] Publish only after defining the distribution format.
