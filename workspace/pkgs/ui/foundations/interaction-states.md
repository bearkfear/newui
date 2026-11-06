# Interaction states

[Foundations](README.md)

Focus, disabled state, selected state, loading, and motion have separate contracts. Accessible behavior remains native or owned by Ark; visual tokens do not replace that behavior.

Keyboard focus shares `foundations/focus.css` through the `nui-focus-ring` class; rich text uses `nui-focus-links` for its native links. The contour is `--nui-focus-width` (2px) plus 1px, converges inward over 120ms, and fades in place over 80ms on blur. Button retains its tone-specific color. Inputs merge the contour with their border; other controls retain `--nui-focus-offset` (2px), inset placement for clipping surfaces, or intentional link spacing. Menus retain Ark's highlighted-item feedback and their intentionally outline-free content surfaces.

The shared rules use `--nui-focus-color` (default `--nui-focus-ring`, Blue 8) and `--nui-focus-rest-offset` (default `--nui-focus-offset`) for local presentation. `data-nui-focus-container` lets a decorative control shell follow its direct native input's visible focus. Reduced motion removes the animation and transition; forced colors uses a system-colored outline. Theme and override contrast still need visual review.

Disabled controls use neutral step 3 backgrounds, step 6 borders, and step 8 text where their component presentation includes those surfaces. Native disabled buttons do not activate or enter the Tab order. Native links have no disabled attribute; do not imply disabled behavior through styling alone. Selected states use the owning primitive's attributes or semantic native attributes; presentational Table row highlighting does not implement selection.

Button loading prevents activation and exposes aria-busy while preserving its accessible name and width. Loading/PageLoading announce their status text separately. Do not announce decorative spinner icons. Avoid adding automatic announcements for static supporting content.

`--nui-motion-duration` (150ms) and `--nui-motion-easing` (cubic-bezier(0.4, 0, 0.2, 1)) control default recipe utility transitions. Component CSS retains its existing behavior-specific durations: short overlay fades, longer Sheet/disclosure movement, and continuous progress/spinner motion. These are not all controlled by the default transition token.

Both prefers-reduced-motion and a `data-motion="reduced"` container suppress the existing utility transitions and component-specific animations. The local setting supplements the OS preference; another scope cannot force motion back on against an OS reduced-motion preference. Portal scopes carry the local setting. Static indicators, disclosure state, and progress values remain available. The validated solid Button press filter has no positional motion and remains enabled.

Foundations / Interaction states provides native focus/ref actions, disabled and pressed controls, and comparable motion scopes. Use Tab, Shift+Tab, Enter/Space, and the Storybook Motion toolbar to review. New automated tests still require component approval and explicit authorization.
