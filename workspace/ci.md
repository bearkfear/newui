# Continuous integration

The GitHub workflow is [CI](../.github/workflows/ci.yml). It runs on pull requests, pushes to `main`, and manual dispatch. One GitHub-hosted Ubuntu job builds the library, runs Biome and strict TypeScript checks, builds Storybook, runs the approved mask regression suite in Chromium, then packages the library. Storybook includes the isolated Tailwind preset example; broader browser coverage remains separate work.

## Reproduce locally

Use Node from `.node-version` and Bun from `packageManager` in `package.json`. Run from `workspace/`:

```sh
bun install --frozen-lockfile --ignore-scripts
bun run build
bun run check
bun run build:storybook
bun run test:masking
bun run pack
```

Build first: examples importing the public package resolve declarations from the generated build. Ignoring install scripts skips the local Git hook installer in CI; developers can run `bun run hooks:install` locally.

In CI, Playwright serves the already-built Storybook with Vite preview, avoiding a cold development compiler and HMR during tests. Local tests can reuse Storybook development mode. Install Chromium with `bunx --no-install playwright install --with-deps chromium` from apps/storybook when needed.

`bun run pack` verifies that all public export targets and release documents exist inside the generated archive. Successful CI uploads `newui-package`, containing `newui-preview.tgz`, for seven days. Artifacts from pull requests are untrusted review material. This check does not establish clean registry installation or browser behavior. The initial alpha accepts the known Zag issue and incomplete Forms; see [publishing](publishing.md) and the [roadmap](roadmap.md).

## GitHub settings to apply

These settings are configured on GitHub; committing the workflow does not apply them.

In **Settings → Actions → General**:
1. Allow selected actions: `actions/checkout@*`, `actions/setup-node@*`, `actions/upload-artifact@*`, and `oven-sh/setup-bun@*`.
2. Require full-length action commit SHAs.
3. Select read-only workflow permissions and leave workflow PR creation/approval disabled.
4. Require approval for **all external contributors**; inspect their changes before approving execution.

See GitHub's [repository Actions settings](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository) and [fork approval guidance](https://docs.github.com/en/actions/how-tos/manage-workflow-runs/approve-runs-from-forks).

After the first successful run, protect `main` in **Settings → Rules → Rulesets**: require pull requests and the `Lint, types, builds and package` status check, block force pushes and deletion, and restrict bypasses. Require an approving review when another maintainer is available; a sole maintainer cannot approve their own PR. Review changes to workflows, dependency lockfiles, patches, and build scripts carefully. GitHub documents [branch protection](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-protected-branches/about-protected-branches).

No npm token or other secret is needed for CI. It packages an artifact and does not publish to npm or deploy Storybook. The separate [publishing workflow](../.github/workflows/publish.yml) publishes new package versions merged into `main` through npm OIDC after the initial bootstrap, with a manual retry option; see [publishing](publishing.md).

## Security decisions and maintenance

The job has only `contents: read`, does not persist checkout credentials, uses GitHub-hosted runners, and installs the committed dependency lockfile without lifecycle scripts. Actions are pinned to verified upstream commit SHAs. Dependencies and repository build commands still execute code, so the absence of install scripts is not a sandbox.

There are no privileged fork triggers, user-supplied expressions in shell commands, shared dependency caches, publication secrets, or downstream workflows executing uploaded artifacts. Retain those boundaries when extending CI. GitHub's [secure use reference](https://docs.github.com/en/actions/reference/security/secure-use) explains these protections.

Review upstream action changes before updating SHAs and retain version comments. The four direct actions use Node 24 runtimes; setup-bun v2.2.0 removes the prior Node 20 action-runtime warning independently of the project's .node-version. Keep runtime versions and bun.lock synchronized. Dependabot and CodeQL remain optional follow-ups.

## Recent GitHub changes reviewed

Security guidance was checked on November 4, 2026:
- [July 28: suspicious public-repository workflows may be held for manual approval](https://github.blog/changelog/2026-07-28-github-actions-holds-potentially-malicious-workflows-for-approval/). GitHub applies this automatically; inspect any held run before approving it.
- [September 17, updated October 21: workflow execution protections](https://github.blog/changelog/2026-09-17-workflow-execution-protections-in-github-actions-generally-available/) include a default public-repository policy restricting `pull_request_target`, with enforcement scheduled for December 2. This CI uses `pull_request`.
- [Workflow dependency lockfiles](https://docs.github.com/en/actions/concepts/security/workflow-dependency-lockfiles) can additionally lock transitive actions and repository identities. This workflow currently pins its four direct actions explicitly; lockfile adoption remains a possible follow-up.
