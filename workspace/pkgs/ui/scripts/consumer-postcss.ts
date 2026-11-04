import { resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { createConsumerStyles } from "./tailwind/consumer-styles";

export default function newui() {
  const publicRoot = fileURLToPath(new URL("./tailwind/", import.meta.url));
  return createConsumerStyles({
    publicRoot,
    sourceRoot: resolve(publicRoot, "source"),
  });
}
