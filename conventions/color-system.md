# Color system

## Rule

Use official Radix Colors light and dark scales through public `--nui-*` semantic tokens. Generate source palette values from the pinned `@radix-ui/colors` dependency with `bun run colors:generate` in `workspace/pkgs/ui/`; do not edit generated values or introduce ad hoc hex palettes.

Map scale steps by purpose:

- 1–2: app and subtle surfaces.
- 3–5: interactive backgrounds at rest, hover, and active/selected.
- 6: separators and non-interactive borders.
- 7–8: interactive borders, hovered borders, and focus rings.
- 9–10: solid backgrounds at rest and hover.
- 11–12: supporting and high-contrast text.

Use step 11 for colored text instead of reusing the solid background color. Transparent interactive variants may use step 3 on hover. Use explicit state colors instead of brightness filters or blanket opacity changes.

Use `color-scheme` and `light-dark()` for automatic system themes. Support `data-nui-theme="light"`, `"dark"`, and `"system"`, including nested scopes. Target browsers supporting CSS `light-dark()` (Baseline 2024).

Disabled controls use neutral step 3 backgrounds, step 6 borders, and step 8 text. This is newui's policy, not a disabled-state prescription from Radix. Native disabled behavior remains required.

Use Radix contrast guidance for solid steps 9 and 10 in both themes: Blue, Green, and Red use white text; Sky uses light Slate 12 and Amber uses light Sand 12, matching Radix Themes contrast tokens. Do not replace these mappings with an automatic black/white luminance heuristic. Neutral solid buttons intentionally use neutral 12/11 backgrounds and neutral 1 foreground. Evaluate accessibility in the context of actual text sizes and custom overrides.

Keep the upstream MIT license in the distributed package. Storybook surfaces and manager colors must use the same Radix scales.

## Rationale

Shared semantic roles keep component states consistent and allow theme changes without modifying component APIs.

## References

- [Radix scale roles](https://www.radix-ui.com/colors/docs/palette-composition/understanding-the-scale).
- [Theme contract](../workspace/pkgs/ui/foundations/themes.md).
