import Image from "next/image";
import DepartureProfile from "@/components/DepartureProfile";
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative pt-14 pb-16 md:pt-20 md:pb-20">
      <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_260px] gap-10 lg:gap-16 items-start">
        {/* Pitch */}
        <div>
          <div className="inline-flex items-center gap-2.5 mb-8 font-mono text-[11px] uppercase tracking-[0.14em] text-ink-muted">
            <span className="w-1.5 h-1.5 rounded-full bg-data-strong animate-pulse-dot" />
            <span>Open to internship opportunities</span>
          </div>

          <h1 className="font-display text-[42px] sm:text-6xl lg:text-[76px] leading-[1.04] tracking-[-0.02em] text-ink mb-7">
            I build business intelligence from the data model up.
          </h1>

          <p className="text-base sm:text-lg leading-relaxed text-ink-muted max-w-[58ch] mb-9">
            Second-year AI &amp; Data Science student at Zagazig University,
            focused on Power BI, Star Schema modeling, DAX, and algorithmic
            problem solving in C++. Looking for an internship where I can learn,
            contribute, and build reliable data models.
          </p>

          <div className="flex flex-wrap items-center gap-3 mb-9">
            <a
              href="#work"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-md bg-ink text-ground text-sm font-semibold hover:bg-white transition-colors"
            >
              <span>See the dashboards</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="/cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-md border border-rule-strong text-ink text-sm font-semibold hover:border-ink transition-colors"
            >
              <Download className="w-4 h-4 text-ink-muted" />
              <span>View &amp; Download CV</span>
            </a>
          </div>

          <div className="flex items-center gap-4 font-mono text-xs text-ink-muted">
            <a
              href="https://github.com/Eyad-Ahmed-Kamal"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-ink transition-colors"
            >
              <Github className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>
            <span className="opacity-30">·</span>
            <a
              href="https://linkedin.com/in/eyad-ahmed-76ai"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-ink transition-colors"
            >
              <Linkedin className="w-3.5 h-3.5" />
              <span>LinkedIn</span>
            </a>
            <span className="opacity-30">·</span>
            <a
              href="mailto:eyadahmedkamalego76@gmail.com"
              className="flex items-center gap-1.5 hover:text-ink transition-colors"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Email</span>
            </a>
          </div>
        </div>

        {/* Portrait — source is square, so a square frame keeps it undistorted. */}
        <figure className="relative mx-auto w-full max-w-[260px] lg:max-w-none lg:mt-2">
          <div className="relative aspect-square overflow-hidden rounded-md border border-rule bg-surface">
            <Image
              src="/uploads/eyad-portrait.jpg"
              alt="Portrait of Eyad Ahmed Kamal Mostafa, rim-lit profile silhouette"
              width={1000}
              height={1000}
              priority
              sizes="260px"
              className="w-full h-full object-cover"
            />
          </div>
          <figcaption className="mt-3 font-mono text-[11px] text-ink-muted">
            Eyad Ahmed Kamal Mostafa
            <span className="mx-1.5 opacity-40">·</span>
            Zagazig, EG
          </figcaption>
        </figure>
      </div>

      <DepartureProfile />
    </section>
  );
}
