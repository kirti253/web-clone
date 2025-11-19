import Header from '@/components/header'
import Footer from '@/components/footer'
import CareerHero from '@/components/career-hero'
import CareersContent from '@/components/careers-content'
import JobPostings from '@/components/job-postings'
import CoffeeMessage from '@/components/coffee-message'

export default function CareerPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <CareerHero />
      <CareersContent />
      <JobPostings />
      <CoffeeMessage />
      <Footer />
    </div>
  )
}
