# Iconography

[Foundations](README.md)

Use [Lucide for Solid](https://lucide.dev/guide/solid/getting-started) through the `lucide-solid` dependency for interface icons in components and examples. Import named icons directly; do not copy SVG paths or introduce a public newui icon catalog. Existing owning-area adapters may select from a small explicit map of imported icons.

Icons inherit `currentColor` and use Lucide's default stroke width of 2. Size follows its context: 14px for small separators, 16px for compact controls, 20px for regular actions and status symbols, and 24px for empty states. Component recipes may control SVG dimensions, including Button icon slots and Empty.Icon.

```tsx
import { Archive, Plus } from "lucide-solid";
import { Button } from "@egcs/newui";

<Button startIcon={<Plus aria-hidden="true" />}>Create project</Button>;
<Button iconOnly aria-label="Archive project">
  <Archive class="nui-button-icon" aria-hidden="true" />
</Button>;
```

Decorative icons use `aria-hidden="true"`. Give icon-only controls their accessible name on the control. Keep status meaning available as text; color and icon shape are supplementary. Component-specific icon slots remain replaceable by consumer JSX.

Loading composes Lucide Circle and LoaderCircle with the existing track token and rotation/reduced-motion rules. Progress visualizations and illustrative artwork retain their own rendering contracts.

The library build keeps Lucide as an external runtime dependency and distributes its upstream license notice, including the Feather attribution. Consumers using Lucide in their own application code should declare `lucide-solid` as a direct dependency.

Foundations / Iconography and the existing component stories provide light/dark, mobile, and reduced-motion review scenarios. The user approved the Lucide migration and iconography examples. No automated tests were created or expanded.
