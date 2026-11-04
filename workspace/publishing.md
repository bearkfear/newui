# Publishing experimental releases

The first release is `@egcs/newui@0.1.0-alpha.0`, with npm tag `next` and public access. Forms is incomplete and the unpatched external Zag focus-visible dependency is an accepted alpha limitation. Neither blocks this release. See the packaged [changelog](pkgs/ui/CHANGELOG.md).

## Prepare a version

Update the UI package version and changelog in a pull request, refresh `bun.lock`, and let CI pass. Merge the PR before publishing. Do not publish directly from an unreviewed branch. Every subsequent release needs a new version; npm versions cannot be overwritten.

Run from `workspace/`:

```sh
bun install --frozen-lockfile --ignore-scripts
bun run build
bun run check
bun run pack
npm publish ./artifacts/newui-preview.tgz --dry-run --access public --tag next --ignore-scripts
```

Review the package file list, README, license, changelog, version, public exports, and dependency graph. CI also builds Storybook and the standalone application. The workspace patch is not propagated to installed packages, and the alpha does not claim full browser or SSR validation.

For the initial alpha, the tarball was also installed with npm into a separate consumer without workspace patches or overrides. A Solid/Vite build verified Actions, Forms, and the complete stylesheet. After adopting `@egcs/newui`, another clean consumer build verified the scoped imports, PostCSS plugin, modular Actions/Forms styles, and optional preset. This verifies installation and bundling, not the known runtime focus issue.

## Bootstrap the first package

The package does not yet exist on npm, so there is no package settings page on which to register its trusted publisher. The first publish uses the maintainer's interactive npm login and account 2FA. Never put login credentials or a permanent publish token into GitHub secrets or this repository.

After merging the release PR, rebuild and pack the exact merged code, then run from `workspace/`:

```sh
npm login --registry=https://registry.npmjs.org
npm publish ./artifacts/newui-preview.tgz --access public --tag next --ignore-scripts --registry=https://registry.npmjs.org
```

The npm package belongs to the `egcs` organization; the GitHub repository remains `bearkfear/newui`. A local bootstrap publish has no GitHub provenance attestation; later GitHub OIDC publishes generate it automatically.

## Configure trusted publishing on npm

After the bootstrap, open **@egcs/newui → Settings → Trusted publishing** on npmjs.com. Add GitHub Actions with:

| Field                | Value                                       |
| -------------------- | ------------------------------------------- |
| Organization or user | `bearkfear`                                 |
| Repository           | `newui`                                     |
| Workflow filename    | `publish.yml`                               |
| Environment          | Leave empty; this workflow does not use one |
| Allowed actions      | Enable direct `npm publish`                 |

The workflow uses npm OIDC without an npm token. Register the publisher when the next version is ready: current npm guidance requires its first successful publish within two days. Once OIDC is verified, select **Require two-factor authentication and disallow tokens** in the package's publishing-access settings. See the [npm trusted publishing guide](https://docs.npmjs.com/trusted-publishers/).

## Publish subsequent versions

Once the trusted publisher is configured, merging a UI `package.json` change into `main` triggers **Publish alpha** automatically. The workflow queries npm: existing versions are skipped, a missing package requests the interactive bootstrap, and lookup failures stop the job. A new version of an existing package is rebuilt, validated, and published on `next` through OIDC. Documentation-only changes do not trigger publishing.

For a retry after fixing npm configuration, open **GitHub → Actions → Publish alpha → Run workflow**, choose **main**, and run it. The workflow accepts no package/version inputs, runs only on `main`, grants OIDC only to the publishing job, and never runs on pull requests. Its actions are already in the repository allowlist.

Verify with `npm view @egcs/newui@next version --registry=https://registry.npmjs.org`, then install with `bun add @egcs/newui@next solid-js`. Keep `latest` reserved for a later release decision. This workflow does not create a GitHub Release or automatically increment versions.
