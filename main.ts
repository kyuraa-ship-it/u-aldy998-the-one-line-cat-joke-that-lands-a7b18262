import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "My cat keeps bringing me dead mice — apparently my hunting skills were flagged in her performance review.";

// Gate assert: 1–200 chars, non-whitespace, single line (RULES.txt).
if (ENTRY.length < 1 || ENTRY.length > 200) {
  throw new Error(`gate: entry is ${ENTRY.length} chars, must be 1–200`);
}
if (!ENTRY.trim()) throw new Error("gate: entry is only whitespace");
if (ENTRY.includes("\n")) throw new Error("gate: entry must be a single line");

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`wrote ${ENTRY.length} chars to /output/entry.txt`);
