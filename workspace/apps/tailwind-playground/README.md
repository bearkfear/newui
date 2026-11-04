# Tailwind consumer playground

[Workspace](../../README.md) · [Consumer setup](../../pkgs/ui/getting-started/tailwind.md)

This Solid/Vite application consumes the built `@egcs/newui` package through public JavaScript, CSS, and PostCSS exports. It uses unprefixed application utilities beside `nui:` library utilities, one application Preflight, selected Actions/Forms styles, and the optional shared-token preset.

From `workspace/`:

```sh
bun install
bun run build
bun run dev:consumer
```

Open `http://127.0.0.1:4174`. `bun run build:consumer` generates the production application. The workspace's shared typecheck includes this app; build the library first so its public declarations and PostCSS entry are available.

## Review

- Change the primary palette. The newui Button, application button, supporting surface, text, borders, and focus roles should follow the selected palette. Compare settled states after color transitions and move the pointer off both buttons to compare the same interaction state.
- Change the medium radius and spacing unit. Both buttons should follow the same radius and horizontal padding; numeric sizing also follows spacing, while the library's explicit control height remains separate.
- Switch light/dark/system appearance. System follows the browser's preferred scheme without rebuilding.
- Press both buttons and use the field action. They share the visible press count.
- Review a 320px viewport and keyboard focus. The application controls are native HTML, while Field/InputGroup use newui's existing associations and behavior.

The same UI appears in Storybook under **Getting started / Tailwind preset**, with source aliases and an isolated stylesheet. The standalone app uses built package entries. Neither example loads `@egcs/newui/styles.css` alongside the modular integration.

## Packaging validation

The delivery also compiled the CSS integration from a `.tgz` extracted into a separate consumer directory: the public plugin and payload worked without reading `pkgs/ui` styles. Preset and independent-theme modes were checked, with repeated area imports selecting one foundation graph and one reset. The tarball contained all 49 recipe sources, no stories, and no application-page examples.

That check reused the installed compiler dependencies. A fresh registry installation without workspace patches, compatibility across other bundlers, and publication remain separate release work. No automated tests were created or expanded.
