export default function ClientsList() {
  const clients = [
    { name: "APAR", logo: "/apar-logo.jpg" },
    { name: "Fidelis", logo: "/fidelis-logo.jpg" },
    { name: "DRC Technology", logo: "/drc-technology-logo.jpg" },
    { name: "Accenture", logo: "/accenture-logo.jpg" },
    { name: "Infosys BPM", logo: "/infosys-bpm-logo.jpg" },
    { name: "Infosys", logo: "/infosys-logo.png" },
    { name: "Capgemini", logo: "/capgemini-logo.jpg" },
    { name: "Coforge", logo: "/coforge-logo.jpg" },
    { name: "HFCL", logo: "/hfcl-logo.jpg" },
    { name: "XYC Technology", logo: "/xyc-technology-logo.jpg" },
  ];

  return (
    <section className="py-6 sm:py-10 md:py-14 px-3 sm:px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-3 sm:mb-4 text-transparent bg-clip-text bg-gradient-to-r from-gray-300 to-gray-400">
          CLIENTS
        </h2>

        <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-600 text-center mb-6 sm:mb-10 md:mb-14 max-w-3xl mx-auto leading-relaxed">
          Our happy clients are our testimonials; we depend on their feedback
          and advice. We don't shy away in taking their product suggestions and
          work if required. We are humbled to be associated with the best of
          clients in the world and been able to justify their requirements
          successfully.
        </p>

        {/* Clients logos grid */}
        <div className="bg-brand-gradient p-3 sm:p-5 md:p-8 rounded-lg flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-5 lg:gap-6 items-center shadow-brand text-white">
          {clients.map((client, index) => (
            <div
              key={index}
              className="bg-white p-1.5 sm:p-2 md:p-3 lg:p-4 rounded flex items-center justify-center h-14 sm:h-16 md:h-20 w-16 sm:w-20 md:w-24 lg:w-28"
            >
              <img
                src={client.logo || "/placeholder.svg"}
                alt={client.name}
                className="h-8 sm:h-9 md:h-11 lg:h-12 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
