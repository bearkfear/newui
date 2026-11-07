# Consumer bundle measurements

[Package entries](package-entries.md)

## Reproduce

Run from `workspace/`:

```sh
bun run build
bun run --cwd pkgs/ui measure:bundles
```

The command bundles named exports from the built package with esbuild, including their required third-party code and Solid runtime. It uses browser resolution, the `module` optimization condition, and either the `solid` or `import` package entry. JSX is compiled with the Solid browser preset; output is minified ESM. Exporting each selected resource keeps it live without introducing an application or Storybook overhead.

Reports print raw JavaScript bytes, gzip bytes, emitted dependency bytes, and contributing library chunks. Dependency attribution is uncompressed metafile data, not an allocation of gzip size. The final observational report also inspects a non-minified bundle's Button aliases and context declarations. There are no assertions, snapshots, budgets, or pass/fail thresholds.

## Measured JavaScript

Values below are gzip bytes for this implementation and installed dependency versions. Re-run the command after changes; small differences can result from identifier assignment and compression. CSS is excluded.

| Consumer                                    | Solid condition | Import fallback |
| ------------------------------------------- | --------------: | --------------: |
| Button from main                            |           12913 |           12920 |
| Button from Actions                         |           12916 |           12916 |
| Input from main                             |           16603 |           16573 |
| Input from Forms                            |           16607 |           16608 |
| InputGroup from Forms                       |           19799 |           19837 |
| RichTextEditor from Forms                   |          150189 |          150155 |
| Rich text HTML helpers                      |          121235 |          121235 |
| Button + InputGroup from main               |           21222 |           21216 |
| Button + InputGroup from areas              |           21199 |           21249 |
| Mixed main/area Button aliases + InputGroup |           21224 |           21225 |
| Heading from Content                        |           11423 |           11419 |
| Table from Data                             |           11618 |           11618 |
| Loading from Feedback                       |           14237 |           14235 |
| Container from Layout                       |           10991 |           10976 |
| Breadcrumb from Navigation                  |           14130 |           14150 |
| Dialog from Overlays                        |           35542 |           35559 |
| Panel from Compositions                     |           12910 |           12911 |
| LineChart                                   |          100198 |          100291 |
| All three chart types                       |          107230 |          107319 |
| Button + all three chart types              |          106950 |          107015 |

## Findings and limits

Main and area imports produce comparable bundles for the same resources; separate entries do not inherently guarantee smaller output. All measured non-chart consumers emit zero Unovis bytes. Button, Heading, Table, Loading, Container, Breadcrumb, and Panel also emit zero Ark/Zag bytes.

The initial area-chunk build retained unrelated Navigation initialization when selecting native Breadcrumb, producing roughly 65.6 KB gzip. The build now gives reachable implementation modules internal entry boundaries in both output conditions, allowing unused sibling modules to be discarded. Breadcrumb now emits zero Ark/Zag bytes. These internal files are build artifacts, not additional public package exports.

In both conditions, mixed `RootButton` and `AreaButton` exports resolve to the same `Button` binding, with one Button function and one ButtonGroupContext declaration. InputGroup uses that shared context. Charts already use Button, so exporting Button beside Charts adds an export rather than another implementation; gzip totals can decrease slightly through compression changes.

RichTextEditor is intentionally an opt-in, engine-backed control and is substantially larger than native form controls. Importing other Forms exports does not retain it. The server-compatible HTML helper entry also includes schema and virtual-DOM conversion code; text extraction and validation share that isolated boundary.

After source CSS modularization, the complete stylesheet is 129115 raw bytes / 21641 gzip bytes, independent of JavaScript area selection; catalog-only utilities are excluded. See the [source stylesheet graph](../styles/README.md) for CSS measurements. These are standalone consumer totals, not incremental application costs. They do not measure rendering, interaction behavior, SSR, hydration, route-level loading, other bundlers, or a packed installation without workspace patches.
