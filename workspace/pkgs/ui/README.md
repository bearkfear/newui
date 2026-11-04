# newui

Composable components for **SolidJS**, with shared spacing, typography, Radix color tokens, automatic light/dark themes, and optional Tailwind integration.

**Experimental alpha:** APIs may change. Forms currently includes Field, Input, Textarea, and InputGroup; the rest of the Forms catalog is unfinished. See [known limitations](#known-limitations) before adopting this release.

## Install

```sh
bun add newui@next solid-js
```

Use npm, pnpm, or Yarn if preferred. Configure your application for SolidJS, for example with Vite and `vite-plugin-solid`.

## Start with compiled CSS

Import the stylesheet once from your application entry:

```tsx
import "newui/styles.css";
```

Import components from the area you use:

```tsx
import { Button } from "newui/actions";
import { Field, Input } from "newui/forms";

export function ProjectForm() {
  return (
    <form>
      <Field.Root>
        <Field.Label>Project name</Field.Label>
        <Input name="project" required />
      </Field.Root>
      <Button type="submit">Create project</Button>
    </form>
  );
}
```

The main `newui` entry also works. Area entries include `actions`, `forms`, `content`, `layout`, `navigation`, `overlays`, `feedback`, `data`, `charts`, and `compositions`. Entries share internal modules; bundle elimination depends on your bundler. CSS selection is configured separately.

The complete stylesheet includes Tailwind Preflight, which resets the whole page. Tailwind is not required for this mode.

## Use your application's Tailwind

Install Tailwind 4.3.3+, `@tailwindcss/postcss`, and PostCSS 8.5+ as development dependencies. Configure `postcss.config.mjs`:

```js
import newui from "newui/postcss";
import tailwind from "@tailwindcss/postcss";

export default { plugins: [newui(), tailwind()] };
```

Use an application entry stylesheet instead of the complete `newui/styles.css`:

```css
@import "tailwindcss";
@import "newui/tailwind/preset.css";
@import "newui/tailwind/actions.css";
@import "newui/tailwind/forms.css";
```

Import this application stylesheet once. Areas bring their style dependencies, including foundations, and shared dependencies are compiled once. The optional preset maps application utilities such as `p-4`, `rounded-md`, and `bg-primary` to newui tokens. Omit it to keep your application's theme. The application owns Preflight in this mode.

See the [Tailwind integration guide](https://github.com/bearkfear/newui/blob/main/workspace/pkgs/ui/getting-started/tailwind.md) for supported pipelines and area selections.

## Customize at runtime

```css
:root {
  --nui-space-unit: 0.25rem;
  --nui-radius-md: 0.75rem;
  --nui-font-sans: system-ui, sans-serif;
}
```

Automatic system appearance uses CSS `color-scheme` and `light-dark()`. Set `data-nui-theme="light"`, `"dark"`, or `"system"` on the document or a nested scope. Tokens can also be updated with `style.setProperty()` without rebuilding. Custom palettes need complete semantic role mappings; see [theme customization](https://github.com/bearkfear/newui/blob/main/workspace/pkgs/ui/getting-started/theme-customization.md).

## Known limitations

- Forms is incomplete, APIs are experimental, and SSR/hydration has not been validated for this release.
- Ark currently resolves `@zag-js/focus-visible@1.45.0`, which can leave `HTMLElement.prototype.focus` read-only and conflict with other focus wrappers. The development workspace patch is **not shipped to consumers**. This is an accepted alpha limitation; see the [changelog](CHANGELOG.md) and [patch audit](https://github.com/bearkfear/newui/blob/main/workspace/patches/README.md).
- Browser support requires modern CSS including `light-dark()` (Baseline 2024). Runtime theme editing, persistence, and custom palette generation belong to the application.

## Development and license

See the [workspace guide](https://github.com/bearkfear/newui/blob/main/workspace/README.md) for Storybook, the consumer playground, checks, and builds. The [roadmap](https://github.com/bearkfear/newui/blob/main/workspace/roadmap.md) tracks remaining work.

MIT. Distributed Radix Colors and Lucide notices are retained in `dist/`; dependencies retain their own licenses.
