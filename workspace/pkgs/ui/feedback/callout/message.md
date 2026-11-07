# Message presentation

Callout's message variant adds the separated header/body presentation inspired by Bulma Message. It uses the same tone API, native announcement semantics, optional icons, actions, and application-owned dismissal as the compact Callout.

```tsx
<Callout.Root variant="message" tone="warning">
  <Callout.Header>
    <Callout.Icon />
    <Callout.Content>
      <Callout.Title>Review sharing settings</Callout.Title>
    </Callout.Content>
    <Callout.CloseButton onClick={dismissNotice} />
  </Callout.Header>
  <Callout.Body>
    <Callout.Description>This project is visible to all workspace members.</Callout.Description>
    <Callout.Actions>
      <Button size="sm">Review settings</Button>
    </Callout.Actions>
  </Callout.Body>
</Callout.Root>;
```

Use Header and Body with variant message. Header is optional; Body alone supplies a padded message surface. Header contains the title and optional icon/close button; Body contains longer content and actions. Root takes no outer padding in this presentation so each part can supply its own spacing.

The header uses the tone's solid background and existing on-color token. Blue/Green/Red use white text; Sky/Amber use their mapped dark text, following the library's Radix contrast policy. Neutral uses its existing solid/on-neutral mapping. The body remains a step 3 surface with step 11 secondary text; titles outside the solid header keep step 12. Header overrides are scoped, so text in the body and existing soft/outline Callouts keep their color roles. Header close-button hover uses the tone's solid hover token and its focus ring uses the header foreground.

All parts forward native attributes, refs, events, and additive classes. Dismissal still belongs to the application. The example's dismissNotice callback is application-provided; the Dismissible story demonstrates hiding/restoring a message and returning focus to a stable page action. The presentation adds no timer, live role, or state machine.

Review Feedback / Callout → Message, Message Tones And Headers, Message Dismissible, Message Dark, and Message Mobile. The variant is also available in the standard controls and tone matrix.

## References

- [Bulma Message](https://bulma.io/documentation/components/message/).
- [Callout contracts](README.md).
