# Button

[Actions](../README.md)

An initial native button implementation with solid/outline variants, small/medium sizes, disabled and focus styles, and a safe default `type="button"`. The final visual design remains under development.

## Development examples

From `workspace/`, run `bun run dev` and open Actions / Button in Storybook. Stories cover the default appearance, outline, small size, disabled state, a reactive counter, and scoped token customization. Controls let you edit properties; the theme toolbar switches between light and dark.

Recipes use tailwind-variants' lightweight entry without class merging. Use variants, scoped tokens, or the `style` property to change existing styles. The `class` property supports additive consumer styles.

The colors are provisional; the planned Radix scales have not been integrated yet. Behavior comes from the native button. Ark integration remains planned for components that need it.
