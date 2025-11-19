import Header from '@/components/header'
import Footer from '@/components/footer'
import RecruitmentHero from '@/components/recruitment-hero'
import ExecutiveSearch from '@/components/executive-search'
import SeniorMiddleHiring from '@/components/senior-middle-hiring'
import RecruitmentServices from '@/components/recruitment-services'

export default function RecruitmentPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <RecruitmentHero />
      <ExecutiveSearch />
      <SeniorMiddleHiring />
      <RecruitmentServices />
      <Footer />
    </main>
  )
}
