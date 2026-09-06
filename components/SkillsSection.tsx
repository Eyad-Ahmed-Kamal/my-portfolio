"use client";

import { motion } from "framer-motion";

export default function SkillsSection() {
  const skills = [
    { name: "Power BI", pct: 94, note: "multi-page enterprise reports" },
    { name: "DAX", pct: 90, note: "time intelligence, CALCULATE, SUMX" },
    { name: "Star Schema & Dimensional Modeling", pct: 92, note: "fact + dim, surrogate keys" },
    { name: "SQL", pct: 88, note: "joins, aggregations, window fns" },
    { name: "C++", pct: 86, note: "algorithms, STL, problem solving" },
    { name: "Python", pct: 80, note: "pandas, data analysis workflows" },
    { name: "Advanced Excel", pct: 85, note: "Power Query, pivots, modeling" },
  ];

  return (
    <section id="experience" className="mb-24 md:mb-32 scroll-mt-24">
      {/* Section Header */}
      <div className="flex items-baseline gap-4 mb-4">
        <span className="font-mono text-xs text-cyan-400 font-semibold tracking-wider uppercase">
          03 / Experience &amp; Skills
        </span>
        <div className="flex-1 h-px bg-gradient-to-r from-white/15 to-transparent" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
        {/* Left Column: Timeline */}
        <div>
          <h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-[#E8EDF5] mb-8">
            Experience Timeline
          </h3>

          <div className="space-y-8 relative">
            {/* Timeline Item 1: Outlier */}
            <div className="grid grid-cols-[16px_1fr] gap-4 relative">
              <div className="relative flex flex-col items-center">
                <div className="w-3 h-3 rounded-full bg-cyan-400 shadow-[0_0_0_4px_rgba(34,211,238,0.2)] mt-1.5" />
                <div className="w-px h-full bg-white/10 mt-2" />
              </div>
              <div className="pb-4">
                <span className="font-mono text-[11px] text-cyan-400 uppercase tracking-wider font-semibold">
                  Mar 2025 – Present · Contract
                </span>
                <h4 className="text-base sm:text-lg font-semibold text-[#E8EDF5] mt-1">
                  AI Data Annotator — Outlier.ai
                </h4>
                <p className="text-sm text-[#8E9AAE] mt-1.5 leading-relaxed">
                  Annotated and quality-checked training data used to fine-tune large language models. Evaluated model responses, ranked outputs, and analyzed ambiguous edge cases against rigorous rubric standards under continuous external review.
                </p>
              </div>
            </div>

            {/* Timeline Item 2: DEPI */}
            <div className="grid grid-cols-[16px_1fr] gap-4 relative">
              <div className="relative flex flex-col items-center">
                <div className="w-3 h-3 rounded-full bg-emerald-400 shadow-[0_0_0_4px_rgba(52,211,153,0.2)] mt-1.5" />
                <div className="w-px h-full bg-white/10 mt-2" />
              </div>
              <div className="pb-4">
                <span className="font-mono text-[11px] text-emerald-400 uppercase tracking-wider font-semibold">
                  2025 – Aug 2026 · Government Initiative
                </span>
                <h4 className="text-base sm:text-lg font-semibold text-[#E8EDF5] mt-1">
                  Digital Egypt Pioneers Initiative (DEPI)
                </h4>
                <p className="text-sm text-[#8E9AAE] mt-1.5 leading-relaxed">
                  Data Analysis Track. Comprehensive training in Power BI, data warehousing concepts, and business intelligence workflows. Graduated as Team Lead on the UK Train Rides capstone project.
                </p>
              </div>
            </div>

            {/* Timeline Item 3: University */}
            <div className="grid grid-cols-[16px_1fr] gap-4 relative">
              <div className="relative flex flex-col items-center">
                <div className="w-3 h-3 rounded-full bg-white/40 mt-1.5" />
              </div>
              <div>
                <span className="font-mono text-[11px] text-[#8E9AAE] uppercase tracking-wider font-semibold">
                  2025 – 2029 (Expected)
                </span>
                <h4 className="text-base sm:text-lg font-semibold text-[#E8EDF5] mt-1">
                  B.Sc. AI &amp; Data Science — Zagazig University
                </h4>
                <p className="text-sm text-[#8E9AAE] mt-1.5 leading-relaxed">
                  Faculty of Computers and Information. Deep coursework in Programming (C++ 95%), Linear Algebra, Statistics &amp; Probability, and Data Engineering.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Skills Matrix */}
        <div id="skills" className="scroll-mt-24">
          <h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-[#E8EDF5] mb-8">
            Skills &amp; Competency Matrix
          </h3>

          <div className="space-y-5 rounded-2xl border border-white/10 bg-[#0F141F]/60 p-6 sm:p-7">
            {skills.map((skill) => (
              <div key={skill.name} className="space-y-2">
                <div className="flex justify-between items-baseline text-xs sm:text-sm">
                  <span className="font-medium text-[#E8EDF5]">{skill.name}</span>
                  <span className="font-mono text-xs text-[#8E9AAE]">
                    {skill.note}
                  </span>
                </div>

                <div className="h-2 w-full rounded-full bg-white/[0.07] overflow-hidden">
                  <motion.div
                    className="h-full rounded-full bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.pct}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.1, ease: [0.2, 0.8, 0.2, 1] }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
