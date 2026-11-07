# Changelog

## 0.1.0-alpha.3

### Added

- Add MaskedInput with raw controlled values, configurable tokens, case transforms, escaped literals, progressive masks, and Field/InputGroup composition. IMask owns text editing and cursor behavior.
- Export maskText and unmaskText for plain strings, plus TextMaskOptions and token/value types, from the main and Forms entries. Add the DOM-independent masking entry for helpers and configuration validation in Node and browsers.
- Validate backend mask settings before compilation with validateTextMaskOptions. Export textMaskLimits: 256 UTF-16 code units per pattern, 16 alternatives, and 64 custom tokens. Invalid definitions are rejected rather than shortened.
- Add explicit formatted/raw native form submission, reviewable Storybook examples, and authorized regression coverage for helpers, configuration, clipboard editing, and forms.

### Fixed

- Clear stale undo history on accepted reset, external controlled replacements, and mask configuration changes. Preserve normal editing history and canceled resets.
- Wait until native reset propagation completes before checking cancellation. Preserve readonly/disabled state for IMask undo/redo.
- Preserve the final visible InputGroup control's corners when raw mask submission appends a hidden input.
- Prefer the shorter dynamic pattern when editable input fits multiple masks, including after pasting formatted phone text and deleting the eleventh digit.

### Changed

- Keep the Storybook build in pull-request/main CI and remove the duplicate build from npm publishing. Publishing still builds and checks the library and validates packed exports before npm OIDC publication.

The alpha's existing focus-visible dependency, incomplete Forms, browser coverage, and SSR/hydration limitations still apply. See the known limitations below.

## 0.1.0-alpha.2

### Changed

- Remove Input's `appearance` option and static presentation. Use `readOnly` for non-editable values that remain focusable and included in form data.
- Tint text-control backgrounds by tone and validation state. Use Radix step 12 for entered text and step 11 for decorative icons and addons; keep readonly and disabled presentation neutral.

### Added

- Add dedicated disabled and tone previews for Input, Textarea, and InputGroup in Storybook.

### Fixed

- Share a single-color focus contour across buttons, links, tabs, and other outlined controls, converging inward in 120ms. Preserve component colors, intentional offsets, reduced-motion preferences, and a visible system outline in forced colors.
- Fade focus out in place over 80ms and prevent the inner InputGroup control from flashing an outline on blur.
- Focus the InputGroup input when clicking decorative icons or empty group space. Preserve focus and text selection when the input is already active, without restarting the focus transition.
- Apply the shared focus contour to text controls and paint attached InputGroup focus above action buttons to prevent uneven edges. Carry tone and validation colors through addon backgrounds, text, and dividers.

## 0.1.0-alpha.1

Release automation validation: publish through the authorized GitHub Actions OIDC workflow on the `next` tag. Component code and APIs are unchanged from `0.1.0-alpha.0`; incomplete Forms and the known focus-visible limitation still apply.

## 0.1.0-alpha.0

Initial experimental release, distributed through the `next` tag.
- SolidJS components with public area entries and shared ESM module identities.
- Complete compiled CSS, semantic design tokens, Radix color scales, and automatic light/dark themes.
- Optional Tailwind 4/PostCSS area compilation and a shared-token preset.
- Initial Forms components: Field, Input, Textarea, and InputGroup. The broader Forms catalog is unfinished.

### Known limitations

This alpha has no stable API guarantee. SSR/hydration and the full browser interaction catalog have not been validated for release.

The external Ark dependency resolves `@zag-js/focus-visible@1.45.0`. Its focus wrapper can make `HTMLElement.prototype.focus` read-only and conflict with other focus wrappers, as observed in Storybook navigation. The development workspace applies a patch, but that patch is not included in the published library or inherited by consuming applications. This is an accepted initial-alpha limitation; a compatible upstream update remains planned. See the [patch audit](https://github.com/bearkfear/newui/blob/main/workspace/patches/README.md).
