# Page Loading

A centered loading placeholder composed from the same indicator as Loading, a visible message, and an optional description. It stays in document flow, so applications can replace route content or reserve space inside a section.

## API

- `layout`: `page` (default) reserves at least `100dvh`; `section` reserves 16rem. Override the minimum height through native style or a local class when a page shell already includes navigation.
- `label`: visible message, default `Loading page…`. Keep it nonempty and localize it in the application.
- `description`: optional supporting text, shown below the label with the shared compact header gap.
- `tone`: `primary` (default) or `neutral` for the large 40px indicator.
- Root is a div with `role="status"` and `aria-atomic="true"`. Native attributes, refs, events, styles, and additive classes are forwarded. There is one status region; the internal indicator is decorative.

```tsx
<main>
  <PageLoading label="Loading workspace…" description="Preparing your projects and recent updates." />
</main>

<PageLoading layout="section" label="Loading project activity…" />
```

## Behavior and composition

The placeholder shares Loading's native status semantics and reduced-motion support. It adds layout rather than a new interaction primitive. It does not create a fixed overlay, add a main landmark, trap/move focus, block page interaction, run a request, or invent progress percentages. Applications decide when to render it and what replaces it.

Set `aria-busy` on the region receiving data and provide a persistent status region outside that busy subtree when live announcements are needed. In that composition, pass `role="presentation"` and `aria-hidden="true"` to PageLoading to make its repeated message decorative. The Loading To Content story demonstrates this flow, including a simulated delay and a completion announcement. The timer belongs to the demo, not the component.

The default page layout suits a full route placeholder. Use section layout inside Card or another bounded container; native style can adapt the reserved height to the application shell. Text wraps within a maximum 24rem width, and colors follow the surrounding theme. The component keeps the container's background so it can blend into either page or card surfaces.

## Review

Storybook: Feedback / Page Loading includes page and section layouts, optional description, use inside Card, simulated loading-to-content replacement, light/dark comparison, long messages, mobile, and reduced motion.

The user approved the implementation and Storybook examples. No automated tests were added.

## References

- [Loading contracts](../loading/README.md).
