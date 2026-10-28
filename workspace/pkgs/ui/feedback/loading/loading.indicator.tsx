import type { VariantProps } from "tailwind-variants/lite";
import { loadingRecipe } from "./loading.recipe";

type LoadingIndicatorProps = Pick<VariantProps<typeof loadingRecipe>, "size" | "tone">;

export function LoadingIndicator(props: LoadingIndicatorProps) {
  return (
    <svg
      class={loadingRecipe({ size: props.size, tone: props.tone }).indicator()}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="10" stroke="var(--nui-loading-track)" stroke-width="2.5" />
      <path
        d="M12 2a10 10 0 0 1 10 10"
        stroke="currentColor"
        stroke-width="2.5"
        stroke-linecap="round"
      />
    </svg>
  );
}
