# Shared theme customization

[Tailwind integration](tailwind.md) · [Theme contract](../foundations/themes.md)

The preset and library components use the same public `--nui-*` tokens. CSS overrides or runtime `style.setProperty()` updates affect both without rebuilding. This also works with the complete stylesheet for components; application utilities require the optional preset to share those tokens.

## Spacing, radius, and typography

```css
/* After your imports, or on a scoped preview container. */
:root {
  --nui-space-unit: 0.25rem;
  --nui-radius-md: 0.75rem;
  --nui-font-sans: "Your Font", sans-serif;
  --nui-focus-width: 3px;
}
```

`rounded-md` and the default Button radius now read `--nui-radius-md`. Numeric spacing/sizing utilities read `--nui-space-unit`; changing it affects width and height as well as padding and gaps. Component control heights use separate `--nui-control-height-*` tokens. Other radius sizes remain independently configurable, while full/pill radii retain their contract.

Font families, text sizes, normal/medium/semibold weights, named line heights, tight tracking, contextual shadows, and default motion settings have matching theme aliases. Use `font-sans` on a local container when locally overriding its font token. `focus-visible:focus-ring` uses the shared focus color, width, and offset. Arbitrary utility values remain explicit application decisions.

## Palettes and runtime changes

The stylesheet includes the official light/dark Slate, Blue, Sky, Green, Amber, and Red scales. It does not include every Radix palette or generate a scale from a selected color. To change the whole primary appearance, update its solid, hover, soft, border, text, focus, and contrast roles together.

The Storybook example's [primaryTheme helper](stories/tailwind-preset/primary-theme.ts) shows the complete mapping to a supplied Radix palette. An application can apply that role set to the document or a preview container:

```ts
for (const [name, value] of Object.entries(primaryTheme("green"))) {
  preview.style.setProperty(name, value);
}
preview.style.setProperty("--nui-radius-md", "18px");
preview.style.setProperty("--nui-space-unit", "5px");
```

The public `createTheme` helper builds the primary role set from a bundled palette and accepts individual semantic color token overrides:

```tsx
import { createTheme } from "@egcs/newui/theme";

const colors = createTheme({
  primary: { palette: "blue", tokens: { primaryHover: "#b59b00" } },
  tokens: { background: { light: "white", dark: "#111111" } },
});

<section style={colors}>Themed content</section>;
```

The helper returns CSS custom properties without touching the DOM. Apply them to a container or use `style.setProperty` on the document element. `tokens` overrides preset values; the top-level `tokens` takes precedence over `primary.tokens`. Paired colors become `light-dark()`. Arbitrary brand colors must provide appropriate contrast; changing only `--nui-primary` does not recolor soft surfaces or text. The included primary presets are Blue, Sky, Green, Amber, and Red.

Apply semantic role overrides on a nested scope, as the example does. Overriding only a scale alias on a descendant does not recompute other aliases already inherited from `:root`. Changing source scale aliases on the document root is a separate supported CSS mechanism.

## Appearance and ownership

The system theme remains automatic through `color-scheme` and `light-dark()`. `data-nui-theme="light"`, `"dark"`, and `"system"` also work on nested containers. No JavaScript theme provider is required. A `.dark`-based application can set `.dark { color-scheme: dark; }`; keep its application dark variant aligned with the selected scheme.

The optional Solid helpers `createColorMode` and `getColorModeScript` provide typed document mode state, optional localStorage persistence, and pre-paint restoration for SSR. Applications still own their storage key, user-defined palettes, and loading custom font files. The demo keeps palette changes in memory. Tokens follow normal CSS inheritance, and library portals copy the current theme/token scope. Consumer classes are additive; arbitrary class conflicts are not automatically merged or resolved.
