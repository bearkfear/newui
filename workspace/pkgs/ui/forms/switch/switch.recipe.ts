import { tv } from "tailwind-variants/lite";

export const switchPassiveRecipe = tv({
  base: "nui-switch",
  variants: {
    passiveTone: {
      neutral:
        "nui:[--nui-switch-passive:var(--nui-neutral-7)] nui:[--nui-switch-passive-hover:var(--nui-neutral-8)] nui:[--nui-switch-passive-contrast:var(--nui-on-primary)]",
      primary:
        "nui:[--nui-switch-passive:var(--nui-primary)] nui:[--nui-switch-passive-hover:var(--nui-primary-hover)] nui:[--nui-switch-passive-contrast:var(--nui-on-primary)]",
      info: "nui:[--nui-switch-passive:var(--nui-info)] nui:[--nui-switch-passive-hover:var(--nui-info-hover)] nui:[--nui-switch-passive-contrast:var(--nui-on-info)]",
      success:
        "nui:[--nui-switch-passive:var(--nui-success)] nui:[--nui-switch-passive-hover:var(--nui-success-hover)] nui:[--nui-switch-passive-contrast:var(--nui-on-success)]",
      warning:
        "nui:[--nui-switch-passive:var(--nui-warning)] nui:[--nui-switch-passive-hover:var(--nui-warning-hover)] nui:[--nui-switch-passive-contrast:var(--nui-on-warning)]",
      danger:
        "nui:[--nui-switch-passive:var(--nui-danger)] nui:[--nui-switch-passive-hover:var(--nui-danger-hover)] nui:[--nui-switch-passive-contrast:var(--nui-on-danger)]",
    },
  },
});
