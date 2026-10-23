# Convention files

## Rule

Store project conventions in the root `conventions/` directory, with one convention per Markdown file.

Use a descriptive English filename in lowercase kebab-case that identifies the convention. Do not add numbering or status prefixes.

Use this structure, in order:

- A single level-one title naming the convention.
- `## Rule`: direct, verifiable requirements and their scope.
- `## Rationale`: why the rule exists.
- `## Examples`: optional examples that clarify application.
- `## Exceptions`: optional, explicit exceptions.

Keep each file within 60 lines, including headings, blank lines, and examples. Treat exceeding this limit as a review trigger: check for independent topics to split, remove repetition, and preserve clarity rather than compressing text to meet the count.

Start the rule with what must be done. Avoid vague wording such as "prefer when possible."

Update the existing file when an agreement changes. Do not add author, date, status, separate index files, or proposal logs. Link to related conventions instead of duplicating their rules.

## Rationale

Short, consistently structured files make conventions easy to find and apply. Git preserves their history without extra metadata.

## Examples

Use [development-language.md](development-language.md) for the development language convention.
