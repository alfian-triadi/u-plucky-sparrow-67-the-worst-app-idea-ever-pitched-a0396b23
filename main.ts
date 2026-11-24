import { writeFileSync, mkdirSync } from "node:fs";

const line =
  "ChairCheck is an AI app that tells you whether the chair you're sitting on is really a chair, with 97% accuracy, a $4.99 monthly subscription, and a global leaderboard for the world's most confident sitters.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
