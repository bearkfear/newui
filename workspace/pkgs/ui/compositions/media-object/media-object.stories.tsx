import type { Meta, StoryObj } from "storybook-solidjs-vite";
import { Text } from "../../content/text/text";
import { MediaObject } from "./media-object";
import { MediaObjectExample, ProfilePicture } from "./stories/media-object-example";

const meta = {
  title: "Compositions/Media object",
  component: MediaObject.Root,
  tags: ["autodocs"],
  args: { size: "md", align: "start", as: "article" },
  argTypes: {
    size: { control: "inline-radio", options: ["sm", "md", "lg"] },
    align: { control: "inline-radio", options: ["start", "center"] },
    as: { control: "inline-radio", options: ["article", "div"] },
  },
  parameters: {
    docs: {
      description: {
        component:
          "Media, flexible content, and optional actions in one responsive composition. Actions move below content on small screens; media stays beside it. Put Media, Content, and Actions directly inside Root in that order. Supply meaningful image alt text or mark decorative thumbnails as hidden. Use as=div when the content is not a self-contained article.",
      },
    },
  },
  render: (args) => <MediaObjectExample {...args} />,
} satisfies Meta<typeof MediaObject.Root>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
export const Compact: Story = { args: { size: "sm" } };
export const LargeMedia: Story = { args: { size: "lg" } };
export const Centered: Story = { args: { align: "center" } };
export const Nested: Story = {
  render: (args) => (
    <MediaObject.Root {...args}>
      <MediaObject.Media>
        <ProfilePicture initials="AM" />
      </MediaObject.Media>
      <MediaObject.Content>
        <MediaObject.Title as="h2">Avery Morgan</MediaObject.Title>
        <MediaObject.Description>Could we simplify the release checklist?</MediaObject.Description>
        <MediaObject.Root size="sm" style={{ "margin-block-start": "24px" }}>
          <MediaObject.Media>
            <ProfilePicture initials="JL" />
          </MediaObject.Media>
          <MediaObject.Content>
            <MediaObject.Title>Jordan Lee</MediaObject.Title>
            <Text>Yes. The updated version is ready for a second look.</Text>
          </MediaObject.Content>
        </MediaObject.Root>
      </MediaObject.Content>
    </MediaObject.Root>
  ),
};
export const Mobile: Story = { globals: { viewport: { value: "smallMobile", isRotated: false } } };
export const RightToLeft: Story = { globals: { direction: "rtl" } };
