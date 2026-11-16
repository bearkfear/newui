# Public API JSDoc

## Rule

Write JSDoc in English for public components, functions, types, and other exported API symbols when it helps consumers use them correctly. Comments must be retained in the generated `.d.ts` declarations.

Describe the symbol's purpose and intended use. Explain composition with related public symbols and behavior or constraints that are not clear from its name and type. Include a concise, valid usage example when the correct import or composition is not obvious; use the package's public import path.

Document individual props only when their meaning, defaults, effects, or constraints are not evident from the name and type. Do not repeat inherited native props or restate obvious types.

Keep JSDoc focused on quick API discovery. Link to the component README or relevant guide for detailed contracts instead of duplicating them. Do not document private implementation details.

## Rationale

Generated declarations are a common entry point for editors and coding agents inspecting an installed package. Concise comments expose usage guidance without requiring consumers to search compiled implementation code.

## Examples

~~~tsx
/**
 * A text input that shares validation and visual state with Field.Root.
 * Use Field.Label and Field.ErrorText for associated labeling and errors.
 *
 * @example
 * ```tsx
 * import { Field, Input } from "@egcs/newui/forms";
 *
 * <Field.Root>
 *   <Field.Label>Email</Field.Label>
 *   <Input name="email" type="email" />
 * </Field.Root>
 * ```
 */
export function Input(props: InputProps) { /* ... */ }
~~~
