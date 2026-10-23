# Themes

[Foundations](README.md)

## Current contract

The stylesheet includes the official Radix Colors sRGB scales for Slate, Blue, Sky, Green, Amber, and Red. Public semantic tokens map these to neutral, primary, info, success, warning, and danger. The same semantic role is used in both themes.

`color-scheme: light dark` follows the operating system by default. No JavaScript provider, hydration effect, or consumer Radix installation is required. `light-dark()` selects the corresponding official value when a color is used; native controls also follow the active color scheme. This targets browsers supporting CSS `light-dark()` (Baseline 2024).

Override the theme on the document or on any container:

```html
<html data-nui-theme="dark">
  <body>
    <section data-nui-theme="light">Light content inside a dark page</section>
    <section data-nui-theme="system">Follow the operating system here</section>
  </body>
</html>
```

`light`, `dark`, and `system` are explicit values. An unmarked descendant inherits the nearest color scheme; a nested explicit value overrides it. Use `--nui-background` and `--nui-foreground` for the surfaces and text of theme containers. Theme selection itself does not paint a container background.

## Semantic state roles

| Role | Radix step |
| --- | --- |
| Background / subtle surface | Neutral 1 / 2 |
| Interactive surface / hover / active or selected | Tone 3 / 4 / 5 |
| Separator / control border / hovered border | 6 / 7 / 8 |
| Solid / solid hover | 9 / 10 |
| Colored or supporting text / high-contrast text | 11 / 12 |
| Focus ring | Tone 8 |
| Disabled background / border / text | Neutral 3 / 6 / 8 |

Solid primary (Blue), success (Green), and danger (Red) use white text on steps 9 and 10 in both themes. Info (Sky) uses light Slate 12; warning (Amber) uses light Sand 12. These match the contrast tokens in [Radix Themes](https://github.com/radix-ui/themes/tree/main/packages/radix-ui-themes/src/styles/tokens/colors), rather than an automatic black/white luminance calculation. Neutral solid buttons use steps 12/11 with step 1 text. Disabled styling and the neutral solid exception are newui policies. Accessibility still needs evaluation with the actual typography and custom overrides.

## Customization and provenance

`--nui-primary-1` through `--nui-primary-12` expose the semantic ramp. Role tokens such as `--nui-primary-soft`, `--nui-primary-soft-hover`, `--nui-primary-border`, and `--nui-primary-text` are consumed by recipes. Override the complete relevant role set on a container when changing a palette; changing only a solid color does not recolor soft surfaces or text. All custom values must maintain appropriate contrast.

`foundations/radix.css` is generated from the pinned `@radix-ui/colors` dependency. Regenerate with `bun run colors:generate` from `workspace/pkgs/ui/` after an intentional dependency update. The package build includes `RADIX_COLORS_LICENSE.txt`.

Storybook's system option exercises the public CSS contract directly. Its manager resolves the operating system separately because its theming API accepts JavaScript color values.

Application-specific theme persistence and user preference storage remain the consuming application's responsibility.
