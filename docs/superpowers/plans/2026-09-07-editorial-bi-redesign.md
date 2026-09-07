# Editorial BI Redesign — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: use superpowers:executing-plans to
> work this plan task-by-task. Steps use checkbox (`- [ ]`) syntax.

**Goal:** Replace the generic dark/cyan surface with a warm achromatic editorial
system in which colour appears only inside data, and rebuild the hero around a
chart computed from the project's own 31,653-row dataset.

**Architecture:** Design tokens land first so every later task styles against
roles rather than hex. Data aggregation is a build-time constant with no runtime
fetch and no chart library; the chart is inline SVG. Components are then migrated
one at a time, each independently buildable.

**Tech Stack:** Next.js 14 (App Router), React 18, Tailwind 3, framer-motion 11,
inline SVG. No chart library is added.

**Spec:** `docs/superpowers/specs/2026-09-07-editorial-bi-redesign-design.md`

## Global Constraints

- First Load JS must stay at or below **151 kB** (measured baseline).
- No chart library, no runtime data fetching.
- Every motion path must have a `prefers-reduced-motion` branch.
- No new factual claims. Published figures stay the ones verified against the CSV.
- Chart marks use `#256abf` (bars) and `#3987e5` (peaks) on ground `#0C0B09` —
  validated as a single-hue ordinal ramp, all checks pass, light end 3.65:1.
- Peaks carry direct labels, so emphasis is never colour-alone.

## Testing note

This project has no test runner and no test files. The per-task gate is
therefore: `npx tsc --noEmit` clean, `npx next lint` clean, `npm run build`
succeeding, and — for visual tasks — a rendered check at 375 / 768 / 1440 px.
Adding a test framework is out of scope for a redesign and is not in the spec.

---

### Task 1: Design tokens

**Files:**
- Modify: `app/globals.css` (`:root` block)
- Modify: `tailwind.config.ts` (`theme.extend.colors`, `fontFamily`)
- Modify: `app/layout.tsx` (add Instrument Serif; body classes)

**Interfaces:**
- Produces: CSS custom properties `--ground`, `--surface`, `--surface-2`,
  `--text`, `--text-muted`, `--rule`, `--data`, `--data-strong`; Tailwind colour
  keys `ground`, `surface`, `surface-2`, `ink`, `ink-muted`, `rule`, `data`,
  `data-strong`; font variable `--font-display`.

- [ ] **Step 1:** Replace the `:root` variables in `globals.css` with the token set.
- [ ] **Step 2:** Add matching Tailwind colour keys and a `display` font family.
- [ ] **Step 3:** Load `Instrument_Serif` in `layout.tsx` and expose `--font-display`.
- [ ] **Step 4:** Swap the hardcoded `bg-[#0B0F17] text-[#E8EDF5]` on `body` for tokens.
- [ ] **Step 5:** `npx tsc --noEmit && npx next lint && npm run build`
- [ ] **Step 6:** Commit `style: warm achromatic token system`

### Task 2: Rail data aggregates

**Files:**
- Create: `lib/railData.ts`

**Interfaces:**
- Produces:
  `export type HourBucket = { hour: number; rides: number }`
  `export const ridesByHour: HourBucket[]` (24 entries, hour 0-23)
  `export const railFacts: { transactions: number; revenue: number; onTimePct: number; cancelledPct: number; avgFare: number; peakAm: HourBucket; peakPm: HourBucket }`

- [ ] **Step 1:** Write the module with the values already derived from the CSV:
  hours 00-23 = 853, 644, 942, 543, 1041, 725, 3112, 2795, 2179, 1230, 525,
  1143, 773, 1276, 855, 1220, 2301, 2888, 3113, 438, 1058, 570, 788, 641.
  Facts: 31653 transactions, 741921 revenue, 86.82 on-time, 5.94 cancelled,
  23.44 average fare.
- [ ] **Step 2:** Add a header comment naming the source file and how it was derived.
- [ ] **Step 3:** Note in a comment that the hour buckets sum to 31,653.
- [ ] **Step 4:** `npx tsc --noEmit`
- [ ] **Step 5:** Commit `feat: build-time aggregates from the rail dataset`

### Task 3: Departure profile chart

**Files:**
- Create: `components/DepartureProfile.tsx`

**Interfaces:**
- Consumes: `ridesByHour`, `railFacts` from `lib/railData.ts`
- Produces: default export `DepartureProfile`, no props

- [ ] **Step 1:** Render a 24-bar inline SVG column chart with a `viewBox`, no fixed width.
- [ ] **Step 2:** Bars use `var(--data)`; the two peak hours use `var(--data-strong)`.
- [ ] **Step 3:** Direct-label the two peaks only; axis labels at 00 / 06 / 12 / 18.
- [ ] **Step 4:** Bars grow from the baseline on first view; skipped under reduced motion.
- [ ] **Step 5:** Give the figure a `figcaption` naming source, period, and row count.
- [ ] **Step 6:** Add per-bar hover tooltips with hour and ride count.
- [ ] **Step 7:** `npx tsc --noEmit && npx next lint && npm run build`
- [ ] **Step 8:** Commit `feat: departure-hour chart drawn from the real dataset`

### Task 4: Hero

**Files:**
- Modify: `components/Hero.tsx`
- Delete: `components/HeroShowcase.tsx` (its lightbox entry moves to the case study)

- [ ] **Step 1:** Set the headline in the display face; keep the copy unchanged.
- [ ] **Step 2:** Replace `HeroShowcase` with `DepartureProfile`.
- [ ] **Step 3:** Restyle buttons and social row to the token system.
- [ ] **Step 4:** Confirm the LCP element is text, not an image.
- [ ] **Step 5:** `npm run build` and compare First Load JS against 151 kB.
- [ ] **Step 6:** Commit `feat: rebuild the hero around the departure-hour chart`

### Task 5: Metrics and case studies

**Files:**
- Modify: `components/KpiRibbon.tsx`, `components/CaseStudies.tsx`

- [ ] **Step 1:** Apply `tabular-nums` to every metric value.
- [ ] **Step 2:** Replace the ribbon's card chrome with hairline rules.
- [ ] **Step 3:** Move the Executive Summary page back into the case-study gallery,
  so all five report pages appear there now that the hero no longer shows one.
- [ ] **Step 4:** Replace card borders with rules; keep the schema/DAX tabs working.
- [ ] **Step 5:** `npx tsc --noEmit && npx next lint && npm run build`
- [ ] **Step 6:** Commit `style: editorial treatment for metrics and case studies`

### Task 6: Remaining sections

**Files:**
- Modify: `components/CompetitiveSection.tsx`, `components/SkillsSection.tsx`,
  `components/ContactSection.tsx`

- [ ] **Step 1:** Rebalance the Competitive right column, left single-card by the fix.
- [ ] **Step 2:** Restyle the experience timeline as an editorial rule-and-margin list.
- [ ] **Step 3:** Restyle the contact card and subfooter to the tokens.
- [ ] **Step 4:** Ghosted margin numerals replace the small mono section labels.
- [ ] **Step 5:** `npx tsc --noEmit && npx next lint && npm run build`
- [ ] **Step 6:** Commit `style: editorial treatment for the remaining sections`

### Task 7: Background and ambience

**Files:**
- Modify: `components/ElasticGrid.tsx`, `app/page.tsx`

- [ ] **Step 1:** Gate `ElasticGrid` on `matchMedia("(pointer: fine)")` — return before
  building the node lattice on touch devices, which have no hover to justify it.
- [ ] **Step 2:** Retune the grid stroke to the warm neutral rule colour.
- [ ] **Step 3:** Replace the three pixel-pinned glows with ambience anchored to
  sections, so it cannot drift when section heights change.
- [ ] **Step 4:** `npm run build`
- [ ] **Step 5:** Commit `perf: desktop-only elastic grid, section-anchored ambience`

### Task 8: Verification

- [ ] **Step 1:** `npx tsc --noEmit && npx next lint && npm run build`, all clean.
- [ ] **Step 2:** First Load JS at or below 151 kB — record the number.
- [ ] **Step 3:** Render at 375, 768, and 1440 px; check for overflow and collisions.
- [ ] **Step 4:** Emulate reduced motion; confirm no count-up, no bar growth, no drift.
- [ ] **Step 5:** Re-derive the chart figures from the CSV and match the rendered labels.
- [ ] **Step 6:** Report results, including anything that failed.
