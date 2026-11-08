# Library dependency map

[Architecture](architecture.md) · [Dependency rules](../conventions/dependency-layers.md)

## Layers and ownership

Areas organize the catalog by use. Layers describe module responsibilities; they do not require moving the area directories or splitting npm packages. In the diagram, arrows mean “imports”.

```text
Public entry points → interface compositions → components → support modules
Public entry points ─────────────────────────→ components
Interface compositions ──────────────────────────────────→ support modules
Components → other components, provided there is no cycle
Support modules → other support modules, provided there is no cycle
CSS distribution roots → visual foundations + component styles + recipe sources
```

Visual foundations are `foundations/base.css`, `radix.css`, `tokens.css`, and `metrics.css`. They contain values, themes, and utility mappings without importing component implementations or styles. Component-specific token names alone do not create module dependencies.

`foundations/focus.css`, imported by `base.css`, owns the shared focus contour, timing, reduced-motion behavior, and forced-color fallback. Components consume its classes and local color/offset variables without importing each other.

Support modules include recipes, contexts, type contracts, and the theme-preserving portal helpers in Overlays. These stay with their owning areas. They may use Solid, Ark, or tailwind-variants without importing the component implementations that consume them.

Forms / MaskedInput composes Input. Its internal createInputMask adapter depends on Solid and IMask, and its pattern compiler depends on the mask token contract. These support modules do not import Input or MaskedInput; Ark Field.Input owns field associations. The base Input has no dependency on the mask adapter.

Forms / maskText and unmaskText reuse the same compiler and token contract through IMask's model layer. These synchronous helpers import no components, Solid, or styles and require no DOM element or Solid owner.

The mask's TextMaskElement specializes IMask's DOM bridge only to gate undo/redo for native readonly/disabled controls. IMask still owns event binding, selection, and editing history; the bridge imports no newui component.

Forms / NumberInput composes Input and reuses TextMaskElement plus the shared text-control reset binding. Its DecimalMask specializes IMask's string editing, grouping and blur padding while disabling numeric comparisons. Decimal helpers own normalization, exact string comparisons and Intl grouping; they import no components, Solid, IMask or styles and are exported through the DOM-independent numbers entry. Ark NumberInput's floating-point value path does not meet this precision contract.

Forms / CurrencyInput reuses the decimal renderer/controller through an internal behavior contract and composes InputGroup currency addons. Currency helpers depend only on numeric helpers and Intl metadata. MinorUnitMask specializes DecimalMask's integer editing with fixed fractional decoration; it does not own a separate editing state machine. Public number/currency helpers share the numbers entry without importing either input component.

Forms / RichTextEditor integrates Tiptap's framework-independent core directly with Solid lifecycle primitives and composes the existing Button for formatting actions. Its component styles reuse Content / Prose's native editorial rules. The fixed schema is shared with the DOM-independent rich-text entry, whose HTML conversion uses Tiptap's server-compatible HTML package without importing Solid or mounting an editor.

Forms / Select wraps Ark Select and reuses the text-control visual contract, recipe, and reset binding. Its value adapter preserves canceled native resets without replacing Ark navigation or selection behavior. Select Content uses Overlays / OverlayPortal for inherited themes; Indicator composes Feedback / LoadingIndicator. The lower-level select.types contract keeps the value adapter independent of Root.

Forms / Checkbox, CheckboxGroup, and RadioGroup wrap Ark's corresponding primitives. Shared choice support owns the visual recipe, group options context, and native reset adapter over the existing text-control reset binding. Checkbox consumes CheckboxGroup's lower-level context for unique item IDs and input registration; CheckboxGroup does not import Checkbox. Radio item input composition preserves readonly submission and Field descriptions without replacing Ark selection or navigation.

Forms / Switch wraps Ark Switch and reuses choice options, the choice visual recipe, and the shared reset adapter. Its own CSS and passive-tone recipe own track geometry and checked/unchecked appearance; it imports no other component implementation. Native disabled fieldsets are styled through the input's `:disabled` state because the installed Ark Switch does not expose that state on its visual parts.

Independent components include Button, Text, Heading, Loading, and Resizable. Composed components include Card, Empty, InputGroup, Sidebar, and Charts. The `compositions/` implementations combine components for larger interface structures; they are never dependencies of lower layers.

## Current cross-area implementation dependencies

The table summarizes direct local imports, including types. Each target is a specific module, not an entire area. Same-area dependencies, third-party imports, public re-exports, and catalog-only examples are omitted.

| Consumer                                     | Direct dependencies outside its area                   | Purpose                                      |
| -------------------------------------------- | ------------------------------------------------------ | -------------------------------------------- |
| Actions / Menu                               | Overlays / OverlayPortal                               | Themed menu portals                          |
| Compositions / ActionBar, MediaObject, Panel | Content / Heading, Text                                | Shared typography                            |
| Compositions / Footer                        | Content / Heading; Layout / Container                  | Heading and width                            |
| Compositions / Hero                          | Content / Heading, Text; Layout / Container, Section   | Typography and layout                        |
| Data / BadgeDelta                            | Content / Badge                                        | Badge presentation                           |
| Data / BarList                               | Feedback / Empty                                       | Empty state                                  |
| Data / Charts                                | Actions / Button; Feedback / Empty                     | Data disclosure and empty state              |
| Feedback / Empty                             | Content / Heading, Text                                | Shared typography                            |
| Feedback / Toast                             | Actions / buttonRecipe; Overlays / portal-scope        | Action styling and themed portal scope       |
| Feedback / TopProgress                       | Overlays / portal-scope                                | Themed page bar portal                       |
| Forms / InputGroup                           | Actions / button-group.context; Feedback / Loading     | Shared button defaults and loading indicator |
| Forms / RichTextEditor                       | Actions / Button; Content / Prose styles               | Formatting controls and editorial typography |
| Forms / Select                               | Overlays / OverlayPortal; Feedback / LoadingIndicator  | Themed option list and loading indicator     |
| Navigation / Navbar                          | Layout / Container                                     | Width constraints                            |
| Navigation / NavigationMenu                  | Overlays / OverlayPortal                               | Themed submenu portals                       |
| Navigation / Sidebar                         | Layout / Resizable; Overlays / Sheet; Actions / Button | Desktop panels, mobile presentation, toggle  |
| Navigation / Steps                           | Actions / Button                                       | Next and previous controls                   |
| Navigation / VerticalMenu                    | Content / Heading                                      | Group headings                               |
| Overlays / AlertDialog                       | Actions / buttonRecipe                                 | Trigger styling                              |

InputGroup supplies button defaults through a context; it does not import or render Button itself. Its CSS entry accounts for composed action styling without treating all Actions as a dependency. A recipe dependency is also a styling dependency even when the corresponding component is not imported.

## Audit and distribution boundaries

Button group options derive from the recipe and native button attributes; Sidebar options live in `sidebar.types.ts`. These support contracts avoid type-only back references to their components.

Stories, `stories/` helpers, foundation previews, and `compositions/pages/` are catalog consumers. Their broad imports and page-level combinations do not authorize those dependencies in reusable library components. They must not become dependencies of public implementations.

`foundations/styles.css` compiles the full [source stylesheet graph](pkgs/ui/styles/README.md). Component entries declare CSS/recipe dependencies, and area aggregators compose them. A shared normalizer deduplicates internal imports before Tailwind; JavaScript imports do not select CSS.

Main and [area exports](pkgs/ui/getting-started/package-entries.md) aggregate the same implementations, with internal module boundaries and shared chunks per export condition. The [consumer bundle report](pkgs/ui/getting-started/bundle-sizes.md) records measured dependency elimination and shared Button bindings. The [Tailwind integration](pkgs/ui/getting-started/tailwind.md) adds area selections and an optional shared-token preset. See the [package guide](pkgs/ui/README.md#known-limitations) for distribution limitations.
