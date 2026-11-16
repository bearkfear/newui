import { RadioGroup } from "@egcs/newui/forms";
import type { ColorMode } from "@egcs/newui/theme";

type AppearanceCopy = {
  appearance: string;
  light: string;
  dark: string;
  system: string;
};

type AppearanceControlProps = {
  mode: ColorMode;
  copy: AppearanceCopy;
  onModeChange: (mode: ColorMode) => void;
};

export function AppearanceControl(props: AppearanceControlProps) {
  return (
    <RadioGroup.Root
      aria-label={props.copy.appearance}
      class="w-[7.5rem]"
      size="sm"
      variant="segmented"
      value={props.mode}
      onValueChange={(details) => {
        if (details.value === "light" || details.value === "dark" || details.value === "system") {
          props.onModeChange(details.value);
        }
      }}
    >
      <RadioGroup.Item value="light" aria-label={props.copy.light}>
        <RadioGroup.ItemControl />
        <svg
          class="size-4"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="1.7"
          stroke-linecap="round"
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2m0 16v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42" />
        </svg>
        <RadioGroup.ItemText class="sr-only">{props.copy.light}</RadioGroup.ItemText>
      </RadioGroup.Item>
      <RadioGroup.Item value="dark" aria-label={props.copy.dark}>
        <RadioGroup.ItemControl />
        <svg
          class="size-4"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="1.7"
          stroke-linecap="round"
          aria-hidden="true"
        >
          <path d="M20.2 15.4A8.3 8.3 0 0 1 8.6 3.8 8.5 8.5 0 1 0 20.2 15.4Z" />
        </svg>
        <RadioGroup.ItemText class="sr-only">{props.copy.dark}</RadioGroup.ItemText>
      </RadioGroup.Item>
      <RadioGroup.Item value="system" aria-label={props.copy.system}>
        <RadioGroup.ItemControl />
        <svg
          class="size-4"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="1.7"
          stroke-linecap="round"
          stroke-linejoin="round"
          aria-hidden="true"
        >
          <rect x="3" y="4" width="18" height="13" rx="2" />
          <path d="M8 21h8m-4-4v4" />
        </svg>
        <RadioGroup.ItemText class="sr-only">{props.copy.system}</RadioGroup.ItemText>
      </RadioGroup.Item>
    </RadioGroup.Root>
  );
}
