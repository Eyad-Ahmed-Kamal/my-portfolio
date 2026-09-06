"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Database, Code2, Layers, CheckCircle2 } from "lucide-react";

export default function CaseStudies() {
  const [activeTab, setActiveTab] = useState<"schema" | "dax">("schema");

  return (
    <section id="work" className="mb-24 md:mb-32 scroll-mt-24">
      {/* Section Header */}
      <div className="flex items-baseline gap-4 mb-4">
        <span className="font-mono text-xs text-cyan-400 font-semibold tracking-wider uppercase">
          01 / Case Studies
        </span>
        <div className="flex-1 h-px bg-gradient-to-r from-white/15 to-transparent" />
      </div>
      <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-semibold tracking-[-0.03em] text-[#E8EDF5] mb-3">
        Architecture, not dashboards.
      </h2>
      <p className="text-base text-[#8E9AAE] max-w-2xl mb-10 leading-relaxed">
        Two end-to-end BI deliveries where the model — grain, surrogate keys, and central measure layer — did the heavy lifting.
      </p>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Project 1: UK Train Rides (Featured Full-Width Card) */}
        <div className="lg:col-span-3 rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.045] to-white/[0.015] backdrop-blur-md p-6 sm:p-8 lg:p-10 relative overflow-hidden">
          {/* Ambient Glow */}
          <div className="absolute -top-32 -right-24 w-96 h-96 rounded-full bg-cyan-500/10 blur-3xl pointer-events-none" />

          <div className="relative grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-8 lg:gap-12 items-start">
            {/* Project Info */}
            <div>
              {/* Badges */}
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <span className="font-mono text-xs px-2.5 py-1 rounded-md bg-cyan-400/10 text-cyan-300 border border-cyan-400/25">
                  Team Lead
                </span>
                <span className="font-mono text-xs px-2.5 py-1 rounded-md bg-white/[0.05] text-[#8E9AAE] border border-white/10">
                  DEPI Capstone
                </span>
                <span className="font-mono text-xs px-2.5 py-1 rounded-md bg-white/[0.05] text-[#8E9AAE] border border-white/10">
                  Power BI · DAX · SQL
                </span>
              </div>

              {/* Title & Description */}
              <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-[#E8EDF5] mb-3">
                UK Train Rides Analytics Platform
              </h3>
              <p className="text-sm sm:text-base leading-relaxed text-[#A9B4C6] mb-6">
                31,653 rail transactions (Jan–Apr 2024) modeled into a single source of truth, then surfaced as an executive summary a non-technical stakeholder can act on in one screen.
              </p>

              {/* Key Deliverables */}
              <div className="space-y-3.5 mb-8">
                <div className="flex items-start gap-3">
                  <span className="font-mono text-xs text-cyan-400 font-bold mt-1">
                    01
                  </span>
                  <p className="text-sm text-[#A9B4C6] leading-relaxed">
                    <strong className="text-[#E8EDF5]">1 Fact + 5 Dimension Star Schema:</strong> Surrogate keys enforcing referential integrity across every report page.
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <span className="font-mono text-xs text-cyan-400 font-bold mt-1">
                    02
                  </span>
                  <p className="text-sm text-[#A9B4C6] leading-relaxed">
                    <strong className="text-[#E8EDF5]">Executive Summary Page:</strong> Revenue, punctuality, and demand condensed for decision-makers, not passive exploration.
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <span className="font-mono text-xs text-cyan-400 font-bold mt-1">
                    03
                  </span>
                  <p className="text-sm text-[#A9B4C6] leading-relaxed">
                    <strong className="text-[#E8EDF5]">Cross-Team Design System:</strong> Standardized palette, typography, and measure naming enforced across 4 teammates so all pages read as one unified product.
                  </p>
                </div>
              </div>

              {/* GitHub Link */}
              <a
                href="https://github.com/Eyad-Ahmed-Kamal/UK-Train-Rides-Analysis"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                <span>Inspect Repository &amp; Documentation</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>

            {/* Interactive Schema / DAX Explorer */}
            <div>
              {/* Tab Switcher */}
              <div className="inline-flex p-1 rounded-xl border border-white/10 bg-[#0B0F17]/60 mb-4">
                <button
                  onClick={() => setActiveTab("schema")}
                  className={`flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-semibold transition-all ${
                    activeTab === "schema"
                      ? "bg-cyan-400/15 border border-cyan-400/40 text-cyan-200 shadow-sm"
                      : "text-[#8E9AAE] hover:text-[#E8EDF5] border border-transparent"
                  }`}
                >
                  <Database className="w-3.5 h-3.5" />
                  <span>Star Schema View</span>
                </button>

                <button
                  onClick={() => setActiveTab("dax")}
                  className={`flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-semibold transition-all ${
                    activeTab === "dax"
                      ? "bg-cyan-400/15 border border-cyan-400/40 text-cyan-200 shadow-sm"
                      : "text-[#8E9AAE] hover:text-[#E8EDF5] border border-transparent"
                  }`}
                >
                  <Code2 className="w-3.5 h-3.5" />
                  <span>DAX Measure Layer</span>
                </button>
              </div>

              {/* Content Box */}
              <AnimatePresence mode="wait">
                {activeTab === "schema" ? (
                  <motion.div
                    key="schema"
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.18 }}
                    className="rounded-xl border border-white/10 bg-[#0B0F17]/70 p-4 sm:p-5"
                  >
                    <div className="overflow-x-auto -mx-1 px-1 sm:mx-0 sm:px-0">
                      <div className="min-w-[310px] grid grid-cols-3 gap-2 sm:gap-2.5 mb-4">
                        <div className="p-2 sm:p-2.5 rounded-lg border border-white/10 bg-white/[0.02] font-mono text-[10px] sm:text-[11px] text-[#8E9AAE]">
                          <span className="text-[#E8EDF5] font-semibold">Dim_Date</span>
                          <div className="text-[9px] sm:text-[10px] text-cyan-400/80 mt-0.5">date_key (PK)</div>
                        </div>
                        <div className="p-2 sm:p-2.5 rounded-lg border border-white/10 bg-white/[0.02] font-mono text-[10px] sm:text-[11px] text-[#8E9AAE]">
                          <span className="text-[#E8EDF5] font-semibold">Dim_Station</span>
                          <div className="text-[9px] sm:text-[10px] text-cyan-400/80 mt-0.5">station_key (PK)</div>
                        </div>
                        <div className="p-2 sm:p-2.5 rounded-lg border border-white/10 bg-white/[0.02] font-mono text-[10px] sm:text-[11px] text-[#8E9AAE]">
                          <span className="text-[#E8EDF5] font-semibold">Dim_Route</span>
                          <div className="text-[9px] sm:text-[10px] text-cyan-400/80 mt-0.5">route_key (PK)</div>
                        </div>

                        <div className="p-2 sm:p-2.5 rounded-lg border border-white/10 bg-white/[0.02] font-mono text-[10px] sm:text-[11px] text-[#8E9AAE] self-center">
                          <span className="text-[#E8EDF5] font-semibold">Dim_Ticket</span>
                          <div className="text-[9px] sm:text-[10px] text-cyan-400/80 mt-0.5">ticket_key (PK)</div>
                        </div>

                        {/* Central Fact */}
                        <div className="p-2.5 sm:p-3.5 rounded-xl border border-cyan-400/50 bg-cyan-400/10 text-center shadow-[0_0_30px_-5px_rgba(34,211,238,0.35)]">
                          <div className="font-mono text-[11px] sm:text-xs font-bold text-cyan-200">
                            Fact_TrainRides
                          </div>
                          <div className="font-mono text-[9px] sm:text-[10px] text-cyan-300 mt-0.5 sm:mt-1">
                            31,653 rows
                          </div>
                          <div className="font-mono text-[8.5px] sm:text-[9px] text-[#8E9AAE] mt-0.5">
                            grain: 1 ticket
                          </div>
                        </div>

                        <div className="p-2 sm:p-2.5 rounded-lg border border-white/10 bg-white/[0.02] font-mono text-[10px] sm:text-[11px] text-[#8E9AAE] self-center">
                          <span className="text-[#E8EDF5] font-semibold">Dim_Passenger</span>
                          <div className="text-[9px] sm:text-[10px] text-cyan-400/80 mt-0.5">passenger_key (PK)</div>
                        </div>
                      </div>
                    </div>

                    <div className="pt-3 border-t border-white/[0.08] text-xs text-[#8E9AAE] leading-relaxed">
                      Surrogate keys on every dimension; fact table holds surrogate foreign keys and numeric additive measures only.
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="dax"
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.18 }}
                    className="rounded-xl border border-white/10 bg-[#0B0F17]/70 p-4 sm:p-5 font-mono text-xs leading-relaxed space-y-3 overflow-x-auto"
                  >
                    <div>
                      <span className="text-emerald-400 font-semibold">Total Revenue</span>{" "}
                      <span className="text-white/40">=</span>
                      <div className="pl-4 text-[#A9B4C6]">SUMX( Fact_TrainRides, [Price] )</div>
                    </div>

                    <div>
                      <span className="text-emerald-400 font-semibold">On-Time Rate %</span>{" "}
                      <span className="text-white/40">=</span>
                      <div className="pl-4 text-[#A9B4C6]">
                        DIVIDE( [On-Time Journeys], [Total Journeys] )
                      </div>
                    </div>

                    <div>
                      <span className="text-emerald-400 font-semibold">Revenue LY</span>{" "}
                      <span className="text-white/40">=</span>
                      <div className="pl-4 text-[#A9B4C6]">
                        CALCULATE( [Total Revenue], SAMEPERIODLASTYEAR( Dim_Date[Date] ) )
                      </div>
                    </div>

                    <div>
                      <span className="text-emerald-400 font-semibold">Avg Ticket Price</span>{" "}
                      <span className="text-white/40">=</span>
                      <div className="pl-4 text-[#A9B4C6]">
                        DIVIDE( [Total Revenue], [Total Journeys] )
                      </div>
                    </div>

                    <div className="pt-3 border-t border-white/[0.08] font-sans text-xs text-[#8E9AAE]">
                      One centralized measure layer, consistently formulated — eliminating data discrepancies across all pages.
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Project 2: BMW Global Sales Dashboard (2 Columns) */}
        <div className="lg:col-span-2 rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.045] to-white/[0.015] backdrop-blur-md p-6 sm:p-8">
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="font-mono text-xs px-2.5 py-1 rounded-md bg-emerald-400/10 text-emerald-300 border border-emerald-400/25">
              Multi-page BI
            </span>
            <span className="font-mono text-xs px-2.5 py-1 rounded-md bg-white/[0.05] text-[#8E9AAE] border border-white/10">
              Time Intelligence
            </span>
          </div>

          <h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-[#E8EDF5] mb-3">
            BMW Global Sales Analytics Dashboard
          </h3>
          <p className="text-sm sm:text-base leading-relaxed text-[#A9B4C6] mb-6">
            A multi-page Power BI report over roughly $376M in global sales transactions, modeled across four analytical axes with YoY time-intelligence measures and drill-through capabilities.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="p-3.5 rounded-xl border border-white/[0.08] bg-[#0B0F17]/40">
              <div className="font-mono text-xs text-cyan-400 font-semibold">Geography</div>
              <div className="text-xs text-[#8E9AAE] mt-1.5">Region &amp; country revenue mix</div>
            </div>
            <div className="p-3.5 rounded-xl border border-white/[0.08] bg-[#0B0F17]/40">
              <div className="font-mono text-xs text-cyan-400 font-semibold">Vehicle Model</div>
              <div className="text-xs text-[#8E9AAE] mt-1.5">Volume, price band, drill-through</div>
            </div>
            <div className="p-3.5 rounded-xl border border-white/[0.08] bg-[#0B0F17]/40">
              <div className="font-mono text-xs text-cyan-400 font-semibold">Channel</div>
              <div className="text-xs text-[#8E9AAE] mt-1.5">Dealer vs. direct performance</div>
            </div>
            <div className="p-3.5 rounded-xl border border-white/[0.08] bg-[#0B0F17]/40">
              <div className="font-mono text-xs text-cyan-400 font-semibold">Date</div>
              <div className="text-xs text-[#8E9AAE] mt-1.5">YoY, YTD, rolling trend analysis</div>
            </div>
          </div>
        </div>

        {/* Philosophy Card: "How I Work" (1 Column) */}
        <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-cyan-500/[0.06] to-white/[0.015] backdrop-blur-md p-6 sm:p-8 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-cyan-400 uppercase tracking-wider mb-4">
              <Layers className="w-3.5 h-3.5" />
              <span>How I Work</span>
            </div>
            <p className="text-sm sm:text-base leading-relaxed text-[#A9B4C6]">
              Model first. Grain declared, surrogate keys generated, measures centralized — then visuals. It makes the report cheap to maintain and impossible to contradict itself.
            </p>
          </div>

          <div className="pt-6 border-t border-white/[0.08] font-mono text-xs space-y-2.5">
            <div className="flex justify-between items-center text-[#8E9AAE]">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                <span>Grain</span>
              </span>
              <span className="text-[#E8EDF5] font-semibold">Declared</span>
            </div>
            <div className="flex justify-between items-center text-[#8E9AAE]">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                <span>Keys</span>
              </span>
              <span className="text-[#E8EDF5] font-semibold">Surrogate</span>
            </div>
            <div className="flex justify-between items-center text-[#8E9AAE]">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                <span>Measures</span>
              </span>
              <span className="text-[#E8EDF5] font-semibold">Centralized</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
