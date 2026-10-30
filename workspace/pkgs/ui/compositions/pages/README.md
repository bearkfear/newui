# Application pages

Five Storybook page examples compose the implemented catalog into practical interface scenarios. These are application examples, not new public components. Source files and styles stay in this directory and are excluded from the distributed package.

## Review in Storybook

Open **Compositions / Pages**. Each page has desktop and 320px mobile stories. Use the theme toolbar to switch light, dark, and system themes; no example pins the theme. The navigation links switch pages locally, close the mobile Sheet, and return the content to the top. Page state resets when navigating away; no account, storage, backend, or external requests are required.

| Page           | Composition and actions                                                                                                                                                                                     |
| -------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Analytics      | Metric cards, Badge Delta, Unovis LineChart/DonutChart, Bar List, Delta Bar, a reporting-period Dropdown Menu, and downloadable CSV revenue reports.                                                        |
| Orders         | Panel, native Table, status Tabs, Pagination, Empty, an order-details Sheet, Timeline, payment recording, cancellation through Alert Dialog, Toast confirmations, and CSV export of the current filter.     |
| Project        | Project metadata, Media Object/Avatar ownership, Tabs, a reversible task checklist with Progress, an activity Timeline, a linear Steps release checklist, and follow/unfollow confirmations.                |
| Service Status | Operational/degraded states, semantic badges, decorative daily health snapshots with textual alternatives, incident Timeline, Accordion history, maintenance Callout, and a reversible incident simulation. |
| Help Center    | Hero, category Tabs, guide cards, readable Prose in a Dialog, FAQ Accordion, Footer, and navigation to Service Status.                                                                                      |

The shared shell uses Sidebar, VerticalMenu, Breadcrumb, Avatar, Tooltip, Progress, and Toast. On desktop it occupies the available viewport height: navigation stays in its column, the account stays at the bottom, and the main content scrolls independently. On mobile the same navigation opens in the existing Sheet. Compact navigation centers icons through the shared Sidebar styling.

## State and behavior

Each page owns its local data and business actions. Ark-powered wrappers own navigation behavior, disclosures, menus, dialogs, focus containment, pagination, progress, and steps. No new custom interaction primitive or dependency is introduced. Table remains presentational; filtering and paging are application-owned compositions, not a Data Table API.

Orders start with twelve records and five rows per page. Pending orders can be marked paid or canceled. The active filter, totals, details, and pagination update together. The footer shows the visible record range with compact arrow controls, using page numbers on wider panels and a page summary in narrow panels. Pagination is omitted when the results fit on one page. Canceled starts empty and demonstrates the Empty composition. CSV buttons create real local downloads; report data is illustrative and fixed to 2026.

Tasks can be completed and reopened. The release checklist is independent of the project task list and uses the existing Steps completion behavior. Follow controls and order actions announce results through the shared themed Toaster. Status simulation updates the service badge, daily snapshots, incident summary, and timeline. Guide categories filter the visible articles; each guide opens its own content.

## Layout and media

The examples use native CSS grid, flexbox, and container queries. Columns become one column in narrow content areas; metric groups avoid a two-plus-one layout. Tables preserve their columns in an explicitly named horizontal scroll region. Menus and overlays use existing theme-preserving portals, and the shell leaves the selected Storybook theme intact. No image, video, Figure, Stack, AutoGrid, or Box wrapper is added. All illustrations are existing Lucide icons or native data visualizations; no remote assets are loaded.

## Validation

Implementation and examples await user review. Existing lint, formatting, type checks, and Storybook builds may run during implementation. No automated tests, assertions, or interaction test functions were created or expanded.
