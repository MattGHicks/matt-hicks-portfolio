"use client";

import React from "react";
import FigmaNavigation from "@/components/layout/figma-navigation";
import AnimatedHero from "@/components/sections/animated-hero";
import AboutSection from "@/components/sections/about-section";
import FeaturesSection from "@/components/sections/features-section";
import PortfolioSection from "@/components/sections/portfolio-section";
import UniqueApproachSection from "@/components/sections/unique-approach-section";
import TestimonialsSection from "@/components/sections/testimonials-section";
import ContactSection from "@/components/sections/contact-section";
import Footer from "@/components/sections/footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <FigmaNavigation />
      <div className="pt-[72px]">
        <AnimatedHero />
        <AboutSection />
        <FeaturesSection />
        <PortfolioSection />
        <UniqueApproachSection />
        <TestimonialsSection />
        <ContactSection />
        <Footer />
      </div>
    </div>
  );
}
