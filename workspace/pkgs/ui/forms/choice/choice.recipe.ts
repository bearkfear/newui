import { tv } from "tailwind-variants/lite";

export const choiceRecipe = tv({
  base: "nui-choice",
  variants: {
    size: {
      sm: "nui:[--nui-choice-size:1rem] nui:[--nui-choice-font:var(--nui-font-size-sm)]",
      md: "nui:[--nui-choice-size:1.125rem] nui:[--nui-choice-font:var(--nui-font-size-base)]",
      lg: "nui:[--nui-choice-size:1.375rem] nui:[--nui-choice-font:var(--nui-font-size-lg)]",
    },
    tone: {
      neutral:
        "nui:[--nui-choice-color:var(--nui-primary)] nui:[--nui-choice-contrast:var(--nui-on-primary)] nui:[--nui-choice-focus:var(--nui-focus-ring)]",
      primary:
        "nui:[--nui-choice-color:var(--nui-primary)] nui:[--nui-choice-contrast:var(--nui-on-primary)] nui:[--nui-choice-focus:var(--nui-primary-focus)]",
      info: "nui:[--nui-choice-color:var(--nui-info)] nui:[--nui-choice-contrast:var(--nui-on-info)] nui:[--nui-choice-focus:var(--nui-info-focus)]",
      success:
        "nui:[--nui-choice-color:var(--nui-success)] nui:[--nui-choice-contrast:var(--nui-on-success)] nui:[--nui-choice-focus:var(--nui-success-focus)]",
      warning:
        "nui:[--nui-choice-color:var(--nui-warning)] nui:[--nui-choice-contrast:var(--nui-on-warning)] nui:[--nui-choice-focus:var(--nui-warning-focus)]",
      danger:
        "nui:[--nui-choice-color:var(--nui-danger)] nui:[--nui-choice-contrast:var(--nui-on-danger)] nui:[--nui-choice-focus:var(--nui-danger-focus)]",
    },
  },
  defaultVariants: { size: "md", tone: "neutral" },
});
