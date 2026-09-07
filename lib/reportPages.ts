import type { LightboxImage } from "@/components/Lightbox";

/** Real page dimensions, so no image is ever stretched or letterboxed. */
export const reportPages: LightboxImage[] = [
  {
    src: "/uploads/dash-executive-summary.jpg",
    title: "Executive Summary",
    alt: "Executive Summary page: total revenue 741.9K, 32K rides, 86.8 percent on-time, average ticket 23.4, cancellation rate 5.9 percent, revenue and rides trend, station map, top stations by revenue",
    width: 1600,
    height: 901,
  },
  {
    src: "/uploads/dash-revenue-deep-dive.jpg",
    title: "Revenue Deep Dive",
    alt: "Revenue Deep Dive page: refunded revenue, top 10 routes, revenue matrix by ticket class and type totalling 741,921, route treemap, price band by month, revenue by railcard",
    width: 1600,
    height: 900,
  },
  {
    src: "/uploads/dash-operations-reliability.jpg",
    title: "Operations & Reliability",
    alt: "Operations and Reliability page: 86.8 percent on-time, 5.9 percent cancellations, performance gauge against a 90 percent target, delay reasons donut, delay minutes distribution, worst routes by delay",
    width: 1600,
    height: 898,
  },
  {
    src: "/uploads/dash-demand-booking.jpg",
    title: "Demand & Booking",
    alt: "Demand and Booking Patterns page: rides by day of week, month by day demand heatmap totalling 31,653 rides, departure hour profile, booking window donut, booking lead days versus ticket price",
    width: 1600,
    height: 901,
  },
];
