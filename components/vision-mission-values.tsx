export default function VisionMissionValues() {
  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Column */}
          <div className="space-y-8">
            {/* Vision */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <h3 className="text-2xl font-bold">Our <span className="text-red-600">Vision</span></h3>
                <span className="text-4xl">👁️</span>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Adore Technosoft want to become the global leader in providing the best recruitment solutions, services and training in the world with excellence
              </p>
            </div>

            {/* Mission */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <h3 className="text-2xl font-bold">Our <span className="text-red-600">Mission</span></h3>
                <span className="text-4xl">🎯</span>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Adore Technosoft want to become the global leader in providing the best recruitment solutions, services and training in the world with excellence
              </p>
            </div>

            {/* Values */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <h3 className="text-2xl font-bold">Our <span className="text-red-600">values</span></h3>
                <span className="text-4xl">⚙️</span>
              </div>
              <p className="text-gray-700 mb-4">We "Adore"</p>
              <p className="text-gray-700 leading-relaxed">
                <strong>A</strong> : Ambitious : Our leadership team strives to build a company
              </p>
              <button className="mt-6 bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700 transition">
                Know More
              </button>
            </div>
          </div>

          {/* Right Column - Images */}
          <div className="space-y-4">
            <div className="h-48 bg-gray-200 rounded overflow-hidden">
              <img src="/business-team-professionals-silhouette.jpg" alt="Team" className="w-full h-full object-cover" />
            </div>
            <div className="h-48 bg-gray-200 rounded overflow-hidden">
              <img src="/diverse-business-professionals-silhouette.jpg" alt="Diverse Team" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
