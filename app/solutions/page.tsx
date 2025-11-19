import Header from '@/components/header'
import SolutionsHero from '@/components/solutions-hero'
import ERPServices from '@/components/erp-services'
import TechnologySolutions from '@/components/technology-solutions'
import SoftwareDevelopment from '@/components/software-development'
import Footer from '@/components/footer'

export const metadata = {
  title: 'Solutions - Adore Technosoft',
  description: 'Explore our ERP solutions, technology implementations, and software development services.',
}

export default function Solutions() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <SolutionsHero />
      <ERPServices />
      <TechnologySolutions />
      <SoftwareDevelopment />
      <Footer />
    </main>
  )
}
