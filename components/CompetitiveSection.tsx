import Image from "next/image";
import { Award, Terminal, Binary } from "lucide-react";

export default function CompetitiveSection() {
  return (
    <section id="rigor" className="mb-24 md:mb-32 scroll-mt-24">
      {/* Section Header */}
      <div className="flex items-baseline gap-4 mb-4">
        <span className="font-mono text-xs text-emerald-400 font-semibold tracking-wider uppercase">
          02 / Rigor
        </span>
        <div className="flex-1 h-px bg-gradient-to-r from-white/15 to-transparent" />
      </div>
      <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-semibold tracking-[-0.03em] text-[#E8EDF5] mb-3">
        Problem Solving &amp; Algorithmic Foundations
      </h2>
      <p className="text-base text-[#8E9AAE] max-w-2xl mb-10 leading-relaxed">
        Developing algorithmic thinking, edge-case discipline, and complexity awareness through competitive programming and core computer science foundations.
      </p>

      {/* Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-6 items-start">
        {/* Contest Photo Card */}
        <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.03] to-white/[0.01] overflow-hidden">
          <div className="relative aspect-[16/10] w-full">
            <Image
              src="/uploads/Wh.jpeg"
              alt="ECPC 2026 team at the contest desk"
              fill
              sizes="(max-width: 1024px) 100vw, 600px"
              className="object-cover object-center filter contrast-[1.03]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F17] via-transparent to-transparent opacity-80" />
          </div>

          <div className="p-6 sm:p-7 border-t border-white/[0.08]">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span className="font-mono text-xs text-emerald-400 font-semibold uppercase tracking-wider">
                ECPC 2026 Qualifications · Team 4090
              </span>
            </div>
            <h3 className="text-lg sm:text-xl font-semibold text-[#E8EDF5] mb-2">
              Zagazig University Competitor
            </h3>
            <p className="text-sm text-[#8E9AAE] leading-relaxed">
              Represented Zagazig University in the Egyptian Collegiate Programming Contest (ECPC 2026 qualifications) alongside two teammates under standard ICPC rules (one shared machine, 3-person team, strict 5-hour limit). Awarded an <strong className="text-[#E8EDF5]">Honorable Mention</strong>.
            </p>
          </div>
        </div>

        {/* Rigor Value Props */}
        <div className="space-y-6">
          {/* Card 1: Honorable Mention */}
          <div className="p-6 sm:p-7 rounded-2xl border border-emerald-500/25 bg-gradient-to-br from-emerald-500/10 via-emerald-500/5 to-transparent relative overflow-hidden">
            <div className="flex items-center gap-2 font-mono text-xs text-emerald-300 mb-3">
              <Award className="w-4 h-4 text-emerald-400" />
              <span className="uppercase tracking-wider">ECPC 2026 · Qualifications</span>
            </div>
            <h4 className="text-xl font-semibold text-[#E8EDF5] mb-3">
              Honorable Mention Awardee
            </h4>
            <p className="text-sm text-[#A9B4C6] leading-relaxed">
              Competitive programming builds strong engineering discipline: thinking in Big-O time and space complexity (<span className="font-mono text-xs text-cyan-300 px-1 py-0.5 rounded bg-white/[0.06]">O(N log N)</span> vs <span className="font-mono text-xs text-cyan-300 px-1 py-0.5 rounded bg-white/[0.06]">O(N²)</span>), systematically testing boundary values, and writing bug-free logic under constraints.
            </p>
          </div>

          {/* Card 2: Core Foundations */}
          <div className="p-6 sm:p-7 rounded-2xl border border-white/10 bg-[#0F141F]/80">
            <div className="flex items-center gap-2 font-mono text-xs text-[#8E9AAE] mb-4">
              <Terminal className="w-4 h-4 text-cyan-400" />
              <span className="uppercase tracking-wider">Academic &amp; Problem Solving Core</span>
            </div>

            <div className="flex flex-wrap gap-2.5">
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
