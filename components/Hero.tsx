import Image from "next/image";
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative pt-16 pb-16 md:pt-24 md:pb-20">
      {/* Pitch */}
      <div className="max-w-[860px]">
        <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-xs font-medium mb-7">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse-dot" />
          <span>Open to Internship Opportunities</span>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-semibold tracking-[-0.035em] leading-[1.1] text-[#E8EDF5] mb-6">
          I build{" "}
          <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400 bg-clip-text text-transparent">
            business intelligence
          </span>{" "}
          from the data model up.
        </h1>

        <p className="text-base sm:text-lg leading-relaxed text-[#8E9AAE] max-w-[640px] mb-8">
          Second-year AI &amp; Data Science student at Zagazig University, focused on Power BI, Star Schema modeling, DAX, and algorithmic problem solving in C++. Looking for an internship where I can learn, contribute, and build reliable data models.
        </p>

        <div className="flex flex-wrap items-center gap-3.5 mb-8">
          <a
            href="#work"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl border border-cyan-400/50 bg-cyan-400/10 text-cyan-200 text-sm font-semibold hover:bg-cyan-400/20 hover:border-cyan-400 transition-all shadow-[0_0_20px_-5px_rgba(34,211,238,0.3)]"
          >
            <span>See the dashboards</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <a
            href="/cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl border border-white/10 bg-white/[0.03] text-[#E8EDF5] text-sm font-semibold hover:bg-white/[0.08] hover:border-white/20 transition-all"
          >
            <Download className="w-4 h-4 text-[#8E9AAE]" />
            <span>View &amp; Download CV</span>
          </a>
        </div>

        <div className="flex items-center gap-4 text-xs font-mono text-[#8E9AAE]">
          <a href="https://github.com/Eyad-Ahmed-Kamal" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-cyan-400 transition-colors">
            <Github className="w-3.5 h-3.5" />
            <span>GitHub</span>
          </a>
          <span className="opacity-30">·</span>
          <a href="https://linkedin.com/in/eyad-ahmed-76ai" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-cyan-400 transition-colors">
            <Linkedin className="w-3.5 h-3.5" />
            <span>LinkedIn</span>
          </a>
          <span className="opacity-30">·</span>
          <a href="mailto:eyadahmedkamalego76@gmail.com" className="flex items-center gap-1.5 hover:text-cyan-400 transition-colors">
            <Mail className="w-3.5 h-3.5" />
            <span>Email</span>
          </a>
        </div>
      </div>

      {/* Dashboard showcase - the actual work, up front */}
      <figure className="relative mt-14 md:mt-16">
        <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-cyan-500/20 via-teal-500/10 to-emerald-500/15 blur-2xl opacity-70 pointer-events-none" />

        <div className="relative rounded-2xl overflow-hidden border border-white/15 bg-[#0F141F] shadow-[0_30px_70px_-20px_rgba(0,0,0,0.85)]">
          <Image
            src="/uploads/dash-executive-summary.jpg"
            alt="Executive Summary page of the UK Train Rides Power BI report: total revenue 741.9K, 32K rides, 86.8 percent on-time, revenue trend, station map, and top stations by revenue"
            width={1600}
            height={901}
            priority
            sizes="(max-width: 768px) 100vw, 1200px"
            className="w-full h-auto"
          />
        </div>

        <figcaption className="mt-4 font-mono text-xs text-[#8E9AAE] flex flex-wrap items-center gap-x-2 gap-y-1">
          <span className="text-cyan-400">UK Train Rides Analysis</span>
          <span className="opacity-30">·</span>
          <span>Executive Summary page</span>
          <span className="opacity-30">·</span>
          <span>Power BI over 31,653 rail transactions</span>
        </figcaption>
      </figure>
    </section>
  );
}
