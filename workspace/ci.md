# Continuous integration

The [CI workflow](../.github/workflows/ci.yml) validates pull requests targeting `main` before merge. It builds the library, checks Biome and strict TypeScript, builds the official documentation, runs the mask helper regression checks, and validates the packed package.

## Reproduce locally

Use Node from `.node-version` and Bun from `packageManager` in `package.json`. Run from `workspace/`:

```sh
bun install --frozen-lockfile --ignore-scripts
bun run build
bun run check
bun run build:docs
bun run test:masking
bun run pack
```

Build first: examples importing public package entries resolve declarations from the generated build. Ignoring install scripts skips the local Git hook installer; developers can run `bun run hooks:install` locally.

## Package artifacts

`bun run pack` verifies public export targets and release documents inside `artifacts/newui-preview.tgz`. Successful CI uploads the archive as `newui-package` for seven days. Pull request artifacts are review material; inspect the source before executing their contents.

Package validation checks the archive and its exports. Mask helper coverage is described in the [mask regression guide](pkgs/ui/forms/masked-input/test-coverage.md); package-wide limitations are in the [library guide](pkgs/ui/README.md#known-limitations).

CI does not publish or deploy. The separate [publishing workflow](publishing.md) publishes package versions merged into `main` through npm OIDC.

## Workflow maintenance

The job uses GitHub-hosted runners, `contents: read`, pinned action SHAs, no persisted checkout credentials, and frozen dependency installation without lifecycle scripts. Dependency and build commands still execute code.

Retain the separation between pull request checks and privileged publishing. Review workflow, lockfile, patch, and build-script changes carefully. Review upstream action changes before updating pinned SHAs and keep runtime versions synchronized with workspace configuration.
