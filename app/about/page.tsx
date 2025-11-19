import Header from '@/components/header'
import Footer from '@/components/footer'
import AboutHero from '@/components/about-hero'
import WhoWeAre from '@/components/who-we-are'
import VisionMissionValues from '@/components/vision-mission-values'
import Certifications from '@/components/certifications'

export const metadata = {
  title: 'About Us - Adore Technosoft',
  description: 'Learn about Adore Technosoft, our vision, mission, and commitment to delivering IT solutions.',
}

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <AboutHero />
      <WhoWeAre />
      <VisionMissionValues />
      <Certifications />
      <Footer />
    </main>
  )
}
