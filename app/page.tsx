import Navbar from "@/components/Navbar";
import Reveal from "@/components/Reveal";
import ElasticGrid from "@/components/ElasticGrid";
import Hero from "@/components/Hero";
import KpiRibbon from "@/components/KpiRibbon";
import CaseStudies from "@/components/CaseStudies";
import CompetitiveSection from "@/components/CompetitiveSection";
import SkillsSection from "@/components/SkillsSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-ground text-ink relative overflow-hidden">
      {/*
        One warm lift behind the masthead, anchored to the top of the page.
        The three glows this replaces were pinned to hardcoded pixel offsets
        (top-[420px], top-[1400px]) and would have drifted to meaningless
        places the moment any section changed height.
      */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[70vh]"
        style={{
          background:
            "radial-gradient(ellipse 70% 100% at 50% 0%, rgba(245, 241, 234, 0.05) 0%, transparent 70%)",
        }}
      />

      <ElasticGrid />

      {/* Sticky Top Navigation */}
      <Navbar />

      {/* Main Content Container */}
      <main className="relative z-10 max-w-[1200px] mx-auto px-6">
        <Hero />
        <KpiRibbon />
        <Reveal>
          <CaseStudies />
        </Reveal>
        <Reveal>
          <CompetitiveSection />
        </Reveal>
        <Reveal>
          <SkillsSection />
        </Reveal>
      </main>

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 pb-24">
        <Reveal>
          <ContactSection />
        </Reveal>
      </div>
    </div>
  );
}
