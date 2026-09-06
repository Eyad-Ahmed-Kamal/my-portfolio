"use client";

import Image from "next/image";
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative pt-16 pb-16 md:pt-24 md:pb-20">
      <div className="grid grid-cols-1 lg:grid-cols-[1.25fr_0.75fr] gap-12 lg:gap-14 items-center">
        {/* Left Column: Pitch & Story */}
        <div>
          {/* Availability Badge */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-xs font-medium mb-7">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse-dot" />
            <span>Available for Summer 2026 Internships</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-[60px] font-semibold tracking-[-0.035em] leading-[1.05] text-[#E8EDF5] mb-6">
            I turn raw transactional data into{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400 bg-clip-text text-transparent">
              governed models
            </span>{" "}
            executives actually trust.
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg leading-relaxed text-[#8E9AAE] max-w-[620px] mb-8">
            Undergraduate in AI &amp; Data Science at Zagazig University. I design star-schema warehouses, author time-intelligence DAX, and lead analytics deliveries — backed by the algorithmic rigor of an ICPC-qualified competitive programmer.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-3.5 mb-8">
            <a
              href="#work"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl border border-cyan-400/50 bg-cyan-400/10 text-cyan-200 text-sm font-semibold hover:bg-cyan-400/20 hover:border-cyan-400 transition-all shadow-[0_0_20px_-5px_rgba(34,211,238,0.3)]"
            >
              <span>Explore Case Studies</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="/cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download="Eyad_Ahmed_Kamal_Resume.pdf"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl border border-white/10 bg-white/[0.03] text-[#E8EDF5] text-sm font-semibold hover:bg-white/[0.08] hover:border-white/20 transition-all"
            >
              <Download className="w-4 h-4 text-[#8E9AAE]" />
              <span>Download CV</span>
            </a>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4 text-xs font-mono text-[#8E9AAE]">
            <a
              href="https://github.com/Eyad-Ahmed-Kamal"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-cyan-400 transition-colors"
            >
              <Github className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>
            <span className="opacity-30">·</span>
            <a
              href="https://linkedin.com/in/eyad-ahmed-76ai"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-cyan-400 transition-colors"
            >
              <Linkedin className="w-3.5 h-3.5" />
              <span>LinkedIn</span>
            </a>
            <span className="opacity-30">·</span>
            <a
              href="mailto:eyadahmedkamalego76@gmail.com"
              className="flex items-center gap-1.5 hover:text-cyan-400 transition-colors"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Email</span>
            </a>
          </div>
        </div>

        {/* Right Column: Hero Portrait Card */}
        <div className="relative animate-float-slow max-w-md mx-auto lg:max-w-none w-full">
          {/* Ambient blur glow */}
          <div className="absolute -inset-3 rounded-3xl bg-gradient-to-tr from-cyan-500/25 via-teal-500/15 to-emerald-500/20 blur-2xl opacity-80" />

          {/* Card container */}
          <div className="relative rounded-2xl overflow-hidden border border-white/15 bg-[#0F141F] shadow-[0_30px_70px_-20px_rgba(0,0,0,0.85)]">
            <div className="relative aspect-[4/5] w-full">
              <Image
                src="/uploads/Enhance_image_quality_to_professional_202605301343.jpeg"
                alt="Eyad Ahmed Kamal Mostafa"
                fill
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 450px"
                className="object-cover object-[50%_20%] filter contrast-[1.05]"
              />
              {/* Bottom gradient mask */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F17] via-[#0B0F17]/30 to-transparent" />
            </div>

            {/* Bottom info banner */}
            <div className="absolute left-5 right-5 bottom-5">
              <div className="text-base font-semibold text-[#E8EDF5]">
                Eyad Ahmed Kamal Mostafa
              </div>
              <div className="font-mono text-xs text-cyan-400 mt-1 flex items-center gap-2">
                <span>BI &amp; Star Schema Architect</span>
                <span className="text-white/30">·</span>
                <span className="text-[#8E9AAE]">Zagazig, EG</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
