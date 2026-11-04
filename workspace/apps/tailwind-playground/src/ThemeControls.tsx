import type { Palette, ThemeMode } from "./primary-theme";

interface ThemeControlsProps {
  palette: Palette;
  theme: ThemeMode;
  spacing: number;
  radius: number;
  onPalette: (value: Palette) => void;
  onTheme: (value: ThemeMode) => void;
  onSpacing: (value: number) => void;
  onRadius: (value: number) => void;
}

const control = "rounded-md border border-border bg-background px-3 py-2 focus-visible:focus-ring";

export function ThemeControls(props: ThemeControlsProps) {
  return (
    <section
      aria-label="Theme controls"
      class="grid gap-4 rounded-md border border-border bg-surface p-4 sm:grid-cols-2"
    >
      <label class="grid gap-2 text-sm font-medium">
        Primary palette
        <select
          class={control}
          value={props.palette}
          onChange={(event) => {
            const value = event.currentTarget.value;
            if (value === "blue" || value === "green" || value === "red") props.onPalette(value);
          }}
        >
          <option value="blue">Blue</option>
          <option value="green">Green</option>
          <option value="red">Red</option>
        </select>
      </label>
      <label class="grid gap-2 text-sm font-medium">
        Appearance
        <select
          class={control}
          value={props.theme}
          onChange={(event) => {
            const value = event.currentTarget.value;
            if (value === "system" || value === "light" || value === "dark") props.onTheme(value);
          }}
        >
          <option value="system">System</option>
          <option value="light">Light</option>
          <option value="dark">Dark</option>
        </select>
      </label>
      <label class="grid gap-2 text-sm font-medium">
        Spacing unit: {props.spacing}px
        <input
          type="range"
          min="2"
          max="6"
          step="0.5"
          value={props.spacing}
          onInput={(event) => props.onSpacing(event.currentTarget.valueAsNumber)}
        />
      </label>
      <label class="grid gap-2 text-sm font-medium">
        Medium radius: {props.radius}px
        <input
          type="range"
          min="0"
          max="24"
          value={props.radius}
          onInput={(event) => props.onRadius(event.currentTarget.valueAsNumber)}
        />
      </label>
    </section>
  );
}
