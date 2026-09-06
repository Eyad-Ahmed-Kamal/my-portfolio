"use client";

import { useState } from "react";
import { Download, ExternalLink, Eye, X, FileText } from "lucide-react";

interface CvModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CvModal({ isOpen, onClose }: CvModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-4xl h-[85vh] bg-[#0F141F] border border-white/15 rounded-2xl shadow-2xl flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#0B0F17]/80">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-cyan-400/10 border border-cyan-400/30 flex items-center justify-center text-cyan-400">
              <FileText className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm font-semibold text-[#E8EDF5]">
                Eyad Ahmed Kamal Mostafa — Resume
              </h3>
              <p className="text-xs text-[#8E9AAE] font-mono">
                Official 1-Page ATS Resume · PDF
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href="/cv.pdf"
              download="Eyad_Ahmed_Kamal_Resume.pdf"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg border border-emerald-400/30 bg-emerald-400/10 text-emerald-300 text-xs font-medium hover:bg-emerald-400/20 hover:border-emerald-400/50 transition-all"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download</span>
            </a>

            <a
              href="/cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg border border-white/10 bg-white/[0.04] text-[#E8EDF5] text-xs font-medium hover:bg-white/[0.08] transition-all"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">New Tab</span>
            </a>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg border border-white/10 text-[#8E9AAE] hover:text-white hover:bg-white/[0.06] transition-all ml-2"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Embedded PDF Viewer */}
        <div className="flex-1 w-full bg-[#0B0F17] relative">
          <iframe
            src="/cv.pdf#toolbar=0&navpanes=0"
            className="w-full h-full border-none"
            title="Eyad Ahmed Resume"
          />
        </div>
      </div>
    </div>
  );
}
