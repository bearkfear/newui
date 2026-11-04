import { stop } from "esbuild";
import { chartCases } from "./bundle-cases";
import { measureConsumer } from "./consumer-bundle";

try {
  for (const entry of chartCases) {
    const result = await measureConsumer(entry, "import");
    console.log(
      JSON.stringify({
        name: result.name,
        javascriptBytes: result.javascriptBytes,
        gzipBytes: result.gzipBytes,
        unovisBytesInOutput: result.dependencyBytesInOutput.unovis,
      }),
    );
  }
} finally {
  stop();
}
