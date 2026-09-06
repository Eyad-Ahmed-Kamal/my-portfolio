import { BarChart3, Code2 } from "lucide-react";

export default function SkillsSection() {
  const skillCategories = [
    {
      title: "Business Intelligence & Analytics",
      icon: BarChart3,
      badge: "Primary Focus",
      colorClass: "text-cyan-400 border-cyan-400/30 bg-cyan-400/10",
      skills: [
        { name: "Power BI", detail: "Multi-page reporting, interactive dashboards & visual hierarchy" },
        { name: "DAX", detail: "Time intelligence, CALCULATE, iterator functions (SUMX, AVERAGEX)" },
        { name: "Star Schema Modeling", detail: "Fact/dimension separation, surrogate keys, 1:* relationships" },
        { name: "Advanced Excel", detail: "Power Query ETL, automated data cleanup & pivot models" },
        { name: "Statistics & Probability", detail: "Descriptive & inferential statistics, probability distributions" },
      ],
    },
    {
      title: "Programming",
      icon: Code2,
      badge: "Core Stack",
      colorClass: "text-emerald-400 border-emerald-400/30 bg-emerald-400/10",
      skills: [
        { name: "C++", detail: "Modern C++, STL, algorithms & competitive problem solving" },
        { name: "Python", detail: "Pandas, NumPy, data analysis workflows & automation scripts" },
        { name: "SQL", detail: "Multi-table joins, aggregations, window functions & relational modeling" },
      ],
    },
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
                  Mar 2025 – 2026 · Contract
                </span>
                <h4 className="text-base sm:text-lg font-semibold text-[#E8EDF5] mt-1">
                  AI Data Annotator — Outlier.ai
                </h4>
                <p className="text-sm text-[#8E9AAE] mt-1.5 leading-relaxed">
                  Evaluated and quality-checked training data for Large Language Models. Ranked model responses and analyzed ambiguous edge cases against strict evaluation rubrics under continuous external review.
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
                  2025 – Aug 2026 · Ministry of Communications (MCIT)
                </span>
                <h4 className="text-base sm:text-lg font-semibold text-[#E8EDF5] mt-1">
                  Data Analysis Track Graduate — DEPI
                </h4>
                <p className="text-sm text-[#8E9AAE] mt-1.5 leading-relaxed">
                  Digital Egypt Pioneers Initiative. Completed hands-on training in business intelligence, data modeling, and Power BI. Led a 4-member team to deliver the UK Train Rides capstone project.
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
                  2025 – 2029 (Expected) · Undergraduate
                </span>
                <h4 className="text-base sm:text-lg font-semibold text-[#E8EDF5] mt-1">
                  B.Sc. AI &amp; Data Science — Zagazig University
                </h4>
                <p className="text-sm text-[#8E9AAE] mt-1.5 leading-relaxed">
                  Faculty of Computers and Information (Credit-Hours Program). Completed Level 1 — 34 credit hours, 3.22 GPA.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Skills Matrix */}
        <div id="skills" className="scroll-mt-24">
          <h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-[#E8EDF5] mb-8">
            Technical Skills Matrix
          </h3>

          <div className="space-y-4">
            {skillCategories.map((group) => {
              const Icon = group.icon;
              return (
                <div
                  key={group.title}
                  className="rounded-2xl border border-white/10 bg-[#0F141F]/60 p-5 sm:p-6 transition-all hover:border-white/15"
                >
                  <div className="flex items-center justify-between gap-3 mb-4 pb-3 border-b border-white/[0.06] flex-wrap">
                    <div className="flex items-center gap-2.5 min-w-0">
                      <Icon className="w-4 h-4 text-cyan-400 shrink-0" />
                      <h4 className="text-sm sm:text-base font-semibold text-[#E8EDF5] truncate sm:whitespace-normal">
                        {group.title}
                      </h4>
                    </div>
                    <span
                      className={`font-mono text-[10px] sm:text-[11px] px-2.5 py-0.5 rounded-full border shrink-0 ${group.colorClass}`}
                    >
                      {group.badge}
                    </span>
                  </div>

                  <div className="space-y-3">
                    {group.skills.map((skill) => (
                      <div key={skill.name} className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-2">
                        <span className="font-mono text-xs font-semibold text-[#E8EDF5] min-w-[180px] shrink-0">
                          {skill.name}
                        </span>
                        <span className="text-xs text-[#8E9AAE] leading-relaxed">
                          {skill.detail}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
