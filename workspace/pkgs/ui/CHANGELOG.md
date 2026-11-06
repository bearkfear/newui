# Changelog

## Unreleased

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
