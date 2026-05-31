import type { ExitRoomReport } from "./types.js";

export function formatSummary(report: ExitRoomReport) {
  return [
    `generatedAt: ${report.generatedAt}`,
    `items: ${report.items}`,
    `averageReadiness: ${report.averageReadiness}`,
    `averageInvestorConfidence: ${report.averageInvestorConfidence}`,
    `boardDefensibleItems: ${report.boardDefensibleItems}`,
    `missingEvidenceItems: ${report.missingEvidenceItems}`,
    `downsideRiskUsd: ${report.downsideRiskUsd}`,
    `findings: ${report.findingsList.length}`,
    `ok: ${report.ok}`
  ].join("\n");
}

export function formatJson(report: ExitRoomReport) {
  return JSON.stringify(report, null, 2);
}
