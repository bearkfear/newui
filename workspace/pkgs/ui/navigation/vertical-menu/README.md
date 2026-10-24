# Vertical Menu

Grouped and nested page navigation with native links and optional Ark Collapsible branches.

```tsx
import { VerticalMenu } from "newui";
import "newui/styles.css";

<VerticalMenu.Root aria-label="Workspace">
  <VerticalMenu.Group>
    <VerticalMenu.Label>Workspace</VerticalMenu.Label>
    <VerticalMenu.List>
      <VerticalMenu.Item>
        <VerticalMenu.Link href="/" current>
          Overview
        </VerticalMenu.Link>
      </VerticalMenu.Item>
      <VerticalMenu.Branch defaultOpen>
        <VerticalMenu.BranchTrigger>Projects</VerticalMenu.BranchTrigger>
        <VerticalMenu.BranchContent>
          <VerticalMenu.SubList>
            <VerticalMenu.Item>
              <VerticalMenu.Link href="/projects/design">Design system</VerticalMenu.Link>
            </VerticalMenu.Item>
          </VerticalMenu.SubList>
        </VerticalMenu.BranchContent>
      </VerticalMenu.Branch>
    </VerticalMenu.List>
  </VerticalMenu.Group>
</VerticalMenu.Root>;
```

Root options: `variant` plain (default) or surface; `density` comfortable (default) or compact. Styles propagate reactively to parts. Root fills its container and has the default accessible name Sidebar navigation. Give separate navigation landmarks meaningful, distinct names.

Root is nav, Group is div, Label is h2 size 6 by default, List/SubList are ul, Item/Branch are li, and Link is a. Override Label as/size for the document outline. Current links accept `current` or native aria-current. Icon is a decorative span that aligns SVG children; visible link text supplies the accessible name.

Always put Item and Branch directly inside List/SubList. A static nested hierarchy needs only Item plus SubList. Branch/BranchTrigger/BranchContent use Ark Collapsible for IDs, expanded state, controlled/uncontrolled state, and hidden content. Branch accepts open, defaultOpen, onOpenChange, disabled, lazyMount, and unmountOnExit. Disabled state is also applied to the native trigger. Branch refs target li; other part refs target their rendered elements.

This is site navigation, not an ARIA action menu or tree view. Links keep native Tab/Shift+Tab behavior; triggers use Enter/Space. There is no arrow-key selection model, focus trapping, or automatic route inference. Applications own href values, current-page state, and routing. Native attributes, events, styles, and additive classes are forwarded.

Review Navigation / Vertical menu for static nesting, expandable branches, controlled state, disabled behavior, density, mobile, and dark mode. Navigation / Overview synchronizes current-page state between the Navbar and VerticalMenu in a local example. No new automated tests have been added.
