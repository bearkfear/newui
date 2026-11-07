# newui

Composable components for **SolidJS**, with shared spacing, typography, Radix color tokens, automatic light/dark themes, and optional Tailwind integration.

**Experimental alpha:** APIs may change. Forms currently includes Field, Input, MaskedInput, NumberInput, CurrencyInput, Textarea, RichTextEditor, and InputGroup; the rest of the Forms catalog is unfinished. See [known limitations](#known-limitations) before adopting this release.

## Install

```sh
bun add @egcs/newui@next solid-js
```

Use npm, pnpm, or Yarn if preferred. Configure your application for SolidJS, for example with Vite and `vite-plugin-solid`.

## Start with compiled CSS

Import the stylesheet once from your application entry:

```tsx
import "@egcs/newui/styles.css";
```

Import components from the area you use:

```tsx
import { Button } from "@egcs/newui/actions";
import { Field, Input } from "@egcs/newui/forms";

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

The main `@egcs/newui` entry also works. Area entries include `actions`, `forms`, `content`, `layout`, `navigation`, `overlays`, `feedback`, `data`, `charts`, and `compositions`. Entries share internal modules; bundle elimination depends on your bundler. CSS selection is configured separately.

The complete stylesheet includes Tailwind Preflight, which resets the whole page. Tailwind is not required for this mode.

## Mask text and inputs

```tsx
import { MaskedInput } from "@egcs/newui/forms";
import { maskText, unmaskText } from "@egcs/newui/masking";

const documentMask = { mask: "###.###.###-##" };
maskText("12345678900", documentMask); // "123.456.789-00"
unmaskText("123.456.789-00", documentMask); // "12345678900"

<MaskedInput
  {...documentMask}
  name="document"
  defaultValue="12345678900"
  submitValue="raw"
  inputmode="numeric"
/>;
```

Controlled value/defaultValue use raw strings; onValueChange exposes rawValue, formattedValue, and complete. Native forms submit formatted text by default, or raw text with submitValue="raw". Custom tokens can map & to digits, transform case, or disable defaults. The masking entry runs in Node without a DOM; component aggregators remain client entries.

Definitions are capped at 256 UTF-16 code units per pattern, 16 alternatives, and 64 custom tokens. validateTextMaskOptions checks unknown backend configuration before rendering; textMaskLimits exposes the bounds. See the [mask contract](https://github.com/bearkfear/newui/blob/main/workspace/pkgs/ui/forms/masked-input/README.md) and [configuration guide](https://github.com/bearkfear/newui/blob/main/workspace/pkgs/ui/forms/masked-input/configuration.md).

## Enter numbers and currency

```tsx
import { CurrencyInput, NumberInput } from "@egcs/newui/forms";
import { formatCurrency, parseNumber } from "@egcs/newui/numbers";

<NumberInput locale="pt-BR" defaultValue="1234.56" maximumFractionDigits={4} />;
<CurrencyInput locale="pt-BR" currency="BRL" entryMode="minor-unit" submitValue="raw" />;

formatCurrency("1234.56", { locale: "pt-BR", currency: "BRL" }); // "R$\u00a01.234,56"
parseNumber("1.234,56", { locale: "pt-BR" }); // { status: "valid", value: "1234.56" }
```

Values remain exact major-unit decimal strings, independent of display separators. Configure grouping, fractional precision, sign rules and string min/max bounds. Currency defaults follow the selected currency; locale and currency are independent. Automatic minor-unit entry shifts typed digits (1234 becomes 12,34 for BRL), while initial and pasted values represent complete amounts. The minus key toggles the whole sign anywhere in the input.

Both fields compose with Field/InputGroup, icons, addons and actions. Native forms submit formatted values by default or canonical strings with submitValue="raw". The numbers entry exposes number/currency formatting, parsing, configuration validation and types without UI or DOM dependencies. See the [number contract](https://github.com/bearkfear/newui/blob/main/workspace/pkgs/ui/forms/number-input/README.md) and [currency contract](https://github.com/bearkfear/newui/blob/main/workspace/pkgs/ui/forms/currency-input/README.md) for supported locales, precision limits and editing behavior.

## Edit rich text

```tsx
import { RichTextEditor } from "@egcs/newui/forms";
import { parseRichTextHtml, renderRichTextHtml } from "@egcs/newui/rich-text";

const document = parseRichTextHtml("<p>Legacy <strong>content</strong></p>");

<RichTextEditor.Root defaultValue={document} name="body">
  <RichTextEditor.Toolbar />
  <RichTextEditor.Content placeholder="Write the article..." />
</RichTextEditor.Root>;

renderRichTextHtml(document);
```

RichTextEditor uses JSON as its canonical value while exposing normalized HTML and plain text in change details. Native forms can submit JSON, HTML, or text. The separate rich-text entry supports legacy HTML conversion, text extraction, emptiness checks, and schema validation without initializing the editor UI. See the [rich-text contract](https://github.com/bearkfear/newui/blob/main/workspace/pkgs/ui/forms/rich-text-editor/README.md) for the schema, actions, form behavior, and conversion limits.

## Show global page progress

```tsx
import { createTopProgress, TopProgress } from "@egcs/newui/feedback";

// Create once per application root; share via context when using SSR.
const progress = createTopProgress();
<TopProgress controller={progress} label="Loading page" />;

// Call from page loaders or other application operations.
await progress.track(fetch("/api/projects"));
```

Mount one bar per controller. Overlapping tracked operations keep it visible until all settle. For manual work, call `start()` then `done()` or `fail()`; `set(value)` reports known numeric progress. Requests finishing before the default 150ms delay stay hidden. See the [TopProgress contract](https://github.com/bearkfear/newui/blob/main/workspace/pkgs/ui/feedback/top-progress/README.md).

## Use your application's Tailwind

Install Tailwind 4.3.3+, `@tailwindcss/postcss`, and PostCSS 8.5+ as development dependencies. Configure `postcss.config.mjs`:

```js
import newui from "@egcs/newui/postcss";
import tailwind from "@tailwindcss/postcss";

export default { plugins: [newui(), tailwind()] };
```

Use an application entry stylesheet instead of the complete `@egcs/newui/styles.css`:

```css
@import "tailwindcss";
@import "@egcs/newui/tailwind/preset.css";
@import "@egcs/newui/tailwind/actions.css";
@import "@egcs/newui/tailwind/forms.css";
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

See the [workspace guide](https://github.com/bearkfear/newui/blob/main/workspace/README.md) for Storybook, checks, and builds.

MIT. Distributed Radix Colors and Lucide notices are retained in `dist/`; dependencies retain their own licenses.
