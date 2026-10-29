# Interaction states

[Foundations](README.md)

Focus, disabled state, selected state, loading, and motion have separate contracts. Accessible behavior remains native or owned by Ark; visual tokens do not replace that behavior.

Keyboard focus uses `--nui-focus-width` (2px), `--nui-focus-offset` (2px), and `--nui-focus-ring` (Blue 8). Button uses its tone-specific focus color. Inset focus is retained for controls inside clipping surfaces; some text links use a 4px offset and Tabs/Prose retain their 3px inset/outset. Those intentional offsets do not use the general offset token. Preserve a visible outline rather than relying only on a color change. Theme and override contrast still need visual review.

Disabled controls use neutral step 3 backgrounds, step 6 borders, and step 8 text where their component presentation includes those surfaces. Native disabled buttons do not activate or enter the Tab order. Native links have no disabled attribute; do not imply disabled behavior through styling alone. Selected states use the owning primitive's attributes or semantic native attributes; presentational Table row highlighting does not implement selection.

Button loading prevents activation and exposes aria-busy while preserving its accessible name and width. Loading/PageLoading announce their status text separately. Do not announce decorative spinner icons. Avoid adding automatic announcements for static supporting content.

`--nui-motion-duration` (150ms) and `--nui-motion-easing` (cubic-bezier(0.4, 0, 0.2, 1)) control default recipe utility transitions. Component CSS retains its existing behavior-specific durations: short overlay fades, longer Sheet/disclosure movement, and continuous progress/spinner motion. These are not all controlled by the default transition token.

Both prefers-reduced-motion and a `data-motion="reduced"` container suppress the existing utility transitions and component-specific animations. The local setting supplements the OS preference; another scope cannot force motion back on against an OS reduced-motion preference. Portal scopes carry the local setting. Static indicators, disclosure state, and progress values remain available. The validated solid Button press filter has no positional motion and remains enabled.

Foundations / Interaction states provides native focus/ref actions, disabled and pressed controls, and comparable motion scopes. Use Tab, Shift+Tab, Enter/Space, and the Storybook Motion toolbar to review. New automated tests still require component approval and explicit authorization.
