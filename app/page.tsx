'use client';

import { motion } from 'framer-motion';
import { HeroSection } from '@/components/home/hero-section';
import { DashboardPreview } from '@/components/home/dashboard-preview';
import { FeaturesSection } from '@/components/home/features-section';
import { LogosSection } from '@/components/home/logos-section';
import { TestimonialsSection } from '@/components/home/testimonials-section';
import { PricingSection } from '@/components/home/pricing-section';
import { CTASection } from '@/components/home/cta-section';

export default function HomePage() {
  return (
    <div className="relative">
      {/* Background Effects */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <HeroSection />
        <DashboardPreview />
        <FeaturesSection />
        <LogosSection />
        <TestimonialsSection />
        <PricingSection />
        <CTASection />
      </motion.div>
    </div>
  );
}