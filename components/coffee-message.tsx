export default function CoffeeMessage() {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">
            Pay a visit & have some coffee!
          </h2>
        </div>

        {/* Coffee images section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="rounded-lg overflow-hidden shadow-brand h-64 bg-brand-gradient flex items-center justify-center text-white">
            <div className="text-6xl">☕</div>
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg h-64 bg-brand-light flex items-center justify-center">
            <div className="text-6xl">👥</div>
          </div>
        </div>

        {/* Contact info */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 text-lg mb-6">
            Visit our office and discuss your career opportunities over coffee with our team.
          </p>
          <a href="/contact">
            <button className="bg-brand-primary text-white px-8 py-3 rounded hover:bg-brand-navy transition text-lg">
              Schedule a Visit
            </button>
          </a>
        </div>
      </div>
    </div>
  )
}
