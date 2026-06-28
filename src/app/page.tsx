'use client'

import { Navigation } from '@/components/navigation/Navigation'
import { HeroSection } from '@/components/home/HeroSection'
import { ServicesSection } from '@/components/home/ServicesSection'
import { SecuritySection } from '@/components/home/SecuritySection'
import { WhyChooseUsSection } from '@/components/home/WhyChooseUsSection'
import { TestimonialsSection } from '@/components/home/TestimonialsSection'
import { InsightsSection } from '@/components/home/InsightsSection'
import { FAQSection } from '@/components/home/FAQSection'
import { Footer } from '@/components/home/Footer'

export default function Home() {
  return (
    <>
      <Navigation />
      <HeroSection />
      <ServicesSection />
      <WhyChooseUsSection />
      <SecuritySection />
      <TestimonialsSection />
      <InsightsSection />
      <FAQSection />
      <Footer />
    </>
  )
}
