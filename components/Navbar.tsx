"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Download, Menu, X } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "Case Studies", href: "#work" },
    { label: "Competitive", href: "#rigor" },
    { label: "Experience", href: "#experience" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-xl bg-[#0B0F17]/80 border-b border-white/[0.08] transition-all">
      <div className="max-w-[1200px] mx-auto px-6 py-4 flex items-center justify-between">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-8 h-8 rounded-lg border border-cyan-400/40 flex items-center justify-center font-mono text-sm font-bold text-cyan-400 bg-cyan-400/10 group-hover:border-cyan-300 group-hover:bg-cyan-400/20 transition-all">
            E
          </div>
          <div className="flex items-baseline gap-2">
            <span className="font-semibold text-sm tracking-tight text-[#E8EDF5]">
              Eyad Ahmed
            </span>
            <span className="font-mono text-xs text-[#8E9AAE] hidden sm:inline">
              / BI &amp; Data
            </span>
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-7 text-sm text-[#8E9AAE]">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-[#E8EDF5] transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="/cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            download="Eyad_Ahmed_Kamal_Resume.pdf"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg border border-cyan-400/30 bg-cyan-400/10 text-cyan-300 text-xs font-medium hover:bg-cyan-400/20 hover:border-cyan-400/50 transition-all"
          >
            <Download className="w-3.5 h-3.5" />
            Resume
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center gap-3">
          <a
            href="/cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            download="Eyad_Ahmed_Kamal_Resume.pdf"
            className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md border border-cyan-400/30 bg-cyan-400/10 text-cyan-300 text-xs font-medium"
          >
            <Download className="w-3 h-3" />
            CV
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 rounded-lg border border-white/10 text-neutral-400 hover:text-white"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden border-t border-white/[0.08] bg-[#0B0F17]/95 px-6 py-4 flex flex-col gap-3 overflow-hidden"
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm text-[#8E9AAE] hover:text-[#E8EDF5] py-1"
              >
                {link.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
