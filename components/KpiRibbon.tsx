"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

export default function KpiRibbon() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [transactions, setTransactions] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    const duration = 1600;
    const start = performance.now();
    const target = 31653;

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
  }, [isInView]);

  return (
    <section ref={ref} className="border-y border-white/[0.08] py-8 my-14 md:my-20 bg-white/[0.01]">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6">
        {/* Metric 1 */}
        <div className="space-y-1.5">
          <div className="font-mono text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#E8EDF5]">
            {transactions.toLocaleString()}{" "}
            <span className="text-cyan-400 font-normal">+</span>
          </div>
          <p className="text-xs sm:text-sm text-[#8E9AAE] leading-snug">
            Rail Transactions Modeled (UK Rail Capstone)
          </p>
        </div>

        {/* Metric 2 */}
        <div className="space-y-1.5">
          <div className="font-mono text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#E8EDF5]">
            4-Member
          </div>
          <p className="text-xs sm:text-sm text-[#8E9AAE] leading-snug">
            Team Led (DEPI Capstone Delivery)
          </p>
        </div>

        {/* Metric 3 */}
        <div className="space-y-1.5">
          <div className="font-mono text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#E8EDF5]">
            ECPC <span className="text-emerald-400 font-normal">2026</span>
          </div>
          <p className="text-xs sm:text-sm text-[#8E9AAE] leading-snug">
            Contestant (ICPC Qualifications · Honorable Mention)
          </p>
        </div>

        {/* Metric 4 */}
        <div className="space-y-1.5">
          <div className="font-mono text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#E8EDF5]">
            Class <span className="text-cyan-400 font-normal">of &apos;29</span>
          </div>
          <p className="text-xs sm:text-sm text-[#8E9AAE] leading-snug">
            Zagazig University (AI &amp; Data Science)
          </p>
        </div>
      </div>
    </section>
  );
}
