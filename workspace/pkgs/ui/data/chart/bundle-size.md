# Chart bundle measurements

These measurements bundle browser consumers of the built library with esbuild, minification, and Solid compilation for upstream JSX dependencies. Each consumer exports the named components so the bundler retains them. Shared Solid/Ark and formatting code is included; Storybook and the shared CSS file are excluded. This measures JavaScript output size, not rendering speed or installed dependency size.

Run from `workspace/`:

```sh
bun run build
bun run --cwd pkgs/ui measure:charts
```

The script writes no generated files or test assertions. It reports raw JavaScript size, gzip bytes, and the metafile's emitted Unovis module bytes. The latter count is uncompressed, not a gzip attribution. Values depend on dependency versions and build tooling; use the script to reproduce current numbers.

Initial integration with Unovis 1.7.1:

| Consumer                         | JavaScript gzip bytes |
| -------------------------------- | --------------------: |
| Button from the main entry       |                102705 |
| LineChart from the chart entry   |                 99770 |
| All three chart types            |                107031 |
| Button and all three chart types |                187418 |

The combined case adds approximately 83 KiB gzip over the Button consumer. The main-entry Button consumer emits zero Unovis module bytes. These are complete entry bundles; they do not imply that a line chart adds 99,770 bytes to an application that already shares some of its dependencies.

This first measurement is not a benchmark suite or a browser-performance result. Existing main-entry overhead is included in the baseline. The chart entry keeps Unovis opt-in at the JavaScript import boundary; the current package still distributes one shared stylesheet and installs its declared dependencies.
