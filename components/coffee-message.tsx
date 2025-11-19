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
          <div className="rounded-lg overflow-hidden shadow-lg h-64 bg-gradient-to-br from-blue-200 to-cyan-200 flex items-center justify-center">
            <div className="text-6xl">☕</div>
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg h-64 bg-gradient-to-br from-cyan-200 to-blue-200 flex items-center justify-center">
            <div className="text-6xl">👥</div>
          </div>
        </div>

        {/* Contact info */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 text-lg mb-6">
            Visit our office and discuss your career opportunities over coffee with our team.
          </p>
          <button className="bg-red-600 text-white px-8 py-3 rounded hover:bg-red-700 transition text-lg">
            Schedule a Visit
          </button>
        </div>
      </div>
    </div>
  )
}
