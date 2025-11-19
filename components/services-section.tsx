import { Lightbulb, FileText, Users } from 'lucide-react'

export default function ServicesSection() {
  const services = [
    {
      icon: <Lightbulb size={64} className="text-gray-700 mb-4" />,
      title: 'Solutions',
      description: 'Innovative IT solutions tailored to your business needs'
    },
    {
      icon: <FileText size={64} className="text-gray-700 mb-4" />,
      title: 'Recruitment',
      description: 'Expert recruitment services for your talent needs'
    },
    {
      icon: <Users size={64} className="text-gray-700 mb-4" />,
      title: 'Training',
      description: 'Professional training programs for skill development'
    }
  ]

  return (
    <section className="py-16 md:py-24 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-16 text-center">Our Services</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="mb-6">{service.icon}</div>
              <button className="bg-red-600 text-white px-8 py-3 rounded font-semibold mb-4 hover:bg-red-700 transition">
                {service.title}
              </button>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
