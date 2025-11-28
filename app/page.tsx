'use client'

import { Suspense } from 'react'
import { motion } from 'framer-motion'
import Header from '@/components/header'
import Hero from '@/components/hero'
import AboutSection from '@/components/about-section'
import ServicesSection from '@/components/services-section'
import WhyChooseUsSection from '@/components/why-choose-us-section'
import Footer from '@/components/footer'

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' }
  }
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1
    }
  }
}

export default function Home() {
  return (
    <main className="min-h-screen bg-white overflow-hidden">
      <Suspense fallback={null}>
        <Header />
      </Suspense>
      
      <motion.div
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        {/* Hero Section - Immediate visibility */}
        <motion.div
          variants={fadeInUp}
          className="relative"
        >
          <Hero />
        </motion.div>

        {/* About Section - Scroll Animation */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="relative hover:shadow-lg transition-shadow duration-300"
        >
          <AboutSection />
        </motion.div>

        {/* Services Section - Scroll Animation */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="relative"
        >
          <ServicesSection />
        </motion.div>

        {/* Why Choose Us Section - Scroll Animation */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="relative"
        >
          <WhyChooseUsSection />
        </motion.div>

        {/* Footer */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeInUp}
        >
          <Footer />
        </motion.div>
      </motion.div>
    </main>
  )
}