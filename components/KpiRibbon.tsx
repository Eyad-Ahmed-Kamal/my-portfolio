"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";

const TARGET = 31653;

export default function KpiRibbon() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const reduce = useReducedMotion();
  const [transactions, setTransactions] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    // Counting up is decorative; readers who opt out get the final number.
    if (reduce) {
      setTransactions(TARGET);
      return;
    }

    const duration = 1600;
    const start = performance.now();
    const target = TARGET;

    const animate = (now: number) => {
      const elapsed = Math.min(1, (now - start) / duration);
      // Ease-out cubic formula
      const progress = 1 - Math.pow(1 - elapsed, 3);

      setTransactions(Math.round(target * progress));

      if (elapsed < 1) {
        requestAnimationFrame(animate);
      }
    };

    const frameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameId);
  }, [isInView, reduce]);

  return (
    <section ref={ref} className="border-y border-rule py-8 my-14 md:my-20 bg-white/[0.01]">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6">
        {/* Metric 1 */}
        <div className="space-y-1.5">
          <div className="tnum font-mono text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-ink">
            <span className="text-data-strong">{transactions.toLocaleString("en-US")}</span>
          </div>
          <p className="text-xs sm:text-sm text-ink-muted leading-snug">
            Rail Transactions Modeled (UK Rail Capstone)
          </p>
        </div>

        {/* Metric 2 */}
        <div className="space-y-1.5">
          <div className="tnum font-mono text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-ink">
            4-Member
          </div>
          <p className="text-xs sm:text-sm text-ink-muted leading-snug">
            Team Led (DEPI Capstone Delivery)
          </p>
        </div>

        {/* Metric 3 */}
        <div className="space-y-1.5">
          <div className="tnum font-mono text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-ink">
            ECPC <span className="text-ink-muted font-normal">2026</span>
          </div>
          <p className="text-xs sm:text-sm text-ink-muted leading-snug">
            Contestant (ECPC Qualifications · Honorable Mention)
          </p>
        </div>

        {/* Metric 4 */}
        <div className="space-y-1.5">
          <div className="tnum font-mono text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-ink">
            Class <span className="text-ink-muted font-normal">of &apos;29</span>
          </div>
          <p className="text-xs sm:text-sm text-ink-muted leading-snug">
            Zagazig University (AI &amp; Data Science)
          </p>
        </div>
      </div>
    </section>
  );
}
