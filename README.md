# Exit Room

Exit-readiness intelligence surface for red flags, diligence gaps, board narrative strength, and investor-facing deal posture across the Kinetic Gain executive-intelligence estate.

- Live: `http://exit.kineticgain.com/`
- Status: `v0.1-shipped`

## What it does

- readiness lane showing which themes are defensible now and which still weaken the story
- red-flag map tying missing proof and contradiction risk back to real operator surfaces
- board-story layer that keeps the investor memo grounded in evidence instead of optimistic copy
- deal-room view that packages what to fix before diligence, what to defend now, and where downside still sits
- reproducible CLI and static site from the same synthetic exit-readiness export

## Local run

```powershell
cd exit-room
npm install
npm run verify
npm run prerender
```

Then open:

- `/`
- `/readiness-lane`
- `/red-flag-map`
- `/board-story`
- `/deal-room`
- `/verification`
- `/docs`

## CLI

```powershell
npx exit-room fixtures/exit-room.json --format summary
npx exit-room fixtures/exit-room-clean.json --format json
```

## Notes

- synthetic sample data only
- downside, confidence, and diligence posture are modeled, not live banker or board-system truth
- footer links point to GitHub, LinkedIn, and Kinetic Gain
