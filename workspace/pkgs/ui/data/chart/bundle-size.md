# Chart bundle measurements

These measurements bundle browser consumers of the built library with esbuild, minification, and Solid compilation for upstream JSX dependencies. Each consumer exports the named components so the bundler retains them. Shared Solid/Ark and formatting code is included; Storybook and the shared CSS file are excluded. This measures JavaScript output size, not rendering speed or installed dependency size.

Run from `workspace/`:

```sh
bun run build
bun run --cwd pkgs/ui measure:charts
```

The script writes no generated files or test assertions. It reports raw JavaScript size, gzip bytes, and the metafile's emitted Unovis module bytes. The latter count is uncompressed, not a gzip attribution. Values depend on dependency versions and build tooling; use the script to reproduce current numbers.

Current browser fallback consumers with Unovis 1.7.1 and internal implementation module boundaries:

| Consumer                         | JavaScript gzip bytes |
| -------------------------------- | --------------------: |
| Button from the main entry       |                 12938 |
| LineChart from the chart entry   |                100317 |
| All three chart types            |                107343 |
| Button and all three chart types |                107038 |

The main-entry Button consumer emits zero Unovis module bytes. Charts already use Button for their data disclosure, so exporting Button beside them shares the existing implementation. Small gzip differences do not imply that adding an export removes code. These are complete entry bundles, not incremental costs in an application that already shares some dependencies.

The [consumer bundle report](../../getting-started/bundle-sizes.md) compares both export conditions and all public areas. These reports are not a benchmark suite or browser-performance results. The chart entry keeps Unovis opt-in at the JavaScript import boundary; the current package still distributes one shared stylesheet and installs its declared dependencies.
