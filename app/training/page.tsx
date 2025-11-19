import Header from '@/components/header'
import Footer from '@/components/footer'
import TrainingHero from '@/components/training-hero'
import RecruitmentTraining from '@/components/recruitment-training'
import CorporateTraining from '@/components/corporate-training'
import ProfessionalTraining from '@/components/professional-training'

export default function TrainingPage() {
  return (
    <div>
      <Header />
      <TrainingHero />
      <RecruitmentTraining />
      <CorporateTraining />
      <ProfessionalTraining />
      <Footer />
    </div>
  )
}
