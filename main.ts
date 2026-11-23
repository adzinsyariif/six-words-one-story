// Six Words, One Story — make.fun entry.
// Writes the six-word story to /output/entry.txt, where the sealed
// scorer reads it. The story lives in STORY below; keep it exactly
// six words and under 60 characters.

import { mkdirSync, writeFileSync } from "node:fs";

const STORY = 'Dad\'s last voicemail: "Call me back."';

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", STORY, "utf8");

console.log(STORY);
