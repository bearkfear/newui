# Steps

An interactive stepper using [Ark UI Solid Steps](https://ark-ui.com/docs/components/steps), with horizontal/vertical layouts and newui's Radix-backed colors. No new dependency or Kobalte. Timeline remains the presentation-only event sequence.

```tsx
import { Steps } from "@egcs/newui";
import "@egcs/newui/styles.css";

<Steps.Root count={2} orientation="horizontal">
  <Steps.List aria-label="Project setup">
    <Steps.Item index={0}>
      <Steps.Trigger>
        <Steps.Indicator />
        <Steps.Label>
          <Steps.Title>Details</Steps.Title>
        </Steps.Label>
      </Steps.Trigger>
      <Steps.Separator />
    </Steps.Item>
    <Steps.Item index={1}>
      <Steps.Trigger>
        <Steps.Indicator />
        <Steps.Label>
          <Steps.Title>Review</Steps.Title>
        </Steps.Label>
      </Steps.Trigger>
      <Steps.Separator />
    </Steps.Item>
  </Steps.List>
  <Steps.Content index={0}>Project details</Steps.Content>
  <Steps.Content index={1}>Review the project</Steps.Content>
  <Steps.CompletedContent>Setup complete.</Steps.CompletedContent>
  <Steps.Actions>
    <Steps.PrevTrigger>Back</Steps.PrevTrigger>
    <Steps.NextTrigger>Next</Steps.NextTrigger>
  </Steps.Actions>
</Steps.Root>;
```

## Contract and Ark mapping

Root, List, Item, Trigger, Content, CompletedContent, Separator, Context, and ItemContext retain Ark behavior. Root accepts `count`, zero-based `defaultStep` or controlled `step`/`onStepChange`, `onStepComplete`, `linear`, `isStepValid`, `isStepSkippable`, and `onStepInvalid`. Index every Item and matching Content consistently from zero to count minus one. The completed state is step equal to count; it displays CompletedContent. Count is application-owned, not inferred from children.

Ark owns state, next/back limits, validation and skipping, generated IDs, tab/content associations, current/completed attributes, hidden panels, and cancellable events. The installed primitive uses Tab navigation and native Enter/Space activation; wrappers add no custom arrow-key navigation or focus movement. Nonlinear triggers select their step. Linear mode prevents trigger-based navigation and uses next/back controls; invalid steps block forward progress. This is not a form-validation engine: applications provide rules, error text, requests, and announcements.

List is Ark's named tablist; its default name is Steps. Supply a distinct accessible name for each flow. Trigger is a native button. Label, Title, and Description are phrasing spans suitable inside it; put headings in Content rather than inside Trigger. Indicator is a decorative span using Ark's item/root hooks and state props, with the one-based step number or a completion check by default. Children replace its visual content. Do not put controls or the only status description inside Indicator. Separator is decorative and automatically omitted for the last item.

NextTrigger and PrevTrigger compose the existing Button with reactive props from Ark's Steps context and its event-merging utility. They accept native button and Button presentation props, forwarding refs, handlers, icons, and loading state to that button. Next defaults to solid and Back to outline. The wrappers expose a native Button rather than an `asChild` override; activation and progression remain with Ark. Do not force-enable a boundary control with an explicit disabled override. Context exposes the Ark accessor for reset and custom UI.

Horizontal is the default. Intermediate segments expand across the available width with a 10rem basis; the last step uses its label width without reserving an empty trailing segment. List scrolls horizontally when needed; focusing its triggers brings them into view through native browser scrolling. Vertical places the list beside Content/Actions at widths of 48rem or more and above them on narrower screens. Keep List, Content/CompletedContent, and Actions as Root's direct DOM children for the vertical grid. Hidden Content remains mounted according to Ark; user state is preserved while switching panels.

All parts preserve native attributes, styles, refs, and additive classes. Content and CompletedContent add no border, background, padding, or card. Place Card, Panel, a form, or plain content inside them as needed. Component recipes own structural spacing; Radix neutral tokens draw borders, primary marks current state, and success marks completed state. Automatic and nested themes use the existing token contract. No transition or animation is added. Meaningful state also has Ark semantics and the examples' persistent external status messages.

## Review

Navigation / Steps includes plain content, optional Card composition, horizontal/vertical layouts, direct navigation, next/back/reset, numbered/completed markers, descriptions, initial middle/completed states, controlled state, linear validation with a confirmation action, dark/nested themes, and mobile examples. The user approved the implementation and examples, including full-width horizontal distribution and plain content with optional Card composition. No new automated tests were created or expanded.
