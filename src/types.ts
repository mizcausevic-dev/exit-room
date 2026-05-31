export type ExitRoomSector =
  | "AI_PLATFORM"
  | "CLOUD_IDENTITY"
  | "FINTECH"
  | "BIOTECH_DIAGNOSTICS"
  | "NONPROFIT_FOUNDATION"
  | "PROPTECH"
  | "ROBOTICS"
  | "EXECUTIVE_INTELLIGENCE";

export type EvidenceState = "CURRENT" | "STALE" | "MISSING";
export type PriorityBand = "MUST_FIX" | "SHORE_UP" | "DEFEND";

export interface ExitRoomItem {
  id: string;
  theme: string;
  sector: ExitRoomSector;
  executiveBuyer: string;
  diligenceArea: string;
  priorityBand: PriorityBand;
  readinessScore: number;
  downsideRiskUsd: number;
  investorConfidenceScore: number;
  evidenceState: EvidenceState;
  redFlagSummary: string;
  boardStory: string;
  nextMove: string;
  companyTags: string[];
  relatedSurfaces: string[];
}

export interface ExitRoomExport {
  generatedAt: string;
  items: ExitRoomItem[];
}

export type FindingCode =
  | "missing-evidence"
  | "high-downside"
  | "investor-fragility"
  | "board-defensible"
  | "narrative-gap";

export interface Finding {
  code: FindingCode;
  severity: "high" | "medium" | "low" | "info";
  message: string;
  sector: ExitRoomSector;
  theme: string;
}

export interface ExitRoomReport {
  generatedAt: string;
  items: number;
  averageReadiness: number;
  averageInvestorConfidence: number;
  boardDefensibleItems: number;
  missingEvidenceItems: number;
  downsideRiskUsd: number;
  findingsList: Finding[];
  ok: boolean;
}
