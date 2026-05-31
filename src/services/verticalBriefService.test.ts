import { describe, expect, it } from "vitest";
import { boardStory, dealRoom, payload, readinessLane, redFlagMap, riskMap, summary, verification } from "./verticalBriefService.js";

describe("exit room service", () => {
  it("returns an executive summary", () => {
    expect(summary().items).toBeGreaterThan(0);
  });

  it("returns the readiness lane", () => {
    expect(readinessLane()[0]?.theme).toBeTruthy();
  });

  it("returns the red-flag map", () => {
    expect(redFlagMap()[0]?.downsideRiskUsd).toBeGreaterThan(0);
  });

  it("returns board-story entries", () => {
    expect(boardStory()[0]?.boardStory).toBeTruthy();
  });

  it("returns deal-room entries", () => {
    expect(dealRoom()[0]?.downsideRiskUsd).toBeGreaterThan(0);
  });

  it("returns the risk map", () => {
    expect(riskMap().length).toBeGreaterThan(0);
  });

  it("returns verification notes", () => {
    expect(verification().length).toBeGreaterThan(0);
    expect(payload().verification.length).toBeGreaterThan(0);
  });
});
