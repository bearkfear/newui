# Changelog

## 0.1.0-alpha.0

Initial experimental release, distributed through the `next` tag.
- SolidJS components with public area entries and shared ESM module identities.
- Complete compiled CSS, semantic design tokens, Radix color scales, and automatic light/dark themes.
- Optional Tailwind 4/PostCSS area compilation and a shared-token preset.
- Initial Forms components: Field, Input, Textarea, and InputGroup. The broader Forms catalog is unfinished.

### Known limitations

This alpha has no stable API guarantee. SSR/hydration and the full browser interaction catalog have not been validated for release.

The external Ark dependency resolves `@zag-js/focus-visible@1.45.0`. Its focus wrapper can make `HTMLElement.prototype.focus` read-only and conflict with other focus wrappers, as observed in Storybook navigation. The development workspace applies a patch, but that patch is not included in the published library or inherited by consuming applications. This is an accepted initial-alpha limitation; a compatible upstream update remains planned. See the [patch audit](https://github.com/bearkfear/newui/blob/main/workspace/patches/README.md).
