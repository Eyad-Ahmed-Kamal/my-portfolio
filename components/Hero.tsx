import Image from "next/image";
import HeroShowcase from "@/components/HeroShowcase";
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative pt-16 pb-16 md:pt-24 md:pb-20">
      <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_300px] gap-10 lg:gap-16 items-center">
        {/* Pitch */}
        <div>
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

        {/* Portrait — source is 2048x2048, so a square frame keeps it undistorted */}
        <figure className="relative mx-auto w-full max-w-[300px] lg:max-w-none">
          <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-cyan-500/18 via-teal-500/10 to-emerald-500/14 blur-2xl opacity-70 pointer-events-none" />
          <div className="relative aspect-square rounded-2xl overflow-hidden border border-white/12 bg-[#0B0F17] shadow-[0_24px_60px_-24px_rgba(0,0,0,0.9)]">
            <Image
              src="/uploads/eyad-portrait.jpg"
              alt="Portrait of Eyad Ahmed Kamal Mostafa, rim-lit profile silhouette"
              width={1000}
              height={1000}
              priority
              sizes="(max-width: 1024px) 300px, 300px"
              className="w-full h-full object-cover"
            />
          </div>
          <figcaption className="mt-3 text-center lg:text-left font-mono text-[11px] text-[#8E9AAE]">
            Eyad Ahmed Kamal Mostafa · Zagazig, EG
          </figcaption>
        </figure>
      </div>

      <HeroShowcase />
    </section>
  );
}
