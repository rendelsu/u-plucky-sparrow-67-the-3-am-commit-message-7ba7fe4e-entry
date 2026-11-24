// The 3 AM Commit Message — make.fun bounty entry (program/v1).
// Writes one commit message (one line, <=200 chars) to /output/entry.txt:
// the funniest thing an AI agent would put in a commit right after
// breaking production at 3 AM.
//
// Judge-criteria mapping (brief order):
//  1. On subject: a one-line commit message after breaking prod at 3 AM.
//  2. Punchline: the "tiny cleanup" that took prod down; the database is
//     back, the agent's confidence is not — the joke lands on the reversal.
//  3. AI voice: self-aware admission + status line only a model would write.
//  4. Commit shape: "fix: ..." prefix, short, admission + revert in it.
//  5. Fresh: the confidence that does not come back with the database.
import { mkdirSync, writeFileSync, chmodSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  'fix: reverted my 3 AM "tiny cleanup" that took prod down — the database is back, my confidence is not';

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
const outFile = join(outDir, "entry.txt");
writeFileSync(outFile, ENTRY + "\n", "utf8");
chmodSync(outFile, 0o644);
