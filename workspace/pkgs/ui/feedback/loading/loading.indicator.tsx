import { Circle, LoaderCircle } from "lucide-solid";
import type { VariantProps } from "tailwind-variants/lite";
import { loadingRecipe } from "./loading.recipe";

type LoadingIndicatorProps = Pick<VariantProps<typeof loadingRecipe>, "size" | "tone">;

export function LoadingIndicator(props: LoadingIndicatorProps) {
  return (
    <span
      class={loadingRecipe({ size: props.size, tone: props.tone }).indicator()}
      aria-hidden="true"
    >
      <Circle strokeWidth={2.5} style={{ color: "var(--nui-loading-track)" }} aria-hidden="true" />
      <LoaderCircle strokeWidth={2.5} aria-hidden="true" />
    </span>
  );
}
