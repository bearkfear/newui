import { Archive, Bell, Check, ChevronRight, Copy, Download, Plus, Search, X } from "lucide-solid";
import { createSignal, For } from "solid-js";
import { Dynamic } from "solid-js/web";
import type { Meta, StoryObj } from "storybook-solidjs-vite";
import { Button } from "../actions/button/button";
import { Callout } from "../feedback/callout/callout";
import { Empty } from "../feedback/empty/empty";
import { Loading } from "../feedback/loading/loading";

const meta = {
  title: "Foundations/Iconography",
  parameters: { controls: { disable: true } },
} satisfies Meta;
export default meta;
type Story = StoryObj<typeof meta>;

const icons = [
  { name: "Plus", component: Plus },
  { name: "Search", component: Search },
  { name: "Bell", component: Bell },
  { name: "Archive", component: Archive },
  { name: "Copy", component: Copy },
  { name: "Download", component: Download },
  { name: "Check", component: Check },
  { name: "ChevronRight", component: ChevronRight },
  { name: "X", component: X },
];
const row = { display: "flex", "flex-wrap": "wrap", "align-items": "center", gap: "16px" } as const;

function IconActions() {
  const [archived, setArchived] = createSignal(false);
  return (
    <section class="nui-catalog-section">
      <h2>Actions and accessible names</h2>
      <div style={row}>
        <Button startIcon={<Plus aria-hidden="true" />}>Create project</Button>
        <Button variant="outline" endIcon={<ChevronRight aria-hidden="true" />}>
          Continue
        </Button>
        <Button
          variant="soft"
          iconOnly
          aria-label={archived() ? "Restore project" : "Archive project"}
          aria-pressed={archived()}
          onClick={() => setArchived((value) => !value)}
        >
          <Archive class="nui-button-icon" aria-hidden="true" />
        </Button>
        <Button variant="outline" iconOnly disabled aria-label="Download project">
          <Download class="nui-button-icon" aria-hidden="true" />
        </Button>
      </div>
      <p role="status">{archived() ? "Project archived." : "Project active."}</p>
    </section>
  );
}

function ComponentIcons() {
  return (
    <section class="nui-catalog-section">
      <h2>Component defaults</h2>
      <For each={["info", "success", "warning", "danger"] as const}>
        {(tone) => (
          <Callout.Root tone={tone}>
            <Callout.Icon />
            <Callout.Content>
              <Callout.Title>{tone} message</Callout.Title>
              <Callout.Description>Meaning remains available in the text.</Callout.Description>
            </Callout.Content>
          </Callout.Root>
        )}
      </For>
      <Loading showLabel label="Loading projects" />
      <Empty.Root layout="compact">
        <Empty.Icon />
        <Empty.Content>
          <Empty.Title>No projects yet</Empty.Title>
          <Empty.Description>Create a project to get started.</Empty.Description>
        </Empty.Content>
      </Empty.Root>
    </section>
  );
}

export const Overview: Story = {
  render: () => (
    <main class="nui-catalog nui-catalog-stack">
      <p class="nui-catalog-eyebrow">Foundations / Iconography</p>
      <h1>Lucide icons for Solid.</h1>
      <p class="nui-catalog-lead">
        Import named components from lucide-solid. Icons inherit text color; decorative icons stay
        hidden from assistive technology. Icon-only buttons provide their own accessible name.
      </p>
      <section class="nui-catalog-section">
        <h2>Shared visual language</h2>
        <div style={row}>
          <For each={icons}>
            {(icon) => (
              <figure style={{ display: "grid", gap: "8px", "justify-items": "center" }}>
                <Dynamic component={icon.component} size={20} aria-hidden="true" />
                <figcaption>{icon.name}</figcaption>
              </figure>
            )}
          </For>
        </div>
        <h3>Sizes</h3>
        <div style={row}>
          <For each={[14, 16, 20, 24]}>
            {(size) => (
              <span style={{ display: "inline-flex", "align-items": "center", gap: "8px" }}>
                <Search size={size} aria-hidden="true" /> {size}px
              </span>
            )}
          </For>
        </div>
      </section>
      <IconActions />
      <ComponentIcons />
    </main>
  ),
};
