import { createEffect, createSignal } from "solid-js";
import { Preview } from "./preview";
import { type Palette, primaryTheme, themeMode } from "./primary-theme";
import { ThemeControls } from "./theme-controls";

export function TailwindPresetDemo(props: { theme?: string } = {}) {
  const [palette, setPalette] = createSignal<Palette>("blue");
  const [theme, setTheme] = createSignal(themeMode(props.theme));
  const [spacing, setSpacing] = createSignal(4);
  const [radius, setRadius] = createSignal(6);
  createEffect(() => {
    if (props.theme) setTheme(themeMode(props.theme));
  });
  return (
    <main
      class="min-h-screen bg-background p-6 font-sans text-foreground"
      data-nui-theme={theme()}
      style={{
        ...primaryTheme(palette()),
        "--nui-space-unit": `${spacing()}px`,
        "--nui-radius-md": `${radius()}px`,
      }}
    >
      <div class="mx-auto grid max-w-3xl gap-6">
        <header class="grid gap-2">
          <p class="text-sm font-medium text-primary-text">newui + Tailwind</p>
          <h1 class="text-3xl font-semibold leading-tight tracking-tight">One set of tokens.</h1>
          <p class="text-muted-foreground">
            Change the theme and watch the components and application styles update together.
          </p>
        </header>
        <ThemeControls
          palette={palette()}
          theme={theme()}
          spacing={spacing()}
          radius={radius()}
          onPalette={setPalette}
          onTheme={setTheme}
          onSpacing={setSpacing}
          onRadius={setRadius}
        />
        <Preview />
        <p class="text-sm text-muted-foreground">
          Changes apply locally through CSS variables. No rebuild or palette-generation script runs.
        </p>
      </div>
    </main>
  );
}
