# Mask regression coverage

[Contract](README.md) · [Exploratory review](paste-review.md)

Existing exploratory reports describe the original manual sessions; they do not imply verification on additional browsers.

## Automated checks

Run from workspace:

```sh
bun run test:masking
```

- mask-text.spec.ts covers formatting/parsing, empty/partial/long input, alternatives, immutable pattern lists, custom tokens, transforms, escaped literals, and alternative prefixes.
- mask-configuration.spec.ts covers all three definition limits, malformed backend configuration, frozen limits, and enforcement by both helpers.
- masked-input.spec.ts covers real clipboard paste, overflow/selection/cursor, native validity and event counts, controlled values, dynamic mask deletion, configuration replacement, native FormData, reset/cancellation/history, and readonly undo/redo.
- Clipboard scenarios run sequentially in one file because native clipboard state is shared between browser instances. Other tests retain normal parallel execution.
- bun run pack verifies all public export files and executes the built masking entry in Node without a DOM or Solid rendering owner.

The focused suite has 32 cases and uses the configured Chromium project. Firefox, Safari, mobile keyboards, composition, and full SSR/hydration remain separate work.

Pull-request/main CI installs Chromium and runs this suite before validating the package. The publishing workflow does not duplicate browser tests.

## Regression scenarios

After formatted phone paste, deleting the eleventh digit could keep the longer mask incomplete. Candidate scoring now counts accepted editable characters rather than raw input that may include pasted literals. Ties prefer shorter patterns and then supplied order. IMask continues to simulate candidates and manage selection/history.

Consumer packaging also exposed that Forms imports initialize client components. The dedicated masking entry avoids that graph for Node helper imports; this does not add SSR support to components.
