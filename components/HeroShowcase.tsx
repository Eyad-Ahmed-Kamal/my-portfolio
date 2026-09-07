"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { Maximize2 } from "lucide-react";
import Lightbox from "@/components/Lightbox";
import { reportPages } from "@/lib/reportPages";
import { motionTokens } from "@/lib/motion";

export default function HeroShowcase() {
  const ref = useRef<HTMLElement>(null);
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const reduce = useReducedMotion();

  // Gentle scroll-linked drift — transform only, no layout cost.
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [26, -26]);

  const HERO_INDEX = 1; // Executive Summary
  const cover = reportPages[HERO_INDEX];

  return (
    <motion.figure
      ref={ref}
      className="relative mt-14 md:mt-16"
      initial={{ opacity: 0, y: reduce ? 0 : 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, ease: motionTokens.easing.smooth, delay: 0.1 }}
    >
      <motion.div style={{ y }}>
        <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-cyan-500/20 via-teal-500/10 to-emerald-500/15 blur-2xl opacity-70 pointer-events-none" />

        <motion.button
          type="button"
          onClick={() => setOpenIndex(HERO_INDEX)}
          aria-label="Enlarge the Executive Summary report page"
          className="group relative block w-full rounded-2xl overflow-hidden border border-white/15 bg-[#0F141F] shadow-[0_30px_70px_-20px_rgba(0,0,0,0.85)] cursor-zoom-in focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
          whileHover={reduce ? undefined : { scale: 1.008, y: -4 }}
          whileTap={reduce ? undefined : { scale: 0.995 }}
          transition={{ duration: motionTokens.duration.fast, ease: motionTokens.easing.sharp }}
        >
          <Image
            src={cover.src}
            alt={cover.alt}
            width={cover.width}
            height={cover.height}
            priority
            sizes="(max-width: 768px) 100vw, 1200px"
            className="w-full h-auto"
          />

          {/* Hover affordance */}
          <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#05080E]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <span className="pointer-events-none absolute bottom-4 right-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-white/20 bg-[#0B0F17]/85 text-[#E8EDF5] text-xs font-medium opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
            <Maximize2 className="w-3.5 h-3.5 text-cyan-400" />
            View full size
          </span>
        </motion.button>
      </motion.div>

      <figcaption className="mt-4 font-mono text-xs text-[#8E9AAE] flex flex-wrap items-center gap-x-2 gap-y-1">
        <span className="text-cyan-400">UK Train Rides Analysis</span>
        <span className="opacity-30">·</span>
        <span>Executive Summary page</span>
        <span className="opacity-30">·</span>
        <span>Power BI over 31,653 rail transactions</span>
      </figcaption>

      <Lightbox
        images={reportPages}
        index={openIndex}
        onClose={() => setOpenIndex(null)}
        onNavigate={setOpenIndex}
      />
    </motion.figure>
  );
}
