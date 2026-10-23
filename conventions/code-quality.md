# Code quality

## Rule

Run `bun run check` from `workspace/` before handing off implementation changes. This checks Biome linting, formatting, and strict TypeScript types for the library, stories, Storybook configuration, existing tests, and build scripts.

Use Biome for formatting, import organization, and linting. Run `bun run format` to format and `bun run check:fix` for safe automatic fixes. Keep the configuration in `workspace/biome.json`.

Keep supported source files within 250 lines and function bodies within 60 lines, counting blank lines. Keep cognitive complexity at 15 or lower. These are enforced Biome errors, including in stories and existing tests. Markdown conventions retain their separate 60-line limit.

Extract modules by responsibility and components by semantic purpose. Separate demos, configuration, and reusable helpers when needed. Do not compress code, introduce arbitrary numbered fragments, or add meaningless wrappers to evade limits.

Use the strict settings in `workspace/tsconfig.base.json`, including exact optional properties and checked indexed access. Model absent values explicitly. Do not weaken compiler options, add `any`, or suppress errors to bypass a type mismatch.

Keep generated artifacts, dependencies, lockfiles, vendored patches, and local reference materials outside Biome's checks. Generated palette values are regenerated through their owning script. Do not exclude handwritten source solely because it fails a rule.

Keep suppressions narrow and explain valid semantic or accessibility reasons. Reduced-motion overrides may use `!important`; action groups may use ARIA group semantics. `useLiteralKeys` is disabled because strict TypeScript requires brackets for index signatures.

Solid JSX does not require React keys; `useJsxKeyInIterable` is disabled for Solid sources. Any React documentation adapters must follow React's requirements. New tests still require user validation and explicit authorization under [implementation validation](implementation-validation.md).

The pre-commit hook runs `bun run check` without modifying files. Install it with `bun run hooks:install` from `workspace/`; dependency installation also runs the prepare script. Do not bypass failed checks to complete a commit.

## Rationale

Consistent formatting and small, cohesive modules keep the library maintainable as the catalog grows. Existing tools enforce these rules without a custom source checker.
