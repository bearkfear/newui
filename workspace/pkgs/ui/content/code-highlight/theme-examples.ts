export const typescriptThemeExample = `import { Button, Heading, Text } from "@egcs/newui";
import { createTheme } from "@egcs/newui/theme";
import "@egcs/newui/styles.css";

// Choose an included Radix palette and customize the semantic tokens.
const theme = createTheme({
  primary: {
    palette: "green",
    tokens: {
      primaryText: "var(--nui-green-11)",
      primaryFocus: "var(--nui-green-8)",
    },
  },
  tokens: {
    background: { light: "#ffffff", dark: "#111113" },
    surface: { light: "#f8f9fa", dark: "#18191b" },
    foreground: { light: "#1c2024", dark: "#edeef0" },
    mutedForeground: { light: "#60646c", dark: "#b0b4ba" },
    border: { light: "#d9d9e0", dark: "#363a3f" },
    radiusSm: "0.375rem",
    radiusMd: "0.625rem",
    radiusLg: "0.875rem",
    spaceUnit: "0.25rem",
    controlHeightMd: "2.5rem",
    fontSans: '"Inter", sans-serif',
    focusWidth: "2px",
  },
});

// Apply the generated custom properties to a scoped Solid component.
export function ThemePreview() {
  return (
    <section style={theme} data-nui-theme="system">
      <Heading as="h2">A theme for your application</Heading>
      <Text>Colors and sizing follow the customized tokens.</Text>
      <Button tone="primary">Get started</Button>
    </section>
  );
}`;

export const cssThemeExample = `@import "@egcs/newui/styles.css";

/* Apply all primary roles together so every interactive state stays coherent. */
:root {
  color-scheme: light dark;

  --nui-background: light-dark(#ffffff, #111113);
  --nui-surface: light-dark(#f8f9fa, #18191b);
  --nui-foreground: light-dark(#1c2024, #edeef0);
  --nui-muted-foreground: light-dark(#60646c, #b0b4ba);
  --nui-border: light-dark(#d9d9e0, #363a3f);

  --nui-primary-1: var(--nui-green-1);
  --nui-primary-2: var(--nui-green-2);
  --nui-primary-3: var(--nui-green-3);
  --nui-primary-4: var(--nui-green-4);
  --nui-primary-5: var(--nui-green-5);
  --nui-primary-6: var(--nui-green-6);
  --nui-primary-7: var(--nui-green-7);
  --nui-primary-8: var(--nui-green-8);
  --nui-primary-9: var(--nui-green-9);
  --nui-primary-10: var(--nui-green-10);
  --nui-primary-11: var(--nui-green-11);
  --nui-primary-12: var(--nui-green-12);

  --nui-primary: var(--nui-green-9);
  --nui-primary-hover: var(--nui-green-10);
  --nui-primary-soft: var(--nui-green-3);
  --nui-primary-soft-hover: var(--nui-green-4);
  --nui-primary-soft-active: var(--nui-green-5);
  --nui-primary-border: var(--nui-green-7);
  --nui-primary-border-hover: var(--nui-green-8);
  --nui-primary-text: var(--nui-green-11);
  --nui-primary-text-strong: var(--nui-green-12);
  --nui-primary-focus: var(--nui-green-8);
  --nui-on-primary: var(--nui-on-green);
  --nui-focus-ring: var(--nui-green-8);

  --nui-radius-sm: 0.375rem;
  --nui-radius-md: 0.625rem;
  --nui-radius-lg: 0.875rem;
  --nui-space-unit: 0.25rem;
  --nui-control-height-md: 2.5rem;
  --nui-font-sans: "Inter", sans-serif;
  --nui-focus-width: 2px;
}`;
