import Image from "next/image";
import { Award } from "lucide-react";

export default function CompetitiveSection() {
  return (
    <section id="rigor" className="mb-24 md:mb-32 scroll-mt-24">
      {/* Section Header */}
      <div className="flex items-center gap-4 mb-5 border-t border-rule pt-5">
        <span className="tnum font-display text-3xl leading-none text-ink-muted/45">02</span>
        <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-ink-muted">Rigor</span>
      </div>
      <h2 className="font-display text-4xl sm:text-5xl lg:text-[54px] leading-[1.06] tracking-[-0.015em] text-ink mb-4">
        Problem Solving &amp; Algorithmic Foundations
      </h2>
      <p className="text-base text-ink-muted max-w-2xl mb-10 leading-relaxed">
        Developing algorithmic thinking, edge-case discipline, and complexity awareness through competitive programming and core computer science foundations.
      </p>

      {/* Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-6 items-start">
        {/* Contest Photo Card */}
        <div className="rounded-2xl border border-rule bg-gradient-to-br from-white/[0.03] to-white/[0.01] overflow-hidden">
          <div className="relative aspect-[3/2] w-full">
            <Image
              src="/uploads/Wh.jpeg"
              alt="ECPC 2026 team at the contest desk"
              fill
              sizes="(max-width: 1024px) 100vw, 600px"
              className="object-cover object-center filter contrast-[1.03]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ground via-transparent to-transparent opacity-80" />
          </div>

          <div className="p-6 sm:p-7 border-t border-rule">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-data-strong" />
              <span className="font-mono text-xs text-ink-muted font-semibold uppercase tracking-wider">
                ECPC 2026 Qualifications · Team 4090
              </span>
            </div>
            <h3 className="text-lg sm:text-xl font-semibold text-ink mb-2">
              Zagazig University Competitor
            </h3>
            <p className="text-sm text-ink-muted leading-relaxed">
              Represented Zagazig University in the Egyptian Collegiate Programming Contest (ECPC 2026 qualifications) alongside two teammates under standard ICPC rules (one shared machine, 3-person team, strict 5-hour limit). Awarded an <strong className="text-ink">Honorable Mention</strong>.
            </p>
          </div>
        </div>

        {/* Rigor Value Props */}
        <div className="space-y-6">
          {/* Card 1: Honorable Mention */}
          <div className="p-6 sm:p-7 rounded-2xl border border-rule bg-surface/80">
            <div className="flex items-center gap-2 font-mono text-xs text-ink mb-3">
              <Award className="w-4 h-4 text-ink-muted" />
              <span className="uppercase tracking-wider">ECPC 2026 · Qualifications</span>
            </div>
            <h4 className="text-lg font-semibold text-ink mb-3">
              Honorable Mention
            </h4>
            <p className="text-sm text-ink-muted leading-relaxed">
              What I take from contest practice: reasoning about time and space complexity (<span className="font-mono text-xs text-ink px-1 py-0.5 rounded bg-white/[0.06]">O(N log N)</span> vs <span className="font-mono text-xs text-ink px-1 py-0.5 rounded bg-white/[0.06]">O(N²)</span>), checking boundary cases, and getting logic right under a time limit.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
