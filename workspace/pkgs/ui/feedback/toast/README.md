# Toast

One notification system powered by Ark UI Solid Toast. Ark owns the store, visible limit, priority queue, timers, hover/focus/page-idle pause, keyboard access, status announcements, action callbacks, and dismissal. newui supplies the Callout colors and hierarchy, a compact shadowed surface, default rendering, and a theme-preserving portal.

## API

- `createToaster(options?)`: creates an application-owned Ark store. Defaults: bottom-end placement, max 3 visible, 5-second duration, 12px gap, 180ms removal delay, pause on page idle, and a fully visible stack. Overlap mode is not exposed in this first delivery.
- Placement: top-start, top, top-end, bottom-start, bottom, or bottom-end. Ark handles viewport offsets and safe areas. The store also accepts Ark options such as offsets and hotkey; Alt + T is the default region shortcut.
- `Toaster`: mount once for a store and pass `toaster`. Options: `variant` soft (default) or outline; `showIcon` true (default); localized region `label`; optional portal `mount`. Native group attributes and classes are forwarded. An optional children callback replaces the default rendering with Toast parts.
- `toaster.create({ type, title, description, duration, action, closable, ... })`: returns an ID. Standard types: info, success, warning, error, loading. Error maps to the danger tone; loading maps to neutral. Use Root tone for custom visual choices rather than custom store type strings.
- Store operations remain Ark-owned: update(id, options), dismiss(id?), remove(id?), pause/resume, typed creation helpers, and promise tracking. `duration: Infinity` persists; loading persists until updated or dismissed. `dismiss()` dismisses visible notifications with transitions; `remove()` immediately clears visible notifications and the pending queue.
- `action: { label, onClick }` runs through Ark ActionTrigger and then dismisses. Prevent the trigger click's default behavior in custom composition to cancel that behavior. Async work remains application-owned.
- Advanced `Toast` parts: Root (optional tone and variant), Icon, Content, Title, Description, ActionTrigger, CloseTrigger, Context. Render them only inside Toaster's callback. ActionTrigger supports render-function asChild for Button composition. CloseTrigger is a named icon by default and supports a custom aria-label.

Public types: `CreateToasterOptions`, `ToasterStore`, `ToastOptions`, `ToasterProps`, and `ToastRootProps`. Behavioral part props follow the corresponding Ark Toast parts.

```tsx
function App() {
  const toaster = createToaster();
  return (
    <>
      <Button
        onClick={() =>
          toaster.create({
            type: "success",
            title: "Changes saved",
            description: "Your project is up to date.",
          })
        }
      >
        Save changes
      </Button>
      <Toaster toaster={toaster} />
    </>
  );
}
```

## Visual and behavior contracts

Toast shares Callout's soft/outline surfaces, decorative icons, compact title gap, tone step 12 titles, and step 11 descriptions. `--nui-toast-width` defaults to 24rem, constrained by the viewport and store offsets; `--nui-toast-shadow` controls elevation. The portal copies inherited theme tokens, typography, color scheme, and workshop motion preference. System/workshop reduced motion disables transitions and loading rotation. Ark owns group stacking order and its high z-index.

Keep messages brief and mount one Toaster per store in a stable application scope. Do not create a process-wide store for server-rendered requests. Stores and requests belong to the application; this package creates no global singleton. Use distinct placements if deliberately mounting multiple regions in one document. Storybook uses isolated docs iframes, per-demo stores, and cleanup to avoid cross-story notifications. Changing controls recreates the demo store.

Notifications use Ark's polite status semantics, including error types. Critical information must remain available in page content; use Callout or Alert Dialog for persistent or interrupting workflows. Prefer a persistent duration for important actions such as Undo. Focus/hover pause helps reading and interaction; Escape dismisses the focused notification. Application callbacks own follow-up focus and result announcements. The Loading To Result demo updates one notification in place; its simulated timers make no external requests.

## Choice and review

Solid UI Toast demonstrates a composable toaster and imperative creation API; its Sonner reference uses the opinionated solid-sonner system. We selected Ark Toast because it is already in the dependency set, supplies the needed behavior, and allows direct reuse of our visual contracts. No Sonner dependency or second notification API was added.

Storybook: Feedback / Toast includes all standard result types, persistent notifications, Undo, queuing, six placement controls, soft/outline styling, optional icons, loading-to-success/error updates, custom composition, live nested theme changes, dark mode, mobile, and reduced motion.

## References

- [Ark UI Toast](https://ark-ui.com/docs/components/toast).
- [Solid UI Toast](https://www.solid-ui.com/docs/components/toast).
- [Solid UI Sonner](https://www.solid-ui.com/docs/components/sonner).
