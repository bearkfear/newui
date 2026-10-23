# Implementation stages

[Workspace](README.md)

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

- [ ] Set up SolidJS, TypeScript, Tailwind, tailwind-variants, and Ark.
- [x] Integrate official Radix scales, semantic interaction state tokens, automatic system themes, and nested light/dark scopes.
- [ ] Define typography, dimensions, visible focus, disabled states, and reduced motion.
- [x] Create the initial Storybook catalog with area navigation, component demos, property controls, and light/dark theme switching.
- [ ] Implement Button, Card, and the text field family; use Dialog to validate composition and overlays.
- [ ] Validate this sample before replicating the architecture across the catalog.

### 2. Basic elements and organization

- [ ] Badge, Separator, Skeleton, Avatar, and Aspect Ratio.
- [ ] Flex and Grid.
- [x] Implement Container, Section, Text, Heading, and Prose, inspired by the gaps identified through Bulma.
- [ ] Obtain user validation of these five primitives in Storybook before creating or expanding their tests.

### 3. Forms

- [ ] Consolidate Label, Input, and Textarea within the Field contract.
- [ ] Checkbox, Radio Group, Switch, Toggle, and Toggle Group.
- [ ] Number Field, OTP Field, and Slider.
- [ ] Select and Combobox.
- [ ] Date Picker.
- [ ] Implement Input Group, field groups, and File Upload.

The Field contract must associate the label, description, and error with the control. Validation and form library integration require their own decision.

### 4. Overlays and feedback

- [ ] Consolidate Dialog and implement Alert Dialog.
- [ ] Popover, Tooltip, and Hover Card.
- [ ] Drawer and Sheet: evaluate whether they are presentations of the same implementation.
- [ ] Alert and Callout: evaluate usage differences before maintaining separate APIs.
- [ ] Toast: choose one solution; compare the Toast and Sonner references without automatically duplicating them.
- [ ] Progress and Progress Circle.

### 5. Navigation and interaction

- [ ] Accordion, Collapsible, and Tabs.
- [ ] Breadcrumb and Pagination.
- [ ] Dropdown Menu and Context Menu.
- [ ] Menubar and Navigation Menu.
- [ ] Command, Sidebar, Resizable, and Carousel.
- [ ] Implement Navbar and a static vertical menu, inspired by Bulma, after the necessary primitives.

Each behavior needs an explicit mapping to Ark. If no suitable equivalent exists, record the gap before choosing another implementation.

### 6. Data and visualizations

- [ ] Table and Data Table.
- [ ] Timeline.
- [ ] Charts, Bar List, Delta Bar, and Badge Delta.

Data Table and Charts require their own dependency evaluation; do not assume Ark provides data tables or chart rendering.

### 7. Layouts and larger blocks

- [ ] Implement the Bulma additions according to the [comparison](references/bulma.md#bulma-differences-from-solid-ui), reusing existing primitives.
- [ ] Create complete form, settings, and listing examples.
- [ ] Implement Hero, Footer, Media Object, Panel, and an action bar as compositions or recipes.
- [ ] Create responsive compositions with stabilized components.

### 8. Preparation for external use

- [ ] Review exports, types, and style installation in consuming applications.
- [ ] Verify server rendering and hydration when included in the chosen support scope.
- [ ] Verify keyboard interaction, focus, accessible names, and opening/closing behavior in interactive components.
- [ ] Review themes, contrast, states, responsiveness, and reduced motion.
- [ ] Document installation, customization, composition, and complete examples.
- [ ] Publish only after defining the distribution format.
