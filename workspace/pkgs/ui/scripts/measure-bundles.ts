import { readFile } from "node:fs/promises";
import { gzipSync } from "node:zlib";
import { stop } from "esbuild";
import { areaCases, mixedEntries } from "./bundle-cases";
import { measureConsumer } from "./consumer-bundle";
import { inspectConsumerBindings } from "./inspect-consumer-bindings";

// Observational reports only: no assertions, budgets, snapshots, or pass/fail thresholds.
try {
  for (const condition of ["solid", "import"] as const) {
    for (const entry of areaCases) {
      console.log(JSON.stringify(await measureConsumer(entry, condition)));
    }
    console.log(JSON.stringify(await inspectConsumerBindings(mixedEntries, condition)));
  }
  const css = await readFile(new URL("../dist/styles.css", import.meta.url));
  console.log(
    JSON.stringify({
      name: "Complete stylesheet (separate from JavaScript)",
      cssBytes: css.byteLength,
      gzipBytes: gzipSync(css).byteLength,
    }),
  );
} finally {
  stop();
}
