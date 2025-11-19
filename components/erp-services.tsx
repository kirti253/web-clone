export default function ERPServices() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-300 tracking-wider">SOLUTIONS</h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - ERP Image */}
          <div className="flex justify-center">
            <img 
              src="/erp-system-diagram-with-enterprise-resource-planni.jpg"
              alt="ERP Solutions"
              className="max-w-md w-full rounded-lg shadow-lg"
            />
          </div>

          {/* Right side - ERP Details */}
          <div>
            <h3 className="text-4xl font-bold text-red-600 mb-6">ERP Services</h3>
            <p className="text-gray-700 text-lg leading-relaxed mb-8">
              Successful ERP implementation balances effectively on the automation and transformation processes within unique business systems, requirements, abilities, process, and a robust organizational structure. To ensure operations, ERP support and maintenance is mandatory; hence our professional team conduct training and provide updates and maintenance services to keep your ERP system implementation running without any concerns.
            </p>
            <button className="bg-red-600 text-white px-8 py-3 rounded font-semibold hover:bg-red-700 transition">
              Know More
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
