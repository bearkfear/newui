import { appendFile } from "node:fs/promises";

const manifest: { name: string; version: string } = await Bun.file(
  new URL("../../pkgs/ui/package.json", import.meta.url),
).json();
const response = await fetch(`https://registry.npmjs.org/${encodeURIComponent(manifest.name)}`, {
  headers: { accept: "application/vnd.npm.install-v1+json" },
  signal: AbortSignal.timeout(30_000),
});

let publish = false;
if (response.status === 404) {
  console.log("Initial package bootstrap required; follow workspace/publishing.md.");
} else {
  if (!response.ok) throw new Error(`npm registry lookup failed: HTTP ${response.status}`);
  const metadata = await response.json();
  if (
    !metadata ||
    typeof metadata !== "object" ||
    !("versions" in metadata) ||
    !metadata.versions ||
    typeof metadata.versions !== "object"
  ) {
    throw new Error("npm registry returned invalid package metadata.");
  }
  publish = !Object.hasOwn(metadata.versions, manifest.version);
  console.log(
    `${manifest.name}@${manifest.version}: ${publish ? "ready to publish" : "already published"}.`,
  );
}

const output = process.env["GITHUB_OUTPUT"];
if (output) await appendFile(output, `publish=${publish}\n`);
