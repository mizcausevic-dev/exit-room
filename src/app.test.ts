import request from "supertest";
import { describe, expect, it } from "vitest";
import { createApp } from "./app.js";

describe("exit-room app", () => {
  it("serves the HTML routes", async () => {
    const htmlRoutes = ["/", "/readiness-lane", "/red-flag-map", "/board-story", "/deal-room", "/verification", "/docs"];

    for (const route of htmlRoutes) {
      const response = await request(createApp()).get(route);
      expect(response.status).toBe(200);
      expect(response.headers["content-type"]).toMatch(/html/);
    }
  });

  it("serves the JSON routes", async () => {
    const jsonRoutes = [
      "/api/dashboard/summary",
      "/api/readiness-lane",
      "/api/red-flag-map",
      "/api/board-story",
      "/api/deal-room",
      "/api/risk-map",
      "/api/verification",
      "/api/sample",
      "/api/payload"
    ];

    for (const route of jsonRoutes) {
      const response = await request(createApp()).get(route);
      expect(response.status).toBe(200);
    }
  });
});
