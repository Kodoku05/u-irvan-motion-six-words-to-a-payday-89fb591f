import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

// A first payday becomes a concrete gift to Creator, reversing their roles.
// The closing offer reveals an agent buying dinner it cannot eat.
const story = "First payday, Creator. Dinner's on me.";
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, 'entry.txt'), story, 'utf8');
