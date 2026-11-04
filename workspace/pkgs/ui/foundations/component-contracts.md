# Component contracts

[Foundations](README.md)

Import public components and types from `@egcs/newui`, and import `@egcs/newui/styles.css` once. Internal source imports stay extensionless and relative. The package owns compiled styles; consuming applications do not need Tailwind or access to internal recipes.

Use standalone components for small native controls and compound APIs for parts with distinct composition roles: `Card.Root`, `Card.Header`, `Card.Title`, and `Card.Content`. Parts remain optional only where their semantic contract permits. Interactive roots retain Ark's required anatomy and associated labels. Do not add a universal wrapper solely to hide meaningful parts.

| Property | Contract                                                                                   |
| -------- | ------------------------------------------------------------------------------------------ |
| variant  | Appearance within one component; values are contextual, not a universal enum               |
| tone     | Semantic color intent where supported: primary, neutral, info, success, warning, danger    |
| size     | A component's documented scale; controls commonly use xs–lg, typography uses numeric sizes |
| density  | Information spacing where distinct from size, such as Table                                |
| class    | Additive classes on the owning DOM part, with no automatic utility conflict resolution     |
| style    | Native inline styles and scoped public --nui-* tokens                                      |
| ref      | The owning DOM element for the specific part, through Solid's native ref contract          |

Use explicit part props for styling individual parts. Root props are not a generic mechanism to style every descendant. Group contexts may supply defaults; explicit Button props override ButtonGroup visual defaults, while a disabled group disables its buttons. Do not introduce a global style provider or slots object without a demonstrated need.

Forward native attributes, events, refs, and relevant primitive data attributes to the documented DOM part. Preserve Solid reactivity with mergeProps/splitProps or property access; avoid destructuring reactive values into snapshots. Preserve Ark event cancellation and controlled/uncontrolled behavior. Controlled roots use the primitive's value/open and change callback; defaultValue/defaultOpen initialize uncontrolled state.

Use `as` only where a component documents a supported native element union. Use Ark's Solid `asChild={(props) => ...}` on supported triggers to compose behavior onto a real Button/link. Spread the supplied reactive props onto that control and preserve the primitive's ref/event associations. Avoid nested buttons and anchors. Native navigation links retain navigation semantics rather than receiving action-menu behavior.

Use variants first, then the owning public token contract, then native style or additive class for application details. Internal recipe variables and Ark geometry variables are not automatically supported customization APIs merely because they appear in generated CSS. Do not promise arbitrary class override precedence.

Theme scopes preserve color-scheme and existing portals copy public --nui-* tokens, inherited typography, and motion preferences. Portaled content is not a CSS descendant of the trigger; ancestor application selectors and inherited classes do not automatically follow it. See [Themes](themes.md), [Typography](typography.md), and [Dimensions](dimensions.md).

Review Foundations / Customization and Interaction states for concrete examples. The documented contracts consolidate existing APIs; no new universal polymorphic or icon component is introduced.
