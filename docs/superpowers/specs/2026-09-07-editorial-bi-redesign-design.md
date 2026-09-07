# Editorial BI — visual redesign

Date: 2026-09-07
Status: awaiting review
Direction: A (Instrument / Editorial BI), chosen 2026-09-07

## The problem this solves

The site is not short of motion. It already has an elastic canvas grid,
scroll-linked drift, staggered reveals, a count-up ribbon, and a keyboard-
accessible lightbox. What holds it back is identity.

`#0B0F17` with a cyan-to-emerald gradient is the single most repeated palette
in AI and data-science student portfolios. The craft is real but invisible,
because the surface reads as a template. The fix is not more effects — it is a
visual system nobody else is using.

## The constraint that governs every decision

A recruiter opens this on a phone and gives it about twenty seconds. Any
change that costs LCP, or degrades below 400px, is a net loss no matter how
good it looks on a 27-inch monitor. Current baseline to hold or beat:

- First Load JS: 151 kB
- Hero LCP element: today a 206 kB dashboard JPEG

## The core idea

**The page is ink and paper. Colour appears only where data is.**

Every surface, rule, and label is a warm achromatic neutral. The only
saturated colour anywhere on the page lives inside a chart or a metric. This
does three things at once:

1. It is immediately not the cyan-glow template.
2. It makes the dashboards — the actual work — the loudest thing on screen.
3. It avoids a real collision: the Power BI report uses blue/amber/red
   semantically (on-time / delayed / cancelled). A branded amber or blue
   chrome would fight the charts it frames.

## Design system

### Colour

Achromatic warm neutrals for all chrome:

| Token | Value | Use |
|---|---|---|
| `--ground` | `#0C0B09` | page background |
| `--surface` | `#141210` | raised panel |
| `--surface-2` | `#1C1917` | inset / code |
| `--text` | `#F5F1EA` | primary text |
| `--text-muted` | `#A19A8E` | secondary text |
| `--rule` | `rgba(245,241,234,0.10)` | hairlines |

Data colours are declared separately and used *only* inside charts and
metric values, following the report's own semantic convention. Before any
chart is written, load the `dataviz` skill and take the categorical and
sequential ramps from there rather than inventing them here.

### Type

| Role | Face | Notes |
|---|---|---|
| Display | Instrument Serif | high contrast, editorial; only for section-opening lines |
| Body | Inter | already loaded, unchanged |
| Data / labels | JetBrains Mono | already loaded; add `font-variant-numeric: tabular-nums` |

Tabular numerals matter more than they sound: every count-up currently
reflows its own width as digits change.

### Layout

Move from uniform bento cards to an editorial grid: a wide argument column
with a narrow metadata rail. Replace most card borders with hairline rules —
a report has rules, not boxes. Section numbers become large ghosted numerals
in the margin rather than small mono labels.

## The hero

Replace the static dashboard screenshot as the LCP element.

The centrepiece becomes a chart drawn from the real dataset in
`Eyad-Ahmed-Kamal/UK-Train-Rides-Analysis` (`UK Train Rides new.csv`,
31,653 rows), aggregated at build time into a small JSON constant. No
runtime fetch, no chart library — inline SVG.

The chart is rides by departure hour, because the data tells a genuine story
with no help:

```
06:00 → 3,112 rides      18:00 → 3,113 rides
10:00 →   525 rides      19:00 →   438 rides
```

A clean bimodal commuter profile with sharp troughs between. The headline
writes itself: UK rail demand is two journeys a day.

Every figure the site publishes was verified against the raw CSV during this
review and all of them are exact:

| Published | Computed |
|---|---|
| 31,653 transactions | 31,653 |
| £741.9K revenue | £741,921.00 |
| 86.8% on time | 86.82% |
| 5.9% cancelled | 5.94% |
| £23.4 average fare | £23.44 |

This is the whole argument for the redesign: a data portfolio should be built
out of its own data. The dashboard screenshots move down into the case study
where they belong.

### Why this is also faster

LCP becomes text plus an inline SVG instead of a 206 kB JPEG.

## Motion principles

Motion reveals data; it does not decorate.

- The chart draws on once, on first view.
- Metric values count up, with tabular numerals so nothing reflows.
- Rules extend from the margin as sections enter.
- Nothing animates that would delay first paint.
- Every one of the above is skipped under `prefers-reduced-motion`.

`ElasticGrid` becomes desktop-only, gated on `(pointer: fine)`. It builds a
node lattice and paints per frame on phones that have no hover to justify it.

## Component changes

| File | Change |
|---|---|
| `app/globals.css` | replace the palette variables with the tokens above |
| `tailwind.config.ts` | new colour and font scales |
| `app/layout.tsx` | add Instrument Serif |
| `lib/railData.ts` | new — build-time aggregates from the CSV |
| `components/DepartureProfile.tsx` | new — inline-SVG hero chart |
| `components/Hero.tsx` | display type, new chart, screenshot removed |
| `components/HeroShowcase.tsx` | folded into the case study |
| `components/KpiRibbon.tsx` | tabular numerals, hairline rules |
| `components/CaseStudies.tsx` | editorial grid, rules instead of card borders |
| `components/CompetitiveSection.tsx` | rebalance the column left single-card by the empty-card fix |
| `components/SkillsSection.tsx` | editorial timeline |
| `components/ContactSection.tsx` | restyle to the new system |
| `components/ElasticGrid.tsx` | gate on `(pointer: fine)` |
| `app/page.tsx` | ambient glows replaced; the current ones are pinned to hardcoded pixel offsets that will land in meaningless places once section heights change |

## Not doing

- No chart library. One inline SVG does not justify 40 kB.
- No runtime data fetching. Aggregates are computed once, at build.
- No horizontal-scroll gallery. It hijacks the scrollbar on phones.
- No light/dark toggle. One committed look, done well.
- No new copy claims. Every number stays the verified one.

## Verification

1. `tsc --noEmit`, `next lint`, `next build` clean.
2. First Load JS at or below 151 kB.
3. Rendering checked at 375, 768, and 1440 px.
4. Reduced-motion path checked by emulation.
5. Chart figures re-derived from the CSV and matched against the report.
