import { writeFileSync, mkdirSync } from "node:fs";

// The Worst App Idea Ever Pitched — one-line entry (207 chars).
// ChairCheck: an AI that verifies whether the chair you sit on is
// really a chair. Final sentence kept byte-identical on purpose.
const line =
  "ChairCheck is an AI app that tells you whether the chair you're sitting on is really a chair, with 97% accuracy, a $4.99 monthly subscription, and a global leaderboard for the world's most confident sitters.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
