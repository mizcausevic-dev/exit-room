import express from "express";
import {
  renderBoardStory,
  renderDealRoom,
  renderDocs,
  renderOverview,
  renderReadinessLane,
  renderRedFlagMap,
  renderSample,
  renderVerification
} from "./services/render.js";
import {
  boardStory,
  dealRoom,
  payload,
  readinessLane,
  redFlagMap,
  riskMap,
  summary,
  verification
} from "./services/verticalBriefService.js";

export function createApp() {
  const app = express();

  app.get("/", (_req, res) => res.type("html").send(renderOverview()));
  app.get("/readiness-lane", (_req, res) => res.type("html").send(renderReadinessLane()));
  app.get("/red-flag-map", (_req, res) => res.type("html").send(renderRedFlagMap()));
  app.get("/board-story", (_req, res) => res.type("html").send(renderBoardStory()));
  app.get("/deal-room", (_req, res) => res.type("html").send(renderDealRoom()));
  app.get("/verification", (_req, res) => res.type("html").send(renderVerification()));
  app.get("/docs", (_req, res) => res.type("html").send(renderDocs()));

  app.get("/api/dashboard/summary", (_req, res) => res.json(summary()));
  app.get("/api/readiness-lane", (_req, res) => res.json(readinessLane()));
  app.get("/api/red-flag-map", (_req, res) => res.json(redFlagMap()));
  app.get("/api/board-story", (_req, res) => res.json(boardStory()));
  app.get("/api/deal-room", (_req, res) => res.json(dealRoom()));
  app.get("/api/risk-map", (_req, res) => res.json(riskMap()));
  app.get("/api/verification", (_req, res) => res.json(verification()));
  app.get("/api/sample", (_req, res) => res.type("application/json").send(renderSample()));
  app.get("/api/payload", (_req, res) => res.json(payload()));

  return app;
}

if (import.meta.url === `file://${process.argv[1]}`) {
  const port = Number(process.env.PORT ?? "3000");
  createApp().listen(port, () => {
    console.log(`exit-room listening on http://127.0.0.1:${port}`);
  });
}
