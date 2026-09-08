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
      <div className="relative rounded-3xl border border-rule bg-gradient-to-br from-white/[0.05] via-white/[0.02] to-white/[0.015] p-8 sm:p-12 lg:p-16 overflow-hidden">
        {/* Glow ambient circle */}
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full bg-white/[0.04] blur-3xl pointer-events-none" />

        <div className="relative grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-10 items-center">
          {/* Left: Message */}
          <div>
            <div className="inline-flex items-center gap-2 font-mono text-xs text-ink-muted font-semibold mb-4">
              <span className="w-2 h-2 rounded-full bg-data-strong animate-pulse-dot" />
              <span>Open to Internship Opportunities</span>
            </div>

            <h3 className="font-display text-4xl sm:text-5xl leading-[1.06] tracking-[-0.015em] text-ink mb-4">
              Open to AI, ML, and data internships.
            </h3>

            <p className="text-base text-ink-muted leading-relaxed max-w-md">
              Second-year AI &amp; Data Science student with a working foundation in data modeling and algorithms. Looking for a team where I can learn quickly and pull my weight.
            </p>
          </div>

          {/* Right: Actions */}
          <div className="space-y-4">
            {/* Copy Email Button */}
            <button
              onClick={handleCopy}
              className={`w-full flex items-center justify-between gap-4 p-4 sm:p-5 rounded-xl border text-left transition-all ${
                copied
                  ? "border-rule-strong bg-white/10 text-ink"
                  : "border-rule bg-ground/70 text-ink hover:border-ink hover:bg-ground"
              }`}
            >
              <div className="flex items-center gap-3 overflow-hidden">
                <Mail className={`w-4 h-4 shrink-0 ${copied ? "text-ink-muted" : "text-ink-muted"}`} />
                <span className="font-mono text-xs sm:text-sm truncate">
                  {email}
                </span>
              </div>
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-md bg-white/10 shrink-0">
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-ink-muted" />
                    <span>Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-ink-muted" />
                    <span>Copy</span>
                  </>
                )}
              </span>
            </button>

            {/* Social & Resume Links */}
            <div className="grid grid-cols-3 gap-3">
              <a
                href="https://github.com/Eyad-Ahmed-Kamal"
                aria-label="GitHub profile"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 p-3.5 rounded-xl border border-rule bg-white/[0.03] text-sm font-semibold text-ink hover:bg-white/[0.08] hover:border-rule-strong transition-all text-center"
              >
                <Github className="w-4 h-4" />
                <span className="hidden sm:inline">GitHub</span>
              </a>

              <a
                href="https://linkedin.com/in/eyad-ahmed-76ai"
                aria-label="LinkedIn profile"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 p-3.5 rounded-xl border border-rule bg-white/[0.03] text-sm font-semibold text-ink hover:bg-white/[0.08] hover:border-rule-strong transition-all text-center"
              >
                <Linkedin className="w-4 h-4" />
                <span className="hidden sm:inline">LinkedIn</span>
              </a>

              <a
                href="/cv.pdf"
                aria-label="Download CV (PDF)"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 p-3.5 rounded-xl border border-rule bg-white/[0.06] text-sm font-semibold text-ink hover:bg-white/10 hover:border-ink transition-all text-center"
              >
                <Download className="w-4 h-4" />
                <span className="hidden sm:inline">CV</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Subfooter */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 py-10 font-mono text-xs text-ink-muted border-t border-rule mt-12">
        <div className="flex items-center gap-2">
          <span>Eyad Ahmed Kamal Mostafa</span>
          <span className="opacity-30">·</span>
          <span>AI &amp; Data Science Student</span>
        </div>
        <div>
          <span>Zagazig, Egypt · 2026</span>
        </div>
      </div>
    </footer>
  );
}
