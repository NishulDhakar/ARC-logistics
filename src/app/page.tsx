"use client";

import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { StatsStrip } from "@/components/StatsStrip";
import { Services } from "@/components/Services";
import { TechSection } from "@/components/TechSection";
import { Testimonials } from "@/components/Testimonials";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { Clients } from "@/components/Clients";
import { Sustainability } from "@/components/Sustainability";
import { FuturePlans } from "@/components/FuturePlans";
import { AssociatedCompanies } from "@/components/AssociatedCompanies";
import { Footer } from "@/components/Footer";
import { ScrollToTop } from "@/components/ScrollToTop";
import { motion, useScroll, useSpring } from "framer-motion";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 70,
    damping: 20,
    restDelta: 0.001
  });

  return (
    <main className="relative min-h-screen bg-white overflow-x-hidden selection:bg-brand-orange selection:text-white">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-brand-orange z-[100] origin-left"
        style={{ scaleX }}
      />

      <Navbar />

      <Hero />

      <StatsStrip />

      <Services />

      <WhyChooseUs />

      <TechSection />

      <Clients />

      <Sustainability />

      <FuturePlans />

      <AssociatedCompanies />

      {/* <Testimonials /> */}

      <Footer />

      <ScrollToTop />
    </main>
  );
}
