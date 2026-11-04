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
| Button from main                            |           12929 |           12938 |
| Button from Actions                         |           12932 |           12932 |
| Input from main                             |           16476 |           16435 |
| Input from Forms                            |           16472 |           16475 |
| InputGroup from Forms                       |           19407 |           19443 |
| Button + InputGroup from main               |           20843 |           20844 |
| Button + InputGroup from areas              |           20829 |           20859 |
| Mixed main/area Button aliases + InputGroup |           20852 |           20854 |
| Heading from Content                        |           11423 |           11419 |
| Table from Data                             |           11664 |           11664 |
| Loading from Feedback                       |           14237 |           14235 |
| Container from Layout                       |           10991 |           10976 |
| Breadcrumb from Navigation                  |           14173 |           14198 |
| Dialog from Overlays                        |           35569 |           35601 |
| Panel from Compositions                     |           12916 |           12923 |
| LineChart                                   |          100229 |          100317 |
| All three chart types                       |          107262 |          107343 |
| Button + all three chart types              |          106979 |          107038 |

## Findings and limits

Main and area imports produce comparable bundles for the same resources; separate entries do not inherently guarantee smaller output. All measured non-chart consumers emit zero Unovis bytes. Button, Heading, Table, Loading, Container, Breadcrumb, and Panel also emit zero Ark/Zag bytes.

The initial area-chunk build retained unrelated Navigation initialization when selecting native Breadcrumb, producing roughly 65.6 KB gzip. The build now gives reachable implementation modules internal entry boundaries in both output conditions, allowing unused sibling modules to be discarded. Breadcrumb now emits zero Ark/Zag bytes. These internal files are build artifacts, not additional public package exports.

In both conditions, mixed `RootButton` and `AreaButton` exports resolve to the same `Button` binding, with one Button function and one ButtonGroupContext declaration. InputGroup uses that shared context. Charts already use Button, so exporting Button beside Charts adds an export rather than another implementation; gzip totals can decrease slightly through compression changes.

After source CSS modularization, the complete stylesheet is 120765 raw bytes / 20410 gzip bytes, independent of JavaScript area selection; catalog-only utilities are excluded. See the [source stylesheet graph](../styles/README.md) for CSS measurements. These are standalone consumer totals, not incremental application costs. They do not measure rendering, interaction behavior, SSR, hydration, route-level loading, other bundlers, or a packed installation without workspace patches. No automated tests were added.
