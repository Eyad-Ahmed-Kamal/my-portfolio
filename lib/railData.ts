/**
 * Aggregates from the project's own dataset.
 *
 * Source: Eyad-Ahmed-Kamal/UK-Train-Rides-Analysis — `UK Train Rides new.csv`,
 * 31,653 rows covering journeys from 2024-01-01 to 2024-04-30. Buckets were
 * derived by grouping the `Departure Time` column on its hour and counting
 * rows; the figures below were computed from the raw file, not read off a
 * dashboard screenshot.
 *
 * Held here as constants on purpose: the page needs twenty-four integers, and
 * shipping a 5.3 MB CSV or a chart library to deliver them would be absurd.
 * If the dataset is ever revised, recompute rather than edit by hand.
 */

export type HourBucket = { hour: number; rides: number };

/** Rides by hour of departure. Sums to 31,653 — the full transaction count. */
export const ridesByHour: HourBucket[] = [
  { hour: 0, rides: 853 },
  { hour: 1, rides: 644 },
  { hour: 2, rides: 942 },
  { hour: 3, rides: 543 },
  { hour: 4, rides: 1041 },
  { hour: 5, rides: 725 },
  { hour: 6, rides: 3112 },
  { hour: 7, rides: 2795 },
  { hour: 8, rides: 2179 },
  { hour: 9, rides: 1230 },
  { hour: 10, rides: 525 },
  { hour: 11, rides: 1143 },
  { hour: 12, rides: 773 },
  { hour: 13, rides: 1276 },
  { hour: 14, rides: 855 },
  { hour: 15, rides: 1220 },
  { hour: 16, rides: 2301 },
  { hour: 17, rides: 2888 },
  { hour: 18, rides: 3113 },
  { hour: 19, rides: 438 },
  { hour: 20, rides: 1058 },
  { hour: 21, rides: 570 },
  { hour: 22, rides: 788 },
  { hour: 23, rides: 641 },
];

/**
 * Headline figures. Every one of these was re-derived from the raw CSV and
 * matches what the Power BI report publishes.
 */
export const railFacts = {
  transactions: 31653,
  /** Pounds. Exact sum of the Price column. */
  revenue: 741921,
  onTimePct: 86.82,
  cancelledPct: 5.94,
  avgFare: 23.44,
  periodStart: "2024-01-01",
  periodEnd: "2024-04-30",
} as const;

/** The two commuter peaks — the whole story of the departure profile. */
export const peakAm: HourBucket = ridesByHour[6];
export const peakPm: HourBucket = ridesByHour[18];

/** The quietest hour, which makes the peaks legible by contrast. */
export const trough: HourBucket = ridesByHour[19];

export const maxRides = Math.max(...ridesByHour.map((b) => b.rides));

/** `6` -> `06:00`, for axis ticks and tooltips. */
export function formatHour(hour: number): string {
  return `${String(hour).padStart(2, "0")}:00`;
}
