# Changelog

## 0.1.0

First official release without a prerelease suffix, distributed through npm's `latest` tag. Includes the components, tokens, compiled CSS, area entries, and optional Tailwind/PostCSS integration introduced in the alpha series.

### Added

- Add Ark-based Select with single/multiple selection, typed collections, clear actions, Field integration, themed portals, native FormData and cancelable reset support.
- Add Checkbox, CheckboxGroup, and RadioGroup with composable controls, shared choice options, native inputs, group selection limits, and Field feedback.
- Add Switch with solid/outline tracks, rounded/square geometry, label placement, passive tones, and native form behavior.
- Add DateInput, DatePicker, and DateRangePicker with localized Ark segments, calendar navigation, inclusive bounds, unavailable endpoints, partial ranges, and Gregorian CalendarDate values without timezone conversion.
- Export LocaleProvider, CalendarDate, parseDate, and typed date selection/change contracts. Separate localized presentation from ISO form serialization and stable range field names.
- Add reviewed Storybook examples covering pt-BR/en-US comparison, controlled/uncontrolled values, native submission/reset, validation, Dialog, themes, sizes, and mobile layouts.

### Changed

- Include the new controls in the main/Forms exports and complete/Forms stylesheets; declare internationalized/date explicitly at Ark's installed version.
- Update installation guidance to use the default npm tag and keep prereleases on `next`.
- Derive the publishing tag from the package version and reject a mismatched publishConfig.tag before publishing.

### Known limitations

The catalog remains incomplete. This is a 0.x API; minor releases may change public contracts. SSR/hydration and full cross-browser interaction coverage remain unvalidated for release. The workspace focus-visible dependency patch is not inherited by consumers; see the original known limitation below.

Dates support Gregorian AD calendar dates only. Unavailable interior days may be crossed by a range, and some Ark segment live-region announcements remain in English. The date family was reviewed in Storybook and Chromium; dedicated automated date interaction tests were not added. See the [date family documentation](https://github.com/bearkfear/newui/blob/main/workspace/pkgs/ui/forms/date/README.md) for the full contract.

## 0.1.0-alpha.6

### Added

- Add RichTextEditor with canonical JSON documents, controlled and uncontrolled values, native form submission/reset, character limits, readonly/disabled/invalid states, and an accessible composable toolbar.
- Include headings, inline formatting, links, ordered and unordered lists, blockquotes, code blocks, horizontal rules, and undo/redo in the default editor schema and toolbar.
- Export HTML-to-JSON parsing, normalized JSON-to-HTML rendering, plain-text extraction, emptiness checks, schema validation, and document types through the DOM-independent `@egcs/newui/rich-text` entry.
- Add reviewed Storybook examples for controlled values, representations, native forms, legacy HTML conversion, states, themes, and mobile layouts.
- Document public rich-text APIs in English with matching Brazilian Portuguese JSDoc guidance.

### Changed

- Include RichTextEditor styles in the complete and Forms stylesheet distributions while keeping its JavaScript engine out of unrelated Forms imports.

RichTextEditor was reviewed in Storybook and explored in Chromium, including form submission/reset and an accessibility scan. Dedicated automated interaction coverage has not been added. HTML import is schema normalization rather than lossless conversion, and the editor remains a client-side, opt-in dependency. Existing alpha limitations still apply.

## 0.1.0-alpha.5

### Added

- Add NumberInput and CurrencyInput with exact canonical decimal string values, configurable locale/grouping, fractional precision, sign rules and decimal-string range validation.
- Support decimal currency entry and automatic minor-unit entry, with currency-derived fractional defaults, configurable currency symbols/codes and InputGroup prefix/suffix composition.
- Toggle the entire value's sign with the minus key while preserving selection. Keep mobile keyboards supported through composed sign actions.
- Export formatNumber, parseNumber, formatCurrency, parseCurrency, configuration validators and types through the DOM-independent numbers entry and the main/Forms entries.
- Preserve initial/external values, controlled editing, undo/redo and native form submission/reset. Currency clipboard input accepts complete localized amounts with or without its configured decoration.
- Add reviewed Storybook examples for locales, currencies, decimal places, entry modes, large precise values, composition, forms, states, themes, mobile and independent helpers.

### Changed

- Share the existing canceled-reset-aware text-control binding between pattern masks and decimal inputs.

The number and currency components were reviewed in Storybook and explored in Chromium. Dedicated automated coverage has not been added. Actual iPhone keyboards, IME and broader browser parity remain unverified. Existing alpha limitations still apply.

## 0.1.0-alpha.4

### Added

- Add TopProgress and createTopProgress to the main and Feedback entries for a fixed page-loading bar with an application-owned, shareable controller.
- Support automatic indeterminate advancement, manual numeric values, completion/error/reset controls, and overlapping promise tracking. Keep fast requests hidden with a configurable appearance delay.
- Preserve themes and motion preferences through the existing portal scope. Include optional glow, semantic error color, reduced motion, forced colors, and public height/offset/color/layer tokens.
- Add reviewed Storybook examples for global context sharing, overlapping requests, pending failures, fast requests, manual values, themes, mobile, and reduced motion.

Existing alpha limitations remain unchanged.

## 0.1.0-alpha.3

### Added

- Add MaskedInput with raw controlled values, configurable tokens, case transforms, escaped literals, progressive masks, and Field/InputGroup composition. IMask owns text editing and cursor behavior.
- Export maskText and unmaskText for plain strings, plus TextMaskOptions and token/value types, from the main and Forms entries. Add the DOM-independent masking entry for helpers and configuration validation in Node and browsers.
- Validate backend mask settings before compilation with validateTextMaskOptions. Export textMaskLimits: 256 UTF-16 code units per pattern, 16 alternatives, and 64 custom tokens. Invalid definitions are rejected rather than shortened.
- Add explicit formatted/raw native form submission, reviewable Storybook examples, and regression coverage for helpers, configuration, clipboard editing, and forms.

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

Release automation validation: publish through the GitHub Actions OIDC workflow on the `next` tag. Component code and APIs are unchanged from `0.1.0-alpha.0`; incomplete Forms and the known focus-visible limitation still apply.

## 0.1.0-alpha.0

Initial experimental release, distributed through the `next` tag.
- SolidJS components with public area entries and shared ESM module identities.
- Complete compiled CSS, semantic design tokens, Radix color scales, and automatic light/dark themes.
- Optional Tailwind 4/PostCSS area compilation and a shared-token preset.
- Initial Forms components: Field, Input, Textarea, and InputGroup. The broader Forms catalog is unfinished.

### Known limitations

This alpha has no stable API guarantee. SSR/hydration and the full browser interaction catalog have not been validated for release.

The external Ark dependency resolves `@zag-js/focus-visible@1.45.0`. Its focus wrapper can make `HTMLElement.prototype.focus` read-only and conflict with other focus wrappers, as observed in Storybook navigation. The development workspace applies a patch, but that patch is not included in the published library or inherited by consuming applications. This is an accepted initial-alpha limitation; a compatible upstream update remains planned. See the [patch audit](https://github.com/bearkfear/newui/blob/main/workspace/patches/README.md).
