import { execFileSync } from "node:child_process";
import { mkdir } from "node:fs/promises";
import { fileURLToPath } from "node:url";

const workspace = fileURLToPath(new URL("../../", import.meta.url));
const output = `${workspace}artifacts/newui-preview.tgz`;
await mkdir(`${workspace}artifacts`, { recursive: true });

const packing = Bun.spawn(
  [Bun.which("bun") ?? "bun", "pm", "pack", "--filename", output, "--ignore-scripts", "--quiet"],
  { cwd: `${workspace}pkgs/ui`, stdout: "inherit", stderr: "inherit" },
);
if ((await packing.exited) !== 0) throw new Error("Library packaging failed.");

const entries = new Set(execFileSync("tar", ["-tzf", output], { encoding: "utf8" }).split("\n"));
const manifest: { exports: Record<string, unknown> } = JSON.parse(
  execFileSync("tar", ["-xOf", output, "package/package.json"], { encoding: "utf8" }),
);
const targets = Object.values(manifest.exports).flatMap(exportTargets);
if (targets.length === 0) throw new Error("The package has no public export targets.");
for (const target of targets) {
  if (!entries.has(`package/${target.slice(2)}`)) {
    throw new Error(`Missing packed export: ${target}`);
  }
}
console.log(`Verified ${targets.length} public export targets in ${output}.`);

function exportTargets(value: unknown): string[] {
  if (typeof value === "string") return [value];
  if (value && typeof value === "object") return Object.values(value).flatMap(exportTargets);
  return [];
}
