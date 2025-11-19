import { Briefcase, Target, Zap } from 'lucide-react'

export default function WhyChooseUsSection() {
  const reasons = [
    {
      icon: <Briefcase size={40} className="text-red-600 mb-3" />,
      title: 'Executive Search',
      description: 'We will provide you with top-level Executive Search & selection services in a short period of the best outcomes.'
    },
    {
      icon: <Target size={40} className="text-red-600 mb-3" />,
      title: 'Head Hunting',
      description: 'Our experts will ensure you suitable candidates for niche skills companies.'
    },
    {
      icon: <Zap size={40} className="text-red-600 mb-3" />,
      title: 'Sound strategies',
      description: 'Strategic planning for long-term business success'
    },
    {
      icon: <Briefcase size={40} className="text-red-600 mb-3" />,
      title: 'Highly skilled',
      description: 'Our highly experience to the table and recruitment at all levels.'
    }
  ]

  return (
    <section className="py-16 md:py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <p className="text-red-600 font-semibold mb-2">WHY US</p>
          <h2 className="text-4xl font-bold">
            Why <span className="text-red-600">Choose Us</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {reasons.map((reason, index) => (
            <div key={index} className="flex gap-6">
              <div className="flex-shrink-0">{reason.icon}</div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">{reason.title}</h3>
                <p className="text-gray-600 leading-relaxed">{reason.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
