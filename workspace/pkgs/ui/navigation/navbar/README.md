# Navbar

Responsive website navigation powered by Ark UI Navigation Menu and Collapsible, with Radix semantic colors.

```tsx
import { Navbar } from "newui";
import "newui/styles.css";

<Navbar.Root aria-label="Primary navigation">
  <Navbar.Brand href="/">Your product</Navbar.Brand>
  <Navbar.Toggle />
  <Navbar.Content>
    <Navbar.List>
      <Navbar.Item value="home">
        <Navbar.Link href="/" current>
          Home
        </Navbar.Link>
      </Navbar.Item>
      <Navbar.Item value="resources">
        <Navbar.MenuTrigger>Resources</Navbar.MenuTrigger>
        <Navbar.MenuContent>
          <Navbar.Link href="/guides">Guides</Navbar.Link>
        </Navbar.MenuContent>
      </Navbar.Item>
    </Navbar.List>
    <Navbar.Actions>
      <Navbar.Link value="account" href="/account">
        Account
      </Navbar.Link>
    </Navbar.Actions>
  </Navbar.Content>
</Navbar.Root>;
```

Root renders the Ark nav landmark inside its mobile disclosure provider. Its DOM attributes and ref target nav. The default accessible name is Main navigation; give multiple landmarks distinct names. Brand is a native anchor. List, Item, Link, and submenu parts preserve Ark's default anatomy and props. Each Item requires a unique value.

`tone`: default or subtle. `width`: sm, md, lg (default), full, using Container. Below 768px Content is controlled by Toggle; from 768px Content is always open and Toggle is hidden. Resizing back restores the mobile state. There is no duplicate set of links or focus trap.

`open`, `defaultOpen`, and `onOpenChange({ open })` refer to the mobile disclosure. Submenu `value`, `defaultValue`, `onValueChange`, delays, and hover/click options are Ark Navigation Menu root props. Do not confuse these two state contracts. Escape closes mobile navigation and returns focus to Toggle; selecting a link closes it unless its onSelect event is canceled.

MenuTrigger/MenuContent live inside Item. Ark owns submenu interactions, focus movement, dismissal, expanded states, and current-link semantics. Pass `current` to Link for aria-current=page. Item supports disabled. Toggle's default name is Toggle navigation; children and aria-label support application wording.

Ark's Solid `asChild` uses a render function, rather than a boolean. Link forwards this prop for custom router elements. Applications own destinations, routing, and route-change focus. Class values are additive; use variants and tokens for reliable customization.

Review Navigation / Navbar and Overview in Storybook. The implementation has been validated by the user; no new automated tests have been added.
