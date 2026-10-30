# Input

Input styles Ark Field.Input and keeps the native input element. Use it within Field or independently with a visible native label or an accessible name. Import Input, Field, and the shared stylesheet from `newui`.

## Contract

Supported text-family types are text (native default), email, password, search, tel, and url. Number editing belongs to the later Number Field; date selection and upload remain separate controls. `inputmode`, `autocomplete`, `pattern`, `required`, lengths, name, form, native events, styles, and DOM refs remain available. `size` selects the visual sm/md/lg size; `htmlSize` forwards the native numeric size attribute.

Input accepts the shared size, tone, rounded, valid, invalid, loading, disabled, and readOnly options. Local visual options override inherited defaults. Parent invalid, disabled, and readonly states cannot be cleared by a child. Invalid overrides valid; visual tone alone never changes `aria-invalid`. Native Field associations and consumer descriptions are preserved.

`value` and `onInput` support application-controlled editing. `defaultValue` initializes the DOM's native default value once, so an uncontrolled input retains browser editing and restores that value on form reset. Use one model consistently. Controlled forms own their reset state. Refs target the input itself, including when using defaultValue. No trimming, formatting, masking, or composition-event interception is performed.

`appearance="static"` implies readonly and removes the background, visible resting border, and horizontal padding while keeping the control height and keyboard focus indicator. Readonly controls remain focusable/selectable and submit their values. Disabled controls use native disabled behavior and are excluded from native submission. Native disabled fieldsets retain browser semantics.

Compose InputGroup for icons, adornments, and named actions. Loading alone exposes busy state and a progress cursor; InputGroup.Loading supplies the visible indicator. Password reveal and clearing are reviewable application compositions, not implicit Input behavior.

Text-family focus merges the border and shared-width outline into one continuous contour, without the gap used by standalone action controls. Focus retains its color while hovered, including valid and invalid states. InputGroup applies this contour to its outer shell.

## Review

Forms / Input includes editable controls, standalone naming, sizes, tones, rounded shape, password reveal, clearing with focus restoration, readonly/static/disabled, loading, and mobile stories. Implementation awaits user validation. No automated tests were added.
