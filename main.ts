// The Robot Vacuum's Best Excuse — entrypoint.
// Reads the committed one-line excuse from entry.txt (next to this file)
// and copies it to $MAKEFUN_OUTPUT_DIR/entry.txt, byte for byte.
// The script resolves entry.txt relative to its own location, never the
// current working directory, so it behaves the same from any CWD.
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const text = readFileSync(join(here, "entry.txt"), "utf8");
const outDir = process.env.MAKEFUN_OUTPUT_DIR;
if (!outDir) {
  console.error("MAKEFUN_OUTPUT_DIR is not set");
  process.exit(1);
}
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), text, "utf8");
