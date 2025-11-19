export default function ClientsList() {
  const clients = [
    { name: 'APAR', logo: '/apar-logo.jpg' },
    { name: 'Fidelis', logo: '/fidelis-logo.jpg' },
    { name: 'DRC Technology', logo: '/drc-technology-logo.jpg' },
    { name: 'Accenture', logo: '/accenture-logo.jpg' },
    { name: 'Infosys BPM', logo: '/infosys-bpm-logo.jpg' },
    { name: 'Infosys', logo: '/infosys-logo.png' },
    { name: 'Capgemini', logo: '/capgemini-logo.jpg' },
    { name: 'Coforge', logo: '/coforge-logo.jpg' },
    { name: 'HFCL', logo: '/hfcl-logo.jpg' },
    { name: 'XYC Technology', logo: '/xyc-technology-logo.jpg' },
  ]

  return (
    <section className="py-12 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-2 text-transparent bg-clip-text bg-gradient-to-r from-gray-300 to-gray-400">
          CLIENTS
        </h2>
        
        <p className="text-gray-600 text-center mb-12 max-w-3xl mx-auto leading-relaxed">
          Our happy clients are our testimonials; we depend on their feedback and advice. We don't shy away in taking their product suggestions and work if required. We are humbled to be associated with the best of clients in the world and been able to justify their requirements successfully.
        </p>

        {/* Clients logos grid */}
        <div className="bg-cyan-400 p-8 rounded-lg flex flex-wrap justify-center gap-6 items-center">
          {clients.map((client, index) => (
            <div key={index} className="bg-white p-4 rounded flex items-center justify-center h-20">
              <img 
                src={client.logo || "/placeholder.svg"} 
                alt={client.name}
                className="h-12 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
