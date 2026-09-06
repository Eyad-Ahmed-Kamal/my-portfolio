import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import KpiRibbon from "@/components/KpiRibbon";
import CaseStudies from "@/components/CaseStudies";
import CompetitiveSection from "@/components/CompetitiveSection";
import SkillsSection from "@/components/SkillsSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0B0F17] text-[#E8EDF5] relative overflow-hidden">
      {/* Top Left Radial Glow (Cyan) */}
      <div
        className="pointer-events-none absolute -top-[260px] -left-[180px] w-[760px] h-[760px] rounded-full blur-[30px] opacity-100"
        style={{
          background:
            "radial-gradient(circle, rgba(34, 211, 238, 0.16) 0%, transparent 66%)",
        }}
      />

      {/* Hero Right Radial Glow (Emerald) */}
      <div
        className="pointer-events-none absolute top-[420px] -right-[260px] w-[720px] h-[720px] rounded-full blur-[30px] opacity-100"
        style={{
          background:
            "radial-gradient(circle, rgba(52, 211, 153, 0.13) 0%, transparent 66%)",
        }}
      />

      {/* Mid-page Ambient Radial Glow (Cyan / Emerald accent blend) */}
      <div
        className="pointer-events-none absolute top-[1400px] -left-[200px] w-[680px] h-[680px] rounded-full blur-[40px] opacity-70"
        style={{
          background:
            "radial-gradient(circle, rgba(34, 211, 238, 0.08) 0%, transparent 68%)",
        }}
      />

      {/* Subtle 72px Architectural Grid Overlay with Radial Fade */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255, 255, 255, 0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.035) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
          maskImage:
            "radial-gradient(ellipse 90% 55% at 50% 0%, #000 70%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 90% 55% at 50% 0%, #000 70%, transparent 100%)",
        }}
      />

      {/* Sticky Top Navigation */}
      <Navbar />

      {/* Main Content Container */}
      <main className="relative max-w-[1200px] mx-auto px-6 pb-24">
        <Hero />
        <KpiRibbon />
        <CaseStudies />
        <CompetitiveSection />
        <SkillsSection />
        <ContactSection />
      </main>
    </div>
  );
}
