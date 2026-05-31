import { rm, writeFile } from "node:fs/promises";
import { sampleExitRoom } from "../src/data/sampleVerticalBrief.js";

async function main() {
  const clean = sampleExitRoom.map((item) => ({
    ...item,
    evidenceState: "CURRENT" as const,
    readinessScore: Math.max(item.readinessScore, 74),
    investorConfidenceScore: Math.max(item.investorConfidenceScore, 72),
    priorityBand: item.priorityBand === "MUST_FIX" ? "SHORE_UP" as const : item.priorityBand,
    redFlagSummary:
      item.evidenceState === "CURRENT"
        ? item.redFlagSummary
        : `${item.redFlagSummary} Evidence has been refreshed for the clean packet.`
  }));

  await writeFile("fixtures/exit-room.json", JSON.stringify(sampleExitRoom, null, 2) + "\n");
  await writeFile("fixtures/exit-room-clean.json", JSON.stringify(clean, null, 2) + "\n");

  for (const file of ["fixtures/partner-graph.json", "fixtures/partner-graph-clean.json"]) {
    try {
      await rm(file);
    } catch {
      // Ignore missing copied fixtures during scaffold cleanup.
    }
  }
}

await main();
