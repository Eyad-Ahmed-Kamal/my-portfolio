"use client";

import { useState } from "react";
import Image from "next/image";
import Lightbox from "@/components/Lightbox";
import { reportPages } from "@/lib/reportPages";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Database, Code2, Layers, CheckCircle2 } from "lucide-react";

export default function CaseStudies() {
  const [activeTab, setActiveTab] = useState<"schema" | "dax">("schema");
  const [galleryIndex, setGalleryIndex] = useState<number | null>(null);

  return (
    <section id="work" className="mb-24 md:mb-32 scroll-mt-24">
      {/* Section Header */}
      <div className="flex items-center gap-4 mb-5 border-t border-rule pt-5">
        <span className="tnum font-display text-3xl leading-none text-ink-muted/45">01</span>
        <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-ink-muted">Projects</span>
      </div>
      <h2 className="font-display text-4xl sm:text-5xl lg:text-[54px] leading-[1.06] tracking-[-0.015em] text-ink mb-4">
        Projects
      </h2>
      <p className="text-base text-ink-muted max-w-2xl mb-10 leading-relaxed">
        End-to-end business intelligence projects emphasizing dimensional data modeling, centralized DAX calculations, and clean analytical delivery.
      </p>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Project 1: UK Train Rides (Featured Full-Width Card) */}
        <div className="lg:col-span-3 rounded-2xl border border-rule bg-gradient-to-br from-white/[0.045] to-white/[0.015] backdrop-blur-md p-6 sm:p-8 lg:p-10 relative overflow-hidden">
          {/* Ambient Glow */}
          <div className="absolute -top-32 -right-24 w-96 h-96 rounded-full bg-white/[0.03] blur-3xl pointer-events-none" />

          <div className="relative grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-8 lg:gap-12 items-start">
            {/* Project Info */}
            <div>
              {/* Badges */}
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <span className="font-mono text-xs px-2.5 py-1 rounded-md bg-white/[0.06] text-ink border border-rule">
                  DEPI Capstone Project
                </span>
                <span className="font-mono text-xs px-2.5 py-1 rounded-md bg-white/[0.06] text-ink border border-rule">
                  Team Lead (4 Members)
                </span>
                <span className="font-mono text-xs px-2.5 py-1 rounded-md bg-white/[0.05] text-ink-muted border border-rule">
                  Power BI · DAX · Star Schema
                </span>
              </div>

              {/* Title & Description */}
              <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-ink mb-3">
                UK Train Rides Analytics Platform
              </h3>
              <p className="text-sm sm:text-base leading-relaxed text-ink-muted mb-6">
                Led a 4-member team to model and analyze 31,653 UK rail transactions (Jan–Apr 2024), building a cohesive star schema and delivering an interactive summary for tracking revenue, punctuality, and route volume.
              </p>

              {/* Key Deliverables */}
              <div className="space-y-3.5 mb-8">
                <div className="flex items-start gap-3">
                  <span className="font-mono text-xs text-ink-muted font-bold mt-1">
                    01
                  </span>
                  <p className="text-sm text-ink-muted leading-relaxed">
                    <strong className="text-ink">1 Fact + 5 Dimensions Star Schema:</strong> Modeled granular ticket transactions in <code className="font-mono text-xs text-ink">Fact_TrainRides</code> with surrogate foreign keys referencing <code className="font-mono text-xs text-ink">Dim_Date</code>, <code className="font-mono text-xs text-ink">Dim_Station</code>, <code className="font-mono text-xs text-ink">Dim_Route</code>, <code className="font-mono text-xs text-ink">Dim_Ticket</code>, and <code className="font-mono text-xs text-ink">Dim_Passenger</code>.
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <span className="font-mono text-xs text-ink-muted font-bold mt-1">
                    02
                  </span>
                  <p className="text-sm text-ink-muted leading-relaxed">
                    <strong className="text-ink">Centralized DAX Measure Layer:</strong> Standardized core business calculations including Total Revenue, On-Time Journey %, and Revenue LY to eliminate measure divergence across report pages.
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <span className="font-mono text-xs text-ink-muted font-bold mt-1">
                    03
                  </span>
                  <p className="text-sm text-ink-muted leading-relaxed">
                    <strong className="text-ink">Team Coordination &amp; Quality Review:</strong> Guided 4 teammates through data modeling best practices, shared measure repositories, and unified visual styling for our final DEPI presentation.
                  </p>
                </div>
              </div>

              {/* GitHub Link */}
              <a
                href="https://github.com/Eyad-Ahmed-Kamal/UK-Train-Rides-Analysis"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-ink-muted hover:text-ink transition-colors"
              >
                <span>Inspect Repository &amp; Documentation</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>

            {/* Interactive Schema / DAX Explorer */}
            <div>
              {/* Tab Switcher */}
              <div className="inline-flex p-1 rounded-xl border border-rule bg-ground/60 mb-4">
                <button
                  onClick={() => setActiveTab("schema")}
                  className={`flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-semibold transition-all ${
                    activeTab === "schema"
                      ? "bg-white/10 border border-rule-strong text-ink shadow-sm"
                      : "text-ink-muted hover:text-ink border border-transparent"
                  }`}
                >
                  <Database className="w-3.5 h-3.5" />
                  <span>Star Schema View</span>
                </button>

                <button
                  onClick={() => setActiveTab("dax")}
                  className={`flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-semibold transition-all ${
                    activeTab === "dax"
                      ? "bg-white/10 border border-rule-strong text-ink shadow-sm"
                      : "text-ink-muted hover:text-ink border border-transparent"
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
                    className="rounded-xl border border-rule bg-ground/70 p-4 sm:p-5"
                  >
                    <div className="overflow-x-auto -mx-1 px-1 sm:mx-0 sm:px-0">
                      <div className="min-w-[310px] grid grid-cols-3 gap-2 sm:gap-2.5 mb-4">
                        <div className="p-2 sm:p-2.5 rounded-lg border border-rule bg-white/[0.02] font-mono text-[10px] sm:text-[11px] text-ink-muted">
                          <span className="text-ink font-semibold">Dim_Date</span>
                          <div className="text-[9px] sm:text-[10px] text-ink-muted mt-0.5">date_key (PK)</div>
                        </div>
                        <div className="p-2 sm:p-2.5 rounded-lg border border-rule bg-white/[0.02] font-mono text-[10px] sm:text-[11px] text-ink-muted">
                          <span className="text-ink font-semibold">Dim_Station</span>
                          <div className="text-[9px] sm:text-[10px] text-ink-muted mt-0.5">station_key (PK)</div>
                        </div>
                        <div className="p-2 sm:p-2.5 rounded-lg border border-rule bg-white/[0.02] font-mono text-[10px] sm:text-[11px] text-ink-muted">
                          <span className="text-ink font-semibold">Dim_Route</span>
                          <div className="text-[9px] sm:text-[10px] text-ink-muted mt-0.5">route_key (PK)</div>
                        </div>

                        <div className="p-2 sm:p-2.5 rounded-lg border border-rule bg-white/[0.02] font-mono text-[10px] sm:text-[11px] text-ink-muted self-center">
                          <span className="text-ink font-semibold">Dim_Ticket</span>
                          <div className="text-[9px] sm:text-[10px] text-ink-muted mt-0.5">ticket_key (PK)</div>
                        </div>

                        {/* Central Fact */}
                        <div className="p-2.5 sm:p-3.5 rounded-xl border border-rule-strong bg-white/[0.06] text-center ">
                          <div className="font-mono text-[11px] sm:text-xs font-bold text-ink">
                            Fact_TrainRides
                          </div>
                          <div className="font-mono text-[9px] sm:text-[10px] text-ink mt-0.5 sm:mt-1">
                            31,653 rows
                          </div>
                          <div className="font-mono text-[8.5px] sm:text-[9px] text-ink-muted mt-0.5">
                            grain: 1 ticket
                          </div>
                        </div>

                        <div className="p-2 sm:p-2.5 rounded-lg border border-rule bg-white/[0.02] font-mono text-[10px] sm:text-[11px] text-ink-muted self-center">
                          <span className="text-ink font-semibold">Dim_Passenger</span>
                          <div className="text-[9px] sm:text-[10px] text-ink-muted mt-0.5">passenger_key (PK)</div>
                        </div>
                      </div>
                    </div>

                    <div className="pt-3 border-t border-rule text-xs text-ink-muted leading-relaxed">
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
                    className="rounded-xl border border-rule bg-ground/70 p-4 sm:p-5 font-mono text-xs leading-relaxed space-y-3 overflow-x-auto"
                  >
                    <div>
                      <span className="text-ink-muted font-semibold">Total Revenue</span>{" "}
                      <span className="text-white/40">=</span>
                      <div className="pl-4 text-ink-muted">SUM( Fact_TrainRides[Price] )</div>
                    </div>

                    <div>
                      <span className="text-ink-muted font-semibold">On-Time Rate %</span>{" "}
                      <span className="text-white/40">=</span>
                      <div className="pl-4 text-ink-muted">
                        DIVIDE( [On-Time Journeys], [Total Journeys], 0 )
                      </div>
                    </div>

                    <div>
                      <span className="text-ink-muted font-semibold">Revenue LY</span>{" "}
                      <span className="text-white/40">=</span>
                      <div className="pl-4 text-ink-muted">
                        CALCULATE( [Total Revenue], SAMEPERIODLASTYEAR( Dim_Date[Date] ) )
                      </div>
                    </div>

                    <div>
                      <span className="text-ink-muted font-semibold">Avg Ticket Price</span>{" "}
                      <span className="text-white/40">=</span>
                      <div className="pl-4 text-ink-muted">
                        DIVIDE( [Total Revenue], [Total Journeys], 0 )
                      </div>
                    </div>

                    <div className="pt-3 border-t border-rule font-sans text-xs text-ink-muted">
                      One centralized measure layer, consistently formulated — eliminating data discrepancies across all pages.
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Report pages */}
          <div className="relative mt-8 pt-8 border-t border-rule">
            <div className="flex items-center gap-2 font-mono text-xs text-ink-muted uppercase tracking-wider mb-4">
              <Layers className="w-3.5 h-3.5 text-ink-muted" />
              <span>Report pages</span>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-4">
              {reportPages.map((page, i) => (
                <motion.button
                  type="button"
                  key={page.src}
                  onClick={() => setGalleryIndex(i)}
                  aria-label={`Enlarge the ${page.title} report page`}
                  className="group text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-data-strong rounded-xl"
                  whileHover={{ y: -4 }}
                  whileTap={{ scale: 0.985 }}
                  transition={{ duration: 0.18, ease: [0.4, 0, 0.2, 1] }}
                >
                  <div className="relative rounded-xl overflow-hidden border border-rule bg-ground transition-colors group-hover:border-rule-strong">
                    <Image
                      src={page.src}
                      alt={page.alt}
                      width={page.width}
                      height={page.height}
                      sizes="(max-width: 640px) 100vw, 25vw"
                      className="w-full h-auto transition-transform duration-500 group-hover:scale-[1.04]"
                    />
                    <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ground/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <span className="mt-2.5 block font-mono text-[11px] text-ink-muted group-hover:text-ink transition-colors">
                    {page.title}
                  </span>
                </motion.button>
              ))}
            </div>
          </div>

          <Lightbox
            images={reportPages}
            index={galleryIndex}
            onClose={() => setGalleryIndex(null)}
            onNavigate={setGalleryIndex}
          />
        </div>

        {/* Project 2: BMW Sales BI Dashboard (2 Columns) */}
        <div className="lg:col-span-2 rounded-2xl border border-rule bg-gradient-to-br from-white/[0.045] to-white/[0.015] backdrop-blur-md p-6 sm:p-8">
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="font-mono text-xs px-2.5 py-1 rounded-md bg-white/[0.06] text-ink border border-rule">
              Practice Dataset Project
            </span>
            <span className="font-mono text-xs px-2.5 py-1 rounded-md bg-white/[0.06] text-ink border border-rule">
              Dimensional Modeling
            </span>
            <span className="font-mono text-xs px-2.5 py-1 rounded-md bg-white/[0.05] text-ink-muted border border-rule">
              YoY Time Intelligence
            </span>
          </div>

          <h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-ink mb-3">
            BMW Sales BI Dashboard
          </h3>
          <p className="text-sm sm:text-base leading-relaxed text-ink-muted mb-6">
            A comprehensive sales intelligence dashboard built on a BMW training dataset to practice multi-axis dimensional modeling, time-intelligence DAX calculations (YoY, YTD), and hierarchical drill-through views.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="p-3.5 rounded-xl border border-rule bg-ground/40">
              <div className="font-mono text-xs text-ink-muted font-semibold">Geography</div>
              <div className="text-xs text-ink-muted mt-1.5">Regional revenue breakdown &amp; country mix</div>
            </div>
            <div className="p-3.5 rounded-xl border border-rule bg-ground/40">
              <div className="font-mono text-xs text-ink-muted font-semibold">Vehicle Series</div>
              <div className="text-xs text-ink-muted mt-1.5">Volume, price bands &amp; model drill-through</div>
            </div>
            <div className="p-3.5 rounded-xl border border-rule bg-ground/40">
              <div className="font-mono text-xs text-ink-muted font-semibold">Sales Channel</div>
              <div className="text-xs text-ink-muted mt-1.5">Dealer network vs. direct performance</div>
            </div>
            <div className="p-3.5 rounded-xl border border-rule bg-ground/40">
              <div className="font-mono text-xs text-ink-muted font-semibold">Time Intelligence</div>
              <div className="text-xs text-ink-muted mt-1.5">YoY growth, YTD pacing &amp; monthly trends</div>
            </div>
          </div>
        </div>

        {/* Engineering Approach (1 Column) */}
        <div className="rounded-2xl border border-rule bg-gradient-to-br from-white/[0.04] to-white/[0.015] backdrop-blur-md p-6 sm:p-8 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-ink-muted uppercase tracking-wider mb-4">
              <Layers className="w-3.5 h-3.5" />
              <span>Engineering Approach</span>
            </div>
            <p className="text-sm sm:text-base leading-relaxed text-ink-muted">
              Data modeling before visuals. Defining table grain clearly, using surrogate keys, and centralizing DAX measures ensures fast query performance, clean relationships, and reliable metrics.
            </p>
          </div>

          <div className="pt-6 border-t border-rule font-mono text-xs space-y-2.5">
            <div className="flex justify-between items-center text-ink-muted">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-ink-muted" />
                <span>Grain</span>
              </span>
              <span className="text-ink font-semibold">Explicitly Declared</span>
            </div>
            <div className="flex justify-between items-center text-ink-muted">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-ink-muted" />
                <span>Keys</span>
              </span>
              <span className="text-ink font-semibold">Surrogate 1-to-Many</span>
            </div>
            <div className="flex justify-between items-center text-ink-muted">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-ink-muted" />
                <span>Measures</span>
              </span>
              <span className="text-ink font-semibold">Central DAX Layer</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
