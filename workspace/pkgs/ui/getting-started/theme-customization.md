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

The playground's [primaryTheme helper](../../../apps/tailwind-playground/src/primary-theme.ts) shows the complete mapping to a supplied Radix palette. An application can apply that role set to the document or a preview container:

```ts
for (const [name, value] of Object.entries(primaryTheme("green"))) {
  preview.style.setProperty(name, value);
}
preview.style.setProperty("--nui-radius-md", "18px");
preview.style.setProperty("--nui-space-unit", "5px");
```

`primaryTheme` is example application code, not an npm export. Editors can provide their own complete role values, including `light-dark(lightValue, darkValue)`. Arbitrary brand palettes must supply their values and appropriate contrast; changing only `--nui-primary` does not recolor soft surfaces or text.

Apply semantic role overrides on a nested scope, as the example does. Overriding only a scale alias on a descendant does not recompute other aliases already inherited from `:root`. Changing source scale aliases on the document root is a separate supported CSS mechanism.

## Appearance and ownership

The system theme remains automatic through `color-scheme` and `light-dark()`. `data-nui-theme="light"`, `"dark"`, and `"system"` also work on nested containers. No JavaScript theme provider is required. A `.dark`-based application can set `.dark { color-scheme: dark; }`; keep its application dark variant aligned with the selected scheme.

An editor owns storage, restoring saved preferences, user-defined palettes, and loading custom font files. The demo keeps changes in memory. Tokens follow normal CSS inheritance, and library portals copy the current theme/token scope. Consumer classes are additive; arbitrary class conflicts are not automatically merged or resolved.
