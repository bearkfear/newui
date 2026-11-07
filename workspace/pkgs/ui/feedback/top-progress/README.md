# Top Progress

A fixed page-loading bar and independently shareable Solid controller. Inspired by [vue-top-progress](https://github.com/dalphyx/vue-top-progress); implemented with Ark Progress and newui tokens, without a Vue dependency or copied source.

## Usage

```tsx
import { createTopProgress, TopProgress } from "@egcs/newui/feedback";

const progress = createTopProgress();
<TopProgress controller={progress} label="Loading page" />;

progress.start();
progress.done(); // or progress.fail()
await progress.track(fetch("/api/projects"));
```

Mount one bar per controller at the application root. In client-only applications, the application may export its controller from a module. With SSR, create one controller per application/request and share it through Solid context. The library creates no global singleton; starting work on the server is a no-op.

## Controller

- `createTopProgress({ delay: 150, trickle: true })`: delay before showing the bar, in milliseconds. Fast operations never flash. `trickle: false` disables automatic advancement.
- `start()`: starts one manual loading session; repeated calls are idempotent. Pair with `done()` or `fail()`.
- `set(value)`: starts manual work and sets a finite value clamped to 0–100, disabling trickling for that session. Call `done()` to finish, including after setting 100.
- `done()` / `fail()`: ends manual work. Failure uses the danger token. Outstanding tracked operations keep the bar active.
- `track(promise)`: returns a promise preserving the input result/rejection. Counts overlapping work and finishes only after all tracked operations settle and manual work ends. Catch rejected promises as usual. Failure remains visible for the rest of that session. HTTP error responses must be converted to rejected promises by the application if they should count as failures.
- `reset()`: hides immediately, cancels timers, and ignores completion callbacks from previously tracked operations. Does not cancel application requests.
- `state()`: reactive phase, visual value, determinate mode, error state, and tracked pending count. Visual trickle values are estimates, not task percentages.

A visible completion fills to 100%, holds for 300ms, then fades for 200ms. Starting during completion or fade cancels the old timers and begins a fresh session. Unmounting the owning bar resets its controller, including pending callbacks; mount it for the lifetime of the application.

## Component and styling

`controller` is required. `label` defaults to `Loading page`; `glow` defaults to true. Native Ark root attributes, style, class, and ref are forwarded to the portaled root. The component owns horizontal orientation, 0–100 bounds, composition, and controlled value.

Public CSS tokens: `--nui-top-progress-color` (primary), `--nui-top-progress-height` (3px), `--nui-top-progress-offset` (0px), and `--nui-top-progress-z-index` (1000). Failure uses the semantic danger color. The themed portal copies source tokens, typography, and motion settings through the existing Overlays portal-scope helper. It mounts into the source document body. Ancestor selectors are not copied.

Ark owns label associations, numeric bounds, and progressbar semantics. Automatic trickling passes `value=null` to Ark so estimated widths are never announced as real percentages. Manual mode passes the actual value. The bar does not move focus, intercept pointer events, or live-announce every update. Applications own busy regions, failure messages, and completion announcements.

System and workshop reduced motion disable transitions and keep automatic progress at a static partial width. Forced colors use the system highlight color. A fixed bar is scoped to its document; the Storybook iframe represents the consuming page.

## Implementation mapping and review

[Ark Progress](https://ark-ui.com/docs/components/progress-linear) supplies the rendering and accessible value contract. Its progress API has no page-request aggregation/trickle lifecycle, so the controller adds the timer and promise bookkeeping around Ark without replacing its accessible primitive. No dependency was added.

Storybook: Feedback / Top Progress includes manual controls, overlapping requests, an error while another request remains pending, fast requests, restart controls, a global context example, glow, dark/mobile, and reduced motion.
