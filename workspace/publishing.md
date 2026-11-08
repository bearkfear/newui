# Publishing

This guide is for maintainers releasing `@egcs/newui`. Official releases use the npm `latest` tag; prereleases use `next`. See the [changelog](pkgs/ui/CHANGELOG.md) for changes and known limitations.

## Prepare a release

Update the UI package version and changelog in a pull request, refresh `bun.lock`, and let CI pass before merging. Every release requires a new version; published npm versions cannot be overwritten.

Run from `workspace/` to review the package locally:

```sh
bun install --frozen-lockfile --ignore-scripts
bun run build
bun run check
bun run pack
npm publish ./artifacts/newui-preview.tgz --dry-run --access public --tag latest --ignore-scripts
```

Review the archive's file list, README, license, changelog, public exports, and dependencies. CI also builds Storybook and runs the mask regression suite. Validate installation and bundling in a separate consumer when distribution changes; workspace patches and overrides do not propagate to consumers.

## Automated publishing

Merging a UI `package.json` change into `main` triggers [Publish package](../.github/workflows/publish.yml). The workflow queries npm and skips versions already published. It builds the library, runs lint and type checks, validates packed exports, and publishes through npm OIDC using `latest` for official versions or `next` for prereleases. It does not increment versions or create a GitHub Release.

The trusted publisher for `@egcs/newui` uses GitHub repository `bearkfear/newui`, workflow `publish.yml`, and no environment. Publication uses no stored npm token. Changes to this configuration must also be reflected in the package's trusted publishing settings on npm.

For retries after a configuration or registry failure, use **Actions → Publish package → Run workflow** and choose **main**. The workflow accepts no package/version inputs and never publishes from pull requests.

## Verify a release

```sh
npm view @egcs/newui@latest version --registry=https://registry.npmjs.org
bun add @egcs/newui solid-js
```

Keep `publishConfig.tag` consistent with the version: `latest` without a prerelease suffix, `next` with one. The release check rejects a mismatch. Use `--tag next` for prerelease dry runs. See the [package guide](pkgs/ui/README.md) for consumption examples.
