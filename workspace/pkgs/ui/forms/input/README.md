# Input

Input styles Ark Field.Input and keeps the native input element. Use it within Field or independently with a visible native label or an accessible name. Import Input, Field, and the shared stylesheet from `@egcs/newui`.

## Contract

Supported text-family types are text (native default), email, password, search, tel, and url. Number editing belongs to NumberInput; date selection and upload remain separate controls. `inputmode`, `autocomplete`, `pattern`, `required`, lengths, name, form, native events, styles, and DOM refs remain available. `size` selects the visual sm/md/lg size; `htmlSize` forwards the native numeric size attribute.

Input accepts the shared size, tone, rounded, valid, invalid, loading, disabled, and readOnly options. Local visual options override inherited defaults. Parent invalid, disabled, and readonly states cannot be cleared by a child. Invalid overrides valid; visual tone alone never changes `aria-invalid`. Native Field associations and consumer descriptions are preserved.

Colored tones tint the editable control background with the matching semantic soft color as well as coloring the border. Neutral uses the application background. Readonly and disabled states keep their neutral surfaces. InputGroup paints the tone on its shell, with its input transparent.

Explicit valid and invalid states also tint the editable background using success and danger colors, respectively, overriding the visual tone. Invalid takes priority. InputGroup addons follow the same validation colors; readonly and disabled surfaces remain neutral.

Entered text uses the tone's high-contrast text token (Radix step 12); decorative icons and addon text use its supporting text token (step 11). Validation uses the corresponding success or danger text colors. Placeholders stay muted, and readonly/disabled controls retain neutral text.

`value` and `onInput` support application-controlled editing. `defaultValue` initializes the DOM's native default value once, so an uncontrolled input retains browser editing and restores that value on form reset. Use one model consistently. Controlled forms own their reset state. Refs target the input itself, including when using defaultValue. No trimming, formatting, masking, or composition-event interception is performed.

Readonly controls remain focusable/selectable and submit their values. Disabled controls use native disabled behavior and are excluded from native submission. Native disabled fieldsets retain browser semantics.

Compose InputGroup for icons, adornments, and named actions. Loading alone exposes busy state and a progress cursor; InputGroup.Loading supplies the visible indicator. Password reveal and clearing are reviewable application compositions, not implicit Input behavior.

Text-family focus uses the shared foundation contour: 3px with the default metrics, converging inward to overlap the border at -1px in 120ms. On blur, it fades in place over 80ms. Border and outline use the same color, forming one continuous contour at rest. Focus retains its color while hovered, including valid and invalid states. InputGroup applies the indicator only to its outer shell. Reduced motion removes movement and color transitions; forced colors retains a system-colored outline.

## Storybook examples

Forms / Input includes editable controls, standalone naming, sizes, tones, rounded shape, password reveal, clearing with focus restoration, readonly/disabled, loading, and mobile stories.
