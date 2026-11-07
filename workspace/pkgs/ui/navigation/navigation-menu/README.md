# Navigation Menu

Page links with dropdowns, grouped panels, and cascading disclosures. Use this standalone inside a page or custom header; use [Navbar](../navbar/README.md) when you also need a brand, actions, and mobile toggle. Use [Menubar](../../actions/menubar/README.md) for application commands.

```tsx
import { NavigationMenu as Menu } from "@egcs/newui";
import "@egcs/newui/styles.css";

<Menu.Root aria-label="Product navigation">
  <Menu.List>
    <Menu.Item value="home">
      <Menu.Link href="/" current>
        Home
      </Menu.Link>
    </Menu.Item>
    <Menu.Item value="resources">
      <Menu.Trigger>Resources</Menu.Trigger>
      <Menu.Content>
        <Menu.Link value="guides" href="/guides">
          Guides
        </Menu.Link>
        <Menu.Submenu>
          <Menu.SubmenuTrigger>Projects</Menu.SubmenuTrigger>
          <Menu.SubmenuContent aria-label="Projects">
            <Menu.Link value="website" href="/projects/website">
              Website
            </Menu.Link>
          </Menu.SubmenuContent>
        </Menu.Submenu>
      </Menu.Content>
    </Menu.Item>
  </Menu.List>
</Menu.Root>;
```

## Composition

Each Item needs a unique `value`; Trigger and Content belong inside that Item. Links are real anchors; provide destinations and `current` for the active page. Link `asChild` uses Ark's render-function form for router integration. Native props, refs, styles, and additive classes are forwarded. Applications own routing and focus after navigation.

Content defaults to a simple 16rem dropdown, separated from its trigger by 6px. The disclosure chevron rotates when open. Use `layout="wide"` for a 32rem two-column panel and place Group/Label/Link parts inside; it becomes one column on mobile. Associate each Group with its Label using `aria-labelledby`/`id`. Description is optional supporting text inside Link. `align="end"` anchors a panel to the item's right edge; use it near the right edge of a header. Top-level panels stay in the DOM tree; ensure custom ancestors do not clip overflow and choose alignment to fit the viewport.

For multiple levels, place Submenu, SubmenuTrigger, and SubmenuContent inside Content. Repeat that composition inside SubmenuContent for deeper levels. Name each SubmenuContent with `aria-label` or `aria-labelledby`. Desktop submenus open beside the trigger with Ark collision handling; below 48rem they expand inline. Prefer short hierarchies. The same API is available as Navbar.Submenu, SubmenuTrigger, and SubmenuContent.

## Behavior and Ark mapping

Root/List/Item/Trigger/Content/Link wrap Ark Navigation Menu. Click/tap opens a top-level panel; Tab traverses links and disclosure buttons. Ark owns the top-level arrow-key behavior, current-page semantics, Escape/outside dismissal, and generated associations. Defaults disable hover opening and pointer-leave closing, so crossing into a cascade does not close its parent. Ark hover options remain available for simple menus; keep these defaults for cascades.

Ark Navigation Menu has no dedicated cascade primitive in the installed version. Nested navigation was evaluated, but it does not provide floating collision handling or an explicit parent/submenu contract. Cascades therefore compose nonmodal Ark Popover with native links, the existing theme-preserving portal, and the maintained media-query utility. Ark owns disclosure, focus, positioning, presence, and nested dismissal. These are named nonmodal disclosures, not ARIA action menus: use Tab, Enter/Space, and Escape, rather than expecting action-menu arrow navigation inside them. No Kobalte or new dependency is used.

Root uses Ark's hook and RootProvider with a narrow compatibility adapter: Zag 1.45 applies `disablePointerLeaveClose` only to Viewport. The adapter also honors it on individual Content panels, preventing parent closure while the pointer crosses into a portalled cascade. Other Ark handlers and consumer callbacks remain intact; setting the option to false restores Ark's pointer-leave behavior.

Root accepts Ark `defaultValue` or controlled `value`/`onValueChange` for the open top-level panel. Submenu accepts Ark Popover `defaultOpen` or controlled `open`/`onOpenChange` and `positioning`. Link selection closes its ancestor disclosures and invokes Root `onNavigate`; cancel Link `onSelect` to retain the navigation. Submenu content is lazy-mounted and unmounted on exit; keep persistent application state outside it.

## Storybook examples

Storybook: Navigation / Navigation Menu and Navigation / Navbar cover simple and grouped panels, three-level cascades, current links, desktop/mobile, and dark themes.
