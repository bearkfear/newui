# Commit messages

## Rule

Write commit subjects in English using `<type>(<scope>): <description>`. Use a lowercase type and a short lowercase kebab-case scope identifying the affected component, area, or responsibility.

Use `feat`, `fix`, `refactor`, `docs`, `test`, `build`, `ci`, `chore`, `perf`, `style`, or `revert`. Use `style` only for formatting changes without behavior changes. Keep descriptions concise, imperative, and without a final period.

Keep each commit coherent and reviewable. Separate implementation from release preparation and from unrelated repository-policy changes. Do not create intermediate commits that require a later commit merely to build or expose a valid public entry.

Use `chore(release): prepare <version>` for version, lockfile, and changelog updates. Release numbering belongs in that commit rather than an unrelated feature subject.

Use `!` after the scope and a `BREAKING CHANGE:` body entry when intentionally introducing a breaking public change. Describe the migration in the body when needed.

Apply this convention to newly authored commits and squash-merge subjects. Generated merge/revert commits may retain their tool-generated structure; do not rewrite existing published history solely to conform.

## Rationale

Consistent subjects make history searchable, explain the affected responsibility, and distinguish product behavior from maintenance and release metadata.

## Examples

- `feat(forms): add number and currency inputs`
- `fix(forms): preserve input history after canceled reset`
- `docs(conventions): define branch and commit naming`
- `chore(release): prepare 0.1.0-alpha.5`
