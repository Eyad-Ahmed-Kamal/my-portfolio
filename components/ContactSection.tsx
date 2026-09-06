"use client";

import { useState } from "react";
import { Copy, Check, Github, Linkedin, Download, Mail } from "lucide-react";

export default function ContactSection() {
  const [copied, setCopied] = useState(false);
  const email = "eyadahmedkamalego76@gmail.com";

  const handleCopy = async () => {
    try {
      if (typeof navigator !== "undefined" && navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(email);
      } else {
        const textArea = document.createElement("textarea");
        textArea.value = email;
        textArea.style.position = "fixed";
        textArea.style.left = "-999999px";
        textArea.style.top = "-999999px";
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        document.execCommand("copy");
        textArea.remove();
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <footer id="contact" className="scroll-mt-24">
      {/* Contact Card */}
      <div className="relative rounded-3xl border border-white/10 bg-gradient-to-br from-cyan-500/10 via-emerald-500/5 to-white/[0.015] p-8 sm:p-12 lg:p-16 overflow-hidden">
        {/* Glow ambient circle */}
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full bg-cyan-500/15 blur-3xl pointer-events-none" />

        <div className="relative grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-10 items-center">
          {/* Left: Message */}
          <div>
            <div className="inline-flex items-center gap-2 font-mono text-xs text-emerald-400 font-semibold mb-4">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse-dot" />
              <span>Open to Summer 2026 Internships</span>
            </div>

            <h3 className="text-3xl sm:text-4xl font-semibold tracking-[-0.03em] text-[#E8EDF5] leading-tight mb-4">
              Let&apos;s talk about your data model.
            </h3>

            <p className="text-base text-[#A9B4C6] leading-relaxed max-w-md">
              Whether it&apos;s architecting a clean star schema from scratch, tuning complex DAX time intelligence, or discussing AI engineering workflows.
            </p>
          </div>

          {/* Right: Actions */}
          <div className="space-y-4">
            {/* Copy Email Button */}
            <button
              onClick={handleCopy}
              className={`w-full flex items-center justify-between gap-4 p-4 sm:p-5 rounded-xl border text-left transition-all ${
                copied
                  ? "border-emerald-500/50 bg-emerald-500/15 text-emerald-300"
                  : "border-white/10 bg-[#0B0F17]/70 text-[#E8EDF5] hover:border-cyan-400/40 hover:bg-[#0B0F17]"
              }`}
            >
              <div className="flex items-center gap-3 overflow-hidden">
                <Mail className={`w-4 h-4 shrink-0 ${copied ? "text-emerald-400" : "text-cyan-400"}`} />
                <span className="font-mono text-xs sm:text-sm truncate">
                  {email}
                </span>
              </div>
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-md bg-white/10 shrink-0">
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-[#8E9AAE]" />
                    <span>Copy</span>
                  </>
                )}
              </span>
            </button>

            {/* Social & Resume Links */}
            <div className="grid grid-cols-3 gap-3">
              <a
                href="https://github.com/Eyad-Ahmed-Kamal"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 p-3.5 rounded-xl border border-white/10 bg-white/[0.03] text-sm font-semibold text-[#E8EDF5] hover:bg-white/[0.08] hover:border-white/20 transition-all text-center"
              >
                <Github className="w-4 h-4" />
                <span className="hidden sm:inline">GitHub</span>
              </a>

              <a
                href="https://linkedin.com/in/eyad-ahmed-76ai"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 p-3.5 rounded-xl border border-white/10 bg-white/[0.03] text-sm font-semibold text-[#E8EDF5] hover:bg-white/[0.08] hover:border-white/20 transition-all text-center"
              >
                <Linkedin className="w-4 h-4" />
                <span className="hidden sm:inline">LinkedIn</span>
              </a>

              <a
                href="/cv.pdf"
                download="Eyad_Ahmed_CV.pdf"
                className="flex items-center justify-center gap-2 p-3.5 rounded-xl border border-cyan-400/30 bg-cyan-400/10 text-sm font-semibold text-cyan-300 hover:bg-cyan-400/20 hover:border-cyan-400/50 transition-all text-center"
              >
                <Download className="w-4 h-4" />
                <span className="hidden sm:inline">CV</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Subfooter */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 py-10 font-mono text-xs text-[#8E9AAE] border-t border-white/[0.06] mt-12">
        <div className="flex items-center gap-2">
          <span>Eyad Ahmed Kamal Mostafa</span>
          <span className="opacity-30">·</span>
          <span>BI &amp; Star Schema Architect</span>
        </div>
        <div>
          <span>Zagazig, Egypt · 2026</span>
        </div>
      </div>
    </footer>
  );
}
