# Source imports

## Rule

Use extensionless relative imports and re-exports between TypeScript and TSX source modules, including type-only imports and colocated stories.

Use `import type` and `export type` for dependencies used only as types. Follow the workspace's Bundler module resolution.

Import implementation dependencies from their owning modules, not the package root or public area aggregators. Keep both runtime and type dependencies acyclic; see [dependency layers](dependency-layers.md). Catalog examples may consume public entry points.

Keep required extensions for stylesheets and other assets. Build output filenames and package export paths must match the generated files.

Load shared Storybook configuration tooling through the application's internal `#storybook-tooling` package import. Build its Node-compatible bundle before starting or building Storybook; use source targets for TypeScript checks and generated targets at runtime. Keep transitive source imports extensionless instead of relying on Storybook's deprecated extensionless-import fallback.

## Rationale

Extensionless module paths match the Solid, Vite, and Bun development workflow and keep source imports consistent.

## Examples

```ts
import { buttonRecipe } from "./button.recipe";
export { Button } from "./actions/button/button";
export type { ButtonProps } from "./actions/button/button";
```
