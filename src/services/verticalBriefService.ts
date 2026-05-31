import { analyze } from "../analyze.js";
import { sampleExitRoom } from "../data/sampleVerticalBrief.js";

const report = analyze(sampleExitRoom, { now: "2026-05-31T19:35:00Z" });

export function summary() {
  const highFindings = report.findingsList.filter((item) => item.severity === "high").length;
  return {
    items: report.items,
    averageReadiness: report.averageReadiness,
    averageInvestorConfidence: report.averageInvestorConfidence,
    boardDefensibleItems: report.boardDefensibleItems,
    missingEvidenceItems: report.missingEvidenceItems,
    downsideRiskUsd: report.downsideRiskUsd,
    highFindings,
    recommendation:
      "Defend AI governance, platform margin, FinTech, and the executive-intelligence meta story now; shore up biotech and nonprofit; keep PropTech and robotics out of the lead board narrative until proof refreshes."
  };
}

export function readinessLane() {
  return sampleExitRoom.map((item) => ({
    theme: item.theme,
    executiveBuyer: item.executiveBuyer,
    diligenceArea: item.diligenceArea,
    priorityBand: item.priorityBand,
    readinessScore: item.readinessScore,
    redFlagSummary: item.redFlagSummary,
    nextMove: item.nextMove
  }));
}

export function redFlagMap() {
  return sampleExitRoom.map((item) => ({
    theme: item.theme,
    evidenceState: item.evidenceState,
    investorConfidenceScore: item.investorConfidenceScore,
    downsideRiskUsd: item.downsideRiskUsd,
    companyTags: item.companyTags,
    relatedSurfaces: item.relatedSurfaces
  }));
}

export function boardStory() {
  return sampleExitRoom.map((item) => ({
    theme: item.theme,
    executiveBuyer: item.executiveBuyer,
    boardStory: item.boardStory,
    readinessScore: item.readinessScore,
    investorConfidenceScore: item.investorConfidenceScore
  }));
}

export function dealRoom() {
  return sampleExitRoom.map((item) => ({
    theme: item.theme,
    priorityBand: item.priorityBand,
    downsideRiskUsd: item.downsideRiskUsd,
    nextMove: item.nextMove
  }));
}

export function riskMap() {
  const order = { high: 0, medium: 1, low: 2, info: 3 } as const;
  return report.findingsList.sort((a, b) => order[a.severity] - order[b.severity] || a.code.localeCompare(b.code));
}

export function verification() {
  return [
    "Synthetic exit-readiness data only - no live banker materials, CRM exports, or board packets are included.",
    "Readiness, downside, and investor-confidence values are modeled from the sample review set in this repo.",
    "This surface is read-only and designed to show how Kinetic Gain can package board and diligence posture.",
    "Company tags and related surfaces are synthetic decision aids rather than audited diligence records.",
    "Every route and packet is reproducible from the included sample export."
  ];
}

export function payload() {
  return {
    generatedAt: report.generatedAt,
    summary: summary(),
    readinessLane: readinessLane(),
    redFlagMap: redFlagMap(),
    boardStory: boardStory(),
    dealRoom: dealRoom(),
    riskMap: riskMap(),
    verification: verification(),
    sample: sampleExitRoom
  };
}
