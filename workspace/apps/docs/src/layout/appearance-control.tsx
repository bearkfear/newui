import { RadioGroup } from "@egcs/newui/forms";
import type { ColorMode } from "@egcs/newui/theme";
import { Monitor, Moon, Sun } from "lucide-solid";

type AppearanceCopy = {
  appearance: string;
  light: string;
  dark: string;
  system: string;
};

type AppearanceControlProps = {
  mode: ColorMode;
  labels: AppearanceCopy;
  onModeChange: (mode: ColorMode) => void;
};

export function AppearanceControl(props: AppearanceControlProps) {
  return (
    <RadioGroup.Root
      aria-label={props.labels.appearance}
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
      <RadioGroup.Item value="light" aria-label={props.labels.light}>
        <RadioGroup.ItemControl />
        <Sun class="size-4" aria-hidden="true" />
        <RadioGroup.ItemText class="sr-only">{props.labels.light}</RadioGroup.ItemText>
      </RadioGroup.Item>
      <RadioGroup.Item value="dark" aria-label={props.labels.dark}>
        <RadioGroup.ItemControl />
        <Moon class="size-4" aria-hidden="true" />
        <RadioGroup.ItemText class="sr-only">{props.labels.dark}</RadioGroup.ItemText>
      </RadioGroup.Item>
      <RadioGroup.Item value="system" aria-label={props.labels.system}>
        <RadioGroup.ItemControl />
        <Monitor class="size-4" aria-hidden="true" />
        <RadioGroup.ItemText class="sr-only">{props.labels.system}</RadioGroup.ItemText>
      </RadioGroup.Item>
    </RadioGroup.Root>
  );
}
