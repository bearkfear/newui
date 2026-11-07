# Branch names

## Rule

Name working branches `<type>/<topic>` in English. Use a lowercase type and a short lowercase kebab-case topic that describes the change's purpose.

Use `feat`, `fix`, `refactor`, `docs`, `test`, `build`, `ci`, `chore`, `perf`, `style`, or `revert` according to the primary purpose of the branch. Use `release/<version>` for a branch dedicated to preparing a release; the version retains its normal semantic-version punctuation.

Describe the work rather than its author. Do not add personal names, agent names, or tool names merely to identify who created a branch.

Keep versions out of feature and fix branch names. A feature branch may contain its release-preparation commit; use a dedicated release branch only when release preparation is the branch's primary purpose.

Apply this convention to newly created working branches. Do not rename the repository's default branch or rewrite existing remote branch history solely to conform.

## Rationale

Purpose-based names make branches understandable without conversation context and keep implementation topics separate from release numbering.

## Examples

- `feat/number-currency-inputs`
- `fix/input-reset`
- `refactor/decimal-editing`
- `docs/installation-guide`
- `release/0.1.0-alpha.5`
