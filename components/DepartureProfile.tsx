"use client";

import { useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import {
  formatHour,
  maxRides,
  peakAm,
  peakPm,
  railFacts,
  ridesByHour,
  trough,
} from "@/lib/railData";
import { motionTokens } from "@/lib/motion";

/**
 * Rides by hour of departure, drawn from the project's own 31,653 rows.
 *
 * Inline SVG rather than a chart library: twenty-four rectangles do not
 * justify shipping a plotting runtime, and the figure is fixed at build time.
 *
 * Colour encodes emphasis only — one hue, two steps — and the two peak hours
 * also carry direct labels, so the emphasis is never colour alone. The ramp
 * was validated against this page's ground before use.
 */

// A 24-hour plot in a fixed coordinate space; CSS scales it to any width.
const VB_W = 720;
const VB_H = 240;
const PAD_TOP = 28;
const PAD_BOTTOM = 26;
const PLOT_H = VB_H - PAD_TOP - PAD_BOTTOM;
const BASELINE = PAD_TOP + PLOT_H;
const SLOT = VB_W / 24;
const BAR_W = SLOT - 6; // the 6px gutter is the surface gap between bars

const AXIS_TICKS = [0, 6, 12, 18];

export default function DepartureProfile() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const reduce = useReducedMotion();
  const [hovered, setHovered] = useState<number | null>(null);

  const active = hovered === null ? null : ridesByHour[hovered];

  return (
    <figure ref={ref} className="relative mt-12 md:mt-16">
      <figcaption className="mb-5 flex flex-wrap items-baseline gap-x-3 gap-y-1">
        <h2 className="font-display text-2xl sm:text-3xl leading-tight text-ink">
          UK rail demand is two journeys a day.
        </h2>
        <p className="font-mono text-[11px] text-ink-muted">
          rides by hour of departure
        </p>
      </figcaption>

      <div className="rounded-lg border border-rule bg-surface/60 px-4 pt-4 pb-3 sm:px-6 sm:pt-6">
        {/* Read-out: hovering a bar swaps the summary for that hour. */}
        <div className="mb-3 flex items-baseline gap-2 font-mono text-xs min-h-[1.25rem]">
          {active ? (
            <>
              <span className="tnum text-data-strong">
                {formatHour(active.hour)}
              </span>
              <span className="tnum text-ink">
                {active.rides.toLocaleString("en-US")}
              </span>
              <span className="text-ink-muted">rides</span>
            </>
          ) : (
            <span className="text-ink-muted">
              Peaks at {formatHour(peakAm.hour)} and {formatHour(peakPm.hour)}
              <span className="mx-2 opacity-40">·</span>
              <span className="tnum">{trough.rides.toLocaleString("en-US")}</span>{" "}
              at {formatHour(trough.hour)}
            </span>
          )}
        </div>

        <svg
          viewBox={`0 0 ${VB_W} ${VB_H}`}
          className="w-full h-auto overflow-visible"
          role="img"
          aria-label={`Column chart of ${railFacts.transactions.toLocaleString(
            "en-US"
          )} UK rail journeys by hour of departure. Demand is bimodal, peaking at ${formatHour(
            peakAm.hour
          )} with ${peakAm.rides.toLocaleString(
            "en-US"
          )} rides and again at ${formatHour(
            peakPm.hour
          )} with ${peakPm.rides.toLocaleString("en-US")} rides.`}
        >
          {/* Baseline — the only rule in the plot; gridlines would be noise. */}
          <line
            x1={0}
            y1={BASELINE}
            x2={VB_W}
            y2={BASELINE}
            stroke="var(--rule-strong)"
            strokeWidth={1}
          />

          {ridesByHour.map((bucket, i) => {
            const h = (bucket.rides / maxRides) * PLOT_H;
            const isPeak =
              bucket.hour === peakAm.hour || bucket.hour === peakPm.hour;
            const isDim = hovered !== null && hovered !== i;

            return (
              <g
                key={bucket.hour}
                onPointerEnter={() => setHovered(i)}
                onPointerLeave={() => setHovered(null)}
              >
                {/* Hit target spans the whole slot, not just the bar. */}
                <rect
                  x={i * SLOT}
                  y={PAD_TOP}
                  width={SLOT}
                  height={PLOT_H}
                  fill="transparent"
                />
                <motion.rect
                  x={i * SLOT + 3}
                  width={BAR_W}
                  rx={2}
                  fill={isPeak ? "var(--data-strong)" : "var(--data)"}
                  opacity={isDim ? 0.45 : 1}
                  initial={reduce ? { y: BASELINE - h, height: h } : { y: BASELINE, height: 0 }}
                  animate={
                    reduce || inView ? { y: BASELINE - h, height: h } : undefined
                  }
                  transition={{
                    duration: reduce ? 0 : 0.55,
                    ease: motionTokens.easing.smooth,
                    delay: reduce ? 0 : i * 0.018,
                  }}
                />
              </g>
            );
          })}

          {/* Direct labels — the two peaks only, never a number on every bar. */}
          {[peakAm, peakPm].map((peak) => {
            const h = (peak.rides / maxRides) * PLOT_H;
            return (
              <text
                key={peak.hour}
                x={peak.hour * SLOT + SLOT / 2}
                y={BASELINE - h - 9}
                textAnchor="middle"
                className="fill-ink font-mono"
                style={{ fontSize: 13, fontVariantNumeric: "tabular-nums" }}
              >
                {peak.rides.toLocaleString("en-US")}
              </text>
            );
          })}

          {AXIS_TICKS.map((hour) => (
            <text
              key={hour}
              x={hour * SLOT + SLOT / 2}
              y={VB_H - 8}
              textAnchor="middle"
              className="fill-ink-muted font-mono"
              style={{ fontSize: 12, fontVariantNumeric: "tabular-nums" }}
            >
              {formatHour(hour)}
            </text>
          ))}
        </svg>
      </div>

      <p className="mt-3 font-mono text-[11px] leading-relaxed text-ink-muted">
        <span className="text-ink">UK Train Rides Analysis</span>
        <span className="mx-2 opacity-40">·</span>
        <span className="tnum">
          {railFacts.transactions.toLocaleString("en-US")}
        </span>{" "}
        transactions
        <span className="mx-2 opacity-40">·</span>
        Jan–Apr 2024
        <span className="mx-2 opacity-40">·</span>
        aggregated from the source CSV, not the report
      </p>
    </figure>
  );
}
