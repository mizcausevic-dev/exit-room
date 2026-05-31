import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import {
  renderBoardStory,
  renderDealRoom,
  renderDocs,
  renderOverview,
  renderReadinessLane,
  renderRedFlagMap,
  renderSample,
  renderVerification
} from "../src/services/render.js";
import { boardStory, dealRoom, payload, readinessLane, redFlagMap, riskMap, summary, verification } from "../src/services/verticalBriefService.js";

const outDir = path.resolve("site");

async function emit(filePath: string, contents: string) {
  const target = path.join(outDir, filePath);
  await mkdir(path.dirname(target), { recursive: true });
  await writeFile(target, contents, "utf8");
}

const files: Record<string, string> = {
  "index.html": renderOverview(),
  [path.join("readiness-lane", "index.html")]: renderReadinessLane(),
  [path.join("red-flag-map", "index.html")]: renderRedFlagMap(),
  [path.join("board-story", "index.html")]: renderBoardStory(),
  [path.join("deal-room", "index.html")]: renderDealRoom(),
  [path.join("verification", "index.html")]: renderVerification(),
  [path.join("docs", "index.html")]: renderDocs(),
  "robots.txt": "User-agent: *\nAllow: /\nSitemap: https://exit.kineticgain.com/sitemap.xml\n",
  "sitemap.xml":
    '<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"><url><loc>https://exit.kineticgain.com/</loc></url><url><loc>https://exit.kineticgain.com/readiness-lane/</loc></url><url><loc>https://exit.kineticgain.com/red-flag-map/</loc></url><url><loc>https://exit.kineticgain.com/board-story/</loc></url><url><loc>https://exit.kineticgain.com/deal-room/</loc></url><url><loc>https://exit.kineticgain.com/verification/</loc></url><url><loc>https://exit.kineticgain.com/docs/</loc></url></urlset>',
  [path.join("api", "dashboard-summary.json")]: JSON.stringify(summary(), null, 2),
  [path.join("api", "readiness-lane.json")]: JSON.stringify(readinessLane(), null, 2),
  [path.join("api", "red-flag-map.json")]: JSON.stringify(redFlagMap(), null, 2),
  [path.join("api", "board-story.json")]: JSON.stringify(boardStory(), null, 2),
  [path.join("api", "deal-room.json")]: JSON.stringify(dealRoom(), null, 2),
  [path.join("api", "risk-map.json")]: JSON.stringify(riskMap(), null, 2),
  [path.join("api", "verification.json")]: JSON.stringify(verification(), null, 2),
  [path.join("api", "sample.json")]: renderSample(),
  [path.join("api", "payload.json")]: JSON.stringify(payload(), null, 2)
};

for (const [filePath, contents] of Object.entries(files)) {
  await emit(filePath, contents);
}
