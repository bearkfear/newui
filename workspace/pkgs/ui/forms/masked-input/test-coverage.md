# Mask regression coverage

[Contract](README.md) · [Exploratory review](paste-review.md)

Existing exploratory reports describe the original manual sessions; they do not imply verification on additional browsers.

## Automated checks

Run from workspace:

```sh
bun run test:masking
```

- `mask-text.spec.ts` covers formatting, parsing, empty, partial and long input, alternatives, immutable pattern lists, custom tokens, transforms, escaped literals, and alternative prefixes.
- `mask-configuration.spec.ts` covers all three definition limits, malformed backend configuration, frozen limits, and enforcement by both helpers.
- `bun run pack` verifies public export files and executes the built masking entry in Node without a DOM or Solid rendering owner.

CI runs the helper checks and package validation. The exploratory review records clipboard, selection, and native form behavior from the original Chromium sessions.

## Regression scenarios

After formatted phone paste, deleting the eleventh digit could keep the longer mask incomplete. Candidate scoring now counts accepted editable characters rather than raw input that may include pasted literals. Ties prefer shorter patterns and then supplied order. IMask continues to simulate candidates and manage selection/history.

Consumer packaging also exposed that Forms imports initialize client components. The dedicated masking entry avoids that graph for Node helper imports; this does not add SSR support to components.
