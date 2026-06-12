import React from "react";
import Navbar from "@/components/landing/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import ProductModesSection from "@/components/landing/ProductModesSection";
import ProblemSection from "@/components/landing/ProblemSection";
import HowItWorksSection from "@/components/landing/HowItWorksSection";
import FeaturesSection from "@/components/landing/FeaturesSection";
import AIInsightsSection from "@/components/landing/AIInsightsSection";
import ExportSection from "@/components/landing/ExportSection";
import WhoSection from "@/components/landing/WhoSection";
import TrustSection from "@/components/landing/TrustSection";
import FinalCTASection from "@/components/landing/FinalCTASection";
import Footer from "@/components/landing/Footer";

export default function Landing() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#F8FAF7" }}>
      <Navbar />
      <HeroSection />
      <ProductModesSection />
      <ProblemSection />
      <HowItWorksSection />
      <FeaturesSection />
      <AIInsightsSection />
      <ExportSection />
      <WhoSection />
      <TrustSection />
      <FinalCTASection />
      <Footer />
    </div>
  );
}
