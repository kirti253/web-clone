import Header from '@/components/header'
import Footer from '@/components/footer'
import ClientsHero from '@/components/clients-hero'
import ClientsList from '@/components/clients-list'
import ReviewsSection from '@/components/reviews-section'

export default function ClientsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <ClientsHero />
      <ClientsList />
      <ReviewsSection />
      <Footer />
    </div>
  )
}
