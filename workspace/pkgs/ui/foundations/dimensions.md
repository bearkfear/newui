# Dimensions and surfaces

[Foundations](README.md)

Use `--nui-space-unit` (0.25rem) as the base of numeric spacing and sizing utilities in compiled recipes. Common multiples 1, 2, 3, 4, 5, 6, 8, and 12 represent 4, 8, 12, 16, 20, 24, 32, and 48px at a 16px root. Half steps remain possible. Changing this token affects numeric padding, gap, margin, width, and height utilities; it is not a spacing-only density switch. Explicit dimensions, percentages, breakpoints, and container limits retain their contracts.

| Public token            | Default       | Consumers                |
| ----------------------- | ------------- | ------------------------ |
| --nui-control-height-xs | 1.5rem / 24px | Button xs                |
| --nui-control-height-sm | 2rem / 32px   | Button sm, Pagination sm |
| --nui-control-height-md | 2.5rem / 40px | Button md, Pagination md |
| --nui-control-height-lg | 3rem / 48px   | Button lg, Pagination lg |

Button responsive selects the next smaller control height below 640px; xs stays xs. Padding, font, and icon sizing still follow its existing size recipe. Sizes describe each component's context; Avatar, Badge, Tabs, and loading indicators do not share control-height semantics. Small controls require appropriate placement and usable pointer targets in the consuming interface.

Radius tokens `--nui-radius-xs`, `sm`, `md`, `lg`, `xl`, `2xl`, `3xl`, and `4xl` default to 0.125, 0.25, 0.375, 0.5, 0.75, 1, 1.5, and 2rem. Compiled radius utilities consume these tokens. Button uses md, Card uses xl, and round/pill treatments retain their full radius. Square Table borders remain intentional.

Use background for the app plane, surface for subtle grouping, and borders for separation. Card's outline, soft, and elevated variants remain contextual choices. `--nui-elevated-border` and `--nui-elevated-shadow` preserve its validated elevated appearance. Overlay and toast shadows remain separately named tokens; a single generic elevation number would erase their different uses.

`--nui-header-gap` (0.125rem) controls compact title/description spacing across Card, Panel, Dialog, AlertDialog, Sheet, and Popover. It is independent of outer padding and body gaps.

Review Foundations / Dimensions and Foundations / Customization. Local token overrides inherit into descendants and are copied into the existing themed overlay portals. Use direct CSS for application layout and media proportions; no Flex, Grid, Skeleton, or AspectRatio component is planned.
