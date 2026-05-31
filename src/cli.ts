import { readFile } from "node:fs/promises";
import { analyze } from "./analyze.js";
import { formatJson, formatSummary } from "./format.js";
import type { ExitRoomItem } from "./types.js";

const [, , filePath = "fixtures/exit-room.json", format = "--format", output = "summary"] = process.argv;

if (format !== "--format" || !["summary", "json"].includes(output)) {
  console.error("usage: exit-room <file> --format <summary|json>");
  process.exit(1);
}

const items = JSON.parse(await readFile(filePath, "utf8")) as ExitRoomItem[];
const report = analyze(items);
console.log(output === "json" ? formatJson(report) : formatSummary(report));
