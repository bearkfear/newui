# Text mask helpers

[MaskedInput](README.md)

Import maskText, unmaskText, and TextMaskOptions from `@egcs/newui/masking` for Node or browser code without component initialization. Browser applications may also use `@egcs/newui` or `@egcs/newui/forms`; those aggregators load client components and are not Node/SSR targets. Helpers need no input element, CSS, or Solid owner and share the component's compiler, tokens, transforms, literals, and selection. Each call creates an independent model.

```ts
import { maskText, unmaskText, type TextMaskOptions } from "@egcs/newui/masking";

const cpfMask = { mask: "###.###.###-##" } satisfies TextMaskOptions;

maskText("12345678900", cpfMask); // "123.456.789-00"
unmaskText("123.456.789-00", cpfMask); // "12345678900"

const customMask = {
  mask: "&&&-&&&",
  tokens: { "&": { pattern: /[0-9]/ } },
} satisfies TextMaskOptions;

maskText("123456", customMask); // "123-456"
unmaskText("123-456", customMask); // "123456"
```

maskText consumes raw text, without pattern literals. unmaskText parses displayed text according to its pattern; this removes literal characters rather than indiscriminately stripping punctuation. Editable letter tokens remain part of the raw value.

Empty input produces an empty string; partial input produces a partial value. Both functions apply token transforms and discard incompatible or excess characters. Unmasking is normalization, not a lossless inverse: it cannot recover discarded input or reverse case conversion. Neither function validates business rules. Invalid pattern configuration throws the same errors as MaskedInput.

## Field value example

```tsx
const [cpf, setCpf] = createSignal("");

<MaskedInput
  mask="###.###.###-##"
  value={cpf()}
  onValueChange={({ rawValue, formattedValue }) => {
    setCpf(rawValue); // "12345678900"
    console.log(formattedValue); // "123.456.789-00"
  }}
/>;
```

The controlled value is raw. The DOM input.value, including native onInput currentTarget.value after accepted editing, is displayed text. Native forms submit formatted text by default; choose submitValue="raw" to submit the raw string instead. During composition, native events can expose uncommitted text; onValueChange supplies accepted values.

Review Forms / Masked Input / Text Helpers for document, postal code, progressive phone, custom token, partial, literal prefix, uppercase normalization, and empty examples. [Regression coverage](test-coverage.md) also verifies the public DOM-independent entry during packing.
