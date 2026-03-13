"use client"

import { Sidebar } from "@/components/gear-sec/sidebar"
import { HeroSection } from "@/components/gear-sec/hero-section"
import { ServicesSection } from "@/components/gear-sec/services-section"
import { AboutSection } from "@/components/gear-sec/about-section"
import { WhyChooseSection } from "@/components/gear-sec/why-choose-section"
import { ContactSection } from "@/components/gear-sec/contact-section"
import { Footer } from "@/components/gear-sec/footer"

export default function GearSecPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Sidebar Navigation */}
      <Sidebar />

      {/* Main Content */}
      <main className="lg:ml-56">
        <HeroSection />
        <ServicesSection />
        <AboutSection />
        <WhyChooseSection />
        <ContactSection />
        <Footer />
      </main>
    </div>
  )
}
