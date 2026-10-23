# Source imports

## Rule

Use extensionless relative imports and re-exports between TypeScript and TSX source modules, including type-only imports and colocated stories.

Use `import type` and `export type` for dependencies used only as types. Follow the workspace's Bundler module resolution.

Keep required extensions for stylesheets and other assets. Build output filenames and package export paths must match the generated files.

## Rationale

Extensionless module paths match the Solid, Vite, and Bun development workflow and keep source imports consistent.

## Examples

```ts
import { buttonRecipe } from "./button.recipe";
export { Button } from "./actions/button/button";
export type { ButtonProps } from "./actions/button/button";
```
