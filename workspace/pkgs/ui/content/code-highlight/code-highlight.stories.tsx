import { createSignal } from "solid-js";
import type { Meta, StoryObj } from "storybook-solidjs-vite";
import { Button } from "../../actions/button/button";
import { CodeHighlight } from "./code-highlight";
import { cssThemeExample, typescriptThemeExample } from "./theme-examples";

const sample =
  'import { Button } from "@egcs/newui";\n\nexport function SaveButton() {\n  return <Button>Save changes</Button>;\n}';
const meta = {
  title: "Content/CodeHighlight",
  component: CodeHighlight,
  args: { code: sample, language: "tsx", title: "save-button.tsx", copyable: true },
} satisfies Meta<typeof CodeHighlight>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
export const ThemeWithTypeScript: Story = {
  args: { code: typescriptThemeExample, language: "tsx", title: "theme.tsx", copyable: true },
};
export const ThemeWithCssTokens: Story = {
  args: { code: cssThemeExample, language: "css", title: "theme.css", copyable: true },
};
export const PlainText: Story = {
  args: {
    language: "text",
    code: "A plain text example\n  with preserved indentation.",
    title: "Output",
  },
};
export const LongLine: Story = {
  args: { language: "bash", code: `bun add ${"example-package ".repeat(20)}`, title: "Terminal" },
};
export const Dynamic: Story = {
  render: () => {
    const [alternate, setAlternate] = createSignal(false);
    return (
      <div style={{ display: "grid", gap: "1rem" }}>
        <Button onClick={() => setAlternate(!alternate())}>Change code</Button>
        <CodeHighlight
          code={alternate() ? ":root { --accent: #0090ff; }" : sample}
          language={alternate() ? "css" : "tsx"}
          title="Dynamic example"
          copyable
        />
      </div>
    );
  },
};
export const Dark: Story = { globals: { theme: "dark" } };
export const Mobile: Story = { globals: { viewport: { value: "smallMobile", isRotated: false } } };
