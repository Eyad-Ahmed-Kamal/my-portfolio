"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

export default function KpiRibbon() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [counts, setCounts] = useState({ transactions: 0, sales: 0, team: 0 });

  useEffect(() => {
    if (!isInView) return;

    const duration = 1600;
    const start = performance.now();
    const targets = { transactions: 31653, sales: 376, team: 4 };

    const animate = (now: number) => {
      const elapsed = Math.min(1, (now - start) / duration);
      // Ease-out cubic formula
      const progress = 1 - Math.pow(1 - elapsed, 3);

      setCounts({
        transactions: Math.round(targets.transactions * progress),
        sales: Math.round(targets.sales * progress),
        team: Math.round(targets.team * progress),
      });

      if (elapsed < 1) {
        requestAnimationFrame(animate);
      }
    };

    const frameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameId);
  }, [isInView]);

  return (
    <section ref={ref} className="border-y border-white/[0.08] py-8 my-14 md:my-20 bg-white/[0.01]">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6">
        {/* Metric 1 */}
        <div className="space-y-1.5">
          <div className="font-mono text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#E8EDF5]">
            {counts.transactions.toLocaleString()}{" "}
            <span className="text-cyan-400 font-normal">+</span>
          </div>
          <p className="text-xs sm:text-sm text-[#8E9AAE] leading-snug">
            UK rail transactions analyzed &amp; modeled
          </p>
        </div>

        {/* Metric 2 */}
        <div className="space-y-1.5">
          <div className="font-mono text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#E8EDF5]">
            <span className="text-emerald-400 font-normal">$</span>
            {counts.sales}M
          </div>
          <p className="text-xs sm:text-sm text-[#8E9AAE] leading-snug">
            BMW global sales dataset structured
          </p>
        </div>

        {/* Metric 3 */}
        <div className="space-y-1.5">
          <div className="font-mono text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#E8EDF5]">
            {counts.team}{" "}
            <span className="text-cyan-400 font-normal">Members</span>
          </div>
          <p className="text-xs sm:text-sm text-[#8E9AAE] leading-snug">
            BI analytics team led to full delivery
          </p>
        </div>

        {/* Metric 4 */}
        <div className="space-y-1.5">
          <div className="font-mono text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#E8EDF5]">
            ECPC <span className="text-cyan-400 font-normal">&apos;26</span>
          </div>
          <p className="text-xs sm:text-sm text-[#8E9AAE] leading-snug">
            ICPC qualifications — Honorable Mention
          </p>
        </div>
      </div>
    </section>
  );
}
