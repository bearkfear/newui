import type { Meta, StoryObj } from "storybook-solidjs-vite";
import { PackageProfile, SharedButtonDefaults } from "./stories/package-examples";
import "./stories/package-examples.css";

const profileSource = `import { Button } from "newui/actions";
import { Card } from "newui/content";
import { Field, Input } from "newui/forms";
import "newui/styles.css";

export function Profile() {
  return (
    <Card.Root>
      <Card.Header>
        <Card.Title>Profile</Card.Title>
        <Card.Description>Update your display name.</Card.Description>
      </Card.Header>
      <Card.Content>
        <Field.Root required>
          <Field.Label>Display name<Field.RequiredIndicator /></Field.Label>
          <Input name="displayName" autocomplete="name" />
          <Field.Description>Shown to other members.</Field.Description>
        </Field.Root>
      </Card.Content>
      <Card.Footer><Button>Save profile</Button></Card.Footer>
    </Card.Root>
  );
}`;

const meta = {
  title: "Getting started/Package consumption",
  tags: ["autodocs"],
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        component:
          "One package with named area entries and one compiled stylesheet. The catalog renders source aggregators without requiring a library build; consumer snippets use the package paths. Charts stay in newui/charts. Modular CSS and consumer Tailwind compilation are later stages. The package is not published yet.",
      },
    },
  },
} satisfies Meta;
export default meta;
type Story = StoryObj<typeof meta>;

export const Profile: Story = {
  render: () => <PackageProfile />,
  parameters: { docs: { source: { code: profileSource } } },
};

export const SharedDefaults: Story = {
  render: () => <SharedButtonDefaults />,
  parameters: {
    docs: {
      description: {
        story:
          "InputGroup from Forms supplies small button defaults and disabled state to both the Actions Button and the main-entry Button. Toggle disabled and inspect both actions. Both imports must share the same button context.",
      },
      source: {
        code: `import { Button as RootButton } from "newui";
import { Button } from "newui/actions";
import { Input, InputGroup } from "newui/forms";

<InputGroup.Root size="sm" disabled={disabled()}>
  <Input aria-label="Project name" value="newui" />
  <InputGroup.Action>
    <Button variant="ghost">Area import</Button>
    <RootButton variant="ghost">Main import</RootButton>
  </InputGroup.Action>
</InputGroup.Root>`,
      },
    },
  },
};

export const Mobile: Story = {
  ...Profile,
  globals: { viewport: { value: "smallMobile", isRotated: false } },
};
