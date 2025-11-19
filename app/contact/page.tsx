import Header from '@/components/header'
import Footer from '@/components/footer'
import ContactHero from '@/components/contact-hero'
import ContactForm from '@/components/contact-form'
import ContactInfo from '@/components/contact-info'

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <ContactHero />
        <div className="py-12 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 mb-16">
              <ContactForm />
              <ContactInfo />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
