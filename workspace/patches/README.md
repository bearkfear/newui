# Dependency patches

## Storybook 10.6.1

`storybook@10.6.1.patch` preserves the workspace's Bun-compatible configuration loading. It uses synchronous loader hooks where available and preserves the existing fallback.

## Zag focus-visible 1.45.0

`@zag-js%2Ffocus-visible@1.45.0.patch` keeps `HTMLElement.prototype.focus` writable when Zag installs and restores its focus-tracking wrapper. The upstream descriptor omits `writable`, which can leave the method read-only and conflict with Storybook's own focus wrappers during story navigation.

The patch adds `writable: true` to the two descriptors in both ESM and CommonJS builds. It does not replace the native focus function or alter menu keyboard handling. Bun applies the patch through `patchedDependencies`; review and remove it when the pinned dependency includes the fix.

### Published-version audit

Checked the npm registry and published package tarballs on 2026-10-28:

- `@zag-js/focus-visible@1.45.0` omits `writable` in both descriptors.
- `1.46.0` includes `writable: true` during installation and restoration, matching this patch's correction.
- `1.47.0` retains that correction and additionally handles unreadable accessors while preserving the original descriptor for restoration.
- The latest stable `@ark-ui/solid` is still `5.39.3`, which pins Zag dependencies, including focus-visible, to `1.45.0`. No stable Ark update currently removes the need for this workspace patch.

Keep the patch until a compatible stable Ark release resolves the corrected Zag package, then remove the patch entry/file, reinstall, and recheck focus restoration and story navigation. Do not replace it with a workspace override as a distribution fix: overrides and patches in this root manifest are not inherited by consumers of the UI package.

The library build keeps package dependencies external (`pkgs/ui/scripts/build.ts`), so it does not embed this patch in `dist/`. A clean consuming application must be checked before publication. No duplicate Zag bug report is needed for the already-published fix.

Sources: [npm Zag metadata](https://registry.npmjs.org/@zag-js%2Ffocus-visible), [npm Ark Solid metadata](https://registry.npmjs.org/@ark-ui%2Fsolid), and published `dist/index.mjs` from the [1.45.0](https://registry.npmjs.org/@zag-js/focus-visible/-/focus-visible-1.45.0.tgz), [1.46.0](https://registry.npmjs.org/@zag-js/focus-visible/-/focus-visible-1.46.0.tgz), and [1.47.0](https://registry.npmjs.org/@zag-js/focus-visible/-/focus-visible-1.47.0.tgz) tarballs.
